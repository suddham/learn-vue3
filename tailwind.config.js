module.exports = {
    purge:
    {
        content: ["./src/**/*.html",
            "./src/**/*.js",],
        options: {
            keyframes: true
        }
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {},
    plugins: [
        require("@tailwindcss/typography"),
        require("@tailwindcss/forms")
    ],
};
