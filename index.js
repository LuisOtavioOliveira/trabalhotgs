const getUsername = () => {
    const name = document.getElementById('inputname').value
    console.log(name)
    localStorage.setItem('name', name);

}

const replaceName = () => {
    const place = document.getElementById('welcomename')
    place.innerText = `Olá, ${localStorage.getItem('name')}!`
}



replaceName();
