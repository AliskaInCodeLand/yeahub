import { Outlet } from "react-router-dom";
import styles from "./styles.module.css";
import Header from "@/widgets/ui/Header/Header";
import Footer from "@/widgets/ui/Footer/Footer";

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
