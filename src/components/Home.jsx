function Home() {
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
          <form className="border border-tableBorderColor rounded-lg  relative flex flex-col w-4/5 bg-white outline-none h-full">
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
              />
              <input
                type="text"
                placeholder="Email"
                className="w-full text-sm py-1.5 px-1 border rounded-lg border-tableBorderColor my-4"
              />
              <input
                type="text"
                placeholder="Machine no."
                className="w-full text-sm py-1.5 px-1 border rounded-lg border-tableBorderColor my-4"
              />
              <textarea
                placeholder="Availability (limit 20words)"
                className="w-full text-sm py-1.5 px-1 border h-20 rounded-lg border-tableBorderColor my-4"
              />
            </div>
            {/*footer*/}
            <div className="flex items-center justify-center p-6">
              <button
                className="rounded px-8 py-1 text-xl text-white  outline-none bg-blue"
                type="submit"
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
              <a href="" className="font-semibold hover:text-blue">Task Request Form</a>
              <p className="mt-5">Request task incase of empty queue</p>
            </div>
          </div>
          {/*  */}
          <div className="flex justify-center items-center w-80 h-24 bg-linksBg rounded-lg mb-3">
            <div className="text-sm">
              <a href="" className="font-semibold hover:text-blue">Daily Report Form</a>
              <p className="mt-5">Request task incase of empty queue</p>
            </div>
          </div>
          {/*  */}
          <div className="flex justify-center items-center w-80 h-24 bg-linksBg rounded-lg mb-3">
            <div className="text-sm">
              <a href="" className="font-semibold hover:text-blue">Weekly Report Form</a>
              <p className="mt-5">Request task incase of empty queue</p>
            </div>
          </div>
          {/*  */}
          <div className="flex justify-center items-center w-80 h-24 bg-linksBg rounded-lg mb-3">
            <div className="text-sm">
              <a href="" className="font-semibold hover:text-blue">Training materials</a>
              <p className="mt-5">Request task incase of empty queue</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
