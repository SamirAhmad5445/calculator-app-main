// to make the toggle actually working
const themes = document.querySelectorAll('[name=theme]');

const setTheme = function(theme) {
		localStorage.setItem('theme', theme);
}

const getTheme = function() {
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
		});
});

document.onload = getTheme();

const keys = document.querySelectorAll('.key');
const screen = document.querySelector('.screen');

keys.forEach((key) => {
		key.addEventListener('click',() => {
				if (key.innerHTML === 'reset') {
						screen.innerHTML = "0";
				} else if (key.innerHTML === 'del') {
						(screen.innerHTML.length > 1) 
						   ?screen.innerHTML = screen.innerHTML.slice(0,-1)
								:screen.innerHTML = '0';
				} else if (key.innerHTML === '='){
						equal();
				} else {
						write(key.innerHTML);
				}
		});
});

const write = function(value) {
		(screen.innerHTML === "0") 
			?	screen.innerHTML = value
			:	screen.innerHTML += value;
}

const equal = function() {
		var exp = screen.innerHTML.split("");
		for( let i=0 ; i < exp.length ; i++ ){
				if ( exp[i] == "×") {
						exp[i] = "*";
				}
		}
		screen.innerHTML = eval(exp.join(""));
}
