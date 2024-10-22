import {useState} from "react";

export const Card = ({listData, onSave}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState(listData.name);
    const [description, setDescription] = useState(listData.description);
    const [complete, setComplete] = useState(listData.complete);

    const handleSave = () => {
        onSave(listData.id, {name, description, complete});
        setIsEditing(false);
    };

    return (
        <>
            <div className="m-10 grid gap-3 sm:mx-28 sm:grid-cols-3">
                {isEditing ? (
                    <div>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <label>
                            Complete:
                            <input
                                type="checkbox"
                                checked={complete}
                                onChange={(e) => setComplete(e.target.checked)}
                            />
                        </label>
                        <button onClick={handleSave}>Save</button>
                    </div>
                ) : listData.complete ? (
                    <div>
                        <h2>Completed</h2>
                        <p>Name: {listData.name}</p>
                        <p>Description: {listData.description}</p>
                        <p>Complete: {listData.complete ? "Yes" : "No"}</p>
                        <button onClick={() => setIsEditing(true)}>Edit</button>
                    </div>
                ) : (
                    <div className="parent-col max-h-fit rounded-lg bg-green-300">
                        <div className="m-3 flex justify-center to-white font-mono text-xl font-bold">
                            Soon
                        </div>
                        <div className="progress-card" key={index}>
                            <div className="m-3 h-32 rounded-lg bg-green-500">
                                <div className="h-[20%] rounded-lg bg-green-700 pl-2 font-mono text-white">
                                    Title: {listData.name}
                                </div>
                                <div className="pl-2 font-mono text-sm text-white">
                                    {listData.description}
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row">
                            <button className="m-3 flex h-[15%] justify-center rounded-lg bg-red-500 p-1 font-bold text-white">
                                Delete
                            </button>
                            <button
                                onClick={() => setIsEditing(true)}
                                className="m-3 flex h-[15%] justify-center rounded-lg bg-red-500 p-1 font-bold text-white"
                            >
                                Edit
                            </button>
                        </div>
                    </div>
                )}
            </div>
            <div className="m-10 grid gap-3 sm:mx-28 sm:grid-cols-3">
                <div className="parent-col max-h-fit rounded-lg bg-blue-300">
                    <div className="m-3 flex justify-center to-white font-mono text-xl font-bold">
                        In Progress
                    </div>
                    <div className="m-3 h-32 rounded-lg bg-blue-400">
                        <div className="h-[20%] rounded-lg bg-blue-600 pl-2 font-mono text-white">
                            Title: {listData.name}
                        </div>
                        <div className="pl-2 font-mono text-sm text-white">
                            {listData.description}
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <button className="m-3 flex h-[15%] justify-center rounded-lg bg-red-500 p-1 font-bold text-white">
                            Delete
                        </button>
                        <button
                            onClick={() => setIsEditing(true)}
                            className="m-3 flex h-[15%] justify-center rounded-lg bg-red-500 p-1 font-bold text-white"
                        >
                            Edit
                        </button>
                    </div>
                </div>

                <div className="parent-col max-h-fit rounded-lg bg-red-300">
                    <div className="m-3 flex justify-center to-white font-mono text-xl font-bold">
                        Done
                    </div>
                    <div className="m-3 h-32 rounded-lg bg-red-400">
                        <div className="h-[20%] rounded-lg bg-red-500 pl-2 font-mono text-white">
                            Title: {listData.name}
                        </div>
                        <div className="pl-2 font-mono text-sm text-white">
                            {listData.description}
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <button className="m-3 flex h-[15%] justify-center rounded-lg bg-red-500 p-1 font-bold text-white">
                            Delete
                        </button>
                        <button
                            onClick={() => setIsEditing(true)}
                            className="m-3 flex h-[15%] justify-center rounded-lg bg-red-500 p-1 font-bold text-white"
                        >
                            Edit
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;
