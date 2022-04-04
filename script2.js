//create array with service types
var serviceTypes = [];
//create array with service cost
var servicePrices = []
//populate arrays 
var serviceTypes = document.getElementsByClassName("services-type");
var servicePrices = document.getElementsByClassName("services-fee");
//create string array with service type description from HTML collections array
var sServiceTypes= [];
for(var index=0;index<serviceTypes.length;index++)
{
    sServiceTypes[index] = serviceTypes[index].textContent;
}
//create a number array with service fees from HTML collection array
var iNumberFees = [];
for(var index=0;index<servicePrices.length;index++)
{ 
var result = servicePrices[index].textContent;
    result= result.replace("R","");
    iNumberFees[index] = result;
  
}
//--------------------------------------------------------------------------------
//CALCULATE THE PRICE OF SPECIAL 1
//Get the indices of the price elements associated with deworming and tick treatment
var price=0;
var discount1=0.10;
for(var index=0;index<serviceTypes.length;index++)
{
  if(sServiceTypes[index]=="Tick and flea treatment")
  {
  
    price=price+(iNumberFees[index]*(1-(discount1)));
  }else if(sServiceTypes[index]=="De-worming")
  {
    price=price+(iNumberFees[index]*(1-(discount1)));
    
  }
}
//calculate the total price for special 1 (10% discount)
price = price+(200*(1-0.10));
//display the price
document.getElementById("special1").innerHTML = price;
//-------------------------------------------------------------------------------------
//CALCULATE THE PRICE OF SPECIAL 2
//Get the indices of the price elements associated with deworming and tick treatment
var price=0;
var discount2=0.30;
for(var index=0;index<serviceTypes.length;index++)
{
    price=price+(iNumberFees[index]*(1-(discount2)));
}
//calculate the total price for special 1 (10% discount)
price = price+(200*(1-(discount2)));
//display the price
document.getElementById("special2").innerHTML = price;
//-----------------------------------------------------------------------------------------








