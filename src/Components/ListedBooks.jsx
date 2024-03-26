import { useEffect, useState } from "react";
import { getStoredWishlist } from "../Utility/localStorage";
import ListedBook from "./ListedBook";

const ListedBooks = () => {

    const [books, setBooks] = useState([]);

    const [wishlistedBooks, setWishlistedBooks] = useState([]);
    const [readBooks, setReadBooks] = useState([]);

    useEffect(() => {
        fetch('books.json')
            .then(res => res.json())
            .then(data => setBooks(data));
    }, [])

    useEffect(() => {
        const getData = JSON.parse(localStorage.getItem('book-wishlist')) || [];
        setWishlistedBooks(getData);
    }, [])

    useEffect(() => {
        const getData = JSON.parse(localStorage.getItem('read-book')) || [];
        setReadBooks(getData);
    }, [])

    return (
        <div className='sans'>
            <h1 className='bg-[#13131315] text-3xl font-bold p-5 text-center rounded-xl mt-4'>Books</h1>
            <div>
                <label className="form-control max-w-32 my-10 mx-auto">

                    <select className="select select-bordered bg-[#23BE0A] text-white font-semibold w-36">
                        <option disabled selected> Sort By</option>
                        <option>Rating</option>
                        <option>Number of pages</option>
                        <option>Published year</option>
                    </select>

                </label>
            </div>
            <div role="tablist" className="tabs tabs-lifted">
                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read Books" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    <div>
                        {
                            readBooks.map(book => <ListedBook
                                key={book.bookId}
                                book={book}></ListedBook>)
                        }
                    </div>
                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Wishlist Books" checked />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    <div>
                        {
                            wishlistedBooks.map(book => <ListedBook
                                key={book.bookId}
                                book={book}></ListedBook>)
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListedBooks;