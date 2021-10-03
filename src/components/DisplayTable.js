// import React, { Button } from 'react';
import React from 'react';

export const DisplayTable = (props) => (
  <table>
    <thead>
      <tr>
        <th>Medication</th>
        <th>Reaction</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
    {/* map through meds data then display for each med or that there are no medications */}
      {props.meds.length > 0 ? (
        props.meds.map((med) => (
          <tr key = {med.id}>
            <td>{med.name}</td>
            <td>{med.reaction}</td>
          <td>
            <button
              // props passed from App
              onClick = {() => {
                props.editRow(med)
              }}
              className="button muted-button"
            >
              Edit
            </button>
            <button
              // props passed through from fx in App
              onClick = {() => props.deleteMed(med)}
              className="button muted-button"
            >
              Delete
            </button>
          </td>
        </tr>
        ))
      ) : (
        <tr>
          <td> colSpan = {3}>No medications</td>
        </tr>
      )}
    </tbody>
  </table>
);