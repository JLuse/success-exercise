import Link from "next/link";

const QuestionFour = () => {
  const codeSnippet = `
  // middleware.ts
  import { NextResponse } from 'next/server'
  import type { NextRequest } from 'next/server'


  export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/blog')) {
    return NextResponse.redirect(new URL('https://google.com', request.url))
    }
  }`;

  return (
    <div>
      <h1 className="text-xl">Question 4:</h1>
      <h2 className="underline">A customer has a project on Vercel and they want to redirect the /blog path to another website. Please write a reply to the customer. Separately, list any relevant documentation you found and any feedback or information you’d like to share about your decision-making process.</h2>
      <br/>
      <p>Response:</p>
      <br />
      <p>Hello There,</p>

      <p>Happy to help with this.</p>
      <p>The best way to redirect your /blog path would be to utilize middleware to handle the request. You would first create a middleware file in the root of your project, i.e., at the same level as pages or app, or inside src if you're using that directory structure. and could try something similar to the following snippet:</p>
      <pre><code>{codeSnippet}</code></pre>

      <p>Please give that a try and let us know if that helps.</p>
      <p>Cheers,Jordan </p>

      <br/>
      <p>Resources and process:</p>
      <Link className="text-blue-500" href="https://vercel.com/docs/functions/edge-middleware#create-edge-middleware">Create Edge Middleware</Link>
      <p>Thought process: My thought process for this response was tied into the the previous excercise where we highlighted edge middleware and its ability to help alter requests. It felt like a middleware use case to add a redirect with that method.</p>
    </div>
  );

}

export default QuestionFour