import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProfileSidebar from "@/components/ProfileSidebar";
import Timeline from "@/components/Timeline";

const timelineEvents = [
  {
    year: "2006",
    title: "Lahirnya BTIP",
    description:
      "Balai Telekomunikasi dan Informatika Pedesaan (BTIP) didirikan berdasarkan Peraturan Menteri Komunikasi dan Informatika Nomor: 35/PER/M.Kominfo/11/2006. BTIP menerapkan pola pengelolaan keuangan Badan Layanan Umum berdasarkan Keputusan Menteri Keuangan Nomor: 1006/KMK.05/2006.",
  },
  {
    year: "2010",
    title: "Transformasi ke BP3TI",
    description:
      "BTIP bertransformasi menjadi Balai Penyedia dan Pengelola Pembiayaan Telekomunikasi dan Informatika (BP3TI) pada tanggal 19 November 2010 berdasarkan Peraturan Menteri Komunikasi dan Informatika Nomor: 18/PER/M/KOMINFO/11/2010.",
  },
  {
    year: "2017",
    title: "Menjadi BP3TI Non-Eselon",
    description:
      "BP3TI berubah menjadi unit pelaksana teknis non eselon berdasarkan Peraturan Menteri Komunikasi dan Informatika Nomor 2 Tahun 2017. Perubahan struktur dari process-based menjadi output-based, yaitu infrastruktur dan ekosistem.",
  },
  {
    year: "2018",
    title: "Menjadi BAKTI",
    description:
      "Perubahan nomenklatur menjadi BAKTI (Badan Aksesibilitas Telekomunikasi dan Informasi) ditetapkan melalui Peraturan Menteri Komunikasi dan Informatika Republik Indonesia Nomor 3 Tahun 2018 tertanggal 23 Mei 2018.",
    highlight: true,
  },
];

const Sejarah = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 lg:pt-24">
        <div className="relative h-64 lg:h-80 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10" />
          
          <div className="container mx-auto px-4 lg:px-8 h-full flex items-center relative z-20">
            <div className="animate-fade-up">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Profil
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-3">
                Sejarah <span className="text-gradient">BAKTI</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-xl">
                Perjalanan transformasi dalam mewujudkan pemerataan akses telekomunikasi dan informasi di Indonesia
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            <ProfileSidebar />

            <main className="flex-1 space-y-10">
              {/* Introduction */}
              <article className="glass rounded-2xl p-6 lg:p-8 animate-fade-up">
                <h2 className="text-2xl font-bold text-foreground mb-4">Sejarah Singkat</h2>
                
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="lg:w-2/5">
                    <div className="relative rounded-xl overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
                        alt="BAKTI Building"
                        className="w-full h-48 lg:h-64 object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background to-transparent">
                        <span className="text-primary text-sm font-semibold">BAKTI MILESTONE</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:w-3/5 space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      <strong className="text-foreground">Badan Aksesibilitas Telekomunikasi dan Informasi (BAKTI)</strong> lahir pada tahun 2006. Semula organisasi ini bernama Balai Telekomunikasi dan Informatika Pedesaan (BTIP) sesuai nomenklatur yang ditetapkan Peraturan Menteri Komunikasi dan Informatika.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Seiring dengan pesatnya perkembangan di bidang Teknologi Informasi dan Komunikasi (TIK) dan tuntutan akan ketersediaan layanan TIK di seluruh lapisan masyarakat, BAKTI terus bertransformasi untuk meningkatkan fleksibilitas, efektivitas, dan produktivitas pelaksanaan tugas dan fungsinya.
                    </p>
                  </div>
                </div>
              </article>

              {/* Timeline */}
              <div className="animate-fade-up" style={{ animationDelay: "200ms" }}>
                <h2 className="text-2xl font-bold text-foreground mb-6">Perjalanan Transformasi</h2>
                <Timeline events={timelineEvents} />
              </div>

              {/* Detail Content */}
              <article className="space-y-6 animate-fade-up" style={{ animationDelay: "400ms" }}>
                <div className="glass rounded-2xl p-6 lg:p-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">Makna Nama BAKTI</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Sejak Agustus 2017, Menteri Komunikasi dan Informatika mencanangkan nama baru bagi BP3TI menjadi <strong className="text-primary">BAKTI</strong>. Perubahan nama ini bertujuan untuk mempermudah publikasi dan branding instansi.
                  </p>
                  <div className="mt-4 p-4 bg-primary/5 rounded-xl border border-primary/20">
                    <p className="text-foreground italic">
                      "BAKTI menurut Kamus Besar Bahasa Indonesia memiliki arti yang positif, yaitu <span className="text-primary font-semibold">tunduk dan hormat, perbuatan yang menyatakan setia</span>. Hal ini sejalan dengan tugas dan fungsi untuk memeratakan akses telekomunikasi dan informatika di seluruh Indonesia, dan melayani masyarakat."
                    </p>
                  </div>
                </div>

                <div className="glass rounded-2xl p-6 lg:p-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">Tugas dan Tanggung Jawab</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    BAKTI merupakan unit organisasi noneselon di lingkungan Kementerian Komunikasi dan Informatika yang menerapkan pola Pengelolaan Keuangan Badan Layanan Umum. BAKTI berada di bawah dan bertanggung jawab kepada Menteri serta dipimpin oleh Direktur Utama.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Melaksanakan pengelolaan pembiayaan Kewajiban Pelayanan Universal",
                      "Penyediaan infrastruktur telekomunikasi dan informatika",
                      "Memperkecil kesenjangan digital antara wilayah perkotaan dan pedesaan",
                      "Melayani kebutuhan TIK masyarakat Indonesia",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-muted-foreground">
                        <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                          {index + 1}
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </main>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sejarah;
