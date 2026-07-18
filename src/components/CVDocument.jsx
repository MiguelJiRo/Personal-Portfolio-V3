import { Document, Font, Link, Page, StyleSheet, Text, View } from '@react-pdf/renderer';
import { PROFILE } from '../data/profile';
import {
  CV_COMPLEMENTARY,
  CV_EDUCATION,
  CV_EXPERIENCE,
  CV_HEADLINE,
  CV_LANGUAGES,
  CV_METHODOLOGIES,
  CV_PDF_KEYWORDS,
  CV_SECTION_TITLES,
  CV_SOFT_SKILLS,
  CV_SUMMARY,
} from '../data/cv';
import { SKILL_CATEGORIES } from '../data/skills';

// Los ATS extraen el texto del PDF: la hifenación automática partiría palabras
// con guiones blandos ("Type-Script") y rompería la búsqueda por keywords.
Font.registerHyphenationCallback((word) => [word]);

const ACCENT = '#0e7a4e';
const INK = '#111827';
const BODY = '#374151';

const styles = StyleSheet.create({
  page: {
    paddingTop: 32,
    paddingBottom: 32,
    paddingHorizontal: 36,
    backgroundColor: '#ffffff',
    fontFamily: 'Helvetica',
    fontSize: 10,
    color: BODY,
    lineHeight: 1.4,
  },
  header: {
    marginBottom: 10,
    borderBottom: `2 solid ${ACCENT}`,
    paddingBottom: 8,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: INK,
    lineHeight: 1.2,
    marginBottom: 6,
  },
  title: {
    fontSize: 12,
    color: ACCENT,
    marginBottom: 8,
  },
  contactRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 3,
  },
  contactItem: {
    fontSize: 9,
    color: '#4b5563',
  },
  contactLabel: {
    fontWeight: 'bold',
    color: ACCENT,
  },
  link: {
    color: ACCENT,
    textDecoration: 'none',
  },
  section: {
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    color: INK,
    marginBottom: 5,
    borderBottom: `1 solid ${ACCENT}`,
    paddingBottom: 2,
  },
  paragraph: {
    fontSize: 10,
    color: BODY,
    lineHeight: 1.5,
  },
  item: {
    marginBottom: 8,
  },
  roleTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    color: INK,
  },
  roleMeta: {
    fontSize: 9.5,
    color: ACCENT,
    marginBottom: 4,
  },
  description: {
    fontSize: 10,
    color: BODY,
    lineHeight: 1.5,
  },
  bullets: {
    fontSize: 10,
    color: BODY,
    lineHeight: 1.5,
    marginTop: 3,
  },
  skillLine: {
    fontSize: 10,
    color: BODY,
    lineHeight: 1.5,
    marginBottom: 2,
  },
  skillCategory: {
    fontWeight: 'bold',
    color: INK,
  },
});

const renderBullets = (bullets) =>
  bullets.map((line, i) => (i === bullets.length - 1 ? `• ${line}` : `• ${line}\n`)).join('');

const TimelineEntry = ({ role, meta, description, bullets }) => (
  <View style={styles.item} wrap={false}>
    <Text style={styles.roleTitle}>{role}</Text>
    <Text style={styles.roleMeta}>{meta}</Text>
    {description && <Text style={styles.description}>{description}</Text>}
    {bullets && <Text style={styles.bullets}>{renderBullets(bullets)}</Text>}
  </View>
);

const SectionTitle = ({ children }) => (
  <Text style={styles.sectionTitle}>{children.toUpperCase()}</Text>
);

// Agrupa el título con la primera entrada (wrap={false}) para que ningún
// encabezado de sección quede huérfano al final de una página.
const EntrySection = ({ title, entries }) => (
  <View style={styles.section}>
    {entries.map((entry, index) => {
      const item = (
        <TimelineEntry
          key={entry.key}
          role={entry.role}
          meta={entry.meta}
          description={entry.description}
          bullets={entry.bullets}
        />
      );
      if (index > 0) return item;
      return (
        <View key={entry.key} wrap={false}>
          <SectionTitle>{title}</SectionTitle>
          {item}
        </View>
      );
    })}
  </View>
);

