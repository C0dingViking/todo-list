import { Outlet } from "react-router-dom";
import Header from "./Header.tsx";

function Root() {
  return (
    <div className="pl-10 pr-10 pt-2 space-y-5 bg-background min-h-screen"> {/*h-screen w-screen*/} 
      <Header />
      <Outlet />
    </div>
  )

}

export default Root
