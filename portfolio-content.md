# Uzair Teli — AI / Systems Engineer Portfolio

## Basic Information

Name: Uzair Teli  
Email: uzairteli7@gmail.com  
Phone: +91-9174160393  
Location: Indore, India  

GitHub: https://github.com/YOUR_USERNAME  
LinkedIn: https://linkedin.com/in/YOUR_LINKEDIN  

Tagline:
AI / Systems Developer focused on Machine Learning, Networking Systems, and Scalable Software Engineering.

About Me:
I am a Computer Science Engineering student at NMIMS Indore with strong interests in Machine Learning, Systems Engineering, and Network Security. I enjoy building real-world software systems that combine AI models with scalable architectures.

My work spans deep learning, network traffic analysis, distributed systems, and full-stack web applications.

---

# Education

NMIMS Indore  
B.Tech Computer Science and Engineering  
Aug 2023 – May 2027

Higher Secondary  
Progressive Education  
Feb 2021 – Mar 2022

---

# Technical Skills

## Languages
C++  
Python  
Java  
JavaScript  
SQL

## Frameworks & Libraries
PyTorch  
TensorFlow  
Flask  
MERN Stack

## Databases
MongoDB  
MySQL  
SQL

## Systems & Networking
TCP/IP  
Packet Analysis  
PCAP  
TLS  
Multithreading  
Flow Tracking

## Tools & Platforms
Git  
GitHub  
CMake  
AWS  
Google Cloud

---

# Featured Projects

## FlowSentinel – Deep Packet Inspection Engine

Type: Systems / Networking / Security  
Language: C++  

Description:
A high-performance multi-threaded Deep Packet Inspection engine designed to analyze real PCAP network traffic.

Key Features:
• Multi-threaded pipeline architecture  
• Flow-based packet classification  
• TLS SNI extraction without decrypting traffic  
• Rule-based filtering system  
• Network traffic analytics

Architecture:
Reader → Load Balancer → Fast Path Workers → Output Writer

Tech Stack:
C++  
PCAP  
Multi-threading  
Network Packet Parsing  

GitHub Repo:
ADD_LINK_HERE

Live Demo:
Optional

---

## Community Resource Sharing Platform

Type: Full Stack Web Application

Description:
A MERN stack platform that enables users to lend and borrow community resources through a trust-based exchange system.

Key Features:
• User authentication and profiles  
• Resource listing and availability calendar  
• Transaction history tracking  
• Notification system for exchanges  
• Rating and trust system

Tech Stack:
MongoDB  
Express  
React  
Node.js

GitHub Repo:
ADD_LINK_HERE

Live Demo:
ADD_LINK

---

## Stable Diffusion Text-to-Image Generator

Type: AI / Generative AI

Description:
An AI system that generates images from natural language prompts using Stable Diffusion.

Key Features:
• Prompt-based image generation  
• Optimized CUDA inference pipeline  
• Flask-based interface for user interaction  
• Structured image storage system

Tech Stack:
Python  
PyTorch  
Stable Diffusion  
Flask  
CUDA

GitHub Repo:
ADD_LINK_HERE

Live Demo:
Optional

---

## Handwritten Digit Recognition System

Type: Machine Learning / Computer Vision

Description:
A CNN-based handwritten digit recognition system trained on the MNIST dataset.

Key Features:
• 98%+ classification accuracy  
• Interactive GUI for real-time prediction  
• Data preprocessing and augmentation  
• CNN model training pipeline

Tech Stack:
Python  
TensorFlow / PyTorch  
Tkinter  
MNIST Dataset

GitHub Repo:
ADD_LINK_HERE

---

# Certifications

## Machine Learning I – Columbia+

Learned:
Supervised learning  
Regression  
Classification  
Model evaluation  
Machine learning fundamentals

---

## Oracle Cloud Infrastructure AI Foundations Associate

Topics Covered:
AI concepts  
Machine learning pipelines  
Generative AI  
OCI AI services

---

## Cloud Computing – AWS (IIT Kanpur E&ICT Academy)

Topics Covered:
AWS architecture  
Cloud deployment  
Compute services  
Storage solutions

