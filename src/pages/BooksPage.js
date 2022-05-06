import React, { useEffect, useState } from 'react'
import Book from '../components/Book';
import Modal from '../components/Modal';
import getBooks from '../services/booksService';

const BooksPage = () => {
    const [books, setBooks] = useState([]);
    const [currentBook, setCurrent] = useState(-1);
    const [modalVisible, setModalVisible] = useState(false);
    useEffect(async () => {
        const res = await getBooks(20);
        setBooks(res);
    }, []);

    const handleBorrow = (data) => {
        const bBooks = JSON.parse(localStorage.bBooks || '[]');

        bBooks.push({
            student: data,
            book: books[currentBook]
        });
        localStorage.bBooks = JSON.stringify(bBooks);
    }

    return (
        <div className="books-container">
            {
                books.map((book, index) => <Book
                    key={book.isbn}
                    book={book}
                    index={index}
                    handelOpenBorrow={() => {
                        setCurrent(index);
                        setModalVisible(true);
                    }} />)
            }
            {modalVisible && <Modal
                onClose={() => setModalVisible(false)}
                onSubmit={handleBorrow}
            />}
        </div>
    )
}

export default BooksPage;
