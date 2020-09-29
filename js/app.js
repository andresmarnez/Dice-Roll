/**
 * This function will genberate a random number and update de html
 * based on how many faces does the die contain.
 *
 * @param {number} face - A number
 * @return {boolean} Return true if it showed the number correctly
 *
 * @example
 * roll(20);
 *
 */

const roll = () => {
  var result = Math.floor(Math.random()*dice[actualface] + 1);
  let texto = document.querySelector("main");

  if(texto != null){
    texto.innerHTML = `<h1>${result}</h1>`;
    console.log(result);
    return true;
  }

  else throw console.error(`Error with the main HTML object, main = " ${texto} "`);
}

const minus = () => {
  actualface--;

  if(actualface<0){
    actualface=dice.length - 1;
  }
}

const more = () => {
  actualface++;

  if (actualface>4) {
    actualface = 0;
  }
}

/**
 * These global variables will indicate on which die the user is situated.
 *
 * @let {number}
 * @let {array [number,number,number,number,number]}
 */

let actualface = 4;
let dice = ["4","6","8","12","20"];
