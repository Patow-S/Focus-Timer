function changeColorMode(){
    const body = document.body;
    const darkModeButton = document.getElementById("dark-mode");
    const lightModeButton = document.getElementById("light-mode");

    body.classList.toggle("dark");
    darkModeButton.classList.toggle("hide");
    lightModeButton.classList.toggle("hide");
}
