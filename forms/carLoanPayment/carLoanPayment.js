btncarLoan.onclick=function(){

let carLoanPrinciple = "";
let carLoanInterest = "";
let carLoanMonths = "";

carLoanPrinciple = inptPrinciple.value
carLoanInterest= inptMonthlyInterest.value
carLoanMonths= inptNumberofMonths.value

function carLoanPayment(carLoanPrinciple, carLoanMonths, carLoanInterest) {
let carPaymentFormula = (carLoanPrinciple / carLoanMonths) * ((carLoanInterest / 100) + 1);
return carPaymentFormula;
};

//let carTotal = carLoanPayment (carLoanPrinciple, carLoanMonths, carLoanInterest);
NSB.MsgBox(`A car loan for ${carLoanPrinciple} over ${carLoanMonths} months at ${carLoanInterest} interest would have a monthly payment of ${carPaymentFormula}`)
