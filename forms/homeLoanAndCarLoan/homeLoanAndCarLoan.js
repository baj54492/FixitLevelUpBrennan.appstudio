function carLoanPayment(carLoanPrinciple2, carLoanMonths2, carLoanInterest2) {
  let carPaymentFormula = (carLoanPrinciple2 / carLoanMonths2) * ((carLoanInterest2 / 100) + 1)
  return carPaymentFormula
}

btncarLoan.onclick=function(){

let carLoanPrinciple = ""
let carLoanInterest = ""
let carLoanMonths = ""

carLoanPrinciple = Number(inptPrinciple.value)
carLoanInterest= (Number(inptMonthlyInterest.value)) / 100
console.log(carLoanInterest)
carLoanMonths= Number(inptNumberofMonths.value)

let carTotal = carLoanPayment (carLoanPrinciple, carLoanMonths, carLoanInterest)
lblmessage.value =`A car loan for ${carLoanPrinciple} over ${carLoanMonths} months at ${carLoanInterest} interest would have a monthly payment of ${carTotal}`
}



/*btnHomeLoan.onclick=function(){

let homeLoanPrinciple = "" ;
let homeLoanYears = "";
let homeLoanInterest = "";

homeLoanPrinciple = inptPrinciple.value
homeLoanInterest= inptMonthlyInterest.value
carLoanYears= inptNumberYears.value


function homeLoanPayment(homeLoanPrincicple, homeLoanYears, homeLoanInterest) {
let carPaymentFormula = (homeLoanPrinciple / homeLoanYears * 12) * ((homeInterestInterest / 100) + 1);
return homePaymentFormula;
};
let homeTotal = homeLoanPayment (homeLoanPrinciple, homeLoanYears, homeLoanInterest);
NSB.MsgBox(`A home loan for ${homeLoanPrinciple} over ${homeLoanYears} years at ${homeLoanInterest} would have a monthly payment of ${homeTotal}`)
*/