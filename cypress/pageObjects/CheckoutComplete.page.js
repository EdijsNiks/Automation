import CheckOutStepTwo from "./CheckoutStepTwo.page";

class CheckoutComplete extends CheckOutStepTwo {
  static get url() {
    return "/checkout-complete.html";
  }

  static get validateCheckOutText() {
    return cy.get(".complete-header");
}
}
export default CheckoutComplete;