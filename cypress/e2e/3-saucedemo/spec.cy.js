
import LoginPage from "../../pageObjects/Login.page";
import HomePage from "../../pageObjects/Home.page";
import BasePage from "../../pageObjects/Base.page";

describe('Saucedemo', () => {
    beforeEach(() => {
        //cy.visit("/");
        LoginPage.visit();
    });
    it.skip("Login Scenario", () => {
        LoginPage.usernameField.type('standard_user');
        LoginPage.passwordField.type('secret_sauce');
        LoginPage.loginButton.should("be.visible");
        LoginPage.loginButton.click();
        LoginPage.loginButton.should("not.exist");
    });

    it.skip ("Login Scenario - Negative Case", () => {
        LoginPage.usernameField.type('standart_user');
        LoginPage.passwordField.type('asdsad')
        LoginPage.loginButton.click();
        LoginPage.errorMessage.should('have.text', "Epic sadface: Username and password do not match any user in this service");
    })
    it("3 Scenario", () => {
        // Log into App
        LoginPage.usernameField.type("standard_user");
        LoginPage.passwordField.type("secret_sauce");
        LoginPage.loginButton.click();
        // Click on Burger/Stack icon
        HomePage.stackIcon.click();
        // Click logout button
        HomePage.sideBar.invoke("attr", "aria-hidden").should("eq", "false");
        HomePage.logoutButton.click();
        // Validate that we see login button
        LoginPage.loginButton.should("be.visible");
    })
    it.skip("Add to Cart Scenario", () => {
        //Log in app
        LoginPage.usernameField.type("standard_user");
        LoginPage.passwordField.type("secret_sauce");
        LoginPage.loginButton.click();
        //Click "Sauce Labs Backpack"
        HomePage.addToCartBack.click();
        // "Sauce Labs Onesie"
        HomePage.addToCartOnesie.click();
        //"Sauce Labs Bolt T-Shirt"
        HomePage.addToCartTShirt.click();
        //Validate that the cart badge is visible and has value "3"
        HomePage.cartCount.should("have.text", 3);
    })
    it.skip("Add and remove one from cart", () => {
        LoginPage.logIn("standard_user","secret_sauce");
        //Add to cart 1
        HomePage.addToCartBack.click();
        //Validate that cart is 1
        HomePage.cartCount.should("have.text", 1);
        //Take item off
        HomePage.takeOneOffCart.click();
        //Validate that cart is zero
        HomePage.cartCount.should('not.exist');
    })
    it("Open specific item, validate title", () => {
        //Log in
        LoginPage.logIn("standard_user","secret_sauce");
        //Press item title
        HomePage.clickOnTitle.contains("Sauce Labs Backpack").click();
        //Validate Item title equals clicked title
        HomePage.itemName.should("have.text", "Sauce Labs Backpack");
    })
    it.only("Full Order Scenario", () => {
        //Log in
        LoginPage.logIn("standard_user","secret_sauce");
        //Add to cart "Sauce Labs Backpack" and "Sauce Labs Bolt T-Shirt"

        //Open Cart
        //Create cart (Create CartsPage object)
        //Validate that we see items
        //Validate that there are 2 items in cart
        //Click checkout (Create new page object - CheckOutStepOne)
        //Set firstname. lastname, zip code
        // Click Continue
        //(Create step 2 page object) validate that we see "49.66"
        //Click Finish
        //(Create Checkout Complete page object) validate that we see "Thank you for your order!"
        

    })
});
