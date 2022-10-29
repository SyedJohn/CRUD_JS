let selectedRow = null;

function onformSubmit(){
    let formData = readFormData();
    console.log(formData);
    if(selectedRow == null){
        addNewData(formData);
    }
    else{
        updateRecord(formData);
    }
    resetForm();
}

function readFormData(){
    let formData = {};

    formData.fullName = document.getElementById('fullName').value;
    formData.rollNo = document.getElementById('rollNo').value;
    formData.marks = document.getElementById('marks').value;
    formData.branch = document.getElementById('branch').value;
    return formData;

}

function addNewData(data){
    let table = document.getElementById('studentList').getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.length-1);

    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;

    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.rollNo;

    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.marks;

    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.branch;

    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm(){
   document.getElementById('fullName').value = "";
   document.getElementById('rollNo').value = "";
   document.getElementById('marks').value = "";
   document.getElementById('branch').value = "";
}


function onEdit(dataEdit) {
    selectedRow = dataEdit.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("rollNo").value = selectedRow.cells[1].innerHTML;
    document.getElementById("marks").value = selectedRow.cells[2].innerHTML;
    document.getElementById("branch").value = selectedRow.cells[3].innerHTML;
}

function updateRecord(data) {
    selectedRow.cells[0].innerHTML = data.fullName;
    selectedRow.cells[1].innerHTML = data.rollNo;
    selectedRow.cells[2].innerHTML = data.marks;
    selectedRow.cells[3].innerHTML = data.branch;
}

function onDelete(dataDelete) {
    if (confirm('Are you sure to delete this record ?')) {
        rowToBeDeleted = dataDelete.parentElement.parentElement;
        document.getElementById("studentList").deleteRow(rowToBeDeleted.rowIndex);
        resetForm();
    }
}