export default function SearchBar() {
  return (
    <div className="relative w-full md:w-1/3">
      <input
        type="text"
        placeholder="بحث..."
        className="w-full rounded-lg border border-gray-300 py-2 px-4 pr-10 m-2 focus:outline-none focus:ring-2 focus:ring-ministry-green text-right"
      />
      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
        🔍
      </span>
    </div>
  );
}
