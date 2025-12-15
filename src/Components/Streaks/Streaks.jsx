import React from "react";

const Streaks = ({ completedHabits }) => {
  return (
    <>
      <h2 className="text-xl font-bold mb-4">Your Streaks 🔥</h2>
      <div className="space-y-3">
        {completedHabits.length > 0 ? (
          completedHabits
            .sort((a, b) => b.streak - a.streak)
            .slice(0, 5)
            .map((habit, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-base-200 rounded-lg"
              >
                <div className="flex items-center gap-3 flex-1">
                  <div className="badge badge-lg badge-warning font-bold">
                    {habit.streak}
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-sm">{habit.title}</p>
                    <p className="text-xs text-gray-600">{habit.category}</p>
                  </div>
                </div>
                <div className="text-2xl">
                  {habit.streak >= 7 ? "🏆" : habit.streak >= 3 ? "⭐" : "🔥"}
                </div>
              </div>
            ))
        ) : (
          <div className="text-center py-6">
            <p className="text-gray-600 text-sm">
              No streaks yet. Complete habits to build streaks!
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Streaks;
