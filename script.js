const decrease = document.querySelector('button:nth-child(1)'),
  reset = document.querySelector('button:nth-child(2)'),
  increase = document.querySelector('button:nth-child(3)'),
  numb = document.querySelector('span');


const green = () => numb.style.color = 'rgb(10, 148, 40)';
const red = () => numb.style.color = 'rgb(185, 10, 10)';
const save = () => localStorage.setItem('num', numb.innerText);

reset.addEventListener('click', () => {
  numb.innerHTML = '0';
  green();
  save();
})

increase.addEventListener('click', () => {
  numb.innerHTML = parseInt(numb.innerText) + 1;
  if (parseInt(numb.innerText) >= 0) green();
  save();
})

decrease.addEventListener('click', () => {
  numb.innerHTML = parseInt(numb.innerText) - 1;
  if (parseInt(numb.innerText) < 0) red();
  save();
})

if (localStorage.getItem('num')) {
  numb.innerHTML = localStorage.getItem('num');

  if (numb.innerHTML >= 0) {
    green();
  } else { red(); }
}
