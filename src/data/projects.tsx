import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { Title } from "@radix-ui/react-toast";
import { ArrowUpRight } from "lucide-react";
import { ReactNode } from "react";
import {
  SiPython,
  SiJupyter,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiTensorflow,
  SiKeras,
  SiPlotly,
  SiStreamlit,
  SiFlask,
  SiFastapi,
  SiArduino,
  SiCplusplus,
  SiRaspberrypi,
  SiAdafruit,
  SiSmartthings,
  SiR,
  SiTidyverse,
  SiF1,
  SiSelenium,
  SiX,
  SiQuantconnect,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiWebgl,
  SiThreedotjs,
  SiNodedotjs,
  SiVercel,
  SiGithub,
  SiResend,
} from "react-icons/si";

const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live?: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && (
        <a
          className="font-mono underline flex gap-2"
          rel="noopener noreferrer"
          target="_blank"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Visit Website
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </a>
      )}
      {repo && (
        <a
          className="font-mono underline flex gap-2"
          rel="noopener noreferrer"
          target="_blank"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </a>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

const PROJECT_SKILLS = {
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  jupyter: {
    title: "Jupyter",
    bg: "black",
    fg: "white",
    icon: <SiJupyter />,
  },
  sklearn: {
    title: "Scikit-learn",
    bg: "black",
    fg: "white",
    icon: <SiScikitlearn />,
  },
  pandas: {
    title: "Pandas",
    bg: "black",
    fg: "white",
    icon: <SiPandas />,
  },
  numpy: {
    title: "NumPy",
    bg: "black",
    fg: "white",
    icon: <SiNumpy />,
  },
  tensorflow: {
    title: "TensorFlow",
    bg: "black",
    fg: "white",
    icon: <SiTensorflow />,
  },
  keras: {
    title: "Keras",
    bg: "black",
    fg: "white",
    icon: <SiKeras />,
  },
  plotly: {
    title: "Plotly",
    bg: "black",
    fg: "white",
    icon: <SiPlotly />,
  },
  streamlit: {
    title: "Streamlit",
    bg: "black",
    fg: "white",
    icon: <SiStreamlit />,
  },
  flask: {
    title: "Flask",
    bg: "black",
    fg: "white",
    icon: <SiFlask />,
  },
  fastapi: {
    title: "FastAPI",
    bg: "black",
    fg: "white",
    icon: <SiFastapi />,
  },
  arduino: {
  title: "Arduino",
  bg: "black",
  fg: "white",
  icon: <SiArduino />,
  },
  cplusplus: {
    title: "C++",
    bg: "black",
    fg: "white",
    icon: <SiCplusplus />,
  },
  iot: {
    title: "IoT",
    bg: "black",
    fg: "white",
    icon: <SiSmartthings />,
  },
  lidar: {
    title: "LiDAR",
    bg: "black",
    fg: "white",
    icon: <SiAdafruit />,
  },
  r: {
    title: "R",
    bg: "black",
    fg: "white",
    icon: <SiR />,
  },
  tidyverse: {
    title: "Tidyverse",
    bg: "black",
    fg: "white",
    icon: <SiTidyverse />,
  },
  f1: {
    title: "FastF1 API",
    bg: "black",
    fg: "white",
    icon: <SiF1 />,
  },
  selenium: {
    title: "Selenium",
    bg: "black",
    fg: "white",
    icon: <SiSelenium />,
  },
  tweepy: {
    title: "Tweepy API",
    bg: "black",
    fg: "white",
    icon: <SiX />,
  },
  finance: {
    title: "Finance",
    bg: "black",
    fg: "white",
    icon: <SiQuantconnect />, 
  },
  react: {
    title: "React",
    bg: "black",
    fg: "white",
    icon: <SiReact />,
  },
  nextjs: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <SiNextdotjs />,
  },
  typescript: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  tailwind: {
    title: "TailwindCSS",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  webgl: {
    title: "WebGL",
    bg: "black",
    fg: "white",
    icon: <SiWebgl />,
  },
  threejs: {
    title: "Three.js",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <SiNodedotjs />,
  },
  vercel: {
    title: "Vercel",
    bg: "black",
    fg: "white",
    icon: <SiVercel />,
  },
  github: {
    title: "GitHub",
    bg: "black",
    fg: "white",
    icon: <SiGithub />,
  },
  resend: {
    title: "Resend",
    bg: "black",
    fg: "white",
    icon: <SiResend />,
  }
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live?: string;
};

const projects: Project[] = [
  {
    id: "f1-race-prediction",
    category: "Machine Learning",
    title: "F1 Race Prediction",
    src: "/assets/projects-screenshots/F1 Race Prediction/F1 Race Prediction Header.png",
    screenshots: ["F1 Race Prediction Header.png"],
    skills: {
      frontend: [PROJECT_SKILLS.streamlit],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.sklearn,
        PROJECT_SKILLS.pandas,
        PROJECT_SKILLS.numpy,
        PROJECT_SKILLS.f1,
      ],
    },
    github: "https://github.com/VedanshAvlani2/F1-Race-Prediction",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Predicting Formula 1 Race Outcomes with Machine Learning
          </TypographyP>
          <TypographyP className="font-mono">
            A machine learning system that predicts Formula 1 race lap times using
            driver sector performance, qualifying data, constructor points, team statistics, and 
            weather-adjusted metrics. Powered by the FastF1 API, the project
            integrates real-world data and serves predictions through an
            interactive Streamlit dashboard.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono">
            <li>Live & historical F1 data ingestion through FastF1</li>
            <li>Feature engineering with sector times, team scores, and weather factors</li>
            <li>Gradient Boosting Regressor for lap time prediction</li>
            <li>Race selection, driver input, and real-time results via Streamlit</li>
            <li>Feature importance insights highlighting key performance drivers</li>
          </ul>
          <br></br>
          <br></br>
          <SlideShow
            images={[
              `${BASE_PATH}/F1 Race Prediction/F1 Race Prediction 1.png`,
              `${BASE_PATH}/F1 Race Prediction/F1 Race Prediction 2.png`,
              `${BASE_PATH}/F1 Race Prediction/F1 Race Prediction 3.png`,
              `${BASE_PATH}/F1 Race Prediction/F1 Race Prediction 4.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "sentiment-analysis",
    category: "NLP",
    title: "Sentiment Analysis of Player Tweets",
    src: "/assets/projects-screenshots/Twitter Sentiment Analysis/Sentiment Header.png",
    screenshots: ["Sentiment Header.png"],
    skills: {
      frontend: [],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.pandas,
        PROJECT_SKILLS.selenium,
        PROJECT_SKILLS.tweepy,
      ], 
    },
    github: "https://github.com/VedanshAvlani2/Sentiment-Analysis-of-Player-Tweets",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            A sentiment analysis project that collects real-time tweets for three
            selected players using Tweepy, cleans the text, and classifies polarity
            with TextBlob. The system compares fan sentiment across players and
            visualizes positive vs negative distributions using clear charts.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Technologies Used</TypographyH3>
          <ul className="list-disc ml-6 font-mono">
            <li>Twitter data extraction using Tweepy API</li>
            <li>Text cleaning pipeline to remove noise (URLs, hashtags, mentions)</li>
            <li>Sentiment classification via polarity scores</li>
            <li>Player-to-player sentiment comparison</li>
            <li>Visualized results using Matplotlib bar charts</li>
          </ul>
          <br></br>
          <br></br>
          <SlideShow
            images={[
              `${BASE_PATH}/Twitter Sentiment Analysis/Sentiment 1.jpeg`,
              `${BASE_PATH}/Twitter Sentiment Analysis/Sentiment 2.jpeg`,
              `${BASE_PATH}/Twitter Sentiment Analysis/Sentiment 3.jpeg`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "customer-churn",
    category: "Predictive Analytics",
    title: "Customer Churn Prediction",
    src: "/assets/projects-screenshots/Customer Churn Prediction/Customer Churn Prediction Header.png",
    screenshots: ["Customer Churn Prediction Header.png"],
    skills: {
      frontend: [],
      backend: [
        PROJECT_SKILLS.r,
        PROJECT_SKILLS.tidyverse
      ],
    },
    github: "https://github.com/VedanshAvlani2/Customer-Churn-Prediction-in-Telecom",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            A predictive analytics project focused on identifying customers likely to churn in the
            telecom industry. Using demographic data, service usage patterns, and payment history,
            the model uncovers key drivers of customer attrition and provides insights to help
            businesses improve retention strategies through data-driven decision making.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Project Highlights</TypographyH3>
          <ul className="list-disc ml-6 font-mono">
            <li>Data cleaning, preprocessing, and categorical encoding</li>
            <li>Exploratory analysis to reveal churn patterns and risk groups</li>
            <li>Models: Logistic Regression, Decision Tree, Random Forest, Neural Network</li>
            <li>Model evaluation using accuracy, specificity, and interpretability</li>
            <li>Random Forest chosen as final model for its stability, high specificity, and strong generalization</li>
            <li>Actionable recommendations for reducing churn and improving retention</li>
          </ul>
          <br></br>
          <br></br>
          <SlideShow
            images={[
              `${BASE_PATH}/Customer Churn Prediction/Customer Churn Prediction.png`,
              `${BASE_PATH}/Customer Churn Prediction/Random Forest Feature Importance Plot.png`,
              `${BASE_PATH}/Customer Churn Prediction/Comparison of all Models.png`,
              `${BASE_PATH}/Customer Churn Prediction/Comparison of all Models 2.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "customer-conversion",
    category: "Marketing Analytics / Machine Learning",
    title: "Customer Conversion Prediction in Digital Marketing Campaigns",
    src: "/assets/projects-screenshots/Customer Conversion in Digital Marketing/Customer Conversion in Digital Marketing Header.png",
    screenshots: ["Customer Conversion in Digital Marketing Header.png"],
    skills: {
      frontend: [PROJECT_SKILLS.jupyter],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.sklearn,
        PROJECT_SKILLS.pandas,
        PROJECT_SKILLS.plotly,
      ],
    },
    github: "https://github.com/VedanshAvlani2/Customer-Conversion-in-Digital-Marketing-Campaigns",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            A complete machine learning workflow for predicting customer conversion in digital marketing campaigns.
            Using demographic data, customer behavior metrics, engagement signals, and campaign details, the project
            identifies key drivers of conversion and builds predictive models that help businesses optimize marketing spend
            and improve ROI.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Core Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono">
            <li>Customer behavior & engagement-based prediction modeling</li>
            <li>Class balancing with SMOTE for improved accuracy</li>
            <li>Comparison of Logistic, Tree-based, and XGBoost models</li>
            <li>ROC-AUC based evaluation for best model selection</li>
            <li>Insights into demographic & channel-based conversion drivers</li>
          </ul>
          <br></br>
          <br></br>
          <SlideShow
            images={[
              `${BASE_PATH}/Customer Conversion in Digital Marketing/Customer Conversion in Digital Marketing.png`,
              `${BASE_PATH}/Customer Conversion in Digital Marketing/Correlation Heatmap.png`,
              `${BASE_PATH}/Customer Conversion in Digital Marketing/Decision tree trained on SMOTE data.png`,
              `${BASE_PATH}/Customer Conversion in Digital Marketing/Top 10 features in XG Boost.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "healthcare-chatbot",
    category: "AI Chatbot",
    title: "Healthcare Chatbot",
    src: "/assets/projects-screenshots/Healthcare Chatbot/Healthcare Header.png",
    screenshots: ["Healthcare Header.png"],
    skills: {
      frontend: [PROJECT_SKILLS.streamlit],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.sklearn,
        PROJECT_SKILLS.pandas,
        PROJECT_SKILLS.numpy,
      ],
    },
    github: "https://github.com/VedanshAvlani2/Healthcare-Chatbot",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            A machine learning–powered healthcare chatbot that predicts possible
            diseases based on user-reported symptoms. It uses Decision Tree and SVM
            models to classify conditions, provides severity analysis, and suggests
            precautions, supported by text-to-speech interaction.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Capabilities</TypographyH3>
          <ul className="list-disc ml-6 font-mono">
            <li>Symptom-based disease prediction using ML models</li>
            <li>Support for Decision Tree & SVM classification</li>
            <li>Severity scoring and precaution recommendations</li>
            <li>Text-to-speech feedback for user assistance</li>
            <li>Pattern matching for recognizing symptoms from input</li>
          </ul>
          <br></br>
          <br></br>
          <SlideShow
            images={[
              `${BASE_PATH}/Healthcare Chatbot/Healthcare 1.png`,
              `${BASE_PATH}/Healthcare Chatbot/Healthcare 2.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "dprox",
    category: "Embedded Systems / IoT Safety",
    title: "DPROX",
    src: "/assets/projects-screenshots/DPROX/DPROX Header.png",
    screenshots: ["DPROX Header.png"],
    skills: {
      frontend: [],
      backend: [
        PROJECT_SKILLS.cplusplus,
        PROJECT_SKILLS.iot,
        PROJECT_SKILLS.lidar,
        PROJECT_SKILLS.arduino,
      ],
    },
    github: "https://github.com/VedanshAvlani2/DPROX",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
          DPROX is a LiDAR-powered smart helmet designed to enhance motorcycle rider safety.
          The system integrates multiple TF Mini-S LiDAR sensors with an Arduino Uno to
          detect obstacles in real time on the rider’s left, right and rear sides. Readings are
          displayed on an onboard OLED screen, giving riders instant awareness of nearby hazards.
          This project combines embedded hardware, microcontroller programming, and 3D-printed
          integration to create an intelligent safety device for on-road environments.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Technical Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono">
            <li>Real-time obstacle detection using high-precision LiDAR sensors</li>
            <li>Continuous distance monitoring on left, right and rear sides</li>
            <li>OLED display for instant visual feedback and alerts</li>
            <li>Arduino-based data processing with optimized C++ firmware</li>
            <li>3D-printed mounts for helmet integration and sensor stability</li>
            <li>Future support for wireless communication and IoT alerts</li>
          </ul>
          <br></br>
          <br></br>
          <SlideShow 
          images={[
            `${BASE_PATH}/DPROX/DPROX 1.jpg`,
            `${BASE_PATH}/DPROX/DPROX 2.jpg`,
            `${BASE_PATH}/DPROX/DPROX 3.jpg`,
          ]} 
          />
        </div>
      );
    },
  },
  {
    id: "finhack-trading-challenge",
    category: "Quantitative Finance",
    title: "100K Trading Challenge – FinHack 2025",
    src: "/assets/projects-screenshots/FinHack/Finhack Header.png",
    screenshots: ["Finhack Header.png"],
    skills: {
      frontend: [],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.finance,
        PROJECT_SKILLS.pandas,
        PROJECT_SKILLS.numpy,
        PROJECT_SKILLS.sklearn,   
      ],
    },
    github: "https://github.com/VedanshAvlani2/100K-Trading-Challenge---FinHack-2025",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            A quantitative finance project built for FinHack 2025 that simulates 
            four ETF-based investment strategies using $100K initial capital. 
            The project uses historical market data, backtesting engines, and 
            risk simulations to identify the most robust strategy for beginner 
            investors. The Macro-Aware Momentum model emerged as the final winner.
          </TypographyP>

          <ProjectsLinks repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono">
            <li>Backtesting of Buy & Hold, Momentum, Risk-Parity, and Macro-Aware Momentum models</li>
            <li>Historical ETF data collection using Yahoo Finance (yfinance)</li>
            <li>Performance metrics: returns, volatility, Sharpe ratio, drawdowns</li>
            <li>Monte Carlo simulations for forward-looking robustness testing</li>
            <li>Identification of the optimal strategy using macroeconomic filters</li>
          </ul>

          <SlideShow
            images={[
              `${BASE_PATH}/FinHack/Finhack 1.png`,
              `${BASE_PATH}/FinHack/Finhack 2.png`,
              `${BASE_PATH}/FinHack/Finhack 3.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "portfolio-website",
    category: "Full-Stack Web Development",
    title: "3D Interactive Portfolio Website",
    src: "/assets/projects-screenshots/Portfolio Website/Portfolio Header.png",
    screenshots: ["Portfolio Header.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.nextjs,
        PROJECT_SKILLS.typescript,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.webgl,
        PROJECT_SKILLS.threejs,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.vercel,
        PROJECT_SKILLS.github,
        PROJECT_SKILLS.resend,
      ],
    },
    github: "https://github.com/VedanshAvlani2/Portfolio-Website",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            A fully custom-built 3D interactive portfolio website developed with
            Next.js, React, Spline 3D scenes, and TailwindCSS. Designed to showcase
            technical projects, visual demos, and real-time interactive components
            across devices with smooth animations and responsive layouts.
          </TypographyP>

          <ProjectsLinks repo={this.github} live={this.live} />

          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono">
            <li>3D interactive Spline scenes integrated directly into React components</li>
            <li>Dynamic project pages powered by modular JSON configuration</li>
            <li>Fully responsive UI with TailwindCSS and custom animations</li>
            <li>Optimized image and component rendering for speed and smoothness</li>
            <li>Complete redesign of About, Skills, Projects, and Contact sections</li>
          </ul>

          <SlideShow images={[
            `${BASE_PATH}/Portfolio Website/Portfolio 1.png`,
            `${BASE_PATH}/Portfolio Website/Portfolio 2.png`,
            `${BASE_PATH}/Portfolio Website/Portfolio 3.png`,
            `${BASE_PATH}/Portfolio Website/Portfolio 4.png`,
          ]} />
        </div>
      );
    },
  },
];

export default projects;