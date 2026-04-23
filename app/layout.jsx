import './globals.css';
import { SiteProvider } from '../contexts/SiteContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Savtot in Sri Lanka | סבתות בסרי לנקה',
  description: 'A unique and unforgettable experience designed exclusively for mothers and grandmothers. חוויה ייחודית ובלתי נשכחת שעוצבה במיוחד עבור אימהות וסבתות.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">
      <body>
        <SiteProvider>
          <div className="min-h-screen bg-stone-50 text-stone-800 font-sans selection:bg-teal-200">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </SiteProvider>
      </body>
    </html>
  );
}
