import { useChatStore } from "../store/useChatStore";

function ActiveTabSwitch() {
  const { activeTab, setActiveTab } = useChatStore();

  const baseTabStyle =
    "flex-1 text-center font-medium transition-all duration-200 rounded-lg";

  const activeStyle =
    "bg-cyan-500/20 text-cyan-400 shadow-inner";

  const inactiveStyle =
    "text-slate-400 hover:text-white hover:bg-slate-700/40";

  return (
    <div className="w-full px-2 sm:px-3 md:px-4">
      <div className="flex w-full bg-slate-800/60 backdrop-blur-md rounded-xl p-1 sm:p-2">

        <button
          onClick={() => setActiveTab("chats")}
          className={`
            ${baseTabStyle}
            ${activeTab === "chats" ? activeStyle : inactiveStyle}
            py-2 text-sm
            sm:py-2.5 sm:text-base
            lg:py-3 lg:text-lg
          `}
        >
          Chats
        </button>

        <button
          onClick={() => setActiveTab("contacts")}
          className={`
            ${baseTabStyle}
            ${activeTab === "contacts" ? activeStyle : inactiveStyle}
            py-2 text-sm
            sm:py-2.5 sm:text-base
            lg:py-3 lg:text-lg
          `}
        >
          Contacts
        </button>

      </div>
    </div>
  );
}

export default ActiveTabSwitch;