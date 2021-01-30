window.addEventListener("DOMContentLoaded", function () {
  const firstClassTicket = document.getElementById("first-class-ticket");
  const economyTicket = document.getElementById("economy-ticket");
  const subtotal = document.getElementById("subtotal");
  const vat = document.getElementById("vat");
  const total = document.getElementById("total");
  let data = JSON.parse(localStorage.getItem("data"));
  firstClassTicket.innerHTML = data.firstClass;
  economyTicket.innerHTML = data.economyClass;
  subtotal.innerHTML = data.subtotal;
  vat.innerHTML = data.vat;
  total.innerHTML = data.total;
});
