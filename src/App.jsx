import Rreact, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Phone, Mail, Github, Linkedin,  File } from 'lucide-react';
import axios from "axios";

const Portfolio = () => {

  {/* Update web title */}
  useEffect(() => {
    document.title = "Quinnie Cao's Portfolio"; // Change this to your desired title
  }, []);


  const academicProjects = [
    {
      title: "Courses Enrolment Webapp",
      description: "A collaborative full-stack web application built with SpringBoot that streamlines course management and enrollment processes. The platform features secure user authentication, Google Calendar integration, and comprehensive admin controls for course management. Key technical implementations include HTML/CSS/JavaScript for frontend, Render for deployment, REST APIs for data handling, and MockMVC for automated testing.",
      image: "images/courseEnrol.png",
      githubLink:"https://github.com/Silversoul28/CMPT276-grouppp"
    },
    {
      title: "Disease Prediction Webpage",
      description: "A machine learning-powered web application that predicts diseases based on patient symptoms developed by Flask and Scikit-learn. The project encompasses comprehensive data preprocessing of symptom-disease relationships from CSV datasets. Key features include implementation of machine learning algorithms for disease prediction.",
      image: "images/diseasepred.png",
      githubLink:"https://github.com/caokhanhquynh/Disease-Prediction"
    },
    {
      title: "Jewelry Store Management Webapp",
      description: "A comprehensive e-commerce platform that streamlines jewelry store operations from order placement to delivery. The system features multi-user functionality with distinct interfaces for customers, delivery drivers, and administrators. The platform enables administrators to monitor customer orders in real-time while facilitating seamless communication between customers and delivery personnel.",
      image: "images/kkj.png",
      githubLink:""
    },
    {
      title: "Gold Price Prediction Webpage",
      description: "A financial forecasting web application that leverages machine learning to predict gold prices. The project combines real-time data scraping capabilities using BeautifulSoup and Requests with advanced ML models implemented through Scikit-learn and Pandas. Key features include linear regression and KNN algorithms for price prediction analysis.",
      image: "images/goldpred.png",
      githubLink:"https://github.com/caokhanhquynh/Gold-Price-Prediction-using-KNN"
    },
    {
      title: "The Jungle Game",
      description: "An interactive two-player strategy board game developed with PyGame, showcasing engaging graphics and complex game mechanics. The implementation features comprehensive rule systems for player turns and movements, along with strategic win conditions that create challenging gameplay experiences. The project demonstrates skills in game development, user interface design, and logic implementation.",
      image: "images/jungleGame.png",
      githubLink:"https://github.com/caokhanhquynh/The_Jungle_Game"
    },
  ];

  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("Ho Chi Minh"); // Replace with desired default city
  const weatherEmojis = {
    Clear: "☀️",
    Clouds: "☁️",
    Rain: "🌧️",
    Drizzle: "🌦️",
    Thunderstorm: "⛈️",
    Snow: "❄️",
    Mist: "🌫️",
    Fog: "🌫️",
    Haze: "🌁",
    Smoke: "💨",
    Dust: "🌬️",
    Sand: "🌵",
  };


  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const API_KEY = import.meta.env.VITE_API_KEY;
        console.log("api: ", API_KEY);
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        setWeather(response.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeather();
  }, [city]);
  
  const getWeatherEmoji = (condition) => {
    return weatherEmojis[condition] || "🌈"; // Default emoji if no match
  };

  return(
    
    <div className="min-h-screen bg-[#2b2e2f] text-white">
      {/* Update avatar */}
      <link rel="icon" href="%PUBLIC_URL%/profilePic.png" />


    {/* Header */}
    <div className="relative px-4 sm:px-8 py-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
          <div className="w-36 h-36 md:w-48 md:h-48 flex-shrink-0">
            <img
              src="images/profilePic.jpg"
              alt="Profile"
              className="w-full h-full object-cover rounded"
            />
          </div>
          <div className="flex flex-col items-center md:items-start justify-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-center md:text-left text-emerald-500">QUINNIE CAO</h1>
            <div className="flex flex-col gap-3 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <Mail size={20} className="text-gray-300" />
                <a
                  href="mailto:caokhanhquynh57@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                caokhanhquynh57@gmail.com</a>
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
                  href="https://www.linkedin.com/in/khanh-quynh-cao-993425320/"
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
        {weather && (
          <div className="absolute top-0 right-0 m-6 text-gray-300 text-sm">
             {getWeatherEmoji(weather.weather[0].main)} {`Currently coding in ${weather.weather[0].description} ${city}`}
          </div>
        )}
      </div>
    </div>

    {/* Work Experiences Section */}
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-1 mb-8 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-3 text-center text-emerald-500">WORK EXPERIENCES</h2>
      <a 
        href="http://beqholdings.com/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-lg md:text-xl font-bold hover:text-blue-400 transition-colors">
        BeQ Holdings | Ho Chi Minh | Vietnam ( 01/2025 - 05/2025 )
      </a>
      <p className="text-gray-200 text-sm mb-6 md:text-base">Position: Webapp Development Intern</p>
    </div>

    {/* Skills Section */}
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-1 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-3 text-emerald-500">SKILLS</h2>
      <div className="space-y-6 text-sm md:text-base">
        <div className="space-y-2">
          <div className="font-bold text-lg md:text-xl mb-2">Programming Languages</div>
          <div>C++, C, Python, Java, HTML, CSS, Javascript, TypeScript, MATLAB, Rust, Haskell, Coq, RISC-V, R</div>
        </div>
        <div className="space-y-2">
          <div className="font-bold text-lg md:text-xl mb-2">Frameworks</div>
          <div>SpringBoot, React, Flask, Next.js</div>
        </div>
      </div>
    </div>

    {/* Academic Projects Section */}
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-8 text-center text-emerald-500">PROJECTS</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {academicProjects.map((project, index) => (
          <a 
            key={index} 
            href={project.githubLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-gray-900 rounded-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <div className="relative h-48">
              <img 
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover brightness-50"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-xl font-bold text-white text-center px-4">
                  {project.title}
                </h3>
              </div>
            </div>
            <div className="p-4 bg-gray-800">
              <p className="text-white text-sm leading-relaxed">
                {project.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>

    {/* Education Section - Adjust text size */}
    <div className="py-8 md:py-16 text-center px-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-emerald-500">EDUCATION</h2>
      <a 
        href="https://www.sfu.ca/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-lg md:text-xl font-bold hover:text-blue-400 transition-colors"
      >
        SIMON FRASER UNIVERSITY | BC | Canada ( 09/2023 - 12/2026 )
      </a>
      <p className="text-gray-200 text-sm md:text-base">Bachelor of Science in Computing Science</p>
      <p className="text-gray-200 text-sm md:text-base">GPA: 3.43</p>
    </div>

    {/* Footer Section */}
    <footer class="bg-gray-900 text-white py-6">
    <div class="container mx-auto text-center">
      <div class="mb-4">
        <a href="https://github.com/caokhanhquynh" target="_blank" class="mx-2">
          <i class="fab fa-github"></i> GitHub
        </a>
        <a href="https://www.linkedin.com/in/khanh-quynh-cao-993425320/" target="_blank" class="mx-2">
          <i class="fab fa-linkedin"></i> LinkedIn
        </a>
        <a href="mailto:caokhanhquynh57@gmail.com" class="mx-2">
          <i class="fas fa-envelope"></i> Email
        </a>
      </div>
      <p class="text-sm text-gray-400">
        © 2024
      </p>
    </div>
  </footer>

  </div>
  
  )
}

export default Portfolio;