---

## Google Cloud Computing Foundations & Generative AI

Topics Covered:
Cloud infrastructure  
Networking  
Security  
AI/ML service deployment

---

## Networking & Packet Analysis (Self-Driven Project Learning)

Built a multi-threaded Deep Packet Inspection engine implementing:

• TCP/IP packet parsing  
• TLS SNI extraction  
• Flow-based traffic classification

---

# Portfolio Website Sections

The portfolio website should contain the following sections:

1. Hero Section
2. About Me
3. Tech Stack
4. Featured Projects
5. Certifications
6. GitHub Activity
7. Contact Section
8. Footer

---

# Design Requirements

The website should follow a **modern developer portfolio aesthetic** similar to 21st.dev components.

Design Guidelines:

• Dark theme preferred  
• Smooth animations  
• Interactive project cards  
• Responsive layout  
• Clean typography  
• Tailwind CSS styling  

---

# Animated Project Cards

Use the **21st.dev Animated Card Stack** component to display the featured projects.

The cards should represent:

Card 1 → FlowSentinel DPI  
Card 2 → Community Resource Platform  
Card 3 → Stable Diffusion Generator

Clicking the card should open the project detail section.

---

# Assets Needed

Project preview images can be temporary Unsplash placeholders.

Example categories:
• AI / neural networks
• networking packets
• cloud computing
• code terminal

---

# Data Model For Projects

projects = [
  {
    name: "FlowSentinel",
    description: "Deep Packet Inspection Engine",
    tags: ["C++","Networking","Systems"],
    github: "",
    demo: ""
  },
  {
    name: "Community Resource Platform",
    description: "MERN based sharing platform",
    tags: ["MERN","Web","Full Stack"],
    github: "",
    demo: ""
  },
  {
    name: "Stable Diffusion Generator",
    description: "AI text-to-image generator",
    tags: ["AI","PyTorch","Flask"],
    github: "",
    demo: ""
  },
  {
    name: "Digit Recognition",
    description: "CNN classifier",
    tags: ["ML","CNN","Python"],
    github: ""
  }
]

# Premium UI / UX Instructions

The portfolio must implement a premium developer portfolio UI inspired by Apple design and 21st.dev components.

## Visual Style

Use the following visual design rules:

- Dark theme by default
- Smooth gradients for hero backgrounds
- Glassmorphism cards (blur + transparency)
- Soft shadows and subtle borders
- Large typography for headings
- Clean minimal layout

Tailwind styles should prefer:

backdrop-blur
bg-white/5
border-white/10
shadow-xl
rounded-2xl

## Section Animations

All sections should animate when entering viewport using framer-motion.

Use animations such as:

fade-in
slide-up
scale-in

Example behaviour:

Hero → fade in  
Skills → stagger animation  
Projects → card hover animations  

## Project Card Interaction

Project cards must support:

hover → scale up slightly  
hover → glow border  
click → open project detail view

Cards must display:

project title  
short description  
technology badges  
GitHub link button  
optional demo link

## Hero Section Design

Hero must contain:

Name  
Title  
Short tagline  
Two buttons:

View Projects  
Contact Me  

Background should include:

gradient glow  
subtle animated background

## GitHub Section

Include a GitHub activity section showing:

GitHub Stats Card  
Top Languages Card  

Use public GitHub stats APIs.

## Tech Stack UI

Display tech stack using **icons in a grid layout**.

Each skill should display:

icon  
technology name  

Examples:

Python  
C++  
TensorFlow  
MongoDB  
React  

## Contact Section

The contact section must include:

Name field  
Email field  
Message field  
Send button

Use EmailJS or Formspree so the site works without a backend.

## Responsiveness

The entire portfolio must work on:

mobile  
tablet  
desktop  

Animations must remain smooth on all screen sizes.

## Assets

Use Unsplash placeholder images for projects if no images are provided.

Suggested image themes:

AI neural networks  
network packets  
coding terminals  
cloud infrastructure

## Design Goal

The final website should feel like a **modern developer portfolio similar to high-end portfolios on 21st.dev**, with smooth interactions, glass-like UI, and elegant animations.