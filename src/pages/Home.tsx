import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Users, Trophy, Code, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-bg.jpg";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  const stats = [
    { label: "Participants", value: "500+", icon: Users },
    { label: "Projects", value: "100+", icon: Code },
    { label: "Prize Pool", value: "₹50K+", icon: Trophy },
    { label: "Mentors", value: "20+", icon: Zap },
  ];

  const features = [
    {
      title: "Innovation Hub",
      description:
        "Build cutting-edge solutions to real-world problems with access to latest technologies.",
      icon: Code,
    },
    {
      title: "Expert Mentorship",
      description:
        "Learn from industry professionals and experienced developers throughout the event.",
      icon: Users,
    },
    {
      title: "Networking",
      description:
        "Connect with fellow developers, innovators, and potential collaborators.",
      icon: Zap,
    },
    {
      title: "Amazing Prizes",
      description:
        "Win exciting prizes, certificates, and opportunities to showcase your talent.",
      icon: Trophy,
    },
  ];

  return (
    <div className="min-h-screen">

      {/* ✅ HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        <div
          className="absolute inset-0 z-0 brightness-[0.8] contrast-[1.2]"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black/90" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-10 animate-fade-in-up">
            {/* Edition Badge */}
            <div className="inline-block px-6 py-2 bg-secondary/20 backdrop-blur-sm rounded-full border border-secondary/30">
              <span className="text-secondary font-semibold">Edition 2025</span>
            </div>

            {/* ✅ Typewriter Text Effect */}
            <h1 className="text-6xl md:text-8xl font-bold font-space bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(147,51,234,0.6)]">
             Tech Verse
            </h1>

            {/* Description */}
            <p className="text-xl md:text-2xl max-w-3xl mx-auto bg-gradient-to-r from-[#93C5FD] via-[#E0F2FE] to-[#C7D2FE] bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(59,130,246,0.4)]">
             The ultimate tech club 
             <Typewriter
                words={[
                  " that transform Ideas into Reality.",
                  ". Join the Ultimate Community Experience.",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={90}
                deleteSpeed={60}
                delaySpeed={1500}
              /> 
            </p>

            {/* Date & Location */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-white/90 mt-6">
              <div className="flex items-center gap-2">
                <Calendar size={20} />
                <span className="font-medium">March 15–17, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={20} />
                <span className="font-medium">CT University, Punjab</span>
              </div>
            </div>

            {/* Buttons with hover glow */}
            <div className="flex flex-wrap gap-6 justify-center pt-8">
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-10 py-6 text-lg shadow-lg shadow-secondary/40 hover:shadow-[0_0_25px_rgba(59,130,246,0.7)] transition-all duration-300"
              >
                Register Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 hover:bg-white/20 text-white border-white/30 px-10 py-6 text-lg backdrop-blur-sm hover:shadow-[0_0_25px_rgba(255,255,255,0.6)] transition-all duration-300"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Circles */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-secondary/20 rounded-full blur-xl animate-float" />
        <div
          className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </section>

      {/* ✅ STATS SECTION */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card
                  key={index}
                  className="p-8 text-center hover:shadow-glow transition-all duration-300 animate-scale-in border-primary/20"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-4xl font-bold text-foreground mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-muted-foreground font-medium">{stat.label}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ✅ FEATURES SECTION */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why Join Code Crafter?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the ultimate hackathon with world-class facilities and opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="p-6 hover:shadow-glow transition-all duration-300 group animate-fade-in border-primary/20"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ✅ CTA SECTION */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-glow relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Ready to Build the Future?
            </h2>
            <p className="text-xl text-white/90">
              Don't miss this opportunity to showcase your skills, learn from the best, and win amazing prizes!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-6 text-lg shadow-accent"
              >
                Register Your Team
              </Button>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 hover:bg-white/20 text-white border-white/30 px-8 py-6 text-lg backdrop-blur-sm"
                >
                  Become a Sponsor
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
