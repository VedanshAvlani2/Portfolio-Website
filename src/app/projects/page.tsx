"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import "@splidejs/react-splide/css";

const PROJECTS = [
  {
    id: 1,
    name: "F1 Race Prediction",
    description: `A machine learning model that predicts Formula 1 race lap times using 
    FastF1 data, sector performance, team strength, and weather adjustments. 
    Includes a Streamlit dashboard for interactive race and driver predictions.`,
    link: "https://github.com/VedanshAvlani2/F1-Race-Prediction",
    images: [
      "/assets/projects-screenshots/F1 Race Prediction/F1 Race Prediction 1.png",
      "/assets/projects-screenshots/F1 Race Prediction/F1 Race Prediction 2.png",
      "/assets/projects-screenshots/F1 Race Prediction/F1 Race Prediction 3.png",
      "/assets/projects-screenshots/F1 Race Prediction/F1 Race Prediction 4.png",
    ],
  },
  {
    id: 2,
    name: "Sentiment Analysis of Player Tweets",
    description: `Natural Language Processing project analyzing player tweets to determine sentiment patterns. 
    Utilizes advanced NLP techniques to extract insights from social media data and understand public perception.`,
    link: "https://github.com/VedanshAvlani2/Sentiment-Analysis-of-Player-Tweets",
    images: [
      "/assets/projects-screenshots/Twitter Sentiment Analysis/Sentiment 1.jpeg",
      "/assets/projects-screenshots/Twitter Sentiment Analysis/Sentiment 2.jpeg",
      "/assets/projects-screenshots/Twitter Sentiment Analysis/Sentiment 3.jpeg",
    ],
  },
  {
    id: 3,
    name: "Customer Churn Prediction",
    description: `Predictive analytics model for telecom industry to identify customers at risk of churning. 
    Implements machine learning algorithms to help businesses retain customers and optimize retention strategies.`,
    link: "https://github.com/VedanshAvlani2/Customer-Churn-Prediction-in-Telecom",
    images: [
      "/assets/projects-screenshots/Customer Churn Prediction/Customer Churn Prediction.png",
      "/assets/projects-screenshots/Customer Churn Prediction/Random Forest Feature Importance Plot.png",
      "/assets/projects-screenshots/Customer Churn Prediction/Comparison of all Models.png",
      "/assets/projects-screenshots/Customer Churn Prediction/Comparison of all Models 2.png",
    ],
  },
  {
    id: 4,
    name: "Customer Conversion in Digital Marketing",
    description: `A machine learning project that predicts customer conversion in digital marketing campaigns 
    using demographic, behavioral, and engagement data. Models such as Random Forest and XGBoost identify 
    key drivers and help optimize marketing ROI.`,
    link: "https://github.com/VedanshAvlani2/Customer-Conversion-in-Digital-Marketing-Campaigns",
    images: [
      "/assets/projects-screenshots/Customer Conversion in Digital Marketing/Customer Conversion in Digital Marketing.png",
      "/assets/projects-screenshots/Customer Conversion in Digital Marketing/Correlation Heatmap.png",
      "/assets/projects-screenshots/Customer Conversion in Digital Marketing/Decision tree trained on SMOTE data.png",
      "/assets/projects-screenshots/Customer Conversion in Digital Marketing/Top 10 features in XG Boost.png",
    ],
  },
  {
    id: 5,
    name: "Healthcare Chatbot",
    description: `AI-powered chatbot designed to assist users with healthcare-related queries and information. 
    Provides intelligent responses to medical questions while maintaining accuracy and user-friendly interaction.`,
    link: "https://github.com/VedanshAvlani2/Healthcare-Chatbot",
    images: [
      "/assets/projects-screenshots/Healthcare Chatbot/Healthcare 1.png",
      "/assets/projects-screenshots/Healthcare Chatbot/Healthcare 2.png",
    ],
  },
  {
    id: 6,
    name: "DPROX – Smart Helmet with LiDAR",
    description: `A LiDAR-powered smart helmet built using Arduino and TF Mini-S sensors. 
    Provides real-time left, right and rear obstacle detection with OLED visual alerts, 
    improving rider safety through continuous distance monitoring.`,
    link: "https://github.com/VedanshAvlani2/DPROX",
    images: [
      "/assets/projects-screenshots/DPROX/DPROX 1.jpg",
      "/assets/projects-screenshots/DPROX/DPROX 2.jpg",
      "/assets/projects-screenshots/DPROX/DPROX 3.jpg",
    ],
  },
  {
    id: 7,
    name: "100K Trading Challenge — FinHack 2025",
    description: `A quantitative finance project comparing four ETF-based strategies to grow a $100K portfolio. Includes backtesting, performance metrics, and Monte Carlo simulations to find the most robust beginner-friendly strategy.`,
    link: "https://github.com/VedanshAvlani2/100K-Trading-Challenge---FinHack-2025",
    images: [
      "/assets/projects-screenshots/FinHack/Finhack 1",
      "/assets/projects-screenshots/FinHack/Finhack 2",
      "/assets/projects-screenshots/FinHack/Finhack 3",
    ],
  },
  {
    id: 8,
    name: "3D Interactive Portfolio Website",
    description: `A custom-built Next.js + React portfolio featuring 3D Spline scenes, dynamic project pages, and a fully responsive UI designed to showcase all major projects with interactivity and smooth animations.`,
    link: "https://github.com/VedanshAvlani2/Portfolio-Website",
    images: [
      "/assets/projects-screenshots/Portfolio Website/Portfolio 1.png",
      "/assets/projects-screenshots/Portfolio Website/Portfolio 2.png",
      "/assets/projects-screenshots/Portfolio Website/Portfolio 3.png",
      "/assets/projects-screenshots/Portfolio Website/Portfolio 4.png",
    ],
  },
];

function Page() {
  return (
    <>
      <div className="container mx-auto md:px-[50px] xl:px-[150px] text-zinc-300 h-full">
        <h1 className="text-4xl mt-[100px] mb-[50px]">Projects</h1>
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 place-content-around">
          {PROJECTS.map((project) => (
            <a
              href={project.link}
              key={project.id}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <li
                className="w-[300px] h-[400px] border-[.5px] rounded-md border-zinc-600 cursor-pointer hover:border-zinc-400 transition-colors"
                style={{ backdropFilter: "blur(2px)" }}
              >
                <div className="h-[200px]">
                  <Splide
                    options={{
                      type: "loop",
                      interval: 3000,
                      autoplay: true,
                      speed: 2000,
                      perMove: 1,
                      rewind: true,
                      easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                      arrows: false,
                    }}
                    aria-label="My Favorite Images"
                  >
                    {project.images.map((image) => (
                      <SplideSlide key={image}>
                        <Image
                          src={image}
                          alt={`screenshot of "${project.name}"`}
                          className="w-[300px] h-[200px] rounded-md bg-zinc-900"
                          width={300}
                          height={400}
                          style={{ height: "200px" }}
                        />
                      </SplideSlide>
                    ))}
                  </Splide>
                </div>
                <div className="p-4 text-zinc-300">
                  <h2 className="text-xl">{project.name}</h2>
                  <p className="mt-2 text-xs text-zinc-500">
                    {project.description}
                  </p>
                </div>
              </li>
            </a>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Page;