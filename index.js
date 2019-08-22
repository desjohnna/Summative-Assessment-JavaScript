//BOOK COMPONENT: SETS TEMPLATE FOR CARD IMG AND TITLE
class BookComponent {

    constructor(title, cover, description) {
        this.title = title;
        this.cover = cover;
        this.template = `
        <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${cover}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${this.title}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>`
    }
}

class BookListComponent {

}

// BUTTON COMPONENT