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