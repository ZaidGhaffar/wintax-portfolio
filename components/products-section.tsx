"use client"

import { useState } from "react"
import { ProductCard } from "@/components/product-card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample product data
const products = [
  {
    id: 1,
    title: "Phone Calling Agent",
    description:
      "We've built an AI-powered phone calling assistant that takes care of your outbound & inbound calls—even cold calls!",
    price: 29.99,
    videoUrl: "https://www.youtube.com/watch?v=3LFpf7BKKSU&ab_channel=Stem-ai",
    category: "Productivity",
    popular: true,
    thumbnailUrl: "/images/calling-agent.jpg",
    codeUrl: "https://github.com/ZaidGhaffar/Call-buddy",
  },
  {
    id: 2,
    title: "Self Driving Car",
    description: " This project uses reinforcement learning to train self-driving cars in the Carla simulator",
    price: 39.99,
    videoUrl: "https://www.youtube.com/watch?v=FwS0yM1wqTs&ab_channel=Stem-ai",
    category: "Marketing",
    popular: false,
    thumbnailUrl: "/images/ZOOX.jpg",
    codeUrl: "https://github.com/ZaidGhaffar/Self-Driving-car",
  },
  {
    id: 3,
    title: "Eleven Labs-clone",
    description:
      "24/7 customer support agent that handles inquiries, resolves issues, and maintains customer satisfaction.",
    price: 49.99,
    videoUrl: "https://youtu.be/wdNWU_FW7Nk",
    category: "Support",
    popular: true,
    thumbnailUrl: "/images/Elevenlabs.jpg",
    codeUrl: "https://github.com/ZaidGhaffar/Eleven-Labs-Clone",
  },
  {
    id: 4,
    title: "Data Analyst",
    description: "Transform raw olamplic data into actionable insights with ease! Our machine learning-powered pipeline automates the entire process",
    price: 59.99,
    videoUrl: "https://www.youtube.com/watch?v=VRhaELxZuec&ab_channel=Stem-ai",
    category: "Analytics",
    popular: false,
    thumbnailUrl: "/images/analyzers.jpg",
    codeUrl: "https://github.com/user/data-analyst",
  },
  {
    id: 5,
    title: "AI Powered Calculator",
    description: "Manages your calendar, schedules meetings, sends reminders, and helps organize your digital life.",
    price: 24.99,
    videoUrl: "https://youtu.be/sy9c7fqoPlM",
    category: "Productivity",
    popular: true,
    thumbnailUrl: "/images/Next-gen-chip.jpeg",
    codeUrl: "https://github.com/user/personal-assistant",
  },
  {
    id: 6,
    title: "RAG",
    description: "Helps write, debug, and optimize code across multiple programming languages and frameworks.",
    price: 69.99,
    videoUrl: "https://youtu.be/-5_--b6V40M",
    category: "Development",
    popular: false,
    thumbnailUrl: "/images/AI-Brain-2.jpg",
    codeUrl: "https://github.com/user/rag",
  },
  {
    id: 7,
    title: "Detectronix",
    description: "Helps write, debug, and optimize code across multiple programming languages and frameworks.",
    price: 69.99,
    videoUrl: "https://youtu.be/g66DXhLtoeA",
    category: "Development",
    popular: false,
    thumbnailUrl: "/images/AI-Vr.jpg",
    codeUrl: "https://github.com/ZaidGhaffar/Detectronix",
  },
  {
    id: 8,
    title: "AI Powered Calculator",
    description: "Manages your calendar, schedules meetings, sends reminders, and helps organize your digital life.",
    price: 24.99,
    videoUrl: "https://youtu.be/sy9c7fqoPlM",
    category: "Productivity",
    popular: true,
    thumbnailUrl: "/images/Doctor-4.jpg",
    codeUrl: "https://github.com/user/ai-powered-calculator",
  },
  {
    id: 10,
    title: "RAG",
    description: "Helps write, debug, and optimize code across multiple programming languages and frameworks.",
    price: 69.99,
    videoUrl: "https://youtu.be/-5_--b6V40M",
    category: "Development",
    popular: false,
    thumbnailUrl: "/images/Augmented-Vr.jpg",
    codeUrl: "https://github.com/user/rag",
  },
]

const categories = ["All", "Productivity", "Support", "Marketing", "Analytics", "Development"]

export function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProducts =
    activeCategory === "All" ? products : products.filter((product) => product.category === activeCategory)

  return (
    <section id="products" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our AI Agents</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse our collection of specialized AI agents designed to transform your workflow and boost productivity.
          </p>
        </div>

        <Tabs defaultValue="All" className="w-full max-w-4xl mx-auto mb-12">
          <TabsList className="grid grid-cols-3 md:grid-cols-6 w-full">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category} onClick={() => setActiveCategory(category)}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              description={product.description}
              price={product.price}
              videoUrl={product.videoUrl}
              category={product.category}
              popular={product.popular}
              thumbnailUrl={product.thumbnailUrl}
              codeUrl={product.codeUrl}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

