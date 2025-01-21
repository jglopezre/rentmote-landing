import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "@/components/Layout"
import { Hero } from "@/sections/hero"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Hero />
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Rentmote</title>
