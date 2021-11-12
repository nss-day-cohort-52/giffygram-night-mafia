import { LoginForm } from "../auth/Login.js"
import { MessageForm } from "../message/MessageForm.js"
import { getMessages } from "../data/provider.js"



const applicationElement = document.querySelector(".giffygram")

document.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "directMessageIcon") {
       applicationElement.dispatchEvent(new CustomEvent("messageForm")) //creating a custom event listener that will listen on another module

    }
})



//!Below is event listener for log out button needs functionality

// document.addEventListener("click", clickEvent => {
//        if (clickEvent.target.id === "logout") {
//         applicationElement.innerHTML = LoginForm()
      
//     }
// })




//! The counter is recording the messages, but still needs to make currentuser to user

  

export const navbar = ()=>{
let messages = getMessages()

    let navbarhtml= `
       <navbar class="navigation">
           <div class="navigation__icon"> <img src="images/pb.png" alt="giffy logo"/> </div>
           <div id="navigation__name">GiffyGram</div>
           <div id="directMessageIcon"> Pen  <img id ="directMessageIcon" src="images/fountain-pen.svg" alt="pen"/> </div>
           <div class="notification__count"> ${messages.length} </div> </div>
           <button id="logout"> logout </button>
       
       </navbar>
   
       `
       return navbarhtml
   }

  