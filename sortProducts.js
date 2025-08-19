// Sort products
// You are given an array of product objects, each containing a name (string) and a price (number). 
// Your task is to implement a function called sortProducts that sorts the products based on their 
// prices in ascending order. 

function sortProducts(products){
   return products.sort((a, b) => a.price-b.price)
}
const obj =[
    {"name":"sousage", price:400},
    {"name": "groundnuts", price: 600},
    {"name": "maize", price: 200},
    {"name": "flour", price: 60},
] 

console.log(sortProducts(obj))
           