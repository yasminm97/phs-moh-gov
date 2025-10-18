
// tailwind.config.js
module.exports = {
    content: [
        "./pages/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                ministry: {
                    green: "#006633",   // primary
                    red: "#C8102E",     // accent
                    gold: "#B89D4F",    // optional
                    soft: "#F4F5F7",    // soft bg
                    charcoal: "#2B2B2B" // text
                }
            },
            borderRadius: {
                xl: "12px",
            }
        },
    },
    plugins: [],
}
