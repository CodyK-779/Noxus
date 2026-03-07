import Image from "next/image";
import Link from "next/link";
import {
  Twitter,
  Gamepad2,
  Calendar,
  Star,
  Flame,
  Newspaper,
  Heart,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  Github,
  Chrome,
  Apple,
} from "lucide-react";

const Deepseek2 = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-neutral-950 via-neutral-900 to-black border-t border-[#e91e3f]/30 pt-16 pb-8 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#e91e3f]/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#e91e3f]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#e91e3f]/20 to-transparent" />
      </div>

      <div className="max-container relative z-10">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-4 lg:col-span-1">
            <div className="flex items-center gap-3 group">
              <div className="relative size-12 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <Image
                  src="/logo-red.png"
                  alt="Noxus Logo"
                  fill
                  sizes="48px"
                  className="object-contain drop-shadow-[0_0_10px_rgba(233,30,63,0.5)]"
                />
              </div>
              <p className="text-3xl font-bold font-orbitron tracking-wider bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
                Noxus
              </p>
            </div>

            <p className="text-sm leading-relaxed text-neutral-400 max-w-xs">
              <span className="text-white font-semibold">Noxus</span> is your
              ultimate gaming companion. Discover top-rated titles, track new
              releases, and curate your wishlist across all major platforms.
            </p>

            {/* Data source credit */}
            <div className="flex items-center gap-2 pt-2">
              <span className="text-xs text-neutral-500">Powered by</span>
              <span className="text-sm font-semibold text-white/70 hover:text-white transition-colors">
                RAWG
              </span>
            </div>

            {/* Social links with Lucide */}
            <div className="flex items-center gap-3 pt-4">
              {[
                {
                  icon: Twitter,
                  href: "https://twitter.com",
                  label: "Twitter",
                },
                { icon: Github, href: "https://github.com", label: "GitHub" },
                {
                  icon: Instagram,
                  href: "https://instagram.com",
                  label: "Instagram",
                },
                {
                  icon: Youtube,
                  href: "https://youtube.com",
                  label: "YouTube",
                },
                {
                  icon: Facebook,
                  href: "https://facebook.com",
                  label: "Facebook",
                },
              ].map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/social"
                  aria-label={social.label}
                >
                  <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-[#e91e3f] hover:border-[#e91e3f] hover:text-white hover:shadow-lg hover:shadow-[#e91e3f]/25 transition-all duration-300">
                    <social.icon className="size-4 group-hover/social:scale-110 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white relative inline-block">
              Explore
              <span className="absolute -bottom-1 left-0 w-10 h-0.5 bg-gradient-to-r from-[#e91e3f] to-transparent rounded-full" />
            </h3>
            <ul className="space-y-3">
              {[
                { icon: Flame, label: "Popular Games", href: "/popular" },
                { icon: Star, label: "Top Rated", href: "/top-rated" },
                { icon: Calendar, label: "Upcoming", href: "/upcoming" },
                { icon: Newspaper, label: "News", href: "/news" },
                { icon: Gamepad2, label: "Platforms", href: "/platforms" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-3 text-neutral-400 hover:text-white group/link"
                  >
                    <span className="w-6 h-6 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center group-hover/link:bg-[#e91e3f] group-hover/link:border-[#e91e3f] transition-colors">
                      <link.icon className="size-3" />
                    </span>
                    <span className="text-sm group-hover/link:translate-x-1 transition-transform">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Legal */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white relative inline-block">
              Support
              <span className="absolute -bottom-1 left-0 w-10 h-0.5 bg-gradient-to-r from-[#e91e3f] to-transparent rounded-full" />
            </h3>
            <ul className="space-y-3">
              {[
                "FAQ",
                "Contact Us",
                "Privacy Policy",
                "Terms of Service",
                "Cookie Policy",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-sm text-neutral-400 hover:text-white hover:underline underline-offset-4 decoration-[#e91e3f]/50 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4 lg:col-span-1">
            <h3 className="text-lg font-semibold text-white relative inline-block">
              Stay Updated
              <span className="absolute -bottom-1 left-0 w-10 h-0.5 bg-gradient-to-r from-[#e91e3f] to-transparent rounded-full" />
            </h3>
            <p className="text-sm text-neutral-400">
              Get the latest game releases and updates straight to your inbox.
            </p>

            <div className="space-y-3">
              <div className="relative group">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-xl text-white text-sm placeholder:text-neutral-600 focus:outline-none focus:border-[#e91e3f] focus:ring-2 focus:ring-[#e91e3f]/20 transition-all"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-1.5 bg-[#e91e3f] hover:bg-[#d41b38] text-white text-sm font-medium rounded-lg transition-colors">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-neutral-600">
                By subscribing, you agree to our Privacy Policy.
              </p>
            </div>

            {/* App store badges with Lucide */}
            <div className="flex items-center gap-3 pt-4">
              <button className="flex items-center gap-2 px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-xl hover:border-[#e91e3f] hover:bg-neutral-800/50 transition-all group/app">
                <Apple className="size-5 text-white" />
                <div className="text-left">
                  <p className="text-[10px] text-neutral-400">Download on</p>
                  <p className="text-xs font-semibold text-white">App Store</p>
                </div>
              </button>

              <button className="flex items-center gap-2 px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-xl hover:border-[#e91e3f] hover:bg-neutral-800/50 transition-all group/app">
                <Chrome className="size-5 text-white" />
                <div className="text-left">
                  <p className="text-[10px] text-neutral-400">Get it on</p>
                  <p className="text-xs font-semibold text-white">
                    Google Play
                  </p>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="relative pt-8 mt-8">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-[#e91e3f] to-transparent" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-neutral-600">
              © {currentYear} Noxus. All rights reserved.
            </p>

            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="text-xs text-neutral-600 hover:text-neutral-400 transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="text-xs text-neutral-600 hover:text-neutral-400 transition-colors"
              >
                Terms
              </Link>
              <Link
                href="/cookies"
                className="text-xs text-neutral-600 hover:text-neutral-400 transition-colors"
              >
                Cookies
              </Link>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-neutral-700">Made with</span>
              <Heart className="size-3 text-[#e91e3f] fill-[#e91e3f] animate-pulse" />
              <span className="text-xs text-neutral-700">for gamers</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Deepseek2;
