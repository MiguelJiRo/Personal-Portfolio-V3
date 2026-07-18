import { SECTION_BY_ID } from '../data/sections';

const SectionHeader = ({ sectionId }) => {
  const section = SECTION_BY_ID[sectionId];
  if (!section) return null;

  return (
    <div className="mb-14">
      <p className="font-mono text-ambar text-[11px] tracking-label uppercase mb-3">
        {section.code} · {section.codeName}
      </p>
      <h2 className="font-display text-3xl md:text-4xl text-hielo uppercase tracking-wide text-balance">
        {section.label}
      </h2>
      <div className="mt-6 flex items-end gap-3" aria-hidden="true">
        <div className="rule-ticks flex-1" />
        <div className="flex gap-1 pb-0.5">
          {Array.from({ length: 5 }, (_, i) => (
            <span key={i} className="h-1 w-1 bg-fosforo/40" />
          ))}
        </div>
        <div className="rule-ticks w-16 sm:w-28" />
      </div>
    </div>
  );
};

export default SectionHeader;
