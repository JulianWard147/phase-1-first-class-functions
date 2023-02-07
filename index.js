// const divide = function(a,b){
//     console.log(`I am dividing ${a} and ${b}, and logging this to test the recievesAFunction function.`)
//     return (a/b)
// }

function receivesAFunction(fun){
    fun()
    return('I feel like all functions should return some value...')
}

function returnsANamedFunction() {
    return function iHaveAName(){
        console.log('Hope this function has a name, but I\'m not sure how to check that in JS.')
    }
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log('Anon function has run')
    }
}

