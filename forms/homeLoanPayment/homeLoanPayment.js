btnHomeLoan.onclick=function(){

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