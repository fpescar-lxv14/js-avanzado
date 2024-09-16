export const 
    root = document.getElementById('root'),
    main = document.createElement('main'),
    toggle = {
        className: 'navbar-toggler navbar-toggler-icon',
        "data-bs-target": '.navbar-nav',
        "data-bs-toggle": 'collapse',
    },
    links = [
        { text: "muro", link: "#posts" },
        { text: "fotos", link: "#albums" },
        { text: "amigos", link: "#users" },
    ],
    social = [
        { text: "facebook", link: "https://facebook.com/" },
        { text: "instagram", link: "https://instagram.com/" },
        { text: "twitter", link: "https://twitter.com/" },
    ]