import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectDetail from '@/components/ProjectDetail';
import { projects, getProject } from '@/lib/projects';

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }) {
  const project = getProject(params.slug);

  if (!project) {
    return { title: 'Project not found | iRad Solutions' };
  }

  const title = `${project.name} | iRad Solutions`;
  const description = `${project.tagline}. Download the ${project.platform} app, version ${project.version}.`;

  return {
    title,
    description,
    // Shared links get a real preview card instead of a bare URL.
    openGraph: {
      title,
      description,
      url: `/projects/${project.slug}`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default function ProjectPage({ params }) {
  const project = getProject(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main>
      <Navbar />
      <ProjectDetail project={project} />
      <Footer />
    </main>
  );
}
