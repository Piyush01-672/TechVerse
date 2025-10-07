import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Gallery = () => {
  // Placeholder gallery items - you can replace with actual event photos
  const galleryItems = [
    { id: 1, title: "Opening Ceremony", category: "Event", date: "Day 1" },
    { id: 2, title: "Teams at Work", category: "Coding", date: "Day 1" },
    { id: 3, title: "Mentorship Session", category: "Workshop", date: "Day 1" },
    { id: 4, title: "Networking Break", category: "Social", date: "Day 2" },
    { id: 5, title: "Project Presentations", category: "Demo", date: "Day 2" },
    { id: 6, title: "Judging Round", category: "Competition", date: "Day 2" },
    { id: 7, title: "Winner Announcement", category: "Awards", date: "Day 3" },
    { id: 8, title: "Team Celebrations", category: "Social", date: "Day 3" },
    { id: 9, title: "Closing Ceremony", category: "Event", date: "Day 3" },
  ];

  const categories = ["All", "Event", "Coding", "Workshop", "Demo", "Awards", "Social"];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-glow text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">Event Gallery</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto animate-fade-in">
            Relive the excitement and innovation of Code Crafter Hackathon through our event highlights
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className="px-6 py-2 text-sm cursor-pointer hover:bg-primary hover:text-primary-foreground transition-all"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <Card
                key={item.id}
                className="group overflow-hidden cursor-pointer animate-scale-in border-primary/20"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                  {/* Placeholder for images */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary to-primary-glow opacity-80 group-hover:opacity-100 transition-opacity">
                    <div className="text-center text-white p-6">
                      <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                      <Badge variant="secondary" className="mb-2">
                        {item.category}
                      </Badge>
                      <p className="text-sm text-white/80">{item.date}</p>
                    </div>
                  </div>
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Event Recap</h2>
            <p className="text-lg text-muted-foreground">Watch the highlights from our amazing hackathon</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden border-primary/20">
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-0 h-0 border-l-[15px] border-l-primary-foreground border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ml-1" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Video Coming Soon</h3>
                  <p className="text-muted-foreground">Event recap video will be available after the hackathon</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-glow">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <div className="animate-fade-in">
              <h3 className="text-5xl font-bold mb-2">1000+</h3>
              <p className="text-white/90">Photos Captured</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <h3 className="text-5xl font-bold mb-2">48</h3>
              <p className="text-white/90">Hours of Action</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-5xl font-bold mb-2">100+</h3>
              <p className="text-white/90">Memorable Moments</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <h3 className="text-5xl font-bold mb-2">5+</h3>
              <p className="text-white/90">Hours of Video</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
