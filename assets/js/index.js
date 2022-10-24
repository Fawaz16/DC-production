//Load the saved state on DOMContentLoaded
window.addEventListener("DOMContentLoaded", () => {
    let currentTheme = checkThemeState();
    changeThemeState(currentTheme);
});
