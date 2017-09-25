const app = "I don't do much.";

// w/ xhr

// let xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://api.github.com/repos/jquery/jquery/commits');
// xhr.responseType = 'json';
//
// xhr.onload = function() {
//   console.log(xhr.response);
// };
//
// xhr.onerror = function() {
//   console.log('Booo');
// };
//
// xhr.send();

//w/ fetch()

fetch('https://api.github.com/repos/jquery/jquery/commits')

  .then(res => res.json()) // getting resp. from fetch - using json to turn into json
  .then(json => console.log(json)); // then passing json to console log



  const token = 'ef6e0be756fe4f756a1170b2e49d0738ec18f43b'
  fetch('https://api.github.com/user/repos', {
    headers: {
      Authorization: `token ${token}`
    }
    }).then(res => res.json()).then(json => console.log(json));
    
