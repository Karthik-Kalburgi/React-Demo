import React, { useState } from "react";

const App = () => {
  let [counter, setcounter] = useState(15);
  const AddValue = () => {
    counter = counter + 1;
    setcounter(counter);
  };
  const removeValue = () => {
    counter = counter - 1;
    setcounter(counter);
  };
  return (
    <>
      <h1 className="text-center mt-8 text-green-600 font-bold text-2xl pb-4 ">
        Chai aur React{" "}
      </h1>
      <h2 className="text-center text-red-800 font-semibold text-xl pb-16 ">
        Counter Project{" "}
      </h2>
      <div className="flex justify-center items-center pb-5">
        <button onClick={AddValue} className="bg-green-500 rounded-lg text-lg">
          AddValue - {counter}{" "}
        </button>
      </div>
      <div className="flex items-center justify-center">
        <button
          onClick={removeValue}
          className="bg-green-500 rounded-lg text-lg"
        >
          RemoveValue {counter}{" "}
        </button>
      </div>
    </>
  );
};

export default App;
