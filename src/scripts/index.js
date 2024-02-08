import { getUser } from "./services/user.js"
import { getRepositories } from "./services/repositories.js"
import { getEvent } from "./services/events.js"
import { user } from "./objects/user.js"
import { screen } from "./objects/screen.js"

document.getElementById('btn-search').addEventListener('click', () => {
    const userName = document.getElementById('input-search').value
    if(validateEmptyInput(userName)) return
    getUserData(userName)
})

/** Buscando qdo o usuário teclar 'Enter' */
document.getElementById('input-search').addEventListener('keyup', (e) => {
    const userName = e.target.value
    const key = e.which || e.keyCode /** pega o cód da tecla apertada */
    const isEnterKeyPressed = key === 13 /* verificando se a tecla apertada tem o cod 13 = cod do enter no js */

    if(isEnterKeyPressed) {
        if(validateEmptyInput(userName)) return  // tem que colocar o return para parar o cod
        getUserData(userName)
    }
})

function validateEmptyInput(userName) {
    if (userName.length === 0){
        alert('Preencha o campo com o nome do usuário do GitHub')
        return true
    }
}

async function getUserData(userName) {

    const userResponse = await getUser(userName)

    if(userResponse.message === "Not Found") {
        screen.renderNotFound()
        return
    }

    const repositoriesResponse = await getRepositories(userName)
    const eventsResponse = await getEvent(userName)

    user.setInfo(userResponse)
    user.setRepositories(repositoriesResponse)
    user.setEvents(eventsResponse)

    screen.renderUser(user)
    
}





