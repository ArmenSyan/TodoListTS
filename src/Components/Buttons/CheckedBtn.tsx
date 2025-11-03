import { IoMdCheckmark } from "react-icons/io"
import { useFilter } from "../../CustomHook"

function CheckedBtn({ i }: { i: number }) {
    const { checkedNotes, setCheckedNotes, darkMode } = useFilter()
    function setBtns(index: number) {
        if (!checkedNotes.includes(index)) setCheckedNotes([...checkedNotes, i])
        else setCheckedNotes(checkedNotes.filter((el: number) => el !== index))
    }
    return (
        <button
            onClick={() => setBtns(i)}
            className={`w-[26px] h-[26px] rounded-[2px] border-purple border-[1px] flex justify-evenly items-center text-[20px]  duration-200 hover:cursor-pointer 
            ${darkMode ?
                    (checkedNotes.includes(i) ? 'bg-purple text-white' : 'bg-black text-black') :
                    (checkedNotes.includes(i) ? 'bg-purple text-white' : 'bg-white text-white')}`}>
            <IoMdCheckmark />
        </button>
    )
}

export default CheckedBtn