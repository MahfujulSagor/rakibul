/*
  Right now this page is fetching public habits from local storage.
  It should ideally fetch from a backend server.
  This is a temporary solution until backend integration is done.
*/

import { useEffect, useState } from "react";
import { SearchBar } from "../../Components/SearchBar/SearchBar";
import { HabbitCard } from "../../Components/HabitCard/HabitCard";

const PublicHabit = () => {
  const [habits, setHabits] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredHabits, setFilteredHabits] = useState([]);

  useEffect(() => {
    const storedHabits = JSON.parse(localStorage.getItem("habits") || "[]");
    const publicHabits = storedHabits.filter(
      (habit) => habit.visibility === "public"
    );
    setHabits(publicHabits);
  }, []);

  useEffect(() => {
    const filtered = habits.filter((habit) =>
      habit.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      habit.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      habit.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      habit.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredHabits(filtered);
  }, [searchQuery, habits]);

  return (
    <div className="min-h-[calc(100vh-64px)] pt-20 flex flex-col items-center gap-20">
      <div className="w-full max-w-md px-4">
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
      </div>
      <div className="grid lg:grid-cols-3 gap-4 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 w-full px-4">
        {filteredHabits.length > 0 ? (
          filteredHabits.map((habit, index) => (
            <HabbitCard key={index} habit={habit} className={""} />
          ))
        ) : (
          <div className="col-span-full text-center text-gray-600">
            <p className="text-lg">No habits found matching "{searchQuery}"</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PublicHabit;
