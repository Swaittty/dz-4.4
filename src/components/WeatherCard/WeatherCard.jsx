import styles from "./WeatherCard.module.css";

export const WeatherCard = ({ city, data }) => {
    return (
        <div className={styles.card}>
            <h2 className={styles.city}>{city}</h2>
            <div className={styles.main}>
                <span className={styles.icon}>{data.icon}</span>
                <span className={styles.temp}>{data.temp}°C</span>
            </div>
            <p className={styles.description}>{data.description}</p>
        </div>
    );
};