import './globals.scss';
import type { Metadata } from 'next';
import Mont from 'next/font/local';
import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
const MontFont = Mont({ src: '../../public/fonts/Mont-SemiBold.woff' });

export const metadata: Metadata = {
  title: 'I.Afisha',
  description: 'Расписания всех мероприятий Екатеринбурга на 2023 год и удобная покупка билетов',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className={MontFont.className}>
        <Theme>{children}</Theme>
      </body>
    </html>
  );
}
