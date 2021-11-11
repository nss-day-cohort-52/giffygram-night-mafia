import { navbar } from "./nav/navigation.js"
import { footer } from "./nav/Footer.js"
import {postList} from "./feed/PostList.js"
import {postEntry} from "./feed/PostEntry.js"

export const GiffyGram = () => {
    // Show main main UI
    
    return `<h1>Giffygram</h1>
    ${navbar()}

    <div class="postEntryForm">${postEntry()}</div>
    
    <div class="footer_div">
        ${footer()}
    </div>
    

    <section class="postList">${postList()}</section>
    `
}
