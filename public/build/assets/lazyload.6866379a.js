const a=e=>{function r(){e.tagName==="img"?e.src=e.dataset.src:e.srcset=e.dataset.src}function n(s,t){s.forEach(c=>{c.isIntersecting&&(r(),t.unobserve(e))})}function o(){const s={root:null,threshold:0};new IntersectionObserver(n,s).observe(e)}window.IntersectionObserver?o():r()};export{a as v};
