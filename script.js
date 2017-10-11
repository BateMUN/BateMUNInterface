//Committe 1 of the BateMUN Conference and all the relevant details
var committee1 = {
    name: "Security Council",
    topics: ["Syrian Refugee Crisis", "Nuclear War"],
    countries: ["USA", "China", "United Kingdom", "Russia", "France", "Bolivia", "Egypt", "Ethiopia", "Italy", "Japan", "Kazakhstan", "Senegal", "Sweden", "Ukraine", "Uruguay"]
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

//array to store all committees
var committes = [committee1, committee2, committee3];

//various indices and variables to keep track of changes
var currentCommittee = 0;
var currentTopic = 0;
var numSpeakers = 0;
var speakingTime = 30;

//different types of debates and a debate index to keep track of debates
var debates = ["Formal Consideration", "Moderated Caucus", "Unmoderated Caucus", "Round Table", "For and Against", "Resolution Presentation", "Resolution voting", "other"];
var currentDebate = 0;

var speakers = [];

//loads the first type of debate (just a placeholder)
function loadDebate() {
    document.getElementById("debateText").innerHTML = debates[currentDebate];
}

//loads the first committee in the array
function loadCommitteeDetails() {
    document.getElementById("committeeNameText").innerHTML = committee1.name;
    document.getElementById("CommitteeTopicText").innerHTML = committee1.topics[0];
}

//changes the committee name and countries (To be added)
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
    changeMembers();
}

//changes the committee topics specifically
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
    if (currentDebate === debates.length - 1) {
        currentDebate = 0;
    } else {
        currentDebate++;
    }
    document.getElementById("debateText").innerHTML = debates[currentDebate];
}

function loadMembers() {
    document.getElementById("membersText").innerHTML = committee1.countries;
}

function changeMembers() {
    for (var i = 0; i < committes[currentCommittee].countries.length; i++) {
        document.getElementById("member"+i).innerHTML = committes[currentCommittee].countries[i];
    }

    if (committes[currentCommittee].countries.length < 15) {
        for (var i = committes[currentCommittee].countries.length; i < 15; i++) {
            document.getElementById("member"+i).innerHTML = "";
        }
    }
}

function addSpeaker(country) {
    //speakers.push(document.getElementById(country).innerHTML);
    //console.log(speakers);
    document.getElementById("speaker"+numSpeakers).innerHTML = document.getElementById(country).innerHTML;
    document.getElementById(country).innerHTML = "";
    numSpeakers++;
}

function removeSpeaker(country) {
    for (var i = 0; i < committes[currentCommittee].countries.length; i++) {
        if (committes[currentCommittee].countries[i] === document.getElementById(country).innerHTML) {
            //speakers.pop(document.getElementById(country).innerHTML);
            //console.log(speakers);
            document.getElementById("member"+i).innerHTML = document.getElementById(country).innerHTML;
            document.getElementById(country).innerHTML = "";
        }
    }
    numSpeakers--;
}

function setSpeakingTime() {
    speakingTime = prompt("What is the speaking time", speakingTime);
}

var clsStopwatch = function() {
    var startAt = 0;
    var lapTime = 0;
    var now = function() {
        return(new Date()).getTime();
    };

    this.start = function() {
        startAt = startAt ? startAt : now();
    };

    this.stop = function() {
        lapTime = startAt ? lapTime + now() - startAt : lapTime;
        startAt = 0;
    };

    this.reset = function () {
        lapTime = startAt = 0;
    };

    this.time = function () {
        return lapTime + (startAt ? now() - startAt : 0);
    };
};

var x = new clsStopwatch();
var $time;
var clocktimer;

function pad(num, size) {
    var s = "0000" + num;
    return s.substr(s.length - size);
}

function formatTime(time) {
    var h = m = s = ms = 0;
    var newTime = '';

    h = Math.floor(time / (60 * 60 * 1000));
    time = time % (60 * 60 * 1000);
    m = Math.floor(time / (60 * 1000));
    time = time % (60 * 1000);
    s = Math.floor(time / 1000);
    ms = time % 1000;

    newTime = pad(h, 2) + ':' + pad(m, 2) + ':' + pad(s, 2) + ':' + pad(ms, 3);
    return newTime;
}

function show() {
    $time = document.getElementById('time');
    update();

    for(keys in committes) {
        committes[keys].countries.sort();
    }
}

function update() {
    $time.innerHTML = formatTime((x.time()));
}

function start() {
    clocktimer = setInterval("update()", 1);
    x.start();
}

function stop() {
    x.stop();
    clearInterval(clocktimer);
}

function reset() {
    stop();
    x.reset();
    update();
}

function speak(){
    reset();
    start();
    checkTime();
}

function checkTime(){
    var timerId = setTimeout(function () {    //  call a 3s setTimeout when the loop is called
        var mySeconds = Math.floor(x.time() / 1000 );                     //  increment the counter
        if (mySeconds<speakingTime) {            //  if the counter < 10, call the loop function
            checkTime();             //  ..  again which will trigger another
        }else{
            stop();
            alert("Times Up");
            reset();
            clearInterval(timerId);
        }              //  ..  setTimeout()
    }, 200)

}