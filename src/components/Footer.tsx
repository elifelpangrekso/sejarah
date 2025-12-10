import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">B</span>
              </div>
              <div>
                <span className="text-foreground font-bold text-xl">BAKTI</span>
                <span className="text-muted-foreground text-xs block -mt-1">KOMDIGI</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Badan Aksesibilitas Telekomunikasi dan Informasi - Mewujudkan Indonesia digital yang inklusif.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://facebook.com/BAKTIKomdigi" className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://instagram.com/bakti.komdigi" className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://youtube.com/@baktikomdigi" className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="https://twitter.com/baktikomdigi" className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Navigasi</h4>
            <ul className="space-y-2">
              {["Beranda", "Profil", "Layanan", "Program", "Berita", "Kontak"].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase()}`} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Profil */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Profil</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/profil/sejarah" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  Sejarah
                </Link>
              </li>
              <li>
                <Link to="/profil/organisasi" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  Organisasi
                </Link>
              </li>
              <li>
                <Link to="/profil/visi-misi" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  Visi & Misi
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Kontak</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  Centennial Tower Lt.42-45, Jakarta Selatan
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm">(021) 31936590</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:humas@baktikominfo.id" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  humas@baktikominfo.id
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} BAKTI Komdigi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
