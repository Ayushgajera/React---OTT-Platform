import React from 'react'

function Dropdown({title,options,fnc}) {
  console.log(options)
  return (
    <div className='select mr-6'>``
      <select onChange={fnc} defaultValue="0" name='format' id='format'>
        <option value="0" disabled> {title}</option>
        {options.map((o,i)=>(<option value={o} > {o}</option>))}
      </select>

    </div>
  )
}

export default Dropdown
