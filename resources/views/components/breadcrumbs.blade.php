<ol class="inline-flex items-center overflow-x-scroll whitespace-nowrap w-full breadcrumbs font-subheading text-sm">
    @foreach ($breadcrumbs as $breadcrumb)
        @if (!is_null($breadcrumb->url) && !$loop->last)
        <li class="inline-flex items-center !ml-0">
            <a href="{{ $breadcrumb->url }}"
               class="
                        inline-flex
                        items-center
                        text-gray-700
                        hover:text-gray-900
                    "
            >

                {{ $breadcrumb->title }}
                <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                </svg>
            </a>
        </li>
        @else
        <li class="!ml-0">
            <div class="flex items-center">
                <span class="text-gray-500">{{ $breadcrumb->title }}</span>
            </div>
        </li>
        @endif
    @endforeach
</ol>

<hr class="mb-5">
