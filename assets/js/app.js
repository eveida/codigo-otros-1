// >>>> Calificación Rocío Hernández: 5/5
// >>>> Calificación David Romero : 4/5

const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name');
const $b = document.querySelector('#blog');
const $l = document.querySelector('.location');

//Colocamos async en la función

async function displayUser(username) {
  $n.textContent = 'cargando...';

  //Agregar petición
  try { 
    const response = await fetch(`${usersEndpoint}/${username}`);
    const data = await response.json();

  console.log(data); 
  $n.textContent = `${data.name}`; // backtics
  $b.textContent = `${data.blog}`;
  $l.textContent = `${data.location}`;

} catch (err) { //Error. Cuando se trabaja con peticiones, debe haber un try y un catch
  handleError(err);
}
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);

  //Signo de $
  $n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);
