function triangle(){
//USERS INPUT
var A = parseInt(prompt('sideOne'));
var B = parseInt(prompt('sideTwo'));
var C = parseInt(prompt('sideThree'));

//VARIABLE EQUATION SCHEME
var AB = A + B;
var AC = A + C;
var BC = B + C;

//Coditions to meet our specs
if ((AB < C) || (AC < B) || (BC < A)) {
		 alert("There is no triangle formed");
    }
     else if(A === B && B === C){
     		alert("You have an equilateral triangle");
     	}
      else if(A === B || B === C || A===C){
      		alert("You have an isosceles triangle");
      	}
        else if(A!==B || B!==C ||A!==C){
        alert("Scalene triangle formed");
        	}


                    }

      //Calling the function
      //triangle();
