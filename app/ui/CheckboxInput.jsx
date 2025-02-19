export default function CheckboxInput({ id, onChange, name, children, checked }) {
  return (
    <label
      htmlFor={id}
      className={`flex items-center gap-2 rounded-md hover:bg-white transition-colors justify-center text-black font-bold border cursor-pointer px-2 ${checked ? 'bg-green-200 border-green-700' : 'bg-gray-200 border-gray-500'}`}
    >
      <input
        type="checkbox"
        id={id}
        name={name}
        onChange={onChange}
        className="hidden"
      />
      {children}
    </label>
  )
}