function App() {
  return (
    <main className="max-w-xl md:max-w-5xl mx-auto px-6 mt-10 md:mt-16 h-screen">
      <img src="./images/logo.svg" alt="logo" className="h-8" />
      <section
        className="flex flex-col items-center justify-center gap-15 mt-16 md:mt-20
      md:flex-row"
      >
        <img
          src="./images/illustration-mockups.svg"
          alt="illustration"
          className="md:w-1/2"
        />
        <div
          className="flex flex-col items-center justify-center md:items-start gap-4
          text-white text-center md:w-1/2 md:text-left"
        >
          <h1 className="text-2xl md:text-4xl/14 font-semibold">
            Build The Community Your Fans Will Love
          </h1>
          <p className="md:text-lg">
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>
          <button
            className="btn shadow-2xl"
          >
            Register
          </button>
        </div>
      </section>
      <footer className="flex items-center justify-center gap-4 mt-16 pb-10 text-center md:justify-end">
        <i className="fa-brands fa-facebook-f footer-icon"></i>
        <i className="fa-brands fa-twitter footer-icon"></i>
        <i className="fa-brands fa-instagram footer-icon"></i>
      </footer>
    </main>
  );
}

export default App;
