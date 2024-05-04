const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

console.log(book.title); // "The Last Kingdom" 
console.log(book["title"]); // "The Last Kingdom" 

console.log(book.genres); // ["historical prose", "adventure"]
console.log(book["genres"]); // ["historical prose", "adventure"]

const propKey = "author";
console.log(book.propKey); // undefined
console.log(book[propKey]); // "Bernard Cornwell"




book.rating = 9;
book.isPublic = false;
book.genres.push("drama");
console.log(book.rating); // 9
console.log(book.isPublic); // false
console.log(book.genres); // ["historical prose", "adventure", "drama"]


const keys = Object.keys(book);
console.log(keys); // ["title", "author", "rating"]
const values = Object.values(book);
console.log(values); // ["The Last Kingdom", "Bernard Cornwell", 8.38]

const numbers = [5,10,15,20,30];
const filterNumbers = numbers.filter((number)=>number<20)
const filterNumbers1 = numbers.filter((number)=>number>=20)
console.log(filterNumbers);
console.log(filterNumbers1);
