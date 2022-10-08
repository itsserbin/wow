@extends('layouts.master')

@section('content')
    <section class="w-[100%] h-[100%] flex justify-center">
        <div class="w-[70%] flex justify-center space-x-10">
            <img src="https://dabango.store/storage/products/500/11.jpg" alt="">
            <div class="w-[50%]">
                <h2 class="text-[38px]">МЕРЕЖИВНА БІЛИЗНА ANGELO</h2>
                <div class="flex space-x-[70%]">
                    <span class="text-[10px]">Код: N </span>
                    <span class="text-[#38af44] text-[14px] font-medium">Товар в наявності</span>
                </div>
                <div class="pt-[5%]">
                    <div class="shop__price flex items-center justify-center space-x-[10%]">
                        <div class=" mb-4 mb-md-0 ">
                            <div class="flex items-center justify-evenly flex-col">
                                <div class="shop__old-price">1320 грн.</div>
                                <div class="shop__actual-price">845 грн.</div>
                            </div>
                            <!---->
                        </div>
                        <div class="flex flex-col">
                            <button id="add-to-card"
                                class=" mb-[20px] max-w-[100%] w-[314px] h-[50px] bg-[#dc3545] rounded-[10px] text-white"
                                type="button"><span>До кошика</span></button><button
                                class="max-w-[100%] w-[314px] h-[50px] bg-[#dc3545] rounded-[10px]  text-white"
                                type="button"><span>Купити
                                    в 1 клік</span></button>
                        </div>
                    </div>


                </div>
                <div class="mt-[40px]">

                    <div class="flex flex-wrap">
                        <div class=" w-100 mb-2">Доступні розміри</div>
                        <div class="size__element me-1 mb-2">
                            <label class="mycheckbox"><input class="mycheckbox__default" type="checkbox"
                                    value="S"><span class="mycheckbox__new">S</span><span
                                    class="mycheckbox__descr"></span></label>
                        </div>
                        <div class="size__element me-1 mb-2"><label class="mycheckbox"><input class="mycheckbox__default"
                                    type="checkbox" value="M"><span class="mycheckbox__new">M</span><span
                                    class="mycheckbox__descr"></span></label>
                        </div>
                        <div class="size__element me-1 mb-2"><label class="mycheckbox"><input class="mycheckbox__default"
                                    type="checkbox" value="L"><span class="mycheckbox__new">L</span><span
                                    class="mycheckbox__descr"></span></label>
                        </div>
                        <div class="size__element me-1 mb-2"><label class="mycheckbox"><input class="mycheckbox__default"
                                    type="checkbox" value="XL"><span class="mycheckbox__new">XL</span><span
                                    class="mycheckbox__descr"></span></label>
                        </div>
                    </div>
                </div>
                <div class="flex justify-end mt-[-20px]">
                    <div class="available-colors">
                        <div class="available-colors__label w-100 mb-2">Доступні кольори</div>
                        <div><label class="mycheckbox" style="background-color: rgb(255, 192, 203);"><input
                                    class="mycheckbox__default" type="checkbox" value="Розовый"><span
                                    class="mycheckbox__new"></span></label></div>
                        <div><label class="mycheckbox" style="background-color: rgb(255, 255, 255);"><input
                                    class="mycheckbox__default" type="checkbox" value="Белый"><span
                                    class="mycheckbox__new"></span></label></div>
                        <div><label class="mycheckbox" style="background-color: rgb(255, 0, 0);"><input
                                    class="mycheckbox__default" type="checkbox" value="Красный"><span
                                    class="mycheckbox__new"></span></label></div>
                    </div>
                </div>
                <div class="mb-3">
                    <div class="ml-auto">
                        <div class="shop__delivery-info m-0 p-2"><button id="sizes" class="shop__sizes-table d-flex"
                                type="button"><span class="icon-table"></span><span>Таблиця розмірів</span></button></div>
                        <div>
                            <!---->
                            <div class="overlay"></div>
                        </div>
                    </div>
                </div>
                <!--Accrodion -->
                <button class="" type="button">Доставка і оплата</button>
                <div class="hidden">
                    <!--HIDDEN CONTENT-->
                    <h2>Банківський переказ на карту</h2>
                    <p>Ви можете сплатити замовлення банківською карткою Visa та MasterCard без комісії, при цьому ви
                        заощаджуєте від 50 гривень на покупці.</p>
                    <h2>Накладений платіж</h2>
                    <p>Ви можете сплатити замовлення після його отримання у службі доставки «Нова пошта». При цьому способі
                        оплати ви сплачуєте суму, що складається з: вартості доставки (страхування, транспортування) товару
                        за тарифами «Нової пошти» (від 40грн); 2% вартості товару.</p>
                    <p class="mt-[1rem]"><strong>Важливо!</strong> Накладений платіж можливий лише з мінімальною
                        передоплатою у зв'язку з військовим становищем.</p>
                </div>
                <br />
                <button class="mt-[20px]" type="button">Умови повернення та обміну товару</button></h2>
                <div id="collapseTwo" class="accordion-collapse collapse show">
                    <div class="accordion-body">
                        <div class="hidden">
                            <!--HIDDEN CONTENT-->
                            <h2>Умови повернення та обміну товару</h2>
                            <p>Відповідно до закону «Про захист прав споживачів», нижня білизна та панчішно-шкарпеткові
                                вироби включені до «Переліку непродовольчих товарів належної якості», які не підлягають
                                поверненню чи обміну на аналогічні моделі інших розмірів, форм, габаритів, фасонів,
                                забарвлення чи комплектації.</p>
                            <p>Але! Ми завжди лояльні до наших клієнтів, тому у нас, на відміну від інших
                                інтернет-магазинів, є обмін купальників, якщо вам не підійде розмір або колір, ви без
                                проблем зможете обміняти його на іншу модель купальника! (Обмін робимо протягом 3-4х робочих
                                днів після отримання товару)</p>
                            <p>Повернення на категорію спідньої білизни немає!</p>
                        </div>
                        <!---->

                        <div class="mt-5">
                            <div class="mb-[10px] text-left text-[#000] text-[22px] font-bold">Опис</div>
                            <div class="shop__description">
                                <p>Яскравий і викликає еротичний комплект із французького ніжного мережива провокує на
                                    активні дії!
                                    Яскраві кольори та відвертий крій ліфа викликає миттєве бажання та приплив пристрасних
                                    почуттів!</p>
                                <p>Комплектація:</p>
                                <ul class="list-disc ml-[6%]">
                                    <li>трусики;</li>
                                    <li>ліфчик з кісточками;</li>
                                    <li>пояс із підтяжками;</li>
                                    <li>панчохи на замовлення.</li>
                                </ul>
                                <p>Панчохи сіточкою з ажуром на резинці;<br>Панчохи нейлонові з ажуром на
                                    резинці;<br>Панчохи нейлонові
                                    з ажуром на силіконі.&nbsp;</p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>




        </div>

        </div>
        <div class="w-[38%]">
        <div class=" flex justify-end mt-[100px]">
            <div class="col-12 col-md-6">
                <div id="specifications" class="text-[24px] text-[#000] font-bold mb-5 text-center">Характеристики</div>
                <div class="characteristics-table">
                    <table border="1" cellspacing="1" cellpadding="1">
                        <tbody >
                            <tr >
                                <td >
                                    <p><strong>Тип&nbsp;</strong></p>
                                </td>
                                <td >Мереживний комплект із поясом</td>
                            </tr>
                            <tr>
                                <td>
                                    <p><strong>Тканина</strong></p>
                                </td>
                                <td>Французьке мереживо</td>
                            </tr>
                        </tbody>
                    </table>
                    <p>&nbsp;</p>
                </div>
            </div>
        </div>
            

    </section>
@endsection
