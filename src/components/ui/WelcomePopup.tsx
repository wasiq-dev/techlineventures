"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { RiMessage3Line, RiCloseLine, RiSendPlane2Line } from "react-icons/ri";

export function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [step, setStep] = useState<"chat" | "contact" | "sent">("chat");
  const [contactInfo, setContactInfo] = useState({ name: "", email: "" });
  const [messages, setMessages] = useState([
    { text: "Hi there! 👋 How can we help you today?", isBot: true }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim()) return;

    const userMsg = inputValue.toLowerCase();
    setMessages((prev) => [...prev, { text: inputValue, isBot: false }]);
    setInputValue("");

    // Simple AI Training / Response Logic
    let botResponse = "";

    if (userMsg.includes("hello") || userMsg.includes("hi") || userMsg.includes("hey") || userMsg.includes("asalam")) {
      botResponse = "Hello! 👋 Welcome to TechLine Venture. How can we help you build your next big idea?";
    } else if (userMsg.includes("website") || userMsg.includes("web development")) {
      botResponse = "We specialize in high-performance websites using Next.js. We offer corporate sites, landing pages, and complex web apps. Would you like to see our portfolio or get a quote?";
    } else if (userMsg.includes("app") || userMsg.includes("mobile")) {
      botResponse = "We build native-quality mobile apps for iOS and Android using React Native. Our apps are fast, secure, and user-friendly.";
    } else if (userMsg.includes("price") || userMsg.includes("cost") || userMsg.includes("budget") || userMsg.includes("rate")) {
      botResponse = "Our pricing depends on the project scope. Generally, basic websites start from 50k PKR. For an exact quote, please share your requirements.";
    } else if (userMsg.includes("contact") || userMsg.includes("phone") || userMsg.includes("call") || userMsg.includes("whatsapp")) {
      botResponse = "You can call or WhatsApp us at 0322 3509162, or email us at info@techlineventure.com.";
    } else if (userMsg.includes("address") || userMsg.includes("location") || userMsg.includes("office")) {
      botResponse = "Our office is located at Suite #B3, 2nd Floor, Haryani Centre, Zamzama, Phase-V, DHA, Karachi.";
    } else if (userMsg.includes("service") || userMsg.includes("what you do")) {
      botResponse = "We provide Web Development, Mobile Apps, E-commerce Solutions, UI/UX Design, and Digital Marketing.";
    } else {
      botResponse = "That sounds interesting! Please share your Name and Email/Phone so our expert team can discuss this with you in detail.";
      setStep("contact");
    }

    setTimeout(() => {
      setMessages((prev) => [...prev, { text: botResponse, isBot: true }]);
      
      // If it's the contact step, we send the email
      if (step === "contact" || botResponse.includes("share your Name")) {
        sendEmailSummary([...messages, { text: inputValue, isBot: false }, { text: botResponse, isBot: true }]);
      }
    }, 800);
  };

  const sendEmailSummary = async (currentMessages: Array<{ text: string; isBot: boolean }>) => {
    try {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "ddb0a35d-f858-4397-8d5a-fe7982ceeb2b",
          subject: "New Chat Lead from TechLine Website",
          from_name: "TechLine Chatbot",
          to_email: "info@techlineventure.com",
          message: `Full Chat History:\n\n${currentMessages.map(m => (m.isBot ? "Bot: " : "User: ") + m.text).join("\n")}`,
        }),
      });
    } catch (err) {
      console.error("Failed to send email", err);
    }
  };

  const handleQuickReply = (text: string) => {
    setMessages((prev) => [...prev, { text, isBot: false }]);
    let botResponse = "";
    if (text === "I need a website") {
      botResponse = "Great choice! We build fast, SEO-optimized websites. Could you please share your Name and Contact details so we can send you a proposal?";
    } else {
      botResponse = "Custom software is our strength. Please share your Name and Contact details so our technical lead can reach out to you.";
    }
    
    setTimeout(() => {
      setMessages((prev) => [...prev, { text: botResponse, isBot: true }]);
      setStep("contact");
      sendEmailSummary([...messages, { text, isBot: false }, { text: botResponse, isBot: true }]);
    }, 800);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="w-[320px] overflow-hidden rounded-2xl border border-[rgba(0,229,255,0.14)] bg-[#0d1b2f] shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col max-h-[450px]"
          >
            {/* Header */}
            <div className="bg-[rgba(0,229,255,0.06)] p-4 flex items-center justify-between border-b border-[rgba(0,229,255,0.1)] shrink-0">
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 rounded-full bg-cyan/10 grid place-items-center text-cyan">
                  <RiMessage3Line className="h-5 w-5" />
                  <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-[#0d1b2f] bg-green-500" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">TechLine Support</div>
                  <div className="text-[10px] text-cyan uppercase tracking-wider font-medium">Online now</div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <RiCloseLine className="h-5 w-5" />
              </button>
            </div>

            {/* Content - Scrollable area */}
            <div className="p-4 flex-1 overflow-y-auto space-y-4 custom-scrollbar min-h-[200px]">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                  <div className={`max-w-[85%] rounded-xl p-3 text-xs leading-relaxed ${
                    msg.isBot 
                      ? 'bg-[rgba(255,255,255,0.03)] text-[rgba(197,213,232,0.9)] border border-[rgba(255,255,255,0.05)]' 
                      : 'bg-cyan text-[#050d1f] font-medium'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              
              {messages.length === 1 && (
                <div className="mt-4 flex flex-col gap-2">
                  <button 
                    onClick={() => handleQuickReply("I need a website")}
                    className="w-full rounded-lg border border-[rgba(0,229,255,0.15)] bg-cyan/5 px-4 py-2 text-left text-[10px] text-white hover:bg-cyan/10 transition-all"
                  >
                    I need a website
                  </button>
                  <button 
                    onClick={() => handleQuickReply("Custom software inquiry")}
                    className="w-full rounded-lg border border-[rgba(0,229,255,0.15)] bg-cyan/5 px-4 py-2 text-left text-[10px] text-white hover:bg-cyan/10 transition-all"
                  >
                    Custom software inquiry
                  </button>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Footer Input */}
            <form onSubmit={handleSendMessage} className="p-4 pt-2 shrink-0">
              <div className="flex items-center gap-2 rounded-lg bg-[rgba(255,255,255,0.03)] px-3 py-2 border border-[rgba(255,255,255,0.05)]">
                <input 
                  type="text" 
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..." 
                  className="bg-transparent text-xs text-white outline-none flex-1 placeholder:text-gray-500"
                />
                <button type="submit" disabled={!inputValue.trim()}>
                  <RiSendPlane2Line className={`h-4 w-4 transition-colors ${inputValue.trim() ? 'text-cyan cursor-pointer' : 'text-gray-600'}`} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative">
        <AnimatePresence>
          {showNotification && !isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="absolute bottom-full right-0 mb-4 w-[240px] rounded-xl border border-[rgba(0,229,255,0.14)] bg-[#0d1b2f] p-3 shadow-xl"
            >
              <div className="text-xs text-white leading-relaxed">
                Need help with your project? Chat with us!
              </div>
              <div className="absolute -bottom-2 right-6 h-4 w-4 rotate-45 border-r border-b border-[rgba(0,229,255,0.14)] bg-[#0d1b2f]" />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            setIsOpen(!isOpen);
            setShowNotification(false);
          }}
          className="h-14 w-14 rounded-full bg-cyan shadow-[0_10px_30px_rgba(0,229,255,0.3)] grid place-items-center text-[#050d1f] hover:bg-[#00d1e6] transition-colors relative group"
        >
          <RiMessage3Line className="h-7 w-7" />
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-white border-2 border-cyan"></span>
          </span>
        </motion.button>
      </div>
    </div>
  );
}
