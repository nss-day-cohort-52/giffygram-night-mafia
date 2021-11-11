import { getMessages, getUsers } from '../data/provider.js'

export const messageList = () => {
    let posts = getMessages()

    const convertMessageToListElement = (message) => {
        let users = getUsers()
        let foundUserObj = users.find(user=>user.id === message.userId)
        return `<li class = "messageItem">
        <h2>${message.messageContent}</h2>
        Written by ${foundUserObj.name}.
        </li>`
    }

    let html = `
    <ul>
    ${messages.map(convertMessageToListElement).join('')}
    </ul>
    
    `

    return html
}