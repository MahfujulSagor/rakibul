
export const HabbitCard = ({ habit }) => {
  return (
    <ul className="list bg-base-100 rounded-box shadow-md">
      <li className="list-row min-w-[400px] cursor-pointer border border-gray-200">
        <div>
          <img
            className="size-10 rounded-box"
            src={
              habit.photoURL ||
              "https://img.daisyui.com/images/profile/demo/1@94.webp"
            }
            alt={habit.title || "No Title"}
          />
        </div>
        <div>
          <div className="font-bold">{habit.title || "No Title"}</div>
          <div className="text-xs uppercase font-semibold opacity-60">
            {habit.category || "No Category"}
          </div>
        </div>
        <button className="btn btn-square btn-ghost">
          <div>{habit.time || "N/D"}</div>
        </button>
      </li>
    </ul>
  );
};
