import Rreact, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Phone, Mail, Github, Linkedin } from 'lucide-react';

const Portfolio = () => {
  const [currentAcademicSlide, setCurrentAcademicSlide] = useState(0);
  const [currentPersonalSlide, setCurrentPersonalSlide] = useState(0);

  const academicProjects = [
    {
      title: "Courses Enrolment Webapp",
      description: "A collaborative full-stack web application built with SpringBoot that streamlines course management and enrollment processes. The platform features secure user authentication, Google Calendar integration, and comprehensive admin controls for course management. Key technical implementations include HTML/CSS/JavaScript for frontend, Render for deployment, REST APIs for data handling, and MockMVC for automated testing.",
      image: "/images/courseEnrol.png"
    },
    {
      title: "3D Rasterization",
      description: "A web-based 3D graphics application developed in JavaScript that implements fundamental computer graphics concepts. The project focuses on core rasterization techniques for rendering 3D objects, featuring advanced implementations of Triangle Meshes for object modeling, Scene Graphs for hierarchical object relationships, and Shadow Mapping for realistic lighting effects. Developed as part of SFU's CMPT361 Visual Computing course.",
      image: "/images/3dRasterization.png"
    },
    {
      title: "Images Stiching",
      description: "An image processing application developed in MATLAB that combines multiple images of the same location taken from different angles into a single panoramic view. The project implements advanced computer vision techniques for feature detection, image alignment, and seamless blending. Key aspects include matching corresponding points between images, computing homography transformations, and implementing stitching algorithms to create cohesive panoramic outputs.",
      image: "/images/imagesStitching.png"
    },
  ];

  const personalProjects = [
    {
      title: "Disease Prediction Webpage",
      description: "A machine learning-powered web application that predicts diseases based on patient symptoms. The project encompasses comprehensive data preprocessing of symptom-disease relationships from CSV datasets. Key features include implementation of machine learning algorithms for disease prediction and thorough model evaluation using multiple performance metrics (accuracy, F1 score, precision, cross-validation).",
      image: "/images/diseasepred.png"
    },
    {
      title: "Jewelry Store Management Webapp",
      description: "A comprehensive e-commerce platform that streamlines jewelry store operations from order placement to delivery. The system features multi-user functionality with distinct interfaces for customers, delivery drivers, and administrators. The platform enables administrators to monitor customer orders in real-time while facilitating seamless communication between customers and delivery personnel.",
      image: "/images/kkj.png"
    },
    {
      title: "Gold Price Prediction Webpage",
      description: "A financial forecasting web application that leverages machine learning to predict gold prices. The project combines real-time data scraping capabilities using BeautifulSoup and Requests with advanced ML models implemented through Scikit-learn and Pandas. Key features include linear regression and KNN algorithms for price prediction analysis.",
      image: "/images/goldpred.png"
    },
    {
      title: "The Jungle Game",
      description: "An interactive two-player strategy board game developed with PyGame, showcasing engaging graphics and complex game mechanics. The implementation features comprehensive rule systems for player turns and movements, along with strategic win conditions that create challenging gameplay experiences. The project demonstrates skills in game development, user interface design, and logic implementation.",
      image: "/images/jungleGame.png"
    },
  ];

  const nextSlide = (setter, current, length) => {
    setter((current+1) % length);
  }
  const prevSlide = (setter, current, length) => {
    setter((current - 1 + length) % length);
  };

  return(
  <div className="min-h-screen bg-[#2b2e2f] text-white">
    {/* Header */}
    <div className="relative px-8 py-6">
      <div className="container mx-auto">
        <div className="flex items-start gap-8">
          {/* Profile Picture */}
          <div className="w-48 h-48 flex-shrink-0">
            <img
              src="/images/profilePic.jpg"
              alt="Profile"
              className="w-full h-full object-cover rounded"
            />
          </div>
          {/* Name and Contact Info */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold mb-6">QUINNIE CAO</h1>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <Phone size={20} className="text-gray-300" />
                <span>(778)-919-8245</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={20} className="text-gray-300" />
                <span>caokhanhquynh57@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Github size={20} className="text-gray-300" />
                <a 
                  href="https://github.com/caokhanhquynh" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  github.com/caokhanhquynh
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin size={20} className="text-gray-300" />
                <a 
                  href="https://www.linkedin.com/in/quinnie-cao-993425320" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  linkedin.com/in/quinnie-cao-993425320
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Summary Section */}
    <div className="max-w-4xl mx-auto  py-1 ">
      <h2 className="text-3xl font-bold mb-8 text-center">SKILLS</h2>
      <ul className="space-y-2">
        <li><b>• Programming Languages:</b> C++, Python, Java, HTML, CSS, Javascript, C, MATLAB, Rust, Haskell, Coq, RISC-V</li>
        <li><b>• Frameworks:</b> SpringBoot, React, Flask</li>
        <li><b>• Supporting Tools:</b>  Render, Git, GitHub, Docker, Thymeleaf, MockMVC, OpenCV, BeautifulSoup, Matplotlib, 
              Scikit-learn, Pandas, NumPy, PyGame, PostgreSQL, OpenGL, Linux, Ubuntu</li>
      </ul>
    </div>

    {/* Academic Projects Section */}
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">ACADEMIC PROJECTS</h2>
      <div className="relative">
        <div className="bg-gray-900 rounded-lg overflow-hidden">
          {/* Image Container */}
          <div className="relative h-80"> {/* Reduced height for image */}
            <img 
              src={academicProjects[currentAcademicSlide].image} 
              alt={academicProjects[currentAcademicSlide].title}
              className="w-full h-full object-cover brightness-50"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-2xl font-bold text-white">
                {academicProjects[currentAcademicSlide].title}
              </h3>
            </div>
          </div>
          {/* Description Container */}
          <div className="p-6 bg-gray-800">
            <p className="text-white leading-relaxed">
              {academicProjects[currentAcademicSlide].description}
            </p>
          </div>
        </div>
        <button 
          onClick={() => prevSlide(setCurrentAcademicSlide, currentAcademicSlide, academicProjects.length)}
          className="absolute left-0 top-32 -translate-y-1/2 bg-gray-800 p-2 rounded-r"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={() => nextSlide(setCurrentAcademicSlide, currentAcademicSlide, academicProjects.length)}
          className="absolute right-0 top-32 -translate-y-1/2 bg-gray-800 p-2 rounded-l"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>

    {/* Personal Projects Section */}
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">PERSONAL PROJECTS</h2>
      <div className="relative">
        <div className="bg-gray-900 rounded-lg overflow-hidden">
          {/* Image Container */}
          <div className="relative h-64"> {/* Reduced height for image */}
            <img 
              src={personalProjects[currentPersonalSlide].image} 
              alt={personalProjects[currentPersonalSlide].title}
              className="w-full h-full object-cover brightness-50"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-2xl font-bold text-white">
                {personalProjects[currentPersonalSlide].title}
              </h3>
            </div>
          </div>
          {/* Description Container */}
          <div className="p-6 bg-gray-800">
            <p className="text-white leading-relaxed">
              {personalProjects[currentPersonalSlide].description}
            </p>
          </div>
        </div>
        <button 
          onClick={() => prevSlide(setCurrentPersonalSlide, currentPersonalSlide, personalProjects.length)}
          className="absolute left-0 top-32 -translate-y-1/2 bg-gray-800 p-2 rounded-r"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={() => nextSlide(setCurrentPersonalSlide, currentPersonalSlide, personalProjects.length)}
          className="absolute right-0 top-32 -translate-y-1/2 bg-gray-800 p-2 rounded-l"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>

    {/* Education Section */}
    <div className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">EDUCATION</h2>
        <p className="text-xl">Bachelor of Science in Computing Science ( 09/2023 - 12/2026 )</p>
        <p className="text-gray-200">Simon Fraser University | Burnaby</p>
      </div>

  </div>
  )
}

export default Portfolio;