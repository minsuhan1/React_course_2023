import { useRef, useContext } from "react";
import { TodosContext } from "../store/todos-context";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    // ? : 현재 시점에 todoTextInputRef이 input 태그와 연결되어 있는지 확실하지 않은 경우. 즉 해당 값이 null일 가능성이 있는 경우. enteredText 타입이 string | undefined라고 뜸

    // ! : 현재 시점에 todoTextInputRef이 input 태그와 연결되는 것이 확실한 경우. 즉 해당 값이 null이 되지 않는 것이 확실한 경우. enteredText 타입이 string으로 뜸
    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      // throw an error
      return;
    }

    todosCtx.addTodo(enteredText);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
