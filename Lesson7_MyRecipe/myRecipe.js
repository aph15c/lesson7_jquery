/*
Program Name: Recipe Display Application
Author: Alexis Harvey
Date: April 6, 2018
Filename: myRecipe.js
*/

/* global $ */


    //display this message after all the ingredients and instructions are done
   $("div").append("<center>Enjoy!</center>") 
   

    
   
   //displays and animates the next element after the current target to fade in and open with toggle
    function display(event) {
           
        $(event.currentTarget).next().animate( {opacity:'toggle'}, "800" ).previous().animate( {height: 'toggle'},"fast");
         
    }//end of display2
    
    
    //click to display
    $("h3").click(display);
    
    //change the background color h3 element when mouse hovers over it
    $("h3").hover(function(){
    $(this).css("background-color", "orange");
    }, function(){
     $(this).css("background-color", "");
    });
   
   