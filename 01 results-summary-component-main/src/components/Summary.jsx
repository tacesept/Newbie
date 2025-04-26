import CategoryScore from "./CategoryScore";

export default function Summary({ setTotalScore }) {
  return (
    <div
      aria-label="Summary"
      className="flex flex-col gap-6
      bg-white rounded-t-2xl p-6 md:p-10 md:rounded-2xl transition-all duration-300"
    >
      <span className="text-lg md:text-2xl">Summary</span>
      <CategoryScore setTotalScore={setTotalScore} />
      <button
        className="w-full gradient-1 text-white rounded-full py-4 shadow-button
      hover:opacity-80 cursor-pointer md:mt-4"
      >
        Continue
      </button>
    </div>
  );
}
