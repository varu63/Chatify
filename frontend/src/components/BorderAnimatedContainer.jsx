function BorderAnimatedContainer({ children, className = "" }) {
  return (
    <div
      className={`
        relative w-full h-full
        rounded-xl sm:rounded-2xl
        border border-transparent
        overflow-hidden
        flex
        ${className}
      `}
      style={{
        background: `
          linear-gradient(45deg,#172033, #1e293b 50%, #172033) padding-box,
          conic-gradient(
            from var(--border-angle),
            rgba(71,85,105,0.48) 80%,
            #06b6d4 86%,
            #22d3ee 90%,
            #06b6d4 94%,
            rgba(71,85,105,0.48)
          ) border-box
        `,
      }}
    >
      {children}
    </div>
  );
}

export default BorderAnimatedContainer;