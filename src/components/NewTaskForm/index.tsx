import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { todoSlice } from "../../store/reducer";
import { Form, Input, SubmitButton } from "./style";

const NewTaskForm = () => {
  const [task, setTask] = useState(" ");
  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(todoSlice.actions.addTodo(task));
    setTask(" ");
    console.log(task);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        required
      />
      <SubmitButton>Add</SubmitButton>
    </Form>
  );
};

export default NewTaskForm;
