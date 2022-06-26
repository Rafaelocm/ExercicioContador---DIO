var currentNumberWrapper = document.getElementById('currentNumber');

var currentNumber = 0;



var decrement = document.getElementById('decrement').addEventListener('click', function () {
    if (currentNumber == 0) {
        document.getElementById('decrement').disbled = true;
    } else {
        currentNumber = currentNumber - 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }
})

var increment = document.getElementById('increment').addEventListener('click', function () {
    if (currentNumber == 10) {
        document.getElementById('increment').disbled = true;
    } else {
        currentNumber = currentNumber + 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }
})
