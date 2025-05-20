import React from 'react';
import styles from './Contact_Sponsors.module.scss'
import sponsor1 from '../../assets/logos/contact_sponsors/logo_co_facebook.svg';
import sponsor2 from '../../assets/logos/contact_sponsors/logo_co_instagram.svg';
import sponsor3 from '../../assets/logos/contact_sponsors/logo_co_google.svg';
import sponsor4 from '../../assets/logos/contact_sponsors/logo_co_linkdin.svg';
import sponsor5 from '../../assets/logos/contact_sponsors/logo_co_be.svg';

const Contact_Sponsors = () => {
    const sponsors = [sponsor1, sponsor2, sponsor3, sponsor4, sponsor5]; // Array of sponsor logos

    return (
        <section className={styles.Sponsors}>
            <div>
                {sponsors.map((sponsor, index) => (
                    <div key={index} className={styles.sponsorItem}>
                        <img src={sponsor} alt={`Sponsor ${index + 1}`} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Contact_Sponsors;