// var tg = document.getElementsByTagName("li");
// for (i=0;i<tg.length;i++){
//     // console.log(tg[i]);
// }

// var name1 = document.getElementsByClassName("name");

// for (i=0;i<tg.length;i++){
//     // console.log(name1[i]);
// }

// var titles = document.getElementsByClassName("title");

// for (i=0;i<tg.length;i++){
// console.log(titles[i]);
// }

// Array.from(titles).forEach(function(item){
//     console.log(item);
// })

// console.log(Array.isArray(Array.from(titles)));


// var wrapper = document.querySelector("#wrapper");
// var a_book = document.querySelector("#book-list li:nth-child(2) .name")
// var books = document.querySelectorAll("#book-list li .name")

// Array.from(books).forEach(function(book){
// console.log(book);
// })

// books.forEach(function(book){
//     console.log(book.textContent);
//     book.textContent+=" (Book Title)";
// })


// var bookList = document.querySelector("#book-list");
// // bookList.innerHTML +="Gone gone and append
// console.log(bookList.nodeType)
// console.log(bookList.nodeName)
// console.log(bookList.hasChildNodes)
// var clone = bookList.cloneNode(true)
// console.log(clone)


// console.log(bookList.parentNode)
// console.log(bookList.parentElement.parentElement)
// console.log(bookList.childNodes)
// console.log(bookList.children)

// console.log(bookList.nextSibling)
// console.log(bookList.nextElementSibling)

// console.log(bookList.previousSibling)
// console.log(bookList.previousElementSibling)
// bookList.previousElementSibling.querySelector("p").innerHTML += "<br/>Lol"


// var h2 = document.querySelector('#book-list h2');

// h2.addEventListener('click', function(event){
//     console.log(event.target);
//     console.log(event);
// });

// var btns = document.querySelectorAll('#book-list .delete');

// Array.from(btns).forEach(function(btn){
//     btn.addEventListener('click', function(e){
//         const li=e.target.parentElement;
//         li.parentNode.removeChild(li);
//     });
// });


// h2.innerHTML +="<br /><a href='http://www.google.com'>click</a>"

// var a = document.querySelector("#book-list a");
// a.addEventListener('click',function(e){
//     e.preventDefault();
//     console.log('stopped');
// })


/* -----just for reference don't get confused-----
var content = document.querySelectorAll("#book-list li")
content.forEach(function(con){
    // console.log(con)
    document.querySelector("ul").innerHTML += "<li>"+ con.textContent + "</li>"

})
*/



//delete

var ulList = document.querySelector("#book-list ul");

ulList.addEventListener('click', function(e){
    if(e.target.className == "delete"){
        const li = e.target.parentElement;
        // li.parentNode.removeChild(li);
        // ulList is nothing but the parentNode of the li tag
        ulList.removeChild(li);
    }
});



//add  a book

var form = document.forms["add-book"];


form.addEventListener('submit', function(e){
    e.preventDefault();
    const val1 =   form.querySelector('input[type="text"]').value;


    //creating elements
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');


    //add content
    deleteBtn.textContent='delete';
    bookName.textContent=val1;
    
    
    //add classes
    bookName.classList.add("name");
    deleteBtn.classList.add("delete");


    //appending elements
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    ulList.appendChild(li);

    bookName.textContent=val1;

    console.log(val1);

})


//hide books

var hideBox= document.querySelector("#add-book #hide");

hideBox.addEventListener('change',function(e){
    if(hideBox.checked){
        ulList.style.display = "none";
    }
    else{
        ulList.style.display ="initial";
    }
})

//search books

var searchBar = document.forms['search-books'].querySelector('input');

searchBar.addEventListener('keyup', function(e){
    const searchText = e.target.value.toLowerCase();
    // console.log(searchText)
    // const books2 = ulList.querySelectorAll('li');
    // console.log(books2) doesn't need to convert to an array "Array.from(arg)"
    const books = ulList.getElementsByTagName('li');
    // console.log(books)

    Array.from(books).forEach(function(book){
        const title = book.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(searchText) != -1){
            book.style.display ="block";
        }
        else{
            book.style.display="none";
        }
    });

});

//tabbed content

var tabs = document.querySelector('.tabs');
var panels = document.querySelectorAll('.panel');

tabs.addEventListener('click', function(e){
    if(e.target.tagName =='LI'){
        const targetPanel = document.querySelector(e.target.dataset.target);
        panels.forEach(function(panel){
            if(panel==targetPanel){
                panel.classList.add('active');
            }
            else
            {
                panel.classList.remove('active');
            }
        })
    }
})