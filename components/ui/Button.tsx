import React from "react";

interface ShinyButtonProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  className?: string;
  [key: string]: any;
}

export const ShinyButton: React.FC<ShinyButtonProps> = ({
  children,
  onClick,
  disabled = false,
  type = "button",
  className = "",
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`shiny-cta ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

interface ShinyLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}

export const ShinyLink: React.FC<ShinyLinkProps> = ({
  href,
  children,
  className = "",
  ...props
}) => {
  return (
    <a href={href} className={`shiny-cta ${className}`} {...props}>
      {children}
    </a>
  );
};

interface GradientLoaderLinkProps {
  href: string;
  text: string;
  className?: string;
  [key: string]: any;
}

export const GradientLoaderLink: React.FC<GradientLoaderLinkProps> = ({
  href,
  text,
  className = "",
  ...props
}) => {
  return (
    <a
      href={href}
      className={`inline-flex transition overflow-hidden group text-sm font-medium text-white rounded-full relative gap-x-2 items-center border border-fuchsia-400/10 h-12 pl-4 pr-5 ${className}`}
      style={{
        background:
          "linear-gradient(135deg, rgb(24, 24, 27) 100%, rgb(9, 9, 11) 100%)",
        boxShadow:
          "rgba(0, 0, 0, 0.45) 0 10px 35px, rgba(255, 255, 255, 0.08) 0 1px 0 inset, rgba(0, 0, 0, 0.6) 0 -1px 0 inset",
        transition: "0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        transform: "translateY(0)",
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.boxShadow =
          "0 10px 35px rgba(15, 23, 42, 0.8), 0 0 15px rgba(249, 69, 99, 0.35)";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow =
          "0 10px 35px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.08), inset 0 -1px 0 rgba(0,0,0,0.6)";
      }}
      {...props}
    >
      <div
        className="loader"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          zIndex: 1,
          backgroundColor: "transparent",
          mask: "repeating-linear-gradient(90deg, transparent 0, transparent 6px, black 7px, black 8px)",
          WebkitMask:
            "repeating-linear-gradient(90deg, transparent 0, transparent 6px, black 7px, black 8px)",
          opacity: 0.55,
        }}
      >
        <div
          style={{
            content: "",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage:
              "radial-gradient(circle at 50% 50%, #38bdf8 0%, transparent 50%), radial-gradient(circle at 45% 45%, #6366f1 0%, transparent 45%), radial-gradient(circle at 55% 55%, #a855f7 0%, transparent 45%), radial-gradient(circle at 45% 55%, #22d3ee 0%, transparent 45%), radial-gradient(circle at 55% 45%, #0ea5e9 0%, transparent 45%)",
            mask: "radial-gradient(circle at 50% 50%, transparent 0%, transparent 10%, black 25%)",
            WebkitMask:
              "radial-gradient(circle at 50% 50%, transparent 0%, transparent 10%, black 25%)",
            animation:
              "transform-animation 2s infinite alternate, opacity-animation 4s infinite",
            animationTimingFunction: "cubic-bezier(0.6, 0.8, 0.5, 1)",
            filter: "drop-shadow(0 0 8px rgba(56, 189, 248, 0.7))",
          }}
        ></div>
      </div>
      <span
        style={{
          position: "relative",
          zIndex: 2,
          fontFamily: "'Inter', sans-serif",
          fontWeight: 500,
          userSelect: "none",
          display: "inline-flex",
          alignItems: "center",
          gap: "0.35rem",
        }}
      >
        {text.split("").map((letter, i) => (
          <span
            key={i}
            className="loader-letter"
            style={{
              display: "inline-block",
              opacity: 0,
              animation: "loader-letter-anim 4s infinite linear",
              animationDelay: `${0.1 + i * 0.11}s`,
            }}
          >
            {letter === " " ? (
              <span style={{ display: "inline-block", width: "0.3rem" }}></span>
            ) : (
              letter
            )}
          </span>
        ))}
      </span>
    </a>
  );
};
