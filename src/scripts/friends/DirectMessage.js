import { getMessages, getUsers } from '../data/provider.js'

export const messageList = () => {
    const messages = getMessages()
    const currentUserId = localStorage.getItem("gg_user")
    const filteredMessages = messages.filter(message => message.recipientId === parseInt(currentUserId))
    const convertMessageToListElement = (message) => {
        const users = getUsers()
        const foundUserObj = users.find(user=>user.id === message.userId)
        return `<li class = "messageItem">
        <h2>${message.messageBody}</h2>
        Written by ${foundUserObj.name}.
        </li>`
    }

    let html = `
    <ul>
    ${filteredMessages.map(convertMessageToListElement).join('')}
    </ul>
    
    `

    return html
}