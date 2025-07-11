import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
<section className="relative w-full h-screen font-sans">
  <img
    src="/images/hero-drone-satellite.jpg"
    alt="Drone and satellite observing Earth"
    className="absolute inset-0 w-full h-full object-cover z-0"
  />
  <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-6 bg-black/40 text-white">
    <h2 className="text-5xl font-bold mb-6">Geospatial, Environmental, and Climate Intelligence Solutions</h2>
    <p className="text-xl max-w-3xl">
      We harness satellite, drone, and field sensors to deliver advanced climate intelligence tools for decision-makers.
    </p>
  </div>
</section>
    </Layout>
  );
}
