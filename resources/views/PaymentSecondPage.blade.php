@extends('layouts.master')

@section('content')
    <section class="max-w-7xl mx-auto mt-[200px] ">
        <div>
            <form id="cart">
                <div class="grid grid-cols-1 md:grid-cols-2 relative">
                    <div class="col-12 col-md-6 mb-3">
                        <div class="bg-[#fff] border-[0.5px] rounded-[15px] shadow-lg box-border mb-[1.5rem] pt-[1.5rem] pr-[1rem] pb-[1.25rem] pl-[1rem]">
                            <div class="text-[1.625rem] font-[400] ">
                                <h3>Персональні дані</h3>
                            </div>
                            <div class="data-list">
                                <div class="mb-[1rem]"><label class="text-[1.075rem] text-[#686868] font-[500] w-[100%] inline-block">Ім`я <input type="text"
                                            placeholder="Введіть ваше ім'я" class="text-[1rem] border-[0.5px] border-red-600  rounded-[10px] box-border mt-[0.75rem] p-[1rem] w-[100%]">
                                        <!---->
                                    </label></div>
                                <div class="mb-[1rem]"><label class="text-[1.075rem] text-[#686868] font-[500] w-[100%] inline-block">Прізвище <input type="text"
                                            placeholder="Введіть прізвище" class="text-[1rem] border-[0.5px] border-red-600  rounded-[10px] box-border mt-[0.75rem] p-[1rem] w-[100%]">
                                        <!---->
                                    </label></div>
                                <div class="mb-[1rem]"><label class="text-[1.075rem] text-[#686868] font-[500] w-[100%] inline-block">По батькові <input type="text"
                                            placeholder="Введіть по батькові" class="text-[1rem] border-[0.5px] border-red-600  rounded-[10px] box-border mt-[0.75rem] p-[1rem] w-[100%]">
                                        <!---->
                                    </label></div>
                                <div class="mb-[1rem]"><label class="text-[1.075rem] text-[#686868] font-[500] w-[100%] inline-block">Номер телефону <span
                                            class="required">*</span><input type="tel"
                                            placeholder="+38 (0" data-mask="+38 (0##) ###-##-##" data-mask-inited="true"
                                            data-mask-raw-value="" class="text-[1rem] border-[0.5px] border-red-600  rounded-[10px] box-border mt-[0.75rem] p-[1rem] w-[100%]">
                                        <!---->
                                    </label></div>
                                <div class="mb-[1rem]"><label class="text-[1.075rem] text-[#686868] font-[500] w-[100%] inline-block">Email <input type="email"
                                            placeholder="Введіть вашу пошту" class="text-[1rem] border-[0.5px] border-red-600  rounded-[10px] box-border mt-[0.75rem] p-[1rem] w-[100%]">
                                        <!---->
                                    </label></div>
                            </div>
                        </div>
                        <div class="rounded-[15px] bg-[#fff] border-[0.5px] border-gray-300 shadow-lg mb-[1.5rem] pt-[1.25rem] pr-[1rem] pb-[1.25rem] pl-[1rem]">
                            <div class="text-[1.625rem] font-[400]">
                                <h3 >Доставка</h3>
                            </div>
                            <div class="data-list">
                                <div class="mb-[1rem]"><label class="mb-3">Місто</label>
                                    <div tabindex="-1" class="box-content text-[#35495e] block min-h-[40px] relative text-left w-[100%]" role="combobox" aria-owns="listbox-null">
                                        <div class="h-[38px] pt-[4px] pr-[8px] pl-[8px] absolute right-1 text-center top-1 w-[40px] before:border-[#999] before:text-[#999] before:content-[''] before:mt-[4px] before:relative before:right-0 before:top-[65%]"></div>
                                        <div class="bg-[#fff] rounded-[1px] border-[1px] border-gray-300 min-h-[40px] pt-[8px] pr-[40px] pb-0 pl-[8px]">
                                            <div class="multiselect__tags-wrap" style="display: none;"></div>
                                            <!--v-if-->
                                            <div class="bg-[#fff] h-[35px] absolute right-[1px] top-[1px] w-[48px]" style="display: none;"></div><input
                                                name="" type="text" autocomplete="off" spellcheck="false"
                                                placeholder="Почніть вводити" tabindex="0" class="bg-[#fff] border-none rounded-[5px] box-border inline-block leading-[20px] mb-[8px] min-h-[20px] "
                                                aria-controls="listbox-null"
                                                style="width: 0px; position: absolute; padding: 0px;">
                                            <!--v-if--><span class="text-[#adadad] inline-block mb-[10px] pt-[2px]">Почніть вводити</span>
                                        </div>
                                        <div class="bg-[#fff] border-[1px] border-[#e8e8e8] absolute w-[100%] z-50 overflow-auto" tabindex="-1"
                                            style="max-height: 300px; display: none;">
                                            <ul class="list-none m-0 min-w-[100%] p-0 " role="listbox" id="listbox-null"
                                                style="display: block;">
                                                <!--v-if-->
                                                <li style="display: none;"><span class="cursor-pointer block min-h-[40px] p-[12px] relative no-underline transform-none whitespace-nowrap ">No elements
                                                        found. Consider changing the search query.</span></li>
                                                <li><span class="cursor-pointer block min-h-[40px] p-[12px] relative no-underline transform-none whitespace-nowrap "><span>Нічого не знайдено</span></span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <!---->
                                </div>
                                <div class="mb-[1rem]"><label class="mb-3">Місто</label>
                                    <div tabindex="-1" class="box-content text-[#35495e] block min-h-[40px] relative text-left w-[100%]" role="combobox" aria-owns="listbox-null">
                                        <div class="h-[38px] pt-[4px] pr-[8px] pl-[8px] absolute right-1 text-center top-1 w-[40px] before:border-[#999] before:text-[#999] before:content-[''] before:mt-[4px] before:relative before:right-0 before:top-[65%]"></div>
                                        <div class="bg-[#fff] rounded-[1px] border-[1px] border-gray-300 min-h-[40px] pt-[8px] pr-[40px] pb-0 pl-[8px]">
                                            <div class="multiselect__tags-wrap" style="display: none;"></div>
                                            <!--v-if-->
                                            <div class="bg-[#fff] h-[35px] absolute right-[1px] top-[1px] w-[48px]" style="display: none;"></div><input
                                                name="" type="text" autocomplete="off" spellcheck="false"
                                                placeholder="Почніть вводити" tabindex="0" class="bg-[#fff] border-none rounded-[5px] box-border inline-block leading-[20px] mb-[8px] min-h-[20px] "
                                                aria-controls="listbox-null"
                                                style="width: 0px; position: absolute; padding: 0px;">
                                            <!--v-if--><span class="text-[#adadad] inline-block mb-[10px] pt-[2px]">Почніть вводити</span>
                                        </div>
                                        <div class="bg-[#fff] border-[1px] border-[#e8e8e8] absolute w-[100%] z-50 overflow-auto" tabindex="-1"
                                            style="max-height: 300px; display: none;">
                                            <ul class="list-none m-0 min-w-[100%] p-0 " role="listbox" id="listbox-null"
                                                style="display: block;">
                                                <!--v-if-->
                                                <li style="display: none;"><span class="cursor-pointer block min-h-[40px] p-[12px] relative no-underline transform-none whitespace-nowrap ">No elements
                                                        found. Consider changing the search query.</span></li>
                                                <li><span class="cursor-pointer block min-h-[40px] p-[12px] relative no-underline transform-none whitespace-nowrap "><span>Нічого не знайдено</span></span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <!---->
                                </div>
                            </div>
                        </div>
                        <div class="bg-[#fff] border-[0.5px] border-gray-300 rounded-[12px] shadow-lg box-border mb-[1.5rem] pt-[1.25rem] pr-[1rem] pb-[1.25rem] pl-[1rem]">
                            <div class="text-[1.625rem] font-[400]">
                                <h3>Оплата</h3>
                            </div>
                            <div class="!mb-[1.5rem]">
                                <div
                                    class="items-center justify-between mb-[1rem] !flex box-border">
                                    <label class="text-[1.075rem] text-[#686868] font-[500] w-[100%]">
                                        <input type="radio" name="payment"
                                            value="cash_on_delivery" class=""></span>
                                        <p class="a-text">Накладений платіж</p>
                                    </label></div>
                                <div
                                    class="data-list__item d-sm-flex align-items-sm-center justify-content-sm-between radio-btn">
                                    <label class="me-sm-2"><input type="radio" name="payment"
                                            value="minimum_prepayment"><span></span>
                                        <p class="a-text">Мінімальна передоплата (10%)</p>
                                    </label></div>
                                <div
                                    class="data-list__item d-sm-flex align-items-sm-center justify-content-sm-between radio-btn">
                                    <label class="me-sm-2"><input type="radio" name="payment"
                                            value="full_prepayment"><span></span>
                                        <p class="a-text">Повна передоплата</p>
                                    </label></div>
                            </div>
                        </div>
                        <div class="textarea"><label class="text-[1.075rem] font-[500] text-[#686868]  w-[100%]">Коментар
                                <textarea placeholder="Введіть ваш коментар" class="border-[0.5px] rounded-[10px] box-border font-[350] h-[100] mt-[0.75rem] p-[1rem] resize-none w-[100%] outline-none border-red-600 "></textarea>
                            </label></div>
                    </div>
                    <div class="">
                        <div class="cart-item__right row mb-3">
                           
                            
                            <div class="additions ml-[50px]">
                                <h3 class="text-[1.625rem] mb-[1rem]">Замовлення</h3>


                                <div class="grid grid-cols-8 border-[1px] border-gray-300 rounded-[10px]">
                                    <div class="col-span-2"><img
                                            src="https://dabango.store/storage/products/350/256%2078.png"
                                            alt="Мереживна спідня білизна Elasticite" class="p-[25px]  pr-[1.25rem]">
                                    </div>

                                    <div class="col-span-6 p-[20px] flex items-center  ">

                                        <div class="flex  space-x-[50px]  ">

                                            <div class="text-red-600">Мереживна спідня білизна JENNY</div>

                                            <div class="font-bold mr-[50px]">969 <span>грн</span></div>
                                            
                                        </div>
                                        <div class="border-r-[1px] content-[''] h-[100px] ml-[50px]"></div>
                                        <div class="block pl-[1.25rem]">

                                            

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

                            <div
                                class="rounded-[15px] mt-[50px] bg-[#fff] border-[0.5px] border-gray-300 shadow-lg box-border mb-[1.5rem] p-[1rem]">
                                <div class="pb-[0.625rem]">
                                    <div class="items-center flex justify-between">
                                       
                                        <div class="value">
                                            
                                        </div>
                                    </div>
                                   
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
