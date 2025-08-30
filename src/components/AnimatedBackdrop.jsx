const AnimatedBackdrop = () => (
  <div className="absolute inset-0 overflow-hidden -z-10">
    <div className="absolute -top-24 -left-24 w-[40rem] h-[40rem] rounded-full bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 blur-3xl opacity-40 animate-pulse" />
    <div className="absolute -bottom-24 -right-24 w-[40rem] h-[40rem] rounded-full bg-gradient-to-br from-blue-500 via-sky-500 to-indigo-600 blur-3xl opacity-40 animate-[pulse_6s_ease-in-out_infinite]" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55rem] h-[55rem] rounded-full bg-gradient-to-tr from-purple-600 via-indigo-500 to-blue-500 blur-[120px] opacity-30 animate-[spin_30s_linear_infinite]" />
  </div>
);

export default AnimatedBackdrop;