import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="App-header">
            <h1>Library System</h1>
            <div className="right-items"><Link to="/books">Books</Link>&nbsp;|&nbsp;
                <Link to="/borrowed">Borrowed Book</Link>&nbsp;&nbsp;<b>Date:&nbsp;</b> {new Date().toLocaleDateString()}</div>
        </header>
    )
}

export default Header;
