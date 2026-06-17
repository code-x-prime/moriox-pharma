import Image from "next/image";
import { Phone, Mail, Globe, MapPin } from "lucide-react";

export default function Page() {
  return (
    <div className="h-screen flex flex-col bg-[#f0f2f5] text-[#1a2744] overflow-hidden">
      {/* Top accent */}
      <div className="h-1 sm:h-1.5 bg-gradient-to-r from-[#1a2744] via-[#0098a0] to-[#1a2744] flex-shrink-0" />

      {/* Header */}
      <header className="px-4 sm:px-10 py-3 sm:py-4 flex items-center justify-between max-w-7xl mx-auto w-full flex-shrink-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MORIOX-Pharma-GvZdvqnJJTWk17r49dhbBNdMUeXhcV.png"
          alt="MORIOX Pharma"
          width={200}
          height={70}
          priority
          className="h-10 sm:h-16 w-auto"
        />
        <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-medium text-[#0098a0] bg-[#0098a0]/10 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full">
          <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0098a0] opacity-60" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-[#0098a0]" />
          </span>
          Coming Soon
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 flex items-center max-w-7xl mx-auto w-full px-4 sm:px-10 min-h-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-center w-full">
          {/* Left — Text */}
          <div className="space-y-3 sm:space-y-5">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-[#1a2744]/5 border border-[#1a2744]/10 text-[10px] sm:text-xs font-medium text-[#1a2744]/70">
              <span className="h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full bg-[#0098a0] animate-pulse" />
              Website Under Development
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-[#1a2744]">
              Innovating
              <br />
              <span className="text-[#0098a0]">Healthcare</span>
              <br />
              Solutions
            </h1>

            <p className="text-xs sm:text-sm lg:text-base text-[#1a2744]/60 leading-relaxed max-w-md">
              A comprehensive pharmaceutical platform for healthcare
              professionals across India. Launching soon.
            </p>

            {/* Contact */}
            <div className="flex flex-col gap-1.5 sm:gap-2.5 text-xs sm:text-sm">
              <a
                href="tel:+917069970599"
                className="flex items-center gap-2 sm:gap-3 text-[#1a2744]/70 hover:text-[#0098a0] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0098a0] flex-shrink-0" />
                +91 70699 70599
              </a>
              <a
                href="mailto:info@morioxpharma.com"
                className="flex items-center gap-2 sm:gap-3 text-[#1a2744]/70 hover:text-[#0098a0] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0098a0] flex-shrink-0" />
                info@morioxpharma.com
              </a>
              <a
                href="https://www.morioxpharma.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 sm:gap-3 text-[#1a2744]/70 hover:text-[#0098a0] transition-colors"
              >
                <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0098a0] flex-shrink-0" />
                www.morioxpharma.com
              </a>
            </div>
          </div>

          {/* Right — Card */}
          <div className="relative">
            <div className="absolute -top-6 -right-6 w-40 h-40 bg-[#0098a0]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative bg-white rounded-xl sm:rounded-2xl border border-[#1a2744]/10 shadow-lg shadow-[#1a2744]/5 overflow-hidden">
              <div className="h-0.5 sm:h-1 bg-gradient-to-r from-[#1a2744] to-[#0098a0]" />

              <div className="p-4 sm:p-6 lg:p-8 space-y-3 sm:space-y-5">
                <div>
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#1a2744]">
                    MORIOX PHARMA
                  </h2>
                  <p className="text-[10px] sm:text-xs lg:text-sm font-semibold text-[#0098a0] tracking-wide mt-0.5 sm:mt-1">
                    PRIVATE LIMITED
                  </p>
                  <p className="text-[10px] sm:text-xs text-[#1a2744]/50 italic mt-1.5 sm:mt-2">
                    Innovating Healthcare Solutions
                  </p>
                </div>

                <div className="h-px bg-gradient-to-r from-[#0098a0]/30 via-[#0098a0]/10 to-transparent" />

                <div className="space-y-1 sm:space-y-1.5">
                  <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-semibold text-[#0098a0]">
                    <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" />
                    Registered Office
                  </div>
                  <p className="text-[10px] sm:text-xs text-[#1a2744]/70 leading-relaxed pl-4 sm:pl-5">
                    E/122 B Electronics Estate, GIDC,
                    <br />
                    Gandhinagar, Gujarat 382028, India
                  </p>
                </div>

                <div className="space-y-1 sm:space-y-1.5">
                  <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-semibold text-[#0098a0]">
                    <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" />
                    Corporate Office
                  </div>
                  <p className="text-[10px] sm:text-xs text-[#1a2744]/70 leading-relaxed pl-4 sm:pl-5">
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
      <footer className="px-4 sm:px-10 py-3 sm:py-4 border-t border-[#1a2744]/10 bg-white/50 flex-shrink-0">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 sm:gap-2 text-[10px] sm:text-xs text-[#1a2744]/40">
          <p>&copy; {new Date().getFullYear()} MORIOX Pharma Private Limited</p>
          <p>Innovating Healthcare Solutions</p>
        </div>
      </footer>
    </div>
  );
}
