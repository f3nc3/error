// Function to add two numbers
function addNumbers(a, b) {
    try {
      // Check if inputs are numbers
      if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error("Both arguments must be numbers.");
      }
      
      // Return the sum
      return a + b;
    } catch (error) {
      // Handle the error
      console.error("Error:", error.message);
      return null; // Return null in case of error
    }
  }
  
  // Example usage
  console.log(addNumbers(5, 10)); // Outputs: 15
  console.log(addNumbers(5, "10")); // Triggers an error
  console.log(addNumbers("5", "10")); // Triggers an error
  console.log(addNumbers(5, 10)); // Outputs: 15
  