import { useEffect, useState } from "react";
import ListedBook from "./ListedBook";

const ListedBooks = () => {

    // const [books, setBooks] = useState([]);

    const [wishlistedBooks, setWishlistedBooks] = useState([]);
    const [readBooks, setReadBooks] = useState([]);
    const [displayReadBooks, setDisplayReadBooks] = useState([]);
    const [displayWishlistBooks, setDisplayWishlistBooks] = useState([]);

    const handleBookSort = (event) =>{
        // console.log(sort.target.value)
        event.preventDefault();

        if(event.target.value === 'rating'){
            // console.log(wishlistedBooks.sort((a, b) => b.rating - a.rating))
            const ratingSort = [...wishlistedBooks].sort((a, b) => b.rating - a.rating);
            console.log(ratingSort);
            setDisplayWishlistBooks(ratingSort);
            setDisplayReadBooks([...readBooks].sort((a, b) => b.rating - a.rating));
        }
        else if(event.target.value === 'totalPages'){
            console.log(wishlistedBooks.sort((a, b) => b.totalPages - a.totalPages))
            setDisplayWishlistBooks([...wishlistedBooks].sort((a, b) => b.totalPages - a.totalPages));
            setDisplayReadBooks([...readBooks].sort((a, b) => b.totalPages - a.totalPages));
        }
        else if(event.target.value === 'year'){
            console.log(wishlistedBooks.sort((a, b) => b.yearofPublishing - a.yearOfPublishing))
            setDisplayWishlistBooks([...wishlistedBooks].sort((a, b) => b.yearofPublishing - a.yearOfPublishing))
            setDisplayReadBooks([...readBooks].sort((a, b) => b.yearofPublishing - a.yearOfPublishing));
        }
    }

    // useEffect(() => {
    //     fetch('books.json')
    //         .then(res => res.json())
    //         .then(data => setBooks(data));
    // }, [])

    useEffect(() => {
        const getData = JSON.parse(localStorage.getItem('book-wishlist')) || [];
        setWishlistedBooks(getData);
        setDisplayWishlistBooks(getData)
    }, [])

    useEffect(() => {
        const getData = JSON.parse(localStorage.getItem('read-book')) || [];
        setReadBooks(getData);
        setDisplayReadBooks(getData);
    }, [])


    return (
        <div className='sans'>
            <h1 className='bg-[#13131315] text-3xl font-bold p-5 text-center rounded-xl mt-4'>Books</h1>
            <div>
                <label className="form-control max-w-32 my-10 mx-auto">
                    <select defaultValue="default" onChange={handleBookSort} className="select select-bordered bg-[#23BE0A] text-white font-semibold w-36">
                        <option disabled selected value="default"> Sort By</option>
                        <option value="rating">Rating</option>
                        <option value="totalPages">Number of pages</option>
                        <option value="year">Published year</option>
                    </select>

                </label>
            </div>
            <div role="tablist" className="tabs tabs-lifted">
            <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read Books" checked />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    <div>
                        {
                            displayReadBooks.map(book => <ListedBook
                                key={book.bookId}
                                book={book}></ListedBook>)
                        }
                    </div>
                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Wishlist Books"/>
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                <div>
                        {
                            displayWishlistBooks.map(book => <ListedBook
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