import Link from "next/link";

const QuestionFive = () => {
  const codeSnippet = `
  // Vercel.json
  {
    "redirects": [
      {
        "source": "/blog",
        "destination": "https://github.com/vercel/vercel"
      }
    ]
  }`;

  return (
    <div>
      <h1 className="text-xl">Question 5:</h1>
      <h2 className="underline">Imagine that the customer from Question 4 responds with the following email:</h2>
      <p>“I&apos;m so frustrated. I&apos;ve been trying to make this work for hours and I just can&apos;t figure it out. It must be a platform issue so why don&apos;t you just fix it for me instead of asking me questions.&quot; What response would you write back?</p>
      <br/>
      <p>Response:</p>
      <br />
      <p>Hello Again,</p>

      <p>I’m sorry to hear you’re having trouble with the redirect, but am happy to work through this with you. Unfortunately, there is not much action to take on the platform side, as the implementation of middleware would happen within your application to handle redirects. If you could share how you’ve configured, we might be able to see what could be a miss and help.</p>
      <p>Alternatively, if the middleware suggestion is not working out for you, try adding <Link className="text-blue-500" href="https://vercel.com/docs/projects/project-configuration#redirects">redirects</Link> to your vercel.json in its place. The vercel.json file is another file you would need to create in your project&apos;s root directory. Once created, you could try adding the following snippet for redirecting:</p>
      <pre><code>{codeSnippet}</code></pre>

      <p>I hope this is helpful but if you do encounter any more issues please don&apos;t hesitate to reach back out.</p>
      <p>Kind regards, Jordan</p>

      <br/>
      <p>Resources:</p>
      <ul>
        <li><Link className="text-blue-500" href="https://vercel.com/docs/projects/project-configuration#">vercel.json</Link></li>
        <li><Link className="text-blue-500" href="https://vercel.com/docs/projects/project-configuration#redirects">Redirects</Link></li>
      </ul>
      <br/>
      <p>Thought process: My thought process for this response was to show more empathy as the customer is running into an issue with the previous response. Being able to see their code/config would bne helpful. I also found there is another method to achieve the same thing so felt it was approiate to reccomend a different approach to see if that helps as well.</p>
    </div>
  );
}

export default QuestionFive