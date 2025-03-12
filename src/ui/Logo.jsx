function Logo() {
  return (
    <div className="mb-12 flex w-auto flex-col justify-center gap-2 text-center">
      <img src="logo.png" alt={'logo'} className="h-17 self-center" />
      <span className="font-bold text-slate-700 uppercase">
        <em>e-tech zone</em>
      </span>
    </div>
  );
}

export default Logo;
