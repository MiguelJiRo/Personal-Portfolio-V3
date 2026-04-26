import { SECTION_BY_ID } from '../data/sections';

const SectionHeader = ({ sectionId, align = 'left' }) => {
  const section = SECTION_BY_ID[sectionId];
  if (!section) return null;

  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <p className="font-mono text-amber-400 text-sm mb-3 tracking-wider">
        // {section.number}. {section.slug}
      </p>
      <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight text-balance">
        {section.label}
      </h2>
    </div>
  );
};

export default SectionHeader;
