import Link from "next/link";

const QuestionSix = () => {
  return (
    <>
      <h1 className="text-xl">Question 6:</h1>
      <h2 className="underline">A customer is creating a site and would like their project not to be indexed by search engines. Please write a reply to the customer. Separately, list any relevant documentation you found and any feedback or information you’d like to share about your decision making process.</h2>
      <br/>
      <p>Hi There,</p>
      <p>Thanks for getting in touch.</p>
      <p>In order for your project to not be indexed, there are a few methods you can try. Probably one of the most direct ways to prevent all web crawlers from indexing your site, would be to create a robots.txt file in the public directory of your project, following <Link className="text-blue-500" href="https://nextjs.org/learn-pages-router/seo/crawling-and-indexing/robots-txt">examples here</Link>.</p>
      <p>Another method would be to add a meta tag with the `noindex` value to your project as well. Here is also <Link className="text-blue-500" href="https://nextjs.org/learn-pages-router/seo/crawling-and-indexing/metatags">another example</Link> of how that can be implemented.</p>
      <p>Overall, these methods should help with not indexing your project. Please let me know if you have any additional questions.</p>
      <p>Best, Jordan</p>
      <br/>
      <p>Resources:</p>
      <ul>
        <li><Link className="text-blue-500" href="https://nextjs.org/learn-pages-router/seo/crawling-and-indexing/robots-txt">robots.txt</Link></li>
        <li><Link className="text-blue-500" href="https://nextjs.org/learn-pages-router/seo/crawling-and-indexing/metatags">meta tags</Link></li>
        <li><Link className="text-blue-500" href="https://vercel.com/guides/are-vercel-preview-deployment-indexed-by-search-engines">Preview deployment</Link></li>
      </ul>
      <br/>
      <p>Thought process: My thought process for this was to be a bit more straight forward and start google searching right away as time was beginning to be a factor. I also felt providing the documenation to the customer in this case helped save time instead of writing out the snippets. I found a few Github issues that were semi relevant which then lead me to the nextjs documenation that I was able to search and find most of the helpful information I linked above.</p>
    </>
  )
}

export default QuestionSix