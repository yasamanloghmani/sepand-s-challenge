const basePrice = 24000;
let configuration = 0;
let docking = 1200;
let addOnPrice = 0;
let input = [];

function configurationPrice() {
    configuration += basePrice;
    for(let i=0; i<input.length; i++){
        if(addOnPrice < 8000){
            addOnPrice += input[i].price;
        }
        else {
            addOnPrice += input[i].price / 2 ;
        }
    }
    configuration += addOnPrice;
    docking += (configuration * 2) / 100;
    configuration += docking;
}
function priceCalculater() {
    configurationPrice();
    let taxPrice = (configuration * 13) / 100;
    let finalPrice = configuration + taxPrice;
    console.log(`The cost for this car is ${finalPrice}`)
}
priceCalculater();
input = [
	{
		"add_on" : "AWD Drivetrain",
		"price" : 2500
	},
	{
		"add_on" : "Sport Package",
		"price" : 3500
	}
]