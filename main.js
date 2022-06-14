
// div to add titles:
const titleDisplay = document.querySelector(".title-display");
const searchInput = document.querySelector(".search-input");
// const searchButton = document.querySelector(".search-button");

const searchButton = document.getElementById("search-button");
// const searchInput = document.getElementById("search-input");

const favTitles = ["gotham", "Nana", "code geass", "supernatural"]

// const favTitles = [
//     {
//         title: "gotham",
//     },

//     {
//         title: "code Geass",
//     },

//     {
//         title: "supernaturals",
//     },



// ]

const searchTitles = (e) => {
    // przekazanie array do funkcj na eventListener jako myParam::
    let array = e.currentTarget.myParam;

    for (let i=0; i<array.length; i++){

        if(array[i].toLowerCase() === searchInput.value.toLowerCase()) {
            console.log("ok");
            titleDisplay.textContent = array[i];
            const newTitleDiv = document.createElement("div");
            document.body.appendChild(newTitleDiv);
            newTitleDiv.classList.add("title-display");
            newTitleDiv.textContent = array[i];
            searchInput.value = "";
            titleDisplay.textContent = "";
            return
        } else if (array[i].toLowerCase() !== searchInput.value.toLowerCase() && searchInput.value !== "") {
            titleDisplay.textContent = "Title not found";
            
        }
    }
}

searchButton.myParam = favTitles;
searchButton.addEventListener("click", searchTitles);