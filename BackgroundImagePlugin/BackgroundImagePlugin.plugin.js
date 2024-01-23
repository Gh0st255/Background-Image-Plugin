/*
* @name BackgroundImagePlugin
* @version 1.0.0
* @description Better Discord Background image plugin
* @author Gh0st.exe
* @source https://github.com/Gh0st255/Background-Image-Plugin.git
* @website https://github.com/Gh0st255/Background-Image-Plugin.git
* @dependencies [{"name": "BetterDiscord", "version": "2.0.0"}]
*/


const pluginCss = `
    /* Your additional CSS styles for the plugin */
    /* For example, you can add styles to customize the appearance */
    #background-image-button {
        background-color: #940606;
        color: #fff;
        padding: 10px;
        border: none;
        cursor: pointer;
        position: fixed;
        top: 10px;
        right: 10px;
        z-index: 9999;
    }
`;

const pluginHtml = `
    <!-- Your additional HTML elements for the plugin -->
    <!-- For example, you can add a button to trigger file selection -->
    <input type="file" id="fileInput" style="display: none;">
    <button id="background-image-button">Choose Background Image</button>
`;

document.head.insertAdjacentHTML('beforeend', `<style>${pluginCss}</style>`);
document.body.insertAdjacentHTML('beforeend', pluginHtml);

document.getElementById('background-image-button').addEventListener('click', () => {
    document.getElementById('fileInput').click();
});

document.getElementById('fileInput').addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const imageUrl = e.target.result;
            setBackgroundImage(imageUrl);
        };
        reader.readAsDataURL(file);
    }
});

function setBackgroundImage(imageUrl) {
    document.documentElement.style.setProperty('--background-image', `url(${imageUrl})`);
}

