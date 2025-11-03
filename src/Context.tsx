import { createContext, ReactNode, useState } from "react";

export interface DataType {
    id: number;
    name: string;
    checked: boolean;

}
interface ContextType {
    data: DataType[];
    setData: (value: DataType[]) => void;
    activeModal: boolean;
    setActiveModal: (value: boolean) => void;
    addInputValue: string;
    setAddInputValue: (value: string) => void;
    checkedNotes: number[];
    setCheckedNotes: (value: number[]) => void;
    notesType: boolean | null;
    setNotesType: (value: boolean | null) => void;

    newNotesInputValue: string;
    setNewNotesInputValue: (value: string) => void;
    changeableNoteId: number | null;
    setChangeableNoteId: (value: number | null) => void;
    searchInputValue: string;
    setSearchInputValue: (value: string) => void;
    filteredData: DataType[];
    setFilteredData: (value: DataType[]) => void;

    darkMode:boolean ;
    setDarkMode:(value: boolean) => void ;

}

export const FilterContext = createContext<ContextType | undefined>(undefined);

export const FilterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [data, setData] = useState<DataType[]>([])
    const [filteredData, setFilteredData] = useState<DataType[]>([])

    const [addInputValue, setAddInputValue] = useState<string>('')
    const [activeModal, setActiveModal] = useState<boolean>(false);

    const [checkedNotes, setCheckedNotes] = useState<number[]>([])
    const [notesType, setNotesType] = useState<boolean | null>(null)

    const [newNotesInputValue, setNewNotesInputValue] = useState<string>('')
    const [changeableNoteId, setChangeableNoteId] = useState<number | null>(null)

    const [searchInputValue, setSearchInputValue] = useState<string>('');

    const [darkMode, setDarkMode] = useState<boolean>(false)
    return (
        <FilterContext.Provider value={{
            data, setData,
            filteredData, setFilteredData,

            addInputValue, setAddInputValue,
            activeModal, setActiveModal,

            checkedNotes, setCheckedNotes,
            notesType, setNotesType,


            newNotesInputValue, setNewNotesInputValue,
            changeableNoteId, setChangeableNoteId,
            searchInputValue, setSearchInputValue,


            darkMode, setDarkMode,
        }} >
            {children}
        </FilterContext.Provider>
    )
}