let lightmode = localStorage.getItem('lightmode') 
const themeSwitch = document.getElementById('theme-switch')
const menuThemeSwitch = document.getElementById('menu-theme-switch')
// Enable light mode by adding class and saving state
const enableLightMode = () => {
    document.body.classList.add('lightmode')
    localStorage.setItem('lightmode', 'active')
}

// Disable light mode by removing class and clearing state
const disableLightMode = () => {
    document.body.classList.remove('lightmode')
    localStorage.setItem('lightmode', null)
}

// If light mode was previously active, enable it on page load
if(lightmode === 'active') enableLightMode()

// Toggle light mode on button click
themeSwitch.addEventListener("click", () => { 
    lightmode = localStorage.getItem('lightmode')
    lightmode !== "active" ? enableLightMode() : disableLightMode()
})
// Toggle light mode on mobile menu button click
menuThemeSwitch.addEventListener("click", () => { 
    lightmode = localStorage.getItem('lightmode')
    lightmode !== "active" ? enableLightMode() : disableLightMode()
})
