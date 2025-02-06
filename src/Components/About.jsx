import { Github, Linkedin, Mail, FileDown, User, BookOpen, Briefcase } from 'lucide-react';

const About = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/manish.pdf'; 
    link.download = 'manishCV.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="min-h-screen bg-black text-gray-100 flex flex-col items-center">
      {/* Hero Section */}
      <div className="relative h-[40vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Manish Pyakurel</h1>
          <p className="text-xl md:text-2xl text-emerald-400">Full Stack Developer</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl w-full px-4 py-12">
        {/* About Section */}
        <div className="mb-16 text-center">
          <div className="flex items-center gap-2 mb-6 justify-center">
            <User className="w-6 h-6 text-emerald-400" />
            <h2 className="text-2xl font-bold">About Me</h2>
          </div>
          <p className="text-gray-300 leading-relaxed mb-6">
            I'm a passionate full-stack developer with 1 years of experience building web applications.
            I specialize in React, Node.js, and cloud technologies. My approach combines technical
            expertise with creative problem-solving to deliver exceptional user experiences.
          </p>
          <div className="flex flex-col items-center gap-6">
          <button 
              onClick={handleDownloadCV}
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-400 text-black rounded-lg hover:bg-emerald-500 transition-colors font-semibold"
            >
              <FileDown className="w-5 h-5" />
              Download CV
            </button>
            <div className="flex gap-4">
              <a href="https://github.com/manish689" className="hover:text-emerald-400 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/manish-pyakurel-a59a741b8/" className="hover:text-emerald-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href='mailto:manishpyakurel67@gmail.com' className="hover:text-emerald-400 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Skills & Experience */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Skills */}
          <div className="text-center">
            <div className="flex items-center gap-2 mb-6 justify-center">
              <BookOpen className="w-6 h-6 text-emerald-400" />
              <h2 className="text-2xl font-bold">Skills</h2>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker'].map((skill) => (
                <div 
                  key={skill}
                  className="bg-gray-900 p-3 rounded-lg text-center hover:bg-gray-800 transition-colors hover:text-emerald-400"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="text-center">
            <div className="flex items-center gap-2 mb-6 justify-center">
              <Briefcase className="w-6 h-6 text-emerald-400" />
              <h2 className="text-2xl font-bold">Education</h2>
            </div>
            <div className="space-y-6">
              <div className="border-l-2 border-emerald-400 pl-4">
                <h3 className="font-semibold">Khwopa College of Engineering</h3>
                <p className="text-gray-400 text-sm">2020 - Present</p>
                <p className="text-gray-300 mt-2">Bachelors in Computer Engineering</p>
              </div>
              <div className="border-l-2 border-emerald-400 pl-4">
                <h3 className="font-semibold">Trinity Internation College</h3>
                <p className="text-gray-400 text-sm">2018 - 2020</p>
                <p className="text-gray-300 mt-2">Physical Science & Mathematics</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
