import { LoaderIcon } from "lucide-react";

function PageLoader({ fullScreen = true }) {
  return (
    <div
      className={`
        flex items-center justify-center
        ${fullScreen ? "min-h-screen" : "h-full"}
        w-full
        px-4
      `}
      role="status"
      aria-live="polite"
    >
      <LoaderIcon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 animate-spin text-cyan-400" />
    </div>
  );
}

export default PageLoader;