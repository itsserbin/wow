<?php

namespace App\Http\Controllers;

use Exception;
use FacebookAds\Logger\CurlLogger;
use FacebookAds\Object\ServerSide\ActionSource;
use FacebookAds\Api;
use FacebookAds\Object\ServerSide\Content;
use FacebookAds\Object\ServerSide\CustomData;
use FacebookAds\Object\ServerSide\DeliveryCategory;
use FacebookAds\Object\ServerSide\Event;
use FacebookAds\Object\ServerSide\EventRequest;
use FacebookAds\Object\ServerSide\UserData;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Log;

class FacebookController extends Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->pixel_id = env('FB_PIXEL_ID');
        $this->access_token = env('FB_API');
    }

    /**
     * @throws Exception
     */
    public function view()
    {
        if (env('APP_ENV') !== 'local') {
            try {
                $api = Api::init(null, null, $this->access_token);
                $api->setLogger(new CurlLogger());

                $user_data = (new UserData())
                    ->setClientUserAgent($_SERVER['HTTP_USER_AGENT']);

                if (isset($_SERVER['HTTP_X_REAL_IP'])) {
                    $ip = $_SERVER['HTTP_X_REAL_IP'];
                    $ipData = $this->getIpData($ip);
                    $user_data->setCity($ipData['city'])
                        ->setClientIpAddress($ip);
                } else {
                    $ip = $_SERVER['REMOTE_ADDR'];
                    $user_data->setClientIpAddress($ip);
                }

                $event = (new Event())
                    ->setEventName('PageView')
                    ->setEventTime(time())
                    ->setEventSourceUrl(request()->url())
                    ->setUserData($user_data)
                    ->setActionSource(ActionSource::WEBSITE);

                $events = array();
                array_push($events, $event);

                $request = (new EventRequest($this->pixel_id))
                    ->setTestEventCode('TEST70453')
                    ->setEvents($events);

                return $request->execute();
            } catch (Exception $e) {
                Log::error('FB API ERROR(view):' . $e);
                return false;
            }
        }

    }

    public function viewContent($product, $event_id)
    {
        if (env('APP_ENV') !== 'local') {
            try {
                $api = Api::init(null, null, $this->access_token);
                $api->setLogger(new CurlLogger());

                $user_data = (new UserData())
                    ->setClientUserAgent($_SERVER['HTTP_USER_AGENT']);

                if (isset($_SERVER['HTTP_X_REAL_IP'])) {
                    $ip = $_SERVER['HTTP_X_REAL_IP'];
                    $ipData = $this->getIpData($ip);
                    $user_data->setCity($ipData['city'])
                        ->setClientIpAddress($ip);
                } else {
                    $ip = $_SERVER['REMOTE_ADDR'];
                    $user_data->setClientIpAddress($ip);
                }

                $content = (new Content())
                    ->setProductId($product->id)
                    ->setItemPrice($product->discount_price ?: $product->price)
                    ->setTitle($product->h1['ua'] ?: $product->h1['ru'])
                    ->setDescription($this->clearHtml($product->content['ua'] ?: $product->content['ru']))
                    ->setCategory(count($product->categories) ? $product->categories[0]->title['ua'] : 'Без категорії')
                    ->setBrand(env('APP_NAME'))
                    ->setQuantity(1)
                    ->setDeliveryCategory(DeliveryCategory::HOME_DELIVERY);

                $custom_data = (new CustomData())
                    ->setContentIds([$product->id])
                    ->setContentName($product->h1['ua'] ?: $product->h1['ru'])
                    ->setContentType('product')
                    ->setContentCategory(count($product->categories) ? $product->categories[0]->title['ua'] : 'Без категорії')
                    ->setContents(array($content))
                    ->setCurrency('uah')
                    ->setDeliveryCategory(DeliveryCategory::HOME_DELIVERY)
                    ->setValue($product->discount_price ?: $product->price);

                $event = (new Event())
                    ->setEventName('ViewContent')
                    ->setEventTime(time())
                    ->setEventSourceUrl(request()->url())
                    ->setEventId($event_id)
                    ->setUserData($user_data)
                    ->setCustomData($custom_data)
                    ->setActionSource(ActionSource::WEBSITE);

                $events = array();
                array_push($events, $event);

                $request = (new EventRequest($this->pixel_id))
                    ->setTestEventCode('TEST70453')
                    ->setEvents($events);

                return $request->execute();
            } catch (Exception $e) {
                Log::error('FB API ERROR(viewContent):' . $e);
                return false;
            }
        }
    }

    public function addToCard($item, $src, $event_id)
    {
        if (env('APP_ENV') !== 'local') {
            try {
                $api = Api::init(null, null, $this->access_token);
                $api->setLogger(new CurlLogger());

                $user_data = (new UserData())
                    ->setClientUserAgent($_SERVER['HTTP_USER_AGENT']);

                if (isset($_SERVER['HTTP_X_REAL_IP'])) {
                    $ip = $_SERVER['HTTP_X_REAL_IP'];
                    $ipData = $this->getIpData($ip);
                    $user_data->setCity($ipData['city'])
                        ->setClientIpAddress($ip);
                } else {
                    $ip = $_SERVER['REMOTE_ADDR'];
                    $user_data->setClientIpAddress($ip);
                }

                $content = (new Content())
                    ->setProductId($item->product->id)
                    ->setItemPrice($item->product->discount_price ?: $item->product->price)
                    ->setTitle($item->product->h1['ua'] ?: $item->product->h1['ru'])
                    ->setCategory(count($item->product->categories) ? $item->product->categories[0]->title['ua'] : 'Без категорії')
                    ->setBrand(env('APP_NAME'))
                    ->setQuantity(1)
                    ->setDeliveryCategory(DeliveryCategory::HOME_DELIVERY);

                $custom_data = (new CustomData())
                    ->setContentIds([$item->product->id])
                    ->setContentName($item->product->h1['ua'] ?: $item->product->h1['ru'])
                    ->setContentType('product')
                    ->setContentCategory(count($item->product->categories) ? $item->product->categories[0]->title['ua'] : 'Без категорії')
                    ->setContents(array($content))
                    ->setCurrency('uah')
                    ->setDeliveryCategory(DeliveryCategory::HOME_DELIVERY)
                    ->setValue($item->product->discount_price ?: $item->product->price);

                $event = (new Event())
                    ->setEventName('AddToCart')
                    ->setEventTime(time())
                    ->setEventId($event_id)
                    ->setEventSourceUrl($src)
                    ->setUserData($user_data)
                    ->setCustomData($custom_data)
                    ->setActionSource(ActionSource::WEBSITE);

                $events = array();
                array_push($events, $event);

                $request = (new EventRequest($this->pixel_id))
                    ->setTestEventCode('TEST70453')
                    ->setEvents($events);

                return $request->execute();
            } catch (Exception $e) {
                Log::error('FB API ERROR(addToCard):' . $e);
                return false;
            }
        }

    }

    public function InitiateCheckout($list, $event_id)
    {
        if (env('APP_ENV') !== 'local') {
            try {
                $api = Api::init(null, null, $this->access_token);
                $api->setLogger(new CurlLogger());

                $user_data = (new UserData())
                    ->setClientUserAgent($_SERVER['HTTP_USER_AGENT']);

                if (isset($_SERVER['HTTP_X_REAL_IP'])) {
                    $ip = $_SERVER['HTTP_X_REAL_IP'];
                    $ipData = $this->getIpData($ip);
                    $user_data->setCity($ipData['city'])
                        ->setClientIpAddress($ip);
                } else {
                    $ip = $_SERVER['REMOTE_ADDR'];
                    $user_data->setClientIpAddress($ip);
                }

                $content = [];


                foreach ($list['list'] as $listItem) {
                    array_push($content, (new Content())
                        ->setProductId($listItem['id'])
                        ->setItemPrice($listItem['discount_price'] ?: $listItem['price'])
                        ->setTitle($listItem['name']['ua'] ?: $listItem['name']['ru'])
                        ->setCategory($listItem['category']['ua'] ?: $listItem['category']['ru'])
                        ->setBrand(env('APP_NAME'))
                        ->setQuantity(1)
                        ->setDeliveryCategory(DeliveryCategory::HOME_DELIVERY));
                }

                $custom_data = (new CustomData())
                    ->setContentIds(Arr::pluck($list['list'], 'id'))
                    ->setContentType('product_group')
                    ->setContents($content)
                    ->setCurrency('uah')
                    ->setDeliveryCategory(DeliveryCategory::HOME_DELIVERY)
                    ->setNumItems($list['totalCount'])
                    ->setValue($list['totalPrice']);

                $event = (new Event())
                    ->setEventName('InitiateCheckout')
                    ->setEventTime(time())
                    ->setEventId($event_id)
                    ->setEventSourceUrl(request()->url())
                    ->setUserData($user_data)
                    ->setCustomData($custom_data)
                    ->setActionSource(ActionSource::WEBSITE);

                $events = array();
                array_push($events, $event);

                $request = (new EventRequest($this->pixel_id))
                    ->setTestEventCode('TEST70453')
                    ->setEvents($events);

                return $request->execute();

            } catch (Exception $e) {
                Log::error('FB API ERROR(InitiateCheckout):' . $e);
                return false;
            }
        }
    }

    public function Purchase($list, $user, $order, $event_id)
    {
        if (env('APP_ENV') !== 'local') {
            try {
                $api = Api::init(null, null, $this->access_token);
                $api->setLogger(new CurlLogger());

                $user_data = (new UserData())
                    ->setPhone($user->phone)
                    ->setFirstName($user->name)
                    ->setLastName($user->last_name)
                    ->setClientUserAgent($_SERVER['HTTP_USER_AGENT']);

                if (isset($_SERVER['HTTP_X_REAL_IP'])) {
                    $ip = $_SERVER['HTTP_X_REAL_IP'];
                    $ipData = $this->getIpData($ip);
                    $user_data
                        ->setCity($ipData['city'])
                        ->setClientIpAddress($ip);
                } else {
                    $user_data->setClientIpAddress($_SERVER['REMOTE_ADDR']);
                }

                $content = [];

                foreach ($list as $listItem) {
                    array_push($content, (new Content())
                        ->setProductId($listItem['product_id'])
                        ->setItemPrice($listItem->product->discount_price ?: $listItem->product->price)
                        ->setTitle($listItem->product->h1['ua'] ?: $listItem->product->h1['ru'])
                        ->setCategory(count($listItem->product->categories) ? $listItem->product->categories[0]->title['ua'] : 'Без категорії')
                        ->setBrand(env('APP_NAME'))
                        ->setQuantity($listItem->count)
                        ->setDeliveryCategory(DeliveryCategory::HOME_DELIVERY));
                }

                $custom_data = (new CustomData())
                    ->setContentIds(Arr::pluck($list, 'product_id'))
                    ->setContentType('product_group')
                    ->setContents($content)
                    ->setCurrency('uah')
                    ->setDeliveryCategory(DeliveryCategory::HOME_DELIVERY)
                    ->setNumItems($order->total_count)
                    ->setValue($order->total_price);

                $event = (new Event())
                    ->setEventName('Purchase')
                    ->setEventTime(time())
                    ->setEventId($event_id)
                    ->setEventSourceUrl(route('checkout'))
                    ->setUserData($user_data)
                    ->setCustomData($custom_data)
                    ->setActionSource(ActionSource::WEBSITE);

                $events = array();
                array_push($events, $event);

                $request = (new EventRequest($this->pixel_id))
                    ->setTestEventCode('TEST70453')
                    ->setEvents($events);

                return $request->execute();
            } catch (Exception $e) {
                Log::error('FB API ERROR(Purchase):' . $e);
                return false;
            }
        }
    }

    public function getIpData($ip)
    {
        $query = @unserialize(file_get_contents('http://ip-api.com/php/' . $ip));
        if ($query && $query['status'] == 'success') {
            return [
                'countryCode' => $query['countryCode'],
                'city' => $query['city']
            ];
        }
    }

    public function clearHtml($str)
    {
        return preg_replace('~(?:<!--\s*|\s*-->|</?[a-z\d]+[^>]*>)~', '', $str);
    }
}
