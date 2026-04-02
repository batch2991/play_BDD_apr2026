import { Base } from "./Base";

export class Products extends Base
{
    private productheading="//span[.='Products']"
    private productsnames="//div[@data-test='inventory-item-name']"
    private prices="//div[@data-test='inventory-item-price']"
    private sortdropdown="//select[@class='product_sort_container']"
    private cartlink="//a[@class='shopping_cart_link']"
    private openmenu="//button[.='Open Menu']"
    private logoutlink="//a[.='Logout']"

    async verifyProductHeading()
    {
        try
        {
            await this.page.locator(this.productheading).isVisible()
            return true
        }
        catch(error)
        {           
            return false
        }

    }
    async logout()
    {
        await this.page.locator(this.openmenu).click();
        await this.page.locator(this.logoutlink).click();
    }
    async getProductsCount()
    {
        let count=await this.page.locator(this.productsnames).all()
        return count.length
    }
    async addProductsToCart()
    {
        let before_names:string[]=[]
        let n=Math.floor(Math.random() * (6 - 1 + 1)) + 1
        let name=await this.page.locator("(//div[@data-test='inventory-item-name'])["+n+"]").textContent()
        before_names.push(name?.trim() || "");
        await this.page.locator("(//button[.='Add to cart'])["+n+"]").click()                  
        return before_names
    }
    async navigateToCart()
    {
        await this.page.locator(this.cartlink).click();
    }
}