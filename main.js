

// from HTML:
const titleDisplay = document.querySelector(".title-display");
let searchInput = document.querySelector(".search-input");
// const searchButton = document.querySelector(".search-button");
const searchButton = document.getElementById("search-button");
// 
let addInput = document.querySelector(".add-input");
let addNumber = document.querySelector(".add-number");
const addTitleBtn = document.querySelector(".add-new");

// end of from html:::::::::::::::::::::::::::

const favTitles = [
    {
        title: "gotham",
        epNumber: 22,
    },

    {
        title: "code Geass",
        epNumber: 44,
    },

    {
        title: "supernaturals",
        epNumber: 222,
    },

    {
        title: "nana",
        epNumber: 42,
    },

]

const searchTitles = (e) => {
    // przekazanie array do funkcj na eventListener jako myParam::
    let array = e.currentTarget.myParam;

    let inputTxt = searchInput.value.toLowerCase();

    for (let i=0; i<array.length; i++){

        if(array[i].title.toLowerCase() === inputTxt ) {
            titleDisplay.textContent = array[i].title + ": " + array[i].epNumber + " episodes";
            const newTitleDiv = document.createElement("div");
            document.body.appendChild(newTitleDiv);
            newTitleDiv.classList.add("title-display");
            newTitleDiv.textContent = array[i].title;
            // titleDisplay.textContent = "";
            return
        } else if (array[i].title.toLowerCase() !== inputTxt && inputTxt !== "") {
            titleDisplay.textContent = "Title not found";
        }
        searchInput.value = "";
    }
    // end of searchTitles()::::
}

let addedNewTitleDiv = document.createElement("div");
   document.body.appendChild(addedNewTitleDiv);

// function to add new title to watching list:

const addNewTitle = function() {
    console.log("ok")
    if (addInput.value === "") {
        // return
        alert("What is series title?")
    } else if ( addNumber.value === "") {
        alert("How many episodes?")
    }
    let newTitle = addInput.value;
    let number = addNumber.value;
    favTitles.push({title: newTitle, epNumber: number});
    addedNewTitleDiv.textContent = `New title added: "${addInput.value}", number of episodes: ${addNumber.value}.`
    addInput.value = "";
    addNumber.value = "";


    // end of addNewTitle
}

searchButton.myParam = favTitles;
// button .property(titleArray) s
addTitleBtn.titlesArray = favTitles;
searchButton.addEventListener("click", searchTitles);
addTitleBtn.addEventListener("click", addNewTitle);