import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Cloud, BarChart, ShieldCheck } from "lucide-react"

const data = {
  title: "Welcome to InnoTech Solutions",
  subtitle: "Empowering Businesses with Cutting-Edge Technology",
  features: [
    {
      title: "Cloud Integration",
      description: "Seamlessly integrate your systems with our advanced cloud solutions.",
      icon: Cloud,
      color: "text-blue-500"
    },
    {
      title: "AI-Powered Analytics",
      description: "Harness the power of artificial intelligence to gain actionable insights.",
      icon: BarChart,
      color: "text-green-500"
    },
    {
      title: "Cybersecurity",
      description: "Protect your digital assets with our state-of-the-art security measures.",
      icon: ShieldCheck,
      color: "text-red-500"
    }
  ]
}

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20 rounded-lg">
        <h1 className="text-5xl font-bold mb-4">{data.title}</h1>
        <p className="text-xl">{data.subtitle}</p>
        <Button className="mt-8" size="lg" variant="secondary">Get Started</Button>
      </section>

      <section className="grid md:grid-cols-3 gap-8">
        {data.features.map((feature, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <feature.icon className={`w-12 h-12 mb-4 ${feature.color}`} />
              <CardTitle className="text-2xl">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <Card className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
        <CardHeader>
          <CardTitle className="text-3xl">Why Choose InnoTech?</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg">
            At InnoTech Solutions, we&apos;re committed to driving innovation and delivering 
            exceptional results. Our team of experts combines deep industry knowledge 
            with cutting-edge technology to help your business thrive in the digital age.
          </p>
          <Button className="mt-4" variant="secondary">Learn More</Button>
        </CardContent>
      </Card>
    </div>
  )
}
