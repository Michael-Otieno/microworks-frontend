import { useState } from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";


export default function Delete() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="mb-1 cursor-pointer">
      <RiDeleteBin5Fill onClick={() => setShowModal(true)}/>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none"
          >
            <div className="relative w-2.5/5  my-6 mx-auto max-w-3xl">
              {/*content*/}
              <form className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none h-full">
                {/*header*/}
                <div className="flex items-start justify-between p-5 rounded-t">
                  <h3 className="text-base font-semibold">
                    Are you sure you want to delete?
                  </h3>
                </div>
                {/*body*/}
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