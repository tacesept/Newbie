function App() {
  return (
    <main className="flex justify-center items-center h-screen">
      <div
        className="bg-[url('/bg-pattern-card.svg')] bg-white bg-no-repeat 
        rounded-2xl max-w-[350px] w-full flex flex-col items-center 
        justify-center pb-6"
      >
        <img
          className="rounded-full border-4 border-white mt-22"
          src="/image-victor.jpg"
          alt="Victor Crest"
        />
        <h1 className="pt-6 pb-2 text-lg font-bold text-[#2E3349]">
          Victor Crest <span className="text-[#6B7082] font-normal">26</span>
        </h1>
        <p className="pb-6 text-md text-[#6B7082]">London</p>
        <div className="w-full h-[1px] bg-[#E8E9EC]"></div>
        <div className="flex justify-around w-full pt-6">
          <div className="text-center">
            <p className="text-lg font-bold text-[#2E3349]">80K</p>
            <p className="text-sm text-[#6B7082]">Followers</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-bold text-[#2E3349]">803K</p>
            <p className="text-sm text-[#6B7082]">Likes</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-bold text-[#2E3349]">1.4K</p>
            <p className="text-sm text-[#6B7082]">Photos</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
