import Image from "next/image";
import { Phone, Mail, Globe, MapPin } from "lucide-react";

export default function Page() {
  return (
    <div className="h-screen flex flex-col bg-[#f0f2f5] text-[#1a2744] overflow-hidden">
      {/* Top accent bar */}
      <div className="h-1.5 bg-gradient-to-r from-[#1a2744] via-[#0098a0] to-[#1a2744] flex-shrink-0" />

      {/* Header */}
      <header className="px-6 sm:px-10 py-2 flex items-center justify-between max-w-7xl mx-auto w-full flex-shrink-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MORIOX-Pharma-GvZdvqnJJTWk17r49dhbBNdMUeXhcV.png"
          alt="MORIOX Pharma"
          width={220}
          height={76}
          priority
          className="h-36 sm:h-48 w-auto"
        />
        <div className="flex items-center gap-2 text-xs font-medium text-[#0098a0] bg-[#0098a0]/10 px-3 py-1.5 rounded-full">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0098a0] opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0098a0]" />
          </span>
          Coming Soon
        </div>
      </header>

      {/* Main — fills remaining space */}
      <main className="flex-1 flex items-center max-w-7xl mx-auto w-full px-6 sm:px-10 min-h-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full">
          {/* Left — Text */}
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1a2744]/5 border border-[#1a2744]/10 text-xs font-medium text-[#1a2744]/70">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0098a0] animate-pulse" />
              Website Under Development
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-[#1a2744]">
              Innovating
              <br />
              <span className="text-[#0098a0]">Healthcare</span>
              <br />
              Solutions
            </h1>

            <p className="text-sm sm:text-base text-[#1a2744]/60 leading-relaxed max-w-md">
              A comprehensive pharmaceutical platform for healthcare
              professionals across India. Launching soon.
            </p>

            {/* Contact */}
            <div className="flex flex-col gap-2.5 text-sm pt-1">
              <a
                href="tel:+917069970599"
                className="flex items-center gap-3 text-[#1a2744]/70 hover:text-[#0098a0] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#0098a0]" />
                +91 70699 70599
              </a>
              <a
                href="mailto:info@morioxpharma.com"
                className="flex items-center gap-3 text-[#1a2744]/70 hover:text-[#0098a0] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#0098a0]" />
                info@morioxpharma.com
              </a>
              <a
                href="https://www.morioxpharma.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#1a2744]/70 hover:text-[#0098a0] transition-colors"
              >
                <Globe className="w-4 h-4 text-[#0098a0]" />
                www.morioxpharma.com
              </a>
            </div>
          </div>

          {/* Right — Info Card */}
          <div className="relative">
            <div className="absolute -top-8 -right-8 w-48 h-48 bg-[#0098a0]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative bg-white rounded-2xl border border-[#1a2744]/10 shadow-lg shadow-[#1a2744]/5 overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-[#1a2744] to-[#0098a0]" />

              <div className="p-6 sm:p-8 space-y-5">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1a2744]">
                    MORIOX PHARMA
                  </h2>
                  <p className="text-xs sm:text-sm font-semibold text-[#0098a0] tracking-wide mt-1">
                    PRIVATE LIMITED
                  </p>
                  <p className="text-xs text-[#1a2744]/50 italic mt-2">
                    Innovating Healthcare Solutions
                  </p>
                </div>

                <div className="h-px bg-gradient-to-r from-[#0098a0]/30 via-[#0098a0]/10 to-transparent" />

                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#0098a0]">
                    <MapPin className="w-3.5 h-3.5" />
                    Registered Office
                  </div>
                  <p className="text-xs text-[#1a2744]/70 leading-relaxed pl-5.5">
                    E/122 B Electronics Estate, GIDC,
                    <br />
                    Gandhinagar, Gujarat 382028, India
                  </p>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#0098a0]">
                    <MapPin className="w-3.5 h-3.5" />
                    Corporate Office
                  </div>
                  <p className="text-xs text-[#1a2744]/70 leading-relaxed pl-5.5">
                    316 Vinayak Saral Courtyard, Near PDEU
                    <br />
                    Metro Station, Gift City Road, Raysan,
                    <br />
                    Gandhinagar, Gujarat 382007
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-6 sm:px-10 py-4 border-t border-[#1a2744]/10 bg-white/50 flex-shrink-0">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#1a2744]/40">
          <p>&copy; {new Date().getFullYear()} MORIOX Pharma Private Limited</p>
          <p>Innovating Healthcare Solutions</p>
        </div>
      </footer>
    </div>
  );
}
