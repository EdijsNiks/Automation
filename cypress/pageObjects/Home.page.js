import BasePage from "./Base.page";

class HomePage extends BasePage {
  static get url() {
    return "/inventory.html";
  }

  static get stackIcon() {
    return cy.get("#react-burger-menu-btn");
  }

  static get sideBar(){
    return cy.get(".bm-menu-wrap")
  }
  static get logoutButton(){
    return cy.get('#logout_sidebar_link');
  }
  static get addToCartBack(){
    return cy.get('[id="add-to-cart-sauce-labs-backpack"]');
  }
  static get addToCartOnesie(){
    return cy.get('[id="add-to-cart-sauce-labs-onesie"]');
  }
  static get addToCartTShirt(){
    return cy.get('[id="add-to-cart-sauce-labs-bolt-t-shirt"]');
  }
  static get cartCount(){
    return cy.get('.shopping_cart_badge');
  }
  static get takeOneOffCart(){
    return cy.get("[id='remove-sauce-labs-backpack']");
  }
  static get clickOnTitle(){
    return cy.get(".inventory_item_name");
  }
  static get itemName(){
    return cy.get(".inventory_details_name");
  }
  static get clickOnCart() {
    return cy.get("[id='shopping_cart_container']");
  } 
}

export default HomePage;