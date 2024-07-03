let userFlavors = prompt(`what flavor's of icecream would you like? Please separate each flavor with a ","`);
let flavorsArray = [];
// console.log(userFlavors)
const inputToArray = () => {
  flavorsArray = userFlavors.split(',');
}

inputToArray();
// console.log(flavorsArray)

const tableOrders = {};

const arrayToObject = () => {
  for (let i = 0; i < flavorsArray.length; i+=1) {
    let flavor = flavorsArray[i];
    if (tableOrders[flavor]) {
      tableOrders[flavor] += 1;
    } else {
      tableOrders[flavor] = 1;
    }
  }
  return tableOrders;
}


arrayToObject();
console.log(tableOrders)
const tableFlavors = Object.keys(tableOrders);

console.log(`The flavors that this table ordered are: ${tableFlavors}`)