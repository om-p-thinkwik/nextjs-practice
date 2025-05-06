export default function ({ params }: { params: { reviewId: string } }) {
  return <h1>Hello Welcome to Review {params.reviewId}</h1>
}
