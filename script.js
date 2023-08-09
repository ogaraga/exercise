const fName = document.getElementById("name1"),
    lName = document.getElementById("name2"),
    email = document.getElementById("email"),
    data = document.querySelectorAll(".inputFields"),
    form = document.querySelector(".form"),
    tWrapper = document.querySelector(".tablewrapper"),
    one = document.getElementById("1"),
    two = document.getElementById("2"),
    three = document.getElementById("3");

function formSubmit() {
    event.preventDefault();
    if (fName.value !== "" && lName.value !== "" && email.value !==
        "") {

        let tBody = document.createElement("tbody");
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        let form2 = document.createElement("form");
        let table = document.createElement("table");
        let tHead = document.createElement("thead");
        let th = document.createElement("th");
        let heading = document.createElement("h1");
        let headtText = document.createTextNode("LIST OF USERS");
        let twos = tr.appendChild(td);
        let ones = tr.appendChild(th)
        heading.appendChild(headtText);
        tHead.appendChild(ones).getAttribute("de-head");
        tHead.innerText = one.innerText + " " + two.innerText + " " + three.innerText;
        tBody.appendChild(twos).getAttribute("de-body");
        tBody.innerText = fName.value + "  " + lName.value + "  " + "  " + email.value;
        table.appendChild(tHead, tBody).getAttribute("de-table");
        form2.appendChild(table).getAttribute("deform");
        form.style.display = "none";
        tWrapper.style.display = "block";
        tWrapper.style.backgroundColor = "coral";
        form2.innerHTML = tHead.innerText + "<br> " + tBody.innerText;
        tWrapper.innerHTML += "<br>  "+ "<br> "+ heading.innerText + " <br> " + "  " + form2.innerHTML;

    }
    else {
        alert("invalid submission!")
        form.style.display = "grid";
        tWrapper.style.display = "none";
    }
    saveData();
}
function saveData() {
    let forms = tWrapper.innerHTML;
    localStorage.setItem("formData", forms);
}
function retrieveData() {
    tWrapper.innerHTML = localStorage.getItem("formData");
}
retrieveData();
