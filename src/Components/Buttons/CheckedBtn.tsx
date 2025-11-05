import { IoMdCheckmark } from "react-icons/io";
import { useFilter } from "../../CustomHook";
import { DataType } from "../../Context";

function CheckedBtn({ i }: { i: number }) {
    const { data, setData, darkMode } = useFilter();

    function toggleCheck(id: number) {
        const updatedData: DataType[] = data.map((note: DataType) =>
            note.id === id ? { ...note, checked: !note.checked } : note
        );
        setData(updatedData);
    }

    const note: DataType | undefined = data.find((el) => el.id === i);
    const isChecked = note?.checked;

    return (
        <button
            onClick={() => toggleCheck(i)}
            className={`w-[26px] h-[26px] rounded-[2px] border-purple border-[1px] flex justify-evenly items-center text-[20px] duration-200 hover:cursor-pointer 
      ${darkMode
                    ? isChecked
                        ? "bg-purple text-white"
                        : "bg-black text-black"
                    : isChecked
                        ? "bg-purple text-white"
                        : "bg-white text-white"
                }`}
        >
            <IoMdCheckmark />
        </button>
    );
}

export default CheckedBtn;
