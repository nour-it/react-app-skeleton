import Search from "./Search";

interface FilterProps {
    options: string[];
    selectedOption: string[];
    onOptionChange: (option: string) => void;
    filter?: string
}

export const Filter: React.FC<FilterProps> = ({
    options,
    selectedOption,
    onOptionChange,
    filter = "1",
}) => {

    switch (filter) {
        case "3":
            return (
                <section>
                    <div className="my-4 flex gap-4 ">
                        {options.map((option) => (
                            <button
                                key={option}
                                className={`min-w-40 h-12 rounded ${selectedOption.includes(option) ? 'bg-gray-300' : 'bg-gray-100'}`}
                                onClick={() => onOptionChange(option)}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </section>
            )
            break;

        case "2":
            return (
                <section className='flex justify-center'>
                    <div className="my-4 flex gap-4 items-center">
                        {options.map((option) => (
                            <button
                                key={option}
                                className={`min-w-40 h-12 rounded ${selectedOption.includes(option) ? 'bg-gray-300 h-32' : 'bg-gray-100'
                                    }`}
                                onClick={() => onOptionChange(option)}
                            >
                            </button>
                        ))}
                    </div>
                </section>
            );
            break;

        default:
            return (
                <section>
                    <Search />
                    <div className="my-4 flex gap-4 ">
                        {options.map((option) => (
                            <button
                                key={option}
                                className={`min-w-40 h-12 rounded ${selectedOption.includes(option) ? 'bg-gray-300' : 'bg-gray-100'}`}
                                onClick={() => onOptionChange(option)}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </section>
            )
            break;
    }

};
