import styles from "./ErrorMessage.module.css";

export const ErrorMessage = ({ city }) => (
    <div className={styles.error}>
        Город «{city}» не найден. Попробуйте: London, Paris, Tokyo, Toronto.
    </div>
);