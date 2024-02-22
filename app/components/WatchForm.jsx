import { addWatch } from "../server-actions/addWatch";

export default function WatchForm(){
    return(
            <form action={addWatch} className="mb-6">
                <div>
                    <label htmlFor="brand" className="block text-white mb-2">Brand</label>
                    <input 
                    type="text"
                    id="brand"
                    name="brand"
                    required 
                    className="shadow appearance-none border border-gray-600 bg-gray-700 rounded w-full py-2 px-3 text-white mb-3"

                    />
                </div>
                <div>
                    <label htmlFor="model" className="block text-white mb-2">Model</label>
                    <input 
                    type="text"
                    id="model"
                    name="model"
                    required
                    className="shadow appearance-none border border-gray-600 bg-gray-700 rounded w-full py-2 px-3 text-white mb-3"
                    />
                </div>
                <div>
                    <label htmlFor="referenceNumber" className="block text-white mb-2">Reference Number</label>
                    <input 
                    type="text" 
                    id="referenceNumber"
                    name="referenceNumber"
                    required
                    className="shadow appearance-none border border-gray-600 bg-gray-700 rounded w-full py-2 px-3 text-white mb-3"
                    />
                </div>
                <button type="submit" className="bg-gray-600 hover:bg-gray-300 text-white hover:text-black font-bold py-2 px-4 rounded mt-5">
                    Add Watch
                </button>
            </form>
    )
}
