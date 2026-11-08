import {
  BuiltInAgent,
  CopilotRuntime,
  convertInputToTanStackAI,
  createCopilotRuntimeHandler,
} from "@copilotkit/runtime/v2";
import { chat } from "@tanstack/ai";
import { openaiText } from "@tanstack/ai-openai";

const agent = new BuiltInAgent({
  type: "tanstack",
  factory: ({ input, abortController }) => {
    if (!process.env.OPENAI_API_KEY) {
      throw new Error("OPENAI_API_KEY is not configured. Add it to .env.local.");
    }

    const { messages, systemPrompts, tools } = convertInputToTanStackAI(input);

    return chat({
      adapter: openaiText("gpt-4o-mini"),
      messages,
      systemPrompts: [
        ...systemPrompts,
        "Respond in English. If the user asks to compare options, use render_ui and the Table component from the catalog to show the result as a table.",
      ],
      tools,
      threadId: input.threadId,
      abortController,
    });
  },
});

const handler = createCopilotRuntimeHandler({
  mode: "single-route",
  runtime: new CopilotRuntime({
    agents: { default: agent },
    generativeUI: true,
  }),
});

export const GET = handler;
export const POST = handler;
export const OPTIONS = handler;
