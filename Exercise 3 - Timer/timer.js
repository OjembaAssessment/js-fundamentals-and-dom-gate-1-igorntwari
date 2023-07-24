let counterElement = document.getElementById('mytime');
let count = 0;
function start() {

  intervalId = setInterval(() => {
    count++;
    counterElement.textContent = count;
  }, 1000);
}

function ADDsecond() {
  count ++;
  counterElement.textContent = count;
}

  function RemoveSeconds() {
    count--;
    counterElement.textContent = count;
  }

  function Reset() {
    count =0;
    counterElement.textContent = count;
  }
  function stop() {
    clearInterval(intervalId);
  }

  










console.log("Exercise 3 - Timer");