import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { ProductCard } from "@/components/products/ProductCard";
import { ArrowRight, Mountain, Shield, Compass } from "lucide-react";
import heroImage from "@/assets/hero-mountains.jpg";
import hikingBootsImg from "@/assets/products/hiking-boots.jpg";
import hikingJacketImg from "@/assets/products/hiking-jacket.jpg";
import hikingBackpackImg from "@/assets/products/hiking-backpack.jpg";
import trekkingPolesImg from "@/assets/products/trekking-poles.jpg";

const featuredProducts = [
  {
    name: "Alpine Pro Boots",
    description: "Waterproof leather hiking boots with superior ankle support",
    price: 189,
    image: hikingBootsImg,
    sizes: ["38", "39", "40", "41", "42", "43", "44", "45"],
    category: "Hiking Boots",
  },
  {
    name: "Summit Shell Jacket",
    description: "Breathable waterproof jacket for all-weather protection",
    price: 249,
    image: hikingJacketImg,
    sizes: ["S", "M", "L", "XL", "XXL"],
    category: "Jackets",
  },
  {
    name: "Trail Master 50L",
    description: "Ergonomic backpack with adjustable suspension system",
    price: 179,
    image: hikingBackpackImg,
    category: "Backpacks",
  },
  {
    name: "Carbon Trek Poles",
    description: "Lightweight carbon fiber trekking poles with cork grips",
    price: 129,
    image: trekkingPolesImg,
    category: "Trekking Poles",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-basecamp-gray/90 via-basecamp-gray/70 to-transparent" />
        </div>
        
        <div className="relative z-10 container-wide text-center lg:text-left lg:max-w-3xl lg:ml-16">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-basecamp-white mb-6 animate-fade-up">
            Basecamp
            <span className="block text-basecamp-blue-light">Your Hiking Partner</span>
          </h1>
          <p className="text-lg md:text-xl text-basecamp-silver-light mb-8 max-w-xl animate-fade-up" style={{ animationDelay: "0.1s" }}>
            High-quality clothing & equipment for every adventure. Gear that performs when it matters most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <Button variant="hero" size="xl" asChild>
              <Link to="/clothing">Shop Clothing</Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/equipment">Shop Equipment</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Gear Built for the Trail
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              At Basecamp, we believe every hiker deserves equipment that matches their ambition. 
              Our products are designed for durability, comfort, and weather protection – 
              because the best adventures happen when you can trust your gear.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-muted/50">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-xl mb-2">Built to Last</h3>
              <p className="text-muted-foreground">Premium materials that withstand the toughest conditions</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-muted/50">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Mountain className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-xl mb-2">Trail Tested</h3>
              <p className="text-muted-foreground">Every product tested in real alpine environments</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-muted/50">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Compass className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-xl mb-2">Adventure Ready</h3>
              <p className="text-muted-foreground">Designed for comfort on multi-day expeditions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Featured Products
              </h2>
              <p className="text-muted-foreground mt-2">Top picks for your next adventure</p>
            </div>
            <Button variant="outline" asChild className="hidden md:flex">
              <Link to="/clothing">
                View All <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <div key={product.name} className="animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <ProductCard {...product} />
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Button asChild>
              <Link to="/clothing">
                View All Products <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-basecamp-blue-dark">
        <div className="container-wide text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of hikers who trust Basecamp for their outdoor gear
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/clothing">Explore Clothing</Link>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/equipment">Explore Equipment</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
