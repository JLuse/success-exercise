
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse<string>) {
  // Fetch data from the external URL
  const response = await fetch('https://jluse.github.io/');
  const data = await response.text();

  // Set the appropriate headers for your response
  res.setHeader('Content-Type', 'text/html');
  // Include the Access-Control-Allow-Origin header if you want to allow any origin to access this API route
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  // Send the response back to the client
  res.status(200).send(data);
}