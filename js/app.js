const inputValue = document.querySelector("#search");
const searchButton = document.querySelector(".searchButton");
const nameContainer = document.querySelector(".main__profile-name");
const unContainer = document.querySelector(".main__profile-username");
const reposContainer = document.querySelector(".main__profile-repos");
const urlContainer = document.querySelector(".main__profile-url");

const client_id = "lv1.93ebf7027431bb19"
const client_secret = "f8f1381fce2355aacf108f6f7fb7d4014564e010"

const fetchUsers = async (user) => {
    const api_call = await fetch(`https://api.github.com/users/${user}?client_id=${client_id}&client_secret=${client_secret}`)

    const data = await api_call.json()
    return { data }
}

const showData = () => {
    fetchUsers(inputValue.value).then((res) => {

        nameContainer.innerHTML = `Nome: <span class="main__profile-value">${res.data.name}</span>`

        unContainer.innerHTML = `Username: <span class="main__profile-value">${res.data.login}</span>`

        reposContainer.innerHTML = `Repositórios: <span class="main__profile-value">${res.data.public_repos}</span>`

        urlContainer.innerHTML = `Url: <span class="main__profile-value">${res.data.html_url}</span>`
    })
}

searchButton.addEventListener("click", () => {
    showData()
})
