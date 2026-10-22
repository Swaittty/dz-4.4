import { useEffect, useState } from "react";
import styles from "./SearchInput.module.css";

export const SearchInput = ({ onSearch }) => {
    const [value, setValue] = useState("");

    useEffect(() => {
        const timer = setTimeout(() => {
            onSearch(value.trim());
        }, 500);

        return () => clearTimeout(timer);
    }, [value, onSearch]);

    return (
        <div className={styles.wrapper}>
            <input
                className={styles.input}
                type="text"
                placeholder="Введите город (London, Paris, Tokyo, Toronto)"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </div>
    );
};