// pages/projects.tsx
import Layout from '../components/Layout';
export default function ProjectsPage() {
  const projects = [
    {
      title: "Subway Heat Risk Forecasting",
      img: "/images/subway-heat.jpg",
      alt: "NYC Subway thermal analysis",
      text: "Infrared thermal imagery, handheld sensors, and AI models enable platform-level risk prediction tools for MTA ventilation planning.",
      alignment: "left"
    },
    {
      title: "Water Monitoring for HABs",
      img: "/images/water-quality.jpg",
      alt: "Lake water quality",
      text: "MODIS and drone data monitor chlorophyll-a levels and harmful algal blooms, aiding regional water policy and climate adaptation.",
      alignment: "right"
    }
  ];

  return (
    <main className="my-16 max-w-6xl mx-auto px-4">
      <h2 className="text-2xl font-bold mb-10 text-center">Case Studies</h2>
      <div className="space-y-16">
        {projects.map((project, index) => (
          <div key={index} className={`flex flex-col ${project.alignment === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} items-center text-center md:text-left gap-6`}>
            <img src={project.img} alt={project.alt} className="rounded-lg shadow-md max-w-sm max-h-48 w-full object-cover" />
            <div className="max-w-lg">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p>{project.text}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
