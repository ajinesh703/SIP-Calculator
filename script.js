function calculateSIP() {
  var monthlyInvestment = parseFloat(document.getElementById("monthlyInvestment").value);
  var investmentYears = parseInt(document.getElementById("investmentYears").value);
  var interestRate = parseFloat(document.getElementById("interestRate").value);

  var monthlyRate = interestRate / 12 / 100;
  var totalMonths = investmentYears * 12;

  var totalAmount = monthlyInvestment * ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate) * (1 + monthlyRate);
  document.getElementById("totalAmount").value = totalAmount.toFixed(2);
}