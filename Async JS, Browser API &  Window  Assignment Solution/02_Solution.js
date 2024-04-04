// Create a new XMLHttpRequest object
var xhr = new XMLHttpRequest();

// Configure it: GET-request for the URL https://jsonplaceholder.typicode.com/users
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);

// Send the request over the network
xhr.send();

// This will be called after the response is received
xhr.onload = function() {
  if (xhr.status != 200) { // analyze HTTP response status
    console.error(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
  } else { // show the result
    var users = JSON.parse(xhr.response); // parse the response into a JavaScript object
    users.forEach(function(user) {
      console.log(user.name); // log each user's name
    });
}
};

xhr.onerror = function() {
console.error("Request failed");
};