function calculate() {
	//declaration and initializatio of required variables
	const amount = parseFloat(document.getElementById("amount").value);

	//check for amount to be a number
	if (isNaN(amount)) {
	  //clear all the fields.
	  document.getElementById('retained_earning').textContent = "";
	  document.getElementById('tax_owed').textContent = "";
	  document.getElementById('tax_rate').textContent = "";
	  document.getElementById("error").textContent = "";
	  document.getElementById('amount').value = '';
	  
	  //show the Error Message
	  document.getElementById("error").textContent = "Error: enter a number";
	} 
	else {
		
	  //Perform the task if amount is a number
	  
	  //declaration and initializatio of required variables
	  let tax_owed, total_amount = amount;
	  
	  //check required conditions
	  if (amount <= 48535) {
		tax_owed = (amount * 0.15).toFixed(2);
	  } else if (amount > 48535 && amount <= 97069) {
		tax_owed = 48535 * 0.15;
		amount = amount - 48535;
		tax_owed += amount * 0.205;
		tax_owed = tax_owed.toFixed(2);
	  } else if (amount > 97069 && amount <= 150473) {
		tax_owed = 48535 * 0.15;
		tax_owed += 48534 * 0.205;
		amount = amount - 48535 - 48534;
		tax_owed += amount * 0.26;
		tax_owed = tax_owed.toFixed(2);
	  } else if (amount > 150473 && amount <= 214368) {
		tax_owed = 48535 * 0.15;
		tax_owed += 48534 * 0.205;
		tax_owed += 53404 * 0.26;
		amount = amount - 48535 - 48534 - 53404;
		tax_owed += amount * 0.29;
		tax_owed = tax_owed.toFixed(2);
	  } else if (amount > 214368) {
		tax_owed = 48535 * 0.15;
		tax_owed += 48534 * 0.205;
		tax_owed += 53404 * 0.26;
		tax_owed += 63895 * 0.29;
		amount = amount - 48535 - 48534 - 53404 - 63895;
		tax_owed += amount * 0.33;
		tax_owed = tax_owed.toFixed(2);
	  }

	  //show calculated values in corresponding DOM elements
	  document.getElementById('tax_owed').textContent = "$"+tax_owed;
	  document.getElementById('tax_rate').textContent = ((tax_owed/total_amount)*100).toFixed(2);
	  document.getElementById('retained_earning').textContent = "$"+(total_amount-tax_owed);
	  document.getElementById("error").textContent = "";
	}
}

function clearAll() {
	
	//clear All Fields by setting their content value to null
	document.getElementById('retained_earning').textContent = "";
	document.getElementById('tax_owed').textContent = "";
	document.getElementById('tax_rate').textContent = "";
	document.getElementById("error").textContent = "";
	document.getElementById("error").textContent = "";
	document.getElementById('amount').value = '';
}