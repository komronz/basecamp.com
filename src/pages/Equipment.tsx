import { Layout } from "@/components/layout/Layout";
import { ProductCard } from "@/components/products/ProductCard";
import hikingBackpackImg from "@/assets/products/hiking-backpack.jpg";
import sunglassesImg from "@/assets/products/sunglasses.jpg";
import trekkingPolesImg from "@/assets/products/trekking-poles.jpg";
import headlampImg from "@/assets/products/headlamp.jpg";

const categories = [
  { id: "backpacks", name: "Backpacks" },
  { id: "sunglasses", name: "Sunglasses" },
  { id: "poles", name: "Trekking Poles" },
  { id: "headlamps", name: "Headlamps" },
  { id: "flashlights", name: "Flashlights" },
  { id: "binoculars", name: "Binoculars" },
  { id: "other", name: "Other Gear" },
];

const products = [
  // Backpacks
  {
    name: "Trail Master 50L",
    description: "Full-featured backpack with adjustable suspension, rain cover, and multiple access points.",
    price: 179,
    image: hikingBackpackImg,
    category: "Backpacks",
  },
  {
    name: "Day Hiker 25L",
    description: "Compact daypack with hydration compatibility and lightweight design.",
    price: 89,
    image: hikingBackpackImg,
    category: "Backpacks",
  },
  {
    name: "Expedition Pro 65L",
    description: "Heavy-duty expedition pack for multi-week adventures with external frame.",
    price: 249,
    image: hikingBackpackImg,
    category: "Backpacks",
  },
  // Sunglasses
  {
    name: "Alpine Sport Sunglasses",
    description: "Polarized sport sunglasses with wraparound design and Category 3 lenses.",
    price: 79,
    image: sunglassesImg,
    category: "Sunglasses",
  },
  {
    name: "Glacier Shield",
    description: "High-altitude sunglasses with side shields for intense sun and snow reflection.",
    price: 129,
    image: sunglassesImg,
    category: "Sunglasses",
  },
  // Trekking Poles
  {
    name: "Carbon Trek Poles",
    description: "Ultralight carbon fiber poles with cork grips and quick-lock adjustment.",
    price: 129,
    image: trekkingPolesImg,
    category: "Trekking Poles",
  },
  {
    name: "Aluminum Trail Poles",
    description: "Durable aluminum poles with foam grips and twist-lock mechanism.",
    price: 79,
    image: trekkingPolesImg,
    category: "Trekking Poles",
  },
  // Headlamps
  {
    name: "Trail Blazer 400",
    description: "400-lumen rechargeable headlamp with red light mode and 8-hour runtime.",
    price: 59,
    image: headlampImg,
    category: "Headlamps",
  },
  {
    name: "Ultra Bright 800",
    description: "High-powered 800-lumen headlamp with multiple beam patterns and USB-C charging.",
    price: 89,
    image: headlampImg,
    category: "Headlamps",
  },
  // Flashlights
  {
    name: "Compact EDC Light",
    description: "Pocket-sized 300-lumen flashlight with AAA battery and water resistance.",
    price: 35,
    image: headlampImg,
    category: "Flashlights",
  },
  {
    name: "Tactical Pro 1000",
    description: "Military-grade 1000-lumen flashlight with strobe mode and aircraft aluminum body.",
    price: 79,
    image: headlampImg,
    category: "Flashlights",
  },
  // Binoculars
  {
    name: "Wildlife 10x42",
    description: "High-quality 10x42 binoculars with ED glass and waterproof construction.",
    price: 249,
    image: sunglassesImg,
    category: "Binoculars",
  },
  {
    name: "Compact 8x25",
    description: "Lightweight compact binoculars perfect for birding and wildlife observation.",
    price: 129,
    image: sunglassesImg,
    category: "Binoculars",
  },
  // Other
  {
    name: "Trail First Aid Kit",
    description: "Comprehensive first aid kit designed for hikers with emergency essentials.",
    price: 45,
    image: hikingBackpackImg,
    category: "Other Gear",
  },
  {
    name: "Emergency Bivvy",
    description: "Ultralight emergency shelter weighing only 100g for unexpected situations.",
    price: 29,
    image: hikingBackpackImg,
    category: "Other Gear",
  },
];

const Equipment = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-16 bg-gradient-to-br from-basecamp-gray to-basecamp-blue-dark">
        <div className="container-wide">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-basecamp-white mb-4">
            Hiking Equipment
          </h1>
          <p className="text-xl text-basecamp-silver-light max-w-2xl">
            Essential gear and accessories for safe and comfortable adventures
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-border sticky top-0 bg-background z-20">
        <div className="container-wide">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="px-4 py-2 rounded-full bg-muted text-sm font-medium text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors whitespace-nowrap"
              >
                {cat.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Products by Category */}
      {categories.map((category) => {
        const categoryProducts = products.filter((p) => p.category === category.name);
        if (categoryProducts.length === 0) return null;
        
        return (
          <section key={category.id} id={category.id} className="section-padding">
            <div className="container-wide">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
                {category.name}
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {categoryProducts.map((product) => (
                  <ProductCard key={product.name} {...product} />
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </Layout>
  );
};

export default Equipment;
