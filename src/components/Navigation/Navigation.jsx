import React from 'react';
import Swal from 'sweetalert2';
import styles from './Navigation.module.scss';
import DesignImg from '../../assets/img/design_icon.png';
import HistoryImg from '../../assets/img/history_icon.png';
import ArtImg from '../../assets/img/art_icon.png';

const Navigation = () => {
    const faculties = [
        {
            img: DesignImg,
            title: "Design",
            description: "The Faculty of Design offers modern teaching technologies in IT and applied fields",
        },
        {
            img: HistoryImg,
            title: "History",
            description: "Faculty of History presents a huge collection of knowledge about the history of design and art",
        },
        {
            img: ArtImg,
            title: "Art",
            description: "Faculty of Art offers the creation of new artistic preferences in drawing, painting",
        },
    ];

    const handleClick = (title) => {
        Swal.fire({
            title: `${title} - Coming Soon!`,
            text: "This section is under development. Stay tuned!",
            icon: "info",
            confirmButtonText: "OK",
            confirmButtonColor: "#3085d6",
            background: "#fefefe",
        });
    };

    return (
        <div className={styles.Navigation}>
            {faculties.map((faculty, index) => (
                <a
                    key={index}
                    href="#"
                    className={styles.facultyItem}
                    onClick={(e) => {
                        e.preventDefault();
                        handleClick(faculty.title);
                    }}
                >
                    <img src={faculty.img} alt={faculty.title} className={styles.facultyImage} />
                    <h2 className={styles.facultyTitle}>{faculty.title}</h2>
                    <span className={styles.facultyDescription}>{faculty.description}</span>
                </a>
            ))}
        </div>
    );
};

export default Navigation;