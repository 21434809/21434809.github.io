
//create and populate arrays
var ageCells = document.getElementsByClassName("content-age");
var dogNames = document.getElementsByClassName("cardbox-header");
var DogGender = document.getElementsByClassName("content-breed");
var genderCells=[];


//define the text, date and age variable
var textAge = "<ul>";
var d = new Date();
var age;


// THE CODE FOR DISPLAYING A LIST OF OLDER DOGS
//Look for the age in the array with the cardbox text descriptions
for(var index=0;index<ageCells.length;index++)
{
    // Get the age by taking the first number in the string 
    age = parseFloat(ageCells[index].textContent);   
   // console.log(age)
    //if age is years, display in a list - use a regular expression
    if (/year/.test(ageCells[index].textContent))
    {
           textAge += "<li>" + dogNames[index].textContent + "</li>";
           
        
    }
    // if age is months and months is more or equal to 12, display the name of the dog in a list
    else if ((/months/.test(ageCells[index].textContent)) && (age >= 12))
    {
        textAge += "<li>" + dogNames[index].textContent + "</li>";
    }  
    
    //if(index === 1) {break;}  
}

 // if there are no dogs in that age group, display the appropriate message
 if (textAge == "<ul>")
 {
     textAge += "We currently have not dog in this age group";
 }

 //add the closing tag
textAge += "</ul>";


//display the list of dog names
document.getElementById("info-DogAge").innerHTML = textAge;

// -----------------------------------------------------------------------------------------------
//THE CODE FOR DISPLAYING A LIST OF FEMALE DOGS
// THE CODE FOR DISPLAYING A LIST OF MALE DOGS
//Look for Males in the array with the cardbox gender and breed descriptions

var MaleList = "<ul>";
var FemaleList= "<ul>";
for(var index=0;index<DogGender.length;index++)
{ 
    var Breecontent = DogGender[index].textContent;
    let result = Breecontent.trim();  
    var gender = result.substring(0,1);

        if(gender=='M')
        {
            MaleList += "<li>" + dogNames[index].textContent + "</li>";
        } else FemaleList += "<li>" + dogNames[index].textContent + "</li>";
        
}
if (MaleList == "<ul>")
{
    MaleList += "We currently have not Male dogs in this group";
}

if (FemaleList == "<ul>")
{
    FemaleList += "We currently have not Female dogs in this group";
}
    MaleList += "</ul>";
    FemaleList += "</ul>";
    document.getElementById("info-femaleDogs").innerHTML = FemaleList;
    document.getElementById("info-maleDogs").innerHTML = MaleList;









// --------------------------------------------------------------









//display today's date in the footer
document.getElementById("date-today").innerHTML = d.toDateString();




