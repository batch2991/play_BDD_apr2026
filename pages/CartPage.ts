import { Base } from "./Base";

export class Cart extends Base
{
   private prodnames="//div[@data-test='inventory-item-name']"
   private removebutton="(//button[.='Remove'])[1]"

   async getProductNames()
   {
      let names:string[]=[]
      let prods=await this.page.locator(this.prodnames).all()
      for(let i=0;i<prods.length;i++)
      {
          names.push(await prods[i].textContent()||"")
      }
    
     return names
   }
   async removeProductFromCart()
   {
       await this.page.locator(this.removebutton).click()
   }
}