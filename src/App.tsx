import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Suggestions from "./components/Suggestions/Suggestions";
import MobileFooter from "./components/MobileFooter";
import MobileHeader from "./components/MobileHeader";
import Feed from "./components/Feed";

function App() {
  return (
    <div className="bg-[#1e1e1e]">
      <div className="max-w-[1750px] h-screen mx-auto overflow-auto">
        <MobileHeader />
        <div className="flex h-full">
          <div className="hidden lg:block">
            <Sidebar />
          </div>
          <Feed />
          <div className="hidden lg:block">
            <Suggestions />
          </div>
        </div>
        <MobileFooter />
      </div>
    </div>
  );
}

export default App;
