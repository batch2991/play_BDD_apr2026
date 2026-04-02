import {setWorldConstructor,World} from "@cucumber/cucumber"
import {Browser,Page,BrowserContext} from "@playwright/test"
import {Login} from "../../../pages/LoginPage"
import {Products} from "../../../pages/ProductsPage"
import {Cart} from "../../../pages/CartPage"

export class MyWorld extends World
{
  browser!:Browser
  page!:Page
  context!:BrowserContext
  login!:Login
  products!:Products
  cart!:Cart  
 
}
setWorldConstructor(MyWorld)

