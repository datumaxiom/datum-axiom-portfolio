import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, User } from "lucide-react";

// This would typically come from a CMS or database
const blogPostData: Record<string, any> = {
  "1": {
    title: "Getting Started with Power BI: A Beginner's Guide",
    content: `
      <p>Power BI is a powerful business analytics tool that allows you to visualize your data and share insights across your organization. In this comprehensive guide, we'll walk through everything you need to know to get started.</p>

      <h2>What is Power BI?</h2>
      <p>Power BI is a collection of software services, apps, and connectors that work together to turn your unrelated sources of data into coherent, visually immersive, and interactive insights.</p>

      <h2>Getting Started</h2>
      <p>First, you'll need to download Power BI Desktop from the Microsoft website. Once installed, you can start connecting to your data sources.</p>

      <h2>Key Features</h2>
      <ul>
        <li>Connect to hundreds of data sources</li>
        <li>Create interactive visualizations</li>
        <li>Share dashboards with your team</li>
        <li>Access reports from anywhere</li>
      </ul>

      <h2>Best Practices</h2>
      <p>When building your first dashboard, remember to keep it simple and focused on the key metrics that matter to your audience.</p>
    `,
    category: "Power BI",
    date: "2024-03-15",
    author: "Your Name",
    image: "/placeholder.svg",
  },
  "2": {
    title: "5 Python Scripts Every Data Analyst Should Know",
    content: `
      <p>Python has become the go-to language for data analysis. Here are five essential scripts that will save you hours of work.</p>

      <h2>1. Data Cleaning Script</h2>
      <p>Automate the process of cleaning and preparing your data for analysis.</p>

      <h2>2. CSV to Excel Converter</h2>
      <p>Quickly convert multiple CSV files into formatted Excel workbooks.</p>

      <h2>3. Automated Report Generator</h2>
      <p>Generate professional reports with charts and tables automatically.</p>

      <h2>4. Data Validation Script</h2>
      <p>Ensure your data meets quality standards before analysis.</p>

      <h2>5. Web Scraper</h2>
      <p>Extract data from websites for analysis and reporting.</p>
    `,
    category: "Python",
    date: "2024-03-10",
    author: "Your Name",
    image: "/placeholder.svg",
  },
};

export default function BlogPost() {
  const { id } = useParams();
  const post = id ? blogPostData[id] : null;

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Post not found</h1>
          <Button asChild>
            <Link to="/blog">Back to Blog</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <Link to="/blog" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </div>
        </div>
      </nav>

      {/* Article */}
      <article className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-3xl">
          {/* Featured Image */}
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
          />

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <Badge>{post.category}</Badge>
            <span className="text-sm text-muted-foreground flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="text-sm text-muted-foreground flex items-center gap-1">
              <User className="w-4 h-4" />
              {post.author}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-8">{post.title}</h1>

          {/* Content */}
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Call to Action */}
          <div className="mt-12 p-6 bg-muted rounded-lg">
            <h3 className="text-xl font-bold mb-2">Want to learn more?</h3>
            <p className="text-muted-foreground mb-4">
              Get in touch to discuss how I can help with your data and automation needs.
            </p>
            <Button asChild>
              <Link to="/#contact">Contact Me</Link>
            </Button>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="py-8 px-4 border-t bg-muted/30">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>© 2024 Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
