import { useEffect, useRef } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from "../store/useChatStore";
import ChatHeader from "./ChatHeader";
import NoChatHistoryPlaceholder from "./NoChatHistoryPlaceholder";
import MessageInput from "./MessageInput";
import MessagesLoadingSkeleton from "./MessagesLoadingSkeleton";

function ChatContainer() {
  const {
    selectedUser,
    getMessagesByUserId,
    messages,
    isMessagesLoading,
    subscribeToMessages,
    unsubscribeFromMessages,
  } = useChatStore();

  const { authUser } = useAuthStore();
  const messageEndRef = useRef(null);

  // Fetch messages when user changes
  useEffect(() => {
    if (!selectedUser?._id) return;

    getMessagesByUserId(selectedUser._id);
    subscribeToMessages();

    return () => unsubscribeFromMessages();
  }, [selectedUser?._id]);

  // Auto scroll
  useEffect(() => {
    if (!isMessagesLoading && messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isMessagesLoading]);

  if (!selectedUser) return null;

  return (
    <div className="flex flex-col h-full">

      <ChatHeader />

      {/* Messages Area */}
      <div className="
        flex-1
        overflow-y-auto
        px-3 py-4
        sm:px-4 sm:py-6
        lg:px-6 lg:py-8
      ">
        {isMessagesLoading ? (
          <MessagesLoadingSkeleton />
        ) : messages.length > 0 ? (
          <div className="
            w-full
            max-w-3xl
            xl:max-w-4xl
            mx-auto
            space-y-4 sm:space-y-5 lg:space-y-6
          ">
            {messages.map((msg) => {
              const isOwnMessage = msg.senderId === authUser._id;

              return (
                <div
                  key={msg._id}
                  className={`chat ${isOwnMessage ? "chat-end" : "chat-start"}`}
                >
                  <div
                    className={`
                      chat-bubble
                      relative
                      text-sm sm:text-base
                      ${
                        isOwnMessage
                          ? "bg-cyan-600 text-white"
                          : "bg-slate-800 text-slate-200"
                      }
                    `}
                  >
                    {msg.image && (
                      <img
                        src={msg.image}
                        alt="Shared"
                        className="
                          rounded-lg
                          max-h-40 sm:max-h-56 lg:max-h-72
                          object-cover
                          w-auto
                        "
                      />
                    )}

                    {msg.text && (
                      <p className={msg.image ? "mt-2" : ""}>
                        {msg.text}
                      </p>
                    )}

                    <p className="text-xs mt-1 opacity-70 text-right">
                      {new Date(msg.createdAt).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </div>
              );
            })}

            <div ref={messageEndRef} />
          </div>
        ) : (
          <NoChatHistoryPlaceholder name={selectedUser.fullName} />
        )}
      </div>

      <MessageInput />

    </div>
  );
}

export default ChatContainer;