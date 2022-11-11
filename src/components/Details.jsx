import Search from "./Search";
import { useEffect, useState } from "react";
import Toggle from "./Toggle";

function Details() {
  const [list,setList] = useState([]);
  const [error, setError] = useState('');


  const getList = async () => {
    try {
      const res = await fetch(`https://microworks-b.herokuapp.com/attendance-list`);
      if (!res.ok) throw new Error("Something went wrong");
      const data = await res.json();

      console.log(data)

      setList(data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <div className="p-6">
      <nav className="flex justify-between items-center">
        <div className="text-xl">
          <h1 className="font-semibold">
            <span className="text-green">KOT</span> <span>Microworks</span>
          </h1>
        </div>
        <div>
          <h2 className="text-sm font-semibold">Mike Otieno</h2>
        </div>
      </nav>
      <div className="flex justify-between items-center mt-4">
        <Search />
        <div>
          <p className="font-semibold p-1.5 bg-inputs rounded-lg">Download</p>
        </div>
      </div>
      <div className="mt-10 w-full border rounded border-tableBorderColor h-128 overflow-x-scroll">
        <table className="table-auto w-full">
          <thead  className="bg-thead">
            <tr className="text-left">
              <th className="py-1">Time</th>
              <th className="py-1">No:</th>
              <th className="py-1">Name</th>
              <th className="py-1" >Email</th>
              <th className="py-1">Machine Id</th>
              <th className="py-1">Availability</th>
              <th className="py-1">Action</th>
            </tr>
          </thead>
          <tbody>
            {error && <h3>{error}</h3>}
            {list?.map((person)=>(
            <tr key={person.id} className="text-left">
              <td className="pt-4">{person.time_in}</td>
              <td className="pt-4">{person.id}</td>
              <td className="pt-4">{person.full_names}</td>
              <td className="pt-4">{person.email}</td>
              <td className="pt-4">{person.machine_id}</td>
              <td className="pt-4">{person.availability}</td>
              <td className="pt-4">
                <Toggle/>
              </td>
            </tr>          
            ))}      
          </tbody>
        </table>
      </div>
      <div>

      </div>
    </div>
  );
}
export default Details;
