import React,{ useState } from 'react';
import UserInput from './Components/UserItem/UserInput';
import UserInputList from './Components/UserItem/UserInputList';

function App() {

  const [usersInputList, setUsersInputList] = useState([]);

  const userInputHandler = (uName,uAge) => {
    setUsersInputList((prevUsrList) => {
      return[...prevUsrList, {name: uName, age: uAge, id : Math.random().toString()}]
    })
  }

  return (
    <div>
      <UserInput onAddUser={userInputHandler} />
      <UserInputList users={usersInputList} />
    </div>
  );
}

export default App;
