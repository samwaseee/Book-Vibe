import PropTypes from 'prop-types';

const ListedBook = ({ book }) => {
    // console.log(book);

    const { bookId, bookName, author, image, rating, category, tags } = book;


    return (
        <div className='flex gap-5'>
            <img src={image} className='bg-[#0000000f] py-8 px-12 rounded-lg' />
            <div>
                <h3 className='text-2xl fair font-bold'>{bookName}</h3>
                <p className='font-semibold'>By : {author}</p>
                <div>
                    <p className='font-bold'>Tag</p>
                    <div className="card-actions">
                        <div className="badge bg-[#22be0a10] text-[#22be0a] font-semibold">#{tags[0]}</div>
                        <div className="badge bg-[#22be0a10] text-[#22be0a] font-semibold">#{tags[1]}</div>
                    </div>
                </div>

            </div>
        </div>
    );
};

ListedBook.propTypes = {
    book: PropTypes.object
};

export default ListedBook;