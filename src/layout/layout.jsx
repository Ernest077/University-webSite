import styles from "./layout.module.scss"; 
import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = ({ children }) => {
  return (
    <div className={styles.Layout}>
      <Header/>
      <main className={styles.Layout__main}>
        {children}
      </main>
      <Footer/>
    </div>
  );
};

export default Layout;