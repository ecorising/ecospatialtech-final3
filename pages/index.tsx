// pages/index.tsx
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <section className="relative text-center py-12 font-sans">
        <img
          src="/images/hero-drone-satellite.jpg"
          alt="Drone and satellite observing Earth"
          className="w-full h-[500px] object-cover object-center"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white bg-black bg-opacity-50 px-6 py-4 rounded">
          <h2 className="text-4xl font-bold mb-4">Geospatial, Environmental, and Climate Intelligence Solutions</h2>
          <p className="text-lg">We harness the power of satellite, drone, and field sensors to deliver advanced climate intelligence solutions. Our tools support smarter decision-making for urban planners, water agencies, and environmental stakeholders.</p>
        </div>
      </section>
    </Layout>
  );
}
