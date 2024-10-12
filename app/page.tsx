import Navbar from "./components/Navbar";
import HomePage from "./Page/HomePage";

export default function Home() {
  return (
    <div className="w-[90%] xl:w-[80%] mx-auto my-3">
      <Navbar/>
      <HomePage/>
    </div>
  );
}
