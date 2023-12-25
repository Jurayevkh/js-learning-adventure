//Let's get start

//Get Element by Id
    document.getElementById("title").innerHTML="Here is title"; //the method get element by id used for find html element by id
//and here property innerHTML means content of HTML Element


//changing source and use function on click 

// In here function declared 
    function switch_btn()   
    {
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

// Javascript syntax
    //Declaring variables
        var variable_name; //declaring variable
        var a,b,c; //declaring a several variables
        var variable="some text"; // declaring variable and give value

    //All javascript identifiers are case sensitive this variables are two different variables:
        let lastName,lastname;
        lastName="Doe";
        lastname="John"; 
    
    //Javascript ignores multiple spaces , you can add spaces for your code been more readable
        let d = "John";

    //variables
    //In JS you can declare variables with 4 ways:
        //automatically
        //using var. this keyword used in all javascript code from 1995 to 2015 and this keyword should be
            //used for code that written for old browsers
                var one=1;
        //using let . let and const keywords added to js in 2015
        //Variables declared with let cannot be Redeclared in the same scope
                let two=2;
        //using const. the const variables can't be changed.
                const three=3;
    //when to use var,let or const
        //always use const if your value should not be changed
        //only use let if you can't use const
        //use var only if you write code for old browsers
    
    //variables are containers for storing values


    //Operators
        //Types in Js: 
            //Arithmetic operators
            //Assigment operators
            //Comparsion operators
            //String operators
            //Logical operators
            //Bitwise operators
            //Ternary operators
            //Type operators

        //Arithmetic operators:
        let a,b;
        a=5;
        b=3;
        console.log(a+b); //Addition operator
        console.log(b*a); //Multiplication operator
        console.log(a-b); //subtration operator
        console.log(a**b); //Exponentiation operator
        console.log(20/a); //Divison operator
        console.log(26%a); //Modulus operator
        console.log(a++); //Increment operator
        console.log(b--); //Decrement operator

        
    