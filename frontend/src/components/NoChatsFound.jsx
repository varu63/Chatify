import { MessageCircleIcon } from "lucide-react";
import { useChatStore } from "../store/useChatStore";

function NoChatsFound() {
  const { setActiveTab } = useChatStore();

  return (
    <div className="flex flex-col items-center justify-center text-center px-4 sm:px-6 py-12 space-y-4">
      
      {/* Icon */}
      <div className="
        w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20
        bg-cyan-500/10
        rounded-full
        flex items-center justify-center
      ">
        <MessageCircleIcon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-cyan-400" />
      </div>

      {/* Text Content */}
      <div className="max-w-xs sm:max-w-sm md:max-w-md">
        <h4 className="text-sm sm:text-base md:text-lg text-slate-200 font-medium mb-1">
          No conversations yet
        </h4>
        <p className="text-xs sm:text-sm md:text-base text-slate-400">
          Start a new chat by selecting a contact from the contacts tab.
        </p>
      </div>

      {/* Button */}
      <button
        onClick={() => setActiveTab("contacts")}
        className="
          px-4 sm:px-5
          py-2 sm:py-2.5
          text-xs sm:text-sm
          text-cyan-400
          bg-cyan-500/10
          rounded-lg
          hover:bg-cyan-500/20
          active:scale-95
          transition-all
        "
      >
        Find contacts
      </button>
    </div>
  );
}

export default NoChatsFound;