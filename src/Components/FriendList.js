import React from 'react'
import Friend from './Friend'
// import Friend from './Friend'

const FriendList = ({ friends, onSelection, selectedFriend }) => {
    return (
        <ul>
            {friends.map((f) => <Friend selectedFriend={selectedFriend} onSelection={onSelection} key={f.id} friend={f} />)}
        </ul>
    )
}

export default FriendList