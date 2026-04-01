(() => {
    const inputEl = document.getElementById('user-name') as HTMLInputElement | null;
    const btnEl = document.getElementById('submit-btn');

    if (!inputEl || !btnEl) {
        console.error("Element not found!");
        return;
    }

    btnEl.addEventListener('click', () => {
        console.log("Input value:", inputEl.value);
    });
})();