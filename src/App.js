import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddBook from "./Components/Books/AddBook";

import Books from "./Components/Books/Books";
import { EditBook } from "./Components/Books/EditBook";
import Home from "./Components/Home";
import Login from "./Components/Login";
import AddStudent from "./Components/Users/AddStudent";
import AddMentor from "./Components/Users/AddMentor";
import { EditStudent } from "./Components/Users/EditStudent";
import Users from "./Components/Users/Users";
import { EditMentor } from "./Components/Users/EditMentor";
import NotFound from "./Components/NotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/addbook" element={<AddBook />} />
        <Route path="editbook/:id" element={<EditBook />} />
        <Route path="/user" element={<Users />} />
        <Route path="/addStudent" element={<AddStudent />} />
        <Route path="/addMentor" element={<AddMentor />} />
        <Route path="editstudent/:id" element={<EditStudent />} />
        <Route path="editmentor/:id" element={<EditMentor/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;