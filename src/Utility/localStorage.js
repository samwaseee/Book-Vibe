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
    const storedReadlist = getStoredReadlist();
    const storedWishlist = getStoredWishlist();

    const existsRead = storedReadlist.find(bookId => bookId.bookId === id.bookId);
    const existsWishlist = storedWishlist.find(bookId => bookId.bookId === id.bookId);
    if(!existsRead && !existsWishlist){
        storedWishlist.push(id);
        console.log(storedWishlist,id.bookId);
        localStorage.setItem('book-wishlist',JSON.stringify(storedWishlist))
        return "wishRead";
    }
    else if(existsRead){
        return "read";
    }
    else{
        return "wish";
    }
}

const saveBookReadList = id =>{
    const storedReadlist = getStoredReadlist();
    const storedWishlist = getStoredWishlist();

    const existsWishlist = storedWishlist.find(bookId => bookId.bookId === id.bookId);
    if(existsWishlist){
        const filterWishlist = storedWishlist.filter(bookId => bookId.bookId !== id.bookId);
        console.log(filterWishlist);
        localStorage.setItem('book-wishlist',JSON.stringify(filterWishlist))
    }

    const existsRead = storedReadlist.find(bookId => bookId.bookId === id.bookId);
    if(!existsRead){
        storedReadlist.push(id);
        localStorage.setItem('read-book',JSON.stringify(storedReadlist))
        return true;
    }
    return false;
}

export { saveBookWishList, getStoredWishlist, getStoredReadlist, saveBookReadList}