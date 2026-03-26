// import TinyDatePicker from 'tiny-date-picker';
import {DateRangePicker} from 'tiny-date-picker/dist/date-range-picker.js';
import 'tiny-date-picker/tiny-date-picker.min.css';
import 'tiny-date-picker/date-range-picker.min.css';


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

if (document.querySelector('.booking-bar')) {
	const bookingBar = document.querySelector('.booking-bar');
	document.documentElement.style.setProperty('--booking-bar-height',bookingBar.clientHeight + 'px');

	// tiny-date-picker
	const dateTranslations ={
	  en: {
	    days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
	    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', ],
	    today: 'Today',
	    clear: 'Clear',
	    close: 'Close',
	  },
	  fr:{
	    days: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
	    months: ['Janvier', 'février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre', ],
	    today: 'Aujourd\'hui',
	    clear: 'Effacer',
	    close: 'Fermer',
	  }
	};

	let today = new Date();
	let dates = {
	  dateStart : new Date(new Date().setDate(today.getDate())).toLocaleDateString(app.lang),
	  dateEnd :   new Date(new Date().setDate(today.getDate()+1)).toLocaleDateString(app.lang)
	}

	let start = bookingBar.querySelector('input[name="dateStart"]');
	let end   = bookingBar.querySelector('input[name="dateEnd"]');
	let modal = document.querySelector('.modal-inputs-picker');

	start.value = dates.dateStart;
	end.value   = dates.dateEnd;

	// Inject DateRangePicker into our modal
	DateRangePicker(modal,{
		startOpts:{
     		min: dates.dateStart,
			lang: dateTranslations[app.lang],
 		},
		endOpts:{
     		min: dates.dateEnd,
			lang: dateTranslations[app.lang],
		},
	})
	.on('statechange', function (_, rp) {
		// Update the inputs when the state changes
		var range = rp.state;
		start.value = range.start ? range.start.toLocaleDateString(app.lang) : '';
		end.value   = range.end   ? range.end.toLocaleDateString(app.lang)   : '';

		// check if date start and end are different. if not, reset date end
		if (range.end && range.end.toLocaleDateString('fr') == range.start.toLocaleDateString('fr')) {
			end.value = '';
			rp.state.end = undefined;
		}
	});
	modal.append(utils.getNodeFromString('<span class="close"><i class="fa fa-times"></i></span>'));
	modal.querySelector('.close').addEventListener('click',()=>{
	  modal.close();
	});

	// When the inputs gain focus, show the date range picker
	start.addEventListener('click', showPicker);
	end.addEventListener('click', showPicker);

	function showPicker() {
		modal.showModal();
	}

	// bookingBar.querySelectorAll('input.tdp_').forEach((el)=>{
	// 	el.setAttribute('readonly',true);
	// 	let dp = TinyDatePicker(el,{
	// 		mode: 'dp-modal',
	// 		appendTo: bookingBar,
	// 		format(date){
	// 			return date.toLocaleDateString(app.lang)
	// 		},
	// 		lang: dateTranslations[app.lang],
	// 		parse(str){
	// 			if(app.lang == 'fr'){
	// 				let dateParts = str.split("/");
	// 				str = dateParts[1]+'-'+dateParts[0]+'-'+dateParts[2];
	// 				let date = new Date(str);
	// 				return isNaN(date) ? new Date() : date;
	// 			}
	// 		},
    //  		min: dates[el.getAttribute('name')],
	// 	}).on('close', function(_, picker){
	//       el.blur();
	//     });
	// })
}
