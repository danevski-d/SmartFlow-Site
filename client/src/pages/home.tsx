import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { 
  Zap, 
  Brain, 
  MessageSquare, 
  Clock, 
  Mail, 
  MapPin,
  MessageCircle,
  DollarSign,
  Sparkles,
  Headphones
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useEffect, useRef, useState } from "react";
import heroImage from "@assets/generated_images/Automation_workflow_hero_illustration_d9699696.png";

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  company: z.string().optional(),
  country: z.string().optional(),
  email: z.string().email("Valid email is required"),
  description: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function Home() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      company: "",
      country: "",
      email: "",
      description: "",
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    // TODO: Replace with your actual Calendly link once account is set up
    // Example format: https://calendly.com/19dragan96/meeting-type
    const calendlyLink = "https://calendly.com/dragan-danevski/automation-audit";
    window.open(calendlyLink, "_blank");
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".fade-up").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const logos = [
    { name: "n8n", url: "https://n8n.io" },
    { name: "Zapier", url: "https://zapier.com" },
    { name: "Make", url: "https://make.com" },
    { name: "OpenAI", url: "https://openai.com" },
    { name: "Gmail", url: "https://gmail.com" },
    { name: "Outlook", url: "https://outlook.com" },
    { name: "YouTube", url: "https://youtube.com" },
    { name: "TikTok", url: "https://tiktok.com" },
    { name: "Instagram", url: "https://instagram.com" },
    { name: "Sheets", url: "https://sheets.google.com" },
    { name: "Facebook", url: "https://facebook.com" },
    { name: "Notion", url: "https://notion.so" },
    { name: "HubSpot", url: "https://hubspot.com" },
    { name: "ChatGPT", url: "https://chat.openai.com" }
  ];

  return (
    <div className="min-h-screen">
      <style>{`
        .fade-up {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        
        .fade-up.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .hero-gradient {
          background: linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.6));
        }
      `}</style>

      {/* Header Navigation */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Zap className="h-6 w-6 text-primary" data-testid="logo-icon" />
              <span className="text-xl font-bold tracking-tight" data-testid="text-brand-name">
                SmartFlow
              </span>
            </div>
            
            <nav className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("about")}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-about"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-services"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-pricing"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-contact"
              >
                Contact
              </button>
            </nav>

            <Button 
              onClick={() => scrollToSection("contact")}
              className="hidden md:inline-flex"
              data-testid="button-header-cta"
            >
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section with Background Image */}
      <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center px-6 md:px-8 lg:px-12 py-16 md:py-24 lg:py-32 overflow-hidden">
        {/* Background Image with Dark Wash */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Automation workflow visualization" 
            className="w-full h-full object-cover"
          />
          <div className="hero-gradient absolute inset-0" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white drop-shadow-lg"
              data-testid="text-hero-headline"
            >
              Automate the Boring Stuff.{" "}
              <span className="text-primary drop-shadow-lg">Grow Smarter.</span>
            </h1>
            <p 
              className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto drop-shadow-md"
              data-testid="text-hero-subheadline"
            >
              We help small businesses save hours every week with smart AI + workflow automation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="rounded-full px-8 py-6 text-base shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              data-testid="button-hero-cta"
            >
              Get Free Automation Audit
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6 pt-8">
            <div className="flex flex-col items-center gap-2" data-testid="icon-automation">
              <div className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <span className="text-xs text-white/80 font-medium">Automation</span>
            </div>
            <div className="flex flex-col items-center gap-2" data-testid="icon-ai">
              <div className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                <Brain className="h-5 w-5 text-white" />
              </div>
              <span className="text-xs text-white/80 font-medium">AI-Powered</span>
            </div>
            <div className="flex flex-col items-center gap-2" data-testid="icon-chat">
              <div className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                <MessageSquare className="h-5 w-5 text-white" />
              </div>
              <span className="text-xs text-white/80 font-medium">Chatbots</span>
            </div>
            <div className="flex flex-col items-center gap-2" data-testid="icon-time">
              <div className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                <Clock className="h-5 w-5 text-white" />
              </div>
              <span className="text-xs text-white/80 font-medium">Time-Saving</span>
            </div>
          </div>
        </div>
      </section>

      {/* Moving Logos Section */}
      <section className="py-16 md:py-20 bg-muted/30 fade-up">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <h2 
            className="text-2xl md:text-3xl font-semibold text-center mb-12"
            data-testid="text-integrations-title"
          >
            We Integrate With Your Favorite Tools
          </h2>
          
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-muted/30 to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-muted/30 to-transparent z-10" />
            
            <div className="flex animate-scroll">
              {[...logos, ...logos].map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 mx-8 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
                  data-testid={`logo-${logo.name.toLowerCase()}-${index}`}
                >
                  <div className="h-12 md:h-16 w-24 md:w-32 flex items-center justify-center bg-card rounded-md px-4 shadow-sm">
                    <span className="text-sm md:text-base font-medium text-foreground">
                      {logo.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 lg:py-32 px-6 md:px-8 lg:px-12 fade-up">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 
            className="text-3xl md:text-4xl font-semibold"
            data-testid="text-about-title"
          >
            Who We Are
          </h2>
          <p 
            className="text-base md:text-lg text-muted-foreground leading-relaxed"
            data-testid="text-about-description"
          >
            SmartFlow is a small AI automation agency focused on helping small business owners simplify their work with affordable, custom-built automations using tools like n8n, Make, Zapier, and ChatGPT.
          </p>
          <p 
            className="text-base md:text-lg text-muted-foreground leading-relaxed"
            data-testid="text-about-mission"
          >
            Our mission is to make AI accessible to everyone — not just big corporations.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="services" className="py-16 md:py-24 lg:py-32 px-6 md:px-8 lg:px-12 bg-muted/30 fade-up">
        <div className="max-w-7xl mx-auto">
          <h2 
            className="text-3xl md:text-4xl font-semibold text-center mb-12"
            data-testid="text-why-choose-title"
          >
            Why Choose Us
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="text-center hover-elevate active-elevate-2 transition-all duration-300" data-testid="card-communication">
              <CardHeader className="space-y-4 pb-4">
                <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <MessageCircle className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Clear Communication</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We speak your language, not tech jargon. Every step is clear and simple.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-elevate active-elevate-2 transition-all duration-300" data-testid="card-affordable">
              <CardHeader className="space-y-4 pb-4">
                <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <DollarSign className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Affordable Pricing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Transparent pricing designed for small businesses and startups.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-elevate active-elevate-2 transition-all duration-300" data-testid="card-ai-powered">
              <CardHeader className="space-y-4 pb-4">
                <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Sparkles className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">AI-Powered</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Cutting-edge AI technology to automate tasks you thought were impossible.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-elevate active-elevate-2 transition-all duration-300" data-testid="card-support">
              <CardHeader className="space-y-4 pb-4">
                <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Headphones className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Fast Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Quick responses and ongoing support to keep your automations running smoothly.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 md:py-24 lg:py-32 px-6 md:px-8 lg:px-12 fade-up">
        <div className="max-w-7xl mx-auto">
          <h2 
            className="text-3xl md:text-4xl font-semibold text-center mb-12"
            data-testid="text-pricing-title"
          >
            Our Plans
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover-elevate active-elevate-2 transition-all duration-300 hover:scale-105 hover:-translate-y-2" data-testid="card-basic">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl">Basic</CardTitle>
                <CardDescription className="text-3xl font-bold text-foreground mt-4">
                  €150
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Connect your essential tools. Automate emails, calendar sync, and follow-up messages to save hours weekly.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Zap className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Email automation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Calendar sync</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Follow-up messages</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => scrollToSection("contact")}
                  data-testid="button-basic-select"
                >
                  Get Started
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-2 border-primary hover-elevate active-elevate-2 transition-all duration-300 hover:scale-105 hover:-translate-y-2 relative" data-testid="card-medium">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-medium shadow-lg">
                Popular
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl">Medium</CardTitle>
                <CardDescription className="text-3xl font-bold text-foreground mt-4">
                  €400
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  AI-powered personalization, data extraction, CRM updates, and automatic follow-up workflows.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Zap className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Everything in Basic</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>AI personalization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Data extraction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>CRM automation</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => scrollToSection("contact")}
                  data-testid="button-medium-select"
                >
                  Get Started
                </Button>
              </CardFooter>
            </Card>

            <Card className="hover-elevate active-elevate-2 transition-all duration-300 hover:scale-105 hover:-translate-y-2" data-testid="card-pro">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl">Pro</CardTitle>
                <CardDescription className="text-3xl font-bold text-foreground mt-4">
                  from €900
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Custom AI agents, chatbots, and advanced automation systems designed to scale your business.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Zap className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Everything in Medium</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Custom AI agents</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Advanced chatbots</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Enterprise scaling</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => scrollToSection("contact")}
                  data-testid="button-pro-select"
                >
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 lg:py-32 px-6 md:px-8 lg:px-12 bg-muted/30 fade-up">
        <div className="max-w-5xl mx-auto">
          <h2 
            className="text-3xl md:text-4xl font-semibold text-center mb-12"
            data-testid="text-contact-title"
          >
            Book Your Free Automation Audit
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name *</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="John Doe"
                            {...field}
                            data-testid="input-name"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your Company"
                            {...field}
                            data-testid="input-company"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="country"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Country</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="United States"
                            {...field}
                            data-testid="input-country"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email *</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="john@example.com"
                            {...field}
                            data-testid="input-email"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Describe what you'd like to automate</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your automation needs..."
                            rows={4}
                            {...field}
                            data-testid="input-description"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full shadow-lg hover:shadow-xl transition-all duration-300"
                    data-testid="button-book-call"
                  >
                    Book a Call
                  </Button>
                </form>
              </Form>
            </Card>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a 
                        href="mailto:19dragan96@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        data-testid="link-email"
                      >
                        19dragan96@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Coverage</p>
                      <p 
                        className="text-muted-foreground"
                        data-testid="text-coverage"
                      >
                        We work with clients across Europe, Balkans, and USA.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="p-6 bg-primary/5 border-primary/20">
                <h4 className="font-semibold mb-2">What to Expect</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>15-30 minute consultation call</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Free automation assessment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Custom recommendations for your business</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>No obligation quote</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-8 lg:px-12 border-t border-border">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <Zap className="h-5 w-5 text-primary" />
            <span className="text-lg font-bold">SmartFlow Automation Agency</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2025 SmartFlow. Making AI accessible to everyone.
          </p>
        </div>
      </footer>
    </div>
  );
}
