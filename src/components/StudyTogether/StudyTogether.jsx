import styles from "./StudyTogether.module.scss";
import img from '../../assets/img/study_to.png';

const StudyTogether = () => {
  return (
    <section className={styles.studyTogether}>
      <div className={styles.studyTogether__content}>
        <h2>Lets study together</h2>
        <p>Apply for consideration  your resume, we’ll give you feedback. Note: the time of application is unlimited, if you are invited to the training you can study at any time</p>
        <img src={img} alt="img" />
      </div>
      <form className={styles.studyTogether__form}>
        <input type="text" placeholder="Name"/>
        <input type="email" placeholder="Email"/>
        <textarea className={styles.massage_input} placeholder="Type your message here"/>
        <button>submit</button>
      </form>
    </section>
  );
};

export default StudyTogether;