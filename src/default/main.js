import "./main.less";



document.querySelector("h2").innerText = `${import.meta.env.VITE_APP_NAME}`

document.querySelector("main p").innerHTML = `${
    Object.values(app_pages).map((pages, index) => {
        return `<a href="${app_base}${pages}">${Object.keys(app_pages)[index]}</a>`
    }).join("")
}`