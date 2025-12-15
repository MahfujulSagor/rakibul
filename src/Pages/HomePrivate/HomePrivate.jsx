import { useEffect, useState } from "react";
import UseAuth from "../../Hook/UseAuth";
import toast from "react-hot-toast";
import "cally";
import { HabbitCard } from "../../Components/HabitCard/HabitCard";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const HomePrivate = () => {
  const [pendingHabits, setPendingHabits] = useState([]);
  const [completedHabits, setCompletedHabits] = useState([]);

  const loadHabits = () => {
    const storedHabits = JSON.parse(localStorage.getItem("habits") || "[]");

    //? Filter for public habits that are PENDING (status === 0)
    const pending = storedHabits.filter((habit) => {
      return habit.visibility === "public" && habit.status === 0;
    });

    //? Filter for public habits that are COMPLETED (status === 1)
    const completed = storedHabits.filter((habit) => {
      return habit.visibility === "public" && habit.status === 1;
    });

    setPendingHabits(pending);
    setCompletedHabits(completed);
  };

  useEffect(() => {
    loadHabits();

    // Listen for storage changes from other tabs/windows
    window.addEventListener("storage", loadHabits);

    return () => {
      window.removeEventListener("storage", loadHabits);
    };
  }, []);

  const handleCompleteHabit = (id) => {
    try {
      const storedHabits = JSON.parse(localStorage.getItem("habits") || "[]");

      const updatedHabits = storedHabits.map((h) =>
        h._id === id ? { ...h, status: 1 } : h
      );

      localStorage.setItem("habits", JSON.stringify(updatedHabits));
      loadHabits();

      toast.success("Habit marked as completed!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to complete habit.");
    }
  };

  const { user } = UseAuth();

  const date = new Date();
  const dayOfWeek = date.toLocaleDateString("en-US", {
    weekday: "long",
  });
  const formattedDate = date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  // Calculate completion percentage
  const totalHabits = pendingHabits.length + completedHabits.length;
  const completionPercentage = totalHabits > 0
    ? Math.round((completedHabits.length / totalHabits) * 100)
    : 0;

  // Data for the ring chart
  const chartData = [
    { name: "Completed", value: completedHabits.length },
    { name: "Pending", value: pendingHabits.length },
  ];

  const COLORS = ["#10b981", "#e5e7eb"];
  return (
    <div className="min-h-screen w-full pt-10">
      <div className="w-full grid grid-cols-3 gap-6 mx-auto">
        <div className="col-span-2 space-y-6">
          {/* Welcome card */}
          <div className="rounded-box shadow-lg border border-base-300 px-4 py-6">
            <h2 className="text-xl">
              <span className="font-bold">Hi There,</span>{" "}
              {user ? user.displayName : ""}
            </h2>
            <p className="text-base capitalize text-gray-600">Welcome back!</p>
          </div>
          {/* Habits Pending */}
          <div className="rounded-box shadow-lg border border-base-300 px-4 py-6 grid grid-cols-1 gap-4">
            <div className="grid grid-cols-2 items-center">
              <div className="justify-self-start">
                <p className="text-xl font-bold">{dayOfWeek}</p>
                <p className="text-base text-gray-600">{formattedDate}</p>
              </div>
              <div className="justify-self-end">
                <button className="btn customBtn">Add Habit</button>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {pendingHabits.length > 0 ? (
                pendingHabits.map((habit, index) => (
                  <div key={index} className="flex items-stretch">
                    <div className="flex-1">
                      <HabbitCard
                        habit={habit}
                        listClass={
                          "border-r-white shadow-r-none rounded-r-none"
                        }
                        className={``}
                      />
                    </div>
                    <button
                      className="btn rounded-box text-lg font-bold h-full border-l-white shadow-l-none rounded-l-none shadow-md bg-linear-to-r from-purple-500 to-pink-500 text-white opacity-90 hover:opacity-100 transition-all duration-1000 ease-in-out "
                      onClick={() => handleCompleteHabit(habit._id)}
                    >
                      Complete
                    </button>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-600 text-base">
                  No pending habits.
                </p>
              )}
            </div>
          </div>
          {/* Habits Completed */}
          <div className="rounded-box shadow-lg border border-base-300 px-4 py-6">
            <h2 className="text-xl font-bold">Habits Completed</h2>
            <div>
              {completedHabits.length > 0 ? (
                <div className="grid grid-cols-1 gap-4 mt-4">
                  {completedHabits.map((habit, index) => (
                    <HabbitCard
                      key={index}
                      habit={habit}
                      className={"opacity-50"}
                      listClass={"shadow-none"}
                    />
                  ))}
                </div>
              ) : (
                <p className="text-center text-base text-gray-600">
                  No habits completed yet.
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6">
          <div className="border justify-self-center w-full rounded-box shadow-lg border-base-300 p-4">
            <p className="text-center font-bold text-xl">Statistics</p>
            <div className="relative h-62">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    dataKey="value"
                    startAngle={90}
                    endAngle={-270}
                  >
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <p className="text-4xl font-bold">{completionPercentage}%</p>
                <p className="text-sm text-gray-600">Completed</p>
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-green-500"></div>
                  <span className="text-base">Completed</span>
                </div>
                <span className="font-semibold text-base">{completedHabits.length}</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-gray-300"></div>
                  <span className="text-base">Pending</span>
                </div>
                <span className="font-semibold text-base">{pendingHabits.length}</span>
              </div>
            </div>
          </div>
          <div className="justify-self-center w-full">
            <calendar-date class="cally w-full bg-base-100 border border-base-300 shadow-lg rounded-box">
              <svg
                aria-label="Previous"
                className="fill-current size-4"
                slot="previous"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                ></path>
              </svg>
              <svg
                aria-label="Next"
                className="fill-current size-4"
                slot="next"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path fill="currentColor" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
              </svg>
              <calendar-month></calendar-month>
            </calendar-date>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePrivate;
