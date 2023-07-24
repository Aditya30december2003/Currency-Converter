let fromCurrency=document.querySelector('.fromC');
let toCurrency=document.querySelector('.toC');
let amount=document.getElementById('amount');
let answer=document.querySelector('.answer');

const host = 'api.frankfurter.app';
fetch(`https://${host}/currencies`)
  .then(data => data.json())
  .then((data) => {
    const entries=Object.entries(data)
    console.log(entries)
    // alert(`10 GBP = ${data.rates.USD} USD`);
    for(var i=0;i<entries.length;i++){
        fromCurrency.innerHTML+=`<option value="${entries[i][0]}">${entries[i][0]}</option>`
        toCurrency.innerHTML+=`<option value="${entries[i][0]}">${entries[i][0]}</option>`
    }

  });

  function converter(){
    var amountVal=amount.value;
    if(fromCurrency.value!=toCurrency.value){
        const host = 'api.frankfurter.app';
       fetch(`https://${host}/latest?amount=${amountVal}&from=${fromCurrency.value}&to=${toCurrency.value}`)
       .then(val => val.json())
       .then((val) => {
        answer.innerHTML=Object.values(val.rates)[0]
        
    // alert(`10 GBP = ${data.rates.USD} USD`);
  });

    }
    else{
        alert("Please select 2 diffrent options")
    }
  }


