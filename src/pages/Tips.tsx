import { Layout } from "@/components/layout/Layout";
import { Backpack, Footprints, ThermometerSnowflake, UtensilsCrossed } from "lucide-react";

const articles = [
  {
    icon: Backpack,
    title: "How to Pack a Backpack",
    content: [
      {
        subtitle: "Weight Distribution",
        text: "Heavy items should go close to your back and centered between your shoulder blades and hips. This keeps the pack's center of gravity aligned with yours, reducing strain and improving balance.",
      },
      {
        subtitle: "Layer Organization",
        text: "Pack items in reverse order of when you'll need them. Rain gear and snacks on top, sleeping bag at the bottom. Use stuff sacks to organize and compress your gear.",
      },
      {
        subtitle: "Balance Side to Side",
        text: "Distribute weight evenly on both sides of your pack. An unbalanced pack can cause muscle strain and affect your hiking posture.",
      },
      {
        subtitle: "Compression Straps",
        text: "Use compression straps to secure your load and prevent items from shifting. A well-compressed pack is more stable and easier to carry.",
      },
    ],
  },
  {
    icon: Footprints,
    title: "How to Choose Hiking Boots",
    content: [
      {
        subtitle: "Know Your Terrain",
        text: "Light trail shoes work for maintained paths, mid-height boots for rugged trails, and full-height mountaineering boots for technical terrain with heavy loads.",
      },
      {
        subtitle: "Get the Right Fit",
        text: "Shop in the afternoon when feet are slightly swollen. Wear your hiking socks and ensure a thumb's width of space in front of your longest toe.",
      },
      {
        subtitle: "Break Them In",
        text: "Never hike a long trail in brand-new boots. Wear them around the house, then on short walks, gradually increasing distance before your trip.",
      },
      {
        subtitle: "Consider Waterproofing",
        text: "Gore-Tex or similar membranes keep water out but can be less breathable. For hot, dry climates, non-waterproof boots may be more comfortable.",
      },
    ],
  },
  {
    icon: ThermometerSnowflake,
    title: "How to Stay Warm on the Trail",
    content: [
      {
        subtitle: "Layer Your Clothing",
        text: "Use a moisture-wicking base layer, an insulating mid-layer (fleece or down), and a wind/waterproof outer shell. Adjust layers as your activity level changes.",
      },
      {
        subtitle: "Protect Your Extremities",
        text: "You lose significant heat through your head, hands, and feet. A warm hat, quality gloves, and proper socks make a huge difference.",
      },
      {
        subtitle: "Stay Dry",
        text: "Moisture is the enemy of warmth. Avoid sweating by ventilating or removing layers, and change out of wet clothes as soon as possible.",
      },
      {
        subtitle: "Fuel Your Body",
        text: "Your body generates heat by burning calories. Eat regular snacks and stay hydrated – dehydration impairs your body's temperature regulation.",
      },
    ],
  },
  {
    icon: UtensilsCrossed,
    title: "What to Eat on the Trail",
    content: [
      {
        subtitle: "Calorie-Dense Foods",
        text: "Aim for 2,500-4,500 calories per day depending on intensity. Nuts, nut butters, cheese, dried fruit, and chocolate pack lots of energy into small packages.",
      },
      {
        subtitle: "Easy-to-Prepare Meals",
        text: "Dehydrated meals, instant oatmeal, and couscous are lightweight and require only boiling water. Pre-portion meals in ziplock bags for convenience.",
      },
      {
        subtitle: "Snack Strategy",
        text: "Keep high-energy snacks accessible in your hip belt or pocket. Eat small amounts frequently rather than a few large meals.",
      },
      {
        subtitle: "Hydration Reminder",
        text: "Water is essential for digestion and energy. Drink regularly and consider electrolyte tablets for long days, especially in hot weather.",
      },
    ],
  },
];

const Tips = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-16 bg-gradient-to-br from-primary to-basecamp-blue-dark">
        <div className="container-wide">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Outdoor Tips & Tricks
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl">
            Expert advice to make your adventures safer and more enjoyable
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="section-padding">
        <div className="container-wide space-y-16">
          {articles.map((article, articleIndex) => (
            <article key={article.title} className="animate-fade-up" style={{ animationDelay: `${articleIndex * 0.1}s` }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <article.icon className="w-7 h-7 text-primary" />
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                  {article.title}
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {article.content.map((section, index) => (
                  <div key={index} className="bg-card rounded-xl border border-border p-6 card-hover">
                    <h3 className="font-display font-semibold text-lg text-foreground mb-3">
                      {section.subtitle}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {section.text}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-muted">
        <div className="container-wide max-w-2xl text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            Want More Tips?
          </h2>
          <p className="text-muted-foreground mb-6">
            Subscribe to our newsletter for weekly outdoor advice, gear reviews, and trail recommendations.
          </p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Tips;
