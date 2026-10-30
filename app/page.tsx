import type { Metadata } from "next"
import ClientPage from "./ClientPage"

export const metadata: Metadata = {
  title: "Favour Ajuzie | UI/UX, Product & Graphic Designer",
  description:
    "Explore the portfolio of Favour Ajuzie, showcasing intuitive digital products, user-centred experiences, and compelling visual designs.",
}

export default function Home() {
  return <ClientPage />
}
