import List from "./components/List";
import NewTaskForm from "./components/NewTaskForm";
import { AppWrapper, Header } from "./style";

function App() {
  return (
    <AppWrapper>
      <Header>To Do List</Header>
      <NewTaskForm />
      <List />
    </AppWrapper>
  );
}

export default App;
