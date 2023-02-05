//make the toggle actually work
const toggle = document.querySelector("toggle");
const colorThemes = document.querySelectorAll("[name=theme]");
//set theme in localStorage
const setTheme = function (theme) {
  localStorage.setItem("activeTheme", theme);
  document.documentElement.className = localStorage.getItem("activeTheme");
};

//now getting the theme from localStorage
const getTheme = function () {
  var activeTheme = localStorage.getItem("activeTheme");
  colorThemes.forEach((theme) => {
    if (theme.id === activeTheme) {
      theme.checked = true;
      document.documentElement.className = theme.id;
    }
  });
};

//save the theme when user change it
colorThemes.forEach((theme) => {
  theme.addEventListener("click", () => {
    setTheme(theme.id);
  });
});

//apply the theme on every load
document.inload = getTheme();

//make the calculator app work
const keys = document.querySelectorAll(".key");
const screen = document.querySelector(".screen");

keys.forEach((key) => {
  key.addEventListener("click", () => {
    if (key.id === "reset") {
      screen.innerHTML = "0";
    } else if (key.id === "delete") {
      screen.innerHTML.length > 1
        ? (screen.innerHTML = screen.innerHTML.slice(0, -1))
        : (screen.innerHTML = "0");
    } else if (key.id === "equal") {
      evaluate();
    } else {
      write(key.innerHTML);
    }
  });
});

//this function write on the screen
const write = function (value) {
  screen.innerHTML === "0"
    ? (screen.innerHTML = value)
    : (screen.innerHTML += value);
};

//this function solve what ever on the screen
const evaluate = function () {
  //to replace each '×' with '*'
  var temp = screen.innerHTML.split("");

  for (let i = 0; i < temp.length; i++) {
    if (temp[i] === "×") {
      temp[i] = "*";
    }
  }

  var exp = eval(temp.join(""));

  if (exp === undefined) {
    screen.innerHTML = "0";
  } else {
    const maxDigit = 4;
    exp.toString().indexOf(".") === -1
      ? (screen.innerHTML = exp)
      : exp.toString().length - exp.toString().indexOf(".") > maxDigit
      ? (screen.innerHTML = Number.parseFloat(exp).toFixed(maxDigit))
      : (screen.innerHTML = exp);
  }
};
