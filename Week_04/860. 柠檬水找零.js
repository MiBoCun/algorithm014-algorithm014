/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    if (bills[0] === 10 || bills[0] === 20) {
            return false
        }
        let five = 0;
        let ten = 0;
        for (let i = 0; i < bills.length; i++) {
            let cur = bills[i]
            if (cur === 5) {
                five++
            }
            if (cur === 10) {
                if (!five) {
                    return false //优先判断false，减少不必要逻辑判断
                } else {
                    ten++
                    five--
                }
            }
            if (cur === 20) {
                if (five && ten) {
                    five--
                    ten--
                } else if (five < 3) {
                    return false //优先判断false，减少不必要逻辑判断
                } else {
                    five -= 3
                }
            }
        }
        return true
};