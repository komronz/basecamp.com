import { Layout } from "@/components/layout/Layout";
import { TeamMemberCard } from "@/components/team/TeamMemberCard";

const teamMembers = [
  {
    name: "Diyora Shermuxamedova",
    title: "Project Manager",
    bio: "Organizes logistics, timelines, and team communication to keep the project on track. Focused on clarity and reliability.",
    videoUrl: "https://youtube.com/shorts/3XyFvjISY9o?si=WzLbGw4hm1l4-93P",
  },
  {
    name: "Komronbek Zokirov",
    title: "Website Developer",
    bio: "Builds and maintains the website with an emphasis on speed, usability, and secure performance.",
    videoUrl: "https://youtube.com/shorts/rf4GOoz_wkY?si=rp5q29GaH2xgLnwB",
  },
  {
    name: "Mohinur Xabibullayeva",
    title: "Marketing & Social Media Manager",
    bio: "Creates engaging content and grows our community, making hiking accessible and inspiring.",
    videoUrl: "https://youtube.com/shorts/SlQzveMJG7U?si=j4ZXth8fBU-lASVH",
  },
  {
    name: "Mohinur Yangibaeva",
    title: "Customer Service Manager",
    bio: "Supports customers with clear communication and problem solving while balancing work and studies.",
    videoUrl: "https://youtube.com/shorts/JPU1IlSQp7M?si=cZ7Hd6T5QvLx-P3u",
  },
  {
    name: "Nigora Turdaliyeva",
    title: "Product Manager",
    bio: "Curates and tests our gear to ensure quality and reliability for every hike.",
    videoUrl: "https://youtube.com/shorts/qcKhSi4ecmY?si=JECpadfD0fXWHMdT",
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
            href="mailto:komronbekzokirov@webster.edu" 
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
