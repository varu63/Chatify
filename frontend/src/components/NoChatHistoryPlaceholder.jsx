import { MessageCircleIcon } from "lucide-react";

const NoChatHistoryPlaceholder = ({ name }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 py-8">
      
      {/* Icon */}
      <div className="
        w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20
        bg-gradient-to-br from-cyan-500/20 to-cyan-400/10
        rounded-full
        flex items-center justify-center
        mb-4 sm:mb-5
      ">
        <MessageCircleIcon className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400" />
      </div>

      {/* Title */}
      <h3 className="text-base sm:text-lg md:text-xl font-medium text-slate-200 mb-2 sm:mb-3">
        Start your conversation with{" "}
        <span className="truncate inline-block max-w-[180px] align-bottom">
          {name}
        </span>
      </h3>

      {/* Description */}
      <div className="flex flex-col space-y-3 max-w-sm sm:max-w-md mb-4 sm:mb-5">
        <p className="text-slate-400 text-xs sm:text-sm">
          This is the beginning of your conversation. Send a message to start chatting!
        </p>

        <div className="h-px w-24 sm:w-32 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent mx-auto"></div>
      </div>

      {/* Suggestion Buttons */}
      <div className="flex flex-wrap gap-2 justify-center max-w-sm">
        {[
          "👋 Say Hello",
          "🤝 How are you?",
          "📅 Meet up soon?",
        ].map((text, i) => (
          <button
            key={i}
            className="
              px-3 sm:px-4
              py-1.5 sm:py-2
              text-[10px] sm:text-xs
              font-medium
              text-cyan-400
              bg-cyan-500/10
              rounded-full
              hover:bg-cyan-500/20
              active:scale-95
              transition-all
            "
          >
            {text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NoChatHistoryPlaceholder;