import React, { useState } from 'react'

const Modal = (props) => {
    const [data, setData] = useState({
        stdId: '',
        name: '',
        returnDate: ''
    });

    const handleChnage = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    return (
        <>
            <div className="backdrop"></div>
            <div className="modal">
                <div className="header">
                    <h3>Borrow Book</h3>
                    <button onClick={() => props.onClose()}>X</button>
                </div>
                <form onSubmit={e => {
                    console.log('asdasdfasdf');
                    e.preventDefault();
                    props.onSubmit(data);
                    props.onClose();
                }}>
                    <div className="content">
                        <div>
                            <label>Student Name:*</label>
                            <input
                                required
                                name="name"
                                type="text"
                                value={data.name}
                                placeholder="Ahmad Mohammad"
                                onChange={handleChnage} />
                        </div>
                        <div>
                            <label>Student Number:*</label>
                            <input
                                required
                                name="stdId"
                                type="text"
                                value={data.stdId}
                                placeholder="12345"
                                onChange={handleChnage} />
                        </div>
                        <div>
                            <label>Return Date:*</label>
                            <input
                                required
                                name="returnDate"
                                type="date"
                                value={data.date}
                                onChange={handleChnage} />
                        </div>
                    </div>
                    <div className="actions">
                        <button onClick={() => props.onClose()}>Cancel</button>
                        <button type="submit" className="submit" >Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Modal;
