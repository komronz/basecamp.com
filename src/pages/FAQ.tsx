import { Layout } from "@/components/layout/Layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqCategories = [
  {
    category: "Shipping & Delivery",
    questions: [
      {
        q: "How long does shipping take?",
        a: "Standard shipping takes 5-7 business days within the US. Express shipping (2-3 business days) is available for an additional fee. International shipping typically takes 10-14 business days depending on the destination.",
      },
      {
        q: "Do you ship internationally?",
        a: "Yes! We ship to over 50 countries worldwide. International shipping costs and delivery times vary by location. You can see the exact shipping cost at checkout.",
      },
      {
        q: "How can I track my order?",
        a: "Once your order ships, you'll receive an email with a tracking number. You can use this number on our website or the carrier's site to track your package.",
      },
      {
        q: "Is shipping free?",
        a: "We offer free standard shipping on orders over $100 within the continental US. Orders under $100 have a flat shipping rate of $7.95.",
      },
    ],
  },
  {
    category: "Sizing & Fit",
    questions: [
      {
        q: "How do I find my size?",
        a: "Check our detailed Size Guide page for measurements for all clothing and footwear. We recommend measuring yourself and comparing to our charts for the best fit.",
      },
      {
        q: "Do your boots run true to size?",
        a: "Our hiking boots generally run true to size, but we recommend ordering a half size up to accommodate thick hiking socks and allow toe room for descents.",
      },
      {
        q: "What if my item doesn't fit?",
        a: "We offer free exchanges on all clothing and footwear. Simply initiate a return within 30 days and we'll ship the new size at no extra charge.",
      },
    ],
  },
  {
    category: "Returns & Exchanges",
    questions: [
      {
        q: "What is your return policy?",
        a: "We accept returns within 60 days of purchase for unworn, unused items with tags attached. Items must be in original condition. We'll provide a full refund to your original payment method.",
      },
      {
        q: "How do I start a return?",
        a: "Log into your account and go to Order History, or contact our customer service team. We'll provide a prepaid return label for US orders.",
      },
      {
        q: "Do you offer exchanges?",
        a: "Yes! Exchanges for different sizes or colors are free. Request an exchange through your account or contact us, and we'll ship the new item as soon as we receive your return.",
      },
      {
        q: "Can I return sale items?",
        a: "Sale items can be returned for store credit within 30 days. Final sale items marked as such cannot be returned or exchanged.",
      },
    ],
  },
  {
    category: "Product Care & Waterproofing",
    questions: [
      {
        q: "How do I wash my hiking jacket?",
        a: "Most technical jackets should be machine washed on gentle cycle with cold water and tech-specific detergent. Avoid fabric softeners. Tumble dry low or hang dry. Re-apply DWR treatment after every 5-10 washes.",
      },
      {
        q: "How often should I reapply waterproofing?",
        a: "Reapply DWR (Durable Water Repellent) treatment when water stops beading on the surface – typically after 5-10 washes or once per season for regular use.",
      },
      {
        q: "How do I care for leather hiking boots?",
        a: "Clean with a damp cloth after each hike. Apply leather conditioner every few months. For waterproofing, use a wax-based treatment. Store in a cool, dry place away from direct heat.",
      },
      {
        q: "Can I repair my Gore-Tex jacket?",
        a: "Minor tears can be repaired with Tenacious Tape or Gore-Tex repair patches. For significant damage, contact us about our repair service or warranty claim.",
      },
    ],
  },
];

const FAQ = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-16 bg-gradient-to-br from-basecamp-gray to-basecamp-blue-dark">
        <div className="container-wide">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-basecamp-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-basecamp-silver-light max-w-2xl">
            Find answers to common questions about our products and services
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="section-padding">
        <div className="container-wide max-w-4xl">
          {faqCategories.map((category) => (
            <div key={category.category} className="mb-12">
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                {category.category}
              </h2>
              <Accordion type="single" collapsible className="space-y-3">
                {category.questions.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`${category.category}-${index}`}
                    className="bg-card rounded-lg border border-border px-6"
                  >
                    <AccordionTrigger className="text-left font-medium hover:no-underline">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      {/* Still Need Help */}
      <section className="section-padding bg-muted">
        <div className="container-wide max-w-2xl text-center">
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">
            Still Have Questions?
          </h2>
          <p className="text-muted-foreground mb-6">
            Our customer service team is here to help. Reach out and we'll get back to you within 24 hours.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
