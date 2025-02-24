import "./TodoItem.scss";
import empty from "../../assets/empty.svg";
import done from "../../assets/done.svg";
import { useAppDispatch } from "../../hook";
import { setCompleted } from "../../app/reducers/todoReducer";

interface TodoItemProps {
    id: string;
    text: string;
    completed: boolean;
}

const TodoItem: React.FC<TodoItemProps> = ({ text, completed, id }) => {
    const dispatch = useAppDispatch();

    return (
        <>
            <div className="todo-item">
                <img
                    src={completed ? done : empty}
                    alt=""
                    className="todo-item__icon"
                    onClick={() => {
                        dispatch(setCompleted(id));
                    }}
                />
                <span
                    className={
                        completed
                            ? "todo-item__text completed"
                            : "todo-item__text"
                    }
                >
                    {text}
                </span>
            </div>
        </>
    );
};

export default TodoItem;
