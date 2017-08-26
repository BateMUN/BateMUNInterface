//array to store all committees
var committes = [committee1, committee2, committee3];

//Committe 1 of the BateMUN Conference and all the relevant details
var committee1 = {
    name: "Security Council",
    topics: ["Syrian Refugee Crisis", "Nuclear War"],
    countries: ["USA", "China", "United Kingdom", "Russia", "France"]
};

//Committe 2 of the BateMUN Conference and all the relevant details
var committee2 = {
    name: "UNEP",
    topics: ["Deforestation", "Carbon Emissions"],
    countries: ["Canada", "Brazil", "Indonesia", "Japan", "OPEC"]
};

//Committe 3 of the BateMUN Conference and all the relevant details
var committee3 = {
    name: "UNTTF - Crisis",
    topics: ["Nuclear War", "ISIS/ISIL"],
    countries: ["Khalid", "Yash", "Aidan", "Shaheer", "Kira"]
};

//different types of debates and a debate index to keep track of debates
var debates = ["Formal Consideration", "Moderated Caucus", "Unmoderated Caucus", "Round Table", "For and Against", "Resolution Presentation", "Resolution voting", "other"];
var currentDebate = 0;

//loads the first type of debate (just a placeholder)
function loadDebate() {
    document.getElementById("debateText").innerHTML = debates[currentDebate];
}

//changes the debate
//if the debate is greater then the number of debates possible, set debate index to 0, otherwise increase debate index and
function changeDebate () {
    if (currentDebate == (debates.length - 1)) {
        currentDebate = 0;
    } else {
        currentDebate++;
    }
    document.getElementById("debateText").innerHTML = debates[currentDebate];
}