

function currentMonth(){
    var today = new Date();
    var month = today.toLocaleString('default', {month: 'long'} );
    return month
    
}
month = currentMonth()
let elm = document.getElementById('deal-month')
elm.innerText = month + " ALL MONTH 20% OFF";
console.log(month)


