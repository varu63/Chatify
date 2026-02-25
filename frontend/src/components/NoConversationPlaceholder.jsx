import { MessageCircleIcon } from "lucide-react";

const NoConversationPlaceholder = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 py-8">
      
      {/* Icon */}
      <div className="
        w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24
        bg-cyan-500/20
        rounded-full
        flex items-center justify-center
        mb-4 sm:mb-6
      ">
        <MessageCircleIcon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-cyan-400" />
      </div>

      {/* Heading */}
      <h3 className="text-base sm:text-lg md:text-xl font-semibold text-slate-200 mb-2">
        Select a conversation
      </h3>

      {/* Description */}
      <p className="text-xs sm:text-sm md:text-base text-slate-400 max-w-xs sm:max-w-md">
        Choose a contact from the sidebar to start chatting or continue a previous conversation.
      </p>
    </div>
  );
};

export default NoConversationPlaceholder;