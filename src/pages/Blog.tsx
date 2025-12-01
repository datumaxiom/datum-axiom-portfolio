import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Calendar, ArrowLeft } from "lucide-react";

const blogPosts = [
  {
    id: "1",
    title: "Getting Started with Power BI: A Beginner's Guide",
    excerpt: "Learn the fundamentals of Power BI and how to create your first dashboard in minutes.",
    category: "Power BI",
    date: "2024-03-15",
    image: "/placeholder.svg",
    author: "Your Name",
  },
  {
    id: "2",
    title: "5 Python Scripts Every Data Analyst Should Know",
    excerpt: "Boost your productivity with these essential Python automation scripts for data analysis.",
    category: "Python",
    date: "2024-03-10",
    image: "/placeholder.svg",
    author: "Your Name",
  },
  {
    id: "3",
    title: "Building Automated Workflows with Power Automate",
    excerpt: "Step-by-step guide to automating repetitive business processes using Power Automate.",
    category: "Automation",
    date: "2024-03-05",
    image: "/placeholder.svg",
    author: "Your Name",
  },
  {
    id: "4",
    title: "SQL Best Practices for Data Analysis",
    excerpt: "Master SQL optimization techniques and write efficient queries for large datasets.",
    category: "SQL",
    date: "2024-02-28",
    image: "/placeholder.svg",
    author: "Your Name",
  },
  {
    id: "5",
    title: "Data Visualization: Choosing the Right Chart Type",
    excerpt: "Learn when to use different chart types to effectively communicate your data insights.",
    category: "Data Visualization",
    date: "2024-02-20",
    image: "/placeholder.svg",
    author: "Your Name",
  },
  {
    id: "6",
    title: "AI in Business Intelligence: Current Trends",
    excerpt: "Explore how AI is transforming business intelligence and data analytics.",
    category: "AI",
    date: "2024-02-15",
    image: "/placeholder.svg",
    author: "Your Name",
  },
];

const categories = ["All", "Power BI", "Python", "Automation", "SQL", "Data Visualization", "AI"];

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = blogPosts
    .filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <span className="text-xl font-bold text-primary">Blog</span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 bg-muted/50">
        <div className="container mx-auto text-center max-w-3xl">
          <h1 className="text-5xl font-bold mb-6">Blog & Insights</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Tutorials, tips, and insights on data analytics, automation, and business intelligence.
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              type="text"
              placeholder="Search articles..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 border-b">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No articles found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">{post.category}</Badge>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                    <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                    <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full" asChild>
                      <Link to={`/blog/${post.id}`}>Read More</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t bg-muted/30">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>© 2024 Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
