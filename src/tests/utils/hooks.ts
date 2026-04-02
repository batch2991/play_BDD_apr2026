import { MyWorld } from "./MyWorld";
import {Before,After, AfterStep, BeforeStep} from "@cucumber/cucumber"
import {chromium} from "@playwright/test"


Before(async function(this:MyWorld){
   
     this.browser=await chromium.launch({headless:false})
     this.context=await this.browser.newContext({
      recordVideo:{
           dir:"./reports/videos/",
           size:{width:1280,height:720}  }
     })
     this.page=await this.context.newPage() 

})

After(async function(this:MyWorld){  
   let video=this.page.video()
   this.context.close()
   if(video)
   {
      let path=await video.path()   //take the path of the video created
      let fs=require("fs")
      let finalvideo=fs.readFileSync(path)  //read the video in the path
      await this.attach(finalvideo,"video/webm")  //attach the video to the report
   }
   await this.browser.close()
})
BeforeStep(async function(this:MyWorld,picklestep){
  console.log("The step  in execution  :",picklestep.pickleStep.text)
})

AfterStep(async function(this:MyWorld,result){
   console.log("Status of the Step :",result.result.status)
})
