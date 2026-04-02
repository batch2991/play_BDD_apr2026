import {Base} from "./Base"


export class Login extends Base
{
   //locators
   private readonly txtuid:string="Username"
   private readonly txtpwd:string="Password"
   private readonly btnlogin:string="input#login-button"
   private readonly errmsg:string="h3[data-test='error']"

  
   //functions
   public async login(username?:string,password?:string)
   {
       if(username && password)
       {
       
        await this.page.getByPlaceholder(this.txtuid).fill(username)
        await this.page.getByPlaceholder(this.txtpwd).fill(password)
        await this.page.locator(this.btnlogin).click()
       }
   }
   public async readErrorMsg()
   {
    let msg:any
    try
    {
       
        if(await this.page.locator(this.errmsg).isVisible)
        {
            msg=await this.page.locator(this.errmsg).textContent()
            console.log(msg)
            return msg
        }
    }
    catch(error)
    {
        return "Error message not displayed for invalid login"
    }

   }


}