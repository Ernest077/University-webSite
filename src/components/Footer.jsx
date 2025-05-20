import styles from '../layout/layout.module.scss';
import smallLogo from '../assets/logos/logo-small-white.svg'
import backgroundLogo from '../assets/logos/logo-background.svg'
import instagramLogo from '../assets/logos/logo-Instagram.svg';
import facebookLogo from '../assets/logos/logo-Facebook.svg';
import linkdinLogo from '../assets/logos/logo-Linkdin.svg';
import beLogo from '../assets/logos/logo-Be.svg';
import googleLogo from '../assets/logos/logo-Google.svg';


const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.Footer__first}>
        <img src={smallLogo} alt="logo" />
        <div>
          <span>Krakow</span>
          <span>Amsterdam</span>
          <span>Bali</span>
          <span>Krakow</span>
          <span>Kiev</span>
        </div>
      </div>
      <div className={styles.Footer__second}>
        <div className={styles.Footer__second__links}>
          <a href="">Facultyes</a>
          <a href="">Grants</a>
          <a href="">Dormitory</a>
          <a href="">About</a>
          <a href="">Academics</a>
          <a href="">Contact</a>
        </div>
        <div className={styles.Footer__second__child}>
          <div>
            <span>www.eurouniversity.com</span>
            <span>www.amsterdamunicity.com</span>
          </div>
          <img src={backgroundLogo} alt="logo" />
        </div>
        <div className={styles.Footer__second__social}>
          <img src={instagramLogo} alt="instagramLogo" />
          <img src={facebookLogo} alt="facebookLogo" />
          <img src={googleLogo} alt="googleLogo" />
          <img src={beLogo} alt="beLogo" />
          <img src={linkdinLogo} alt="linkdinLogo" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;