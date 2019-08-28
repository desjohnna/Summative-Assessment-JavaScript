
var bookList = [
    { id: 0, title: "Cloudy With A Chance Of MeatBalls", cover: "https://\/images-na.ssl-images-amazon.com/images/I/51tU%2B0j30JL.jpg", bookDescription: "The beloved, bestselling tale of edible weather is brought to life! If food dropped like rain from the sky, wouldn't it be marvelous! Or would it? It could, after all, be messy. And you'd have no choice. What if you didn't like what fell? Or what if too much came? Have you ever thought of what it might be like to be squashed flat by a pancake?" },
    { id: 1, title: "Where the Sidewalk Ends", cover: "images/where-the-sidewalk-ends.jpg", bookDescription: " A boy who turns into a TV set and a girl who eats a whale are only two of the characters in a collection of humorous poetry illustrated with the author's own drawings. Come in - for where the sidewalk ends, Shel Silverstein's world begins. You'll meet a boy who turns into a TV set, and a girl who eats a whale. The Unicorn and the Bloath live there, and so does Sarah Cynthia Sylvia Stout who will not take the garbage out. It is a place where you wash your shadow and plant diamond gardens, a place where shoes fly, sisters are auctioned off, and crocodiles go to the dentist." },
    { id: 2, title: "A Pizza the Size of the Sun", cover: "images/PizzaSun.jpg", bookDescription: "I'm making a pizza the size of the sun, a pizza that's sure to weigh more than a ton, a pizza too massive to pick up and toss, a pizza resplendent with oceans of sauce. I'm topping my pizza with mountains of cheese, with acres of peppers, pimentos, and peas, with mushrooms, tomatoes, and sausage galore, with every last olive they had at the store. Here is a wondrously tasty—and always funny—collection of more than 100 poems for readers of every age. Meet Miss Misinformation and Gladiola Gloppe (andher Soup Shoppe), and delight in a backward poem, a poem that never ends,and scores of other poems to read and love. You won't stop smiling!" },
    { id: 3, title: "Tiger Rising", cover: "images/TigerRising.jpg", bookDescription: "Walking through the misty Florida woods one morning, twelve-year-old Rob Horton is stunned to encounter a tiger—a real-life, very large tiger—pacing back and forth in a cage. What’s more, on the same extraordinary day, he meets Sistine Bailey, a girl who shows her feelings as readily as Rob hides his. As they learn to trust each other, and ultimately, to be friends, Rob and Sistine prove that some things—like memories, and heartaches, and tigers—can’t be locked up forever." },
    { id: 4, title: "Saving Wilson", cover: "images/SavingWilson.jpg", bookDescription: "The beloved, bestselling tale of edible weather is brought to life! If food dropped like rain from the sky, wouldn't it be marvelous! Or would it? It could, after all, be messy. And you'd have no choice. What if you didn't like what fell? Or what if too much came? Have you ever thought of what it might be like to be squashed flat by a pancake?" }
];

document.getElementById("root").innerHTML = `
  <div class="jumbotron">
    <div class="container">
      <h1 class="display-4">Nya's Favorite Books</h1>
      <p class="lead">Feel free to add your favorite book below!</p>
    </div>
    </div>
  
  <div class="card-deck" id="cardDeck"></div>

  

 <div id="descriptionBox"></div>
  
  
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
                  <a href="#" onclick="showText('${this.id}');" class="btn btn-primary" id="${this.id}button">Show Description</a></div></div>
  
              `
    }
}

class descriptionCard {

    constructor(description, id) {
        this.description = description;
        this.id = id;

        this.template = `
     
  <div class="card border-dark mb-3" id=${this.id} style="display: none; max-width: 50%;">
  <div class="card-header">Book Description</div>
  <div class="card-body text-dark">
    <p class="text-muted">Click on a Show Description under a book to display book's description below. </p>
    <p class="card-text" id="descriptionText">${this.description}</p>
  </div>
  </div>`

    }
}


document.getElementById("cardDeck").innerHTML += bookList.map(e => new BookComponent(e.title, e.cover, e.bookDescription, e.id).template).join("")

document.getElementById("descriptionBox").innerHTML = bookList.map(e => new descriptionCard(e.bookDescription, e.id).template)

var descriptions = [0, 1, 2, 3, 4]
var visibleId = null;
function showText(descriptionBoxId) {

    if (visibleId == descriptionBoxId) {
        visibleId = null;
        
    } else {
        visibleId = descriptionBoxId;
        
    }
    hideText(visibleId);
   document.getElementById(descriptionBoxId + 'button').innerText = "Hide Description";
}

function hideText(visibleId) {
    var i
    var descriptionBoxId
    var card

    for (i = 0; i < descriptions.length; i++) {
        descriptionBoxId = descriptions[i];
        card = document.getElementById(descriptionBoxId);
        
        if (visibleId == descriptionBoxId) {
            card.style.display = "block";
            
        } else {

            card.style.display = "none";
            
        }
        
    }
}


function myFunction1(id){
    (visibleId).Toggle();
}



document.addEventListener('click', function (e) {
    event.preventDefault()
    // showText(descriptions[visibleId])
    // showText(1)
    // showText(2)
    // showText(3)
    // showText(4)
});








