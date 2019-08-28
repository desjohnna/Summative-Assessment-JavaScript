
var bookList = [
  {id:0, title: "Cloudy With A Chance Of MeatBalls", cover: "https://\/images-na.ssl-images-amazon.com/images/I/51tU%2B0j30JL.jpg", bookDescription: "The beloved, bestselling tale of edible weather is brought to life! If food dropped like rain from the sky, wouldn't it be marvelous! Or would it? It could, after all, be messy. And you'd have no choice. What if you didn't like what fell? Or what if too much came? Have you ever thought of what it might be like to be squashed flat by a pancake?" },
  {id:1 ,title: "Test1", cover: "images/where-the-sidewalk-ends.jpg", bookDescription: " A boy who turns into a TV set and a girl who eats a whale are only two of the characters in a collection of humorous poetry illustrated with the author's own drawings. Come in - for where the sidewalk ends, Shel Silverstein's world begins. You'll meet a boy who turns into a TV set, and a girl who eats a whale. The Unicorn and the Bloath live there, and so does Sarah Cynthia Sylvia Stout who will not take the garbage out. It is a place where you wash your shadow and plant diamond gardens, a place where shoes fly, sisters are auctioned off, and crocodiles go to the dentist." },
  {id:2, title: "Test2", cover: "images/PizzaSun.jpg", bookDescription: "The beloved, bestselling tale of edible weather is brought to life! If food dropped like rain from the sky, wouldn't it be marvelous! Or would it? It could, after all, be messy. And you'd have no choice. What if you didn't like what fell? Or what if too much came? Have you ever thought of what it might be like to be squashed flat by a pancake?" },
  {id:3, title: "test3", cover: "images/TigerRising.jpg", bookDescription: "The beloved, bestselling tale of edible weather is brought to life! If food dropped like rain from the sky, wouldn't it be marvelous! Or would it? It could, after all, be messy. And you'd have no choice. What if you didn't like what fell? Or what if too much came? Have you ever thought of what it might be like to be squashed flat by a pancake?" },
  {id:4 , title: "test3", cover: "images/SavingWilson.jpg", bookDescription: "The beloved, bestselling tale of edible weather is brought to life! If food dropped like rain from the sky, wouldn't it be marvelous! Or would it? It could, after all, be messy. And you'd have no choice. What if you didn't like what fell? Or what if too much came? Have you ever thought of what it might be like to be squashed flat by a pancake?" }
];

document.getElementById("root").innerHTML = `
<div class="jumbotron">
  <div class="container">
    <h1 class="display-4">Nya's Favorite Books</h1>
    <p class="lead">Feel free to add your favorite book below!</p>
  </div>
  </div>

<div class="card-deck" id="cardDeck"></div>



<div class="card border-dark mb-3" style="max-width: 50%;">
<div class="card-header">Book Description</div>
<div class="card-body text-dark">
  <p class="text-muted">Click on a Show Description under a book to display book's description below. </p>
  <p class="card-text" id="descriptionText">${this.description}</p>
</div>
</div>


<form >
  <div class="form-group">
    <label for="new book title">Book Title</label>
    <input class="form-control" id="newBookTitle" placeholder="Enter Book Title"> 
    </div>

  <div class="form-group">
    <label for="cover">Book Cover Link</label>
    <input type="Link" class="form-control" id="bookCover" placeholder="Enter Book Cover">
  </div>

  <div type="text" class="form-control">
    <label for="book">Book Cover Link</label>
    <input type="Link" class="form-control" id="bookCover" placeholder="Enter Book Cover">
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>`


//BOOK COMPONENT: SETS TEMPLATE FOR CARD IMG AND TITLE
class BookComponent {

  constructor(title, cover, description, id) {
    this.title = title;
    this.cover = cover;
    this.description = description;
    this.id = id;

    this.template = `
          <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${cover}" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">${this.title}</h5>
                <a href="#" class="btn btn-primary" id="${this.id}">Show Description</a></div></div>

            `

  //   this.descriptionBox = ` <div class="card border-dark mb-3" style="max-width: 50%;">
  //   <div class="card-header">Book Description</div>
  //   <div class="card-body text-dark">
  //     <p class="text-muted">Click on a Show Description under a book to display book's description below. </p>
  //     <p class="card-text">${this.description}</p>
  //   </div>
  // </div>`
  }
}

// class BookListComponent {

//   constructor() {
    

//     this.template = `
//         <div 
//         ${this.bookList.map(e => new BookComponent(e.title, e.cover, e.bookDescription).template).join("")}
//         </div>`


//     // this.textTemplate = `
//     // <div class="card"  id="textBox>
//     // <div class="card-body" id="descriptionText">${this.bookDescription}</div>
//     // </div>`

//   }
// }

document.getElementById("cardDeck").innerHTML += bookList.map(e => new BookComponent(e.title, e.cover, e.bookDescription, e.id).template).join("")

// document.getElementById('cardDeck').innerHTML += ${bookList.map(e => new BookComponent(e.title, e.cover, e.bookDescription).template).join("")}




//RENDERING THE LIST OF BOOKS INTO THE CARD DECK
// document.getElementById("cardDeck").innerHTML = `${new BookListComponent().template}`

bookBtn = document.getElementsByClassName('btn')
descriptionText = document.getElementById('descriptionText')
x = btnId

document.addEventListener('click', function (e) {
  if (e.target && e.target.id == 'btn') {
    event.preventDefault()
    alert("Was preventDefault() called: " + event.defaultPrevented);
    

    if (document.getElementsById(x).innerText == "Show Description") {

      document.getElementById("descriptionText").innerHTML = bookList[x];
      document.getElementsById(x).innerText =="Hide Description";

    } else if (document.getElementById(x).innerText == "Hide Description") {

      document.getElementById("descriptionText").innerText = "";
      document.getElementById('descriptionBtn').innerText = "Hide Description";

    }
  }

})








