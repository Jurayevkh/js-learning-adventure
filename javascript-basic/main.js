//Let's get start

//Get Element by Id
document.getElementById("title").innerHTML="Here is title"; //the method get element by id used for find html element by id
//and here property innerHTML means content of HTML Element


//changing source and use function on click 

// In here function declared 
function switch_btn(){
    // Check if the button text is "Turn on"
    if(document.getElementById("switch-btn").innerHTML == "Turn on"){
        // If true, changed source of img with property src and changed content of button
        document.getElementById("light").src = "https://www.w3schools.com/js/pic_bulbon.gif";
        document.getElementById("switch-btn").innerHTML = "Turn off";
    } else {
        document.getElementById("light").src = "https://www.w3schools.com/js/pic_bulboff.gif";
        document.getElementById("switch-btn").innerHTML = "Turn on";    
    }
}  


// Changing css style of html element
function change_style(){
    //I get a element with id and i change style with property style
    document.getElementById("change-style").style="border:2px solid green; background-color:#000; color:white; font-size:20px;";
}

