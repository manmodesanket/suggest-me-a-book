import React, {useState} from 'react';
import ReactDOM from 'react-dom';


const bookDB = {
    fiction: [
        {
            name: "War and Peace", 
            author: "Leo Tolstoy", 
            rating: "4/5", 
            description: "Often called the best novel ever written. Dozens of characters, stretching from Muscovite peasants all the way to Napoleon himself. The modern epic." },
        { 
            name: "Lolita", 
            author: "Vladimir Nobokov",
            rating: "4.1/5",
            description: "The scandalous love story of a man and a 12-year-old girl. As beautifully written as it is disturbing."},
        { 
            name: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            rating: "4.5/5",
            description: "One of the “Great American Novels.” Timeless story of class divisions, love and the inevitability of loneliness."
        },
        {
            name: "The Greated Adventures of Sherlock Holmes",
            author: "Sir Arthur Conon Doyle",
            rating: "4.5/5",
            description: "Sherlock Holmes is the greatest detective in all fiction, and his adventures are among the finest capers committed to the printed page. Rightly regarded as the Great Detective, Holmes sees clues that others overlook, and displays skills of detection that are nearly as uncanny as they are . . . elementary."
        }
    ],
  
    poetry: [
        {
            name: "Milk and Honey", 
            author: "Rupi Kaur", 
            rating: "4/5", 
            description: "There’s no single poetry book that has got as much warranted praise from millennials than Milk and Honey.Chances are you’ve already read it, heard about it or been recommended it personally by a friend, so if you don’t already have yourself a copy consider this a sign to click through and purchase pronto! If there’s just one book that should be required reading through or after a hard period in your life, this is it." },
        {
            name: "Love Her Wild",
            author: "Atticus Poetry",
            rating: "4.5/5",
            description: "Another author I’m sure you have heard of but perhaps don’t have a copy on your shelf is Atticus and his book of work: Love Her Wild. This book is filled with adventurous moments and memoirs and is the perfect companion for girls who love love but love adventure more. If I could pick just one book in this list to hold on to forever, this would be it."
        }
    ],
    short_story: [
        {
            name: "The Call of the Wild",
            author: "Jack London",
            rating: "5/5",
            description: "London’s tale of primitive reawakening. Buck, a domesticated dog, grows increasingly wild after he is stolen from his owner. An exhilarating read."
        },
        {
            name: "Three Tales",
            author: "Gustave Flaubert",
            rating: "4.5/5",
            description: "Flaubert’s sublime work consists of A Simple Heart, Saint Julian the Hospitalier, and Hérodia. They deal with themes of love and loneliness."
        }
    ]
  };

const App = () => {
    let [books, setBooks] = useState(bookDB["fiction"]);
    let [current, setCurrent] = useState("fiction")
    const genres = ["fiction", "poetry", "short_story"];

    let getBooks = (genre) => {
        let bookList = bookDB[genre];
        setCurrent(genre);
        setBooks(bookList);
    }

    return (
        <div className="container">
            <div className="header">
                <h1>suggest me a book</h1>
                <p>want to read a new book! find right here!</p>
            </div>
            <div className="buttons">
                {
                    genres.map((genre) => {
                        if(genre === current) {
                            return <button className="btn" key={genre} style={{backgroundColor: "lightblue"}} onClick={() => getBooks(genre)}>{genre}</button>
                        }
                        return <button className="btn" key={genre} onClick={() => getBooks(genre)}>{genre}</button>
                    })
                }
            </div>
            <hr/>
            <div>
                {
                    books.map((book, i) => (
                    <div className="book" key={i}>
                        <h3>{book.name}</h3>
                        <p>{book.author}</p>
                        <div>{book.rating}</div>
                        <p>{book.description}</p>
                    </div>
                    ))
                }
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));