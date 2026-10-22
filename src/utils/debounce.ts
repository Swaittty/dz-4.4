export function debounce(fn, delay) {
    let timerId = null;

    return (...args) => {
        if (timerId) clearTimeout(timerId);
        timerId = setTimeout(() => {
            fn(...args);
        }, delay);
    };
}