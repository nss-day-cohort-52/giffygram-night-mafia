import { footer } from "./nav/Footer.js"
import {postList} from "./feed/PostList.js"

export const GiffyGram = () => {
    // Show main main UI
    return `<h1>Giffygram</h1>
    
    <div class="footer_div">
        ${footer()}
    </div>
    

    <section class="postList">${postList()}</section>
    `
}
