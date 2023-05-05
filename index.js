// Returnează un boolean dacă un număr este divizibil cu 10

function divizibilCuZece(număr) {
  if (număr % 10 === 0) return true;
  else return false;
}
console.log("Exemplu 1");
console.log(divizibilCuZece(100));

console.log("Exemplu 2");
console.log(divizibilCuZece(54));

//  Scrieți o funcție numită tellFortune care

function tellFortune(N, Z, Y, X) {
  const output = `Vei fi un ${X} în ${Y}, căsătorit cu ${Z} și vei avea ${N} copii.`;

  console.log(output);
}
tellFortune(2, "Andrada", "Romania", "Programator");

// Folosind instrucțiunea JavaScript switch se va obține ziua săptămânii

function numeleUneiZileASaptamanii(myNumber) {
  switch (myNumber) {
    case 1:
      day = "Luni";
    case 2:
      return "Marti";
    case 3:
      return "Miercuri";
    case 4:
      return "Joi";
    case 5:
      return "VIneri";
    case 6:
      return "Sambata";
    case 7:
      return "Duminica";
    default:
      return "Nu sunt mai mult de 7 zile intr-o saptamana";
  }
}
console.log(numeleUneiZileASaptamanii(3));
