import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const completion = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: generatePrompt(req.body.product),
    max_tokens: 512,
    temperature: 0.91
  });
  res.status(200).json({ result: completion.data.choices[0].text });
}

function generatePrompt(product) {
  const capitalizedproduct =
    product[0].toUpperCase() + product.slice(1).toLowerCase();
  return `Write a facebook ad for: ${capitalizedproduct}`;
}
