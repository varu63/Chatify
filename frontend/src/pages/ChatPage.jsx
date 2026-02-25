import { useChatStore } from "../store/useChatStore";

import BorderAnimatedContainer from "../components/BorderAnimatedContainer";
import ProfileHeader from "../components/ProfileHeader";
import ActiveTabSwitch from "../components/ActiveTabSwitch";
import ChatsList from "../components/ChatsList";
import ContactList from "../components/ContactList";
import ChatContainer from "../components/ChatContainer";
import NoConversationPlaceholder from "../components/NoConversationPlaceholder";

function ChatPage() {
  const { activeTab, selectedUser } = useChatStore();

  return (
    <div className="min-h-screen w-full px-2 sm:px-4 md:px-6 py-4">
      <div className="max-w-7xl mx-auto h-[calc(100vh-2rem)]">
        <BorderAnimatedContainer className="h-full flex flex-col md:flex-row">

          {/* LEFT SIDEBAR */}
          <div
            className={`
              bg-slate-800/50 backdrop-blur-sm flex flex-col
              w-full md:w-80 lg:w-96
              ${selectedUser ? "hidden md:flex" : "flex"}
            `}
          >
            <ProfileHeader />
            <ActiveTabSwitch />

            <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-2">
              {activeTab === "chats" ? <ChatsList /> : <ContactList />}
            </div>
          </div>

          {/* RIGHT CHAT AREA */}
          <div
            className={`
              flex-1 flex flex-col bg-slate-900/50 backdrop-blur-sm
              ${!selectedUser ? "hidden md:flex" : "flex"}
            `}
          >
            {selectedUser ? (
              <ChatContainer />
            ) : (
              <NoConversationPlaceholder />
            )}
          </div>

        </BorderAnimatedContainer>
      </div>
    </div>
  );
}

export default ChatPage;