import styles from "../Style.module.css";

export function Poster({ image }) {
  return <img src={image} alt="" className={styles.image} />;
}
