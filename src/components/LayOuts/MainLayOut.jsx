import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import NavBar from "../NavBar";


const MainLayOut = () => {
    return (
        <div>
  {/* navbar */}
  <NavBar></NavBar>
<div className="min-h-[calc(100vh-232px)] py-12 container mx-auto px-12">
<Outlet></Outlet>

</div>





  {/* footer */}
 <Footer></Footer>

            
        </div>
    );
};

export default MainLayOut;