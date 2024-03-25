import React from 'react'

const Friend = ({ friend, selectedFriend, onSelection }) => {

    const currentSelected = selectedFriend?.id === friend.id;
    return (
        <li className={currentSelected ? "selected" : ""}>
            <img src={friend.image} alt={friend.name} />
            <h3>{friend.name}</h3>
            <p className={friend.balance < 0 ? "red" : "green"}>{friend.balance === 0 ? `You and ${friend.name} are equal` : friend.balance > 0 ? `${friend.name} owes you ₹${friend.balance}` : `You owe ${friend.name} ₹${Math.abs(friend.balance)}`}</p>
            <button onClick={() => onSelection(friend)} className='button'>{currentSelected ? "Close" : "Select"}</button>
        </li>
    )
}

export default Friend