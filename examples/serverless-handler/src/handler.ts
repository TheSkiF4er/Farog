export async function handler(request: Request): Promise<Response> {
  const url = new URL(request.url);
  return new Response(`Farog serverless handler: ${url.pathname}`);
}
