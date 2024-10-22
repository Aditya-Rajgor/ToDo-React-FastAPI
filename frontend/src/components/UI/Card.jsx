import {useState} from "react";

const Card = ({task, onDeleteTask, onEditTask}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTask, setEditedTask] = useState({
        name: task.name,
        description: task.description,
        complete: task.complete,
    });

    const handleEditToggle = () => {
        setIsEditing(true);
        if (isEditing) {
            setEditedTask({
                name: task.name,
                description: task.description,
                complete: task.complete,
            }); // Reset editedTask when exiting edit mode
        }
    };

    const handleSaveCard = () => {
        // console.log(editedTask);
        onEditTask(task.id, editedTask); // Call the edit function from the parent
        setIsEditing(false);
    };

    return (
        <div>
            {isEditing ? (
                <>
                    <div
                        className={`m-3 h-32 rounded-lg ${
                            task.complete ? "bg-red-400" : "bg-blue-400"
                        }`}
                    >
                        <input
                            className={`h-[20%] w-full rounded-lg ${
                                task.complete ? "bg-red-500" : "bg-blue-600"
                            } pl-2 font-mono text-white`}
                            value={editedTask.name}
                            onChange={(e) =>
                                setEditedTask({
                                    ...editedTask,
                                    name: e.target.value,
                                })
                            }
                        />
                        <textarea
                            className={`h-[40%] w-full ${
                                task.complete ? "bg-red-400" : "bg-blue-400"
                            } pl-2 font-mono text-wrap text-sm text-white`}
                            value={editedTask.description}
                            onChange={(e) =>
                                setEditedTask({
                                    ...editedTask,
                                    description: e.target.value,
                                })
                            }
                        ></textarea>
                        <div className="flex flex-row justify-end">
                            <div
                                className="w-1/2
                         items-center pl-2"
                            >
                                <label className="text-white font-mono">
                                    Completed:
                                </label>
                                <input
                                    type="checkbox"
                                    className="ml-2"
                                    checked={editedTask.complete}
                                    onChange={(e) =>
                                        setEditedTask({
                                            ...editedTask,
                                            complete: e.target.checked,
                                        })
                                    }
                                />
                            </div>
                            <div className="w-1/2">
                                <button
                                    onClick={handleSaveCard}
                                    className=" justify-center rounded-lg bg-red-500 p-1 font-bold text-white"
                                >
                                    Saved
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className="progress-card">
                        <div
                            className={`m-3 h-32 rounded-lg ${
                                task.complete ? "bg-red-400" : "bg-blue-400"
                            }`}
                        >
                            <div
                                className={`h-[20%] rounded-lg ${
                                    task.complete ? "bg-red-500" : "bg-blue-600"
                                } pl-2 font-mono text-white`}
                            >
                                Title: {task.name}
                            </div>
                            <div className="h-[50%] pl-2 font-mono text-wrap text-sm text-white">
                                {task.description}
                            </div>
                            <div className="flex flex-row">
                                <button
                                    onClick={() => onDeleteTask(task.id)}
                                    className="m-3 mt-0 mb-4 flex h-[15%] w-1/2 justify-center rounded-lg bg-red-500 p-1 font-bold text-white"
                                >
                                    Delete
                                </button>
                                <button
                                    onClick={handleEditToggle}
                                    className="m-3 mt-0 mb-4 flex h-[15%] w-1/2 justify-center rounded-lg bg-red-500 p-1 font-bold text-white"
                                >
                                    Edit
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Card;
