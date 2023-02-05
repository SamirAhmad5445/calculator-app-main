const themes = document.querySelectorAll('[name=theme]');

function setTheme(theme) {
		localStorage.setItem('theme', theme);
}

function getTheme() {
		const active = localStorage.getItem('theme');
		themes.forEach((option) => {
				if (option.id == active) {
						option.checked = true;
				}
		});
}

themes.forEach((option) => {
		option.addEventListener('click', () => {
				setTheme(option.id);
		})
});

document.onload = getTheme();
