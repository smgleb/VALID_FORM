const form = document.forms.form_site;

const developer = form.elements.developer;
const site_name = form.elements.site_name;
const site_url = form.elements.site_url;
const site_date = form.elements.site_date;
const site_people = form.elements.site_people;
const site_mail = form.elements.site_mail;
const site_select = form.elements.site_select;
const site_radio = form.elements.site_radio;
const site_review = form.elements.site_review;
const site_description = form.elements.site_description;

const form_reset = form.elements.form_reset;
const form_submit = form.elements.form_submit;



// валидация на пустую строку (всех текстовых полей )

let all_inp = document.querySelectorAll('input,textarea');

for (let i = 0; i < all_inp.length; i++) {
	all_inp[i].addEventListener('input', function () {
		if (all_inp[i].value.trim() === '') {
			all_inp[i].parentElement.lastElementChild.style.display = 'block'
		} else {
			all_inp[i].parentElement.lastElementChild.style.display = 'none'
		}
	})
}

// валидация на цифры для поля посетители сайта ()

site_people.addEventListener('input', function () {
	if (isFinite(site_people.value) === false) {
		site_people.parentElement.lastElementChild.style.display = 'block'
	} else {
		site_people.parentElement.lastElementChild.style.display = 'none'
	}
})


// отправка формы без ошибок

for (let i = all_inp.length; i >= 0; i--) {
	form.addEventListener('submit', function (e) {

		if (all_inp[i].value.trim() === '') {
			all_inp[i].parentElement.lastElementChild.style.display = 'block';

			all_inp[i].focus({ preventScroll: true });

		}
		if (isFinite(site_people.value) === false) {
			site_people.parentElement.lastElementChild.style.display = 'block'
			site_people.focus({ preventScroll: true });
		}
		if (site_radio.value === '') {
			const error_radio = document.querySelector('.error-radio');
			error_radio.style.display = 'block';
			error_radio.focus({ preventScroll: true });
		}

		let all_span = document.getElementsByTagName('span');
		for (let i = 0; i < all_span.length; i++) {
			if (all_span[i].style.display === 'block') {
				e.preventDefault();
			}
		}
	})
}
