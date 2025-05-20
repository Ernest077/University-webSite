import styles from "./Header_History.module.scss";
import img from '../../assets/img/visual_history.png';
import Header_Slider from "./Header_Slider/Header_Slider";

const Header_History = ({src = img}) => {
  return (
    <div className={styles.Header_History}>
      <div>
        <img src={src} alt="img" />
        <span>The Greatest temple of art that creates the future of Aesign and Art</span>
      </div>
      <Header_Slider/>
    </div>
  );
};

export default Header_History;