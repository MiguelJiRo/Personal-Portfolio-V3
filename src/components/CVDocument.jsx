import { Document, Page, Text, View, StyleSheet, Link } from '@react-pdf/renderer';

// Estilos para el PDF - Optimizado para una página
const styles = StyleSheet.create({
  page: {
    padding: 25,
    backgroundColor: '#ffffff',
    fontFamily: 'Helvetica',
  },
  header: {
    marginBottom: 8,
    borderBottom: '2 solid #3b82f6',
    paddingBottom: 6,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 3,
  },
  title: {
    fontSize: 13,
    color: '#3b82f6',
    marginBottom: 6,
  },
  contactInfo: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginTop: 5,
  },
  contactItem: {
    fontSize: 8,
    color: '#4b5563',
  },
  contactLabel: {
    fontSize: 8,
    fontWeight: 'bold',
    color: '#3b82f6',
  },
  section: {
    marginTop: 8,
    marginBottom: 5,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 4,
    borderBottom: '1 solid #e5e7eb',
    paddingBottom: 2,
  },
  sectionContent: {
    fontSize: 9,
    color: '#374151',
    lineHeight: 1.3,
  },
  experienceItem: {
    marginBottom: 5,
  },
  jobTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 2,
  },
  company: {
    fontSize: 9,
    color: '#3b82f6',
    marginBottom: 2,
  },
  date: {
    fontSize: 8,
    color: '#6b7280',
    marginBottom: 3,
  },
  description: {
    fontSize: 8,
    color: '#4b5563',
    lineHeight: 1.3,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
    marginTop: 2,
  },
  skillCategory: {
    marginBottom: 4,
  },
  categoryTitle: {
    fontSize: 9,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 2,
  },
  skillBadge: {
    backgroundColor: '#dbeafe',
    color: '#1e40af',
    padding: '2 5',
    borderRadius: 3,
    fontSize: 7,
  },
  softSkillItem: {
    flexDirection: 'row',
    marginBottom: 2,
  },
  bullet: {
    width: 10,
    fontSize: 8,
    color: '#3b82f6',
  },
  softSkillText: {
    fontSize: 8,
    color: '#4b5563',
    flex: 1,
  },
  link: {
    color: '#3b82f6',
    textDecoration: 'none',
  },
  twoColumns: {
    flexDirection: 'row',
    gap: 15,
  },
  leftColumn: {
    flex: 1,
  },
  rightColumn: {
    flex: 1,
  },
});

