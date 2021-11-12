import { navbar } from "./nav/navigation.js"
import { footer } from "./nav/Footer.js"
import { MessageForm } from "./message/MessageForm.js"
import { postList } from "./feed/PostList.js"
import { postButton, postEntry } from "./feed/PostEntry.js"

export const GiffyGram = () => {
    // Show main main UI


    return `

    ${navbar()}

    <div class="postEntryForm">${postButton()}</div>
    
    <div class="footer_div">
        ${footer()}
    </div>
    

    <section class="postList">${postList()}</section>
    `
}

export const GiffyGramWithPost = () => {
    // Show main main UI with the post entry form
    //once button is clicked, page is rendered using this function, replacing the button with the form

    return `
    ${navbar()}

    <div class="postEntryForm">${postEntry()}</div>

    
    
    <div class="footer_div">
        ${footer()}
    </div>
    


    <section class="postList">${postList()}</section>
    `
}
//this function will run if the message form target is hit
export const GiffyGramWithMessage = () => {
   

    return `<h1>Giffygram</h1>
    ${navbar()}

    <div class="messageEntryForm"> ${MessageForm()} </div>

    
    
    <div class="footer_div">
        ${footer()}
    </div>
    


    <section class="postList">${postList()}</section>
    `
}

