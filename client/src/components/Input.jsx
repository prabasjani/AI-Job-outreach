export default function Input({ ...props }) {
  return (
    <input
      {...props}
      className="w-full px-4 py-2 text-sm rounded-xl bg-orange-200/40 focus:outline-accent/50"
    />
  );
}
