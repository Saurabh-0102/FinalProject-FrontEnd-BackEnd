import "./App.css";
import HomeCompo from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import LoginCompo from "./Components/LoginCompo";
import RegisterCompo from "./Components/Register";
import AdminCompo from "./Components/Admin/Admin";
import HostCompo from "./Components/Host/Host";
import UserCompo from "./Components/User/User";
import AboutUsCompo from "./Components/AboutUs";
import AddCarCompo from "./Components/Host/AddCar";
import MyCarCompo from "./Components/Host/HostMyCar";
import AllCarsCompo from "./Components/User/AllCars";
import UpdateCarCompo from "./Components/Host/UpdateCar";
import AdminAllCarCompo from "./Components/Admin/AdminAllCar";
import AdminUpdateCarCompo from "./Components/Admin/AdminUpdateAllCars";
import AdminAllUserCompo from "./Components/Admin/AdminAllUsers";
import ForPassCompo from "./Components/FogetPassWord";
import OtpVerifyCompo from "./Components/OtpVerify";
import UpdatePassCompo from "./Components/UpdatePass";
import FileUpload from "./Components/Host/FileUpload";
import BookCarCompo from "./Components/User/BookCar";
import PaymentCompo from "./Components/User/Payment";
import UserPageCompo from "./Components/User/UserPage";
import UserProfileCompo from "./Components/User/UserProfile";
import DemoCompo from "./Components/Demo";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<HomeCompo />} />
          <Route path="/login" element={<LoginCompo />} />
          <Route path="/register" element={<RegisterCompo />} />
          <Route path="/admin" element={<AdminCompo />} />
          <Route path="/host" element={<HostCompo />} />
          <Route path="/user" element={<UserCompo />} />
          <Route path="/about" element={<AboutUsCompo />} />
          <Route path="/addcar" element={<AddCarCompo />} />
          <Route path="/mycar" element={<MyCarCompo />} />
          <Route path="/allcars" element={<AllCarsCompo />} />
          <Route path="/updatecar" element={<UpdateCarCompo />} />
          <Route path="/adminallcars" element={<AdminAllCarCompo />} />
          <Route path="/adminupdateallcars" element={<AdminUpdateCarCompo />} />
          <Route path="/allusers" element={<AdminAllUserCompo />} />
          <Route path="/fogpass" element={<ForPassCompo />} />
          <Route path="/otp" element={<OtpVerifyCompo />} />
          <Route path="updatepassword" element={<UpdatePassCompo />} />
          <Route path="/uploadcarimg" element={<FileUpload />} />
          <Route path="/bookcar" element={<BookCarCompo />} />
          <Route path="/payment" element={<PaymentCompo />} />
          <Route path="/userpage" element={<UserPageCompo />} />
          <Route path="/userprofile" element={<UserProfileCompo />} />
          <Route path="/demo" element={<DemoCompo />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
