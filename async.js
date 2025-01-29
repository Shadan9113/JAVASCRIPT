async function fetchData() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

    if (!response.ok) {
      // Check for HTTP errors (400, 500, etc.)
      const errorBody = await response.text(); // Try to get error details from the server
      throw new Error(
        `HTTP error! status: ${response.status}, message: ${
          errorBody || "No details"
        }`
      );
    }

    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("network is busy", error);
  }
}
fetchData();
