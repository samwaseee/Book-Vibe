import { useLoaderData } from 'react-router-dom';
import Header from './Header';
import Book from './Book';

const Books = () => {

    const books = useLoaderData();

    return (
        <>
        <Header></Header>
        <h3 className='text-center text-5xl font-bold fair mt-20 mb-10'>Books</h3>
        <div className='flex flex-wrap gap-14'>
            
            {
                books.map(book => <Book 
                    key={book.bookId}
                    book={book}></Book>)
            }
        </div>
        </>
    );
};

Books.propTypes = {
    
};

export default Books;