import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const data = {
  title: "InnoTech Blog",
  description: "Stay updated with the latest in technology and innovation. Our blog features insights, trends, and expert opinions to keep you informed.",
  posts: [
    {
      id: 1,
      title: "The Future of Cloud Computing: Trends to Watch",
      excerpt: "As cloud technology continues to evolve, we explore the emerging trends that will shape the future of cloud computing and its impact on businesses.",
      date: "2023-06-15",
      author: "Pranav Singh"
    },
    {
      id: 2,
      title: "Artificial Intelligence in Cybersecurity: Friend or Foe?",
      excerpt: "We delve into the role of AI in modern cybersecurity, examining both its potential benefits and the new challenges it introduces.",
      date: "2023-06-10",
      author: "Riya Singh"
    },
    {
      id: 3,
      title: "5G and IoT: A New Era of Connectivity",
      excerpt: "Explore how the rollout of 5G networks is set to revolutionize the Internet of Things and create new opportunities for businesses.",
      date: "2023-06-05",
      author: "Dhirendra Singh"
    }
  ]
}

export default function Blog() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-primary">{data.title}</h1>
        <p className="text-xl text-muted-foreground">{data.description}</p>
      </section>

      <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {data.posts.map((post) => (
          <Card key={post.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-2xl font-bold mb-2">
                <Link href={`/blog/${post.id}`} className="text-primary hover:text-primary/80 transition-colors">
                  {post.title}
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{post.excerpt}</p>
              <div className="flex justify-between items-center text-sm text-muted-foreground">
                <Badge variant="outline">{post.date}</Badge>
                <span>By {post.author}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  )
}