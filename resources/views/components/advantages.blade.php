@if(count($advantages))
    <section class="bg-black grid grid-cols-1 md:grid-cols-3 mb-3 p-16 rounded-full">
        @foreach($advantages as $advantage)
            <div class="text-center text-white md:mb-0 mb-7">
                <div class="flex justify-center mb-3">
                    {!! $advantage->icon !!}
                </div>
                <h3 class="font-bold">
                    {{app()->getLocale() == 'ua' ? $advantage->text['ua'] : $advantage->text['ru'] }}
                </h3>
            </div>
        @endforeach
    </section>
@endif
