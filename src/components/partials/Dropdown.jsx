import React from 'react'

function Dropdown() {
  return (
    <div>
      <div class="relative inline-block text-left">
  <button
    class="py-2 px-4 rounded-md focus:outline-none"
    id="dropdown-button"
  >
    {/* <select name="" id="" className='bg-zinc-900 text-white py-2  font-semibold px-4 outline-none text-xl rounded-md'>
    <option value="ayush">ayush</option>
    <option value="guj">guj</option>
    <option value="nish">nish</option>
      
    </select> */}
  </button>

  <div
    class="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg hidden"
    id="dropdown-menu"
  >
    <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Option 1</a>
    <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Option 2</a>
    <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Option 3</a>
  </div>
</div>

    </div>
  )
}

export default Dropdown
