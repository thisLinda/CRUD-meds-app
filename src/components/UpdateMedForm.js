// useEffect hook replaces class `componentDidUpdate
import React, {useState, useEffect} from 'react';

// state is set from currentMed with props
export const UpdateMedForm = (props) => {
  const [med, setMed] = useState(props.currentMed)

  // callback update user state, props passed to watch
  useEffect(() => {
    setMed(props.currentMed)
  }, [props])

  const handleInputChange = (e) => {
    const {name, value} = e.target
    setMed({...med, [name]: value})
  }

  return (
    <form
      onSubmit = {(e) => {
        e.preventDefault()
        props.updateMed(med.id, med)
      }}
    >
      <label>Med</label>
      <input
        type = "text"
        name = "name"
        value = {med.name}
        onChange = {handleInputChange}
      />
      <label>Reaction</label>
      <input
        type = "text"
        name = "reaction"
        value = {med.reaction}
        onChange = {handleInputChange}
      />
      <button>Update Med</button>
      {/* switches edit mode off */}
      <button
        onClick = {() => props.setUpdate(false)}
        className = "button muted-button"
      >
        Cancel
      </button>
    </form>
  )
}