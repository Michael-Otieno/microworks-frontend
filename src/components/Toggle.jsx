import { useState } from "react";
import { HiDotsVertical } from "react-icons/hi";
import Edit from "./Edit";
import Delete from "./Delete";

function Toggle({id,thePerson}) {
  const [hide, setHide] = useState(false);
  function ShowNotification() {
    setHide((prevMode) => !prevMode);
  }
  

  return (
    <div className="text-center relative">
      <button
        type="button"
        className="cursor-pointer"
        onClick={ShowNotification}
      >
        <HiDotsVertical />
      </button>

      <div
        className={
          hide
            ? "absolute right-5 flex justify-center  w-14 h-12 bg-white z-30 rounded shadow-md"
            : "hidden"
        }
      >
        <div className="mt-1">
          <Edit thePerson={thePerson}/>
          <Delete id={id}/>
        </div>
      </div>
    </div>
  );
}
export default Toggle;
