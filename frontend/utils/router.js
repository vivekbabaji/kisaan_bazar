import LandingPage from "../pages/LandingPage.js";
import Signup from "../pages/Signup.js";
import Login from "../pages/Login.js";
import CustomerPage from "../pages/CustomerPage.js";
import FarmerPage from "../pages/FarmerPage.js";
import FarmerSignup from "../pages/FarmerSignup.js";
import AdminPage from "../pages/AdminPage.js";
import BuyFresh from "../pages/BuyFresh.js";
import SellVegetables from "../pages/SellVegetables.js";
import FarmerUploads from "../pages/FarmerUploads.js";

const routes = [
  {
    path: "/",
    component: LandingPage
  },
  {
    path: "/signup",
    component: Signup
  }
  ,
  {
    path: "/login",
    component: Login
  }
  ,
  {
    path: "/customer_dashboard",
    component: CustomerPage
  }
  ,
  {
    path: "/farmer_dashboard",
    component: FarmerPage
  }
  ,
  {
    path: "/admin_dashboard",
    component: AdminPage
  } ,
   {
    path: "/signup-farmer",
    component: FarmerSignup
  }
  ,
  {
    path: "/buyfresh",
    component: BuyFresh
  }
  ,
  {
    path: "/sell-vegetables",
    component: SellVegetables
  }
  ,
  {
    path: "/farmer-uploads",
    component: FarmerUploads
  }

];
 
const router = new VueRouter({
  routes
});

export default router;
