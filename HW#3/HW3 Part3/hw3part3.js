/**
 * Formula for converting fahrenheit to celsius (32°F − 32) × 5/9 = 0°C
 * Function to convert Fahrenheit to Celsius
 */
function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * (5 / 9);
}

/**
 * Formula for converting celsius to fahrenheit (0°C × 9/5) + 32 = 32°F
 * Function to convert Celsius to Fahrenheit
 */
function celsiusToFahrenheit(celsius) {
  return celsius * (9 / 5) + 32;
}

// Function to handle user input and conversion
function temperatureConverter() {
  const choice = prompt(
    "Enter 1 to convert from Celsius to Fahrenheit, or 2 to convert from Fahrenheit to Celsius:"
  );

  if (choice === "1") {
    const celsius = parseFloat(prompt("Enter the temperature in Celsius:"));
    const fahrenheit = celsiusToFahrenheit(celsius);
    console.log(celsius + "°C is equal to " + fahrenheit + "°F.");
  } else if (choice === "2") {
    const fahrenheit = parseFloat(
      prompt("Enter the temperature in Fahrenheit:")
    );
    const celsius = fahrenheitToCelsius(fahrenheit);
    console.log(fahrenheit + "°F is equal to " + celsius + "°C.");
  } else {
    console.log("Invalid choice. Please enter either 1 or 2.");
  }
}

// Call the temperatureConverter function to start the program
temperatureConverter();
