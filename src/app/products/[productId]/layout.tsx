function getRandomInt(count: number) {
  return Math.floor(Math.random() * count)
}

export default function ProductDetailsLayout({ children }: { children: React.ReactNode }) {
  const random = getRandomInt(2)
  if (random == 1) throw new Error('New Error in random no.')
  return (
    <div>
      {children}
      <h3>Featured products</h3>
    </div>
  )
}
