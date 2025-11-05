import { useEffect } from "react";
import { DataType } from "../../Context";
import { useFilter } from "../../CustomHook";
import CheckedBtn from "../Buttons/CheckedBtn";
import DeleteBtn from "../Buttons/DeleteBtn";
import RenameBtn from "../Buttons/RenameBtn";
import Rename from "../Rename/Rename";

function Todos() {
  const {
    data,
    setData,
    filteredData,
    setFilteredData,
    searchInputValue,
    changeableNoteId,
    checkedNotes,
    notesType,
  } = useFilter();

  useEffect(() => {
    const saved = localStorage.getItem("todos");
    if (saved) setData(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(data));
  }, [data]);

  useEffect(() => {
    const filtered: DataType[] = data.filter((note: DataType) => {
      const text = note.name.toLowerCase();
      if (searchInputValue.length > 0 && !text.includes(searchInputValue))
        return false;

      if (notesType === false && checkedNotes.includes(note.id)) return false;
      if (notesType === true && !checkedNotes.includes(note.id)) return false;

      return true;
    });

    setFilteredData([...filtered]);
  }, [data, searchInputValue, checkedNotes]);

  return (
    <div className="w-[520px] font-medium">
      {filteredData.map((el: DataType, i: number) => (
        <div
          key={el.id}
          className={`w-full py-[17px] flex justify-between items-center ${i !== 0 ? "border-t-purple border-t-[1px]" : ""
            }`}
        >
          <div className="flex justify-evenly items-center gap-[17px]">
            <CheckedBtn i={el.id} />
            {el.id !== changeableNoteId || changeableNoteId == null ? (
              <p
                className={`font-medium text-[20px] w-[420px] border-b-[2px] border-amber-50/0 pb-[5px] ${el.checked ? "line-through text-gray-500" : ""
                  }`}
              >
                {el.name}
              </p>
            ) : (
              <Rename />
            )}

          </div>
          <div className="flex justify-evenly items-center gap-[10px] text-[#CDCDCD]">
            <RenameBtn name={el.name} id={el.id} />
            <DeleteBtn id={el.id} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Todos;
