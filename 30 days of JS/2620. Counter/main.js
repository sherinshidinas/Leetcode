/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let count = 1
    return function() {
        if(count === 1){
            count++;
            return n
        }else{
          return  n += 1
        }   
           
    };
};

const n = 10
const counter = createCounter(n)
counter()
counter()
counter()

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */