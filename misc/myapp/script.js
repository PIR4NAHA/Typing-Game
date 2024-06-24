const RANDOM_QUOTE_API_URL = 'http://api.quotable.io/random'
const quoteDisplayElement = document.getElementById('quoteDisplay')
const server = 'http://localhost:3000'

function getRandomQuote() {
    var quote = fetch(RANDOM_QUOTE_API_URL)
        .then(response => response.json())
        
    return quote.data.content
    // return fetch(RANDOM_QUOTE_API_URL)
        // .then(response => response.json())
        // .then(data => data.content)
}

async function renderNewQuote() {
    const quote = await getRandomQuote()
    quoteDisplayElement.innerHTML = quote
    quote.split('').forEach(character => {
        const characterSpan = document.createElement('span')
        characterSpan.innerText = character
        quoteDisplayElement.appendChild(characterSpan)
      })
}




renderNewQuote()