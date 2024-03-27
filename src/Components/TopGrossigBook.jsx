import PropTypes from 'prop-types';
import { GoPeople } from "react-icons/go";
import { LuArrowBigUp } from "react-icons/lu";

const ListedBook = ({ book }) => {
    // console.log(book);

    const { bookId, bookName, author, image, rating, category, tags, totalPages,
        yearOfPublishing, publisher } = book;


    return (
        <div className='flex flex-wrap gap-5 border-2 p-4 rounded-xl my-4'>
            <div className='-mr-36 -mt-2 flex bg-[#ffad332d] badge p-4'>
                <LuArrowBigUp style={{fontSize: "2rem", color: "#FF6D33"}}></LuArrowBigUp>
                <p className='text-[#ff6d33] font-bold mt-1'>Rated {rating}</p>
            </div>
            <img src={image} className='bg-[#0000000f] py-8 px-12 rounded-lg' />
            <div>
                <h3 className='text-2xl fair font-bold'>{bookName}</h3>
                <p className='font-semibold'>By : {author}</p>
                <div className='flex items-center gap-5 my-5'>
                    <p className='font-bold'>Tag</p>
                    <div className="card-actions">
                        <div className="badge bg-[#22be0a10] text-[#22be0a] font-semibold p-4">#{tags[0]}</div>
                        <div className="badge bg-[#22be0a10] text-[#22be0a] font-semibold p-4">#{tags[1]}</div>
                    </div>

                </div>
                <div className='flex items-center pb-4'>
                    <GoPeople />
                    <p className='mr-8 ml-2'>Publisher: {publisher}</p>
                </div>
                <div className="card-actions mt-5 gap-5">
                    <div className="badge bg-[#328eff2b] text-[#328EFF] font-semibold p-4">Category: {category}</div>
                </div>

            </div>
            
        </div>
    );
};

ListedBook.propTypes = {
    book: PropTypes.object
};

export default ListedBook;