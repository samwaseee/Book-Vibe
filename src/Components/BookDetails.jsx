import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {

    const books = useLoaderData();
    const {bookId} = useParams()
    const book = books.find(book => book.bookId === bookId);
    console.log(bookId,book);

    return (
        <div>
            Details of
        </div>
    );
};

export default BookDetails;