
document.getElementById("root").innerHTML = `

<div class="card-deck" id="cardDeck"></div>

<div class="card" id="textBox">
<div class="card-body" id="descriptionText"></div>
</div>`


//BOOK COMPONENT: SETS TEMPLATE FOR CARD IMG AND TITLE
class BookComponent {

    constructor(title, cover, description) {
        this.title = title;
        this.cover = cover;
        this.description = description;

        this.template = `
        <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${cover}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${this.title}</h5>
          <a href="#" class="btn btn-primary" id="descriptionBtn">Show Description</a></div></div>
        `
    }
}

class BookListComponent {

    constructor() {
        this.bookList = [
            { title: "Cloudy With A Chance Of MeatBalls", cover: "https://\/images-na.ssl-images-amazon.com/images/I/51tU%2B0j30JL.jpg", bookDescription: "The beloved, bestselling tale of edible weather is brought to life! If food dropped like rain from the sky, wouldn't it be marvelous! Or would it? It could, after all, be messy. And you'd have no choice. What if you didn't like what fell? Or what if too much came? Have you ever thought of what it might be like to be squashed flat by a pancake?" },
            { title: "Test1", cover: "images/where-the-sidewalk-ends.jpg", bookDescription: "The beloved, bestselling tale of edible weather is brought to life! If food dropped like rain from the sky, wouldn't it be marvelous! Or would it? It could, after all, be messy. And you'd have no choice. What if you didn't like what fell? Or what if too much came? Have you ever thought of what it might be like to be squashed flat by a pancake?" },
            { title: "Test2", cover: "images/PizzaSun.jpg", bookDescription: "The beloved, bestselling tale of edible weather is brought to life! If food dropped like rain from the sky, wouldn't it be marvelous! Or would it? It could, after all, be messy. And you'd have no choice. What if you didn't like what fell? Or what if too much came? Have you ever thought of what it might be like to be squashed flat by a pancake?" },
            { title: "test3", cover: "images/TigerRising.jpg", bookDescription: "The beloved, bestselling tale of edible weather is brought to life! If food dropped like rain from the sky, wouldn't it be marvelous! Or would it? It could, after all, be messy. And you'd have no choice. What if you didn't like what fell? Or what if too much came? Have you ever thought of what it might be like to be squashed flat by a pancake?" },
            { title: "test3", cover: "images/SavingWilson.jpg", bookDescription: "The beloved, bestselling tale of edible weather is brought to life! If food dropped like rain from the sky, wouldn't it be marvelous! Or would it? It could, after all, be messy. And you'd have no choice. What if you didn't like what fell? Or what if too much came? Have you ever thought of what it might be like to be squashed flat by a pancake?" }
        ];

        this.template = `
        <div 
        ${this.bookList.map(e => new BookComponent(e.title, e.cover, e.bookDescription).template).join("")}
        </div>`

        // this.textTemplate = `
        // <div class="card"  id="textBox>
        // <div class="card-body" id="descriptionText">${this.bookDescription}</div>
        // </div>`

    }
}
//RENDERING THE LIST OF BOOKS INTO THE CARD DECK
document.getElementById("cardDeck").innerHTML = `${new BookListComponent().template}`


document.getElementById(e.descriptionBtn).value).
document.getElementById("descriptionBtn").addEventListener('click', function (e) {
    e.preventDefault()

    if (document.getElementById('descriptionBtn').innerText == "Show Description") {
        document.getElementById("descriptionText").innerText = `${this.bookDescription}`

document.getElementById("descriptionBtn").innerText = "Hide Description"

    } else if (document.getElementById("descriptionBtn").innerText == "Hide Description") {

    document.getElementById("descriptionText").innerText = ""
    document.getElementById('descriptionBtn').innerText = "Hide Description"

}


})








