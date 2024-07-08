import { useEffect, useState } from "react";
import ListedBook from "./TopGrossigBook";

const TopGrossing = () => {

    const [books, setBooks] = useState([]);
    const [topBooks, setTopBooks] = useState([]);

    useEffect(() => {
        fetch('books.json')
            .then(res => res.json())
            .then(data => {
                setBooks(data);
                setTopBooks([...books].sort((a, b) => b.rating - a.rating));
            });
    }, [])

    console.log(books)


    return (
        <div>
            <h1 className='bg-[#13131315] text-3xl font-bold p-5 text-center rounded-xl mt-4'>Top Grosssing Books</h1>
            <div className="flex flex-wrap gap-5">
                {
                    topBooks.map(book => <ListedBook
                        key={book.bookId}
                        book={book}></ListedBook>)
                }
            </div>
        </div>
    );
};


export default TopGrossing;