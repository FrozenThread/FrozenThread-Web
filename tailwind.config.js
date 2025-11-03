/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            // This is where we add your custom fonts
            fontFamily: {
                'copperplate-bold': ['CopperplateGothicBold', 'sans-serif'],
                'anton-regular': ['AntonRegular', 'sans-serif'],
                'stage-wander': ['StageWander', 'sans-serif'],
            },
        },
    },
    plugins: [],
}