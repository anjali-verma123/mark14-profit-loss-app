var initialPrice = document.querySelector('#initial-price');
var stocksQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output-box");

// Step - Adding Event Listeners
submitBtn.addEventListener('click', submitHandler);

function submitHandler() {
	var iPrice = Number(initialPrice.value);
	var cPrice = Number(currentPrice.value);
	var sQuantity = Number(stocksQuantity.value);

	calculateProfitOrLoss(iPrice, sQuantity, cPrice);
}

// Step - Calculate profit and Loss
function calculateProfitOrLoss(initial, quantity, current) {
	// loss condition
	if (initial > current) {
		let loss = (initial - current) * quantity;
		let lossPercentage = (loss / (initial * quantity)) * 100;
		outputBox.style.color = 'red';
		outputBox.innerHTML = `Whoops!! Your loss is ${loss} and loss Percentage is ${lossPercentage}% :(`;
	}
	// profit calculation
	else if (initial < current) {
		let profit = (current - initial) * quantity;
		let profitPercentage = (profit / (initial * quantity)) * 100;
		outputBox.style.color = 'green';
		outputBox.innerHTML = `Yay!! Your Profit is ${profit.toFixed(
			2
		)} and profit Percentage is ${profitPercentage.toFixed(2)}%`;
	}
	// No profit, no loss
	else {
		outputBox.style.color = 'white';
		outputBox.innerHTML = `No pain No gain, and no gain no pain :)`;
	}
}