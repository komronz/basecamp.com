import { Layout } from "@/components/layout/Layout";
import { Mountain, Shield, Heart, Target } from "lucide-react";

const teamMembers = [
  { name: "Emma Johnson", role: "Founder & CEO" },
  { name: "Marcus Chen", role: "Lead Designer" },
  { name: "Sofia Rodriguez", role: "Product Manager" },
  { name: "Alex Thompson", role: "Marketing Director" },
  { name: "Olivia Williams", role: "Quality Assurance" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-primary to-basecamp-blue-dark">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              About Basecamp
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Born from a passion for the outdoors, Basecamp was founded by five university students 
              who believed that quality hiking gear should be accessible to everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Basecamp started in 2020 when five outdoor enthusiasts at Mountain Valley University 
                  realized that great hiking gear was either too expensive or lacked the quality 
                  serious hikers need. United by their love for mountain trails and weekend expeditions, 
                  they set out to create something different.
                </p>
                <p>
                  What began as a small project designing gear for fellow students quickly grew into 
                  a full-fledged outdoor equipment company. Today, Basecamp serves thousands of hikers 
                  across the country, maintaining the same commitment to quality and affordability 
                  that sparked our journey.
                </p>
                <p>
                  Each of our five founders brings unique expertise – from textile engineering and 
                  product design to marketing and customer experience. Together, we test every product 
                  on real trails, ensuring that what reaches you is truly adventure-ready.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              {teamMembers.map((member, index) => (
                <div key={member.name} className="flex items-center gap-4 p-4 bg-muted rounded-lg">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-display font-bold text-primary">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{member.name}</h4>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Mission
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We are committed to creating gear that empowers every hiker to explore further
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-card rounded-xl border border-border card-hover">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">Durability</h3>
              <p className="text-sm text-muted-foreground">
                Built to withstand years of adventures on the toughest trails
              </p>
            </div>
            <div className="text-center p-6 bg-card rounded-xl border border-border card-hover">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Heart className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">Comfort</h3>
              <p className="text-sm text-muted-foreground">
                Ergonomic designs that feel great mile after mile
              </p>
            </div>
            <div className="text-center p-6 bg-card rounded-xl border border-border card-hover">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Mountain className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">Weather Protection</h3>
              <p className="text-sm text-muted-foreground">
                Stay dry and warm in any conditions nature throws at you
              </p>
            </div>
            <div className="text-center p-6 bg-card rounded-xl border border-border card-hover">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">Accessibility</h3>
              <p className="text-sm text-muted-foreground">
                Premium quality gear at fair prices for every adventurer
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
