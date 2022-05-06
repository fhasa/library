import React, { useEffect, useState } from 'react'

const BorrowedBooksPage = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const tData = JSON.parse(localStorage.bBooks || '[]');
        setData(tData);
    }, []);

    const handleReturn = (index) => {
        const tmpData = [...data];
        tmpData.splice(index, 1);
        localStorage.bBooks = JSON.stringify(tmpData);
        setData(tmpData);
    }

    return (
        <div className="borrowed-books">
            {!data.length && <h3>No Borrowed Books!</h3>}
            <table>
                <thead>
                    <tr>
                        <th>Book Name</th>
                        <th>ISBN</th>
                        <th>Student Name</th>
                        <th>Student Number</th>
                        <th>Student Return Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, index) => (
                            <tr key={item.book.isbn}>
                                <td>
                                    {item.book.title}
                                </td>
                                <td>
                                    {item.book.isbn}
                                </td>
                                <td>
                                    {item.student.name}
                                </td>
                                <td>
                                    {item.student.stdId}
                                </td>
                                <td>
                                    {item.student.returnDate}
                                </td>
                                <td>
                                    <button onClick={() => handleReturn(index)}>Retrun</button>
                                </td>
                            </tr>)
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default BorrowedBooksPage;