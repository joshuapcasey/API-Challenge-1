// const baseURL = 'https://api.covid19api.com/summary'; //! COVID-19 API
// const baseURL = 'http://ergast.com/api/f1/2008/5/results'; //! F1 API

const baseURL = 'https://cat-fact.herokuapp.com/facts';  //! CATFACT API
const searchForm = document.querySelector("form"); //! Add back in for posting api response
const catFacts = document.querySelector("ul")
const submitBtn = document.querySelector('.submit');

console.log(searchForm, catFacts);
searchForm.addEventListener("button", fetchResults());

// const searchTerm = document.querySelector('.search');
// const startDate = document.querySelector('.start-date');
// const endDate = document.querySelector('.end-date');
// const catfactBtn = document.querySelector('.submit');
// const nextBtn = document.querySelector('.next');
// const previousBtn = document.querySelector('.prev');
// const nav = document.querySelector('nav');
// const section = document.querySelector('section');
// nav.style.display = 'none';
// let pageNumber = 0;

// console.log('PageNumber:', pageNumber);
// nextBtn.addEventListener('click', nextPage);
// previousBtn.addEventListener('click', previousPage);

// ! FETCH & PROMISE
function fetchResults() {
    // console.log(e);              //? Why is preventDefault not working "scripts.js:27 Uncaught TypeError: Cannot read property 'preventDefault' of undefined at fetchResults (scripts.js:27) at scripts.js:41"
    // preventDefault();
    
    fetch(baseURL)
        .then(function (result) {
            console.log(result)
            return result.json();
        })
        .then(function (json) {
            console.log(json);
            displayResults(json);
        })

}

// ! ADD API RESULTS TO DOCUMENT
function displayResults(json) {
    console.log('Display Results', json);
    json.forEach(r => {
        console.log(r);
        let catObject = document.createElement("li");
        catObject.innerText = r.text;
        catFacts.appendChild(catObject);
    })

    let catObjectOne = document.createElement("li");
    let catObjectTwo = document.createElement("li");
    let catObjectThree = document.createElement("li");
    let catObjectFour = document.createElement("li");
    let catObjectFive = document.createElement("li");

    // catObjectOne.innerText = 'lovingly added at: ${catFacts[0].createdAt}';
    catObjectOne.innerText = `${catObject[0].createdAt}`;

}

// fetchResults();





// ! ALTERNATE FETCH SYNTAX
//     fetch(baseURL)
//     .then(results => {
//         console.log(results);
//         return results.json();
//     })
//     .then(json=> {
//         console.log(json);
//         displayResults(json);
//     })
//     .catch(err => console.log(err))
// }