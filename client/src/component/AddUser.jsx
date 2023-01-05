import React, { useState } from 'react';
import '../component/navbar.css';

const AddUser = () => {
  const [formState, setFormState] = useState({
    Sno: '',
    Name: '',
    age: '',
    Country: '',
    height: '',
    weight: '',
    Gender: '',
  });

  const handleChange = (event) => {
    // console.log('checking')
    const name = event.target.name;
    const value = event.target.value;
    setFormState({
      ...formState,
      [name]: value,
    });
    console.log(`Updating ${name} to ${value}`);
    console.log('Updated form state:', formState);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    let UserData = formState;
    console.log('checking data', UserData);

    fetch('http://localhost:4000/api/v1/addData', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(UserData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
         
      })
      .catch((e) => {
        console.log('error is ', e);
      });
  };

  return (
    <div>
      <form action="" className="form" onSubmit={handleSubmit}>
        <label htmlFor="">Sno.</label>
        <input
          type="number"
          value={formState.Sno}
          onChange={handleChange}
          name="Sno"
        />
        <label htmlFor="">Name</label>
        <input
          type="text"
          value={formState.Name}
          onChange={handleChange}
          name="Name"
        />
        <label htmlFor="">age</label>
        <input
          type="number"
          value={formState.age}
          onChange={handleChange}
          name="age"
        />
        <label htmlFor="">Country</label>
        <input
          type="text"
          value={formState.Country}
          onChange={handleChange}
          name="Country"
        />
        <label htmlFor="">height</label>
        <input
          type="number"
          value={formState.height}
          onChange={handleChange}
          name="height"
        />
         

    <label htmlFor="">weight</label>
      <input type="number" value={formState.weight} onChange={handleChange} name="weight"/>
    <label htmlFor="">Gender</label>
      <input type="number"
       value={formState.Gender}  onChange={handleChange} name="Gender"/>  <br></br>
    <button type="submit">
      Save
    </button>
    </form>
    </div>
  )
}

export default AddUser;