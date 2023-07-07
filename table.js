
// Function to convert JSON data to HTML table
function convert(jsonData) {
         
	// Sample JSON data extract from a json file
	// fetch('table.json')
	// 	.then(function (response) {
	// 		return response.json();
	// 	})
	// 	.then(function (jsonData) {
	// 		DATA(jsonData);
	// 	})
	// 	.catch(function (err) {
	// 		console.log('error: ' + err);
	// 	});

	// loadJSON method to open the JSON file from a json link
	// function loadJSON(path, success, error) {
	// 	var xhr = new XMLHttpRequest();
	// 	xhr.onreadystatechange = function () {
	// 	if (xhr.readyState === 4) {
	// 		if (xhr.status === 200) {
	// 		success(JSON.parse(xhr.responseText));
	// 		}
	// 		else {
	// 		error(xhr);
	// 		}
	// 	}
	// 	};
	// 	xhr.open('GET', path, true);
	// 	xhr.send();
	// }
  
  	// loadJSON("https://reqres.in/api/users?page=2", DATA);

	// 	function DATA(jsonData){
	// 		// change button inner text after clicking button
	// 		document.getElementById("btn").innerHTML = "Resulting Table: ";

	// 		// Change button color after click 
	// 		document.getElementById("btn").style.color = "red";
			
	// 		// Get the container element where the table will be inserted
	// 		let container = document.getElementById("container");
			
	// 		// Create the table element
	// 		let table = document.createElement("table");
			
	// 		// Get the keys (column names) of the first object in the JSON data
	// 		var jdata = jsonData.data;
	// 		let cols = Object.keys(jdata[0]);
			
	// 		// Create the header element
	// 		let thead = document.createElement("thead");
	// 		let tr = document.createElement("tr");
			
	// 		// Loop through the column names and create header cells
	// 		cols.forEach((item) => {
	// 		let th = document.createElement("th");
	// 		th.innerText = item; // Set the column name as the text of the header cell
	// 		tr.appendChild(th); // Append the header cell to the header row
	// 		});
	// 		thead.appendChild(tr); // Append the header row to the header
	// 		table.append(tr) // Append the header to the table
			
	// 		// Loop through the JSON data and create table rows
	// 		jsonData.forEach((item) => {
	// 		let tr = document.createElement("tr");
			
	// 		// Get the values of the current object in the JSON data
	// 		let vals = Object.values(item);
			
	// 		// Loop through the values and create table cells
	// 		vals.forEach((elem) => {
	// 			let td = document.createElement("td");
	// 			td.innerText = elem; // Set the value as the text of the table cell
	// 			tr.appendChild(td); // Append the table cell to the table row
	// 		});
	// 		table.appendChild(tr); // Append the table row to the table
	// 		});
	// 		container.appendChild(table) // Append the table to the container element
	// }


	const request = new XMLHttpRequest(); 
 
	request.open('GET', 'https://reqres.in/api/users?page=2'); 
	request.send();  
	   
	request.onload = () => { 
		if (request.status === 200) { 
			console.log("Success"); // So extract data from json and create table 
			
			//Extracting data 
			var jsonData = JSON.parse(request.response).data; 
			
			// change button inner text after clicking button
			document.getElementById("btn").innerHTML = "Resulting Table: ";

			// Change button color after click 
			document.getElementById("btn").style.color = "red";
			
			// Get the container element where the table will be inserted
			let container = document.getElementById("container");
			
			// Create the table element
			let table = document.createElement("table");
			
			// Get the keys (column names) of the first object in the JSON data
			let cols = Object.keys(jsonData[0]);
			
			// Create the header element
			let thead = document.createElement("thead");
			let tr = document.createElement("tr");
			
			// Loop through the column names and create header cells
			cols.forEach((item) => {
			let th = document.createElement("th");
			th.innerText = item; // Set the column name as the text of the header cell
			tr.appendChild(th); // Append the header cell to the header row
			});
			thead.appendChild(tr); // Append the header row to the header
			table.append(tr) // Append the header to the table
			
			// Loop through the JSON data and create table rows
			jsonData.forEach((item) => {
			let tr = document.createElement("tr");
			
			// Get the values of the current object in the JSON data
			let vals = Object.values(item);
			
			// Loop through the values and create table cells
			vals.forEach((elem) => {
				let td = document.createElement("td");
				td.innerText = elem; // Set the value as the text of the table cell
				tr.appendChild(td); // Append the table cell to the table row
			});
			table.appendChild(tr); // Append the table row to the table
			});
			container.appendChild(table) // Append the table to the container element    
		}  
	  }; 
	   
	  request.onerror = () => { 
		console.log("error") 
	  }; 
}