
function CookieStand(reply) {
  return (
    <main className = "py-10 px-20">
    <form className="w-full py-4 px-8 bg-emerald-300">
      <h1 className="font-bold text-2xl text-center py-3">Create Cookie Stand</h1>
      <div class="flex items-center justify-between">
        <div class="flex items-center w-full">
          <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="location">
            Location
          </label>
          <input className="w-full bg-gray-200 text-gray-700 border rounded py-3 px-4" id="location" type={"text"} placeholder={"Amman"}/>
        </div>
      
      </div>
      
      <div class="flex items-center justify-between">
        <div class="w-full">
          <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
            Minimum Customers per Hour
          </label>
          <input class="w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4" id="min" type="text" placeholder="6"/>
        </div>

        <div class="w-full py-2 px-4">
          <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
            Maximum Customers per Hour
          </label>
          <input class="w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4"id="grid-city" type="text" placeholder="5"/>
        </div>

        <div class="w-full py-2 px-4">
          <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
            Average Cookies per Sale
          </label>
          <input class="w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4" id="grid-zip" type="text" placeholder="10"/>
        </div>

        <div className="md:flex md:items-center">
          <button class="w-64 h-20 shadow bg-emerald-400 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
          Create
          </button>
        </div>
      </div>
    </form>
    <div>
      <p className="text-1xl text-center py-3">{reply}</p>
    </div>
    </main>
  )
}

export default CookieStand