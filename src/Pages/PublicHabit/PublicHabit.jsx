import { useEffect, useState } from "react";
import { SearchBar } from "../../Components/SearchBar/SearchBar";
import { HabbitCard } from "../../Components/HabitCard/HabitCard";

const PublicHabit = () => {
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    const storedHabits = JSON.parse(localStorage.getItem("habits") || "[]");
    const publicHabits = storedHabits.filter((habit) => habit.visibility === "public");
    setHabits(publicHabits);
  }, []);

  return (
    <div className="min-h-[calc(100vh-64px)] pt-20 flex flex-col items-center gap-20">
      <div>
        <SearchBar />
      </div>
      <div className="grid lg:grid-cols-3 gap-4 md:grid-cols-2 sm:grid-cols-1 grid-cols-1">
        {habits.map((habit, index) => (
          <HabbitCard key={index} habit={habit} />
        ))}
      </div>
    </div>
  );
};

export default PublicHabit;
