import {Given,When,Then} from "@cucumber/cucumber"
import { MyWorld } from "../utils/MyWorld";
import { Login } from "../../../pages/LoginPage";
import { Products } from "../../../pages/ProductsPage";


Given('user is on login page', async function (this: MyWorld) {
  this.login=new Login(this.page)
  await this.login.openUrl("https://www.saucedemo.com/")
  console.log("hello")
  console.log("new line added")
  

});


When('enter valid userid and valid pwd and click login', async function (this: MyWorld) {
   await this.login.login("standard_user","secret_sauce")
});

Then('user is on products page', async function (this: MyWorld) {
   this.products=new Products(this.page)
   let status=await this.products.verifyProductHeading()
   if(status==true)
      console.log("Login is successful for valid credentials")
   else
      console.log("Login is unsuccessful for valid credentials")
});


When('enter invalid {string} or invalid {string} and click login', async function (this:MyWorld,uid:string, pwd:string) {
   await this.login.login(uid,pwd)
});


Then('error message should be displayed', async function (this: MyWorld) {
   let errmsg=await this.login.readErrorMsg()
   if(errmsg.includes("Username and password do not match any user in this service"))
        console.log("Error message displayed is as expected for invalid credentials")
    else
        console.log("Error message is not displayed / message is not as expected")
});