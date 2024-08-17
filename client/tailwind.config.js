/** @type {import('tailwindcss').Config}   */
import flowbite from "flowbite-react/tailwind";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      fontFamily: {
        Ramaraja: "'Ramaraja', sans-serif",
        Teko: "'Teko', sans-serif",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
