(() => {
    preventDefault(e);
    document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.handleFormData');
    console.log("Form");
    form.onsubmit = () => {
        const data = JSON.stringify({
            'album': form.album.value,
            'fk_land': form.fk_land.value
        });
    };
})();
