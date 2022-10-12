@extends('layouts.master')

@section('content')
    <section class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 ">
            <div class="slider">
                <img src="https://dabango.store/storage/products/500/11.jpg" alt="">
            </div>

            <div>
                <h2 class="text-[38px]">МЕРЕЖИВНА БІЛИЗНА ANGELO</h2>
                <div class="flex space-x-[70%]">
                    <span class="text-[10px]">Код: N </span>
                    <span class="text-[#38af44] text-[14px] font-medium">Товар в наявності</span>
                </div>
                <div class="pt-[5%]">
                    <div class="shop__price flex items-center justify-center space-x-[10%]">
                        <div class=" mb-4 mb-md-0 ">
                            <div class="flex items-center justify-evenly flex-col">
                                <div
                                    class="
                                    text-[20px]
                                    font-medium
                                    text-[#A5A5A5]
                                    line-through
                                ">
                                    1320 грн.</div>
                                <div class=" font-bold text-[#ff0000] text-[36px]">845 грн.</div>
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
                <div class="mt-[25px]">

                    <div class="shop__available-sizes available-sizes ">
                       
                        <div class="shop__available-sizes__label w-100 mb-2">Доступні розміри</div>
                    
                        <ul class="">
                            <li>
                                <input type="checkbox" id="react-option" value="" class="hidden peer">
                                <label for="react-option" 
                                        class="
                                        
                                                inline-flex 
                                                justify-center 
                                                items-center 
                                                mx-auto
                                                text-gray-500 
                                                bg-white rounded-lg border-2 
                                                border-gray-200 
                                                cursor-pointer 
                                                peer-checked:border-blue-600 
                                                hover:text-gray-600 
                                                peer-checked:text-gray-600 
                                                hover:bg-gray-50 
                                                w-[40px] 
                                                h-[40px] 
                                            ">                           
                                    S
                                </label>
                            </li>
                        </ul>

                        <div class="flex">
                        <div class="me-1 mb-2">
                            <label class="flex items-center select-none mb-0">
                            <input class="hidden" type="checkbox" value="S">
                                    <span class="
                                                w-[40px] 
                                                h-[40px] 
                                                ring 
                                                ring-black 
                                                ring-offset-0 
                                                rounded-[7px] 
                                                relative 
                                                shrink-0 
                                                flex 
                                                items-center 
                                                justify-center 
                                                font-medium
                                                after:content-[' ']
                                                after:block
                                                after:w-0
                                                after:h-0
                                                after:absolute
                                                after:left-1/2
                                                after:top-1/2
                                            "
                                    >S</span>
                                    <span class="">
                                </span>
                                </label>
                                </div>
                        <div class="size__element me-1 mb-2">
                            <label class="mycheckbox">
                                <input class="mycheckbox__default" type="checkbox" value="M">
                                <span class="mycheckbox__new">M</span>
                                <span class="mycheckbox__descr"></span>
                            </label>
                        </div>
                        {{-- <div class="size__element me-1 mb-2"><label class="mycheckbox"><input class="mycheckbox__default"
                                    type="checkbox" value="L"><span class="mycheckbox__new">L</span><span
                                    class="mycheckbox__descr"></span></label></div>
                                </div> --}}
                    </div>
                    <div class="flex flex-wrap justify-end mt-[-69px] mr-[100px]">
                        <div class="available-colors">

                            <div class="available-colors__label w-100 mb-2">Доступні кольори</div>
                            <div class="flex">
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
                    </div>
                    <div class="mb-3">
                        <div class="ml-auto">
                            <div class="shop__delivery-info m-0 p-2"><button id="sizes" class="shop__sizes-table d-flex"
                                    type="button"><span class="icon-table"></span><span>Таблиця розмірів</span></button>
                            </div>
                            <div>
                                <!---->
                                <div class="overlay"></div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <delivery-and-payment/>

            </div>
        </div>
        

        </div>
        <div class="grid grid-cols-1 md:grid-cols-2">
            <div class="mt-5">
                <div class="col-12 col-md-6">
                    <div id="specifications" class="text-[24px] text-[#000] font-bold mb-5 text-center">Характеристики</div>
                    <div class="characteristics-table">
                        <table border="1" cellspacing="1" cellpadding="1">
                            <tbody>
                                <tr>
                                    <td>
                                        <p><strong>Тип&nbsp;</strong></p>
                                    </td>
                                    <td>Мереживний комплект із поясом</td>
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