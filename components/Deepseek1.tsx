import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  Store,
  Gamepad2,
  Twitter,
  Instagram,
  Facebook,
  Github,
  Mail,
  MapPin,
  Phone,
  ChevronRight,
  Rocket,
  Award,
  TrendingUp,
  Sparkles,
  Bookmark,
} from "lucide-react";

const Deepseek1 = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[#e91e3f]/20 bg-gradient-to-b from-black to-neutral-950 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_#e91e3f10,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#9333ea10,_transparent_50%)]" />

      {/* Animated Lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#e91e3f]/50 to-transparent" />

      <div className="relative max-container px-4 md:px-6 py-12 md:py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Section - 4 columns */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3 group">
              <div className="relative size-14 transform group-hover:scale-110 transition-transform duration-300">
                <div className="absolute inset-0 bg-[#e91e3f]/20 rounded-full blur-xl group-hover:blur-2xl transition-all" />
                <Image
                  src="/logo-red.png"
                  alt="Noxus"
                  fill
                  sizes="56px"
                  className="object-contain relative z-10"
                />
              </div>
              <div>
                <p className="text-3xl font-bold font-orbitron tracking-wide bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                  Noxus
                </p>
                <span className="text-xs text-[#e91e3f] font-medium">
                  Game Discovery Platform
                </span>
              </div>
            </div>

            <p className="text-sm text-neutral-400 leading-relaxed">
              <span className="text-white font-semibold">Noxus</span> is your
              ultimate gaming companion. Discover top-rated titles, track new
              releases, and build your dream wishlist across every major
              platform — all powered by comprehensive data from{" "}
              <span className="text-white font-semibold">RAWG</span>.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <StatCard
                icon={<Gamepad2 className="w-4 h-4" />}
                value="50K+"
                label="Games"
              />
              <StatCard
                icon={<Store className="w-4 h-4" />}
                value="20+"
                label="Stores"
              />
              <StatCard
                icon={<Heart className="w-4 h-4" />}
                value="100K+"
                label="Wishlists"
              />
            </div>
          </div>

          {/* Quick Links - 2 columns */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <span className="w-1 h-4 bg-[#e91e3f] rounded-full" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              <FooterLink
                href="/discover"
                icon={<Rocket className="w-4 h-4" />}
                label="Discover Games"
              />
              <FooterLink
                href="/browse"
                icon={<TrendingUp className="w-4 h-4" />}
                label="Browse All"
              />
              <FooterLink
                href="/stores"
                icon={<Store className="w-4 h-4" />}
                label="Game Stores"
              />
              <FooterLink
                href="/wishlist"
                icon={<Bookmark className="w-4 h-4" />}
                label="My Wishlist"
              />
              <FooterLink
                href="/free-games"
                icon={<Sparkles className="w-4 h-4" />}
                label="Free Games"
              />
            </ul>
          </div>

          {/* Categories - 2 columns */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <span className="w-1 h-4 bg-[#e91e3f] rounded-full" />
              Categories
            </h3>
            <ul className="space-y-3">
              <FooterLink href="/genre/action" label="Action" badge="124" />
              <FooterLink href="/genre/rpg" label="RPG" badge="89" />
              <FooterLink href="/genre/shooter" label="Shooter" badge="67" />
              <FooterLink
                href="/genre/adventure"
                label="Adventure"
                badge="103"
              />
              <FooterLink href="/genre/strategy" label="Strategy" badge="45" />
            </ul>
          </div>

          {/* Contact & Social - 4 columns */}
          <div className="lg:col-span-4 space-y-6">
            {/* Newsletter */}
            <div className="bg-gradient-to-br from-neutral-900/50 to-neutral-950/50 rounded-xl border border-neutral-800 p-5">
              <h3 className="text-white font-semibold mb-2">Stay Updated</h3>
              <p className="text-xs text-neutral-400 mb-4">
                Get weekly updates on new releases and free games.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-neutral-800/50 border border-neutral-700 rounded-lg text-white text-sm placeholder-neutral-500 focus:outline-none focus:border-[#e91e3f] transition-colors"
                />
                <button className="px-4 py-2 bg-[#e91e3f] hover:bg-[#c01030] rounded-lg text-white text-sm font-medium transition-colors whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <ContactInfo
                icon={<Mail className="w-4 h-4" />}
                text="hello@noxus.com"
              />
              <ContactInfo
                icon={<MapPin className="w-4 h-4" />}
                text="San Francisco, CA"
              />
              <ContactInfo
                icon={<Phone className="w-4 h-4" />}
                text="+1 (555) 123-4567"
              />
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <SocialLink
                href="https://twitter.com"
                icon={<Twitter className="w-4 h-4" />}
                label="Twitter"
              />
              <SocialLink
                href="https://instagram.com"
                icon={<Instagram className="w-4 h-4" />}
                label="Instagram"
              />
              <SocialLink
                href="https://facebook.com"
                icon={<Facebook className="w-4 h-4" />}
                label="Facebook"
              />
              <SocialLink
                href="https://github.com"
                icon={<Github className="w-4 h-4" />}
                label="GitHub"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-neutral-800/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-xs">
              <p className="text-neutral-500">
                © {currentYear} Noxus. All rights reserved.
              </p>
              <span className="w-1 h-1 bg-neutral-700 rounded-full" />
              <p className="text-neutral-500">
                Powered by <span className="text-[#e91e3f]">RAWG</span>
              </p>
            </div>

            <div className="flex items-center gap-4 text-xs">
              <Link
                href="/privacy"
                className="text-neutral-500 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <span className="w-1 h-1 bg-neutral-700 rounded-full" />
              <Link
                href="/terms"
                className="text-neutral-500 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <span className="w-1 h-1 bg-neutral-700 rounded-full" />
              <Link
                href="/cookies"
                className="text-neutral-500 hover:text-white transition-colors"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#e91e3f]/30 to-transparent" />
    </footer>
  );
};

// Stat Card Component
const StatCard = ({ icon, value, label }: any) => (
  <div className="bg-neutral-900/30 rounded-lg p-2 text-center border border-neutral-800/50">
    <div className="text-[#e91e3f] mb-1 flex justify-center">{icon}</div>
    <div className="text-sm font-bold text-white">{value}</div>
    <div className="text-[10px] text-neutral-500">{label}</div>
  </div>
);

// Footer Link Component
const FooterLink = ({ href, icon, label, badge }: any) => (
  <li>
    <Link
      href={href}
      className="group flex items-center justify-between text-sm text-neutral-400 hover:text-white transition-colors"
    >
      <span className="flex items-center gap-2">
        {icon && (
          <span className="text-neutral-600 group-hover:text-[#e91e3f] transition-colors">
            {icon}
          </span>
        )}
        {label}
      </span>
      {badge ? (
        <span className="text-[10px] px-1.5 py-0.5 bg-neutral-800 rounded-full text-neutral-500">
          {badge}
        </span>
      ) : (
        <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all" />
      )}
    </Link>
  </li>
);

// Contact Info Component
const ContactInfo = ({ icon, text }: any) => (
  <div className="flex items-center gap-3 text-sm">
    <div className="text-neutral-600">{icon}</div>
    <span className="text-neutral-400 hover:text-white transition-colors cursor-default">
      {text}
    </span>
  </div>
);

// Social Link Component
const SocialLink = ({ href, icon, label }: any) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 bg-neutral-900/50 hover:bg-[#e91e3f] rounded-lg border border-neutral-800 hover:border-[#e91e3f]/30 transition-all group"
    aria-label={label}
  >
    <span className="text-neutral-400 group-hover:text-white transition-colors">
      {icon}
    </span>
  </Link>
);

export default Deepseek1;
