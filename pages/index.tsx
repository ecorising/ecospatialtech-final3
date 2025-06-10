// pages/index.tsx
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <section className="text-center py-12 bg-white font-sans">
        <h2 className="text-4xl font-bold mb-6">Geospatial, Environmental, and Climate Intelligence Solutions</h2>
        <p className="mb-4 text-lg">We harness the power of satellite, drone, and field sensors to deliver advanced climate intelligence solutions. Our tools support smarter decision-making for urban planners, water agencies, and environmental stakeholders.</p>
        <img
          src="/images/hero-drone-satellite.jpg"
          alt="Drone and satellite observing Earth"
          className="mx-auto rounded-lg shadow-md max-w-3xl max-h-96"
        />
      </section>
    </Layout>
  );
}
