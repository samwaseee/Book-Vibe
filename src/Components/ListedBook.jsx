import PropTypes from 'prop-types';

const ListedBook = ({book}) => {
    // console.log(book);

    const { bookId, bookName, author, image, rating, category, tags } = book;


    return (
        <div className='flex'>
            <img src={image} alt="" />
            <div>
                <h3 className='text-2xl fair font-bold'>{bookName}</h3>
                <p className='font-semibold'>By : {author}</p>

            </div>
        </div>
    );
};

ListedBook.propTypes = {
    book: PropTypes.object
};

export default ListedBook;