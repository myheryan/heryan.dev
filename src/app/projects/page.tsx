// src/app/projects/page.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";

// Data dummy (bisa Anda ganti nanti atau pindahkan ke file terpisah)
const projectsData = [
  {
    title: "Geomining.id Portal",
    description: "Platform web korporat untuk layanan operasional dan informasi geomining, dibangun dengan fokus pada performa dan SEO.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    liveLink: "https://geomining.id",
    repoLink: "#",
  },
  {
    title: "Enterprise Form Builder",
    description: "Aplikasi pembuat form dinamis untuk kebutuhan internal perusahaan, dilengkapi dengan fitur ekspor data langsung ke format Microsoft Excel.",
    tech: ["React", "Node.js", "ExcelJS"],
    liveLink: "#",
    repoLink: "#",
  },
  {
    title: "E-Certificate & Batch Emailing",
    description: "Sistem otomatisasi untuk menghasilkan e-sertifikat dari template (Canvas) dan mendistribusikannya ke ratusan peserta webinar secara massal.",
    tech: ["Node.js", "AWS SES / Resend", "Canvas"],
    liveLink: "#",
    repoLink: "#",
  }
];

export default function ProjectsPage() {
  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Header Projects */}
      <div className="space-y-4">
        <h1 className="text-3xl font-extrabold tracking-tight lg:text-4xl">Proyek Saya</h1>
        <p className="text-lg text-muted-foreground">
          Kumpulan pekerjaan terpilih dan eksperimen teknis yang pernah saya bangun.
        </p>
      </div>

      {/* Grid Proyek */}
      <div className="grid gap-6 md:grid-cols-2">
        {projectsData.map((project, index) => (
          <Card key={index} className="flex flex-col h-full bg-card hover:bg-accent/50 transition-colors border-border/50">
            <CardHeader>
              <CardTitle className="text-xl">{project.title}</CardTitle>
              <CardDescription className="text-base mt-2">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-end">
              
              {/* Badge Teknologi */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <Badge key={t} variant="outline" className="text-xs text-muted-foreground">
                    {t}
                  </Badge>
                ))}
              </div>
              
              {/* Link Aksi */}
              <div className="flex items-center gap-4 text-sm font-medium">
                <Link href={project.liveLink} className="flex items-center hover:text-primary transition-colors">
                  <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                </Link>
                <Link href={project.repoLink} className="flex items-center hover:text-primary transition-colors">
                  <Github className="mr-2 h-4 w-4" /> Source
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}