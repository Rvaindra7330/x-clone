export const Create=({ isOpen, setIsOpen }:any)=>{
    if (!isOpen) return null;
    return <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div className="relative p-6 w-full max-w-2xl bg-gray-900  shadow-lg">
      
      {/* Header */}
      <div className="flex items-center justify-between  pb-2">
        <button
          onClick={() => setIsOpen(false)}
          className="text-gray-400 hover:text-gray-900"
        >
          ✖
        </button>
      </div>

      
      <div className="mt-4">
        <textarea className="w-full p-2  bg-gray-900 caret-white focus:outline-none text-white" placeholder="What is happening?!" />
      </div>

      
      <div className="flex justify-end mt-4 space-x-2">
        <button onClick={() => setIsOpen(false)} className="px-4 py-2 bg-gray-300 rounded-md">
          Cancel
        </button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
          Post
        </button>
      </div>
    </div>
  </div>
}