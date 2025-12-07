import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { toast } from "sonner";
import { useCart } from "@/hooks/use-cart";
import { useState } from "react";

interface ProductCardProps {
  name: string;
  description: string;
  price: number;
  image: string;
  sizes?: string[];
  category: string;
}

export function ProductCard({ name, description, price, image, sizes, category }: ProductCardProps) {
  const { addItem, setIsOpen } = useCart();
  const [selectedSize, setSelectedSize] = useState<string | undefined>(sizes?.[0]);

  const handleAddToCart = () => {
    addItem({ name, price, image, category }, selectedSize);
    toast.success(`${name} added to cart!`);
    setIsOpen(true);
  };

  return (
    <div className="product-card group">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
            {category}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-display font-semibold text-lg text-foreground mb-2">{name}</h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{description}</p>
        
        {sizes && sizes.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-2 py-1 text-xs border rounded transition-colors ${
                  selectedSize === size 
                    ? "border-primary bg-primary text-primary-foreground" 
                    : "border-border hover:border-primary hover:text-primary"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        )}
        
        <div className="flex items-center justify-between">
          <span className="text-xl font-display font-bold text-primary">${price}</span>
          <Button size="sm" onClick={handleAddToCart}>
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
