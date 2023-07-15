import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { ToastContainer, toast } from '../components/toastClient';
import 'react-toastify/dist/ReactToastify.css';
import { Zoom } from "react-toastify";


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.heroPage}>
          <div className={styles.heroSection}>
            <h1>Start Collecting Now!</h1>
            <p>Buy and open packs to collect creatures. Collect common, rare, and legendary cards.</p>
            <button 
              className={styles.heroButton}
              onClick={() => window.location.href = "/shop"}
            >Shop Packs</button>

          </div>
          <div>
          </div>
        </div>
    </div>
  );
};

export default Home;