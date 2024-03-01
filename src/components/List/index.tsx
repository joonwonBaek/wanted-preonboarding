import { useSelector } from "react-redux";
import { UnorderedList } from "./style";
import store from "../../store/store";
import Task from "../Task";

export type RootState = ReturnType<typeof store.getState>;

const List = () => {
  const tasks = useSelector((store: RootState) => store.todos);

  console.log(tasks);

  return (
    <UnorderedList>
      {tasks.map((item) => (
        <Task key={item.id} id={item.id} content={item.content} />
      ))}
    </UnorderedList>
  );
};

export default List;
