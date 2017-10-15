// Set the date we're counting down to
var length = prompt("Length of time", length);
var startDate;
var endDate;

// Update the count down every 1 second
var x = setInterval(function() {

    var date = new Date();
    var distance = date.getMinutes + length < 60 ? date.getMinutes() + length : date.getMinutes() + length - 60;
  // Time calculations for days, hours, minutes and seconds
    var minutes = Math.floor(length / (1000 * 60));
    var seconds = Math.floor((length % (1000 * 60)) / 1000);


  // Display the result in the element with id="demo"
    document.getElementById("demo").innerHTML = minutes + ":" + seconds;

  // If the count down is finished, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);

function start() {
    var now = new Date()
    startDate = now.getMinutes();
    endDate = startDate + length;
}



