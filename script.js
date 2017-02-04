function Bird(type, price, quantity) {
    this.type = type,
        this.price = price,
        this.quantity = quantity,
        this.changePrice = function(price){this.price = price;},
        this.changeQuantity = function(quantity){this.quantity = quantity;},
        this.sell = function(q){this.quantity -= q;}
}


