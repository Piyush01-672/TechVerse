import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import GallerySlider from "@/components/Slider";
const Gallery = () => {
  // Placeholder gallery items - you can replace with actual event photos
  const galleryItems = [
    { id: 1, title: "Opening Ceremony", category: "Event", date: "Day 1", image: "https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-fall-nature-scenery-free-image.jpeg?w=600&quality=80", description: "Highlights from the opening ceremony" },
    { id: 2, title: "Teams at Work", category: "Coding", date: "Day 1" },
    { id: 3, title: "Mentorship Session", category: "Workshop", date: "Day 1" },
    { id: 4, title: "Networking Break", category: "Social", date: "Day 2" },
    { id: 5, title: "Project Presentations", category: "Demo", date: "Day 2" },
    { id: 6, title: "Judging Round", category: "Competition", date: "Day 2" },
    { id: 7, title: "Winner Announcement", category: "Awards", date: "Day 3" },
    { id: 8, title: "Team Celebrations", category: "Social", date: "Day 3" },
    { id: 9, title: "Closing Ceremony", category: "Event", date: "Day 3" },
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
            🌟 Highlights
          </span>
          <h1 className="text-7xl md:auto  font-extrabold pb-3 mb-8 animate-fade-in-up bg-gradient-to-r from-[#FFD54F] via-white to-[#4676E6] bg-clip-text text-transparent drop-shadow-xl">
            Event Gallery
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto animate-fade-in leading-relaxed">
            Relive the{" "}
            <span className="font-semibold text-[#FFD54F]">
              excitement and innovation{" "}
            </span>
             of our previous{" "}
            <span className="font-semibold text-[#B16FFF]">
              Events
            </span>{" "}
            through our highlights. &nbsp;
          </p><br />
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Event Recap
            </h2>
            <p className="text-lg text-muted-foreground">
              Watch the highlights from our previous Events
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden border-primary/20">
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-0 h-0 border-l-[15px] border-l-primary-foreground border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ml-1" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Video Coming Soon
                  </h3>
                  <p className="text-muted-foreground">
                    Event recap video will be available soon.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <GallerySlider galleryItems={galleryItems} />


    </div>
  );
};

export default Gallery;
