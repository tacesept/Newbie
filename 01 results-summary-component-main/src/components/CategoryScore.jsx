import { useState, useEffect } from "react";

export default function CategoryScore({ setTotalScore }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
        console.log(categories);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    if (categories.length > 0) {
      setTotalScore(
        Math.round(
          categories.reduce((acc, curr) => acc + curr.score, 0) / categories.length
        )
      );
    }
  }, [categories, setTotalScore]);

  const colors = [
    {
      backgroundColor: "bg-red-50",
      color: "text-red",
    },
    {
      backgroundColor: "bg-yellow-50",
      color: "text-yellow",
    },
    {
      backgroundColor: "bg-green-50",
      color: "text-green",
    },
    {
      backgroundColor: "bg-blue-50",
      color: "text-blue",
    },
  ];
  return (
    <ul className="flex flex-col gap-4 w-full">
      {categories.map((item, index) => (
        <li
          key={item.category}
          className={`flex justify-between items-center rounded-xl px-4 py-6 ${colors[index].backgroundColor} ${colors[index].color}`}
        >
          <span className="flex items-center gap-2">
            <img src={item.icon} alt={`${item.category} icon`} />
            <span>{item.category}</span>
          </span>
          <span className="text-dark-navy">
            {item.score}
            <span className="text-dark-navy/50"> / 100</span>
          </span>
        </li>
      ))}
    </ul>
  );
}
