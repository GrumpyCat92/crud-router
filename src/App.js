import "./App.css";
import CardsList from "./Components/CardsList";
import { Route, Routes } from "react-router-dom";
import CreateForm from "./Components/CreateForm";
import ViewCard from "./Components/ViewCard";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<CardsList />} />
        <Route path="/posts/new" element={<CreateForm isEdit={false} />} />
        <Route path="/posts/:id" element={<ViewCard />} />
        <Route path="/posts/edit/:id" element={<CreateForm isEdit={true} />} />
      </Routes>
    </div>
  );
}

export default App;
