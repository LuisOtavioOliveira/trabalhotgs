const getUsername = () => {
    const name = document.getElementById('inputname').value
    console.log(name)

}

const replaceName = () => {
    const place = document.getElementById('welcomename')
    place.innerText = `Olá, ${sessionStorage.getItem('name')}!`
}



replaceName();
