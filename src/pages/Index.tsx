import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Wifi, Globe, Server, Users, ChevronDown } from "lucide-react";

const stats = [
  { value: "12.548+", label: "Desa Terkoneksi", color: "text-primary" },
  { value: "34", label: "Provinsi", color: "text-primary" },
  { value: "150K+", label: "Km Fiber Optik", color: "text-primary" },
  { value: "98%", label: "Cakupan 4G", color: "text-primary" },
];

const features = [
  {
    icon: Wifi,
    title: "Infrastruktur Digital",
    description: "Membangun jaringan telekomunikasi yang menjangkau seluruh pelosok Indonesia",
  },
  {
    icon: Globe,
    title: "Akses Internet",
    description: "Menyediakan akses internet berkualitas untuk daerah 3T",
  },
  {
    icon: Server,
    title: "Pusat Data",
    description: "Mendukung transformasi digital dengan infrastruktur data modern",
  },
  {
    icon: Users,
    title: "Literasi Digital",
    description: "Meningkatkan kemampuan digital masyarakat Indonesia",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-20">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Badan Aksesibilitas Telekomunikasi dan Informasi
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-up" style={{ animationDelay: "100ms" }}>
              Indonesia Terkoneksi,<br />
              <span className="text-gradient">Semakin Digital</span><br />
              Semakin Maju
            </h1>

            <p className="text-muted-foreground text-lg lg:text-xl max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "200ms" }}>
              Mewujudkan pemerataan akses telekomunikasi dan informasi di seluruh wilayah Indonesia untuk membangun masyarakat digital yang inklusif dan berdaya saing.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "300ms" }}>
              <Link
                to="/layanan"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all glow"
              >
                Jelajahi Layanan
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/profil/sejarah"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-secondary text-foreground font-semibold hover:bg-secondary/80 transition-all border border-border"
              >
                Tentang Kami
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 lg:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-4 animate-fade-up" style={{ animationDelay: "400ms" }}>
            {stats.map((stat, index) => (
              <div key={index} className="glass rounded-xl p-5 text-center">
                <div className={`text-3xl lg:text-4xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-muted-foreground" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-3 block">Layanan Kami</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Membangun Indonesia Digital
            </h2>
            <p className="text-muted-foreground">
              Berbagai program strategis untuk mewujudkan konektivitas digital di seluruh Indonesia
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-6 hover:scale-105 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5" />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="glass rounded-3xl p-8 lg:p-16 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Siap Bergabung dengan Transformasi Digital?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Akses berbagai layanan dan program BAKTI untuk mendukung kemajuan digital Indonesia
            </p>
            <Link
              to="/portal"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all glow"
            >
              Portal Layanan
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
