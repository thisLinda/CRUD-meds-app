import React, {Fragment, useState} from 'react';
import {DisplayTable} from './components/DisplayTable';
import {AddMedForm} from './components/AddMedForm';
import {UpdateMedForm} from './components/UpdateMedForm';
// import {getMeds, createMed, updateMed, deleteMed} from "./services/MedService";
import {createMed, updateMed, deleteMed} from "./services/MedService";
import { getMeds } from './services/MedService';

const App = () => {
  // capturing only one reaction, need functionality for three severity levels and multiple reactions/level; capturing generic names, need brand name search as well 
  // const medsData = [
  //   {id: 1, name: 'Haldol', reaction: 'tardive dyskinesia'},
  //   {id: 2, name: 'Fosamax', reaction: 'esophageal stricture'},
  //   {id: 3, name: 'Xanax', reaction: 'xerostomia' },
  // ]

  // empty state to begin
  // const initialFormState = {id: null, name: '', reaction: ''}
  const initialFormState = {name: '', reaction: ''}

  // const [meds, setMeds] = useState(medsData)
  const [meds, setMeds] = useState([])
  // before update, used to give currentMed state
  const [currentMed, setCurrentMed] = useState(initialFormState);
  // state for update is false
  const [update, setUpdate] = useState(false);
  const refreshMeds = async () => {
    let freshMeds = await getMeds();
    if(!freshMeds) {
      freshMeds = [];
    }
    setMeds(freshMeds);
  }
  // takes a med object as a parameter and appends to the meds array, `...users` ensures that the existing meds stay in the array
  // hard-coded to increment id count, not needed with API which will auto-increment
  // const addMed = (med) => {
  //   med.id = meds.length + 1
  //   setMeds([...meds, med])
  // };
  const addMed = (med) => {
    setMeds([...meds, med])
    console.log(med)
  };
  createMed(med)

  // filters out by id
  // const deleteMed = (id) => {
  //   setMeds(meds.filter((med) => med.id !== id))
  // }
  deleteMed(med)

  // similar to adding but need to id which med is being updated, in a class component `componentDidUpdate` used; `Effect Hook` is used in functional component
  // fx gets called on update form submit, maps through array, updates the med that matches the passed id; 2 parameters required, id and updated med
  // const updateMed = (id, updatedMed) => {
  //   setUpdate(false)
  //   setMeds(meds.map((med) => (med.id === id ? updatedMed : med)))
  // }
  updateMed(med)
  
  const editRow = (med) => {
    setUpdate(true)
    setCurrentMed({id: med.id, name: med.name, reaction: med.reaction})
  }

  return (
    <div className="container">
      <h1>Possible Severe Adverse Reaction of Medication on Swallow Function</h1>
      <br />
      <div className="flex-row">
      {/* ternary to check if updating is true/false, if true-show add update form, if false show add form */}
      {/* fragments need to deal with error https://reactjs.org/docs/fragments.html, short syntax https://reactjs.org/docs/fragments.html#short-syntax  */}
          {update ? (
            <>
            <h2>Update Med</h2>
            <UpdateMedForm
              setUpdate = {setUpdate}
              setCurrentMed = {currentMed}
              updateMed = {updateMed}
            />
            </>
          )
            : ( 
              <>
              <h2>Add Medication</h2>
              {/* addMed passed as a prop */}
              <AddMedForm addMed={addMed} />
              </>
          )}
          <>
          <h2>View Medications</h2>
          {/* meds are display, deleted, edited; fx are passed via props to table */}
          <DisplayTable meds={meds} deleteMed={deleteMed} editRow={editRow} />
          </>
      </div>
    </div>
  );
}

export default App;