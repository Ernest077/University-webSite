import React from 'react';
import styles from './Sponsors.module.scss';
import sponsor1 from '../../assets/logos/sponsors/spon_google.svg';
import sponsor2 from '../../assets/logos/sponsors/spon_nike.svg';
import sponsor3 from '../../assets/logos/sponsors/spon_sumsung.svg';
import sponsor4 from '../../assets/logos/sponsors/spon_apple.svg';
import sponsor5 from '../../assets/logos/sponsors/spon_intercom.svg';
import sponsor6 from '../../assets/logos/sponsors/spon_adidas.svg';

const Sponsors = () => {
    const sponsors = [sponsor1, sponsor2, sponsor3, sponsor4, sponsor5, sponsor6]; // Array of sponsor logos

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

export default Sponsors;