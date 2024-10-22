import {useState} from "react";

const CreateCard = ({onCreate}) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [complete, setComplete] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim() && description.trim()) {
            onCreate({name, description, complete});
            setName("");
            setDescription("");
            setComplete(false);
        }
    };

    return (
        <div className="parent-col max-h-fit rounded-lg bg-green-300">
            <div className="m-3 flex justify-center to-white font-mono text-xl font-bold">
                Create Card
            </div>
            <form onSubmit={handleSubmit}>
                <div className="m-3 h-32 rounded-lg bg-green-400">
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="h-[20%] w-full rounded-lg bg-green-500 pl-2 font-mono font-bold placeholder-white text-white"
                        placeholder="Title"
                    />
                    <textarea
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="h-[80%] w-full rounded-lg bg-green-400 pl-2 text-start font-mono font-bold placeholder-white text-white"
                        placeholder="What's in your mind?"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="m-3 mx-auto flex h-[15%] w-1/2 justify-center rounded-lg bg-green-500 p-1 text-white font-mono font-bold"
                >
                    Create
                </button>
            </form>
        </div>
    );
};

export default CreateCard;
