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

    //Functions
    //In Js you can declare function with keyword function and after function name and 
    // in parentheses you write arguments name in Js , you don't have to mention type of parameter
    function func_name(parameter1,parameter2){
        //code to be executed
        return parameter1+parameter2; // return parameter
     }
    //With functions you can reuse code
    //You can write code that can be used many times.
    //You can use the same code with different arguments, to produce different results.    
    
    
    //Object
    //Objects are variablase too but objects can contain many values.
    const person = {firstName:"Johny", lastName:"Dep", Age:46};
    //This object written as name,value pair

    //you can also write objects with multiple lines
    const user={
        userName:"johnydeep",
        password:"johnydeep1234"
    };
    
    //Name Value Pair are Called property in JS

    //You can access to object properties with two ways
        user.password
        //or
        person["Age"]

    //functions in objects
        //objects can also have methods
    const John={
        firstName:"John",
        lastName:"Doe",
        Age:46,
        getFullName:function(){ //method stored as a property
            return this.firstName + " " + this.lastName;//here keyword "this" means value of object
        }
    }

    John.getFullName(); //here called method of object


    //Don't declare strings,numbers,boolean as object
    x=new String();
    y=new Number();
    z=new Boolean();
    //It's complicate your code and slow down execution speed

    //String methods
    let str="Some text";//you can use double or single quotes for string 
    let len=str.length; //length of string

    let str1="Some text \"text\" here"; //here backslash converts special characters to string
    let str2="Here you can see backslash \\";
    
    // \b=backspace
    // \f=form feed
    // \n=new line
    // \r=carriage return
    // \t=horizontal tabulator
    // \v=vertical tabulator

    //Breaking long code lines
        //For code be more readable , programmers uses breaking long code lines
        //In JS your code doesn't fit on one line the best place for break it's after an operator
        document.getElementById("demo").innerHTML= "Hey \
        yo wassup";

        document.getElementById("demo").innerHTML= "Breaking"+
        " long code lines";

    //Strings as Object
    //You can also declare strings as object with "new" keyword
    let str3=new String("Lorem ipsum");


    //Difference between == and ===
    if(30=="30"){ // in here == checks only values but not types and here operator returns true
        console.log("the values are equal");
    }
    
    if(30==="30"){// but here === checks value and type and here operator returns false
        console.log("the values are not equal");
    }


    //extracting string parts
    //slice(start position, end position)
        str.slice(0,5); // this method extract part of string and extracted new string
        str.slice(2); // here omit the second parametr and method slice out rest of string
    //substring()
        str1.substring(1,3); //substring is similar to slice but difference is substring treated start and end 
                                //values 0 when values less than 0
    //substr()
        str2.substr(0,3); //substr is similar to slice but difference is substr's second parameter
                                    //takes length of the extracted part
        str2.substr(-7); // when method get negativ counts from end

    //replacing methods
        str3.replace("Lorem","lorem"); //the method replace() , replaces specified value and returns new string
                                       //replace() replaces only the first match
        str3.replace(/Lorem/g, "lorem"); // to replace all matches , you can use regEx
                                        //or you can use replaceAll()
    //toUpperCase()
        str3.toUpperCase(); //method converted string to upper case
    //toLowerCase()
        str3.toLowerCase(); //method converted string to lower case
    //concat()
        str3.concat(" ",str2); //this method joins two or more strings
    //trim()
        str2.trim(); //method remove whitespaces from both sides
    //trimStart()
        str2.trimStart(); //method remove whitespace from start
    //trimEnd()
        str2.trimEnd(); //method remove whitespace from end
    //indexOf()
        str2.indexOf("can"); //indexOf returns index of first occurence of string in a string
    //lastIndexOf()
        str3.indexOf("ipsum"); //method returns index of last occurence of string in a string
    //search()
        str2.search("see"); // this method similar to indexOf but difference is:
                                //indexOf can't take powerful search values (RegEx)
                                //search can't take a second start position argument.
    //match
        str2.match("an"); //returns an array containing the results of matching a string against a string
    //matchAll
        str1.matchAll("a"); 
    //startsWith
        str2.startsWith("Here"); //the method returns boolean with comparing parameter that given and text's first
                                 //string
    //endsWith
        str2.endsWith("\\"); //the method returns boolean with comparing parameter that given and text's last string
    
    //String Interpolation
        let word1="JS";
        let text='Welcome to ${word1}!';
    
    //NaN
    //NaN is stand for Not a Number it means JS to do something arithmetic with a non number string with number
    //For example:
    console.log(100/"string");
    //But in this example returns value not a NaN:
    console.log(100/"10"); //cause in JS you can calculate number with string if your string is number

    //toString(number system)
    let myNumber="90";
    console.log(myNumber.toString(10));

    //Numbers as Object
    let int=15;
    let int1=new Number(15);

    //compare this two variable
    console.log(int==int1);//objects can't compare in JS and always returns false
    
                             
    
    
    