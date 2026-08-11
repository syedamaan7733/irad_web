import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectsList from '@/components/ProjectsList';
import { projects } from '@/lib/projects';

export const metadata = {
  title: 'Projects | iRad Solutions',
  description:
    'Apps and platforms iRad has built and shipped. Download an Android build, or share it with your team.',
  openGraph: {
    title: 'Projects | iRad Solutions',
    description:
      'Apps and platforms iRad has built and shipped. Download an Android build, or share it with your team.',
    url: '/projects',
  },
};

export default function ProjectsPage() {
  return (
    <main>
      <Navbar />
      <ProjectsList projects={projects} />
      <Footer />
    </main>
  );
}
