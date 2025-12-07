import { Layout } from "@/components/layout/Layout";
import { TeamMemberCard } from "@/components/team/TeamMemberCard";

const teamMembers = [
  {
    name: "Emma Johnson",
    title: "Founder & CEO",
    bio: "Emma discovered her love for hiking during her first year at Mountain Valley University. With a background in business and environmental science, she leads Basecamp with a focus on sustainability and customer satisfaction. Her favorite trail is the Appalachian in the Blue Ridge Mountains.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    name: "Marcus Chen",
    title: "Lead Designer",
    bio: "Marcus brings a unique perspective to outdoor gear design, combining his industrial design degree with years of backcountry experience. He is responsible for the ergonomic fit and aesthetic appeal of all Basecamp products. When not designing, he is exploring trails in the Pacific Northwest.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    name: "Sofia Rodriguez",
    title: "Product Manager",
    bio: "Sofia ensures every Basecamp product meets the highest standards of quality and functionality. Her textile engineering background and passion for mountaineering make her the perfect bridge between design and production. She has summited peaks on three continents.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    name: "Alex Thompson",
    title: "Marketing Director",
    bio: "Alex connects the Basecamp brand with outdoor enthusiasts worldwide. His marketing degree and experience as a hiking guide give him insight into what adventurers truly need. He manages our community of over 50,000 fellow hikers across social platforms.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    name: "Olivia Williams",
    title: "Quality Assurance Lead",
    bio: "Olivia tests every product in real-world conditions before it reaches customers. Her background in materials science and love for extreme weather hiking ensure our gear performs when it matters most. She has logged over 5,000 miles of trail testing.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

const Team = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-basecamp-gray to-basecamp-blue-dark">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-basecamp-white mb-6">
              Our Team
            </h1>
            <p className="text-xl text-basecamp-silver-light">
              Meet the passionate hikers and outdoor enthusiasts who design your gear
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              The Founders
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Watch short videos from each team member to learn about their journey and what drives them
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {teamMembers.map((member, index) => (
              <div key={member.name} className="animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <TeamMemberCard {...member} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="section-padding bg-muted">
        <div className="container-wide text-center">
          <h2 className="font-display text-3xl font-bold text-foreground mb-4">
            Join Our Team
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            We are always looking for passionate outdoor enthusiasts to join the Basecamp family. 
            Check out our open positions and help us create the next generation of hiking gear.
          </p>
          <a 
            href="mailto:careers@basecamp.com" 
            className="inline-flex items-center text-primary font-medium hover:underline"
          >
            View Open Positions →
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Team;
