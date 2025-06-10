// pages/about.tsx
import Layout from '../components/Layout';

export default function AboutPage() {
  return (
    <Layout>
      <main className="max-w-3xl mx-auto py-12 px-4 text-center font-sans">
        <h2 className="text-2xl font-bold mb-4">About Us</h2>
        <p className="text-lg">Eco Rising Solutions is a climate-tech company harnessing geospatial analytics, AI, and remote sensing technologies to solve pressing environmental and infrastructure challenges.</p>
        <p className="mt-4 text-base">We specialize in digital twin development, urban climate modeling, and water system monitoring using satellite and drone data, providing high-impact insights for climate resilience.</p>
      </main>
    </Layout>
  );
}
