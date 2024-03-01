import { useDispatch } from "react-redux";
import { Content, ListItem, RemoveButton } from "./style";
import { todoSlice } from "../../store/reducer";

interface TaskProps {
  id: string;
  content: string;
}

const Task = ({ id, content, ...props }: TaskProps) => {
  const dispatch = useDispatch();
  return (
    <ListItem {...props}>
      <Content>{content}</Content>
      <RemoveButton onClick={() => dispatch(todoSlice.actions.deleteTodo(id))}>
        Delete
      </RemoveButton>
    </ListItem>
  );
};

export default Task;
