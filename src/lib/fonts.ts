import localFont from 'next/font/local';

// Menginisialisasi font Parisienne
export const parisienne = localFont({
  src: '../../public/fonts/Parisienne-Regular.ttf', // Sesuaikan jumlah '../' dengan struktur foldermu
  variable: '--font-parisienne',
  display: 'swap',
});

// Menginisialisasi font Roboto untuk teks reguler
export const roboto = localFont({
  src: '../../public/fonts/Roboto-Regular.ttf',
  variable: '--font-roboto',
  display: 'swap',
});