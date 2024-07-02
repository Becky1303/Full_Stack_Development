/* Taxes are due soon! Let's write a calculateTaxes function that calculates how much tax we need to pay. It should:

Accept a positive number income (our income).
Return the appropriate tax amount:
2%, if the income is up to 1000 inclusive.
3%, if the income exceeds 1000, but is not higher than 10000.
5%, if the income exceeds 10000.
*/

function calculateTaxes(income) {
  // write your code here
  if (income <= 1000) {
    return income * 0.02
  } else if ((income > 1000) && (income <= 10000)) {
    return income * 0.03
  } else if (income >10000) {
    return income * 0.05
  }
}
