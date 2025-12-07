import { Layout } from "@/components/layout/Layout";
import { ProductCard } from "@/components/products/ProductCard";
import hikingBootsImg from "@/assets/products/hiking-boots.jpg";
import hikingJacketImg from "@/assets/products/hiking-jacket.jpg";
import rainGearImg from "@/assets/products/rain-gear.jpg";
import hikingPantsImg from "@/assets/products/hiking-pants.jpg";
import fleeceImg from "@/assets/products/fleece.jpg";
import thermalImg from "@/assets/products/thermal-underwear.jpg";
import hikingSocksImg from "@/assets/products/hiking-socks.jpg";

const categories = [
  { id: "boots", name: "Hiking Boots" },
  { id: "jackets", name: "Jackets" },
  { id: "rainwear", name: "Rainwear" },
  { id: "pants", name: "Pants" },
  { id: "fleece", name: "Fleece Sweatshirts" },
  { id: "thermal", name: "Thermal Underwear" },
  { id: "socks", name: "Socks" },
];

const products = [
  // Hiking Boots
  {
    name: "Alpine Pro Boots",
    description: "Waterproof full-grain leather hiking boots with Vibram soles and superior ankle support for technical terrain.",
    price: 189,
    image: hikingBootsImg,
    sizes: ["38", "39", "40", "41", "42", "43", "44", "45"],
    category: "Hiking Boots",
  },
  {
    name: "Trail Runner GTX",
    description: "Lightweight Gore-Tex hiking shoes perfect for day hikes and fast-paced trails.",
    price: 149,
    image: hikingBootsImg,
    sizes: ["36", "37", "38", "39", "40", "41", "42", "43", "44"],
    category: "Hiking Boots",
  },
  // Jackets
  {
    name: "Summit Shell Jacket",
    description: "3-layer waterproof breathable shell jacket with fully taped seams for all-weather protection.",
    price: 249,
    image: hikingJacketImg,
    sizes: ["S", "M", "L", "XL", "XXL"],
    category: "Jackets",
  },
  {
    name: "Alpine Down Jacket",
    description: "800-fill goose down insulated jacket with water-resistant outer shell for cold conditions.",
    price: 299,
    image: hikingJacketImg,
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    category: "Jackets",
  },
  // Rainwear
  {
    name: "Storm Shield Rain Set",
    description: "Complete rain protection with jacket and pants, seam-sealed and packable for emergency use.",
    price: 169,
    image: rainGearImg,
    sizes: ["S", "M", "L", "XL"],
    category: "Rainwear",
  },
  {
    name: "Ultralight Rain Jacket",
    description: "Ultra-packable rain jacket weighing only 200g, fits in your pocket for unexpected showers.",
    price: 89,
    image: rainGearImg,
    sizes: ["XS", "S", "M", "L", "XL"],
    category: "Rainwear",
  },
  // Pants
  {
    name: "Trail Cargo Pants",
    description: "Durable ripstop hiking pants with articulated knees and multiple cargo pockets.",
    price: 89,
    image: hikingPantsImg,
    sizes: ["28", "30", "32", "34", "36", "38"],
    category: "Pants",
  },
  {
    name: "Convertible Zip-Off Pants",
    description: "Versatile pants that convert to shorts with zip-off legs, UPF 50+ sun protection.",
    price: 79,
    image: hikingPantsImg,
    sizes: ["28", "30", "32", "34", "36", "38", "40"],
    category: "Pants",
  },
  // Fleece
  {
    name: "Summit Fleece Jacket",
    description: "Midweight fleece jacket with anti-pill fabric and zippered pockets for layering.",
    price: 79,
    image: fleeceImg,
    sizes: ["S", "M", "L", "XL", "XXL"],
    category: "Fleece Sweatshirts",
  },
  {
    name: "Tech Grid Fleece Pullover",
    description: "Grid-pattern fleece for optimal warmth-to-weight ratio, perfect as a mid-layer.",
    price: 69,
    image: fleeceImg,
    sizes: ["XS", "S", "M", "L", "XL"],
    category: "Fleece Sweatshirts",
  },
  // Thermal
  {
    name: "Merino Base Layer Set",
    description: "100% merino wool base layer top and bottom, naturally odor-resistant and moisture-wicking.",
    price: 129,
    image: thermalImg,
    sizes: ["XS", "S", "M", "L", "XL"],
    category: "Thermal Underwear",
  },
  {
    name: "Synthetic Thermal Top",
    description: "Quick-dry synthetic thermal top with flatlock seams to prevent chafing.",
    price: 49,
    image: thermalImg,
    sizes: ["S", "M", "L", "XL", "XXL"],
    category: "Thermal Underwear",
  },
  // Socks
  {
    name: "Merino Wool Hiking Socks",
    description: "Cushioned merino wool socks with arch support and reinforced heel/toe.",
    price: 24,
    image: hikingSocksImg,
    sizes: ["S (36-38)", "M (39-42)", "L (43-46)"],
    category: "Socks",
  },
  {
    name: "Synthetic Trail Socks",
    description: "Lightweight synthetic socks with moisture-wicking and quick-dry technology.",
    price: 18,
    image: hikingSocksImg,
    sizes: ["S (36-38)", "M (39-42)", "L (43-46)"],
    category: "Socks",
  },
];

const Clothing = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-16 bg-gradient-to-br from-primary to-basecamp-blue-dark">
        <div className="container-wide">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Hiking Clothing
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl">
            Technical apparel designed for comfort and protection on every trail
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

export default Clothing;
