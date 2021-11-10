import { getPosts, getUsers } from '../data/provider.js'

export const postList = () => {
    let posts = getPosts()

    const convertPostToListElement = (post) => {
        let users = getUsers()
        let foundUserObj = users.find(user=>user.id === post.posterId)
        return `<li class = "postItem">
        <h2>${post.postTitle}</h2>
        <img src = "${post.imageUrl}" alt="${post.postTitle}"/>
        <div class = "gif">${post.postStory}</div>
        Posted by ${foundUserObj.name}.
        </li>`
    }

    let html = `
    <ul>
    ${posts.map(convertPostToListElement).join('')}
    </ul>
    
    `

    return html
}