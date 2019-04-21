console.log('app.js');

let employeeArray = [];
let monthlyBudget = 20000;

$(document).ready(isReady);


function isReady(){
    console.log('JQ');
    $('#submitBtn').on('click', logEmployee )
} //End isReady

let firstName = $( '#firstfName').val();
console.log( firstName);

$( '#firstName').val('');