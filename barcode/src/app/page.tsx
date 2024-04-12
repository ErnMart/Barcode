import Image from "next/image";
import styles from "./page.module.css";
import newImage from "./barcode.png";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Barcode</h1>
      <Image
        src={newImage}
        alt="Barcode"
      />
    </main>
  );
}
