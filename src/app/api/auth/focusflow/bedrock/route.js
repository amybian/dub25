export async function POST(req) {
  const { prompt } = await req.json();

  try {
    // Call Amazon Bedrock here
    const result = await callClaude(prompt); // your Bedrock helper
    return new Response(JSON.stringify({ result }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
