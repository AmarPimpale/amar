
let book=(function (){
    let bookName = []
    let tax = 10
    let booksquantity = 100
    let totalPirce = 1000

    let addToMyShelf = function(bookName,qua){
        console.log( `${bookName} ${qua}`)
    }
    return {
        bookName,
        tax,
        booksquantity,
        totalPirce,
        addToMyShelf
    }
})()


// by using return as object (having var and function)\
console.log(book.addToMyShelf("Art of war",100))
console.log(book.bookName)
console.log(book.totalPirce)  // can acess var and function with invoke function beacuse bool function return as obj so acess book same as obj.or obj[]



// console.log(book.bookName)   indiviual variable out of the self function not allowed
