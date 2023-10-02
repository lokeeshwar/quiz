import "./App.css";
import Navigation from "./components/navbar";
import Context from "./context/context";
import QuizContextProvider from "./context/quizContext";
import Quiz from "./pages/quiz/quiz";
import Login from "./pages/register/login";
import Register from "./pages/register/register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">    
      <Context>
      <QuizContextProvider>
      <Router>
        <Navigation/>
        <Routes>
          <Route path="/" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/quiz" element={<Quiz/>} />
        </Routes>
      </Router>
      </QuizContextProvider>
    </Context>
    </div>

  );
}

export default App;
