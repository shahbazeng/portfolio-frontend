import React, { useEffect, useRef, useState } from "react";
import "./ChatWidget.css";

export default function ChatWidget({
  webhookUrl, // pass in Home; fallback to .env if not passed
  title = "Shahbaz – AI Chatbot",
}) {
  const resolvedUrl = webhookUrl || process.env.REACT_APP_N8N_WEBHOOK_URL || "";
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! How can I help you today?" },
  ]);

  const listRef = useRef(null);

  // auto-scroll
  useEffect(() => {
    if (listRef.current)
      listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [messages, open]);

  async function sendMessage(text) {
    if (!text.trim() || loading) return;

    if (!resolvedUrl) {
      setMessages((m) => [
        ...m,
        {
          sender: "bot",
          text: "Webhook URL missing. Pass `webhookUrl` or set REACT_APP_N8N_WEBHOOK_URL.",
        },
      ]);
      return;
    }

    setMessages((m) => [...m, { sender: "user", text }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(resolvedUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });

      const ct = res.headers.get("content-type") || "";
      const data = ct.includes("application/json")
        ? await res.json()
        : { text: await res.text() };

      if (!res.ok) {
        throw new Error(data?.message || data?.text || `HTTP ${res.status}`);
      }

      const reply =
        data.message || data.reply || data.text || JSON.stringify(data);
      setMessages((m) => [...m, { sender: "bot", text: String(reply) }]);
    } catch (err) {
      setMessages((m) => [
        ...m,
        {
          sender: "bot",
          text: `Error: ${err.message || "Unable to connect to server."}`,
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function onKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  }

  return (
    <>
      <button
        className="chat-launcher"
        aria-label="Open chat"
        onClick={() => setOpen((v) => !v)}
      >
        💬
      </button>

      <section className={`chat-panel ${open ? "open" : ""}`}>
        <header className="chat-header">{title}</header>
        <div className="chat-body" ref={listRef}>
          <div className="messages">
            {messages.map((m, i) => (
              <div key={i} className={`msg ${m.sender}`}>
                {m.text}
              </div>
            ))}
            {loading && <div className="msg bot">…</div>}
          </div>
        </div>
        <div className="chat-input">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder="Type your message…"
          />
        </div>
      </section>
    </>
  );
}
