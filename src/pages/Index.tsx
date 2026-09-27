import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import powerbiImg from "@/assets/tools/powerbi.jpeg";
import pythonImg from "@/assets/tools/python.jpeg";
import excelImg from "@/assets/tools/excel.jpeg";
import powerAutoImg from "@/assets/tools/powerautomate.jpeg";
import powerApps from "@/assets/tools/powerapps.jpeg";
import copilot from "@/assets/tools/copilot.jpeg";
import {
  Database,
  Cog,
  FileSpreadsheet,
  Bot,
  Workflow,
  BarChart3,
  Github,
  Linkedin,
  Mail,
  ExternalLink
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const navigation = [
  { name: "About", href: "#about" },
  { name: "My Work", href: "#projects" },
  { name: "Reads", href: "about" },
  { name: "Writes", href: "#about" },
  { name: "Listens", href: "#about" },
  { name: "Learning", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const expertise = [
  { name: "Strategy Consulting" },
  { name: "Machine Learning" },
  { name: "AI Powered Automation" },
  { name: "NLP &GenAI" },
  { name: "Data Visualization" }
];
const tools = [
  { name: "Power BI", image: powerbiImg },
  { name: "Python", image: pythonImg },
  { name: "Excel", image: excelImg },
  { name: "Power Automate", image: powerAutoImg },
  { name: "Power Apps", image: powerApps }
];

const services = [
  {
    title: "Data Insights & BI Dashboards",
    description: "Transform your data into interactive dashboards and actionable insights with Power BI and Tableau.",
    icon: BarChart3,
  },
  {
    title: "Process Automation & Improvement",
    description: "Automate repetitive tasks and workflows using Power Automate and Python scripts.",
    icon: Cog,
  },
  {
    title: "Data Cleaning & Transformation",
    description: "Clean, structure, and prepare your data for analysis using Python, SQL, and Excel.",
    icon: Database,
  },
  {
    title: "Workflow Optimization",
    description: "Streamline your business processes and improve efficiency through data-driven optimization.",
    icon: Workflow,
  },
  {
    title: "AI Agent",
    description: "Build intelligent AI agents that can automate complex decision-making processes.",
    icon: Bot,
  },

];

const sampleProjects = [
  {
    title: "Sales Dashboard Analytics",
    description: "Interactive Power BI dashboard for real-time sales performance tracking",
    image: "/placeholder.svg",
    link: "#",
    github: "#",
  },
  {
    title: "Automated Report Generator",
    description: "Python-based automation tool for generating weekly performance reports",
    image: "/placeholder.svg",
    link: "#",
    github: "#",
  },
  {
    title: "Data Pipeline ETL",
    description: "End-to-end data pipeline for extracting, transforming, and loading enterprise data",
    image: "/placeholder.svg",
    link: "#",
    github: "#",
  },
];

const digitalProducts = [
  {
    title: "Power BI Dashboard Template",
    description: "Professional sales dashboard template with 10+ pre-built visualizations",
    price: "$49",
    image: "/placeholder.svg",
    buyLink: "#",
  },
  {
    title: "Excel Automation Toolkit",
    description: "Collection of VBA macros and formulas for common business tasks",
    price: "$29",
    image: "/placeholder.svg",
    buyLink: "#",
  },
  {
    title: "Python Data Analysis Scripts",
    description: "Ready-to-use Python scripts for data cleaning and analysis",
    price: "$39",
    image: "/placeholder.svg",
    buyLink: "#",
  },
];

const Index = () => {
  const [activeSection, setActiveSection] = useState("about");
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    (e.target as HTMLFormElement).reset();
  };

  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Subscribed!",
      description: "You've been added to the newsletter.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div ><h1 className="caveat-header">Datum Axiom</h1>
              <h6 className="arimo-header-para">Helping businesses see clearly, decide faster, and grow smarter
              </h6>
            </div>

            <div className="flex gap-6">
              {navigation.map((item) => (
                item.href.startsWith("#") ? (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === item.href.slice(1) ? "text-primary" : "text-muted-foreground"
                      }`}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">
            About
          </h1>
          <p className="text-xl text-muted-foreground mx-2.5 mb-8 animate-fade-in">
            Desire to turn your everyday data chaos into smooth, smart systems that actually work for you? Think AI-driven solutions that handle the routine, workflows that fix themselves, and insights that guide better decisions without the guesswork. My focus is simple: help you save time, avoid headaches, and unlock opportunities hiding in plain sight. If you want data-driven clarity and intelligent automation, let's connect.
          </p>
          <div className="text-xl text-muted-foreground mx-96 mb-8">
            <ul style={{ listStyleType: "disc" }}>
              <li>Business Intelligence for E-Commerce & Retail</li>
              <li>Automated Reporting & Dashboards Specialist</li>
              <li>Financial Analytics for Startups</li>
              <li>Improve existing workflows and creation of new processes</li>
            </ul>
          </div>
          <Button size="lg" asChild className="animate-fade-in">
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>
      </section>
      <section id="about" className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          {/*  Expertise */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Core Expertise</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 lg:grid-rows-1gap-9">
              {expertise.map((expertise) => (
                <div key={expertise.name} className="flex flex-col items-center gap-2">
                  <img
                    src={expertise.image}
                    alt={expertise.name}
                    className="w-12 h-12 object-contain"
                  />
                  <p className="text-center">{expertise.name}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Tech Stack */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Tech Stack</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 lg:grid-rows-1 gap-9">
              {tools.map((tool) => (

                <div key={tool.name} className="flex flex-col items-center gap-2">
                  <img
                    src={tool.image}
                    alt={tool.name}
                    className="w-12 h-12 object-contain"
                  />
                  <p className="text-center">{tool.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-10 px-4">
        <div className="container mx-auto">
          {/* Sample Projects */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">View My Work</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sampleProjects.map((project) => (
                <Card key={project.title} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex gap-2">
                    <Button variant="default" size="sm" className="flex-1" asChild>
                      <a href={project.link}>View Project</a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} aria-label="GitHub">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Newsletter Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-muted-foreground mb-8">
            Subscribe to my newsletter for the latest insights, tutorials, and project updates.
          </p>
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4">
            <Input
              type="text"
              placeholder="Your name"
              required
              className="flex-1"
            />
            <Input
              type="email"
              placeholder="Your email"
              required
              className="flex-1"
            />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-12">
            <a
              href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/datumaxiom"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/aadesha99/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <h1></h1>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>Do you have a project I can help you with? Let’s talk about it.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    required
                    rows={5}
                  />
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t bg-muted/30">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>© 2026 Datum Axiom -- Crafted with purpose by Aadesha Biswas</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
