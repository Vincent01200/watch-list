"use client"

import { useState } from "react"
import { updateWatch } from "../server-actions/updateWatch"

export default function EditWatch({watch}){
    const [showModal,setshowModal] = useState(false)
    const [formData,setformData] = useState({
        brand: watch.brand,
        model: watch.model,
        referenceNumber: watch.reference_number
    })

    const handleChange = (e) => setformData({...formData, [e.target.name] : e.target.value})

    return(
        <div>
            <button onClick={() => setshowModal(true)} className="bg-blue-500 hover:bg-blue-700 text-white rounded py-2 px-4 mx-5 font-bold ">
                Edit
            </button>
            {showModal && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center px-4">
                    <div className="modal-content bg-gray-900 p-6 rounded-lg w-full max-w-md">
                        <span onClick={() => setshowModal(false)} className="close text-white text-xl leading-none hover:text-gray-300 cursor-pointer float-right">&times;</span>
                        <form action={updateWatch} onSubmit={() => setshowModal(false)} className="mt-5">
                            <input type="hidden" name="id" value={watch.id} />

                            <div>
                                <label htmlFor="brand" className="block text-gray-300 mb-2">Brand</label>
                                <input 
                                    type="text" 
                                    id="brand"
                                    name="brand"
                                    onChange={handleChange}
                                    value={formData.brand}
                                    className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-500 mb-4" 
                                />
                            </div>
                            <div>
                                <label htmlFor="model" className="block text-gray-300 mb-2">Model</label>
                                <input 
                                    type="text" 
                                    id="model"
                                    name="model"
                                    value={formData.model}
                                    onChange={handleChange}
                                    className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-500 mb-4" 
                                />
                            </div>
                            <div>
                                <label htmlFor="referenceNumber" className="block text-gray-300 mb-2">Reference Number</label>
                                <input 
                                    type="text" 
                                    id="referenceNumber"
                                    name="referenceNumber"
                                    value={formData.referenceNumber}
                                    onChange={handleChange}
                                    className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-500 mb-4" 
                                />
                            </div>
                            <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Update Watch
                            </button>
                        </form>
                    </div>
                </div>
            )
            }
        </div>
    )
}