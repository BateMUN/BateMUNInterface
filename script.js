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

//array to store all committees and committee index
var committes = [committee1, committee2, committee3];
var currentCommittee = 0;
var currentTopic = 0;

//different types of debates and a debate index to keep track of debates
var debates = ["Formal Consideration", "Moderated Caucus", "Unmoderated Caucus", "Round Table", "For and Against", "Resolution Presentation", "Resolution voting", "other"];
var currentDebate = 0;

//loads the first type of debate (just a placeholder)
function loadDebate() {
    document.getElementById("debateText").innerHTML = debates[currentDebate];
}

function loadCommitteeDetails() {
    document.getElementById("committeeNameText").innerHTML = committee1.name;
    document.getElementById("CommitteeTopicText").innerHTML = committee1.topics[0];
}

function changeCommitteeDetails() {
    if (currentCommittee === committes.length - 1) {
        currentCommittee = 0;
    } else {
        currentCommittee++;
    }
    console.log(currentCommittee);
    console.log(committes.length);
    document.getElementById("committeeNameText").innerHTML = committes[currentCommittee].name;
    document.getElementById("committeeTopicText").innerHTML = committes[currentCommittee].topics[0];
}

function changeCommitteeTopic() {
    if (currentTopic === committes[currentCommittee].topics.length - 1) {
        currentTopic = 0;
    } else {
        currentTopic++;
    }
    document.getElementById("committeeTopicText").innerHTML = committes[currentCommittee].topics[currentTopic];
}

//changes the debate
//if the debate is greater then the number of debates possible, set debate index to 0, otherwise increase debate index and
function changeDebate () {
    if (currentDebate > debates.length) {
        currentDebate = 0;
    } else {
        currentDebate++;
    }
    document.getElementById("debateText").innerHTML = debates[currentDebate];
}