/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      './app/**/*.{js,ts,jsx,tsx,mdx}',
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
      extend: {
          colors: {
              green: '#8AB873',
              black: '#191919',
              black2: '#222',
              lightGreen: '#7AAC5C',
              superLightGreen: '#EBF5E9',
              darkGreen: '#528D3D',
              lightGray: '#7B7B7B',
              gold: '#FFC55C',
              lightGray: '#F8F8FA',
          },
          text: {
              14: '14',
          },
          paddingX: {
              13: '52',
          },
          width: {
              150: '600',
              90: '450',
          },
          margin: {
              15: '60',
          },
          fontFamily: {
            mont: 'Mont',
          },
          border: {
            border-button: '1px solid #EBEBEB',
          }
      },
  },
  plugins: [],
};
