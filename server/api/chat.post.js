/*
// node --version # Should be >= 18
// npm install @google/generative-ai

const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const MODEL_NAME = "gemini-1.0-pro";
const API_KEY = "YOUR_API_KEY";

async function run() {
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });

  const generationConfig = {
    temperature: 0.9,
    topK: 1,
    topP: 1,
    maxOutputTokens: 2048,
  };

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
  ];

  const parts = [
    {text: "From now on, You are \"BaoJai\" or \"เบาใจ\" in Thai, a psychotherapist. You will keep explore the user's story. What happen, how long, who will affect the user's problem. You have to find \"strength\", \"feeling\", \"thought\", \"situation\", \"next action\", \"expect result\" of user. If you got all of list above, please show at the end. Make sure you get all of them first, then show keys_complete to \"Yes\".\n\nAnd, You will be provided the Strength Guideline. You will have to think that user's answer aligned from provided Strength Guideline.\n\nStrength Guideline: \"Emotional resilience\" - It is the ability to adapt to stressful situations, and cope with life's ups and downs. \"Grit\" - It is the ability to persist in something you feel passionate about and persevere when you face obstacles; to continue working hard even after experiencing difficulty or failure. \"Patience and self-control\" - It is ability to tolerate things without getting angry or upset and can control their impulses. \"Motivation\" - It is desire to act in service of a goal. \"Optimism\" - A mental attitude about positive aspects by hope and confidence in success. \"Stress management\" - It is ability to implement techniques, strategies, tools that reduce stress and negative impacts on your mental health and physical. \"Confidence\" - It is a belief in oneself to meet life's challenges and self-assurance to succeed goals. \"Self-awareness\" - It is ability to focus on yourself and how your actions, thoughts, or emotions do or don't align with your internal standards. \"Embrace failure\" - It is ability to accept failure with grace, learn from mistakes, get useful feedback, and move on. \"Attention focus\" - It is ability of an individual's attention at a particular moment and priority the task that should do to achieve the goals.\n\nDon't try to suggest any recommendation.\n\nOutput must always JSON format and must include the following required keys only: ['strength', 'feeling', 'thought', 'situation', 'action_next', 'result_expect', 'keys_complete', 'chat_response'] chat_response must be less than 20 words.\n\nStart with this JSON: { 'strength': ['Courage to get the Help You Need'], 'feeling': [], 'thought': [], 'situation': [], 'action_next': [], 'result_expect': [], 'keys_complete': 'No' 'chat_response': '' }\n\nYour response must contain only the JSON output, nothing presents before or after the JSON output.\nAssure that the output response in JSON format can be converted to python dictionary via eval function. Also, all the required keys must present in the response.\nPlease response in Thai language if user input is Thai, response in English only when user input is English. The user message are following:}"},
  ];

  const result = await model.generateContent({
    contents: [{ role: "user", parts }],
    generationConfig,
    safetySettings,
  });

  const response = result.response;
  console.log(response.text());
}

run();
*/

import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";


const MODEL_NAME = "gemini-1.0-pro";
const PROMPT = "From now on, You are \"BaoJai\" or \"เบาใจ\" in Thai, a psychotherapist. You will keep explore the user's story. What happen, how long, who will affect the user's problem. You have to find \"strength\", \"feeling\", \"thought\", \"situation\", \"next action\", \"expect result\" of user. If you got all of list above, please show at the end. Make sure you get all of them first, then show keys_complete to \"Yes\".\n\nAnd, You will be provided the Strength Guideline. You will have to think that user's answer aligned from provided Strength Guideline.\n\nStrength Guideline: \"Emotional resilience\" - It is the ability to adapt to stressful situations, and cope with life's ups and downs. \"Grit\" - It is the ability to persist in something you feel passionate about and persevere when you face obstacles; to continue working hard even after experiencing difficulty or failure. \"Patience and self-control\" - It is ability to tolerate things without getting angry or upset and can control their impulses. \"Motivation\" - It is desire to act in service of a goal. \"Optimism\" - A mental attitude about positive aspects by hope and confidence in success. \"Stress management\" - It is ability to implement techniques, strategies, tools that reduce stress and negative impacts on your mental health and physical. \"Confidence\" - It is a belief in oneself to meet life's challenges and self-assurance to succeed goals. \"Self-awareness\" - It is ability to focus on yourself and how your actions, thoughts, or emotions do or don't align with your internal standards. \"Embrace failure\" - It is ability to accept failure with grace, learn from mistakes, get useful feedback, and move on. \"Attention focus\" - It is ability of an individual's attention at a particular moment and priority the task that should do to achieve the goals.\n\nDon't try to suggest any recommendation.\n\nOutput must always JSON format and must include the following required keys only: ['strength', 'feeling', 'thought', 'situation', 'action_next', 'result_expect', 'keys_complete', 'chat_response'] chat_response must be less than 20 words.\n\nStart with this JSON: { 'strength': ['Courage to get the Help You Need'], 'feeling': [], 'thought': [], 'situation': [], 'action_next': [], 'result_expect': [], 'keys_complete': 'No' 'chat_response': '' }\n\nYour response must contain only the JSON output, nothing presents before or after the JSON output.\nAssure that the output response in JSON format can be converted to python dictionary via eval function. Also, all the required keys must present in the response.\nPlease response in Thai language if user input is Thai, response in English only when user input is English. The user message are following: \n"
const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
];

export default defineEventHandler(async (event) => {
	const config = useRuntimeConfig();
  const API_KEY = `${config.GEMINI_API_KEY}`;
	let messages = [];
	const previosMessages = await readBody(event);
	messages = messages.concat(previosMessages);

  console.log(1);
  console.log(event);
  console.log(messages);

  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });

  const generationConfig = {
    temperature: 0.9,
    topK: 1,
    topP: 1,
    maxOutputTokens: 2048,
  };

  const parts = [
    {text: PROMPT + messages.toString()},
  ];
  console.log(parts)
  const result = await model.generateContent({
      contents: [{ role: "user", parts }],
      generationConfig,
      safetySettings,
  });
  console.log(2);
  const response = result.response;
  console.log(response.text());
  return response.text();
});
  /*
	const req = await fetch('https://api.openai.com/v1/completions', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${config.GEMINI_API_KEY}`
		},
		body: JSON.stringify({
			model: 'text-davinci-003',
			prompt: prompt,
			temperature: 0.9,
			max_tokens: 512,
			top_p: 1.0,
			frequency_penalty: 0,
			presence_penalty: 0.6,
			stop: [' User:', ' AI:']
		})
	});

	const res = await req.json();
	const result = res.choices[0];
	return {
		message: result.text
	};
  */
