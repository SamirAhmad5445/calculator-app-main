# Frontend Mentor - Calculator app solution

Welcome I am [Samir Ahmad](https://github.com/SamirAhmad5445) and this is a solution to the [Calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#build-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Find Me On](#find-me-on)
  - [Gmaill](mailto:samirahmad5445@gmail.com)
  - [GitHub](https://github.com/SamirAhmad5445)
  - [Frontend Mentor](https://www.frontendmentor.io/profile/SamirAhmad5445)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- See the size of the elements adjust based on their device's screen size
- Perform mathmatical operations like addition, subtraction, multiplication, and division
- Adjust the color theme based on their preference

### Screenshot

![Screenshot for my solution](./design/solution-screenshot.png)

### Links

- Solution URL: [Go To The Github Repo](https://github.com/SamirAhmad5445/calculator-app-main)
- Live Site URL: [Click Here To View The Live Page](https://samirahmad5445.github.io/calculator-app-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS pseudo selectors
- [CUBE CSS](https://cube.fyi/) - CSS naming convention
- Flexbox
- CSS Grid
- Vaneilla JavaScript

### What I learned

In This challenge I had learned how to use the naming convention [CUBE CSS](https://cube.fyi/), It is So much easier than to use data attributes insteed of the double dash like BEM and also the utilities comes in handy a lot with the layout or the composition classes and i planning to use [CUBE CSS](https://cube.fyi/) as my main naming convention.

Here is Some Code Snippets from My Solution:

- The HTML Code for a Three options Toggle Switch

```html
<div class="toggle-wrapper | flex-group" style="--flex-gap: 1.5rem">
  <p class="txt-small">theme</p>
  <div class="toggle">
    <label for="dark">1</label>
    <input type="radio" id="dark" name="theme" checked />
    <label for="light">2</label>
    <input type="radio" id="light" name="theme" />
    <label for="fancy">3</label>
    <input type="radio" id="fancy" name="theme" />
  </div>
</div>
```

- Using the :has() pseudo Class To Change The Posiotion Of the Toggle

```css
.toggle::after {
  left: calc(0.75 * var(--toggle-gap));
}
:where(.toggle:has(#light:checked), .light .toggle)::after {
  left: calc(50% - 1.5 * var(--toggle-gap));
}
:where(.toggle:has(#fancy:checked), .fancy .toggle)::after {
  left: calc(100% - 3.75 * var(--toggle-gap));
}
/* NOTE: By Using the :where() Pseudo class we  */
```

- A Function To Get The Theme From The Local Storage

```js
const getTheme = function () {
  var activeTheme = localStorage.getItem("activeTheme");
  colorThemes.forEach((theme) => {
    if (theme.id === activeTheme) {
      theme.checked = true;
      document.documentElement.className = theme.id;
    }
  });
};
```

### Continued development

I would learn more about SASS and the CSS Preprossers and also I would like to get into the world of JavaScript Frameworks and inprove my frontend skills with Good Fundamentals, Practical Applications, and by learning more technologies like PostCSS and gulp to increase the efficience of my code.

## find me on

- GitHub - [@SamirAhmad5445](https://github.com/SamirAhmad5445)
- Gmaill - [samirahmad5445@gmail.com](samirahmad5445@gmail.com)
- Frontend Mentor - [@SamirAhmad5445](https://www.frontendmentor.io/profile/SamirAhmad5445)
