import { useEffect } from "react";
import { useChatStore } from "../store/useChatStore";
import UsersLoadingSkeleton from "./UsersLoadingSkeleton";
import NoChatsFound from "./NoChatsFound";
import { useAuthStore } from "../store/useAuthStore";

function ChatsList() {
  const { getMyChatPartners, chats, isUsersLoading, setSelectedUser } = useChatStore();
  const { onlineUsers } = useAuthStore();

  useEffect(() => {
    getMyChatPartners();
  }, [getMyChatPartners]);

  if (isUsersLoading) return <UsersLoadingSkeleton />;
  if (chats.length === 0) return <NoChatsFound />;

  return (
    <div className="flex flex-col space-y-2 px-2 sm:px-3 md:px-4 py-2 overflow-y-auto">
      {chats.map((chat) => {
        const isOnline = onlineUsers.includes(chat._id);

        return (
          <div
            key={chat._id}
            onClick={() => setSelectedUser(chat)}
            className="
              flex items-center gap-2 sm:gap-3
              bg-cyan-500/10
              px-3 sm:px-4
              py-3
              rounded-lg
              cursor-pointer
              hover:bg-cyan-500/20
              active:scale-[0.98]
              transition-all
            "
          >
            {/* Avatar */}
            <div className={`avatar ${isOnline ? "online" : "offline"}`}>
              <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full">
                <img
                  src={chat.profilePic || "/avatar.png"}
                  alt={chat.fullName}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* User Info */}
            <div className="min-w-0 flex-1">
              <h4 className="text-slate-200 font-medium text-sm sm:text-base truncate">
                {chat.fullName}
              </h4>
              <p className="text-xs sm:text-sm text-slate-400">
                {isOnline ? "Online" : "Offline"}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ChatsList;