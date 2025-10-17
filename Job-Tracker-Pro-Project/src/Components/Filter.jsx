import React from 'react'
import './Filter.css'
const Filter = () => {
  return (
    <div>
    <label>Filter: </label>
    <select id="ip_filter">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
        <option value="option4">Option 4</option>
    </select>
</div>

  )
}

export default Filter