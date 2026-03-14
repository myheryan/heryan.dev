import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mail, MapPin, Briefcase, Code2, Server, Layout, Terminal } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="space-y-20 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-16">
      
      {/* 1. Hero Section & Foto */}
      <section className="flex flex-col-reverse md:flex-row items-center gap-10 pt-8 md:pt-12">
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center rounded-full border border-border/50 bg-secondary/50 px-3 py-1 text-sm font-medium">
            <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
            Tersedia untuk peluang baru
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight lg:text-6xl text-foreground leading-tight">
            Hi, Saya Heryan. <br className="hidden md:block" />
            <span className="text-muted-foreground">Software Engineer.</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
            Saya mengkhususkan diri dalam membangun aplikasi web modern yang cepat, aman, dan dapat diskalakan. Dari antarmuka pengguna yang elegan hingga arsitektur backend yang kompleks.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Button asChild size="lg" className="font-medium">
              <a href="mailto:heryanxd@gmail.com">
                <Mail className="mr-2 h-4 w-4" /> Mari Berdiskusi
              </a>
            </Button>
            <Button asChild variant="secondary" size="lg" className="font-medium">
              <Link href="/projects">
                Lihat Semua Proyek <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative w-48 h-62 md:w-60 md:h-[18rem] flex-shrink-0 mt-8 md:mt-0 ml-4">
          
          {/* Latar Belakang Kertas Abu-abu (Base) */}
          <div className="absolute inset-0 bg-zinc-800/50 border border-zinc-700 -rotate-3 rounded-sm shadow-lg"></div>

          {/* Stiker Tech Stack (Melayang di belakang) */}
          <div className="absolute -right-6 top-12 bg-white text-black text-xs font-bold py-1 px-3 rotate-12 shadow-md border border-gray-200 z-11">
            NEXT.JS
          </div>
          <div className="absolute -right-4 top-24 bg-blue-600 text-white text-xs font-bold py-1 px-3 rotate-6 shadow-md z-11">
            TS
          </div>
          <div className="absolute -left-8 bottom-20 bg-cyan-500 text-white text-xs font-bold py-1 px-3 -rotate-12 shadow-md z-11">
            GO
          </div>

          {/* Frame Polaroid Utama */}
          <div className="absolute inset-0 bg-slate-100 p-3 pb-16 shadow-2xl rotate-2 border border-zinc-300 z-10 hover:rotate-0 hover:scale-[1.02] transition-all duration-500 ease-out">
            
            {/* Area Foto */}
            <div className="relative w-full h-full bg-zinc-900 overflow-hidden border border-zinc-300">
              {/* Jika sudah ada foto, buka komentar baris di bawah ini: */}
              <Image src="/profile.png" alt="Heryan" fill className="object-cover transition-all duration-500" priority />
              
              {/* Placeholder jika belum ada foto */}
              <div className="w-full h-full flex items-center justify-center">
                 <span className="text-zinc-600 font-medium">Foto Heryan</span>
              </div>
            </div>

            {/* Tulisan Tangan di bawah Polaroid */}
            {/* Ganti font-['Tangerine'] dengan class font tulisan tangan Anda */}
            <p className="absolute bottom-4 left-5 text-3xl text-zinc-800 font-['Tangerine'] -rotate-2">
              Heryan.Dev
            </p>
          </div>

          {/* Selotip (Washi Tape) */}
          {/* Selotip Kiri Atas */}
          <div className="absolute -top-4 -left-6 w-24 h-8 bg-blue-200/70 backdrop-blur-sm -rotate-12 z-20 shadow-sm border border-white/20 mix-blend-overlay"></div>
          {/* Selotip Kanan Bawah */}
          <div className="absolute -bottom-4 -right-6 w-24 h-8 bg-yellow-200/70 backdrop-blur-sm -rotate-6 z-20 shadow-sm border border-white/20 mix-blend-overlay"></div>

        </div>
      </section>

      {/* 2. Kredibilitas & Pendekatan Kerja */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">Kredibilitas & Pendekatan</h2>
        <div className="prose prose-zinc dark:prose-invert max-w-none text-muted-foreground leading-relaxed text-lg">
          <p>
            Dengan pengalaman membangun berbagai solusi digital, saya terbiasa menangani siklus pengembangan perangkat lunak secara menyeluruh. Pendekatan saya selalu berpusat pada pemecahan masalah bisnis melalui kode yang bersih dan infrastruktur yang efisien.
          </p>
          <p>
            Saya memiliki rekam jejak dalam mengembangkan portal korporat yang menuntut performa tinggi, merancang sistem dinamis untuk kebutuhan skala *enterprise*, hingga menangani otomatisasi alur kerja seperti pemrosesan dokumen dan distribusi email massal secara andal. 
          </p>
        </div>
      </section>

      {/* 3. Sorotan Pengalaman (Highlight Portofolio) */}
      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight">Pengalaman Kunci</h2>
          <Link href="/projects" className="text-sm font-medium text-primary hover:underline">
            Lihat Detail &rarr;
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Pengalaman 1 */}
          <Card className="bg-card hover:bg-accent/20 transition-colors border-border/50">
            <CardHeader>
              <Briefcase className="h-6 w-6 text-primary mb-2" />
              <CardTitle>Pengembangan Web Portal Korporat</CardTitle>
              <CardDescription>geomining.id</CardDescription>
            </CardHeader>
            <CardContent className="text-muted-foreground text-sm leading-relaxed">
              Bertanggung jawab penuh atas pengembangan dan manajemen website. Fokus pada arsitektur yang SEO-friendly, responsif, dan performa tinggi menggunakan ekosistem Next.js dan TypeScript.
            </CardContent>
          </Card>

          {/* Pengalaman 2 */}
          <Card className="bg-card hover:bg-accent/20 transition-colors border-border/50">
            <CardHeader>
              <Code2 className="h-6 w-6 text-primary mb-2" />
              <CardTitle>Sistem Form Dinamis Enterprise</CardTitle>
              <CardDescription>Internal Tooling</CardDescription>
            </CardHeader>
            <CardContent className="text-muted-foreground text-sm leading-relaxed">
              Membangun platform di mana administrator dapat mendefinisikan *field* form secara dinamis. Dilengkapi dengan kapabilitas pengelolaan data kompleks dan fitur ekspor langsung ke format Microsoft Excel.
            </CardContent>
          </Card>

          {/* Pengalaman 3 */}
          <Card className="bg-card hover:bg-accent/20 transition-colors border-border/50">
            <CardHeader>
              <Server className="h-6 w-6 text-primary mb-2" />
              <CardTitle>Otomatisasi & Distribusi Massal</CardTitle>
              <CardDescription>Sistem E-Certificate & Batch Email</CardDescription>
            </CardHeader>
            <CardContent className="text-muted-foreground text-sm leading-relaxed">
              Merancang sistem untuk mengotomatisasi pembuatan e-sertifikat (contoh kasus: Webinar Analisis Risiko Geoteknik) dan mendistribusikannya menggunakan layanan email blasting (AWS SES/Resend) melalui server yang di-host mandiri.
            </CardContent>
          </Card>

          {/* Pengalaman 4 */}
          <Card className="bg-card hover:bg-accent/20 transition-colors border-border/50">
            <CardHeader>
              <MapPin className="h-6 w-6 text-primary mb-2" />
              <CardTitle>Integrasi & Manajemen Infrastruktur</CardTitle>
              <CardDescription>Payment & DevOps</CardDescription>
            </CardHeader>
            <CardContent className="text-muted-foreground text-sm leading-relaxed">
              Berpengalaman dalam mengintegrasikan Payment Gateway (seperti Xendit dan Midtrans) untuk transaksi, serta mahir dalam *deployment* aplikasi modern menggunakan Vercel maupun manajemen VPS dengan CapRover.
            </CardContent>
          </Card>
        </div>
      </section>

