export default async function Register() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve('Intentional Delay')
    }, 5000)
  })
  return (
    <>
      <h1>Register Page</h1>
    </>
  )
}
