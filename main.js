const jokeContainer = document.getElementById('joke')
const btn = document.getElementById('btn')
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=political&format=xml"

let getJoke = () => {
    fetch(url)
        .then(response => response.text()) // use .text() instead of .json()
        .then(data => {
            // parse the XML data into a DOM document
            const parser = new DOMParser();
            const xml = parser.parseFromString(data, 'application/xml');
            
            // extract the joke text from the XML document
            const jokeText = xml.querySelector('joke').textContent;
            
            // display the joke text in the HTML
            jokeContainer.innerText = jokeText;
        })
        .catch(error => console.error(error));
}

btn.addEventListener('click', getJoke);
