import { Document, Link, Page, StyleSheet, Text, View } from '@react-pdf/renderer';
import { PROFILE } from '../data/profile';
import {
  CV_COMPLEMENTARY,
  CV_EDUCATION,
  CV_EXPERIENCE,
  CV_LANGUAGES,
  CV_METHODOLOGIES,
  CV_SOFT_SKILLS,
  CV_SUMMARY,
} from '../data/cv';
import { SKILL_CATEGORIES } from '../data/skills';

const styles = StyleSheet.create({
  page: {
    paddingTop: 32,
    paddingBottom: 32,
    paddingHorizontal: 36,
    backgroundColor: '#ffffff',
    fontFamily: 'Helvetica',
    fontSize: 10,
    color: '#374151',
    lineHeight: 1.4,
  },
  header: {
    marginBottom: 10,
    borderBottom: '2 solid #3b82f6',
    paddingBottom: 8,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1f2937',
    lineHeight: 1.2,
    marginBottom: 6,
  },
  title: {
    fontSize: 12,
    color: '#3b82f6',
    marginBottom: 8,
  },
  contactRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  contactItem: {
    fontSize: 9,
    color: '#4b5563',
  },
  contactLabel: {
    fontWeight: 'bold',
    color: '#3b82f6',
  },
  link: {
    color: '#3b82f6',
    textDecoration: 'none',
  },
  section: {
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 5,
    borderBottom: '1 solid #3b82f6',
    paddingBottom: 2,
    letterSpacing: 0.5,
  },
  paragraph: {
    fontSize: 10,
    color: '#374151',
    lineHeight: 1.5,
  },
  item: {
    marginBottom: 8,
  },
  roleTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  roleMeta: {
    fontSize: 9.5,
    color: '#3b82f6',
    marginBottom: 4,
  },
  description: {
    fontSize: 10,
    color: '#374151',
    lineHeight: 1.5,
  },
  bullets: {
    fontSize: 10,
    color: '#374151',
    lineHeight: 1.5,
    marginTop: 3,
  },
  skillLine: {
    fontSize: 10,
    color: '#374151',
    lineHeight: 1.5,
    marginBottom: 2,
  },
  skillCategory: {
    fontWeight: 'bold',
    color: '#1f2937',
  },
});

const renderBullets = (bullets) =>
  bullets.map((line, i) => (i === bullets.length - 1 ? `• ${line}` : `• ${line}\n`)).join('');

const TimelineEntry = ({ role, meta, description, bullets }) => (
  <View style={styles.item}>
    <Text style={styles.roleTitle}>{role}</Text>
    <Text style={styles.roleMeta}>{meta}</Text>
    {description && <Text style={styles.description}>{description}</Text>}
    {bullets && <Text style={styles.bullets}>{renderBullets(bullets)}</Text>}
  </View>
);

const CVDocument = () => (
  <Document
    title={`CV ${PROFILE.name} - ${PROFILE.role}`}
    author={PROFILE.name}
    subject={`Curriculum Vitae - ${PROFILE.role}`}
    keywords="Frontend Developer, Angular, React, TypeScript, JavaScript, Java, Spring Boot, Fullstack, TDD, Scrum"
  >
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.name}>{PROFILE.name}</Text>
        <Text style={styles.title}>{PROFILE.role}</Text>
        <View style={styles.contactRow}>
          <Text style={styles.contactItem}>
            <Text style={styles.contactLabel}>Email: </Text>
            {PROFILE.email}
          </Text>
          <Text style={styles.contactItem}>
            <Text style={styles.contactLabel}>Ubicación: </Text>
            {PROFILE.location}
          </Text>
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

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>RESUMEN PROFESIONAL</Text>
        <Text style={styles.paragraph}>{CV_SUMMARY}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>EXPERIENCIA PROFESIONAL</Text>
        {CV_EXPERIENCE.map((entry) => (
          <TimelineEntry
            key={`${entry.company}-${entry.period}`}
            role={entry.role}
            meta={`${entry.company}  |  ${entry.location}  |  ${entry.period}`}
            description={entry.description}
            bullets={entry.bullets}
          />
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>HABILIDADES TÉCNICAS</Text>
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

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>FORMACIÓN ACADÉMICA</Text>
        {CV_EDUCATION.map((entry) => (
          <TimelineEntry
            key={`${entry.institution}-${entry.period}`}
            role={entry.role}
            meta={`${entry.institution}  |  ${entry.period}`}
            description={entry.description}
          />
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>FORMACIÓN COMPLEMENTARIA</Text>
        {CV_COMPLEMENTARY.map((entry) => (
          <TimelineEntry
            key={`${entry.institution}-${entry.period}`}
            role={entry.role}
            meta={`${entry.institution}  |  ${entry.period}`}
            description={entry.description}
          />
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>IDIOMAS</Text>
        {CV_LANGUAGES.map(({ language, level }) => (
          <Text key={language} style={styles.skillLine}>
            {language} - {level}
          </Text>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>HABILIDADES PERSONALES</Text>
        <Text style={styles.description}>{CV_SOFT_SKILLS}</Text>
      </View>
    </Page>
  </Document>
);

export default CVDocument;
