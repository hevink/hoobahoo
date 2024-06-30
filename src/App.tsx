import "./App.css";
import Feed from "./components/Feed";
import Sidebar from "./components/Sidebar";
import Suggestions from "./components/Suggestions";

function App() {
  return (
    <div className="max-w-7xl h-screen mx-auto bg-[#1e1e1e]">
      <div className="flex">
        <Sidebar />
        <Feed />
        <Suggestions />
      </div>
    </div>
  );
}

export default App;
