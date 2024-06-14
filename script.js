const myLibrary = []

function BookList(title, author, pages, haveRead){
    this.title = title
    this.author = author
    this.pages = pages
    this.haveRead = haveRead

}
function addBookToLibrary(book){

    myLibrary.push(book)
    updateCards()

}
function deleteBook(index){
    myLibrary.splice(index,1)
    updateCards()
}


document.getElementById('formBook').addEventListener("submit", (event) =>{
    event.preventDefault();


    //jQuery to check the state and set to Read or Not Read
    let checkState = $("#bookRead").is(":checked") ? "Read" : "Not Read";

    const title = document.getElementById('bookTitle').value
    const author = document.getElementById('bookAuthor').value
    const pages = document.getElementById('bookPages').value
    const haveRead = checkState

    console.log(title,author,pages,haveRead)


    if(title && author && pages && haveRead){
        const newBook = new BookList(title,author,pages,haveRead)

        console.log("New Book allocation", newBook)
        addBookToLibrary(newBook)
        console.log("Checking if added to library", myLibrary, myLibrary.length)



        document.getElementById('formBook').reset()


    }
    else{
        alert("Invalid")
    }

})

function updateCards(){
    
    let bookList = document.getElementById('bookList')
    bookList.innerHTML = ''
    
    let row;

    myLibrary.forEach((book, index) =>{
        
        if(index % 3 === 0){
            row = document.createElement('div')
            row.className = 'row'
            bookList.appendChild(row)




        }


    const col = document.createElement('div')
    col.classList.add('col-4', 'mb-3')

   
    let card = document.createElement('card')
    card.classList.add('card', 'text-bg-dark')
       
        card.innerHTML = `

         <div class="card-body">
             <h5 class="card-title">${book.title}</h5>
             <p class="card-text">${book.author}</p>
             <p class="card-text">${book.pages}</p>
             <p class="card-text">${book.haveRead}</p>
             <span onclick="deleteBook('${index}')">
                <svg style="cursor:pointer" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                </svg>
                           

            </span>

         </div>
        
        
        
        

        `
        col.appendChild(card)
        row.appendChild(col)
    


    })



}



