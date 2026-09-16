import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import TechStack from './components/TechStack.jsx';
import ExperienceCard from './components/ExperienceCard.jsx';
import ProjectCard from './components/ProjectCard.jsx';
import Footer from './components/Footer.jsx';
import { projects, experiences, bootcamps } from '../../data/portfolio.js';

export default function App() {
    return (
        <>
            <Navbar />

            <main>
                <section id="hero">
                    <Hero />
                </section>

                <section id="tech-stack" className="py-[60px] px-[5%] md:py-[100px] md:px-[10%] max-w-[1400px] mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
                        Tech Stack &amp; Tooling
                    </h2>
                    <TechStack />
                </section>

                <section id="bootcamp" className="py-[60px] px-[5%] md:py-[100px] md:px-[10%] max-w-[1400px] mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Bootcamp Experience</h2>
                    <div>
                        {bootcamps.map((bootcamp) => (
                            <ExperienceCard key={bootcamp.role} exp={bootcamp} />
                        ))}
                    </div>
                </section>

                <section id="experience" className="py-[60px] px-[5%] md:py-[100px] md:px-[10%] max-w-[1400px] mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Work Experiences:</h2>
                    <div>
                        {experiences.map((exp) => (
                            <ExperienceCard key={exp.role} exp={exp} />
                        ))}
                    </div>
                </section>

                <section id="projects" className="py-[60px] px-[5%] md:py-[100px] md:px-[10%] max-w-[1400px] mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">My Projects</h2>

                    <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5 md:gap-[30px] mt-10">
                        {projects.map((project) => (
                            <ProjectCard key={project.title} project={project} />
                        ))}
                    </div>
                </section>

                <Footer />
            </main>
        </>
    );
}
