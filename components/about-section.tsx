import { Card, CardContent } from "@/components/ui/card"
import { Brain, Zap, Shield, Users } from "lucide-react"

const features = [
  {
    icon: <Brain className="h-10 w-10 text-indigo-500" />,
    title: "AI Engineering",
    description:
      "Specialized in building intelligent AI systems, including conversational bots, object detection pipelines, and AI agents for business automation.",
  },
  {
    icon: <Zap className="h-10 w-10 text-indigo-500" />,
    title: "Full-Stack Development",
    description: "Experience with FastApi API, Next.js, FastAPI, Flask, and cloud platforms Aws for delivering end-to-end solutions.",
  },
  {
    icon: <Shield className="h-10 w-10 text-indigo-500" />,
    title: "Machine Learning",
    description:
      "Expertise in deep learning, NLP, computer vision, and generative AI with a focus on building practical, production-ready systems.",
  },
  {
    icon: <Users className="h-10 w-10 text-indigo-500" />,
    title: "AI Agents & LLMs",
    description: "Proficient in developing agentic models, LLM engineering, and creating multimodal AI assistants for various business applications.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground">
            I'm a Full-Stack AI Engineer with 2+ years of experience, specializing in building smart AI systems and the founder of WintaX Technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-4">My Expertise</h3>
            <p className="text-muted-foreground mb-6">
              I specialize in developing AI-powered solutions that solve real business problems. From conversational bots that handle customer calls to custom object detection systems, my focus is on creating practical AI Agents & applications that deliver measurable results.
            </p>
            <p className="text-muted-foreground">
              Tech stack: <br />
              - Python for Building AI Models,<br />
              - FastApi API Development <br />
              - Next.js Frontend <br />
              - docker Containers <br />
              - Aws Deployment

            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">My Journey</h3>
            <p className="text-muted-foreground mb-6">
              With experience at companies like WintaX Technologies and Rockville Technologies, I've developed expertise across the AI spectrum - from machine learning and deep learning to LLM engineering and multimodal AI agents.
            </p>
            <p className="text-muted-foreground">
              I hold a Bachelor's degree in Computer Engineering and am passionate about creating AI systems that enhance human capabilities and drive business innovation.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-md">
              <CardContent className="pt-6">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

