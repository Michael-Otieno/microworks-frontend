import { useState } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";


export default function Edit() {
  const [showModal, setShowModal] = useState(false);
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
              <form className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none h-full">
                {/*header*/}
                <div className="flex items-start justify-between p-5 rounded-t">
                  <h3 className="text-sm font-semibold">
                    Edit attendance
                  </h3>
                </div>
                {/*body*/}

                <div className="relative px-5  flex-auto">
                    <input type="text" placeholder="Full name" className="w-full text-sm py-1.5 px-1 border rounded-lg border-tableBorderColor mb-4"/>
                    <input type="text" placeholder="Email" className="w-full text-sm py-1.5 px-1 border rounded-lg border-tableBorderColor my-4"/>
                    <input type="text" placeholder="Machine no." className="w-full text-sm py-1.5 px-1 border rounded-lg border-tableBorderColor my-4"/>
                    <textarea placeholder="Availability (limit 20words)" className="w-full text-sm py-1.5 px-1 border h-20 rounded-lg border-tableBorderColor my-4"/>
                  
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
                    onClick={() => setShowModal(false)}
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