import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { saveBookReadList, saveBookWishList } from "../Utility/localStorage";

const BookDetails = () => {

    const books = useLoaderData();
    const bookId = useParams();
    const book = books.find(book => book.bookId == bookId.id);
    console.log(bookId.id, book);

    const handleWishlist = () => {
        const getData = JSON.parse(localStorage.getItem('book-wishlist'));
        saveBookWishList(book);
        toast.success("Added successfully");
      }
      
      const handleReadlist = () => {
        saveBookReadList(book);
        toast.success("Added successfully");
      }

    const { bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;

    return (
        <>
            <div className="flex sans gap-10 my-14">
                <img src={image} className="w-[100vw] max-h-fit bg-[#13131317] p-16 rounded-xl" />
                <div>
                    <h1 className="fair text-5xl font-bold">{bookName}</h1>
                    <p className="font-semibold text-xl py-5 border-b-2 border-dashed">By : {author}</p>
                    <p className="text-xl py-5 border-b-2 border-dashed">{category}</p>
                    <p className="mt-10"><span className="font-bold">Review : </span>{review}</p>
                    <p className="my-10 border-b-2 border-dashed pb-10"><span className="font-bold mr-7">Tag</span>
                        <div className="badge badge-outline text-[#22be0a] font-bold mr-3">#{tags[0]}</div>
                        <div className="badge badge-outline text-[#22be0a] font-bold">#{tags[1]}</div>
                    </p>
                    <div className="flex gap-16">
                        <div>
                            <p>Number of Pages: </p>
                            <p>Publisher: </p>
                            <p>Year of Publishing: </p>
                            <p>Rating: </p>
                        </div>
                        <div className="font-bold">
                            <p>{totalPages}</p>
                            <p>{publisher}</p>
                            <p>{yearOfPublishing}</p>
                            <p>{rating}</p>
                        </div>
                    </div>
                    <div className="flex gap-5 mt-8">
                        <button onClick={handleReadlist} className="btn btn-outline"> Read </button>
                        <button onClick={handleWishlist} className="btn btn-info text-white bg-[#50B1C9]">Wishlist</button>
                    </div>
                </div>

            </div>
            <ToastContainer />
        </>
    );
};

export default BookDetails;