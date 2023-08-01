# Frontend Mentor - Interactive comments section solution

This is a solution to the [Interactive comments section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-comments-section-iG1RugEG9). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Acknowledgements](#acknowledgements)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Create, Read, Update, and Delete comments and replies
- Upvote and downvote comments
- **Bonus**: If you're building a purely front-end project, use `localStorage` to save the current state in the browser that persists when the browser is refreshed.
- **Bonus**: Instead of using the `createdAt` strings from the `data.json` file, try using timestamps and dynamically track the time since the comment or reply was posted.

### Screenshot

![](./screenshot/screenshot.png?raw=true)

### Links

- Solution URL: [https://github.com/riwepo/fem-interactive-comments-section](https://github.com/riwepo/fem-interactive-comments-section)
- Live Site URL: [https://riwepo.github.io/fem-interactive-comments-section/](https://riwepo.github.io/fem-interactive-comments-section/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Modules
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

When dealing with lists and unique keys.
If you have a component which represents an item in a list, the key has to be a property of the component itself, it cannot go the markup generated by the component.

When dealing with images.
If image is known at compile time, you can use import. Presumably Webpack packages it up in the package sent to the client's browser.
If the image is dynamic and is only known at runtime, put the images in the 'public' folder. Find the path to the public folder at runtime using 'process.env.PUBLIC_URL'.

I used useContext hook for the first time to store the current user and the list of comments.

Imported SVG as ReactComponent, change fill property of SVG to 'currentColor' and you can style it in css.

Style components by giving them a custom 'className' property and passing classes thru.

I had trouble with the voting, it is a bit tricky.
I made it so a user can only give 1 upvote or 1 downvote, and can't vote on their own comment.

I had trouble with the comment/repsonse data structure. What happens when a user comments on a comment? It should probably be a recursive tree but that was a bit too hard. I ended up nesting all the comments under the top level comment.

The logic to handle putting the username of the recipient before the comment is tricky. Is this part of the content, or is it added in by the UI? I ended up leaving it out while the user is creating/editing a comment (different to the specified design), and having the UI pre-pend it when the comment is displayed.

Simplified modal portal by putting backdrop in the same component and putting it all in the one file.

Stored comments in local storage.

Expressed diffrence between current time and a timetamp in years, months, days etc.

Storing a timestamp as a UTC string and parsing it back out again.

I learned "p" is not allowed as a child of "button" because "p" is block display and "button" is inline display and block is not allowed as a child of inline.

### Continued development

Just contunue to make more complex react.js apps and get better and faster at doing it.

### Useful resources

Regarding styling SVG react components -
https://stackoverflow.com/questions/54519654/how-do-i-add-color-to-my-svg-image-in-react

Regarding displaying images from the public folder
https://create-react-app.dev/docs/using-the-public-folder/

### Acknowledgements

Handy JavaScript function to express difference between two dates in years, months, weeks etc.
https://stackoverflow.com/questions/1968167/difference-between-dates-in-javascript/1968175#1968175

## Author

- Frontend Mentor - [@riwepo](https://www.frontendmentor.io/profile/riwepo)
