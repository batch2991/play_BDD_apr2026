import {Given,When,Then} from '@cucumber/cucumber';
import { MyWorld } from '../utils/MyWorld';
import { Cart } from '../../../pages/CartPage';

let namesinproductpage:any
let namesincartpage:any

Then('The number of products should be as expected', async function (this: MyWorld) {
   let count=await this.products.getProductsCount()
   if(count==6)
        console.log("Products count is as expected")
    else
        console.log("Products count is not as expected")
   
});

   
When('add a products to cart', async function (this: MyWorld) {
  
   namesinproductpage=await this.products.addProductsToCart()

});

Given('user is on cart page', async function (this: MyWorld) {
   await this.products.navigateToCart()
   this.cart=new Cart(this.page)
});

Then('the product should be added to cart', async function (this: MyWorld) {
    
    namesincartpage=await this.cart.getProductNames()
    if(namesinproductpage[0]==namesincartpage[0])
        console.log("Product added to cart is as expected")
    else
        console.log("Product added to cart is not as expected")


    
});
When('remove the product from cart', async function (this: MyWorld) {
    await this.cart.removeProductFromCart()
     
});
Then('the product should be removed from cart', async function (this: MyWorld) {
     namesincartpage=await this.cart.getProductNames()
     if(namesincartpage.length==0)
        console.log("Product is removed from cart successfully")
     else
        console.log("Product is not removed from cart")
});