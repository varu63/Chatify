import { XIcon } from "lucide-react";
import { useChatStore } from "../store/useChatStore";
import { useEffect } from "react";
import { useAuthStore } from "../store/useAuthStore";

function ChatHeader() {
  const { selectedUser, setSelectedUser } = useChatStore();
  const { onlineUsers } = useAuthStore();

  const isOnline = onlineUsers.includes(selectedUser._id);

  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape") setSelectedUser(null);
    };

    window.addEventListener("keydown", handleEscKey);
    return () => window.removeEventListener("keydown", handleEscKey);
  }, [setSelectedUser]);

  return (
    <div
      className="
        flex justify-between items-center
        bg-slate-800/50 border-b border-slate-700/50
        px-3 sm:px-4 md:px-6
        py-3
      "
    >
      {/* Left Section */}
      <div className="flex items-center gap-2 sm:gap-3 min-w-0">
        <div className={`avatar ${isOnline ? "online" : "offline"}`}>
          <div className="w-9 sm:w-10 md:w-12 rounded-full">
            <img
              src={selectedUser.profilePic || "/avatar.png"}
              alt={selectedUser.fullName}
              className="object-cover"
            />
          </div>
        </div>

        <div className="min-w-0">
          <h3 className="text-slate-200 font-medium text-sm sm:text-base truncate">
            {selectedUser.fullName}
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm">
            {isOnline ? "Online" : "Offline"}
          </p>
        </div>
      </div>

      {/* Close Button */}
      <button
        onClick={() => setSelectedUser(null)}
        className="p-2 rounded-md hover:bg-slate-700/50 transition-colors"
      >
        <XIcon className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 hover:text-slate-200" />
      </button>
    </div>
  );
}

export default ChatHeader;