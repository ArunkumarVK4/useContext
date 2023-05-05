import "./styles.css";
import React, { createContext, useContext, useState } from "react";
// step1
const ChangeName = createContext(null);

export default function App() {
  const [name, setName] = useState("sanjay");

  return (
    <div className="App">
      {/* // step2  */}
      <ChangeName.Provider
        value={{
          name,
          setName
        }}
      >
        <Profile />
        <AccessHolders />
      </ChangeName.Provider>
      {/* <Account netFlix={netFlix} setNetflix={setNetflix} /> */}\
    </div>
  );
}

function Profile() {
  const { name, setName } = useContext(ChangeName);

  return (
    <div>
      <h1>Profile Name is {name}</h1>
    </div>
  );
}

function AccessHolders() {
  return (
    <div>
      <Admin1 />
      <Admin2 />
    </div>
  );
}

function Admin1() {
  const { name, setName } = useContext(ChangeName);
  return (
    <div>
      <h1>Admin1</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

function Admin2() {
  const { name, setName } = useContext(ChangeName);

  return (
    <div>
      <h1>Admin2</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}
//three steps
// 1. creation of context
// 2. add the providers
// 3. Add the subscribers
//4. use the context
