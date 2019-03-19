//Create a new request variable and assign this inbuilt XHR object slash method to it
var my_req = new XMLHttpRequest()

//Open a new connection, using the GET request on the URL endpoint
my_req.open('GET', 'https://ghibliapi.herokuapp.com/films', true)

//Do something when the data from the API call returns, but not before (onload function)
my_req.onload = function () {
	
	//Begin accessing JSON here
	var my_data = JSON.parse(this.response)


	//check if errors version
	if (my_req.status >= 200 && my_req.status < 400) {
		my_data.forEach(movie => {
			console.log(movie.title)
		})
	} else {
		console.log('error')
	}
}


//Send the built request
my_req.send()
