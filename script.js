//your JS code here. If required.
async function fetchAndLog() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await response.json();
    console.log("API Response:", data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Run the async function
fetchAndLog();