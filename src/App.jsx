import { useState } from 'react';
function App() {
  const [name, setname] = useState('');
  const [department, setdept] = useState('');
  const [age, setage] = useState('');

  function handleChange(e) {

    setName(e.target.namevalue);
    setDept(e.target.deptvalue);
    setAge(e.target.agevalue);
  }

  function handleSummit(e) {
    e.preventDefault;
    alert("Student Details Submitted");
  }
  return (
    <form>
      <label>Enter the Name: <input type='text' namevalue={name} onChange={handleChange}></input>
      </label>
      <label>Enter the Department: <input type='text' deptvalue={department} onChange={handleChange}></input></label>
      <label>Enter the Age: <input type='text' agevalue={age} onChange={handleChange}></input></label>
      <button onClick={handleSummit}>summit</button>
    </form>
  );
}
export default App;




