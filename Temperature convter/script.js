function convert() {
	// Get user inputs
	var convertFrom = document.getElementById("convert-from").value;
	var convertTo = document.getElementById("convert-to").value;
	var inputValue = document.getElementById("input-value").value;
  
	// Convert input value to number
	var numValue = parseFloat(inputValue);
  
	// Convert temperature based on user inputs
	var result;
	if (convertFrom === "celsius" && convertTo === "fahrenheit") {
	  result = (numValue * 9/5) + 32;
	} else if (convertFrom === "celsius" && convertTo === "kelvin") {
	  result = numValue + 273.15;
	} else if (convertFrom === "fahrenheit" && convertTo === "celsius") {
	  result = (numValue - 32) * 5/9;
	} else if (convertFrom === "fahrenheit" && convertTo === "kelvin") {
	  result = (numValue + 459.67) * 5/9;
	} else if (convertFrom === "kelvin" && convertTo === "celsius") {
	  result = numValue - 273.15;
	} else if (convertFrom === "kelvin" && convertTo === "fahrenheit") {
	  result = (numValue * 9/5) - 459.67;
	} else {
	  result = numValue;
	}
  
	// Display the result
	document.getElementById("result").innerHTML = result.toFixed(2);
  }
  