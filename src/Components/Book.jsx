import PropTypes from 'prop-types'
import star from '../assets/Vectorstar.svg'
import { Link } from 'react-router-dom';

const Book = ({ book }) => {

    const { bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;

    return (
        <div>
            <Link to={`/book/${bookId}`}>
                <div className="card w-96 bg-base-100 shadow-xl sans p-5">
                    <figure className='bg-[#F3F3F3] p-5 rounded-xl'><img src={image} /></figure>
                    <div className="card-body">
                        <div className="card-actions">
                            <div className="badge badge-outline text-[#22be0a]">{tags[0]}</div>
                            <div className="badge badge-outline text-[#22be0a]">{tags[1]}</div>
                        </div>
                        <h2 className="card-title fair my-4">
                            {bookName}
                        </h2>
                        <p className='border-b-2 border-dashed pb-3 mb-3'>By : {author}</p>
                        <div className='flex'>
                            <p>{category}</p>
                            <p className='flex gap-2 justify-end'>{rating} <img src={star} alt="" /></p>
                        </div>

                    </div>
                </div>

            </Link>
        </div>
    );
};

Book.propTypes = {
    book: PropTypes.object
};

export default Book;