import { sendMessage } from "./provider.js"
import { lettersAuthor } from "./Authors.js"
import { lettersTopic } from "./Topics.js"
import { lettersRecipient } from "./Recipients.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "sendLetter") {
        // Get what the user typed into the form fields
        const userPenPal = document.querySelector("[name='penPal']").value  //accessing a compoenent of the DOM based on what's in the (), returning the value of penPal.  
        const userLetter = document.querySelector("[name='letter']").value  
        const userTopic = document.querySelector("[name='topic']").value
        const userRecipient = document.querySelector("[name='recipient']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            authorId: parseInt(userPenPal),
            message: userLetter,
            topicId: parseInt(userTopic),
            recipientId: parseInt(userRecipient)
        }

        // Sends new letter data to the API for permanent storage
        sendMessage(dataToSendToAPI)
    }
})
// HTML setup of what will be displayed in the browser
export const ComposeMessages = () => {
    let html =  `
    <div class="field">
    <label class="label" for="penPal"></label>
    ${messagesAuthor()}
    </div>
    <div class="field">
        <label class="label" for="letter">Letter</label>
        <textarea name="letter" class="letterInput" /></textarea>
    </div>
    <div class="field">
    <label class="label" for="topic"></label>
    ${messagesTopic()}
    </div>
    <div class="field">
        <label class="label" for="recipient">Recipient</label>
        ${messagesRecipient()}
    </div>

    <button class="button" id="sendMessage">Send Message</button>
`
    return html
}