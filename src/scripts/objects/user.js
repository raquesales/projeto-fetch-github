const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName: '',
    followers: '',
    following: '',
    repositories: [],
    events: [],
    setInfo(gitHubUser) {
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
        this.followers = gitHubUser.followers
        this.following = gitHubUser.following
    },
    setRepositories(repositories) {
        this.repositories = repositories
    },
    setEvents(events) {
        this.events = events
    }

}

export { user }

/**
    CRIOU UM OBJ, E DEPOIS SETOU COM OS DADOS QUE VEM NO GIT
    DEPOIS DO . SÃO OS PARAMETROS COMO ESTÃO ESCRITOS NO GIT
    O QUE ESTÁ DENTRO DO () É O NOME DA API
 */