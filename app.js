function calculate() 
{

	var loanAmount=document.getElementById("loanAmount").value;
	var interestRate=document.getElementById("interestRate").value;
	var duration=document.getElementById("duration").value;

	var errorMessage = document.getElementById("errorMessage");
	
	errorMessage.style.display = 'none';
	errorMessage.innerHTML = '';


	if (isNaN(loanAmount) || loanAmount <= 0) {
		//alert("Plesse enter valid loanAmount")
	errorMessage.style.display = 'block';
	errorMessage.innerHTML = 'Invalid loanAmount';
		return;
	}
	
	if (isNaN(interestRate) || interestRate <= 0) {
		//alert("Plesse enter valid interestRate")
	errorMessage.style.display = 'block';
	errorMessage.innerHTML = 'Invalid interestRate';
	return;
	}
	
	if (isNaN(duration) || duration <= 0) {
		//alert("Plesse enter valid duration")
	errorMessage.style.display = 'block';
	errorMessage.innerHTML = 'Invalid duration';
	return;
	}


	interestRate = interestRate / (12 * 100);
	duration = duration * 12;
	
	var emi = loanAmount * Math.pow(1 + interestRate,duration) / (Math.pow(1 + interestRate,duration) - 1)
	document.getElementById('emi').innerHTML = formatToIndianCurrency(emi.toFixed(0));

	var totalPayment = emi * duration;
	document.getElementById('totalPayment').innerHTML = formatToIndianCurrency(totalPayment.toFixed(0));

	var totalInterest = totalPayment - loanAmount;
	document.getElementById('totalInterest').innerHTML = formatToIndianCurrency(totalInterest.toFixed(0));

}

//here it is called globally because when page gets loaded it displays automatically
calculate();

function formatToIndianCurrency(x){

     x=x.toString();
    var afterPoint = '';
    if(x.indexOf('.') > 0)
       afterPoint = x.substring(x.indexOf('.'),x.length);
    x = Math.floor(x);
    x=x.toString();
    var lastThree = x.substring(x.length-3);
    var otherNumbers = x.substring(0,x.length-3);
    if(otherNumbers != '')
        lastThree = ',' + lastThree;
    var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree + afterPoint;
    
return res;

}
