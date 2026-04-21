const SectionHeader = ({ number, slug, title, align = 'left' }) => {
  const alignmentClasses = align === 'center' ? 'text-center' : 'text-left';

  return (
    <div className={`mb-12 ${alignmentClasses}`}>
      <p className="font-mono text-amber-400 text-sm mb-3 tracking-wider">
        // {number}. {slug}
      </p>
      <h2 className="text-4xl md:text-5xl font-bold text-white">{title}</h2>
    </div>
  );
};

export default SectionHeader;