const CVDocument = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>Miguel Jiménez Rodríguez</Text>
          <Text style={styles.title}>Frontend Developer</Text>
          <View style={styles.contactInfo}>
            <Text style={styles.contactItem}>
              <Text style={styles.contactLabel}>Email: </Text>
              migueljiroz@gmail.com
            </Text>
            <Text style={styles.contactItem}>
              <Text style={styles.contactLabel}>Ubicación: </Text>
              Aranjuez, España
            </Text>
            <Text style={styles.contactItem}>
              <Text style={styles.contactLabel}>GitHub: </Text>
              <Link src="https://github.com/migueljiro" style={styles.link}>
                github.com/migueljiro
              </Link>
            </Text>
            <Text style={styles.contactItem}>
              <Text style={styles.contactLabel}>LinkedIn: </Text>
              <Link src="https://linkedin.com/in/migueljiroz" style={styles.link}>
                linkedin.com/in/migueljiroz
              </Link>
            </Text>
          </View>
        </View>

        {/* Perfil Profesional */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Perfil Profesional</Text>
          <Text style={styles.sectionContent}>
            Desarrollador Frontend/Fullstack con experiencia en sistemas estratégicos de mando y control. Especializado en Angular, React y TypeScript. Experiencia en metodologías ágiles, TDD y visión full stack con Java Spring.
          </Text>
        </View>

        {/* Layout de dos columnas */}
        <View style={styles.twoColumns}>
          {/* Columna Izquierda */}
          <View style={styles.leftColumn}>
            {/* Experiencia */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Experiencia Profesional</Text>

              <View style={styles.experienceItem}>
                <Text style={styles.jobTitle}>Frontend/Fullstack Developer</Text>
                <Text style={styles.company}>Indra</Text>
                <Text style={styles.date}>Enero 2022 - Presente</Text>
                <Text style={styles.description}>
                  • Sistema de Mando y Control Estratégico Europeo para el Servicio Europeo de Acción Exterior (SEAE), coordinando misiones multinacionales de la UE{'\n'}
                  • Frontend: Angular, TypeScript, HTML5, CSS3, SASS{'\n'}
                  • Backend: Java Spring, Docker{'\n'}
                  • Metodologías ágiles (Scrum), TDD con Jest y Angular Testing Library{'\n'}
                  • Colaboración internacional con equipos de otros países
                </Text>
              </View>

              <View style={styles.experienceItem}>
                <Text style={styles.jobTitle}>Backend Developer</Text>
                <Text style={styles.company}>Indra</Text>
                <Text style={styles.date}>Febrero 2021 - Enero 2022</Text>
                <Text style={styles.description}>
                  • Sistema de planificación de misiones para helicópteros del Ejército de Tierra{'\n'}
                  • Backend: Java, Spring Boot, PostgreSQL/Oracle{'\n'}
                  • Testing: JUnit, Mockito. Build: Maven{'\n'}
                  • Metodología ágil, Jira, Git
                </Text>
              </View>
            </View>

            {/* Educación */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Educación</Text>
              <View style={styles.experienceItem}>
                <Text style={styles.jobTitle}>Master Front-End Lemoncode XIII</Text>
                <Text style={styles.company}>Lemoncode</Text>
                <Text style={styles.date}>Abril 2022 - Noviembre 2023</Text>
                <Text style={styles.description}>
                  React, Angular, Vue, Next.js • Testing: Jest, Cypress, Playwright • TypeScript, JavaScript • Webpack, Vite • HTML5, CSS3, SASS, Tailwind • Docker, AWS, Azure • PWA, React Native • GraphQL, Micro Frontends
                </Text>
              </View>
              <View style={styles.experienceItem}>
                <Text style={styles.jobTitle}>Graduado en Ingeniería Informática</Text>
                <Text style={styles.company}>Universidad Complutense de Madrid</Text>
                <Text style={styles.date}>2014 - 2020</Text>
                <Text style={styles.description}>
                  Programación: Java, C, C++, Python • Estructuras de datos y algoritmos • Bases de datos SQL • Ingeniería del software y patrones de diseño • Sistemas operativos, redes y arquitectura • Desarrollo web
                </Text>
              </View>
            </View>

            {/* Formación Complementaria */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Formación Complementaria</Text>

              <View style={styles.experienceItem}>
                <Text style={styles.jobTitle}>Linux LPIC-1: Linux Administrator (40h)</Text>
                <Text style={styles.company}>CAS training</Text>
                <Text style={styles.date}>Octubre 2025</Text>
                <Text style={styles.description}>
                  Administración de sistemas, shell scripting, gestión de red y seguridad
                </Text>
              </View>

              <View style={styles.experienceItem}>
                <Text style={styles.jobTitle}>Spring Boot (24h)</Text>
                <Text style={styles.company}>PUE</Text>
                <Text style={styles.date}>Junio 2023</Text>
                <Text style={styles.description}>
                  Desarrollo de aplicaciones, acceso a datos, seguridad y despliegue
                </Text>
              </View>
            </View>
          </View>

          {/* Columna Derecha */}
          <View style={styles.rightColumn}>
            {/* Habilidades Técnicas */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Habilidades Técnicas</Text>

              <View style={styles.skillCategory}>
                <Text style={styles.categoryTitle}>Frontend</Text>
                <View style={styles.skillsContainer}>
                  {['Angular', 'React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'SASS', 'Tailwind', 'Vue', 'Next.js'].map((skill, index) => (
                    <View key={index} style={styles.skillBadge}>
                      <Text>{skill}</Text>
                    </View>
                  ))}
                </View>
              </View>

              <View style={styles.skillCategory}>
                <Text style={styles.categoryTitle}>Backend & DB</Text>
                <View style={styles.skillsContainer}>
                  {['Java', 'Spring', 'Node.js', 'Express', 'MongoDB', 'Firebase'].map((skill, index) => (
                    <View key={index} style={styles.skillBadge}>
                      <Text>{skill}</Text>
                    </View>
                  ))}
                </View>
              </View>

              <View style={styles.skillCategory}>
                <Text style={styles.categoryTitle}>Tools</Text>
                <View style={styles.skillsContainer}>
                  {['Git', 'Docker', 'Jest', 'Webpack', 'Vite', 'Jira', 'VSCode', 'IntelliJ'].map((skill, index) => (
                    <View key={index} style={styles.skillBadge}>
                      <Text>{skill}</Text>
                    </View>
                  ))}
                </View>
              </View>
            </View>

            {/* Habilidades Blandas */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Habilidades Blandas</Text>
              <View style={styles.softSkillItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.softSkillText}>Trabajo en equipo multidisciplinario</Text>
              </View>
              <View style={styles.softSkillItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.softSkillText}>Proactividad y resolución de problemas</Text>
              </View>
              <View style={styles.softSkillItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.softSkillText}>Adaptabilidad a nuevas tecnologías</Text>
              </View>
              <View style={styles.softSkillItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.softSkillText}>Resiliencia y gestión bajo presión</Text>
              </View>
              <View style={styles.softSkillItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.softSkillText}>Comunicación clara y efectiva</Text>
              </View>
              <View style={styles.softSkillItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.softSkillText}>Aprendizaje continuo</Text>
              </View>
            </View>

            {/* Idiomas */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Idiomas</Text>
              <View style={styles.softSkillItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.softSkillText}>Español - Nativo</Text>
              </View>
              <View style={styles.softSkillItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.softSkillText}>Inglés - Profesional</Text>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default CVDocument;
