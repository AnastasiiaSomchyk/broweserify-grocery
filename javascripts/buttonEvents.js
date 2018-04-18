const dataGatekeeper = require('./dataGatekeeper');
const cartDom = require('./cartDom');

const goToDepartments = document.getElementById('go-to-departments');
const gotToCart = document.getElementById('go-to-cart');

const departmentsDiv = document.getElementById('departments');
const itemsDiv = document.getElementById('items');
const cartDiv = document.getElementById('cart');

const cartButton = () => {
  gotToCart.addEventListener('click', () => {
    departmentsDiv.innerHTML = '';
    itemsDiv.innerHTML = '';
    cartDiv.innerHTML = '';
    cartDom();
  });
};

const departmentsButton = () => {
  goToDepartments.addEventListener('click', () => {
    departmentsDiv.innerHTML = '';
    itemsDiv.innerHTML = '';
    cartDiv.innerHTML = '';
    dataGatekeeper.initializer();
  });
};

module.exports = {
  departmentsButton,
  cartButton,
};
