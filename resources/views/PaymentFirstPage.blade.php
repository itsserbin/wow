@extends('layouts.master')

@section('content')
    <section class="max-w-7xl mx-auto mt-[200px] ">
        <div>
            <form id="cart">
                <div class="grid grid-cols-1 md:grid-cols-2 relative">
                    <div class="mr-[25px]">
                        <div class="pb-[0.625rem]">
                            
                            <div class="grid grid-cols-8 border-[1px] border-gray-300 rounded-[10px]">
                                
                                <div class="col-span-2">
                                    <div class="border-r-[1px] content-[''] h-[100px] absolute z-40 ml-[150px] mt-[29px]"></div>
                                    <img src="https://dabango.store/storage/products/350/256%2078.png"
                                        alt="Мереживна спідня білизна Elasticite"
                                        class="p-[25px]   pr-[1.25rem]  ">
                                        
                                </div>
                               
                                
                                <div class="absolute ml-[580px] mt-[15px]"><svg width="18" height="18"
                                        viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M10.0575 9.00002L14.7825 4.28252C14.9237 4.14129 15.003 3.94974 15.003 3.75002C15.003 3.55029 14.9237 3.35874 14.7825 3.21752C14.6412 3.07629 14.4497 2.99695 14.25 2.99695C14.0502 2.99695 13.8587 3.07629 13.7175 3.21752L8.99995 7.94252L4.28245 3.21752C4.14123 3.07629 3.94968 2.99695 3.74995 2.99695C3.55023 2.99695 3.35868 3.07629 3.21745 3.21752C3.07623 3.35874 2.99689 3.55029 2.99689 3.75002C2.99689 3.94974 3.07623 4.14129 3.21745 4.28252L7.94245 9.00002L3.21745 13.7175C3.14716 13.7872 3.09136 13.8702 3.05329 13.9616C3.01521 14.053 2.99561 14.151 2.99561 14.25C2.99561 14.349 3.01521 14.4471 3.05329 14.5384C3.09136 14.6298 3.14716 14.7128 3.21745 14.7825C3.28718 14.8528 3.37013 14.9086 3.46152 14.9467C3.55292 14.9848 3.65095 15.0044 3.74995 15.0044C3.84896 15.0044 3.94699 14.9848 4.03839 14.9467C4.12978 14.9086 4.21273 14.8528 4.28245 14.7825L8.99995 10.0575L13.7175 14.7825C13.7872 14.8528 13.8701 14.9086 13.9615 14.9467C14.0529 14.9848 14.1509 15.0044 14.25 15.0044C14.349 15.0044 14.447 14.9848 14.5384 14.9467C14.6298 14.9086 14.7127 14.8528 14.7825 14.7825C14.8527 14.7128 14.9085 14.6298 14.9466 14.5384C14.9847 14.4471 15.0043 14.349 15.0043 14.25C15.0043 14.151 14.9847 14.053 14.9466 13.9616C14.9085 13.8702 14.8527 13.7872 14.7825 13.7175L10.0575 9.00002Z"
                                            fill="#878787"></path>
                                    </svg></div>
                                <div class="col-span-6 p-[20px] ">

                                    <a href="/product/258" class="mb-[0.25rem] text-red-600 col-span-7 text-[1rem]">
                                        <div>Мереживна спідня білизна Elasticite</div>
                                    </a>

                                    <div class="items-center flex col-span-8 justify-between mt-0 pl-[0.75rem] pt-0">
                                        <div
                                            class="text-[#231f20] flex flex-col text-[1.5rem] font-[700] whitespace-nowrap mr-[40px]">
                                            <div class="flex flex-col justify-center"><del
                                                    class="text-[#777] text-[1rem]"><span
                                                        class="text-gray-600 text-[1rem]">1320 <span class="text-xs">грн.
                                                        </span></span></del><ins
                                                    class="text-[#ff4c3b] text-[1.5rem] font-[700] no-underline mt-[-14px]"><span
                                                        class="text-red-600 ">890 <span class="text-xs"> грн.
                                                        </span></span></ins></div>
                                            <!---->
                                        </div>

                                        <div class="items-center flex max-w-[6.25rem]">
                                            <div
                                                class="text-red-600 cursor-pointer text-[1.25rem] font-[400] pt-[0.125rem] pb-[0.125rem] pr-[0.5rem] pl-[0.5rem]">
                                                <span class="minus">-</span>
                                            </div><input type="number"
                                                class="text-[#e3342f] border-none text-[1.25rem] outline-none text-center w-[100%]" />
                                            <div
                                                class="text-red-600 cursor-pointer text-[1.25rem] font-[400] pt-[0.125rem] pb-[0.125rem] pr-[0.5rem] pl-[0.5rem]">
                                                <span class="plus">+</span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="">
                        <div class="cart-item__right row mb-3">
                            <div
                                class="items-center border-gray-300 flex bg-[#fff] rounded-[15px] shadow-lg box-border justify-between p-[1rem] mb-3">
                                <label
                                    class="text-[#231f20] flex-row text-[1rem] font-[500] mb-0 whitespace-nowrap w-[100%] items-center flex">Промокод
                                    <input
                                        class="border-[0.5px] border-red-600 box-border text-[.875rem] p-[1rem] text-center w-[100%]  rounded-[20px]  mx-3"
                                        type="text" placeholder="XXX-XXX-XXX"></label><a href="javascript:"
                                    class="items-center bg-[#e3342f] border-[1px] border-red-600 rounded-[0.625rem] text-[#fff] cursor-pointer flex font-[400] justify-center p-[0.875rem] no-underline ">Активувати</a>
                            </div>
                            <div
                                class="rounded-[15px] bg-[#fff] border-[0.5px] border-gray-300 shadow-lg box-border mb-[1.5rem] p-[1rem]">
                                <div class="pb-[0.625rem]">
                                    <div class="items-center flex justify-between">
                                        <div class="text-[#000] font-[500] uppercase">Товарів</div>
                                        <div class="value">
                                            <div
                                                class="text-[#231f20] flex flex-col text-[1.5rem] font-[700] whitespace-nowrap">
                                                <div class="price total">1</div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr>
                                    <div class="items-center flex justify-between">
                                        <div class="text-[#e3342f] text-[.875rem] capitalize">Ціна без знижки</div>
                                        <div class="value">
                                            <div class="product-card__price">
                                                <div class="price"><del><span class="amount price-old">1320
                                                            грн.</span></del></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex items-center justify-between">
                                        <div class="text-[#000] font-[500] uppercase">До сплати</div>
                                        <div class="value">
                                            <div
                                                class="text-[#231f20] flex flex-col text-[1.5rem] font-[700] whitespace-nowrap">
                                                <div class="price total">890.00 грн.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="items-center flex flex-col"><button type="submit"
                                        class="items-center bg-[#e3342f] border-[1px] border-red-600 rounded-[0.625rem] text-[#fff] cursor-pointer flex text-[1rem] font-[400] justify-center p-[0.875rem] no-underline w-[100%]">Оформити
                                        замовлення</button>
                                </div>
                            </div>
                            <div class="additions">
                                <h3 class="text-[1.625rem] mb-[1rem]">Вам сподобаєтся</h3>


                                <div class="grid grid-cols-8 border-[1px] border-gray-300 rounded-[10px]">
                                    <div class="col-span-2"><img
                                            src="https://dabango.store/storage/products/350/256%2078.png"
                                            alt="Мереживна спідня білизна Elasticite" class="p-[25px]  pr-[1.25rem]"></div>
                                    
                                    <div class="col-span-6 p-[20px] flex items-center  ">
                                       
                                        <div class="flex  space-x-[50px]  ">
                                            
                                            <div class="text-red-600">Мереживна спідня білизна JENNY</div>
                                            
                                            <div class="font-bold pr-[8px]">969 <span>грн</span></div>
                                           
                                        </div>
                                        <div class="border-r-[1px] content-[''] h-[100px] "></div>
                                        <div class="block pl-[1.25rem]">
                                           
                                            <div class="plus-btn"><svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                    height="16" fill="currentColor" class="bi bi-plus-circle"
                                                    viewBox="0 0 16 16">
                                                    <path
                                                        d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z">
                                                    </path>
                                                    <path
                                                        d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z">
                                                    </path>
                                                </svg></div>
                                        </div>

                                    </div>

                                    <!--
                                        <div class="additions-list">
                                            <div class="pb-[0.875rem] pt-[0.875rem]">
                                                <div class="items-center bg-[#fff] border-[2px] border-gray-300 rounded-[15px] shadow-lg cursor-pointer flex p-[0.875rem]">
                                                    <div class="max-w-[64px] w-[12%]">
                                                        <div class="h-0 pb-[19%] relative w-[100%]"><a href="https://dabango.store/product/302"><img class="h-[100%] left-0 absolute top-0 w-[100%] object-contain"
                                                                    src="https://dabango.store/storage/products/350/Main%20photo%202.jpg"
                                                                    alt="Мереживна спідня білизна JESSIE`"></a></div>
                                                    </div>
                                                    
                                                   
                                                    <div class="items-center self-stretch border-r-[1px] border-r-[#343434] flex-1 justify-between">
                                                        <div class="text-[1rem] pl-[0.75rem] pr-[0.75rem]"><a href="https://dabango.store/product/302">
                                                                <div class="text-[#e3342f]">Мереживна спідня білизна JESSIE`</div>
                                                            </a></div>
                                                        <div class="pl-[0.5rem] items-end flex flex-col pr-[0.5rem]">
                                                            <div class="text-[1.25rem]">965 <span class="text-[0.875rem]"
                                                                   > грн. </span></div>
                                                        </div>
                                                    </div>
                                                    
                                                    <div class="block pl-[1.25rem]">
                                                        <div class="plus-btn"><svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                                height="16" fill="currentColor" class="bi bi-plus-circle"
                                                                viewBox="0 0 16 16">
                                                                <path
                                                                    d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z">
                                                                </path>
                                                                <path
                                                                    d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z">
                                                                </path>
                                                            </svg></div>
                                                    </div>
                                                    -->
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
        </div>
        </div>
        </form>
        <div>
            <!---->
            <div class="overlay"></div>
        </div>
        </div>
    </section>
@endsection
