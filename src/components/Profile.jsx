import Avatar_Elielson from "../assets/Avatar_Elielson.png";

export default function Profile() {
  return (
    <main className="justify-center flex-wrap content-center flex flex-col items-center">
      <img src={Avatar_Elielson} alt="" className="w-24 h-24 rounded-full" />
      <h1 className="text-3xl font-bold">Elielson Nascimento</h1>
      <a className="mt-1">@elielsondev</a>
    </main>
  );
}
