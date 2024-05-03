import React from 'react'

const page = () => {
  return (
    <div className="max-w-md mx-auto p-6 bg-gray-100 shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-4">New Article</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="firstName" className="block mb-1">Product</label>
          <input type="text" id="firstName" name="firstName" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400" />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block mb-1">Price</label>
          <input type="text" id="lastName" name="lastName" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">Location</label>
          <input type="email" id="email" name="email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400" />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-1">Details</label>
          <textarea id="message" name="message" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400" />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">Submit</button>
      </form>
    </div>

  )
}

export default page
