const getStoredWishlist = () =>{
    const storedWishlist = localStorage.getItem('book-wishlist');
    if(storedWishlist){
        return JSON.parse(storedWishlist);
    }
    return [];
}

const getStoredReadlist = () =>{
    const storedReadlist = localStorage.getItem('read-book');
    if(storedReadlist){
        return JSON.parse(storedReadlist);
    }
    return [];
}

const saveBookWishList = id =>{
    const storedWishlist = getStoredWishlist();
    console.log(storedWishlist);
    const exists = storedWishlist.find(bookId => bookId === id.bookId);
    if(!exists){
        storedWishlist.push(id);
        console.log(storedWishlist);
        localStorage.setItem('book-wishlist',JSON.stringify(storedWishlist))
    }
}

const saveBookReadList = id =>{
    const storedReadlist = getStoredReadlist();
    const exists = storedReadlist.find(bookId => bookId === id.bookId);
    if(!exists){
        storedReadlist.push(id);
        console.log(storedReadlist);
        localStorage.setItem('read-book',JSON.stringify(storedReadlist))
    }
}

export { saveBookWishList, getStoredWishlist, getStoredReadlist, saveBookReadList}