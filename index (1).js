







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


    template = `
            <div 
        ${ new BookComponent("Cloudy With A Chance Of MeatBalls", "https://images-na.ssl-images-amazon.com/images/I/51tU%2B0j30JL.jpg", "The beloved, bestselling tale of edible weather is brought to life! If food dropped like rain from the sky, wouldn't it be marvelous! Or would it? It could, after all, be messy. And you'd have no choice. What if you didn't like what fell? Or what if too much came? Have you ever thought of what it might be like to be squashed flat by a pancake?").template}

        ${ new BookComponent("Test", "https://images-na.ssl-images-amazon.com/images/I/51tU%2B0j30JL.jpg", "Testing").template}

        </div > `
}



// document.getElementById("root").innerHTML += `
//  <div class="card">
// <div class="card-body">
//   ${this.description}
// </div>
// </div>`


// class descriptionComponent {

//  template =`
// <div class="card">
//   <div class="card-body">
//     ${this.description}
//   </div>
// </div>
// `
// }

document.getElementById("root").innerHTML += `${new BookListComponent().template}
`;

// console.log()





// let descriptionTemplate = `
// <div class="card">
//   <div class="card-body" id="descriptionText"></div>
// </div>
// `



document.getElementById("descriptionBtn").addEventListener('click', function (e) {

    if (e.target && e.target.id == "descriptionBtn") {
        if (document.getElementById('descriptionBtn').innerText == "Hide Description") {
            document.getElementById("descriptionText").innerText = ""

            document.getElementById("descriptionBtn").innerText = "Show Description"

        } else if (document.getElementById("descriptionBtn").innerText = "Show Description") {

            document.getElementById("descriptionText").innerHTML += `TEST`
            document.getElementById('descriptionBtn').innerText = "Hide Description"
        }
    }
})

document.getElementById("root").innerHTML = `${new BookListComponent().template}`;
        // document.getElementById("root").innerHTML += descriptionComponent().template;
//ADD LISTENER FOR BUTTON CLICK

/* <body>
<form>
    <input type="text" id="imagename" value="" />
    <input type="button" id="btn" value="GO" />
</form>
    <script type="text/javascript">
        document.getElementById('btn').onclick = function() {
            var val = document.getElementById('imagename').value,
                src = 'http://webpage.com/images/' + val +'.png',
                img = document.createElement('img');

            img.src = src;
            document.body.appendChild(img);
        }
    </script>
</body>
</html> */
//ADD NEW BOOK COMPONENT WITH A FORM TEMPLATE