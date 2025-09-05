let userName = document.getElementById("name");
let userEmail = document.getElementById("email");
let userAddress = document.getElementById("address");
let userPhone = document.getElementById("phone");
let userAge = document.getElementById("age"); 

let allUser =[];
if (localStorage.getItem("we") != null) {
    allUser = JSON.parse(localStorage.getItem("we"));
    display ();
}

let idBridge = "";

function addData () {
    let person = {
        name: userName.value,
        email: userEmail.value,
        address: userAddress.value,
        phone: userPhone.value,
        age: userAge.value
    }
    allUser.push(person);
    localStorage.setItem("we", JSON.stringify(allUser));
    console.log(allUser);
    clearData();
    display ();
}

function clearData () {
    userName.value = "";
    userEmail.value = "";
    userAddress.value = "";
    userPhone.value = "";
    userAge.value = "";
}

function display () {
    let shanta = ``
    for (let i = 0; i < allUser.length; i++) {
        shanta += ` <tr>
      <th scope="row">${i + 1}</th>
      <td>${allUser[i].name}</td>
      <td>${allUser[i].email}</td>
      <td>${allUser[i].address}</td>
      <td>${allUser[i].phone}</td>
      <td>${allUser[i].age}</td>
      <td><button onclick="deleteData (${i})" class="btn btn-danger">Delete</button><button onclick="updateData (${i})" class="btn btn-warning">Update</button></td>
    </tr> `
    }
    document.getElementById("t-body").innerHTML = shanta;
}

function deleteData (i) {
    allUser.splice(i, 1);
    localStorage.setItem("we", JSON.stringify(allUser));
    display ();
}

function updateData (i) {
    userName.value = allUser[i].name;
    userEmail.value = allUser[i].email;
    userAddress.value = allUser[i].address;
    userPhone.value = allUser[i].phone;
    userAge.value = allUser[i].age;
    document.getElementById("add").className="d-none";
    document.getElementById("supdate").className="d-block btn btn-success";
    idBridge = i;
}

 function submitUpdate () {
    let person = {
        name: userName.value,
        email: userEmail.value,
        address: userAddress.value,
        phone: userPhone.value,
        age: userAge.value
    }
allUser[idBridge] = person;
 localStorage.setItem("we", JSON.stringify(allUser));
  clearData ();
    display ();
    document.getElementById("add").className="d-block btn btn-primary";
    document.getElementById("supdate").className="d-none";
 }

 