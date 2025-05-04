function App() {
  return (
    <main className="bg-main-bg md:h-screen flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-md md:max-w-2xl mx-auto">
        <section className="bg-white md:col-span-2 p-10 animate-slide-down">
          <h1 className="text-xl md:text-2xl font-bold text-green">
            Join our community
          </h1>
          <h2 className="md:text-lg font-bold text-f-green mt-6 mb-4">
            30-day, hassle-free money back guarantee
          </h2>
          <p className="text-f-gray">
            Gain access to our full library of tutorials along with expert code
            reviews. Perfect for any developers who are serious about honing
            their skills.
          </p>
        </section>

        <section className="bg-green p-10 text-white animate-slide-to-right">
          <h3 className="text-lg font-bold">Monthly Subscription</h3>
          <p className="mt-5 mb-1">
            <span className="text-4xl font-bold">$29</span>{" "}
            <span className="opacity-50">per month</span>
          </p>
          <p>Full access for less than $1 a day</p>
          <button
            className="w-full bg-f-green px-4 py-2 rounded-md mt-6
          shadow-btn hover:bg-f-green/80 transition-all duration-300 cursor-pointer
          hover:scale-105 active:scale-95
          "
          >
            Sign Up
          </button>
        </section>

        <section className="bg-green/75 p-10 text-white animate-slide-to-left">
          <h3 className="text-lg font-bold">Why Us</h3>
          <ul className="mt-5 text-sm opacity-70">
            <li>Tutorials by industry experts</li>
            <li>Peer & expert code review</li>
            <li>Coding exercises</li>
            <li>Access to our GitHub repos</li>
            <li>Community forum</li>
            <li>Flashcard decks</li>
            <li>New videos every week</li>
          </ul>
        </section>
      </div>
    </main>
  );
}

export default App;
