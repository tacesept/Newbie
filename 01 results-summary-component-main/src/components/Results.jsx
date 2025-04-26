export default function Results({ totalScore }) {
  return (
    <div
      aria-label="Results"
      className="card flex-center-col gradient-1 h-full"
    >
      <span className="text-lg md:text-2xl font-bold text-[#CAC9FF]">
        Your Result
      </span>
      <div
        className="flex-center-col gradient-2 md:gap-1 md:mt-4
        rounded-full w-[140px] h-[140px] md:w-[200px] md:h-[200px]"
      >
        <span className="text-6xl md:text-7xl font-extrabold">
          {totalScore}
        </span>
        <span className="text-base md:text-lg font-bold text-[#CAC9FF]">
          of 100
        </span>
      </div>
      <div className="flex-center-col gap-2 md:gap-3 md:mt-1">
        <span className="text-2xl md:text-3xl font-bold">Great</span>
        <p className="text-base md:text-lg text-[#CAC9FF] text-center">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </div>
  );
}
