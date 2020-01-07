var id = document.querySelector("#ID");
var namestud = document.querySelector("#username");
var email = document.querySelector("#email");
var studentclass = document.querySelector("#class");
var year = document.querySelector("#year");
var city = document.querySelector("#city");
var country = document.querySelector("#country");
var save = document.querySelector("#savebtn");
var clear = document.querySelector("#clearbtn");

var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var selectedRow = null;
var charFormat = /^[a-zA-Z]*$/;
function onSubmit() {
        var formData = readData();
        if (selectedRow == null)
            saveData(formData);
        else
            update(formData);
}

function readData() {
    var formData = {};
    formData["id"] = id.value;
    formData["namestud"] = namestud.value;
    formData["email"] = email.value;
    formData["studentclass"] = studentclass.value;
    formData["year"] = year.value;
    formData["city"] = city.value;
    formData["country"] = country.value;
    return formData;
}

function saveData(data) {
		if(data.id && data.namestud && data.email && data.studentclass && data.year && data.city && data.country){

			
			if (!(data.namestud.match(charFormat))) {
		        alert("Invalid name should be only in alphabets");
		        return false;
		    }
		    if(!(data.email.match(mailformat)))
			{
				alert("You have entered an invalid email address!");
				return false;
			}
		    if (!(data.studentclass.match(charFormat))) {
		        alert("Invalid class should be only in alphabets");
		        return false;
		    }
		    if (!(data.city.match(charFormat))) {
		        alert("Invalid city should be only in alphabets");
		        return false;
		    }
		    if (!(data.country.match(charFormat))) {
		        alert("Invalid country should be only in alphabets");
		        return false;
		    }
			var table = document.querySelector("table");
			var row = table.insertRow(table.length);
			var cell1 = row.insertCell(0);
			var cell2 = row.insertCell(1);
			var cell3 = row.insertCell(2);
			var cell4 = row.insertCell(3);
			var cell5 = row.insertCell(4);
			var cell6 = row.insertCell(5);
			var cell7 = row.insertCell(6);
			var cell8 = row.insertCell(7);
			var cell9 = row.insertCell(8);
			cell1.innerHTML = data.id;
			cell2.innerHTML = data.namestud;
			cell3.innerHTML = data.email;
			cell4.innerHTML = data.studentclass;
			cell5.innerHTML = data.year;
			cell6.innerHTML = data.city;
			cell7.innerHTML = data.country;
			cell8.innerHTML = '<input type = "button" value = "Edit" onclick = "editRow(this)">';
			cell9.innerHTML = '<input type = "button" value = "Delete" onclick = "deleteRow(this)">';
		}else{
			alert("fields can't be empty");
			return false;
		}
}

function clearform(ev){
	document.querySelector("form").reset();
	selectedRow = null;
}


function deleteRow(r){
	if(confirm("Are you sure you want to delete this record?")){
		var i = r.parentNode.parentNode.rowIndex;
		document.querySelector("table").deleteRow(i);
	}	
}

function editRow(td) {
    selectedRow = td.parentElement.parentElement;

    id.value =           selectedRow.cells[0].innerHTML;
    namestud.value =     selectedRow.cells[1].innerHTML;
    email.value =        selectedRow.cells[2].innerHTML;
    studentclass.value = selectedRow.cells[3].innerHTML;
    year.value =         selectedRow.cells[4].innerHTML;
    city.value =         selectedRow.cells[5].innerHTML;
    country.value =      selectedRow.cells[6].innerHTML;
}

function update(formData) {
	selectedRow.cells[0].innerHTML = formData.id;
	selectedRow.cells[1].innerHTML = formData.namestud;
	selectedRow.cells[2].innerHTML = formData.email;
	selectedRow.cells[3].innerHTML = formData.studentclass;
	selectedRow.cells[4].innerHTML = formData.year;
	selectedRow.cells[5].innerHTML = formData.city;
	selectedRow.cells[6].innerHTML = formData.country;
}



