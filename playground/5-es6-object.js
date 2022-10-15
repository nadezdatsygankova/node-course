const nameUser = 'Nadia';
const lastName = 'Tsy';

const fullName = {
  name: nameUser,
  lastName,
  address: 'Toronto'
}

console.log(fullName.lastName)

const product = {
  nameItem: "book",
  stock: 205,
  location: 'Toronto'
}

const {nameItem, stock, location, country="CAN"} = product;
console.log(nameItem, stock, location, country)

const transaction = (item, {stock})=> {
     console.log(item, stock )
}

transaction('book', product);