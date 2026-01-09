import { NavLink } from "react-router-dom";

const NavigationLink = () => {
  return (
    <>
      <div style={{ display: "flex", marginBlock: 24 }}>
        <NavLink to={"/"}>Главная</NavLink>
        <div
          style={{
            width: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src="../../../public/Images/chevrone_Rigth.svg" alt="" />
        </div>
        <div style={{ color: "#6A0BFF" }}>Собеседование</div>
      </div>
    </>
  );
};

export default NavigationLink;
