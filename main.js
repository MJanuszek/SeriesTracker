
// from HTML:
const titleDisplay = document.querySelector(".title-display");
let searchInput = document.querySelector(".search-input");
// const searchButton = document.querySelector(".search-button");
const searchButton = document.getElementById("search-button");
// 
let addInput = document.querySelector(".add-input");
const addTitleBtn = document.querySelector(".add-new");

// end of from html:::::::::::::::::::::::::::

const favTitles = [
    {
        title: "gotham",
    },

    {
        title: "code Geass",
    },

    {
        title: "supernaturals",
    },

    {
        title: "nana",
    },

]

const searchTitles = (e) => {
    // przekazanie array do funkcj na eventListener jako myParam::
    let array = e.currentTarget.myParam;

    let inputTxt = searchInput.value.toLowerCase();

    for (let i=0; i<array.length; i++){

        if(array[i].title.toLowerCase() === inputTxt ) {
            titleDisplay.textContent = array[i].title;
            const newTitleDiv = document.createElement("div");
            document.body.appendChild(newTitleDiv);
            newTitleDiv.classList.add("title-display");
            newTitleDiv.textContent = array[i].title;
            titleDisplay.textContent = "";
            return
        } else if (array[i].title.toLowerCase() !== inputTxt && inputTxt !== "") {
            titleDisplay.textContent = "Title not found";
            
            
        }
        searchInput.value = "";
    }
    // end of searchTitles()::::
}

// function to add new title to watching list:

const addNewTitle = function(e) {
    e.preventDefault();
    let array = e.currentTarget.titlesArray;
    let titleName = addInput.value;
    console.log(titleName);
    const watchingTitle = document.createElement("div");
    document.body.appendChild(watchingTitle);
    watchingTitle.classList.add("title-display");
    watchingTitle.textContent = titleName;
    array.push(titleName)
    addInput = "";
    if (addInput === "") {
        return
    }
    


    // end of addNewTitle
}

searchButton.myParam = favTitles;
addTitleBtn.titlesArray = favTitles;
searchButton.addEventListener("click", searchTitles);
addTitleBtn.addEventListener("click", addNewTitle);