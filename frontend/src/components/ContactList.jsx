import { useEffect } from "react";
import { useChatStore } from "../store/useChatStore";
import UsersLoadingSkeleton from "./UsersLoadingSkeleton";
import { useAuthStore } from "../store/useAuthStore";

function ContactList() {
  const { getAllContacts, allContacts, setSelectedUser, isUsersLoading } = useChatStore();
  const { onlineUsers } = useAuthStore();

  useEffect(() => {
    getAllContacts();
  }, [getAllContacts]);

  if (isUsersLoading) return <UsersLoadingSkeleton />;

  return (
    <div className="space-y-2">
      {allContacts.map((contact) => {
        const isOnline = onlineUsers.includes(contact._id);

        return (
          <div
            key={contact._id}
            onClick={() => setSelectedUser(contact)}
            className="
              flex items-center gap-3
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
              <div className="w-9 sm:w-10 md:w-12 rounded-full">
                <img
                  src={contact.profilePic || "/avatar.png"}
                  alt={contact.fullName}
                  className="object-cover"
                />
              </div>
            </div>

            {/* Name */}
            <div className="min-w-0 flex-1">
              <h4 className="text-slate-200 font-medium text-sm sm:text-base truncate">
                {contact.fullName}
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

export default ContactList;