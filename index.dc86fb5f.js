document.querySelectorAll('.nav__item a[href^="#"]').forEach((function(e){e.onclick=function(e){e.preventDefault();var o=this.getAttribute("href"),t=document.querySelector(o).offsetTop-100;window.scrollTo({top:t,behavior:"smooth"})}}));
//# sourceMappingURL=index.dc86fb5f.js.map
