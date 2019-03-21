
////////// login ////////////
function login() {
    var idCheckL = true;
    let id = document.getElementById("id").value;
    let password = document.getElementById("password").value;
    let emptyID = document.getElementById("id").value = ""
    let emptyPass = document.getElementById("password").value = ""

    if (id != "" && !id.match(/^([0-9])+$/i)) {
        alertError()
        emptyID
        emptyPass
        idCheckL = false;
    } else {
        idCheckL = true;
    }
    if (id == "" || password == "") {
        alertNull()
        emptyID
        emptyPass
    } else if (idCheckL == true) {
        // window.location.href = "/main"
    }
}
////////// end login ////////////


//////////// addUsers /////////////
var idCheck = true;
function confirm() {
    var id = document.getElementById("ID").value;
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;

    if (id != "" && !id.match(/^([0-9])+$/i)) {
        alertError()
       
        
        idCheck = false;
    } else {
        idCheck = true;
    }

    if (id == "" || name == "" || surname == "") {
        alertNull()
    } else if (idCheck == true) {
        closeError()
        openForm()

    }
}
function cancle() {
    window.location.href = "manageUsers.html"
}
//////////// end addUserS ///////////// 



////////////  pop up  //////////////
function openForm() {
    document.getElementById("formDel").style.display = "block";
}

function closeForm() {
    
    document.getElementById("formDel").style.display = "none";
}

function closeFormUser() {
    document.getElementById("formDel").style.display = "none";

}

function alertError() {
    document.getElementById("formNull").style.display = "none";
    document.getElementById("formError").style.display = "block";
}

function closeError() {
    document.getElementById("formError").style.display = "none";
}

function alertNull() {
    document.getElementById("formError").style.display = "none";
    document.getElementById("formNull").style.display = "block";
}
//////////// end  pop up  //////////////



/////////////  manageUsers ////////////
function searchCheck(event) {
    let search = document.getElementById("search").value;
    var x = event.which || event.keyCode;

    if (x == 13) {
        if (search == "") {
            alert("กรุณากรอกข้อมูลให้ครบถ้วน");
        } else {
            alert("กำลังค้นหาผลลัพท์")
            document.getElementById("search").value = ""
        }
    }
}
function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("table").deleteRow(i);
    closeForm()
}

////////// end manageUsers //////////




