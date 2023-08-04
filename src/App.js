
// import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('')
  const [maleRadio, setMaleRadio] = useState(false)
  const [femaleRadio, setFemaleRadio] = useState(false)
  const [otherRadio, setOtherRadio] = useState(false)
  const [occupation, setOccupation] = useState('')
  const [isCool, setIsCool] = useState(false)


  const handleInput = (e, feild) => {
    if (feild === 'name') {
      setName(e.target.value);
    }
    if (feild === 'age') {
      setAge(e.target.value);
    }
    if (feild === 'Male') {
      setMaleRadio(true)
      setFemaleRadio(false)
      setOtherRadio(false)
      setGender('Male')
    }
    if (feild === 'Female') {
      setMaleRadio(false)
      setFemaleRadio(true)
      setOtherRadio(false)
      setGender('Female')
    }
    if (feild === 'Other') {
      setMaleRadio(false)
      setFemaleRadio(false)
      setOtherRadio(true)
      setGender('Other')
    }

    if(feild==='false'){
      setIsCool(true)
    }
    if(feild==='true'){
      setIsCool(false)
    }
  }
  return (
    <div className="App" >
      <p>{JSON.stringify({
        name:name,
        age:age,
        gender:gender,
        occupation:occupation,
        isCool:`${isCool}`
      })}</p>
      <p>Name:</p>
      <input type='text' placeholder='name' onChange={(e) => handleInput(e, 'name')} />
      <p>Age:</p>
      <input type='number' placeholder='age' onChange={(e) => handleInput(e, 'age')} />
      <p>Gender:</p>
      <section className='genderRadio'>
        <input type='radio' checked={maleRadio} value='Male' onClick={(e) => handleInput(e, 'Male')} />
        <p>Male</p>
        <input type='radio' checked={femaleRadio} value='Female' onClick={(e) => handleInput(e, 'Female')} />
        <p>Female</p>
        <input type='radio' checked={otherRadio} value='Other' onClick={(e) => handleInput(e, 'Other')} />
        <p>Other</p>
      </section>
      <p>Occupation:</p>
      <select onChange={(e) => setOccupation(e.target.value)}>
        <option>--Select--</option>
        <option value='Frontend'>Frontend</option>
        <option value='Backend'>Backend</option>
        <option value='FullStack'>FullStack</option>
      </select>
      <p>Are you cool?</p>
      <input type='checkbox' checked={isCool} onClick={(e)=>handleInput(e, `${isCool}`)} />
      <span>Of course I'm cool!</span>
    </div>
  );
}

export default App;
