import { CopilotChat } from "@copilotkit/react-core/v2";

export default function Home() {
  return (
    <main className="page">
      <section className="intro">
        <p className="eyebrow">COPILOTKIT · GENERATIVE UI</p>
        <h1>Answers that become an interface</h1>
        <p className="description">
          Ask the agent to compare plans and it will display the answer in a
          table right in the chat. Try refining the result with a follow-up message.
        </p>
        <div className="example-prompt">
          <span className="prompt-label">Try it</span>
          <span>Compare Starter, Team, and Enterprise in a table</span>
        </div>
      </section>

      <section className="chat-panel" aria-label="Chat with an AI agent">
        <CopilotChat className="demo-chat" />
      </section>
      <footer>Powered by CopilotKit, TanStack AI, and OpenAI</footer>
    </main>
  );
}
