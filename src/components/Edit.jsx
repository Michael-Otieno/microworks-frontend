import { useContext, useState } from "react";
import { FaEdit } from "react-icons/fa";
import DataContext from "../context/DataContext";


export default function Edit({thePerson}) {
  const [showModal, setShowModal] = useState(false);

  const id = thePerson.id

  const [full_name,setFullName] = useState(thePerson.full_name)
  const [email,setEmail] = useState(thePerson.email)
  const [machine_id,setMachineId] = useState(thePerson.machine_id)
  const [availability,setAvailability] = useState(thePerson.availability)

  const {updateDetails} = useContext(DataContext)

  const updatedDetails = {id, full_name, email,machine_id,availability}

  const handleSubmit = (e) =>{
    e.preventDefault()
    updateDetails(id,updatedDetails)
  }

  return (
    <div className="mb-1 cursor-pointer">
      <FaEdit onClick={() => setShowModal(true)}/>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none"
          >
            <div className="relative w-2/5 h-3.5/5 my-6 mx-auto max-w-3xl">
              {/*content*/}
              <form className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none h-full" onSubmit={handleSubmit}>
                {/*header*/}
                <div className="flex items-start justify-between p-5 rounded-t">
                  <h3 className="text-sm font-semibold">
                    Edit attendance
                  </h3>
                </div>
                {/*body*/}

                <div className="relative px-5  flex-auto">
                    <input type="text" placeholder="Full name" className="w-full text-sm py-1.5 px-1 border rounded-lg border-tableBorderColor mb-4" 
                    
                    value={full_name}
                    onChange={(e)=>setFullName(e.target.value)}
                    />
                    <input type="text" placeholder="Email" className="w-full text-sm py-1.5 px-1 border rounded-lg border-tableBorderColor my-4" 
                    
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                    <input type="text" placeholder="Machine no." className="w-full text-sm py-1.5 px-1 border rounded-lg border-tableBorderColor my-4" 
                    
                    value={machine_id}
                    onChange={(e)=>setMachineId(e.target.value)}
                    />
                    <textarea placeholder="Availability (limit 20words)" className="w-full text-sm py-1.5 px-1 border h-20 rounded-lg border-tableBorderColor my-4" 
                    
                    value={availability}
                    onChange={(e)=>setAvailability(e.target.value)}
                    />
                  
                </div>
                {/*footer*/}
                <div className="flex items-center justify-between p-6">
                  <button
                    className="rounded px-4 py-1 text-white text-sm outline-none mr-1 mb bg-red font-normal" 
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    CANCEL
                  </button>
                  <button
                    className="rounded px-4 py-1 text-white text-sm outline-none mr-1 mb bg-blue"
                    type="submit"
                    
                  >
                    EDIT
                  </button>
                </div>

              </form>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
}