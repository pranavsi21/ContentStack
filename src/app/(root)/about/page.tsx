import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const data = {
  title: "About InnoTech Solutions",
  mission: "Our mission is to empower businesses through innovative technology solutions, driving growth and efficiency in the digital era.",
  history: "Founded in 2010, InnoTech Solutions has grown from a small startup to a leading technology partner for businesses worldwide. Our journey has been marked by continuous innovation and a commitment to excellence.",
  team: [
    {
      name: "Pranav Singh",
      role: "CEO & Founder",
      emoji: "👨‍💼"
    },
    {
      name: "Riya Singh",
      role: "CTO",
      emoji: "👩‍💻"
    },
    {
      name: "Dhirendra Singh",
      role: "Head of Client Services",
      emoji: "👨‍💼"
    }
  ]
}

export default function About() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-primary">{data.title}</h1>
        <p className="text-xl text-muted-foreground">{data.mission}</p>
      </section>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Our History</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{data.history}</p>
        </CardContent>
      </Card>

      <section>
        <h2 className="text-3xl font-bold mb-6 text-center text-primary">Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {data.team.map((member, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-6xl mb-4">{member.emoji}</div>
                <CardTitle className="text-xl font-semibold">{member.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}