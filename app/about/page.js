import Navbar from "../components/Navbar"; // Impor Navbar

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navbar */}
      <Navbar />

      {/* Header */}
      <header className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-10 shadow-md">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            About Bank Finder
          </h1>
          <p className="mt-4 text-lg md:text-xl font-light text-white opacity-90">
            Aplikasi yang memudahkan Anda menemukan informasi bank di Indonesia.
          </p>
        </div>
      </header>

      {/* Content Section */}
      <main className="container mx-auto py-10 px-6 md:px-12">
        <section className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-6">
            Apa itu Bank Finder?
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-justify">
            <span className="font-semibold">Bank Finder</span> adalah aplikasi
            yang dirancang untuk mempermudah pengguna dalam mencari informasi
            terkait bank di seluruh Indonesia. Dengan antarmuka yang sederhana
            dan intuitif, Anda dapat dengan mudah menemukan informasi seperti
            nama bank, alamat, nomor telepon, dan lainnya.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-6">
            Fitur Utama
          </h2>
          <ul className="list-disc list-inside text-lg md:text-xl leading-relaxed space-y-4">
            <li>Pencarian bank berdasarkan nama atau kata kunci tertentu.</li>
            <li>
              Informasi lengkap termasuk alamat, nomor telepon, dan situs web.
            </li>
            <li>Antarmuka yang responsif dan mudah digunakan.</li>
            <li>Pagination untuk navigasi data yang efisien.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-6">
            Tujuan Kami
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-justify">
            Tujuan utama kami adalah memberikan solusi yang praktis dan cepat
            bagi masyarakat untuk mengakses informasi perbankan. Kami percaya
            bahwa transparansi dan aksesibilitas informasi adalah kunci untuk
            membangun hubungan yang lebih baik antara bank dan nasabah.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 text-center py-6">
        <p className="text-gray-600">
          &copy; {new Date().getFullYear()} Bank Finder. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
