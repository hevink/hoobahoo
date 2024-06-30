import "./App.css";
import Feed from "./components/Feed";
import Sidebar from "./components/Sidebar/Sidebar";
import Suggestions from "./components/Suggestions/Suggestions";

function App() {
  return (
    <div className="bg-[#1e1e1e]">
      <div className="max-w-7xl h-screen mx-auto overflow-auto">
        <div className="flex h-full">
          <Sidebar />
          <Feed />
          <Suggestions />
        </div>
      </div>
    </div>
  );
}

export default App;
