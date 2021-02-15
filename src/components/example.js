import React, { useState, useEffect } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  // 1. Use the name state variable
  const [name, setName] = useState('Mary');

  // 2. Use an effect for persisting the form
  useEffect(function persistForm() {
    localStorage.setItem('formData', name + " " + surname);
  });

  // 3. Use the surname state variable
  const [surname, setSurname] = useState('Poppins');

  // 4. Use an effect for updating the title
  useEffect(function updateTitle() {
    document.title = name + ' ' + surname;
  },[surname]);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <input name="name" value={name} onChange={(e)=> setName(e.target.value)} />
      <input name="surname" value={surname} onChange={(e)=> setSurname(e.target.value)} />

      <button onClick={() => setCount(count + 1)}>
        increase
      </button>
      <button onClick={() => setCount(count - 1)}>
        decrease
      </button>
      <button onClick={() => setCount("banana")}>
        nanner button
      </button>
    </div>
  );
}

export default Example
