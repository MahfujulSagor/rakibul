import { useEffect, useState } from "react";
import UseAuth from "../../Hook/UseAuth";
import toast from "react-hot-toast";
import "cally";
import { HabbitCard } from "../../Components/HabitCard/HabitCard";

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
  return (
    <div className="min-h-screen w-full pt-10">
      <div className="min-h-screen w-full grid grid-cols-3 mx-auto">
        <div className="col-span-2">
          {/* Welcome card */}
          <div className="rounded-box shadow-lg border border-base-300 p-4">
            <h2 className="text-xl">
              <span className="font-bold">Hi There,</span>{" "}
              {user ? user.displayName : ""}
            </h2>
            <p className="text-base capitalize text-gray-600">Welcome back!</p>
          </div>
          {/* Habits Pending */}
          <div className="rounded-box shadow-lg border border-base-300 p-4 grid grid-cols-1 gap-4">
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
          <div className="rounded-box shadow-lg border border-base-300 p-4">
            <h2 className="text-xl font-bold">Habits Completed</h2>
            <div>
              {completedHabits.length > 0 ? (
                <div className="grid grid-cols-1 gap-4 mt-4">
                  {completedHabits.map((habit, index) => (
                    <HabbitCard
                      key={index}
                      habit={habit}
                      className={"opacity-50"}
                      listClass={""}
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
        <div className="grid grid-cols-1">
          <div></div>
          <div>
            <calendar-date class="cally bg-base-100 border border-base-300 shadow-lg rounded-box">
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
