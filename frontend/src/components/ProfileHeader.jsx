import { useState, useRef } from "react";
import { LogOutIcon, VolumeOffIcon, Volume2Icon } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from "../store/useChatStore";

const mouseClickSound = new Audio("/sounds/mouse-click.mp3");

function ProfileHeader() {
  const { logout, authUser, updateProfile } = useAuthStore();
  const { isSoundEnabled, toggleSound } = useChatStore();
  const [selectedImg, setSelectedImg] = useState(null);

  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = async () => {
      const base64Image = reader.result;
      setSelectedImg(base64Image);
      await updateProfile({ profilePic: base64Image });
    };
  };

  return (
    <div className="px-3 sm:px-4 md:px-6 py-4 border-b border-slate-700/50">
      <div className="flex items-center justify-between">
        
        {/* LEFT SECTION */}
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          
          {/* Avatar */}
          <div className="avatar online">
            <button
              onClick={() => fileInputRef.current?.click()}
              className="
                relative group overflow-hidden rounded-full
                w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14
              "
            >
              <img
                src={selectedImg || authUser.profilePic || "/avatar.png"}
                alt="User image"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                <span className="text-white text-[10px] sm:text-xs">
                  Change
                </span>
              </div>
            </button>

            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleImageUpload}
              className="hidden"
            />
          </div>

          {/* User Info */}
          <div className="min-w-0">
            <h3 className="text-slate-200 font-medium text-sm sm:text-base truncate">
              {authUser.fullName}
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm">Online</p>
          </div>
        </div>

        {/* RIGHT BUTTONS */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Logout */}
          <button
            onClick={logout}
            className="
              flex items-center justify-center
              w-9 h-9 sm:w-10 sm:h-10
              rounded-lg
              text-slate-400
              hover:text-slate-200
              hover:bg-slate-700/40
              transition-all
            "
          >
            <LogOutIcon className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Sound Toggle */}
          <button
            onClick={() => {
              mouseClickSound.currentTime = 0;
              mouseClickSound.play().catch(() => {});
              toggleSound();
            }}
            className="
              flex items-center justify-center
              w-9 h-9 sm:w-10 sm:h-10
              rounded-lg
              text-slate-400
              hover:text-slate-200
              hover:bg-slate-700/40
              transition-all
            "
          >
            {isSoundEnabled ? (
              <Volume2Icon className="w-4 h-4 sm:w-5 sm:h-5" />
            ) : (
              <VolumeOffIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;