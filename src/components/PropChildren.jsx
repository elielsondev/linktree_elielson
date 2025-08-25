export default function PropChildren(props) {
  return (
    <button className="bg-indigo-700 font-bold w-56 px-4 py-2 rounded hover:bg-slate-100 hover:text-green-600 active:bg-green-600 active:text-slate-100">
      <a href={props.href} target="_blank">
        { props.children }
      </a>
    </button>
  );
}