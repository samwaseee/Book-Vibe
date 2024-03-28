import PropTypes from 'prop-types';
import { CiLocationOn } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { MdMenuBook } from "react-icons/md";
import { Link } from 'react-router-dom';

const ListedBook = ({ book }) => {
    // console.log(book);

    const { bookId, bookName, author, image, rating, category, tags, totalPages,
        yearOfPublishing, publisher } = book;


    return (
        <div className='flex flex-wrap gap-5 border-2 p-4 rounded-xl mb-4'>
            <img src={image} className='bg-[#0000000f] py-8 px-12 rounded-lg' />
            <div>
                <h3 className='text-2xl fair font-bold'>{bookName}</h3>
                <p className='font-semibold'>By : {author}</p>
                <div className='flex flex-wrap items-center gap-5 my-5'>
                    <p className='font-bold'>Tag</p>
                    <div className="card-actions">
                        <div className="badge bg-[#22be0a10] text-[#22be0a] font-semibold p-4">#{tags[0]}</div>
                        <div className="badge bg-[#22be0a10] text-[#22be0a] font-semibold p-4">#{tags[1]}</div>
                    </div>

                    <p className='flex items-center gap-2'><CiLocationOn />Year of Publishing: {yearOfPublishing}</p>
                </div>
                <div className='flex flex-wrap items-center border-b-2 pb-4 lg:w-[60vw]'>
                    <GoPeople />
                    <p className='mr-8 ml-2'>Publisher: {publisher}</p>
                    <MdMenuBook />
                    <p className='ml-2'>Page {totalPages}</p>
                </div>
                <div className="card-actions mt-5 gap-5">
                    <div className="badge bg-[#328eff2b] text-[#328EFF] font-semibold p-4">Category: {category}</div>
                    <div className="badge bg-[#ffad332a] text-[#FFAC33] font-semibold p-4">Rating: {rating}</div>
                    <Link to={`/book/${bookId}`}>
                        <button className='btn text-white bg-[#22be0a]  border-none min-h-1 h-8 rounded-3xl'>
                            View Details
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

ListedBook.propTypes = {
    book: PropTypes.object
};

export default ListedBook;