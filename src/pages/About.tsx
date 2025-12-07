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

      {/* Story & Mission (updated) */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">About Us</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Every great adventure starts somewhere. For us, it started on the hiking trails around Uzbekistan with a
                group of friends who realized that the mountains were calling—and we were answering.
              </p>
              <p>
                What began as weekend hikes with friends quickly transformed into something bigger. We noticed that
                finding quality hiking gear at affordable prices was a challenge for hikers across Central Asia. Whether
                you're a beginner lacing up your boots for the first time or an experienced mountaineer chasing the next
                peak, options were limited and costs were high. So we decided to do something about it.
              </p>

              <h3 className="font-display text-2xl font-semibold mt-6">Our Mission</h3>
              <p>
                Basecamp was born with a simple goal: to become the first widely recognized hiking shop in Uzbekistan
                and Central Asia. We provide reliable, affordable gear that helps everyone explore the mountains and
                trails they love.
              </p>

              <h3 className="font-display text-2xl font-semibold mt-6">Who We Are</h3>
              <p>
                We're a small team of five passionate adventurers and innovators working together to make this vision a
                reality. We test gear on our own trails and focus on quality, value, and community.
              </p>

              <h3 className="font-display text-2xl font-semibold mt-6">Why Basecamp?</h3>
              <p>
                We get it because we live it. We understand what a beginner needs and what a seasoned hiker demands. Our
                products are tried on real trails so you can trust them when it matters most.
              </p>

              <h3 className="font-display text-2xl font-semibold mt-6">What's Next?</h3>
              <p>
                This is just the beginning. We're here to equip you, inspire you, and be your trusted companion on every
                trail. Your adventure starts here — let's go.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
