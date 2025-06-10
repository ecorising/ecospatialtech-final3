// pages/services.tsx
import Layout from '../components/Layout';

export default function ServicesPage() {
  const services = [
    {
      title: "Urban Climate & Infrastructure",
      img: "/images/urban-climate.jpg",
      alt: "Urban infrastructure monitoring",
      text: "High-resolution urban climate analysis and infrastructure monitoring using satellite and drone-based remote sensing. AI-enhanced digital twin technologies provide insights for resilient planning and sustainable urban development.",
      alignment: "left"
    },
    {
      title: "Water Quantity & Quality Monitoring",
      img: "/images/water-quality.jpg",
      alt: "Water analysis imagery",
      text: "Tracking hydrological changes and modeling harmful algal blooms (HABs) with remote sensing, field data, and AI. Tools support water agencies with insights for lake health and sustainability.",
      alignment: "right"
    },
    {
      title: "Digital Twin & AI Analytics",
      img: "/images/digital-twin.jpg",
      alt: "Digital twin visual interface",
      text: "Simulate complex systems by fusing sensor, satellite, and drone data. Deliver predictive models and smart infrastructure tools for forecasting.",
      alignment: "left"
    },
    {
      title: "Remote Sensing Technologies",
      img: "/images/remote-sensing.jpg",
      alt: "Remote sensing image",
      text: "High-resolution drone imagery and satellite data for mapping, change detection, vegetation monitoring, and land-use planning.",
      alignment: "right"
    },
  ];

  return (
    <Layout>
      <main className="my-12 max-w-6xl mx-auto px-4 font-sans">
        <h2 className="text-2xl font-bold mb-10 text-center">Our Services</h2>
        <div className="space-y-16">
          {services.map((service, index) => (
            <div key={index} className={`flex flex-col ${service.alignment === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} items-center text-center md:text-left gap-6`}>
              <img src={service.img} alt={service.alt} className="rounded-lg shadow-md max-w-sm max-h-48 w-full object-cover" />
              <div className="max-w-lg">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p>{service.text}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}
