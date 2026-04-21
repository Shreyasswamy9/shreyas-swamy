export function generateSchemaMarkup() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Shreyas Swamy",
    url: "https://shreyasswamy.com",
    description: "Athlete. Builder. Creative Technologist.",
    jobTitle: ["Software Engineer", "Cybersecurity Specialist", "Creative Technologist"],
    sameAs: [
      "https://github.com/shreyasswamy",
      "https://linkedin.com/in/shreyasswamy",
      "https://twitter.com/shreyasswamy",
    ],
    image: "https://shreyasswamy.com/og-image.jpg",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Main",
      email: "shreyas@example.com",
    },
    worksFor: {
      "@type": "Organization",
      name: "Independent Creator",
    },
    knowsAbout: [
      "Computer Science",
      "Cybersecurity",
      "Full Stack Development",
      "React",
      "Next.js",
      "TypeScript",
      "Football",
      "Music Production",
      "Art",
      "Gaming",
    ],
  }
}

export function getMetaTags(currentPath: string) {
  const baseUrl = "https://shreyasswamy.com"
  const defaultTitle = "Shreyas Swamy"
  const defaultDescription = "Athlete. Builder. Creative Technologist."
  const defaultImage = `${baseUrl}/og-image.jpg`

  const pageConfig: Record<string, { title: string; description: string }> = {
    "/": {
      title: "Shreyas Swamy",
      description: "Explore my worlds: Football, Building, Art, Sound, Riding, and Play.",
    },
    "/football": {
      title: "Football | Shreyas Swamy",
      description:
        "Seven years. One scholarship. Three surgeries. Still here. My journey in collegiate football.",
    },
    "/build": {
      title: "Build | Shreyas Swamy",
      description:
        "Systems that don't break. Full-stack development, cybersecurity, and ecommerce solutions.",
    },
    "/art": {
      title: "Art | Shreyas Swamy",
      description: "Creative expression through visual art and design. How I see the world.",
    },
    "/ride": {
      title: "Ride | Shreyas Swamy",
      description: "Speed. Silence. Mine. Motorcycle culture and experiences.",
    },
    "/sound": {
      title: "Sound | Shreyas Swamy",
      description: "Late night. Minor chords. Just me. Music, guitar, and sonic exploration.",
    },
    "/play": {
      title: "Play | Shreyas Swamy",
      description: "Games, strategy, and immersion. Same instincts. Different terrain.",
    },
  }

  const config = pageConfig[currentPath] || {
    title: defaultTitle,
    description: defaultDescription,
  }

  return {
    title: config.title,
    description: config.description,
    openGraph: {
      title: config.title,
      description: config.description,
      url: `${baseUrl}${currentPath}`,
      siteName: "Shreyas Swamy",
      images: [
        {
          url: defaultImage,
          width: 1200,
          height: 630,
          alt: "Shreyas Swamy",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: config.title,
      description: config.description,
      images: [defaultImage],
      creator: "@shreyasswamy",
    },
  }
}
