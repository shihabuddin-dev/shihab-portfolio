const WebsiteBg = () => {
    return (
        <div className="pointer-events-none fixed inset-0 -z-10 opacity-90">
            <div className="absolute -top-40 -left-32 h-80 w-80 rounded-full bg-indigo-500/30 blur-3xl animate-pulse-glow"></div>
            <div className="absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-fuchsia-500/30 blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-sky-500/20 blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(15,23,42,0.2),_transparent_70%)]"></div>
        </div>
    );
};

export default WebsiteBg;