const Loader = () => {
  return (
    <div className="flex items-center gap-2 text-sm text-gray-400 p-3">
      <div className="w-3 h-3 rounded-full bg-gray-300 animate-bounce" />
      <div className="w-3 h-3 rounded-full bg-gray-300 animate-bounce [animation-delay:150ms]" />
      <div className="w-3 h-3 rounded-full bg-gray-300 animate-bounce [animation-delay:300ms]" />
    </div>
  );
};

export default Loader;
