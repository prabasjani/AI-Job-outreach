export default function Button({ children, ...props }) {
  return (
    <button
      {...props}
      className={`bg-accent hover:bg-hover/75 text-gray-700 text-sm font-semibold px-4 py-2 rounded-xl w-full cursor-pointer transition-colors ${props.classes ? props.classes : ""}`}
    >
      {children}
    </button>
  );
}
