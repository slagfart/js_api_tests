//get the contents of the root element in the html file
const app = document.getElementById('root')

//Create an image element on the site
const logo = document.createElement('img')
logo.src = 'logo.png'

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(logo)
app.appendChild(container)