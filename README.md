# sepand-s-challenge# Pricing Calculator
### Your customer is a car manufacturer and wants to put a pricing calculator on their website.
### Create a calculator that calculates the final price of a car based on the following rules:
1. The base price of the car is $24,999
2. Docking of the car is $1,200 + 2% of the configuration price
3. Add-ons:
  - AWD Drivetrain : $2,500
  - GPS Navigation : $2,000
  - Winter Tire Package : $2,000
  - Sport Package : $3,500
  - Live Traffic Updates : $1,500
  - Roadside Assistance : $2,500
4. Any additional add-ons past the first $8,000 will have a 50% discount applied.
5. Sales tax is 13% of the final configuration price (including docking).
### Write a function in either Ruby or JavaScript that calculates the price and provides a summary of the selected configuration.
#### Example
##### Input:
```array
[
	{
		"add_on" : "AWD Drivetrain",
		"price" : 2500
	},
	{
		"add_on" : "Sport Package",
		"price" : 3500
	}
]
````
##### Output: 
```string
'The cost for this car is X with the following configurations Y'
````
##### Bonus: 
###### Solve the above problem using a recursive function. If you'd like to show off your front-end skills, you are welcome to use any language to do so. 