{/* 4. Keahlian & Tech Stack Lengkap (Padding Pill Diperbesar, Text Standard/Tight) */}
      <section className="space-y-8 pt-8 border-t border-border/40">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tight">Kemampuan Teknis</h2>
          <p className="text-muted-foreground text-lg">
            Teknologi dan alat yang saya gunakan untuk membangun solusi dari hulu ke hilir.
          </p>
        </div>
        
        <div className="space-y-8 mt-6">
          
          {/* Frontend & Mobile */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground flex items-center tracking-tight">
              <span className="w-2 h-2 bg-blue-500 rounded-sm mr-2.5"></span>
              Frontend & Mobile
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {["Next.js", "React", "TypeScript", "Tailwind CSS", "Shadcn UI", "Radix UI", "Flutter"].map((tech) => (
                <Badge 
                  key={tech} 
                  variant="secondary" 
                  // Perhatikan: px-4 py-1.5 (padding besar), text-sm (ukuran normal), tracking-tight (huruf rapat)
                  className="rounded-sm px-4 py-1.5 text-sm font-medium tracking-tight bg-secondary hover:bg-secondary/80 transition-colors cursor-default"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
          
          {/* Backend & Database */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground flex items-center tracking-tight">
              <span className="w-2 h-2 bg-red-500 rounded-sm mr-2.5"></span>
              Backend & Database
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {["PHP", "Laravel", "Node.js", "Go", "PostgreSQL", "Prisma ORM"].map((tech) => (
                <Badge 
                  key={tech} 
                  variant="secondary" 
                  className="rounded-sm px-4 py-1.5 text-sm font-medium tracking-tight bg-secondary hover:bg-secondary/80 transition-colors cursor-default"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Infrastruktur & Layanan */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground flex items-center tracking-tight">
              <span className="w-2 h-2 bg-amber-500 rounded-sm mr-2.5"></span>
              Infrastruktur & Layanan
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {["CapRover", "Vercel", "AWS SES", "Resend", "Mail Server", "Xendit", "Midtrans"].map((tech) => (
                <Badge 
                  key={tech} 
                  variant="secondary" 
                  className="rounded-sm px-4 py-1.5 text-sm font-medium tracking-tight bg-secondary hover:bg-secondary/80 transition-colors cursor-default"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* AI, Desain & Tools Ekstra */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground flex items-center tracking-tight">
              <span className="w-2 h-2 bg-purple-500 rounded-sm mr-2.5"></span>
              AI & Tools Ekstra
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {["AI Integrations", "AI Video Generation", "UI/UX Design", "CorelDRAW", "Excel (Data Export)"].map((tech) => (
                <Badge 
                  key={tech} 
                  variant="secondary" 
                  className="rounded-sm px-4 py-1.5 text-sm font-medium tracking-tight bg-secondary hover:bg-secondary/80 transition-colors cursor-default"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}