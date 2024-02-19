import Link from "next/link"

export default function RevenueLayout({
children
}: {
    children: React.ReactNode
}
) {
  return (
    <div>
        {children}
        <Link href='/dashboard/page-views'>go to page views</Link>
        <br />
        <Link href='/dashboard/visitors'>go to visitor page</Link>
    </div>
  )
}
