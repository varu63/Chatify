function MessagesLoadingSkeleton() {
  return (
    <div className="max-w-3xl mx-auto px-3 sm:px-4 md:px-6 py-6 space-y-4">
      {[...Array(6)].map((_, index) => {
        const isLeft = index % 2 === 0;

        return (
          <div
            key={index}
            className={`flex ${isLeft ? "justify-start" : "justify-end"}`}
          >
            <div
              className={`
                animate-pulse
                rounded-2xl
                bg-slate-800
                h-10
                ${index % 3 === 0 ? "w-24 sm:w-32 md:w-40" : ""}
                ${index % 3 === 1 ? "w-40 sm:w-52 md:w-64" : ""}
                ${index % 3 === 2 ? "w-32 sm:w-44 md:w-56" : ""}
              `}
            />
          </div>
        );
      })}
    </div>
  );
}

export default MessagesLoadingSkeleton;