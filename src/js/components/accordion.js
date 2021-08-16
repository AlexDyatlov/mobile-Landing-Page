document.addEventListener('DOMContentLoaded', () => {
	const accordions = document.querySelectorAll('.accordion');

	accordions.forEach(el => {
		el.addEventListener('click', (e) => {
			const self = e.currentTarget;
			const control = self.querySelector('.accordion__control');
			const content = self.querySelector('.accordion__content');

			if (control.innerText === "Рзавернуть меню") {
        control.innerText = "Свернуть меню";
			} else {
				control.innerText= "Рзавернуть меню";
			}

			self.classList.toggle('open');

			if (self.classList.contains('open')) {
				control.setAttribute('aria-expanded', true);
				content.setAttribute('aria-hidden', false);
				content.style.maxHeight = content.scrollHeight + 'px';
			} else {
				control.setAttribute('aria-expanded', false);
				content.setAttribute('aria-hidden', true);
				content.style.maxHeight = null;
			}
		});
	});
});