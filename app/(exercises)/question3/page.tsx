import Link from "next/link";

const QuestionThree = () => {
  return (
    <>
      <h1 className="text-xl">Question 3:</h1>
      <h2 className="underline">When would you choose to use Edge Functions, Serverless Functions, or Edge Middleware with Vercel?.</h2>
      <br/>
      <p>Each of these technologies relies on the specific requirements of an application, so depending on the use case you could use them for some of the highlighted reasons:</p>
      <ul>
        <li>- For performance focused, user-specific content manipulation, <Link className="text-blue-500" href="https://vercel.com/docs/functions/runtimes/edge-runtime">Edge Functions</Link> offer the fastest response times, by executing the functions in the data center is closest to the user, or in a region near their databases.</li>
        <li>-  <Link className="text-blue-500" href="https://vercel.com/docs/functions/runtimes">Serverless Functions</Link> are best suited for dynamic content generation and backend processes that require computational resources or database access.</li>
        <li>- <Link className="text-blue-500" href="https://vercel.com/docs/functions/edge-middleware">Edge Middleware</Link> is the go to for pre-processing requests at the edge. It is executed even before cached content and routes are matched. Its primary job is to direct the flow of requests based on the incoming data, so you can use middleware to alter a request before returning a response.</li>
      </ul>
    </>
  )
}

export default QuestionThree