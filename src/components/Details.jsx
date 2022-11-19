import Toggle from "./Toggle";
import {useContext} from "react";

import DataContext from "../context/DataContext";
import { BiSearch } from "react-icons/bi";


function Details({user,logoutUser}) {
  
  let {searchByName,list,error,deleteDetails} = useContext(DataContext)

 

  return (
    <div className="p-6">
      <nav className="flex justify-between items-center">
        <div className="text-xl">
          <h1 className="font-semibold">
            <span className="text-green">KOT</span> <span>Microworks</span>
          </h1>
        </div>
        <div>
        {user && <h2 className="text-sm font-semibold">{user.user_id}</h2>}
        <p onClick={logoutUser}>Logout</p>
        </div>
      </nav>
      <div className="flex justify-between items-center mt-4">
        <div className="relative">
          <form onSubmit={searchByName}>
            <input
              className="bg-inputs rounded-lg py-1.5 px-8 text-sm font-normal"
              type="search"
              placeholder="Search"
              name="query"
              
            />
            <BiSearch className="absolute top-2 w-10" />
          </form>
        </div>
        <div>
          <p className="font-semibold p-1.5 bg-inputs rounded-lg">Download</p>
        </div>
      </div>

      <div className="mt-10 w-full border rounded border-tableBorderColor h-128 overflow-x-scroll">
        <table className="table-auto w-full">
          <thead className="bg-thead">
            <tr className="text-left">
              <th className="py-1">Time</th>
              <th className="py-1">Name</th>
              <th className="py-1">Email</th>
              <th className="py-1">Machine Id</th>
              <th className="py-1">Availability</th>
              <th className="py-1">Action</th>
            </tr>
          </thead>
          <tbody>
            {error && <h3>{error}</h3>}
            {list?.map((person) => (
              <tr key={person.id} className="text-left">
                <td className="pt-4">{person.time_in}</td>
                <td className="pt-4">{person.full_name}</td>
                <td className="pt-4">{person.email}</td>
                <td className="pt-4">{person.machine_id}</td>
                <td className="pt-4">{person.availability}</td>
                <td className="pt-4">
                  <Toggle id={person.id} thePerson={person} />
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div></div>
    </div>
  );
}
export default Details;
