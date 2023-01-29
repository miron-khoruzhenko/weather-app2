import { Lowdata } from "./components/Lowdata";
import { Sidedata } from "./components/Sidedata";

function App() {
  return (
    <>
      <div className="w-screen h-screen bg-[url('./imgs/bg.jpg')] bg-cover bg-no-repeat bg-bottom font-['Lato']">
        <Lowdata/>
        <Sidedata/>
      </div>
    </>
  );
}

export default App;