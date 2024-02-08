/**
  cód responsável por colocar as informações criadas no js
  no HTML.  
*/

const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `<div class = "info">
                                            <img src="${user.avatarUrl} alt="Foto do perfil do usuário" />
                                            <div class="data">
                                                <h1> ${user.name ?? 'Não possui nome cadastrado 😢'}</h1>
                                                <p> ${user.bio ?? 'Não possui bio cadastrado 😢'}</p> <br>
                                                <div> 
                                                    <p> Seguidores: ${user.followers ?? ' '}</p>
                                                    <p> Seguindo: ${user.following ?? ' '}</p>
                                                </div>
                                            </div>
                                        </div>`

        /* '??' = null coalescing: caso o usuário não tenha o nome ou bio */

        /* 
           abaixo cria um monte de li para mostrar o repositório
           lembrando que 'repo' depois do forEach é o repositório atual

           vê se existe repositório a ser mostrado daí cria uma ul, para colocar as lis acima 
        */

        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens += `<div> <li> <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                                                                <div>
                                                                    <p>🍴 ${repo.forks} </p>
                                                                    <p> ✨ ${repo.stargazers_count} </p>
                                                                    <p> 👀 ${repo.watchers} </p>
                                                                    <p> 🖥️ ${repo.language} </p> 
                                                                </div>
                                                                </li> </div>`)

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class = "repositories section">
                                                <h2>Repositórios</h2>
                                                <ul>${repositoriesItens}</ul>
                                            </div>`
        }

        let eventsItems = ''  

        user.events.forEach(eventRepo => {
            if(eventRepo.type === 'PushEvent') {
                eventsItems += `<li> <span>${eventRepo.repo.name}</span> - ${eventRepo.payload.commits[0].message} </li>`
            } else if (eventRepo.type === 'CreateEvent') {
                eventsItems += `<li> ${eventRepo.repo.name} - Não possui commits. </li>`

            }
        })
            
        if (user.events.length > 0) {
            
            this.userProfile.innerHTML += `<div class = "events section">
                                                <h2>Eventos</h2><br>
                                                <ul>${eventsItems} </ul> 
                                                <br><br>
                                            </div>`
        }
    },
    renderNotFound() {
        this.userProfile.innerHTML = "<h3>Usuário não encontrado.</h3>"
    },

    renderEvents(user) {
        // this.userProfile.innerHTML = "<"
        console.log()
    }
}
export { screen }