import React, { useState } from 'react'

const FormSplitBill = ({ selectedFriend, onSplitBill }) => {
    const [bill, setBill] = useState();
    const [oneC, setOneC] = useState();
    const [whoisPaying, setWhoisPaying] = useState("user");
    const [disableState, setDisableState] = useState(true);

    const handleExpense = (e) => {
        setOneC(() => Number(e.target.value))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (whoisPaying === "user") {
            onSplitBill(bill - oneC);
        }
        else {
            onSplitBill(oneC - bill);
        }
    }
    const handleSelect = (e) => {
        setWhoisPaying(() => e.target.value)
        setDisableState((d) => !d);
    }
    return (
        <form onSubmit={handleSubmit} className='form-split-bill'>
            <h2>Split with {selectedFriend.name}</h2>

            <label>💳 Total bill</label>
            <input placeholder='Enter amount' type="text" onChange={(e) => setBill(() => Number(e.target.value))} />

            <label>🧑‍🦱 Your expense</label>
            <input disabled={!disableState} placeholder='Enter amount' type="text" onChange={handleExpense} />

            <label>🧑‍🤝‍🧑 Clark's expense</label>
            <input disabled={disableState} placeholder='Enter amount' type="text" onChange={handleExpense} />

            <label>😄 Who is paying bill</label>
            <select onChange={handleSelect} value={whoisPaying}>
                <option value="user">You</option>
                <option value={selectedFriend.name}>{selectedFriend.name}</option>
            </select>
            <button type='submit' className='button'>Split bill</button>
        </form>
    )
}

export default FormSplitBill