import Card from "./Card";
import CreateCard from "./CreateCard";
export const CardColumn = ({
    listData,
    onDeleteTask,
    onEditTask,
    onCreateCard,
}) => {
    const inProgressTasks = (Array.isArray(listData) ? listData : []).filter(
        (task) => !task.complete
    );
    const doneTasks = (Array.isArray(listData) ? listData : []).filter(
        (task) => task.complete
    );

    return (
        <div className="m-10 grid gap-3 sm:mx-28 sm:grid-cols-3">
            <CreateCard onCreate={onCreateCard} />
            <div className="parent-col max-h-fit rounded-lg bg-blue-300">
                <div className="m-3 flex justify-center to-white font-mono text-xl font-bold">
                    Working
                </div>
                {inProgressTasks.map((task, index) => (
                    <Card
                        key={index}
                        task={task}
                        onDeleteTask={onDeleteTask}
                        onEditTask={onEditTask}
                    ></Card>
                ))}
            </div>
            <div className="parent-col max-h-fit rounded-lg bg-red-300">
                <div className="m-3 flex justify-center to-white font-mono text-xl font-bold">
                    Done
                </div>
                {doneTasks.map((task, index) => (
                    <Card
                        key={index}
                        task={task}
                        onDeleteTask={onDeleteTask}
                        onEditTask={onEditTask}
                    ></Card>
                ))}
            </div>
        </div>
    );
};

export default CardColumn;
