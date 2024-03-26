const ListedBooks = () => {
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
        </div>
    );
};

export default ListedBooks;