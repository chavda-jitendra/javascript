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

## project 2 solution

```javascript

const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault(); //meanes GET or POST method value stop

  const height = parseInt(document.querySelector('#height').value); // conver string into intiger
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  const wg = document.querySelector('#weight-guide');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `please valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<h3>${bmi}</h3>`;

    if (bmi < 18.6) {
      wg.innerHTML = `<p>under weight ${bmi}</p>`;
    }
    if (bmi > 18.6 && bmi < 24.9) {
      wg.innerHTML = `<p>normal range ${bmi}</p>`;
    }
    if (bmi > 24.9) {
      wg.innerHTML = `<p>overweight range ${bmi}</p>`;
    }
  }
});


```


## project 3 clock

```javascript

const clock = document.getElementById('clock');
// document.querySelector('#clock')  //both are same

// let date = new Date();
// console.log(date.toLocaleTimeString());
// console.log(date.toLocaleDateString());

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000); //1000 means 1 second


```