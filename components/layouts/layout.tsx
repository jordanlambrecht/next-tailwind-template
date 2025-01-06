import { Footer, Nav } from "@parts/modules/index"
import localFont from "next/font/local"
import { ReactNode } from "react"

type LayoutProps = {
  children: ReactNode
}

const fields = localFont({
  display: "swap",
  preload: true,
  src: [
    {
      path: "fonts/fields/Fields-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "fonts/fields/Fields-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "fonts/fields/Fields-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "fonts/fields/Fields-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "fonts/fields/Fields-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-fields",
})
const quasimoda = localFont({
  display: "swap",
  preload: true,
  src: [
    {
      path: "fonts/quasimoda/Quasimoda-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "fonts/quasimoda/Quasimoda-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "fonts/quasimoda/Quasimoda-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "fonts/quasimoda/Quasimoda-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "fonts/quasimoda/Quasimoda-SemiBoldItalic.woff2",
      weight: "600",
      style: "italic",
    },
    {
      path: "fonts/quasimoda/Quasimoda-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-quasimoda",
})

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Nav />
      <main
        className={`${quasimoda.variable} ${fields.variable} max-w-screen overflow-hidden min-h-[calc(100vh-108px-24px)] font-quasimoda font-fields`}
      >
        {children}
      </main>
      <Footer />
    </>
  )
}
