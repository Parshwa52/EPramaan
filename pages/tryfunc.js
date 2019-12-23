import React, { useState } from 'react';
require('../global');
//const nodemailer = require('nodemailer');
function App() {

  const [userName, setUsername] = useState('');
  const [firstName, setFirstname] = useState('');
  const [lastName, setLastname] = useState('');
  const logName = () => {
    // do whatever with the names... let's just log them here
    console.log(userName);
    console.log(firstName);
    console.log(lastName);
    console.log(globalString);
    global.globalString=userName;
    //var workerProcess = child_process.exec('node sendemail.js');

  };

  const handleUserNameInput = e => {
    setUsername(e.target.value);
  };
  const handleFirstNameInput = e => {
    setFirstname(e.target.value);
  };
  const handleLastNameInput = e => {
    setLastname(e.target.value);
  };

  return (
    <div>
      <h3> This is a functional Component </h3>

      <input
        type="text"
        onChange={handleUserNameInput}
        value={userName}
        placeholder="username..."
      />
      <input
        type="text"
        onChange={handleFirstNameInput}
        value={firstName}
        placeholder="firstname..."
      />
      <input
        type="text"
        onChange={handleLastNameInput}
        value={lastName}
        placeholder="lastname..."
      />
      <button className="btn btn-large right" onClick={logName}>
        {' '}
        Log Names{' '}
      </button>
    </div>
  );
};

export default App;
