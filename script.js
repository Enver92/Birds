var allBirds = [];

function main() {
    var birds = ["chicken", "eagle", "turkey", "pheasant", "marten", "duck"];
    var prices = [2, 5, 3, 4, 3, 2];
    var quantities = [7, 5, 6, 4, 8, 3];

    allBirds[0] = Bird("chicken", 2, 7);
    allBirds[1] = Bird("eagle", 5, 7);
    allBirds[2] = Bird("turkey", 3, 6);
}

function Bird(type, price, quantity) {
    this.type = type,
        this.price = price,
        this.sold = 0;
    this.quantity = quantity,
        this.changePrice = function (price) {
            this.price = price;
        },
        this.changeQuantity = function (quantity) {
            this.quantity = quantity;
        },
        this.sell = function (q) {
            this.quantity -= q;
            this.sold += q;
        }
}


function addBird(bird) {
    allBirds.push(bird);
}


// var t = "";
// for (var i = 0; i < posts_array.length; i++){
//     var tr = "<tr>";
//     tr += "<td>"+posts_array[i][0]+"</td>";
//     tr += "<td>"+posts_array[i][1]+"</td>";
//     tr += "<td>"+posts_array[i][2]+"</td>";
//     tr += "<td>"+posts_array[i][3]+"</td>";
//     tr += "</tr>";
//     t += tr;
// }
// document.getElementById("posts").innerHTML += t;
