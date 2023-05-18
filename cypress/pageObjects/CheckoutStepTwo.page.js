import CheckOutStepOne from "./CheckoutStepOne.page";

class CheckOutStepTwo extends CheckOutStepOne {
  static get url() {
    return "/checkout-step-two.html";
  }

  static get totalSum(){
    return cy.get(".summary_total_label");
  }
  static get pressFinish() {
    return cy.get('[id="finish"]');
}
}
export default CheckOutStepTwo;