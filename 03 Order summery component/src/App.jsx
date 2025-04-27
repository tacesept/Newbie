function App() {
  return (
    <main className="bg-[#E0E8FF] bg-[url('/images/pattern-background-mobile.svg')] 
    md:bg-[url('/images/pattern-background-desktop.svg')]
    bg-no-repeat h-screen flex justify-center items-center">
      <div className="max-w-md mx-auto text-center bg-white rounded-xl">
        <img
          src="./images/illustration-hero.svg"
          alt="logo"
          className="rounded-t-xl"
        />
        <div className="px-8 pt-8 md:pt-10 pb-8 md:pb-12">
          <h1 className="pb-4 text-2xl md:text-3xl font-black">
            Order Summary
          </h1>
          <p className="font-medium">
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </p>
          <div className="flex items-center justify-between my-6 p-4 bg-gray-100 rounded-lg">
            <div className="flex items-center gap-5">
              <img src="./images/icon-music.svg" alt="music" />
              <div className="flex flex-col gap-1">
                <h2 className="font-black">Annual Plan</h2>
                <p className="font-medium">$59.99/year</p>
              </div>
            </div>
            <a href="#" className="font-bold hover:text-[#766CF1]">
              Change
            </a>
          </div>
          <button className="bg-[#382AE1] hover:bg-[#766CF1] text-white py-4 rounded-lg w-full font-black">
            Proceed to Payment
          </button>
          <button className="mt-6 md:mt-8 font-black hover:text-[#1F2E55]">
            Cancel Order
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
