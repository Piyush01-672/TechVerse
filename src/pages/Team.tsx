import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail, Github } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Faculty Coordinator",
      department: "Computer Science",
      image: "RK",
    },
    {
      name: "Priya Sharma",
      role: "President - Techverse Club",
      department: "Technology Lead",
      image: "PS",
    },
    {
      name: "Arjun Patel",
      role: "Technical Head",
      department: "Development Team",
      image: "AP",
    },
    {
      name: "Sneha Reddy",
      role: "Operations Head",
      department: "Logistics & Management",
      image: "SR",
    },
    {
      name: "Vikram Singh",
      role: "Marketing Head",
      department: "Outreach & Promotion",
      image: "VS",
    },
    {
      name: "Ananya Gupta",
      role: "Design Head",
      department: "Creative Team",
      image: "AG",
    },
    {
      name: "Rohit Mehta",
      role: "Sponsorship Head",
      department: "Corporate Relations",
      image: "RM",
    },
    {
      name: "Kavya Iyer",
      role: "Content Head",
      department: "Communication Team",
      image: "KI",
    },
  ];

  const volunteers = [
    "Amit Kumar", "Divya Nair", "Ravi Verma", "Pooja Shah",
    "Karthik Rao", "Neha Joshi", "Sanjay Pillai", "Ritika Bansal",
    "Aditya Malhotra", "Swati Desai", "Harsh Agarwal", "Megha Singh"
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-[#252D6F] to-[#4676E6]  text-white overflow-hidden">
        {/* Animated floating shapes (Tech vibes & Colorful) */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Blue dot, floats up/down */}
          <div className="absolute top-20 left-16 w-10 h-10 bg-[#4676E6]/70 rounded-full animate-bounce-slow blur-md"></div>
          {/* Gold dot, pulsing */}
          <div className="absolute top-36 right-12 w-6 h-6 bg-[#FFD54F]/80 rounded-full animate-pulse blur-md"></div>
          {/* White ring (rotates) */}
          <div className="absolute bottom-16 left-1/4 w-20 h-20 border-4 border-white/30 rounded-full animate-spin-slow"></div>
          {/* Accent purple oval (up/down) */}
          <div className="absolute top-1/2 right-40 w-16 h-8 bg-[#B16FFF]/70 rounded-3xl animate-bounce-x blur-md"></div>
          {/* Small accent dots */}
          <div className="absolute top-8 right-2 w-5 h-5 bg-[#F56060]/80 rounded-full animate-bounce"></div>
          <div className="absolute bottom-8 left-8 w-5 h-5 bg-[#36C2A3]/70 rounded-full animate-bounce"></div>
        </div>

        {/* Centered content */}
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-medium backdrop-blur-md border border-white/20 shadow-sm mb-6 tracking-widest animate-fade-in">
            🌟 Our Team
          </span>
          <h1 className="text-7xl md:auto  font-extrabold pb-3 mb-8 animate-fade-in-up bg-gradient-to-r from-[#FFD54F] via-white to-[#4676E6] bg-clip-text text-transparent drop-shadow-xl">
            About Us
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto animate-fade-in leading-relaxed">
            About Our{" "}
            <span className="font-semibold text-[#FFD54F]">
              Club{" "}
            </span>
             and passionate{" "}
            <span className="font-semibold text-[#B16FFF]">
              team members
            </span>{" "}

          </p><br />
        </div>
      </section>

      {/* Core Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Core Organizing Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dedicated leaders working tirelessly to create an unforgettable hackathon experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-glow transition-all duration-300 animate-scale-in border-primary/20 group"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Avatar */}
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center text-white text-3xl font-bold group-hover:scale-110 transition-transform">
                  {member.image}
                </div>

                {/* Info */}
                <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-primary font-semibold mb-1">{member.role}</p>
                <p className="text-sm text-muted-foreground mb-4">{member.department}</p>

                {/* Social Links */}
                <div className="flex gap-2 justify-center">
                  <Button
                    size="sm"
                    variant="outline"
                    className="p-2 hover:bg-primary hover:text-primary-foreground"
                  >
                    <Linkedin size={16} />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="p-2 hover:bg-primary hover:text-primary-foreground"
                  >
                    <Mail size={16} />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="p-2 hover:bg-primary hover:text-primary-foreground"
                  >
                    <Github size={16} />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteers Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Volunteer Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Amazing volunteers who help make everything run smoothly
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-8 border-primary/20">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {volunteers.map((volunteer, index) => (
                  <div
                    key={index}
                    className="text-center p-4 rounded-lg bg-muted/50 hover:bg-primary hover:text-primary-foreground transition-all animate-fade-in"
                    style={{ animationDelay: `${index * 0.03}s` }}
                  >
                    <p className="font-medium">{volunteer}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-glow">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Want to Join Our Team?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            We're always looking for passionate individuals to help organize future events
          </p>
          <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-6 text-lg shadow-accent">
            Get in Touch
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Team;
