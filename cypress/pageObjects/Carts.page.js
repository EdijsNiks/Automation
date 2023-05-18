import HomePage from "./Home.page";


class CartsPage extends HomePage {
  static get url() {
    return "/cart.html";
  }
  static get checkIfCartHasList(){
    return cy.get(".cart_item");
  }
  static get checkOutStepOne() {
    return cy.get("[id='checkout']")
  }

}
export default CartsPage;