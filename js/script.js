let element = document.getElementById("dado");
let dado = element.children[0];

function result() {
  let n = Math.round(Math.floor() * 7);

  element.classList.toggle("is-open");

  console.log(n);

  switch (n) {
    case 1:
      element.innerHTML = '<img src="./assets/1.svg" alt="Dado - Resultado 1">';
      console.log(dado);
      break;
    case 2:
      element.innerHTML = '<img src="./assets/2.svg" alt="Dado - Resultado 2">';
      break;
    case 3:
      element.innerHTML = '<img src="./assets/3.svg" alt="Dado - Resultado 3">';
      break;
    case 4:
      element.innerHTML = '<img src="./assets/4.svg" alt="Dado - Resultado 4">';
      break;
    case 5:
      element.innerHTML = '<img src="./assets/5.svg" alt="Dado - Resultado 5">';

      break;
    case 6:
      element.innerHTML = '<img src="./assets/6.svg" alt="Dado - Resultado 6">';
      break;

    default:
      element.innerHTML = '<img src="./assets/1.svg" alt="Dado - Resultado 1">';
      break;
  }
}
