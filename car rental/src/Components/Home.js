import Footer from "./footer";
import NavbarCompo from "./Navbar";

export default function HomeCompo() {
  return (
    <>
      <div>
        <NavbarCompo />
        <img
          style={{ objectFit: "cover", width: "100%", height: "92vh" }}
          src="https://www.traveldailymedia.com/assets/2019/08/shutterstock_1030925341.png"
        />
      </div>
      <Footer/>
    </>
  );
}
