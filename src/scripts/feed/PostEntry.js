import { savePost, getUsers, getCurrentUser } from "../data/provider.js"




export const postEntry = () => {



    let html = `
        <h2>What would you like to post?</h2>

        <div class="postTitle">
        <label class="label" for "post"></label>
        <input type="text" name="post" class="input" placeholder="Title of post"></input>
        </div>

        <div class="gifUrl">
        <label class="label" for "gif"></label>
        <input type="text" name="gif" class="input" placeholder="Gif Url"></input>
        </div>

        <div class="postStory">
        <label class="label" for "story"></label>
        <textarea type="text" name="story" class="input" placeholder="Story of post"></textarea>
        </div>

        <button class="button" id="postGif">Post my gif!</button>
        <button class="button" id="cancelGif">Cancel</button>
    `
    return html
}

export const postButton = () => {
    let html = `<button class="button" id="postForm">Have a gift to post?</button>`
    return html
}

const applicationElement = document.querySelector(".giffygram")

document.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "postForm") {
        applicationElement.dispatchEvent(new CustomEvent("postEntryAsk"))
    }

})

applicationElement.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "postGif") {
        const users=getUsers()
        const currentUser = getCurrentUser()
        //get what the user typed into the form fields
        const postTitle = document.querySelector("input[name='post']").value
        const imageUrl = document.querySelector("input[name='gif']").value
        const postStory = document.querySelector("textarea[name='story']").value
        const posterId = currentUser
        let currentDate = new Date()
        const dataToSendToAPI = {
            posterId,
            postTitle,
            imageUrl,
            postStory,
            datePosted: currentDate.toLocaleDateString()
        }

        savePost(dataToSendToAPI)
        applicationElement.dispatchEvent(new CustomEvent("statechanged"))
    }

})

///cancel gif post
 document.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "cancelGif") {
       applicationElement.dispatchEvent(new CustomEvent("cancelGif")) //creating a custom event listener that will listen on another module

    }
})