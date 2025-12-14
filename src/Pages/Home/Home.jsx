import { Link } from "react-router";
import Habit_Tracker from "../../assets/habbit_tracker.jpg";

const Home = () => {
  return (
    <div className="text-center">
      <div className="mt-50 flex flex-col gap-6">
        <h2 className="md:text-4xl lg:text-5xl text-3xl font-bold">
          Build the habits that{" "}
          <span className="bg-linear-to-r from-purple-400 to-red-400 text-transparent bg-clip-text">
            matter!
          </span>
        </h2>
        <p className="lg:text-2xl text-xl">
          Feeling overwhelmed? Start small and build consistency over time.
        </p>
      </div>
      <div className="flex flex-col items-center mt-20">
        <button className="btn customBtn"><Link to={'/addHabit'}>Let's get started</Link></button>
        <div>
          <img src={Habit_Tracker} alt="Habit Tracker" className="w-[600px]" />
        </div>
      </div>
    </div>
  );
};

export default Home;
