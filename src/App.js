import React, { useState } from 'react'
import FriendList from './Components/FriendList';
import FormAddFriend from './Components/FormAddFriend';
import FormSplitBill from './Components/FormSplitBill';

const App = () => {
  const [friendList, setFriendList] = useState([
    {
      id: 1,
      name: "Clark",
      image: "https://i.pravatar.cc/48?u=118836",
      balance: -7,
    },
    {
      id: 2,
      name: "Sarah",
      image: "https://i.pravatar.cc/48?u=933372",
      balance: 20,
    },
    {
      id: 3,
      name: "Anthony",
      image: "https://i.pravatar.cc/48?u=499476",
      balance: 0,
    },
  ]);
  const [addFriend, setAddFriend] = useState(false);

  const handleAddFriend = (obj) => {
    const new_id = friendList[friendList.length - 1].id + 1;
    obj.id = new_id;
    setFriendList([...friendList, obj]);
    setAddFriend((val) => !val);
  }



  // deal with ambiguity
  const [selectedFriend, setSelectedFriend] = useState(null);
  const selectFriend = (frnd) => {
    setSelectedFriend((selected) => selected?.id === frnd.id ? null : frnd);
  }
  const handleSplitting = (splitAmt) => {
    setFriendList((frndlst) => frndlst.map((f) => f.id === selectedFriend.id ? { ...f, balance: f.balance + splitAmt } : f));
    setSelectedFriend(null);
  }
  return (
    <div className='app'>
      <div className="sidebar">
        <FriendList friends={friendList} selectedFriend={selectedFriend} onSelection={selectFriend} />

        {addFriend && <FormAddFriend onAddFriend={handleAddFriend} />}

        <button onClick={() => setAddFriend((val) => !val)} className='button'>{addFriend ? "Close" : "Add friend"}</button>

      </div>

      {selectedFriend && <FormSplitBill selectedFriend={selectedFriend} onSplitBill={handleSplitting} />}
    </div>
  )
}

export default App