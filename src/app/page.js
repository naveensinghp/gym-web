import Image from "next/image";
import styles from "./page.module.css";
import Footer from "@/components/Footer";
import App from "@/components/App";



export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
       <App />
      </main>
      <Footer />
    </div>
  );
}
