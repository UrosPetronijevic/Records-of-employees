type AbsenceProps = {
  setAbsence: React.Dispatch<React.SetStateAction<boolean>>;
  absence: boolean;
};

export default function Absences({ setAbsence, absence }: AbsenceProps) {
  return (
    <div className="w-[30%] bg-purple-950/70 p-8 flex flex-col gap-10 rounded-lg backdrop-blur-sm">
      <h1 className="text-5xl font-bold self-center">Odsustva</h1>

      <ol className="h-full w-full flex flex-col text-2xl justify-center gap-5">
        <li
          className="flex justify-between bg-purple-950/30 p-4 rounded-md shadow-md"
          // onClick={() => {
          //   setGodisnjiOdmorArr(toggledDays);
          //   setToggledDays(new Set());
          // }}
        >
          <span>Godisnji Odmor</span>
          <div className="h-7 w-7 bg-green-500"></div>
        </li>

        <li
          className="flex items-center gap-2"
          // onClick={() => setPlacenoOdsustvo(toggledDays)}
        >
          <span>Placeno odsustvo</span>
          <div className="h-7 w-7 bg-blue-500"></div>
        </li>

        <li
          className="flex items-center gap-2"
          // onClick={() => setBolovanjeArr(toggledDays)}
        >
          <span>Bolovanje</span>
        </li>

        <li
          className="flex items-center gap-2"
          // onClick={() => setDrzavniPraznikArr(toggledDays)}
        >
          <span>Drzavni praznik</span>
          <div className="h-7 w-7 bg-red-500"></div>
        </li>

        <li
          className="flex items-center gap-2"
          // onClick={() => setVerskiPraznikArr(toggledDays)}
        >
          <span>Verski praznik</span>
          <div className="h-7 w-7 bg-purple-500"></div>
        </li>

        <li
          className="flex items-center gap-2"
          // onClick={() => setSlavaArr(toggledDays)}
        >
          <span>Slava</span>
          <div className="h-7 w-7 bg-orange-500"></div>
        </li>
      </ol>
    </div>
  );
}
