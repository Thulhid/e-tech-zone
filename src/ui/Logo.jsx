function Logo({
  containerStyle,
  logoSize = 'h-17 self-center',
  textStyle = 'text-slate-600 dark:text-slate-300',
}) {
  return (
    <div className={containerStyle}>
      <img src="logo.png" alt={'logo'} className={logoSize} />
      <span className="font-bold text-slate-700 uppercase">
        <em className={textStyle}>e-tech zone</em>
      </span>
    </div>
  );
}

export default Logo;
