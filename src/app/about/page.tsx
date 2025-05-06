export default async function About() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve('Intentional Delay')
    }, 2000)
  })
  throw new Error('Error loading the about page')

  return <h1>About</h1>
}
