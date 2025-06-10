import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <section className="text-center py-12 bg-white">
        <h2 className="text-4xl font-bold mb-6">Geospatial, Environmental, and Climate Intelligence Solutions</h2>
        <img
          src="/images/hero-drone-satellite.jpg"
          alt="Drone and satellite observing Earth"
          className="mx-auto rounded-lg shadow-md max-w-3xl max-h-96"
        />
      </section>
    </Layout>
  );
}
