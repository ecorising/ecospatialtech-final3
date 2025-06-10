"use client";

import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { useState } from "react";

export default function HomePage() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    alert("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="bg-green-100 p-6 shadow-md sticky top-0 z-10">
        <nav className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Eco Rising Solutions</h1>
          <div className="space-x-4">
            <a href="#about" className="hover:underline">About</a>
            <a href="#services" className="hover:underline">Services</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </div>
        </nav>
      </header>

      <section className="text-center py-12 bg-white">
        <h2 className="text-4xl font-bold">Geospatial, Environmental, and Climate Intelligence Solutions</h2>
        <img
          src="/images/hero-drone-satellite.jpg"
          alt="Drone and satellite observing Earth"
          className="mx-auto mt-6 rounded-lg shadow-md max-w-4xl"
        />
      </section>

      <section className="my-12 max-w-3xl mx-auto px-4" id="about">
        <h2 className="text-2xl font-bold mb-4">About Us</h2>
        <p>
          Eco Rising Solutions is a climate-tech company harnessing geospatial analytics, AI, and remote sensing technologies to solve pressing environmental and infrastructure challenges. We specialize in digital twin development, urban climate modeling, and water system monitoring using satellite and drone data.
        </p>
      </section>

      <section className="my-12 max-w-6xl mx-auto px-4" id="services">
        <h2 className="text-2xl font-bold mb-6 text-center">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
          <Card>
            <CardContent>
              <img src="/images/urban-climate.jpg" alt="Urban infrastructure monitoring" className="rounded mx-auto mb-3 max-h-32 w-auto object-cover" />
              <h3 className="text-lg font-semibold mb-2">Urban Climate & Infrastructure</h3>
              <p>
                High-resolution urban climate analysis and infrastructure monitoring using satellite and drone-based remote sensing. AI-enhanced digital twin technologies provide insights for resilient planning and sustainable urban development.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <img src="/images/water-quality.jpg" alt="Water analysis imagery" className="rounded mx-auto mb-3 max-h-32 w-auto object-cover" />
              <h3 className="text-lg font-semibold mb-2">Water Quantity & Quality Monitoring</h3>
              <p>
                Tracking hydrological changes and modeling harmful algal blooms (HABs) with remote sensing, field data, and AI. Tools support water agencies with insights for lake health and sustainability.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <img src="/images/digital-twin.jpg" alt="Digital twin visual interface" className="rounded mx-auto mb-3 max-h-32 w-auto object-cover" />
              <h3 className="text-lg font-semibold mb-2">Digital Twin & AI Analytics</h3>
              <p>
                Simulate complex systems by fusing sensor, satellite, and drone data. Deliver predictive models and smart infrastructure tools for forecasting.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <img src="/images/remote-sensing.jpg" alt="Remote sensing image" className="rounded mx-auto mb-3 max-h-32 w-auto object-cover" />
              <h3 className="text-lg font-semibold mb-2">Remote Sensing Technologies</h3>
              <p>
                High-resolution drone imagery and satellite data for mapping, change detection, vegetation monitoring, and land-use planning.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="my-12 max-w-5xl mx-auto px-4" id="projects">
        <h2 className="text-2xl font-bold mb-6 text-center">Case Studies</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent>
              <img src="/images/subway-heat.jpg" alt="NYC Subway thermal analysis" className="rounded mx-auto mb-3 max-h-32 w-auto object-cover" />
              <h3 className="text-lg font-semibold mb-2">Subway Heat Risk Forecasting</h3>
              <p>
                Infrared thermal imagery, handheld sensors, and AI models enable platform-level risk prediction tools for MTA ventilation planning.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <img src="/images/water-quality.jpg" alt="Lake water quality" className="rounded mx-auto mb-3 max-h-32 w-auto object-cover" />
              <h3 className="text-lg font-semibold mb-2">Water Monitoring for HABs</h3>
              <p>
                MODIS and drone data monitor chlorophyll-a levels and harmful algal blooms, aiding regional water policy and climate adaptation.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-green-50 text-center py-12 px-4" id="contact">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p>If you’d like to learn more about our services or discuss a project, contact us at <a href="mailto:info@ecospatialtech.com" className="text-green-700 font-medium">info@ecospatialtech.com</a>.</p>
      </section>

      <footer className="bg-gray-200 text-center text-sm text-gray-700 py-6 mt-10">
        <p>© {new Date().getFullYear()} Eco Rising Solutions. All rights reserved.</p>
        <nav className="mt-2 space-x-4">
          <a href="#about" className="hover:underline">About</a>
          <a href="#services" className="hover:underline">Services</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </footer>
    </div>
  );
}
