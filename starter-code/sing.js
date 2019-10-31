console.log("sing.js loaded");

let bottles = 5; 

/*
while (bottles > 0){
	console.log(
	 bottles + " bottles of beer on the wall," +"\n" + 
	 bottles + " bottles of beer!" +"\n" + 
	 "Take one down and pass it around," +"\n" + 
	 (bottles-1)+" bottles of beer on the wall!"
	);
	bottles = bottles - 1; 
	
	if (bottles == 1 ){

	}; 
}; */ 

while (bottles > 0){
	switch (bottles){
		case 5: 
		console.log("5 bottles of beer on the wall," +"\n" + 
 					"5 bottles of beer!"+"\n" + 
 					"Take one down and pass it around,"+"\n" + 
 					"4 bottles of beer on the wall!"); 

		bottles = bottles - 1; 
	 
		case 4: 
		console.log("4 bottles of beer on the wall," +"\n" + 
 					"4 bottles of beer!"+"\n" + 
 					"Take one down and pass it around,"+"\n" + 
 					"3 bottles of beer on the wall!"); 

		bottles = bottles - 1; 

		case 3: 
		console.log("3 bottles of beer on the wall," +"\n" + 
 					"3 bottles of beer!"+"\n" + 
 					"Take one down and pass it around,"+"\n" + 
 					"3 bottles of beer on the wall!"); 

		bottles = bottles - 1; 

		case 2: 
		console.log("2 bottles of beer on the wall," +"\n" + 
 					"2 bottles of beer!"+"\n" + 
 					"Take one down and pass it around,"+"\n" + 
 					"1 bottle of beer on the wall!"); 

		bottles = bottles - 1; 

		case 1: 
		console.log("1 bottle of beer on the wall," +"\n" + 
 					"1 bottle of beer!"+"\n" + 
 					"Take one down and pass it around,"+"\n" + 
 					"No bottles of beer on the wall!"); 

		bottles = bottles - 1; 
};
};