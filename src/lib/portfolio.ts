export interface Project {
    id: string;
    name: string;
    type: string;
    description: string;
    features: string[];
    techStack: string[];
    github: string;
    demo?: string;
    image: string;
    status?: string;
}

export interface Certification {
    name: string;
    topics: string[];
}

export interface PortfolioData {
    name: string;
    email: string;
    phone: string;
    phoneTel: string;
    location: string;
    github: string;
    linkedin: string;
    tagline: string;
    about: string;
    skills: Record<string, string[]>;
    projects: Project[];
    certifications: Certification[];
}

export const portfolioData: PortfolioData = {
    name: "Uzair Teli",
    email: "uzairteli7@gmail.com",
    phone: "+91-9174160393",
    phoneTel: "tel:9174160393",
    location: "Indore, India",
    github: "https://github.com/shREKT7",
    linkedin: "https://www.linkedin.com/in/uzairteli/",
    tagline:
        "Building ML systems that think and networks that don't break — from pediatric AI research to deep packet inspection engines.",
    about:
        "I am a Computer Science Engineering student at NMIMS Indore with strong interests in Machine Learning, Systems Engineering, and Network Security. I enjoy building real-world software systems that combine AI models with scalable architectures. My work spans deep learning, network traffic analysis, distributed systems, and full-stack web applications.",
    skills: {
        Languages: ["C++", "Python", "Java", "JavaScript", "SQL"],
        "AI / ML": ["PyTorch", "TensorFlow", "LangChain", "LangGraph", "FAISS", "Qdrant", "Ollama"],
        "Web & APIs": ["FastAPI", "Flask", "Streamlit", "MERN Stack"],
        Databases: ["MongoDB", "MySQL"],
        "Systems & Networking": ["TCP/IP", "PCAP", "TLS", "Multi-threading", "Flow Tracking"],
        "Tools & Platforms": ["Git", "GitHub", "CMake", "AWS", "Google Cloud", "Vercel"],
    },
    projects: [
        {
            id: "sepsis-research",
            name: "Pediatric Sepsis Prediction — ML Research",
            type: "Research / ML / Explainable AI",
            description:
                "Supervised research paper on early sepsis onset detection in pediatric ICU patients. Built a comparative ML/DL pipeline including CatBoost, BiLSTM, and a novel hybrid model, with SHAP-based explainability on the PIC v1.1.0 database.",
            features: [
                "Comparative ML/DL pipeline (6 models + BiLSTM + hybrid)",
                "SHAP TreeExplainer for clinical interpretability",
                "Phoenix Sepsis Criteria labeling on PIC v1.1.0 dataset",
                "Novel CatBoost-BiLSTM hybrid as primary contribution",
                "Class imbalance handling via class weighting",
                "225 features extracted from first 24 hours of ICU admission",
            ],
            techStack: ["Python", "XGBoost", "LightGBM", "CatBoost", "BiLSTM", "SHAP", "Pandas", "Scikit-learn"],
            github: "#",
            image: "/projects/sepsis-research.png",
            status: "In Progress",
        },
        {
            id: "cortexrag",
            name: "CortexRAG",
            type: "AI / Systems / LLM",
            description:
                "An agentic Retrieval-Augmented Generation (RAG) system that dynamically routes queries between document retrieval, local LLM reasoning, and real-time web search using LangGraph.",
            features: [
                "Multi-agent orchestration with LangGraph",
                "FAISS-based semantic document retrieval",
                "Ollama-powered local LLM reasoning",
                "Tavily real-time web search integration",
                "Adaptive query routing pipeline",
                "Fully local, privacy-first AI system",
            ],
            techStack: ["LangGraph", "LangChain", "Ollama", "FAISS", "MongoDB", "FastAPI", "Streamlit", "Python"],
            github: "https://github.com/shREKT7/cortex-rag",
            image: "/projects/cortexrag.png",
        },
        {
            id: "flowsentinel",
            name: "FlowSentinel",
            type: "Systems / Networking / Security",
            description:
                "A high-performance Deep Packet Inspection engine written in C++ that analyzes PCAP network traffic in real time. The system implements multi-threaded packet processing, TLS SNI extraction, and rule-based traffic filtering to classify encrypted traffic without decrypting payloads.",
            features: [
                "Multi-threaded pipeline architecture",
                "Flow-based packet classification",
                "TLS SNI extraction without decrypting traffic",
                "Rule-based filtering system",
                "Network traffic analytics",
            ],
            techStack: ["C++", "PCAP", "Multi-Threading", "Network Packet Parsing"],
            github: "https://github.com/shREKT7/FlowSentinel-DPI",
            image: "/projects/flowsentinel.png",
        },
        {
            id: "community-platform",
            name: "Community Resource Platform",
            type: "Full Stack Web Application",
            description:
                "A full-stack MERN application that enables users to lend and borrow community resources through a trust-based sharing system. The platform includes authentication, user profiles, availability scheduling, and transaction tracking to simplify peer-to-peer resource sharing.",
            features: [
                "User authentication and profiles",
                "Resource listing and availability calendar",
                "Transaction history tracking",
                "Notification system for exchanges",
                "Rating and trust system",
            ],
            techStack: ["MongoDB", "Express", "React", "Node.js"],
            github: "https://github.com/shREKT7/sharesphere-mern",
            demo: undefined,
            image: "/projects/resource-platform.png",
        },
        {
            id: "stable-diffusion",
            name: "Stable Diffusion Generator",
            type: "AI / Generative AI",
            description:
                "An AI text-to-image generation system built with PyTorch and Stable Diffusion. The application converts natural language prompts into images using an optimized CUDA inference pipeline and exposes the model through a lightweight Flask interface.",
            features: [
                "Prompt-based image generation",
                "Optimized CUDA inference pipeline",
                "Flask-based interface for user interaction",
                "Structured image storage system",
            ],
            techStack: ["Python", "PyTorch", "Stable Diffusion", "Flask"],
            github: "https://github.com/shREKT7/text-to-image-generator",
            image: "/projects/stable-diffusion.png",
        },
        {
            id: "digit-recognition",
            name: "Digit Recognition System",
            type: "Machine Learning / Computer Vision",
            description:
                "A convolutional neural network trained on the MNIST dataset to recognize handwritten digits with over 98% accuracy. The project includes a Tkinter interface that allows users to draw digits and receive real-time predictions.",
            features: [
                "98%+ classification accuracy",
                "Interactive GUI for real-time prediction",
                "Data preprocessing and augmentation",
                "CNN model training pipeline",
            ],
            techStack: ["Python", "TensorFlow", "PyTorch", "Tkinter"],
            github: "https://github.com/shREKT7/mnist_digit_recognizer",
            image: "/projects/digit-recognition.png",
        },
    ],
    certifications: [
        {
            name: "Machine Learning I – Columbia+",
            topics: [
                "Supervised learning",
                "Regression",
                "Classification",
                "Model evaluation",
                "Machine learning fundamentals",
            ],
        },
        {
            name: "Oracle Cloud Infrastructure AI Foundations Associate",
            topics: [
                "AI concepts",
                "Machine learning pipelines",
                "Generative AI",
                "OCI AI services",
            ],
        },
        {
            name: "Cloud Computing – AWS (IIT Kanpur E&ICT Academy)",
            topics: [
                "AWS architecture",
                "Cloud deployment",
                "Compute services",
                "Storage solutions",
            ],
        },
        {
            name: "Google Cloud Computing Foundations & Generative AI",
            topics: [
                "Cloud infrastructure",
                "Networking",
                "Security",
                "AI/ML service deployment",
            ],
        },
        {
            name: "Networking & Packet Analysis (Self-Driven)",
            topics: [
                "TCP/IP packet parsing",
                "TLS SNI extraction",
                "Flow-based traffic classification",
            ],
        },
    ],
};
