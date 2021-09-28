const initialPrice = document.querySelector("#initial-price");
const stockQuantity = document.querySelector("#stock-quantity");
const finalPrice = document.querySelector("#final-price");
const profitOrLossBtn = document.querySelector("#profit-or-loss-btn");
const message = document.querySelector("#profit-or-loss");

function calculateProftAndLoss(initial, quantity, final) {
  if (final > initial) {
    let profit = (final - initial) * quantity;
    let profitPercentage = ((final - initial) / initial) * 100;

    showMessage(
      `You gained ${profitPercentage.toFixed(
        2
      )}%. Your total profit is ${profit.toFixed(2)}`
    );
    message.style.color = "#059669";
  } else if (initial > final) {
    let loss = (initial - final) * quantity;
    let lossPercentage = ((initial - final) / initial) * 100;
    showMessage(
      `You lost ${lossPercentage.toFixed(
        2
      )}%. Your total loss is ${loss.toFixed(2)}`
    );
    message.style.color = "#DC2626";
  } else {
    showMessage("Neither profit nor loss!");
    message.style.color = "black";
  }
  errorHandler();
}

function showMessage(msg) {
  message.innerText = msg;
}

function errorHandler() {
  let initialValue = initialPrice.value;
  let quantityValue = stockQuantity.value;
  let finalValue = finalPrice.value;
  let msg = "Please fill out all Fields!!";
  if (initialValue === "") {
    showMessage(msg);
  }
  if (quantityValue === "") {
    showMessage(msg);
  }
  if (finalValue === "") {
    showMessage(msg);
  }
  if (initialValue < 0 || quantityValue < 0 || finalValue < 0) {
    showMessage("Please enter a valid number!!");
  }
}

function clickHandler() {
  const purchasePrice = Number(initialPrice.value);
  const quant = Number(stockQuantity.value);
  const currentPrice = Number(finalPrice.value);
  calculateProftAndLoss(purchasePrice, quant, currentPrice);
}

profitOrLossBtn.addEventListener("click", clickHandler);
