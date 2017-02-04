var allBirds = [];
allBirds[0] = new Bird("chicken", 2, 7);
allBirds[1] = new Bird("eagle", 5, 7);
allBirds[2] = new Bird("turkey", 3, 6);
// function main() {
//     // var birds = ["chicken", "eagle", "turkey", "pheasant", "marten", "duck"];
//     // var prices = [2, 5, 3, 4, 3, 2];
//     // var quantities = [7, 5, 6, 4, 8, 3];
//
//
// }

function Bird(type, price, quantity) {
    this.type = type,
    this.price = price,
    this.sold = 0,
    this.quantity = quantity,
    this.changePrice = function (price) {
        this.price = price;
    },
    this.changeQuantity = function(quantity) {
        this.quantity = quantity;
    },
    this.sell = function (q) {
        this.quantity -= q;
        this.sold += q;
    }
}

function addBird(allBirds, bird) {
    for(var i = 0; i < allBirds.length; i++) {
        if(allBirds[i].type === bird.type) {
            return;
        }
    }
    allBirds.push(bird);
}

function addRows(tableID, birds) {
    var tableRef = document.getElementById(tableID);
    for (var i = 0, n = birds.length; i < n; i++) {
        var row = tableRef.insertRow(i);
        var c_1 = row.insertCell(0);
        c_1.innerHTML = allBirds[i].type;
        var c_2 = row.insertCell(1);
        c_2.innerHTML = allBirds[i].price;
        var c_3 = row.insertCell(2);
        c_3.innerHTML = allBirds[i].quantity;
        }
    }
addRows('myTable', allBirds);
