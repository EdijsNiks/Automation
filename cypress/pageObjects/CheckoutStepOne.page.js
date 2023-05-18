import CartsPage from "./Carts.page";

class CheckOutStepOne extends CartsPage {
  static get url() {
    return "/checkout-step-one.html";
  }
  static get firstNameCheck() {
    return cy.get('[id="first-name"]');
}

static get lastnameCheck() {
    return cy.get('[id="last-name"]');
}

static get zipCode() {
    return cy.get('[id="postal-code"]');
}
static get pressContinue() {
    return cy.get('[id="continue"]');
}


static checkoutInfo(username, password, zip){
    this.firstNameCheck.type(username);
    this.lastnameCheck.type(password);
    this.zipCode.type(zip);
}
}
export default CheckOutStepOne;