import styles from "./Forecast.module.css";

export const Forecast = ({ days }) => {
    return (
        <div className={styles.forecast}>
            <h3 className={styles.title}>Прогноз на неделю</h3>
            <ul className={styles.list}>
                {days.map((d, index) => (
                    <li key={index} className={styles.item}>
                        <span className={styles.day}>{d.day}</span>
                        <span className={styles.icon}>{d.icon}</span>
                        <span className={styles.temp}>{d.temp}13</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};