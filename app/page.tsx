"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function HomePage() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    alert("Thank you for subscribing! You'll receive updates from norouzi@ecospatialtech.com.");
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 p-4">
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold">Eco Rising Solutions</h1>
        <p className="text-lg mt-2">Geospatial, Environmental, and Climate Intelligence Solutions</p>
        <img
          src="/images/hero-drone-satellite.jpg"
          alt="Drone and satellite observing Earth"
          className="mx-auto mt-6 rounded-lg shadow-md max-w-2xl"
        />
      </header>

      <section className="my-12 max-w-3xl mx-auto" id="about">
        <h2 className="text-2xl font-bold mb-4">About Us</h2>
        <p>
          Eco Rising Solutions is a climate-tech company harnessing geospatial analytics, AI, and remote sensing technologies to solve pressing environmental and infrastructure challenges. We specialize in digital twin development, urban climate modeling, and water system monitoring using satellite and drone data.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-6 my-10" id="services">
        <Card>
          <CardContent>
            <img src="/images/urban-climate.jpg" alt="Urban infrastructure monitoring" className="rounded mb-3" />
            <h2 className="text-xl font-semibold mb-2">Urban Climate & Infrastructure</h2>
            <p>
              We deliver high-resolution urban climate analysis and infrastructure monitoring using satellite and drone-based remote sensing. Our AI-enhanced digital twin technologies provide actionable insights for resilient city planning.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <img src="/images/water-quality.jpg" alt="Water analysis imagery" className="rounded mb-3" />
            <h2 className="text-xl font-semibold mb-2">Water Quantity & Quality Monitoring</h2>
            <p>
              Eco Rising leverages remote sensing, field data, and AI models to track hydrological changes and water quality trends in lakes, rivers, and reservoirs.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <img src="/images/digital-twin.jpg" alt="Digital twin visual interface" className="rounded mb-3" />
            <h2 className="text-xl font-semibold mb-2">Digital Twin & AI Analytics</h2>
            <p>
              Our digital twin platforms simulate environmental systems and infrastructure behavior, integrating multi-source satellite, drone, and sensor data.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <img src="/images/remote-sensing.jpg" alt="Drone and satellite image overlay" className="rounded mb-3" />
            <h2 className="text-xl font-semibold mb-2">Remote Sensing Technologies</h2>
            <p>
              We combine drone-based data collection and satellite imagery to deliver precision mapping and environmental intelligence for diverse applications.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="my-12 max-w-4xl mx-auto" id="projects">
        <h2 className="text-2xl font-bold mb-6 text-center">Case Studies</h2>

        <Card className="mb-6">
          <CardContent>
            <img src="/images/subway-heat.jpg" alt="NYC Subway platform thermal analysis" className="rounded mb-3" />
            <h3 className="text-xl font-semibold mb-2">Subway Heat Risk Forecasting in NYC</h3>
            <p>
              Leveraging a combination of infrared imagery, in-situ air sensors, and AI forecasting models, Eco Rising developed a tool to predict platform-level heat risks across MTA subway stations. The system is designed to support ventilation management and commuter safety during extreme heat events.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <img src="/images/water-quality.jpg" alt="Lake and river water analysis" className="rounded mb-3" />
            <h3 className="text-xl font-semibold mb-2">Water Quantity and Quality Monitoring</h3>
            <p>
              Using MODIS and drone-based remote sensing, our team developed tools to assess water level variation and chlorophyll-a trends in key water bodies. These tools help stakeholders monitor resource availability and protect aquatic ecosystems.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="text-center my-12" id="contact">
        <h2 className="text-2xl font-bold mb-4">Stay Informed</h2>
        <p>Join our mailing list for updates on projects, tools, and insights.</p>
        <div className="mt-4 flex justify-center">
          <Input
            className="w-1/2"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button className="ml-2" onClick={handleSubscribe}>Subscribe</Button>
        </div>
      </section>

      <footer className="text-center border-t pt-6 mt-10 text-sm text-gray-600">
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
