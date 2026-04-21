import { Document, Page, Text, View, StyleSheet, Link } from '@react-pdf/renderer';

// Estilos optimizados para ATS: una sola columna, texto plano, tamaños legibles.
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

const CVDocument = () => (
  <Document
    title="CV Miguel Jiménez Rodríguez - Frontend Developer"
    author="Miguel Jiménez Rodríguez"
    subject="Curriculum Vitae - Frontend Developer"
    keywords="Frontend Developer, Angular, React, TypeScript, JavaScript, Java, Spring Boot, Fullstack, TDD, Scrum"
  >
    <Page size="A4" style={styles.page}>
      {/* Cabecera */}
      <View style={styles.header}>
        <Text style={styles.name}>Miguel Jiménez Rodríguez</Text>
        <Text style={styles.title}>Frontend Developer</Text>
        <View style={styles.contactRow}>
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

      {/* Resumen */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>RESUMEN PROFESIONAL</Text>
        <Text style={styles.paragraph}>
          Frontend Developer con más de 5 años de experiencia desarrollando sistemas críticos para el sector defensa, principalmente con Angular, React y TypeScript. Me siento cómodo bajando al backend con Java y Spring Boot cuando hace falta, y disfruto los equipos donde el código se testea, se revisa y se discute. Me interesan los proyectos con impacto real, donde entender al usuario final forma parte del trabajo tanto como escribir código.
        </Text>
      </View>

      {/* Experiencia */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>EXPERIENCIA PROFESIONAL</Text>

        <View style={styles.item}>
          <Text style={styles.roleTitle}>Frontend / Fullstack Developer</Text>
          <Text style={styles.roleMeta}>Indra  |  Aranjuez, España  |  Enero 2022 - Presente</Text>
          <Text style={styles.description}>
            Desarrollo del Sistema de Mando y Control Estratégico Europeo (MPCC) para el Servicio Europeo de Acción Exterior (SEAE), la plataforma con la que la Unión Europea coordina sus misiones internacionales.
          </Text>
          <Text style={styles.bullets}>
            • Construyo componentes en Angular y TypeScript cuidando accesibilidad, rendimiento y diseño responsive.{'\n'}
            • Mantengo la cobertura de pruebas con Jest y Angular Testing Library siguiendo TDD.{'\n'}
            • Apoyo al backend en Java, Spring Boot y Docker cuando la tarea lo requiere.{'\n'}
            • Uso Git para el control de versiones, pull requests para la revisión de código y Jira para el seguimiento de tareas.{'\n'}
            • Me coordino con el equipo en dailies y weeklies.
          </Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.roleTitle}>Backend Developer</Text>
          <Text style={styles.roleMeta}>Indra  |  Aranjuez, España  |  Febrero 2021 - Enero 2022</Text>
          <Text style={styles.description}>
            Sistema de planificación de misiones para los helicópteros del Ejército de Tierra, trabajando íntegramente en el backend.
          </Text>
          <Text style={styles.bullets}>
            • Desarrollo de servicios REST en Java y Spring Boot sobre PostgreSQL y Oracle.{'\n'}
            • Pruebas unitarias y de integración con JUnit y Mockito.{'\n'}
            • Build del proyecto con Maven y trabajo diario con Git y Jira en entorno ágil.
          </Text>
        </View>
      </View>

      {/* Habilidades Técnicas */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>HABILIDADES TÉCNICAS</Text>
        <Text style={styles.skillLine}>
          <Text style={styles.skillCategory}>Frontend: </Text>
          Angular, React, TypeScript, JavaScript (ES6+), HTML5, CSS3, SASS, Tailwind CSS, Vue, Next.js, RxJS, Responsive Design
        </Text>
        <Text style={styles.skillLine}>
          <Text style={styles.skillCategory}>Backend y BBDD: </Text>
          Java, Spring Boot, Node.js, Express, MongoDB, Firebase, PostgreSQL, Oracle
        </Text>
        <Text style={styles.skillLine}>
          <Text style={styles.skillCategory}>Testing: </Text>
          Jest, Angular Testing Library, JUnit, Mockito, Cypress, Playwright, TDD
        </Text>
        <Text style={styles.skillLine}>
          <Text style={styles.skillCategory}>Herramientas: </Text>
          Git, Docker, Webpack, Vite, Jira, VSCode, IntelliJ IDEA
        </Text>
        <Text style={styles.skillLine}>
          <Text style={styles.skillCategory}>Metodologías: </Text>
          Scrum, Agile, Code Review, Pair Programming, TDD
        </Text>
      </View>

      {/* Formación Académica */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>FORMACIÓN ACADÉMICA</Text>

        <View style={styles.item}>
          <Text style={styles.roleTitle}>Máster Front-End Lemoncode XIII</Text>
          <Text style={styles.roleMeta}>Lemoncode  |  Abril 2022 - Noviembre 2023</Text>
          <Text style={styles.description}>
            Formación intensiva en el ecosistema frontend moderno: React, Angular, Vue, Next.js, TypeScript, testing con Jest, Cypress y Playwright, bundlers (Webpack, Vite), PWA, React Native, GraphQL y despliegue en AWS y Azure.
          </Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.roleTitle}>Graduado en Ingeniería Informática</Text>
          <Text style={styles.roleMeta}>Universidad Complutense de Madrid  |  2014 - 2020</Text>
          <Text style={styles.description}>
            Fundamentos de la ingeniería del software: Java, C, C++ y Python, estructuras de datos y algoritmos, bases de datos SQL, patrones de diseño, sistemas operativos, redes y desarrollo web.
          </Text>
        </View>
      </View>

      {/* Formación Complementaria */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>FORMACIÓN COMPLEMENTARIA</Text>

        <View style={styles.item}>
          <Text style={styles.roleTitle}>Testing Frontend (20h)</Text>
          <Text style={styles.roleMeta}>Icono Training Consulting  |  Noviembre 2025</Text>
          <Text style={styles.description}>
            Pruebas unitarias y de integración en JavaScript, pruebas de aceptación, Testing Library y pruebas de accesibilidad.
          </Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.roleTitle}>Linux LPIC-1: Linux Administrator (40h)</Text>
          <Text style={styles.roleMeta}>CAS Training  |  Octubre 2025</Text>
          <Text style={styles.description}>
            Administración de sistemas Linux, shell scripting, gestión de red y seguridad básica.
          </Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.roleTitle}>Spring Boot (24h)</Text>
          <Text style={styles.roleMeta}>PUE  |  Junio 2023</Text>
          <Text style={styles.description}>
            Desarrollo de aplicaciones, acceso a datos, seguridad y despliegue con Spring Boot.
          </Text>
        </View>
      </View>

      {/* Idiomas */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>IDIOMAS</Text>
        <Text style={styles.skillLine}>Español - Nativo</Text>
        <Text style={styles.skillLine}>Inglés - Profesional</Text>
      </View>

      {/* Habilidades Personales */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>HABILIDADES PERSONALES</Text>
        <Text style={styles.description}>
          Me desenvuelvo bien en equipos diversos e internacionales y mantengo la calma cuando las fechas aprietan. Disfruto los entornos donde la comunicación es clara y directa, y procuro ser una persona con la que se pueda contar. Me gusta aprender tecnologías nuevas cuando el proyecto las pide y compartir lo aprendido con el equipo.
        </Text>
      </View>
    </Page>
  </Document>
);

export default CVDocument;
