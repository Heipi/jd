class Menu{
    constructor(id){
        this.box = document.querySelector(id)
        this.ul = this.box.querySelector("ul")
        this.lis = this.box.querySelectorAll("li")
        this.subMenuEles = this.box.querySelectorAll(".sub-menu")
        this.time1 =  null      
        this.time2 =  null
        this.init()
    } 
   init(){
       console.log("ss");

        this.lis.forEach((element) => {
            element.addEventListener("mouseenter",(e)=>{
                   let li = e.target; 
                     console.log("mouseenter");
                    //  防抖
                      if(this.time1!= null){
                          clearTimeout(this.time1);
                      }
                  
                      this.time1 = setTimeout(()=>{
                          this.subMenuEles.forEach((item)=>{
                               item.classList.remove("active")
                          })
                          console.log("add ing");
                          li.classList.add("itemon")
                          li.children[1].classList.add("active")

                      },150)   
                    })  

        }); 
        this.lis.forEach((element) => {
            element.addEventListener("mouseleave",(e)=>{
          let li = e.target;   
            console.log("mouseleave");
            if(this.time2!= null){
                clearTimeout(this.time2);
            }
            this.time2 = setTimeout(()=>{
                // this.subMenuEles.forEach((item)=>{
                //      item.classList.remove("active")
                // });
                console.log("leave ing");
                this.lis.forEach((item)=>{
                    item.classList.remove("itemon")
                })
                li.children[1].classList.remove("active")

            },150)  


            })  
        });

   }

}