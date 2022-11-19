import { useState } from "react";
import Axios from "axios";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Home({}) {
  const [full_name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [machine_id,setMachine] = useState('')
  const [availability,setAvailable] = useState('')

  const navigateTo = useNavigate();

  const addAttendance = async (e) =>{
    e.preventDefault()
    let formField = new FormData()
    formField.append('full_name',full_name)
    formField.append('email',email)
    formField.append('machine_id',machine_id)
    formField.append('availability',availability)

    await axios({
      method:'post',
      url:"http://127.0.0.1:8000/attendance-list",
      Accept: "application/json, text/plain, */*",
      
      data:formField
    }).then(response=>{
      console.log(response)
      setName("")
      setEmail("")
      setMachine("")
      setAvailable("")
      alert('Attendance recorder successfully')

    })

  }

  return (
    <div className="p-10">
      <nav className="flex justify-between items-center">
        <div className="text-xl">
          <h1 className="font-semibold">
            <span className="text-green">KOT</span> <span>Microworks</span>
          </h1>
        </div>
        <div className="mr-28">
          <h2 className="text-sm font-semibold text-blue">Join Slack</h2>
        </div>
      </nav>
      <div className="flex justify-between items-center mt-16">
        <div className="w-1/2">
          <form 
            className="border border-tableBorderColor rounded-lg  relative flex flex-col w-4/5 bg-white outline-none h-full"
          >
            {/*header*/}
            <div className="flex items-start justify-between p-5 rounded-t">
              <h3 className="text-sm font-semibold">Attendance</h3>
            </div>
            {/*body*/}

            <div className="relative px-5  flex-auto">
              <input
                type="text"
                placeholder="Full name"
                className="w-full text-sm py-1.5 px-1 border rounded-lg border-tableBorderColor mb-4"
                name="name"
                value={full_name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <input
                type="text"
                placeholder="Email"
                className="w-full text-sm py-1.5 px-1 border rounded-lg border-tableBorderColor my-4"
                name='email'
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <input
                type="text"
                placeholder="Machine no."
                className="w-full text-sm py-1.5 px-1 border rounded-lg border-tableBorderColor my-4"
                name='machine_id'
                value={machine_id}
                onChange={(e) => {
                  setMachine(e.target.value);
                }}
              />
              <textarea
                placeholder="Availability (limit 20words)"
                className="w-full text-sm py-1.5 px-1 border h-20 rounded-lg border-tableBorderColor my-4"
                name='availability'
                value={availability}
                onChange={(e) => {
                  setAvailable(e.target.value);
                }}
              />
            </div>
            {/*footer*/}
            <div className="flex items-center justify-center p-6">
              <button
                className="rounded px-8 py-1 text-xl text-white  outline-none bg-blue"
                type="submit"
                onClick={addAttendance}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="mr-28">
          {/*  */}
          <div className="flex justify-center items-center w-80 h-24 bg-linksBg rounded-lg mt-0 mb-3">
            <div className="text-sm">
              <a href="" className="font-semibold hover:text-blue">
                Task Request Form
              </a>
              <p className="mt-5">Request task incase of empty queue</p>
            </div>
          </div>
          {/*  */}
          <div className="flex justify-center items-center w-80 h-24 bg-linksBg rounded-lg mb-3">
            <div className="text-sm">
              <a href="" className="font-semibold hover:text-blue">
                Daily Report Form
              </a>
              <p className="mt-5">Request task incase of empty queue</p>
            </div>
          </div>
          {/*  */}
          <div className="flex justify-center items-center w-80 h-24 bg-linksBg rounded-lg mb-3">
            <div className="text-sm">
              <a href="" className="font-semibold hover:text-blue">
                Weekly Report Form
              </a>
              <p className="mt-5">Request task incase of empty queue</p>
            </div>
          </div>
          {/*  */}
          <div className="flex justify-center items-center w-80 h-24 bg-linksBg rounded-lg mb-3">
            <div className="text-sm">
              <a href="" className="font-semibold hover:text-blue">
                Training materials
              </a>
              <p className="mt-5">Request task incase of empty queue</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
