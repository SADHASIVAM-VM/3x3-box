
import { GoogleGenerativeAI } from "@google/generative-ai";
const apiKey = "AIzaSyD4a-x5QfIDl6eybORhO3xiy7Ik3eVtC8s";

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(apiKey);
async function run(prompt) {
  // For text-only input, use the gemini-pro model
  try{
    
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});
  const result = await model.generateContent(prompt);
  const response = result.response;
  const text = response.text();
  console.log(text)
  }
  catch(err){
    console.log("ERR may happens in GEMINI ai")
  }

}


export default run

