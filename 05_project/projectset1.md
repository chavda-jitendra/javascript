# project related to DOM
## project link 
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode-n7rgwd2a?file=1-colorChanger%2Findex.html)



## project 1

```javascript

const button = document.querySelectorAll('.button');
// console.log(button);
const body = document.querySelector('body');

button.forEach(function (b) {
  console.log(b);
  b.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
  });
});

```