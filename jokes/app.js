const joke_button = document.querySelector('#create_joke');
const joke_section = document.querySelector('#Joke_container');

const getJoke = async function() {
    //concept of header issue in the api's   
    const config = { headers: { Accept: 'application/json' } };
    const res = await axios.get('https://icanhazdadjoke.com/', config);
    console.log(res.data.joke);
    const li = document.createElement('LI');
    li.innerText = res.data.joke;
    joke_section.append(li);
}

// Add an event listener to the button to fetch a joke when clicked
joke_button.addEventListener('click', getJoke);
