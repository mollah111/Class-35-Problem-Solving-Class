
function grade(){

    let marks = parseFloat(document.getElementById('marks').value);

    if(marks >= 80){
        document.getElementById('result').innerHTML = "The grade is: A+"; 
    }
    
    else if(marks >= 70){
        document.getElementById('result').innerHTML = "The grade is: A";
    }
    
    else if(marks >= 60){
        document.getElementById('result').innerHTML = "The grade is: A-";
    }
    
    else if(marks >= 50){
        document.getElementById('result').innerHTML = "The grade is: B";
    }
    
    else if(marks >= 40){
        document.getElementById('result').innerHTML = "The grade is: C";
    }
    
    else if(marks >= 33){
        document.getElementById('result').innerHTML = "The grade is: D";
    }
    
    else{
        document.getElementById('result').innerHTML = "The grade is: F";
    }
}