(function(){document.querySelector("html").classList.contains("is-builder")||function(){function c(){var d=window.scrollY,c=window.innerHeight;a.forEach(function(a){var b=a.getBoundingClientRect().top+window.scrollY-c;if(d>=b){var e=new DOMMatrix(f),h=new DOMMatrix(g);e=e.m41+.07*(d-b);b=h.m41-.07*(d-b);a.querySelector(".grid-container-1").style.transform="translate3d("+e+"px, 0, 0)";a.querySelector(".grid-container-2").style.transform="translate3d("+b+"px, 0, 0)"}})}var a=document.querySelectorAll(".gallery-wrapper");
if(a.length){var f=getComputedStyle(a[0].querySelector(".grid-container-1")).transform,g=getComputedStyle(a[0].querySelector(".grid-container-2")).transform;window.addEventListener("scroll",function(){requestAnimationFrame(c)})}}()})();
