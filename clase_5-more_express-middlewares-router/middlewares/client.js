import * as url from 'url';
/* const __filename = url.fileURLToPath(import.meta.url); */
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

// si el dato es un form-urlencoded:
const data = new FormData();
let parsedData = {};
data.append('name', 'Rodrigo');
data.forEach((value, key) => (parsedData[key] = value));
const stringfyData = JSON.stringify(parsedData);

const fetchGetWithId = () =>
  fetch('http://localhost:5000/user/64654', {
    method: 'get',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic 12345678',
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data));

const fetchGetWithQueries = () =>
  fetch('http://localhost:5000/user?name=Rodrigo&lastname=Nascimento', {
    method: 'get',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic 12345678',
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data));

const fetchPosttWithId = () =>
  fetch('http://localhost:5000/user', {
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic 12345678',
    },
    body: stringfyData,
  })
    .then((res) => {
      console.log(`
      ${res.statusText} - Status: ${res.status}
    `);
      return res.json();
    })
    .then((data) => console.log(data));

// fetchGetWithQueries();
fetchPosttWithId();
