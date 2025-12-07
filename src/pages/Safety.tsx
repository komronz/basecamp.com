import { Layout } from "@/components/layout/Layout";
import { AlertTriangle, Droplets, Sun, MapPin, Phone, Battery } from "lucide-react";

const safetyTips = [
  {
    icon: MapPin,
    title: "Plan Your Route",
    tips: [
      "Always research your trail and check recent conditions",
      "Download offline maps and don't rely solely on phone signal",
      "Share your hiking plan with someone who isn't going",
      "Know your bailout options and turn-around times",
      "Check weather forecasts and be prepared to cancel",
    ],
  },
  {
    icon: Droplets,
    title: "Stay Hydrated",
    tips: [
      "Carry at least 2 liters of water per person for a day hike",
      "Know water sources along your route and bring purification",
      "Drink before you feel thirsty – stay ahead of dehydration",
      "Electrolyte supplements help on hot days",
      "Avoid alcohol and caffeine before hiking",
    ],
  },
  {
    icon: Sun,
    title: "Weather Awareness",
    tips: [
      "Start early to avoid afternoon thunderstorms in mountains",
      "Dress in layers that can be adjusted",
      "Know the signs of changing weather",
      "Carry rain gear even on sunny days",
      "Hypothermia can occur even in summer at altitude",
    ],
  },
  {
    icon: AlertTriangle,
    title: "Wildlife Safety",
    tips: [
      "Make noise to alert wildlife of your presence",
      "Keep food in bear-proof containers where required",
      "Never approach or feed wild animals",
      "Know what wildlife is in the area and how to respond",
      "Carry bear spray in bear country and know how to use it",
    ],
  },
  {
    icon: Phone,
    title: "Emergency Preparedness",
    tips: [
      "Carry a first aid kit and know how to use it",
      "Bring emergency shelter (bivvy or space blanket)",
      "Consider a personal locator beacon (PLB) for remote areas",
      "Know basic first aid for common trail injuries",
      "Memorize or carry emergency contact numbers",
    ],
  },
  {
    icon: Battery,
    title: "Gear & Equipment",
    tips: [
      "Always carry the 10 essentials for hiking",
      "Test your gear before heading out on a new adventure",
      "Bring extra batteries and a backup light source",
      "Match your footwear to the terrain",
      "Pack extra food in case of delays",
    ],
  },
];

const Safety = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-16 bg-gradient-to-br from-basecamp-gray to-basecamp-blue-dark">
        <div className="container-wide">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-basecamp-white mb-4">
            Safety Information
          </h1>
          <p className="text-xl text-basecamp-silver-light max-w-2xl">
            Essential safety knowledge for a safe and enjoyable hiking experience
          </p>
        </div>
      </section>

      {/* Warning Banner */}
      <section className="py-6 bg-destructive/10 border-y border-destructive/20">
        <div className="container-wide flex items-center gap-4">
          <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0" />
          <p className="text-destructive font-medium">
            Hiking involves inherent risks. Always prioritize safety and know your limits.
          </p>
        </div>
      </section>

      {/* Safety Tips Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {safetyTips.map((section) => (
              <div key={section.title} className="bg-card rounded-xl border border-border p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <section.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="font-display text-xl font-bold text-foreground">
                    {section.title}
                  </h2>
                </div>
                <ul className="space-y-3">
                  {section.tips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground text-sm">
                      <span className="text-primary font-bold mt-0.5">•</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10 Essentials */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            The 10 Essentials for Hiking
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              "Navigation (map & compass)",
              "Sun protection",
              "Insulation (extra clothing)",
              "Illumination (headlamp)",
              "First-aid supplies",
              "Fire (matches/lighter)",
              "Repair tools & knife",
              "Nutrition (extra food)",
              "Hydration (extra water)",
              "Emergency shelter",
            ].map((item, index) => (
              <div key={item} className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border">
                <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </span>
                <span className="text-sm font-medium text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Numbers */}
      <section className="section-padding">
        <div className="container-wide max-w-2xl text-center">
          <h2 className="font-display text-2xl font-bold text-foreground mb-6">
            Emergency Contacts
          </h2>
          <div className="bg-card rounded-xl border border-border p-8">
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-border">
                <span className="font-medium">Emergency Services (US)</span>
                <span className="text-primary font-bold">911</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-border">
                <span className="font-medium">Emergency Services (EU)</span>
                <span className="text-primary font-bold">112</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="font-medium">Poison Control (US)</span>
                <span className="text-primary font-bold">1-800-222-1222</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Safety;
