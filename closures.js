module.exports = {

    counter: function (start) {
        let number = start;
        return {
            next: function () {
                number = number + 1;
                return number;
            }
        }
    },

    total: function (amount) {
        let originalPrice = amount;
        return {
            discount: function (percent) {
                let discountedPrice = (1 - percent) * originalPrice;
                return discountedPrice;
            }
        }
    },

    user: function () {
        let name = '';

        return {
            setName: function (input) {
                let setName = new RegExp('^[A-Za-z ]+$');

                if (setName.test(input) === true) {
                    name = input;
                    return true;
                } else {
                    return false;
                }
            },

            getName: function () {
                return name;
            },

        };
    },

    lives: function (start) {
        let life = start;

        return {
            died: function () {
                life = life - 1;
                return life;
            },

            left: function () {
                return life;
            },

            restart: function () {
                life = start;
                return life;

            },
        }
    },

    messages: function () {
        let logger = 0;

        return {
            record: function (msg) {
                logger = logger + 1;
                return '[' + logger + '] ' + msg;
            }
        }
    },

    multiply: function (val) {
        return function (val2) {
            return val * val2;
        }
    },

    pocket: function (start) {
        let money = start;
        let trinkets = 0;

        return {
            coins: function() {
                return money;
            },

            trinkets: function() {
                return trinkets;
            },
            
            buy: function () {
                money = money - 10;
                trinkets = trinkets + 1;
            },

            sell: function () {
                money = money + 5;
                if (trinkets >= 0) {
                    trinkets = trinkets - 1 
                }
            },
        }
    }

}; 











