// const baseURL = 'https://api.covid19api.com/total/country/united-states'; //! COVID-19 API
// const baseURL = 'https://api.covid19api.com/'; //! COVID-19 API 2

// const baseURL = 'http://ergast.com/api/f1/2008/5/results'; //! F1 API

const baseURL = 'https://cat-fact.herokuapp.com/facts';  //! CATFACT API
const searchForm = document.querySelector("button"); 
const catFacts = document.querySelector("ul")
// const section = document.querySelector('section');   // TODO - add back in along with for loop

// const submitBtn = document.querySelector('.submit');

console.log(searchForm, catFacts);
searchForm.addEventListener("click", fetchResults);

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

// ! FETCH & PROMISE (catFacts)
function fetchResults() {
    // console.log(e);              
    event.preventDefault();                 //? FIXME -  Why is preventDefault not working "scripts.js:27 Uncaught TypeError: Cannot read property 'preventDefault' of undefined at fetchResults (scripts.js:27) at scripts.js:41"
    
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

// fetchResults();

// ! ADD API RESULTS TO DOCUMENT (catFacts)
function displayResults(json) {
    console.log('Display Results', json);

    // while (section.firstChild) {                 //TODO - Uncomment this section 
    //     section.removeChild(section.firstChild);
    // }

git
    json.forEach(e => {
        console.log(e);
        let catObject = document.createElement("li");
        catObject.innerText = e.text;
        catFacts.appendChild(catObject);
    })

        // FIXME -  display each fact seprately along with a another element (like created/updated at) received from the API
        let catObjectOne = document.createElement("li");
        let catObjectTwo = document.createElement("li");
        let catObjectThree = document.createElement("li");
        let catObjectFour = document.createElement("li");
        let catObjectFive = document.createElement("li");

        catObjectOne.innerText = `First shared on: ${catFacts[0].updatedAt}`;
        catObjectTwo.innerText = `First shared on: ${catObject[1].updatedAt}`;
        catObjectThree.innerText = `First shared on: ${catObject[2].updatedAt}`;
        catObjectFour.innerText = `First shared on: ${catObject[3].updatedAt}`;
        catObjectFive.innerText = `First shared on: ${catObject[4].updatedAt}`;

        catFacts.appendChild(catObjectOne);
        catFacts.appendChild(catObjectOne);
        catFacts.appendChild(catObjectOne);
        catFacts.appendChild(catObjectOne);
        catFacts.appendChild(catObjectOne);
    
}



// ! FIXME - Try using forloop method instead of foreach

//     while (section.firstChild) {
//         section.removeChild(section.firstChild);
//     }

//     let articles = json.response.docs;
//     console.log(articles);
    
//     if (articles.length === 0) {
//         console.log('No results');

//     } else {
//         for (let i = 0; i < articles.length; i++) {
//             // console.log(i);
//             let article = document.createElement('article');
//             let heading = document.createElement('h2');
//             let link = document.createElement('a');
//             let img = document.createElement('img');
//             let para = document.createElement('p');
//             let clearfix = document.createElement('div');
//             let current = articles[i];
//             console.log('Current:', current);
//             link.href = current.web_url;
//             link.textContent = current.headline.main;
//             para.textContent = 'Keywords: ';
//             for (let j = 0; j < current.keywords.length; j++) {
//                 let span = document.createElement('span');
//                 span.textContent += current.keywords[j].value + ' ';
//                 para.appendChild(span);
//             }
//             if (current.multimedia.length > 0) {
//                 img.src = 'http://www.nytimes.com/' + current.multimedia[0].url;
//                 img.alt = current.headline.main;
//             }
//             clearfix.setAttribute('class', 'clearfix');
//             heading.appendChild(link);
//             article.appendChild(heading);
//             article.appendChild(img);
//             article.appendChild(para);
//             article.appendChild(clearfix);
//             section.appendChild(article);
//         }
//     }
//     if (articles.length === 10) {
//         nav.style.display = 'block';
//     } else {
//         nav.style.display = 'none';
//     }
// }

