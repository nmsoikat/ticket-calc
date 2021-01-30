window.addEventListener("DOMContentLoaded", function () {
  // Select DOM
  const firstClassTicket = document.getElementById("first-class-ticket");
  const economyTicket = document.getElementById("economy-ticket");
  const subtotal = document.getElementById("subtotal");
  const vat = document.getElementById("vat");
  const total = document.getElementById("total");
  const btnBookNow = document.getElementById("btn-book-now");
  const firstPlusBtn = document.getElementById("first-plus-btn");
  const firstMinusBtn = document.getElementById("first-minus-btn");
  const economyPlusBtn = document.getElementById("economy-plus-btn");
  const economyMinusBtn = document.getElementById("economy-minus-btn");

  let firstClassAmount = 0;
  let economyClassAmount = 0;
  function calculation() {
    let subtotalAmount = calculateSubtotal();
    let vatAmount = vatCalculate(subtotalAmount);
    subtotal.innerHTML = subtotalAmount;
    vat.innerHTML = vatAmount;
    total.innerHTML = subtotalAmount + vatAmount;
  }
  // ============ First Class =============
  firstPlusBtn.addEventListener("click", () => {
    increment(firstClassTicket);
    firstClassAmount = Number(firstClassTicket.value) * 150;
    calculation();
  });
  firstMinusBtn.addEventListener("click", () => {
    decrement(firstClassTicket);
    firstClassAmount = Number(firstClassTicket.value) * 150;

    calculation();
  });

  // ============ Economy Class =============
  economyPlusBtn.addEventListener("click", () => {
    increment(economyTicket, (type = "economy"));
    economyClassAmount = Number(economyTicket.value) * 100;

    calculation();
  });
  economyMinusBtn.addEventListener("click", () => {
    decrement(economyTicket);
    economyClassAmount = Number(economyTicket.value) * 100;

    calculation();
  });

  // prevent default input box
  firstClassTicket.addEventListener("keypress", (event) => {
    event.preventDefault();
  });

  economyTicket.addEventListener("keypress", (event) => {
    event.preventDefault();
  });

  btnBookNow.addEventListener("click", function (event) {
    let data = {
      firstClass: firstClassAmount,
      economyClass: economyClassAmount,
      subtotal: Number(subtotal.innerHTML),
      vat: Number(vat.innerHTML),
      total: Number(total.innerHTML),
    };
    localStorage.setItem("data", JSON.stringify(data));
  });
  // =========== Increment And Decrement Functions =================
  function increment(inputElement, type = "first") {
    let value = Number(inputElement.value);
    if (type === "first") if (value >= 25) return;
    inputElement.value = value + 1;
  }

  function decrement(inputElement) {
    let value = Number(inputElement.value);
    if (value === 0) return;

    inputElement.value = value - 1;
  }

  // calculate subtotal
  function calculateSubtotal() {
    return firstClassAmount + economyClassAmount;
  }

  function vatCalculate(subtotal) {
    return (subtotal * 10) / 100;
  }
});
