import { Outlet } from "react-router-dom";
import Footer from "../../../widgets/Footer/Footer";
import Header from "../../../widgets/Header/Header";
import styles from "./styles.module.css";

function BaseLayout() {
  return (
    <>
      <div className={styles.layoutWrapper}>
        <div className={styles.container}>
          <Header />
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default BaseLayout;