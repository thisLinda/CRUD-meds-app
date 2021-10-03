import React, {useState} from 'react';

export const AddMedForm = (props) => {
  // const initialFormState = {id: null, name: '', reaction: ''}
  const initialFormState = {id: null, name: ''}
  const [med, setMed] = useState(initialFormState)

  // fx to update form's state, "`event` always gets passed through to any `on` event in the DOM, so you'll see that as the parameter of the function"
  // destructuring `...med` to get name(key) and value from form
  const handleInputChange = (e) => {
    const {name, value} = e.target
    setMed({...med, [name]: value})
  }

  return (
    // submits the form to App, fx passed down with props and props are used to access it, conditional statement stops empty values from being submitted, med sent to add fx, setter resets the form
    <form
      onSubmit = {(e) => {
        e.preventDefault()
        if (!med.name || !med.reaction) return
        props.addMed(med)
        setMed(initialFormState)
      }}
    >
      <label>Medication:</label>
      {/* "Now we extract the values from the state object, and reference our function in the onChange event" */}
      <input 
        type="text" 
        name="med" 
        value={med.name}
        onChange = {handleInputChange}
      />
      <button>Submit</button>
      <br />
      {/* TODO: reverse search by reaction */}
      {/* <label>Severe Adverse Reaction</label>
      <input
        type="text" 
        name="reaction" 
        value="reaction"
        onChange = {handleInputChange}
      /> */}
    </form>
  )
};