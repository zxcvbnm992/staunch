/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-14px)' } },
        blob: { '0%,100%': { transform: 'translate(0,0) scale(1)' }, '50%': { transform: 'translate(60px,40px) scale(1.15)' } },
        shimmer: { to: { backgroundPosition: '200% center' } },
        fadeUp: { from: { opacity: '0', transform: 'translateY(30px)' }, to: { opacity: '1', transform: 'none' } },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        blob: 'blob 12s ease-in-out infinite',
        shimmer: 'shimmer 4s linear infinite',
        fadeUp: 'fadeUp .8s ease-out both',
      },
    },
  },
  plugins: [],
}