import styles from './pageStyles.module.scss';
import StudyTogether from '../components/StudyTogether/StudyTogether';
import Contact_Sponsors from '../components/Contact_Sponsors/Contact_Sponsors';
import Header_Contact from '../components/Header_Contact/Header_Contact';

const ContactPage = () => {
    return (
        <div className={styles.ContactPage}>
            <Header_Contact />
            <Contact_Sponsors />
            <StudyTogether />
        </div>
    )
}

export default ContactPage;   