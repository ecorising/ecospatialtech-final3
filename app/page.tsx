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
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <header className="bg-green-100 p-6 shadow-md sticky top-0 z-10">
        <nav className="max-w-6xl mx-auto flex justify-between items-center text-base">
          <h1 className="text-2xl font-bold font-sans">Eco Rising Solutions</h1>
          <div className="space-x-6">
            <a href="#about" className="hover:underline">About</a>
            <a href="#services" className="hover:underline">Services</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </div>
        </nav>
      </header>

      <section className="text-center py-12 bg-white">
        <h2 className="text-4xl font-bold mb-6">Geospatial, Environmental, and Climate Intelligence Solutions</h2>
        <img
          src="/images/hero-drone-satellite.jpg"
          alt="Drone and satellite observing Earth"
          className="mx-auto rounded-lg shadow-md max-w-3xl max-h-96"
        />
      </section>

      <section className="my-12 max-w-6xl mx-auto px-4" id="services">
        <h2 className="text-2xl font-bold mb-10 text-center">Our Services</h2>
        <div className="space-y-16">
          {[{
            title: "Urban Climate & Infrastructure",
            img: "/images/urban-climate.jpg",
            alt: "Urban infrastructure monitoring",
            text: "High-resolution urban climate analysis and infrastructure monitoring using satellite and drone-based remote sensing. AI-enhanced digital twin technologies provide insights for resilient planning and sustainable urban development.",
            alignment: "left"
          }, {
            title: "Water Quantity & Quality Monitoring",
            img: "/images/water-quality.jpg",
            alt: "Water analysis imagery",
            text: "Tracking hydrological changes and modeling harmful algal blooms (HABs) with remote sensing, field data, and AI. Tools support water agencies with insights for lake health and sustainability.",
            alignment: "right"
          }, {
            title: "Digital Twin & AI Analytics",
            img: "/images/digital-twin.jpg",
            alt: "Digital twin visual interface",
            text: "Simulate complex systems by fusing sensor, satellite, and drone data. Deliver predictive models and smart infrastructure tools for forecasting.",
            alignment: "left"
          }, {
            title: "Remote Sensing Technologies",
            img: "/images/remote-sensing.jpg",
            alt: "Remote sensing image",
            text: "High-resolution drone imagery and satellite data for mapping, change detection, vegetation monitoring, and land-use planning.",
            alignment: "right"
          }].map((service, index) => (
            <div key={index} className={`flex flex-col ${service.alignment === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} items-center text-center md:text-left gap-6`}>
              <img src={service.img} alt={service.alt} className="rounded-lg shadow-md max-w-sm max-h-48 w-full object-cover" />
              <div className="max-w-lg">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p>{service.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="my-16 max-w-6xl mx-auto px-4" id="projects">
        <h2 className="text-2xl font-bold mb-10 text-center">Case Studies</h2>
        <div className="space-y-16">
          {[{
            title: "Subway Heat Risk Forecasting",
            img: "/images/subway-heat.jpg",
            alt: "NYC Subway thermal analysis",
            text: "Infrared thermal imagery, handheld sensors, and AI models enable platform-level risk prediction tools for MTA ventilation planning.",
            alignment: "left"
          }, {
            title: "Water Monitoring for HABs",
            img: "/images/water-quality.jpg",
            alt: "Lake water quality",
            text: "MODIS and drone data monitor chlorophyll-a levels and harmful algal blooms, aiding regional water policy and climate adaptation.",
            alignment: "right"
          }].map((project, index) => (
            <div key={index} className={`flex flex-col ${project.alignment === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} items-center text-center md:text-left gap-6`}>
              <img src={project.img} alt={project.alt} className="rounded-lg shadow-md max-w-sm max-h-48 w-full object-cover" />
              <div className="max-w-lg">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p>{project.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-green-50 text-center py-12 px-4" id="contact">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p>If you’d like to learn more about our services or discuss a project, contact us at <a href="mailto:info@ecospatialtech.com" className="text-green-700 font-medium">info@ecospatialtech.com</a>.</p>
      </section>

      <footer className="bg-gray-300 text-center text-sm text-gray-800 py-6 mt-10">
        <p>© {new Date().getFullYear()} Eco Rising Solutions. All rights reserved.</p>
        <nav className="mt-2 space-x-6 text-base">
          <a href="#about" className="hover:underline">About</a>
          <a href="#services" className="hover:underline">Services</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </footer>
    </div>
  );
}
