let selectedrow =null;
let userName=document.getElementById("userName");
let email=document.getElementById("email");
let phone=document.getElementById("phone");
let city=document.getElementById("city");

// USER CLICK ON SUBMIT BUTTON

function enterData() {
    let studentData=fetchData();
    if(selectedrow == null)
    {
        addData(studentData);
    }
    clearForm();
}

// a function to fetch the data

function fetchData() {
    let studentData={};
    studentData.userName=userName.value;
    studentData.email=email.value;
    studentData.phone=phone.value;
    studentData.city=city.value;
    return studentData;
}

//function to add data inside the table

function addData(data) {
    let table=document.getElementById("studentList").getElementsByTagName("tbody")[0];
     let newRow =table.insertRow(0);
     cell1=newRow.insertCell(0);
     cell1.innerHTML = data.userName;

     cell2=newRow.insertCell(1);
     cell2.innerHTML = data.email;

     cell3=newRow.insertCell(2);
     cell3.innerHTML = data.phone;

     cell4=newRow.insertCell(3);
     cell4.innerHTML = data.city;

     cell5=newRow.insertCell(4);
     cell5.innerHTML= `<button onclick="editData(this)">EDIT</button>  
    <button onclick="deleteData(this)">DELETE</button>`;
}

// function to clear form

function clearForm() {
    userName.value="";
    email.value="";
    phone.value="";
    city.value="";
    selectedrow=null;
}


//delete function
function deleteData(btn) {
    if (confirm("Are You Sure")) {
        row = btn.parentElement.parentElement;
        document.getElementById("studentList").deleteRow(row.rowIndex);
    }
}

//edit functionality
function editData(btn) {
    selectedRow = btn.parentElement.parentElement;
    userName.value = selectedRow.cells[0].innerHTML;
    email.value = selectedRow.cells[1].innerHTML;
    phone.value = selectedRow.cells[2].innerHTML;
    city.value = selectedRow.cells[3].innerHTML;
}

//delete function

// function deleteData() {
//     if (confirm("Are you Sure u want to delete the data")) {
//         row= btn.parentElement.parentElement;
//         document.getElementById("studentList").deleterow(row.rowIndex);

//     }
// }


// //  edit   function 

// function editData() {
//     selectedrow=btn.parentElement.parentElement;
//     userName.value=selectedrow.cell[0].innerHTML;
//     email.value=selectedrow.cell[1].innerHTML;
//     phone.value=selectedrow.cell[2].innerHTML;
//     city.value=selectedrow.cell[3].innerHTML; 
// }