import React, { useState } from "react";
import styles from "./Header_Contact.module.scss";
import img from "../../assets/img/contact_img.png";

const Header_Contact = ({ src = img }) => {
    const [selectedCity, setSelectedCity] = useState(null); // State to track the selected city

    const cities = [
        {
            name: "Tokyo",
            info: {
                location: "Tokyo, Japan",
                coordinates: "35.6895° N, 139.6917° E",
                time: "GMT+9",
            },
        },
        {
            name: "Amsterdam",
            info: {
                location: "Amsterdam, Netherlands",
                coordinates: "52.3676° N, 4.9041° E",
                time: "GMT+1",
            },
        },
        {
            name: "Kiev",
            info: {
                location: "Kyiv, Ukraine",
                coordinates: "50.4501° N, 30.5234° E",
                time: "GMT+2",
            },
        },
        {
            name: "Bali",
            info: {
                location: "Bali, Indonesia",
                coordinates: "8.3405° S, 115.0920° E",
                time: "GMT+8",
            },
        },
        {
            name: "Krakow",
            info: {
                location: "Krakow, Poland",
                coordinates: "50.0647° N, 19.9450° E",
                time: "GMT+1",
            },
        },
    ];

    const handleCityClick = (city) => {
        setSelectedCity(city); // Update the selected city
    };

    return (
        <div className={styles.Header_Contact}>
            <div className={styles.Header_Contact_container}>
                <img src={src} alt="img" />
                <div className={styles.Header_Contact_container_child}>
                    {/* List of cities */}
                    <div>
                        {cities.map((city, index) => (
                            <div
                                key={index}
                                className={styles.cityItem}
                                onClick={() => handleCityClick(city)}
                                style={{ cursor: "pointer", marginBottom: "10px" }}
                            >
                                <h1>{city.name}</h1>
                            </div>
                        ))}
                    </div>
                    {/* Display selected city info */}
                    {selectedCity && (
                        <div className={styles.cityInfo}>
                            <h2>{selectedCity.name}</h2>
                            <p>Location: {selectedCity.info.location}</p>
                            <p>Coordinates: {selectedCity.info.coordinates}</p>
                            <p>Time: {selectedCity.info.time}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header_Contact;