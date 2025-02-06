import React from 'react';
import { Github, ExternalLink, Code2, Palette, Globe, Cpu } from 'lucide-react';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online store with cart functionality, user authentication, and payment processing.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1600",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    githubLink: "https://github.com/manish689",
    liveLink: "#",
    icon: <Globe className="w-6 h-6 text-emerald-400" />
  },
  {
    title: "AI Image Generator",
    description: "An application that generates unique images using machine learning algorithms and user prompts.",
    image: "https://images.unsplash.com/photo-1547954575-855750c57bd3?auto=format&fit=crop&q=80&w=1600",
    tags: ["Python", "TensorFlow", "React", "AWS"],
    githubLink: "https://github.com/manish689",
    liveLink: "#",
    icon: <Cpu className="w-6 h-6 text-emerald-400" />
  },
  {
    title: "Task Management App",
    description: "A collaborative project management tool with real-time updates and team features.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1600",
    tags: ["React", "Firebase", "Material-UI"],
    githubLink: "https://github.com/manish689",
    liveLink: "#",
    icon: <Code2 className="w-6 h-6 text-emerald-400" />
  },
  {
    title: "Portfolio Website",
    description: "A responsive portfolio website showcasing creative work and professional experience.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    githubLink: "https://github.com/manish689",
    liveLink: "#",
    icon: <Palette className="w-6 h-6 text-emerald-400" />
  },
  {
    title: "Weather Dashboard",
    description: "A weather application with detailed forecasts, maps, and location-based services.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=1600",
    tags: ["React", "OpenWeather API", "Charts.js"],
    githubLink: "https://github.com/manish689",
    liveLink: "#",
    icon: <Globe className="w-6 h-6 text-emerald-400" />
  },
  {
    title: "Social Media Analytics",
    description: "A dashboard for tracking and analyzing social media metrics and engagement.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600",
    tags: ["React", "D3.js", "Node.js", "MongoDB"],
    githubLink: "https://github.com/manish689",
    liveLink: "#",
    icon: <Code2 className="w-6 h-6 text-emerald-400" />
  }
];

const Portfolio = () => {
  return (
    <section className="py-20 bg-black">
      <div id="works" className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">My Projects</h2>
          <p className="text-xl text-emerald-400">Check out my latest work</p>
          <p className="text-gray-400 mt-2">
            I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-emerald-500/10 border border-gray-800"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-gray-900 p-2 rounded-full shadow-md border border-gray-800">
                  {project.icon}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-800 text-emerald-400 rounded-full text-sm border border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <a
                    href={project.githubLink}
                    className="flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.liveLink}
                    className="flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://github.com/manish689"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors border border-gray-800 hover:border-emerald-500 group"
          >
            <Github className="w-6 h-6 text-emerald-400 group-hover:scale-110 transition-transform" />
            <span className="text-lg">View More Projects on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;