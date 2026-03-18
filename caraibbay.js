if (document.body.classList.contains('home')){
	// document.documentElement.style.setProperty('--viewport-padding-top','0px');
	document.documentElement.style.setProperty('--booking-bar-height',document.querySelector('.booking-bar').clientHeight + 'px');
}


let header = document.querySelector('.headerFW');
if (window.scrollY > header.clientHeight){
    header.classList.add('is-unpinned');
}
header.closest('#header').classList.add('ready')


document.querySelectorAll('.monitor-stick').forEach((el)=>{
	const observer = new IntersectionObserver( 
	  ([e]) => e.target.classList.toggle('is-pinned', e.intersectionRatio < 1),
	  {
	  	// root: document.documentElement,
	  	rootMargin: '-1px 0px 0px 0px',
	  	threshold: [1]
	  }
	);

	observer.observe(el)
})
