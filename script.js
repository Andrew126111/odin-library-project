const library = [{ title: "1984", author: "George Orwell" },
{ title: "Harry Potter", author: "J.K. Rowling" },
{ title: "The Hobbit", author: "J.R.R. Tolkien" }];

function Book(title, author){
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
}
function addBooktoLibrary(title, author){
    const newBook = new Book(title,author);
    library.push(newBook);
}

const container = document.getElementById("card");
function loops(array){
    container.innerHTML = "";//clears it so theres no dupes since we manually added our books in the array
    for (let i = 0; i<array.length;i++){
        const newDiv = document.createElement("div");//createing the div element
        newDiv.innerHTML = array[i].title + " by " + array[i].author;//adds the array titles and author to the div
        container.appendChild(newDiv)//adds the div to the container
        newDiv.classList.add("book-card")//gives the newDiv a class so we can later edit it on css

        //add some remove buttons
        const remove = document.createElement("button")
        remove.textContent = "remove"
        remove.classList.add("remove");
        newDiv.appendChild(remove)

        remove.addEventListener("click", function(){
            library.splice(i, 1); // remove the book from the array at position i and deleting one item from the postition which is perfect
            loops(library);
        })

        //add a read 
        const read = document.createElement("button");
        read.textContent = "Not Read"
        read.classList.add("read");
        newDiv.appendChild(read)

        read.addEventListener("click", function(){
            if (read.textContent === "Read"){
                read.textContent = "Not Read"
            }
            else{
                read.textContent = "Read"
            }
        })


    }
}
const submit = document.getElementById("submit")
submit.addEventListener("click", function(){
    const titles = document.getElementById("title").value;
    const authors = document.getElementById("author").value;

    if (!titles || !authors) { 
        alert("Please fill in both fields NOWWWWW!!!!");
        return; // stop if inputs are empty
    }
    
    const newBook = new Book(titles,authors);
    library.push(newBook);
    loops(library)

    document.getElementById("title").value = "";//reset the values
    document.getElementById("author").value = "";//resets the values
})
loops(library)



function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

