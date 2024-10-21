const data = {
    title: "Our Services",
    description: "InnoTech Solutions offers a wide range of technology services to meet your business needs. From cloud integration to cybersecurity, we've got you covered.",
    services: [
      {
        title: "Cloud Integration",
        description: "Seamlessly integrate your systems with our advanced cloud solutions. We offer migration services, hybrid cloud setups, and ongoing cloud management to ensure your business leverages the full potential of cloud technology.",
        features: ["Data Migration", "Hybrid Cloud Setup", "24/7 Cloud Management"]
      },
      {
        title: "AI-Powered Analytics",
        description: "Harness the power of artificial intelligence to gain actionable insights from your data. Our AI solutions help you make data-driven decisions, optimize operations, and predict future trends.",
        features: ["Predictive Analytics", "Machine Learning Models", "Real-time Data Processing"]
      },
      {
        title: "Cybersecurity",
        description: "Protect your digital assets with our state-of-the-art security measures. We offer comprehensive security audits, implement robust security protocols, and provide ongoing monitoring to keep your business safe from cyber threats.",
        features: ["Security Audits", "Threat Detection", "Incident Response Planning"]
      }
    ]
  }
  
  export default function Services() {
    return (
      <div className="space-y-12">
        <section className="text-center">
          <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
          <p className="text-xl text-gray-600">{data.description}</p>
        </section>
  
        <section className="space-y-8">
          {data.services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
              <p className="text-gray-700 mb-4">{service.description}</p>
              <h3 className="text-lg font-semibold mb-2">Key Features:</h3>
              <ul className="list-disc list-inside text-gray-600">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      </div>
    )
  }