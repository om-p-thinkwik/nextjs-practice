import Link from 'next/link'

export default function Login() {
  return (
    <>
      <h1>Login Page</h1>
      <p> Have you forgotten your password?</p>
      <Link href="/forgot-password">Forgot Password</Link>
    </>
  )
}
