import { useState } from "react";
import { BsFillSave2Fill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";


export default function Home() {
    const [text, setText] = useState('');
    const [list, setList] = useState([]);

    const save = () => {

        setList([...list, text]);
        setText('');

    }

    const deleteTodo = (i) => {
        list.splice(i, 1);
        setList([...list]);
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">

                <h1 className="text-3xl font-semibold text-center text-gray-700 mb-6">Todo App</h1>

                <div className="flex mb-6 relative">
                    <input
                        onChange={(e) => setText(e.target.value)}
                        value={text}
                        type="text"
                        placeholder="Add a new task"
                        className="w-full p-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                    <button><BsFillSave2Fill
                        onClick={save}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-3xl cursor-pointer text-indigo-600 hover:text-indigo-700"
                    /></button>
                </div>

                {/* Todo List */}
                <div className="space-y-4">
                    <ul>
                        {list.map((x, i) => (
                            <li key={i} className="flex justify-between items-center bg-yellow-100 p-4 rounded-lg shadow-sm hover:bg-yellow-200 transition-all duration-200">
                                <span className="text-gray-700">{x}</span><hr />
                                <button>
                                <MdDelete className="text-2xl text-red-600" onClick={(i) => deleteTodo(i)} />
                                </button>
                                
                            </li>
                        ))}
                        
                    </ul>
                </div>

            </div>
        </div>
    )
}
