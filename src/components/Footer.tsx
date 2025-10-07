import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";
import universityLogo from "@/assets/univeee-logo.png";
import techverseLogo from "@/assets/techverse-logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={universityLogo} alt="University" className="h-12 w-12 rounded-full" />
              <span className="text-black font-bold text-xl">×</span>
              <img src={techverseLogo} alt="Techverse" className="h-12 w-12 rounded-full" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">Tech Verse</h3>
            <p className="text-sm text-muted-foreground">
             Official tech club of CT University, fostering innovation, coding, and collaboration among students through workshops, hackathons, and projects.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Gallery", "Team", "Sponsors", "Winners", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin size={18} className="mt-0.5 flex-shrink-0 text-primary" />
                <span>CT University, Punjab, India</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail size={18} className="flex-shrink-0 text-primary" />
                <span>techverse@ctuniversity.edu</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone size={18} className="flex-shrink-0 text-primary" />
                <span>+91 XXX XXX XXXX</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Follow Us</h4>
            <div className="flex gap-3">
              
              <a
                href="#"
                className="p-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-all"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="p-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="p-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-all"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Join our community and stay updated with the latest news and events.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Tech Verse club. All rights reserved. by School of Engineering and Technology , CT University.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
