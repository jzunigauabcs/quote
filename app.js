async function getQuote() {
    const API = 'https://api.quotable.io/quotes/random';
    
    return fetch(API)
   .then(response => response.json())
    .then(data => data[0])
}

const loader = document.querySelector('.lds-roller');
loader.classList.remove('hidden');
getQuote().then(data => {
    if(data) {
        const content = document.querySelector('.content');
        content.innerHTML = `<i class="fas fa-quote-left"></i> ${data.content} <i class="fas fa-quote-right"></i>`;
        const autor = document.querySelector('.author');
        autor.appendChild(document.createTextNode(data.author));

    }
    loader.classList.add('hidden');
})
