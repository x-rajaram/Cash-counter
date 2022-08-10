alert("Hi how are you");
var txtBill = document.querySelector("#txt-bill");
var btnNext = document.querySelector("#btn-next");
var txtCashpaid = document.querySelector("#cash-container");
var txtcash = document.querySelector("#txt-cash");
var btnCount = document.querySelector("#btn-count");
var tblContainer = document.querySelector("#tbl-container");
var tblCashReturn = document.querySelector("#tbl-chng");
var msgStmt = document.querySelector("#msgg");

var tableData = {
    2000: 0,
    500: 0,
    200: 0,
    100: 0,
    50: 0,
    20: 0,
    10: 0,
    5: 0,
    2: 0,
    1: 0
};

function showElements(element) {
    // document.getElementById("#cash").style.display= "none";
    // document.querySelector("#zxs").style.display="none";
    console.log("showed");
    // txtCashpaid.style.display="block";
    element.classList.remove("hidden");
    // btnCount.classList.remove("hidden");

}

function hideElement(element) {
    element.classList.add("hidden");
}

function clickEventhandler() {
    // document.querySelector("#cash-container").style.display="block";
    // txtCashpaid.style.display="block";
    // txtCashpaid.classList.remove('hidden');
    // txtCashpaid.
    showElements(txtCashpaid);
    showElements(btnCount);
    hideElement(btnNext);
    // console.log("clicked",showElements);
}

function countClickEventHandler() {

    notesCount();
}

function txtchangeEventhandler(txtElement, btnElement) {

    if (txtElement.value.length !== 0) {
        console.log("changes");
        btnElement.removeAttribute("disabled");
        txtcash.setAttribute("min", txtBill.value);
    } else {
        console.log("changes d");
        btnElement.setAttribute("disabled", true);

    }
    console.log(btnElement.getAttribute("disabled"));
}

function notesCount() {
    console.log(typeof txtcash.value);
    console.log(typeof txtBill.value);
    if (parseInt(txtcash.value) < parseInt(txtBill.value)) {
        // alert("incorrect:Cash Amount ");
        hideElement(tblContainer);
        msgStmt.innerHTML = "incorrect:Cash Paid";
        msgStmt.classList.remove("sucss-msg");
        msgStmt.classList.add("err-msg");

    } else if (parseInt(txtcash.value) === parseInt(txtBill.value)) {
        hideElement(tblContainer);
        msgStmt.innerHTML = "NO Cash Return";
        msgStmt.classList.remove("sucss-msg", "err-msg");
        msgStmt.classList.add("nocash-msg");
    } else {
        tblDisplay();
        showElements(tblContainer);
        msgStmt.innerHTML = "Retun the Cash";
        msgStmt.classList.remove("err-msg");
        msgStmt.classList.add("sucss-msg");
        // msgStmt.setAttribute("color","#008000");
    }
}

function tblDisplay() {
    calculateNotes();
    // var tableBody= tblCashReturn.getElementsByTagName("tbody");
    var displayRow = tblCashReturn.querySelectorAll("tr");
    displayRow = displayRow[0];
    var displayCols = displayRow.querySelectorAll("td");

    displayCols[0].innerHTML = tableData["2000"];
    displayCols[1].innerHTML = tableData["500"];
    displayCols[2].innerHTML = tableData["200"];
    displayCols[3].innerHTML = tableData["100"];
    displayCols[4].innerHTML = tableData["50"];
    displayCols[5].innerHTML = tableData["20"];
    displayCols[6].innerHTML = tableData["10"];
    displayCols[7].innerHTML = tableData["5"];
    displayCols[8].innerHTML = tableData["2"];
    displayCols[9].innerHTML = tableData["1"];

}

function resetTableData() {
    tableData["2000"] = 0;
    tableData["500"] = 0;
    tableData["200"] = 0;
    tableData["100"] = 0;
    tableData["50"] = 0;
    tableData["20"] = 0;
    tableData["10"] = 0;
    tableData["5"] = 0;
    tableData["2"] = 0;
    tableData["1"] = 0;
}

function calculateNotes() {
    resetTableData();
    var remaning_amt = parseInt(txtcash.value) - parseInt(txtBill.value);
    while (remaning_amt > 0) {
        if (remaning_amt != 0) {
            // alert(remaning_amt);
            if (remaning_amt >= 2000) {
                var twoK = remaning_amt / 2000;
                tableData["2000"] = Math.floor(twoK);
                remaning_amt = remaning_amt % 2000;
                // alert(remaning_amt);
            } else if (remaning_amt >= 500) {
                var fiveH = remaning_amt / 500;
                tableData["500"] = Math.floor(fiveH);
                remaning_amt = remaning_amt % 500;
            } else if (remaning_amt >= 200) {
                var twoH = remaning_amt / 200;
                tableData["200"] = Math.floor(twoH);
                remaning_amt = remaning_amt % 200;
            } else if (remaning_amt >= 100) {
                var oneH = remaning_amt / 100;
                tableData["100"] = Math.floor(oneH);
                remaning_amt = remaning_amt % 100;
            } else if (remaning_amt >= 50) {
                var fifty = remaning_amt / 50;
                tableData["50"] = Math.floor(fifty);
                remaning_amt = remaning_amt % 50;
            } else if (remaning_amt >= 20) {
                var twenty = remaning_amt / 20;
                tableData["20"] = Math.floor(twenty);
                remaning_amt = remaning_amt % 20;
            } else if (remaning_amt >= 10) {
                var ten = remaning_amt / 10;
                tableData["10"] = Math.floor(ten);
                remaning_amt = remaning_amt % 10;
            } else if (remaning_amt >= 5) {
                var five = remaning_amt / 5;
                tableData["5"] = Math.floor(five);
                remaning_amt = remaning_amt % 5;
            } else if (remaning_amt >= 2) {
                var two = remaning_amt / 2;
                tableData["2"] = Math.floor(two);
                remaning_amt = remaning_amt % 2;
            } else if (remaning_amt >= 1) {
                var one = remaning_amt / 1;
                tableData["1"] = Math.floor(one);
                remaning_amt = remaning_amt % 1;
            }
        }

    }
}
txtBill.addEventListener("input", () => {
    txtchangeEventhandler(txtBill, btnNext)
});
btnNext.addEventListener("click", clickEventhandler);
txtcash.addEventListener("input", () => {
    txtchangeEventhandler(txtcash, btnCount)
});
btnCount.addEventListener("click", countClickEventHandler);