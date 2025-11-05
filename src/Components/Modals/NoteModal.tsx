import { useFilter } from "../../CustomHook"

function NoteModal() {
    const { setData, addInputValue, setActiveModal, setAddInputValue, darkMode } = useFilter()

    function setActive(): void {
        setActiveModal(false)
        setAddInputValue("")
    }

    function inputValue(e: React.ChangeEvent<HTMLInputElement>) { setAddInputValue(e.target.value) }

    function addNote() {
        if (!addInputValue.trim()) return;

        const newNote = {
            id: Date.now(),
            name: addInputValue,
            checked: false,
        };

        const savedData = localStorage.getItem("todos");
        const updatedData = savedData ? [...JSON.parse(savedData), newNote] : [newNote];

        setData(updatedData);
        localStorage.setItem("todos", JSON.stringify(updatedData));

        setActiveModal(false);
        setAddInputValue("");
    }

    return (
        <div className="fixed w-[100vw] h-[100vh] pt-[124px] flex justify-evenly  bg-black/60 -z-50-">
            <div className={`w-[500px] h-[289px] ${darkMode ? 'bg-black border-[1px] border-white' : 'bg-white '} rounded-[15px] flex flex-col justify-between items-center z-50`}>
                <div className="flex flex-col justify-evenly items-center mt-[18px] gap-y-6">
                    <h1 className="text-[24px] font-medium">
                        NEW NOTE
                    </h1>
                    <input
                        type="text"
                        onChange={(e) => inputValue(e)}
                        placeholder="Input your note..."
                        className={`w-[440px] h-[38px] border-[1px] px-[16px] rounded-[5px] ${darkMode ? 'border-white bg-black' : 'bg-white border-purple'}   py-[4px] text-[16px]  font-medium focus:outline-0`} />
                </div>
                <div className="flex justify-between items-center w-full px-[30px] mb-[18px]">
                    <button onClick={setActive} className="w-[110px] h-[38px] border-[2px] border-purple rounded-[5px] text-purple font-medium text-[18px] hover:cursor-pointer hover:shadow-lg hover:shadow-purple/40 duration-200">CANCEL</button>
                    <button onClick={addNote} className="w-[110px] h-[38px] border-[2px] border-purple rounded-[5px] text-white bg-purple font-medium text-[18px] hover:cursor-pointer hover:shadow-lg hover:shadow-purple/40 duration-300">APPLY</button>
                </div>
            </div>

        </div>
    )
}

export default NoteModal