import { getPosts, getUsers } from '../data/provider.js'

export const postList = () => {
    const posts = getPosts()

    

    const convertPostToListElement = (post) => {
        const users = getUsers()
        
        const foundUserObj = users.find(user=>user.id === post.posterId)
        if (foundUserObj === undefined) {
        return `<li class = "postItem">
        <h2>${post.postTitle}</h2>
        <img src = "${post.imageUrl}" alt="${post.postTitle}"/>
        <div class = "gif">${post.postStory}</div>
        
        </li>`
        } else{
            return `<li class = "postItem">
        <h2>${post.postTitle}</h2>
        <img src = "${post.imageUrl}" alt="${post.postTitle}"/>
        <div class = "gif">${post.postStory}</div>
        Posted by ${foundUserObj.name}.
        </li>`
        }
    }

    const html = `
    <ul>
    ${posts.map(convertPostToListElement).join('')}
    </ul>
    
    `

    return html
}