import './globals.css';
import type { Metadata } from 'next';
import Mont from 'next/font/local';

const MontFont = Mont({ src: '../../public/fonts/Mont-SemiBold.woff' });
export const metadata: Metadata = {
  title: 'Sber Afisha',
  description: 'Расписания всех мероприятий Екатеринбурга на 2023 год и удобная покупка билетов',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className={MontFont.className}>{children}</body>
    </html>
  );
}
