//get the contents of the root element in the html file
const app = document.getElementById('root')

//Create an image element on the site
const logo = document.createElement('img')
logo.src = 'logo.png'

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(logo)
app.appendChild(container)

var request = new XMLHttpRequest()

request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)

  if (request.status >= 200 && request.status < 400) {
    data.forEach(movie => {
    
    //Create a div with a card class
    const card = document.createElement('div')
    card.setAttribute('class', 'card')
    
    //Create a h1 and set the text content to the film's title
    const h1 = document.createElement('h1')
    //h1 is defined in the CSS file
    h1.textContent = movie.title
    
    //Create a p and set the text content to the film's description
    const p = document.createElement('p')
    //p is likewise defined in the css
    movie.description = movie.description.substring(0, 300) //Limit to first 300 chars
    p.textContent = `${movie.description}...`
    
    //Append the cards to the container element
    container.appendChild(card)
    
    card.appendChild(h1)
    card.appendChild(p)
    
	console.log(movie.title)
    })
  } else {
    console.log('error')
  }
}

request.send()