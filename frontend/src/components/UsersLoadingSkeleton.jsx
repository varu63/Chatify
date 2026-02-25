function UsersLoadingSkeleton({ count = 6 }) {
  return (
    <div className="px-2 sm:px-3 md:px-4 py-2 space-y-2">
      {[...Array(count)].map((_, index) => (
        <div
          key={index}
          className="
            bg-slate-800/30
            px-3 sm:px-4
            py-3
            rounded-lg
            animate-pulse
          "
        >
          <div className="flex items-center gap-3">
            
            {/* Avatar */}
            <div className="
              w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12
              bg-slate-700
              rounded-full
            " />

            {/* Text */}
            <div className="flex-1 space-y-2">
              <div className="h-3 sm:h-4 bg-slate-700 rounded w-2/3" />
              <div className="h-2.5 sm:h-3 bg-slate-700/70 rounded w-1/3" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UsersLoadingSkeleton;