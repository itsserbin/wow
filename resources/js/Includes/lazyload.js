export const vLazy = (el) => {
    function loadImage() {
        if (el.tagName === 'img') {
            el.src = el.dataset.src
        } else{
            el.srcset = el.dataset.src
        }
    }

    function callback(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                loadImage();
                observer.unobserve(el);
            }
        })
    }

    function createIntersectionObserver() {
        const options = {
            root: null,
            threshold: 0
        }

        const observer = new IntersectionObserver(callback, options);
        observer.observe(el);
    }

    if (!window['IntersectionObserver']) {
        loadImage();
    } else {
        createIntersectionObserver();
    }
}
