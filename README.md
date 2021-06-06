# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

### Screenshot

![](./images/Solution%20PC.png)
![](./images/Solution%20PC%20Active.png)
![](./images/Solution%20Mobile.png)
![](./images/Solution%20Mobile%20Active.png)

### Links

- Solution URL: [Solution](https://github.com/fidellim/Article-Preview-Component)
- Live Site URL: [Live Site](https://hardcore-kowalevski-796919.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- SASS
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

Learned how to make a container with an arrow.

```css
.share-container::after {
	content: " ";
	position: absolute;
	right: 50%;
	bottom: -10px;
	transform: translateX(50%);
	border-top: 10px solid $veryDarkGrayishBlue;
	border-right: 10px solid transparent;
	border-left: 10px solid transparent;
	border-bottom: none;
}
```

### Continued development

To learn more front-end development.

### Useful resources

- [Box with Arrow](https://codeconvey.com/css-message-box-with-arrow/#:~:text=The%20HTML%20Structure,top%20of%20the%20message%20box.) - This gave me an idea on how to make a container with an arrow.

## Author

- Website - [Fidel Lim](https://fidellim-portfolio.netlify.app/)
- Frontend Mentor - [@fidellim](https://www.frontendmentor.io/profile/fidellim)
- Github - [@fidellim](https://github.com/fidellim)
