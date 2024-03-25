import React, { useState } from 'react'

const FormAddFriend = ({ onAddFriend }) => {
    const [fName, setFName] = useState("");
    const [url, setUrl] = useState("https://i.pravatar.cc/300");
    const handleSubmit = (e) => {
        e.preventDefault();
        const newFriend = {
            name: fName,
            image: url,
            balance: 0,
        }
        onAddFriend(newFriend);
    }
    return (
        <form onSubmit={handleSubmit} className='form-add-friend'>
            <label>🕴️ Name</label>
            <input onChange={(e) => setFName(() => e.target.value)} type="text" />
            <label>🌄 ImageURL</label>
            <input onChange={(e) => setUrl(() => e.target.value)} type="text" />
            <button className='button'>Add friend</button>
        </form>
    )
}

export default FormAddFriend