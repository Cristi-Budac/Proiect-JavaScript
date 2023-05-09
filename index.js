// A DOUA TEMA IN JAVA SCRIPT

// Tipăriți toate numerele pare de la 0 la 10
function numerePare(num, range) {
  let count = 0;

  while (range > 0) {
    if (range % 2 === 0) {
      console.log(range);
    }
    range--;
  }
}
console.log(numerePare(1, 100));

// 2. Calculați suma numerelor dintr-un șir de numere

// Exemplu 1:
let num = 2598;
let sum = 0;
while (num > 0) {
  let rem = num % 10;
  sum = sum + rem;
  num = parseInt(num / 10);
}
console.log(sum);

// Exemplul 2:
let num2 = 259865656;
let sum2 = 0;
while (num2 > 0) {
  let rem = num2 % 10;
  sum2 = sum2 + rem;
  num2 = parseInt(num / 10);
}
console.log(sum2);

// 3. Creați o funcție care inversează un șir de numere

//Exemplul 1:
const sirNumere = `45645645`;
let myReversenum = ``;
for (let i = sirNumere.length - 1; i >= 0; i--) {
  myReversenum = sirNumere[i];
}
console.log(myReversenum);

// Exemplul 2:
const sirNumere2 = `45645645`;
let myReversenum2 = sirNumere2.split("");
letmyRev = myReversenum2.reverse();
console.log(myReversenum2);

// 4. Returnează numărul de vocale dintr-un șir de caractere (string)

// Exemplul 1:
function doarVocale(string) {
  let count = 0;
  const vocale = [`a`, `e`, `i`, `o`, `u`];
  for (let num of string) {
    if (vocale.includes(num)) {
      count++;
    }
  }
  return count;
}
console.log(doarVocale(`eu mananc doar orez`));

// Exemplul 2:
function numaratoareVocale(sir) {
  let count = 0;
  const vocale = "aeiou";
  for (let i = 0; i < sir.length; i++) {
    if (vocale.indexOf(sir[i]) > -1) {
      count++;
    }
  }
  return count;
}

console.log(numaratoareVocale("Cate vocale sunt in acest exemplu"));
