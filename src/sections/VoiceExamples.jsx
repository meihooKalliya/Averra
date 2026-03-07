import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./voiceexamples.css";

const VoiceExamples = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".persona-card");
    const handlers = [];

    cards.forEach((card) => {
      const onMove = (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.06), rgba(255,255,255,0.03) 40%)`;
      };
      const onLeave = () => {
        card.style.background = "rgba(255, 255, 255, 0.03)";
      };
      card.addEventListener("mousemove", onMove);
      card.addEventListener("mouseleave", onLeave);
      handlers.push({ card, onMove, onLeave });
    });

    return () => {
      handlers.forEach(({ card, onMove, onLeave }) => {
        card.removeEventListener("mousemove", onMove);
        card.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <section className="proof-container">
      <div className="section-header">
        <span className="sub-header">KEY CAPABILITIES</span>
        <h2 className="proof-headline">
          The first AI voice that actually <span className="gradient-text">feels human.</span>
        </h2>
        <p className="proof-subtext">
          Instantly switch between specialized agents. From high‑octane outbound to calm, empathetic support, Averra adjusts its tone and behavior to match your objective.
        </p>
      </div>

      <div className="cards-grid">
        {/* Card 1 */}
        <div className="persona-card">
          <div className="card-glow blue" />
          <div className="card-header">
            <div className="icon-box blue-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
            </div>
            <span className="badge">HIGH CONVERSION</span>
          </div>
          <h3 className="card-title">The Closer</h3>
          <p className="card-desc">Direct, confident, and relentlessly polite—engineered to book meetings and punch through early objections.</p>
          <div className="card-stats">
            <div className="stat">
              <span className="label">Conv. Rate</span>
              <span className="value blue-text">High</span>
            </div>
            <div className="stat">
              <span className="label">Avg. Time</span>
              <span className="value">Optimal</span>
            </div>
          </div>
          <div className="card-action">
            <span className="play-btn">▶ Listen to Sample</span>
          </div>
        </div>

        {/* Card 2 Featured */}
        <div className="persona-card featured">
          <div className="card-glow purple" />
          <div className="card-header">
            <div className="icon-box purple-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
            </div>
            <span className="badge purple-badge">TOP RATED</span>
          </div>
          <h3 className="card-title">The Empath</h3>
          <p className="card-desc">Gentle, patient, and emotionally tuned. Ideal for retention, win‑backs, NPS surveys, and sensitive conversations.</p>
          <div className="card-stats">
            <div className="stat">
              <span className="label">Sentiment</span>
              <span className="value purple-text">Positive</span>
            </div>
            <div className="stat">
              <span className="label">Retention</span>
              <span className="value">High</span>
            </div>
          </div>
          <div className="card-action">
            <span className="play-btn">▶ Listen to Sample</span>
          </div>
        </div>

        {/* Card 3 */}
        <div className="persona-card">
          <div className="card-glow orange" />
          <div className="card-header">
            <div className="icon-box orange-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
            </div>
            <span className="badge">BETA</span>
          </div>
          <h3 className="card-title">The Negotiator</h3>
          <p className="card-desc">Built for serious money talks—pricing, terms, and conditions—using structured, logic‑driven rebuttals that don’t fold under pressure.</p>
          <div className="card-stats">
            <div className="stat">
              <span className="label">Logic Score</span>
              <span className="value orange-text">Strict</span>
            </div>
            <div className="stat">
              <span className="label">Depth</span>
              <span className="value">High</span>
            </div>
          </div>
          <div className="card-action">
            <span className="play-btn">▶ Listen to Sample</span>
          </div>
        </div>
      </div>

      <div className="bottom-cta-container">
        <Link to="/features" className="bg-indigo-500 text-base clash-display px-4 py-3 rounded-full cursor-pointer hover:-translate-y-1 transition2 hover:bg-indigo-500/20 inline-block">Explore All Voices</Link>
        <p className="disclaimer">Get started with a free trial today.</p>
      </div>
    </section>
  );
};

export default VoiceExamples;
