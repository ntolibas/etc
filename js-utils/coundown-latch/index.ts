import * as Utils from './countdown-latch';

const appDiv: HTMLElement = document.getElementById('app');
const max = 10;
const countDownLatch = new Utils.CountDownLatch(max, () => {
  document.getElementById('count-down').innerText =  ' boom!';
}, (count) => {
  document.getElementById('count-down').innerText = ' ' + (max - count + 1).toString();
});

window['countDown'] = function() {
  countDownLatch.countDown();
}

let counter = 0;
document.body.innerHTML = `<input type='button' onclick='countDown()' value='count down'><label id='count-down'/>`;