const CVDocument = () => (
  <Document
    title={`CV ${PROFILE.name} - ${PROFILE.role}`}
    author={PROFILE.name}
    subject={`Curriculum Vitae - ${PROFILE.role}`}
    keywords={CV_PDF_KEYWORDS}
    language="es"
  >
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.name}>{PROFILE.name}</Text>
        <Text style={styles.title}>{CV_HEADLINE}</Text>
        <View style={styles.contactRow}>
          <Text style={styles.contactItem}>
            <Text style={styles.contactLabel}>Email: </Text>
            <Link src={`mailto:${PROFILE.email}`} style={styles.link}>
              {PROFILE.email}
            </Link>
          </Text>
          <Text style={styles.contactItem}>
            <Text style={styles.contactLabel}>Ubicación: </Text>
            {PROFILE.location}
          </Text>
        </View>
        <View style={styles.contactRow}>
          <Text style={styles.contactItem}>
            <Text style={styles.contactLabel}>GitHub: </Text>
            <Link src={PROFILE.github.url} style={styles.link}>
              {PROFILE.github.display}
            </Link>
          </Text>
          <Text style={styles.contactItem}>
            <Text style={styles.contactLabel}>LinkedIn: </Text>
            <Link src={PROFILE.linkedin.url} style={styles.link}>
              {PROFILE.linkedin.display}
            </Link>
          </Text>
        </View>
      </View>

      <View style={styles.section} wrap={false}>
        <SectionTitle>{CV_SECTION_TITLES.summary}</SectionTitle>
        <Text style={styles.paragraph}>{CV_SUMMARY}</Text>
      </View>

      <EntrySection
        title={CV_SECTION_TITLES.experience}
        entries={CV_EXPERIENCE.map((entry) => ({
          key: `${entry.company}-${entry.period}`,
          role: entry.role,
          meta: `${entry.company}  |  ${entry.location}  |  ${entry.period}`,
          description: entry.description,
          bullets: entry.bullets,
        }))}
      />

      <View style={styles.section} wrap={false}>
        <SectionTitle>{CV_SECTION_TITLES.skills}</SectionTitle>
        {SKILL_CATEGORIES.map((category) => (
          <Text key={category.id} style={styles.skillLine}>
            <Text style={styles.skillCategory}>{category.cvLabel}: </Text>
            {category.skills.join(', ')}
          </Text>
        ))}
        <Text style={styles.skillLine}>
          <Text style={styles.skillCategory}>Metodologías: </Text>
          {CV_METHODOLOGIES.join(', ')}
        </Text>
      </View>

      <EntrySection
        title={CV_SECTION_TITLES.education}
        entries={CV_EDUCATION.map((entry) => ({
          key: `${entry.institution}-${entry.period}`,
          role: entry.role,
          meta: `${entry.institution}  |  ${entry.period}`,
          description: entry.description,
        }))}
      />

      <EntrySection
        title={CV_SECTION_TITLES.certifications}
        entries={CV_COMPLEMENTARY.map((entry) => ({
          key: `${entry.institution}-${entry.period}`,
          role: entry.role,
          meta: `${entry.institution}  |  ${entry.period}`,
          description: entry.description,
        }))}
      />

      <View style={styles.section} wrap={false}>
        <SectionTitle>{CV_SECTION_TITLES.languages}</SectionTitle>
        {CV_LANGUAGES.map(({ language, level }) => (
          <Text key={language} style={styles.skillLine}>
            {language} - {level}
          </Text>
        ))}
      </View>

      <View style={styles.section} wrap={false}>
        <SectionTitle>{CV_SECTION_TITLES.softSkills}</SectionTitle>
        <Text style={styles.description}>{CV_SOFT_SKILLS}</Text>
      </View>
    </Page>
  </Document>
);

export default CVDocument;
