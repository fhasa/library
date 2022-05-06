import React from 'react'

const Book = (props) => {
    const { book, index } = props;

    return (
        <div className="book" style={{ backgroundImage: `url(${book.image.replace("any", "tech")}/${index})` }}>
            <div className="title">{book.title}</div>
            {/* <img src="http://placeimg.com/120/180/any" /> */}
            <button className="borrow" onClick={() => props.handelOpenBorrow()}>Borrow</button>
        </div>
    )
}

export default Book;
