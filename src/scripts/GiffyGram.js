import { navbar } from "./nav/navigation.js"
import {postList} from "./feed/PostList.js"

export const GiffyGram = () => {
    // Show main main UI
    
    return `<h1>Giffygram</h1>
    ${navbar()}
    <section class="postList">${postList()}</section>
    `
}
