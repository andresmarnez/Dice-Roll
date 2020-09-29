/**
 * This function will generate a random number and update de html
 * based on how many faces does the die contain.
 *
 * @param {number} face - A number
 * @return {boolean} Return true if it showed the number correctly
 *
 * @example
 * roll(20);
 * https://devhints.io/jsdoc
 */

const roll = () => {
  var result = Math.floor(Math.random()*dice[actualface] + 1);
  let texto = document.querySelector("main");
  let log = document.getElementById("history");

  if(texto != null){
    texto.innerHTML = `<h1>${result}</h1>`;
  }
  else throw console.error(`Error with the main HTML object, main = " ${texto} "`);

  if(log != null){

    var inner = log.innerText;
    if (inner === "" || inner.length > 28) log.innerText = `${result}`;
    else log.innerText = `${inner}, ${result}`;
    return true;
  }
  else throw console.error(`Error with the main HTML object, main = " ${log} "`);
}

/**
 * This function will change de dice we are currently rolling in both js and html img.
 *
 * @example
 * minus();
 *
 */
const minus = () => {
  actualface--;

  if(actualface<0){
    actualface=dice.length - 1;
  }
  const img = document.getElementById("die");
  img.src = diceimgurl[actualface];
}

/**
 * This function will change de dice we are currently rolling in both js and html img.
 *
 * @example
 * more();
 *
 */

const more = () => {
  actualface++;

  if (actualface>4) {
    actualface = 0;
  }
  const img = document.getElementById("die");
  img.src = diceimgurl[actualface];
}

/**
 * These global variables will indicate on which die the user is situated.
 *
 * @let {number}
 * @const {array [number,number,number,number,number]}
 * @const {array [string,string,string,string,string]}
 */

let actualface = 4;
const dice = ["4","6","8","12","20"];
const diceimgurl = ["img/d4.png","img/d6.png","img/d20.png","img/d20.png","img/d20.png"];
