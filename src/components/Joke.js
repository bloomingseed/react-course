import "./Joke.css";

export default function Joke({ setup, punchline }) {
  return (
    <div className="joke">
      {setup ? <div className="joke-setup">{setup}</div> : null}
      <div className="joke-punchline">{punchline}</div>
    </div>
  );
}
