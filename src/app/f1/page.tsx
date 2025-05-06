import Link from 'next/link'

export default function F1 () {
  return (
    <div>
      <h2>F1 Page</h2>
      <Link href="/f1/f2">F2 Link</Link>
      <h2 />
      <Link href="/f3">F3 Link</Link>
    </div>
  )
}
