


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
    `
    return html
}

