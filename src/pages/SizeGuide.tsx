import { Layout } from "@/components/layout/Layout";

const SizeGuide = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-16 bg-gradient-to-br from-primary to-basecamp-blue-dark">
        <div className="container-wide">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Size Guide
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl">
            Find your perfect fit with our comprehensive size charts
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide space-y-16">
          {/* Jackets & Tops */}
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
              Jackets & Tops
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-card rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-muted">
                    <th className="px-6 py-4 text-left font-semibold text-foreground">Size</th>
                    <th className="px-6 py-4 text-left font-semibold text-foreground">Chest (cm)</th>
                    <th className="px-6 py-4 text-left font-semibold text-foreground">Waist (cm)</th>
                    <th className="px-6 py-4 text-left font-semibold text-foreground">Length (cm)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr><td className="px-6 py-4">XS</td><td className="px-6 py-4">86-91</td><td className="px-6 py-4">71-76</td><td className="px-6 py-4">66</td></tr>
                  <tr><td className="px-6 py-4">S</td><td className="px-6 py-4">91-97</td><td className="px-6 py-4">76-81</td><td className="px-6 py-4">69</td></tr>
                  <tr><td className="px-6 py-4">M</td><td className="px-6 py-4">97-102</td><td className="px-6 py-4">81-86</td><td className="px-6 py-4">72</td></tr>
                  <tr><td className="px-6 py-4">L</td><td className="px-6 py-4">102-107</td><td className="px-6 py-4">86-91</td><td className="px-6 py-4">75</td></tr>
                  <tr><td className="px-6 py-4">XL</td><td className="px-6 py-4">107-112</td><td className="px-6 py-4">91-97</td><td className="px-6 py-4">78</td></tr>
                  <tr><td className="px-6 py-4">XXL</td><td className="px-6 py-4">112-117</td><td className="px-6 py-4">97-102</td><td className="px-6 py-4">81</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Pants */}
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
              Pants
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-card rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-muted">
                    <th className="px-6 py-4 text-left font-semibold text-foreground">Size</th>
                    <th className="px-6 py-4 text-left font-semibold text-foreground">Waist (cm)</th>
                    <th className="px-6 py-4 text-left font-semibold text-foreground">Hip (cm)</th>
                    <th className="px-6 py-4 text-left font-semibold text-foreground">Inseam (cm)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr><td className="px-6 py-4">28</td><td className="px-6 py-4">71-74</td><td className="px-6 py-4">89-92</td><td className="px-6 py-4">81</td></tr>
                  <tr><td className="px-6 py-4">30</td><td className="px-6 py-4">76-79</td><td className="px-6 py-4">94-97</td><td className="px-6 py-4">81</td></tr>
                  <tr><td className="px-6 py-4">32</td><td className="px-6 py-4">81-84</td><td className="px-6 py-4">99-102</td><td className="px-6 py-4">81</td></tr>
                  <tr><td className="px-6 py-4">34</td><td className="px-6 py-4">86-89</td><td className="px-6 py-4">104-107</td><td className="px-6 py-4">81</td></tr>
                  <tr><td className="px-6 py-4">36</td><td className="px-6 py-4">91-94</td><td className="px-6 py-4">109-112</td><td className="px-6 py-4">81</td></tr>
                  <tr><td className="px-6 py-4">38</td><td className="px-6 py-4">97-99</td><td className="px-6 py-4">114-117</td><td className="px-6 py-4">81</td></tr>
                  <tr><td className="px-6 py-4">40</td><td className="px-6 py-4">102-104</td><td className="px-6 py-4">119-122</td><td className="px-6 py-4">81</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Boots */}
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
              Hiking Boots
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-card rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-muted">
                    <th className="px-6 py-4 text-left font-semibold text-foreground">EU Size</th>
                    <th className="px-6 py-4 text-left font-semibold text-foreground">US Men</th>
                    <th className="px-6 py-4 text-left font-semibold text-foreground">US Women</th>
                    <th className="px-6 py-4 text-left font-semibold text-foreground">Foot Length (cm)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr><td className="px-6 py-4">36</td><td className="px-6 py-4">4</td><td className="px-6 py-4">5.5</td><td className="px-6 py-4">22.5</td></tr>
                  <tr><td className="px-6 py-4">37</td><td className="px-6 py-4">4.5</td><td className="px-6 py-4">6</td><td className="px-6 py-4">23</td></tr>
                  <tr><td className="px-6 py-4">38</td><td className="px-6 py-4">5.5</td><td className="px-6 py-4">7</td><td className="px-6 py-4">23.5</td></tr>
                  <tr><td className="px-6 py-4">39</td><td className="px-6 py-4">6</td><td className="px-6 py-4">7.5</td><td className="px-6 py-4">24</td></tr>
                  <tr><td className="px-6 py-4">40</td><td className="px-6 py-4">7</td><td className="px-6 py-4">8.5</td><td className="px-6 py-4">25</td></tr>
                  <tr><td className="px-6 py-4">41</td><td className="px-6 py-4">8</td><td className="px-6 py-4">9.5</td><td className="px-6 py-4">25.5</td></tr>
                  <tr><td className="px-6 py-4">42</td><td className="px-6 py-4">8.5</td><td className="px-6 py-4">10</td><td className="px-6 py-4">26</td></tr>
                  <tr><td className="px-6 py-4">43</td><td className="px-6 py-4">9.5</td><td className="px-6 py-4">11</td><td className="px-6 py-4">27</td></tr>
                  <tr><td className="px-6 py-4">44</td><td className="px-6 py-4">10</td><td className="px-6 py-4">11.5</td><td className="px-6 py-4">27.5</td></tr>
                  <tr><td className="px-6 py-4">45</td><td className="px-6 py-4">11</td><td className="px-6 py-4">12.5</td><td className="px-6 py-4">28.5</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Socks */}
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
              Socks
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-card rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-muted">
                    <th className="px-6 py-4 text-left font-semibold text-foreground">Size</th>
                    <th className="px-6 py-4 text-left font-semibold text-foreground">EU Shoe Size</th>
                    <th className="px-6 py-4 text-left font-semibold text-foreground">US Shoe Size</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr><td className="px-6 py-4">S</td><td className="px-6 py-4">36-38</td><td className="px-6 py-4">4-6</td></tr>
                  <tr><td className="px-6 py-4">M</td><td className="px-6 py-4">39-42</td><td className="px-6 py-4">6.5-9</td></tr>
                  <tr><td className="px-6 py-4">L</td><td className="px-6 py-4">43-46</td><td className="px-6 py-4">9.5-12</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Tips */}
          <div className="bg-muted rounded-xl p-8">
            <h3 className="font-display text-xl font-bold text-foreground mb-4">
              Sizing Tips
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                For hiking boots, we recommend ordering half a size up to allow room for thick socks and toe movement on descents.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                Measure yourself while wearing the undergarments you plan to hike in.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                If you are between sizes, size up for a more comfortable fit with layers.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                Measure your feet at the end of the day when they are slightly swollen – this mimics hiking conditions.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SizeGuide;
