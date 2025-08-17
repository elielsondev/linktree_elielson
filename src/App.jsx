import PropChildren from "./components/PropChildren";
import Profile from "./components/Profile";

export default function App() {
  return (
    <div className="bg-green-700 h-screen flex items-center justify-center flex-col gap-2 text-slate-100">
      <Profile />
      <PropChildren href="https://elielsondev.vercel.app/">Portifólio</PropChildren>
      <PropChildren href="https://www.linkedin.com/in/elielsondev/">Linkedin</PropChildren>
      <PropChildren href="https://github.com/elielsondev">Github</PropChildren>
      <PropChildren href="https://api.whatsapp.com/send?phone=5581994153137">WhatsApp</PropChildren>
      <PropChildren href="mailto:nascimento.elielson@gmail.com">E-mail</PropChildren>
      <PropChildren href="https://discord.com/users/elielsondev">Discord</PropChildren>
    </div>
  );
}
