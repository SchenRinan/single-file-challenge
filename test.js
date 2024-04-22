// Make an HTTP request to fetch the webpage content
fetch('https://www.dictionary.com/e/word-of-the-day/')
  .then(response => {
    // Check if the request was successful
    if (!response.ok) {
      throw new Error('Failed to fetch the webpage');
    }
    // Parse the response text as HTML
    return response.text();
  })
  .then(html => {
    // Create a temporary element to parse the HTML
    const tempElement = document.createElement('div');
    tempElement.innerHTML = html;

    // Find the element containing the word of the day
    const wordOfTheDayElement = tempElement.querySelector('h1.js-fit-text');

    // Extract the word of the day from the element
    const wordOfTheDay = wordOfTheDayElement.textContent.trim();

    // Output the word of the day
    console.log('Word of the day:', wordOfTheDay);
  })
  .catch(error => {
    console.error('Error:', error);
  });