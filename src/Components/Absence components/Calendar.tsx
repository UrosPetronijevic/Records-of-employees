export default function Calendar() {
  // Get the current date
  const today = new Date();
  const thisMonth = today.getMonth();
  const thisYear = today.getFullYear();

  // Calculate the number of days in the current month
  const daysInMonth = new Date(thisYear, thisMonth + 1, 0).getDate();

  // Create an array of days for the current month
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div className="w-[50%] bg-red-300 flex flex-col justify-between p-8 rounded-md cursor-pointer">
      <h1 className="self-center text-5xl">
        {today.toLocaleString("default", { month: "long" })} {thisYear}
      </h1>
      <div className="grid grid-cols-5 grid-rows-7 gap-2">
        {daysArray.map((day) => (
          <div
            key={day}
            className="flex p-4 bg-yellow-300 justify-center items-center border border-slate-300"
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
}
