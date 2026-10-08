/* =========================================================
   VIJAY RODRIGUES PORTFOLIO
   Language / UI behaviour
   Languages: English, German, French, Dutch, Arabic
   ========================================================= */

(() => {
  'use strict';

  const LANGUAGES = ['en', 'de', 'fr', 'nl', 'ar'];

  const translations = {
    en: {
      documentTitle: 'Vijay Ashley Rodrigues — Senior Data Engineer',
      nav: {
        about: 'About', experience: 'Experience', skills: 'Skills', projects: 'Projects',
        qualifications: 'Qualifications', education: 'Education', certifications: 'Certifications', articles: 'Blog', contact: 'Contact'
      },
      hero: {
        availability: 'Senior Data Engineer · Bengaluru, India',
        lede: 'I build data platforms and pipelines that turn complex data into reliable, scalable systems.',
        cta: 'Explore my work', resume: 'View Résumé / CV'
      },
      about: {
        title: 'About me',
        p1: 'I\'m Vijay Ashley Rodrigues, a Senior Data Engineer with over {years} years of experience in data engineering and technology.',
        p2: 'I work on building and modernizing data systems, including data pipelines, cloud platforms, Spark-based processing, data quality and analytics. My current work involves technologies such as Databricks, PySpark, Azure, Snowflake, dbt, Python and SQL.',
        p3: 'I\'m also interested in how AI can be applied to data and engineering workflows, and I spend time building and experimenting with my own software and AI projects.',
        based: 'Based in', experience: 'Experience', role: 'Current role', focus: 'Focus',
        years: '{years} years', currentRole: 'Senior Data Engineer', focusValue: 'Data Engineering · Data Platforms · AI'
      },
      experience: {
        title: 'Experience', present: 'Present',
        chubbSummary: 'Modernizing enterprise data platforms across dbt, Databricks, PySpark, Delta Lake and Snowflake.',
        chubb1: 'Built a reusable dbt framework for Business360, standardizing 65+ models and reducing development time by approximately 40%.',
        chubb2: 'Developed a PySpark reconciliation framework validating 240M+ records across 7+ external data providers.',
        chubb3: 'Modernized multi-region pipelines, reducing runtime from 10–12 hours to approximately 4 hours and compute costs by 35%.',
        proziodSummary: 'Python automation and data-quality work supporting utility auction analysis.',
        proziodNote: 'Automated Excel-based analysis and validation workflows, reducing preparation and rechecking time.',
        teksystemsSummary: 'An earlier career chapter in stakeholder communication, requirements understanding and business context.',
        seniorDataEngineer: 'Senior Data Engineer', dataEngineer: 'Data Engineer', technicalRecruiter: 'Technical Recruiter'
      },
      skills: {
        title: 'Skills & tools',
        programming: 'Programming & Query Languages:',
        dataEngineering: 'Data Engineering & Processing:',
        cloud: 'Cloud & Data Platforms:',
        modeling: 'Data Modeling, Governance & Quality:',
        orchestration: 'Orchestration, DevOps & Collaboration:',
        performance: 'Performance Optimization:',
        ai: 'AI, LLM & Analytics:',
        bi: 'BI & Analytics Platforms:'
      },
      projects: {
        title: 'Projects', previous: 'Previous projects', next: 'Next projects',
        personalBuild: 'Personal build', aiData: 'AI + data', engineeringProject: 'Engineering project',
        view: 'View project',
        stream: 'STREAMING / 01', genai: 'GENAI / 02', cloud: 'CLOUD / 03', vision: 'COMPUTER VISION / 04',
        posTitle: 'Real-Time POS Transactions Monitoring',
        posDesc: 'Kafka streaming, PySpark processing, PostgreSQL storage and live Streamlit monitoring.',
        dbtTitle: 'dbt Model Analyzer with GPT + Lineage',
        dbtDesc: 'A Streamlit tool for model summaries, lineage graphs, column usage and environment comparison.',
        migrationTitle: 'SQL Server → Azure SQL Migration',
        migrationDesc: 'End-to-end migration work using Azure Migrate and supporting services.',
        visionTitle: 'Azure AI Vision — Object Detection & Tracking',
        visionDesc: 'Object detection and tracking using Azure AI Vision for computer vision workflows.',
        visionArtTitle: 'Object Detection',
        visionArtDesc: 'Azure AI Vision / tracking'
      },
      qualifications: {
        education: 'Education', certifications: 'Certifications',
        masterDataScience: 'Master of Data Science',
        pgAi: 'Post Graduate Program in AI & Machine Learning',
        mba: 'MBA — Marketing & HR', bca: 'BCA',
        bcaFull: 'Bachelor of Computer Applications · St. Aloysius College'
      },
      contact: {
        title: 'Connect with me.', location: 'Bengaluru, India',
        native: 'Native', workLocation: 'Current Work Location', nationality: 'Nationality', languagesSpoken: 'Languages Spoken', relocation: 'Open to Relocation',
        nativeValue: 'Mangaluru, Karnataka, India', workLocationValue: 'Bengaluru, Karnataka, India', nationalityValue: 'Indian', languagesValue: 'English · Hindi · Kannada · Konkani · Tulu', relocationValue: 'India & Internationally',
        email: 'Email', phone: 'Phone', linkedin: 'LinkedIn', github: 'GitHub', xing: 'XING', hackerRank: 'HackerRank', cv: 'Résumé / CV',
        viewProfile: 'View my profile', viewCv: 'View my CV'
      },
      articles: { title: 'Articles & Insights', intro: 'Ideas, lessons, and things I\'m learning along the way.', devto: 'Visit DEV.to', medium: 'Visit Medium.com' },
      footer: { back: 'Back to top ↑' },
      modal: { project: 'PROJECT', open: 'Open project ↗', close: 'Close' }
    },

    de: {
      documentTitle: 'Vijay Ashley Rodrigues — Senior Data Engineer',
      nav: { about: 'Über mich', experience: 'Erfahrung', skills: 'Fähigkeiten', projects: 'Projekte', qualifications: 'Qualifikationen', education: 'Ausbildung', certifications: 'Zertifizierungen', articles: 'Blog', contact: 'Kontakt' },
      hero: { availability: 'Senior Data Engineer · Bengaluru, Indien', lede: 'Ich entwickle Datenplattformen und Pipelines, die komplexe Daten in zuverlässige, skalierbare Systeme verwandeln.', cta: 'Meine Projekte ansehen', resume: 'Lebenslauf / CV ansehen' },
      about: { title: 'Über mich', p1: 'Ich bin Vijay Ashley Rodrigues, Senior Data Engineer mit über {years} Jahren Erfahrung in Data Engineering und Technologie.', p2: 'Ich entwickle und modernisiere Datensysteme, darunter Datenpipelines, Cloud-Plattformen, Spark-basierte Verarbeitung, Datenqualität und Analytics. In meiner aktuellen Arbeit nutze ich unter anderem Databricks, PySpark, Azure, Snowflake, dbt, Python und SQL.', p3: 'Außerdem interessiere ich mich dafür, wie KI in Daten- und Engineering-Workflows eingesetzt werden kann, und entwickle und teste eigene Software- und KI-Projekte.', based: 'Standort', experience: 'Erfahrung', role: 'Aktuelle Position', focus: 'Schwerpunkt', years: '{years} Jahre', currentRole: 'Senior Data Engineer', focusValue: 'Data Engineering · Datenplattformen · KI' },
      experience: { title: 'Erfahrung', present: 'Heute', chubbSummary: 'Modernisierung von Enterprise-Datenplattformen mit dbt, Databricks, PySpark, Delta Lake und Snowflake.', chubb1: 'Ein wiederverwendbares dbt-Framework für Business360 aufgebaut, 65+ Modelle standardisiert und die Entwicklungszeit um etwa 40 % reduziert.', chubb2: 'Ein PySpark-Reconciliation-Framework entwickelt, das mehr als 240 Mio. Datensätze aus 7+ externen Datenquellen validiert.', chubb3: 'Multi-Region-Pipelines modernisiert, Laufzeit von 10–12 Stunden auf etwa 4 Stunden reduziert und Compute-Kosten um 35 % gesenkt.', proziodSummary: 'Python-Automatisierung und Datenqualität für die Analyse von Versorgungsauktionen.', proziodNote: 'Excel-basierte Analyse- und Validierungsworkflows automatisiert und dadurch Vorbereitungs- und Prüfaufwand reduziert.', teksystemsSummary: 'Ein früherer Karriereabschnitt mit Fokus auf Stakeholder-Kommunikation, Anforderungsverständnis und Geschäftskontext.', seniorDataEngineer: 'Senior Data Engineer', dataEngineer: 'Data Engineer', technicalRecruiter: 'Technischer Recruiter' },
      skills: { title: 'Fähigkeiten & Tools', programming: 'Programmier- & Abfragesprachen:', dataEngineering: 'Data Engineering & Verarbeitung:', cloud: 'Cloud- & Datenplattformen:', modeling: 'Datenmodellierung, Governance & Qualität:', orchestration: 'Orchestrierung, DevOps & Zusammenarbeit:', performance: 'Performance-Optimierung:', ai: 'KI, LLM & Analytics:', bi: 'BI- & Analytics-Plattformen:' },
      projects: { title: 'Projekte', previous: 'Vorherige Projekte', next: 'Nächste Projekte', personalBuild: 'Persönliches Projekt', aiData: 'KI + Daten', engineeringProject: 'Engineering-Projekt', reserved: 'Reservierter Platz', view: 'Projekt ansehen', replace: 'Details ersetzen', stream: 'STREAMING / 01', genai: 'GENAI / 02', cloud: 'CLOUD / 03', vision: 'COMPUTER VISION / 04', posTitle: 'Echtzeit-Monitoring von POS-Transaktionen', posDesc: 'Kafka-Streaming, PySpark-Verarbeitung, PostgreSQL-Speicherung und Live-Monitoring mit Streamlit.', dbtTitle: 'dbt Model Analyzer mit GPT + Lineage', dbtDesc: 'Ein Streamlit-Tool für Modellzusammenfassungen, Lineage-Diagramme, Spaltennutzung und Umgebungsvergleiche.', migrationTitle: 'SQL Server → Azure SQL Migration', migrationDesc: 'End-to-End-Migrationsarbeit mit Azure Migrate und unterstützenden Diensten.', visionTitle: 'Azure AI Vision — Objekterkennung & Tracking', visionDesc: 'Objekterkennung und Tracking mit Azure AI Vision für Computer-Vision-Workflows.', visionArtTitle: 'Objekterkennung', visionArtDesc: 'Azure AI Vision / Tracking' },
      qualifications: { education: 'Ausbildung', certifications: 'Zertifizierungen', masterDataScience: 'Master of Data Science', pgAi: 'Post Graduate Program in AI & Machine Learning', mba: 'MBA — Marketing & HR', bca: 'BCA', bcaFull: 'Bachelor of Computer Applications · St. Aloysius College' },
      contact: { title: 'Kontakt aufnehmen.', location: 'Bengaluru, Indien', native: 'Heimatort', workLocation: 'Aktueller Arbeitsort', nationality: 'Staatsangehörigkeit', languagesSpoken: 'Gesprochene Sprachen', relocation: 'Umzugsbereitschaft', nativeValue: 'Mangaluru, Karnataka, Indien', workLocationValue: 'Bengaluru, Karnataka, Indien', nationalityValue: 'Indisch', languagesValue: 'Englisch · Hindi · Kannada · Konkani · Tulu', relocationValue: 'Indien & international', email: 'E-Mail', phone: 'Phone', linkedin: 'LinkedIn', github: 'GitHub', xing: 'XING', hackerRank: 'HackerRank', cv: 'Lebenslauf / CV', viewProfile: 'Profil ansehen', viewCv: 'CV ansehen' },
      articles: { title: 'Artikel & Einblicke', intro: 'Ideen, Erkenntnisse und Dinge, die ich auf meinem Weg lerne.', devto: 'DEV.to besuchen', medium: 'Medium.com besuchen' },
      footer: { back: 'Nach oben ↑' }, modal: { project: 'PROJEKT', open: 'Projekt öffnen ↗', close: 'Schließen' }
    },

    fr: {
      documentTitle: 'Vijay Ashley Rodrigues — Senior Data Engineer',
      nav: { about: 'À propos', experience: 'Expérience', skills: 'Compétences', projects: 'Projets', qualifications: 'Qualifications', education: 'Formation', certifications: 'Certifications', articles: 'Blog', contact: 'Contact' },
      hero: { availability: 'Senior Data Engineer · Bengaluru, Inde', lede: 'Je conçois des plateformes de données et des pipelines qui transforment des données complexes en systèmes fiables et évolutifs.', cta: 'Voir mes projets', resume: 'Voir le CV' },
      about: { title: 'À propos de moi', p1: 'Je suis Vijay Ashley Rodrigues, Senior Data Engineer avec plus de {years} ans d’expérience en data engineering et en technologie.', p2: 'Je travaille sur la conception et la modernisation de systèmes de données, notamment les pipelines, les plateformes cloud, le traitement avec Spark, la qualité des données et l’analytique. Mon travail actuel utilise notamment Databricks, PySpark, Azure, Snowflake, dbt, Python et SQL.', p3: 'Je m’intéresse également à l’application de l’IA aux données et aux workflows d’ingénierie, et je développe et expérimente mes propres projets logiciels et IA.', based: 'Basé à', experience: 'Expérience', role: 'Poste actuel', focus: 'Domaine', years: '{years} ans', currentRole: 'Senior Data Engineer', focusValue: 'Data Engineering · Plateformes de données · IA' },
      experience: { title: 'Expérience', present: 'Aujourd’hui', chubbSummary: 'Modernisation de plateformes de données d’entreprise avec dbt, Databricks, PySpark, Delta Lake et Snowflake.', chubb1: 'Création d’un framework dbt réutilisable pour Business360, standardisant plus de 65 modèles et réduisant le temps de développement d’environ 40 %.', chubb2: 'Développement d’un framework de réconciliation PySpark validant plus de 240 millions d’enregistrements provenant de 7+ fournisseurs externes.', chubb3: 'Modernisation de pipelines multi-régions, avec un temps d’exécution réduit de 10–12 heures à environ 4 heures et des coûts de calcul réduits de 35 %.', proziodSummary: 'Automatisation Python et travail sur la qualité des données pour l’analyse d’enchères de services publics.', proziodNote: 'Automatisation de workflows d’analyse et de validation basés sur Excel, réduisant le temps de préparation et de vérification.', teksystemsSummary: 'Une première étape de carrière axée sur la communication avec les parties prenantes, la compréhension des besoins et le contexte métier.', seniorDataEngineer: 'Senior Data Engineer', dataEngineer: 'Data Engineer', technicalRecruiter: 'Technical Recruiter' },
      skills: { title: 'Compétences & outils', programming: 'Langages de programmation & requêtes :', dataEngineering: 'Data Engineering & traitement :', cloud: 'Cloud & plateformes de données :', modeling: 'Modélisation, gouvernance & qualité des données :', orchestration: 'Orchestration, DevOps & collaboration :', performance: 'Optimisation des performances :', ai: 'IA, LLM & analytique :', bi: 'Plateformes BI & analytiques :' },
      projects: { title: 'Projets', previous: 'Projets précédents', next: 'Projets suivants', personalBuild: 'Projet personnel', aiData: 'IA + données', engineeringProject: 'Projet d’ingénierie', reserved: 'Emplacement réservé', view: 'Voir le projet', replace: 'Remplacer les détails', stream: 'STREAMING / 01', genai: 'GENAI / 02', cloud: 'CLOUD / 03', vision: 'VISION PAR ORDINATEUR / 04', posTitle: 'Suivi en temps réel des transactions POS', posDesc: 'Streaming Kafka, traitement PySpark, stockage PostgreSQL et suivi en direct avec Streamlit.', dbtTitle: 'Analyseur de modèles dbt avec GPT + Lineage', dbtDesc: 'Un outil Streamlit pour les résumés de modèles, les graphes de lineage, l’utilisation des colonnes et la comparaison des environnements.', migrationTitle: 'Migration SQL Server → Azure SQL', migrationDesc: 'Travail de migration de bout en bout avec Azure Migrate et les services associés.', visionTitle: 'Azure AI Vision — Détection et suivi d’objets', visionDesc: 'Détection et suivi d’objets avec Azure AI Vision pour des workflows de vision par ordinateur.', visionArtTitle: 'Détection d’objets', visionArtDesc: 'Azure AI Vision / suivi' },
      qualifications: { education: 'Formation', certifications: 'Certifications', masterDataScience: 'Master en Data Science', pgAi: 'Programme postgraduate en IA & Machine Learning', mba: 'MBA — Marketing & RH', bca: 'BCA', bcaFull: 'Bachelor of Computer Applications · St. Aloysius College' },
      contact: { title: 'Me contacter.', location: 'Bengaluru, Inde', native: 'Originaire de', workLocation: 'Lieu de travail actuel', nationality: 'Nationalité', languagesSpoken: 'Langues parlées', relocation: 'Ouvert à la mobilité', nativeValue: 'Mangaluru, Karnataka, Inde', workLocationValue: 'Bengaluru, Karnataka, Inde', nationalityValue: 'Indien', languagesValue: 'Anglais · Hindi · Kannada · Konkani · Tulu', relocationValue: 'Inde et international', email: 'E-mail', phone: 'Phone', linkedin: 'LinkedIn', github: 'GitHub', xing: 'XING', hackerRank: 'HackerRank', cv: 'CV', viewProfile: 'Voir le profil', viewCv: 'Voir mon CV' },
      articles: { title: 'Articles & réflexions', intro: 'Des idées, des apprentissages et ce que je découvre au fil du chemin.', devto: 'Visiter DEV.to', medium: 'Visiter Medium.com' },
      footer: { back: 'Retour en haut ↑' }, modal: { project: 'PROJET', open: 'Ouvrir le projet ↗', close: 'Fermer' }
    },

    nl: {
      documentTitle: 'Vijay Ashley Rodrigues — Senior Data Engineer',
      nav: { about: 'Over mij', experience: 'Ervaring', skills: 'Vaardigheden', projects: 'Projecten', qualifications: 'Kwalificaties', education: 'Opleiding', certifications: 'Certificeringen', articles: 'Blog', contact: 'Contact' },
      hero: { availability: 'Senior Data Engineer · Bengaluru, India', lede: 'Ik bouw dataplatformen en pipelines die complexe data omzetten in betrouwbare, schaalbare systemen.', cta: 'Bekijk mijn projecten', resume: 'Bekijk cv' },
      about: { title: 'Over mij', p1: 'Ik ben Vijay Ashley Rodrigues, Senior Data Engineer met meer dan {years} jaar ervaring in data engineering en technologie.', p2: 'Ik werk aan het bouwen en moderniseren van datasystemen, waaronder datapipelines, cloudplatformen, Spark-verwerking, datakwaliteit en analytics. In mijn huidige werk gebruik ik onder andere Databricks, PySpark, Azure, Snowflake, dbt, Python en SQL.', p3: 'Ik ben ook geïnteresseerd in de toepassing van AI op data- en engineeringworkflows en besteed tijd aan het bouwen en experimenteren met mijn eigen software- en AI-projecten.', based: 'Locatie', experience: 'Ervaring', role: 'Huidige functie', focus: 'Focus', years: '{years} jaar', currentRole: 'Senior Data Engineer', focusValue: 'Data Engineering · Dataplatformen · AI' },
      experience: { title: 'Ervaring', present: 'Heden', chubbSummary: 'Modernisering van enterprise-dataplatformen met dbt, Databricks, PySpark, Delta Lake en Snowflake.', chubb1: 'Een herbruikbaar dbt-framework voor Business360 gebouwd, met 65+ gestandaardiseerde modellen en ongeveer 40% minder ontwikkeltijd.', chubb2: 'Een PySpark-reconciliatieframework ontwikkeld dat meer dan 240 miljoen records uit 7+ externe dataleveranciers valideert.', chubb3: 'Multi-region pipelines gemoderniseerd, met een runtime van 10–12 uur naar ongeveer 4 uur en 35% lagere compute-kosten.', proziodSummary: 'Python-automatisering en datakwaliteitswerk voor analyse van nutsveilingen.', proziodNote: 'Excel-gebaseerde analyse- en validatieworkflows geautomatiseerd, waardoor voorbereiding en hercontrole minder tijd kosten.', teksystemsSummary: 'Een eerdere carrièrestap gericht op stakeholdercommunicatie, het begrijpen van vereisten en bedrijfscontext.', seniorDataEngineer: 'Senior Data Engineer', dataEngineer: 'Data Engineer', technicalRecruiter: 'Technisch recruiter' },
      skills: { title: 'Vaardigheden & tools', programming: 'Programmeertalen & querytalen:', dataEngineering: 'Data Engineering & verwerking:', cloud: 'Cloud- & dataplatformen:', modeling: 'Datamodellering, governance & kwaliteit:', orchestration: 'Orchestratie, DevOps & samenwerking:', performance: 'Performance-optimalisatie:', ai: 'AI, LLM & analytics:', bi: 'BI- & analyticsplatformen:' },
      projects: { title: 'Projecten', previous: 'Vorige projecten', next: 'Volgende projecten', personalBuild: 'Persoonlijk project', aiData: 'AI + data', engineeringProject: 'Engineeringproject', reserved: 'Gereserveerde plek', view: 'Project bekijken', replace: 'Details vervangen', stream: 'STREAMING / 01', genai: 'GENAI / 02', cloud: 'CLOUD / 03', vision: 'COMPUTER VISION / 04', posTitle: 'Realtime monitoring van POS-transacties', posDesc: 'Kafka-streaming, PySpark-verwerking, PostgreSQL-opslag en live monitoring met Streamlit.', dbtTitle: 'dbt Model Analyzer met GPT + Lineage', dbtDesc: 'Een Streamlit-tool voor modelsamenvattingen, lineagegrafieken, kolomgebruik en vergelijking van omgevingen.', migrationTitle: 'SQL Server → Azure SQL-migratie', migrationDesc: 'End-to-end migratiewerk met Azure Migrate en ondersteunende services.', visionTitle: 'Azure AI Vision — Objectdetectie & tracking', visionDesc: 'Objectdetectie en tracking met Azure AI Vision voor computer-vision-workflows.', visionArtTitle: 'Objectdetectie', visionArtDesc: 'Azure AI Vision / tracking' },
      qualifications: { education: 'Opleiding', certifications: 'Certificeringen', masterDataScience: 'Master of Data Science', pgAi: 'Post Graduate Program in AI & Machine Learning', mba: 'MBA — Marketing & HR', bca: 'BCA', bcaFull: 'Bachelor of Computer Applications · St. Aloysius College' },
      contact: { title: 'Neem contact op.', location: 'Bengaluru, India', native: 'Afkomstig uit', workLocation: 'Huidige werklocatie', nationality: 'Nationaliteit', languagesSpoken: 'Gesproken talen', relocation: 'Open voor verhuizing', nativeValue: 'Mangaluru, Karnataka, India', workLocationValue: 'Bengaluru, Karnataka, India', nationalityValue: 'Indiaas', languagesValue: 'Engels · Hindi · Kannada · Konkani · Tulu', relocationValue: 'India en internationaal', email: 'E-mail', phone: 'Phone', linkedin: 'LinkedIn', github: 'GitHub', xing: 'XING', hackerRank: 'HackerRank', cv: 'Cv', viewProfile: 'Profiel bekijken', viewCv: 'Mijn cv bekijken' },
      articles: { title: 'Artikelen & inzichten', intro: 'Ideeën, lessen en dingen die ik onderweg leer.', devto: 'Bezoek DEV.to', medium: 'Bezoek Medium.com' },
      footer: { back: 'Terug naar boven ↑' }, modal: { project: 'PROJECT', open: 'Project openen ↗', close: 'Sluiten' }
    },

    ar: {
      documentTitle: 'فيجاي آشلي رودريغز — مهندس بيانات أول',
      nav: { about: 'نبذة عني', experience: 'الخبرة', skills: 'المهارات', projects: 'المشاريع', qualifications: 'المؤهلات', education: 'التعليم', certifications: 'الشهادات', articles: 'المدونة', contact: 'تواصل معي' },
      hero: { availability: 'مهندس بيانات أول · بنغالورو، الهند', lede: 'أبني منصات البيانات وخطوط المعالجة التي تحوّل البيانات المعقدة إلى أنظمة موثوقة وقابلة للتوسع.', cta: 'استكشف مشاريعي', resume: 'عرض السيرة الذاتية / CV' },
      about: { title: 'نبذة عني', p1: 'أنا فيجاي آشلي رودريغز، مهندس بيانات أول لدي أكثر من {years} سنوات من الخبرة في هندسة البيانات والتقنية.', p2: 'أعمل على بناء وتحديث أنظمة البيانات، بما في ذلك خطوط البيانات ومنصات السحابة ومعالجة Spark وجودة البيانات والتحليلات. أستخدم حاليًا تقنيات مثل Databricks وPySpark وAzure وSnowflake وdbt وPython وSQL.', p3: 'كما أهتم بتطبيق الذكاء الاصطناعي على البيانات وسير عمل الهندسة، وأقضي وقتًا في بناء وتجربة مشاريعي البرمجية ومشاريع الذكاء الاصطناعي الخاصة بي.', based: 'الموقع', experience: 'الخبرة', role: 'الدور الحالي', focus: 'التركيز', years: '{years} سنوات', currentRole: 'مهندس بيانات أول', focusValue: 'هندسة البيانات · منصات البيانات · الذكاء الاصطناعي' },
      experience: { title: 'الخبرة', present: 'حتى الآن', chubbSummary: 'تحديث منصات بيانات المؤسسات باستخدام dbt وDatabricks وPySpark وDelta Lake وSnowflake.', chubb1: 'بناء إطار dbt قابل لإعادة الاستخدام لـ Business360، وتوحيد أكثر من 65 نموذجًا وتقليل وقت التطوير بنحو 40٪.', chubb2: 'تطوير إطار مصالحة باستخدام PySpark للتحقق من أكثر من 240 مليون سجل عبر أكثر من 7 مزودين خارجيين للبيانات.', chubb3: 'تحديث خطوط معالجة متعددة المناطق، وخفض زمن التشغيل من 10–12 ساعة إلى نحو 4 ساعات وتقليل تكاليف الحوسبة بنسبة 35٪.', proziodSummary: 'أتمتة باستخدام Python وأعمال جودة البيانات لدعم تحليل مزادات المرافق.', proziodNote: 'أتمتة عمليات التحليل والتحقق المعتمدة على Excel، مما قلل وقت الإعداد وإعادة التحقق.', teksystemsSummary: 'مرحلة مبكرة من المسيرة المهنية ركزت على التواصل مع أصحاب المصلحة وفهم المتطلبات والسياق التجاري.', seniorDataEngineer: 'مهندس بيانات أول', dataEngineer: 'مهندس بيانات', technicalRecruiter: 'مسؤول توظيف تقني' },
      skills: { title: 'المهارات والأدوات', programming: 'لغات البرمجة والاستعلام:', dataEngineering: 'هندسة البيانات والمعالجة:', cloud: 'السحابة ومنصات البيانات:', modeling: 'نمذجة البيانات والحوكمة والجودة:', orchestration: 'التنسيق وDevOps والتعاون:', performance: 'تحسين الأداء:', ai: 'الذكاء الاصطناعي وLLM والتحليلات:', bi: 'منصات ذكاء الأعمال والتحليلات:' },
      projects: { title: 'المشاريع', previous: 'المشاريع السابقة', next: 'المشاريع التالية', personalBuild: 'مشروع شخصي', aiData: 'ذكاء اصطناعي + بيانات', engineeringProject: 'مشروع هندسي', reserved: 'مساحة محجوزة', view: 'عرض المشروع', replace: 'استبدال التفاصيل', stream: 'بث مباشر / 01', genai: 'ذكاء توليدي / 02', cloud: 'سحابة / 03', vision: 'رؤية حاسوبية / 04', posTitle: 'مراقبة معاملات نقاط البيع في الوقت الفعلي', posDesc: 'بث Kafka ومعالجة PySpark وتخزين PostgreSQL ومراقبة مباشرة باستخدام Streamlit.', dbtTitle: 'محلل نماذج dbt باستخدام GPT + Lineage', dbtDesc: 'أداة Streamlit لملخصات النماذج ورسومات Lineage واستخدام الأعمدة ومقارنة البيئات.', migrationTitle: 'ترحيل SQL Server → Azure SQL', migrationDesc: 'تنفيذ عملية ترحيل متكاملة باستخدام Azure Migrate والخدمات الداعمة.', visionTitle: 'Azure AI Vision — اكتشاف وتتبع الكائنات', visionDesc: 'اكتشاف وتتبع الكائنات باستخدام Azure AI Vision ضمن سير عمل الرؤية الحاسوبية.', visionArtTitle: 'اكتشاف الكائنات', visionArtDesc: 'Azure AI Vision / التتبع' },
      qualifications: { education: 'التعليم', certifications: 'الشهادات', masterDataScience: 'ماجستير علوم البيانات', pgAi: 'برنامج دراسات عليا في الذكاء الاصطناعي وتعلم الآلة', mba: 'ماجستير إدارة الأعمال — التسويق والموارد البشرية', bca: 'BCA', bcaFull: 'بكالوريوس تطبيقات الحاسوب · كلية سانت ألويسيوس' },
      contact: { title: 'تواصل معي.', location: 'بنغالورو، الهند', native: 'مسقط الرأس', workLocation: 'مكان العمل الحالي', nationality: 'الجنسية', languagesSpoken: 'اللغات المتحدث بها', relocation: 'الاستعداد للانتقال', nativeValue: 'مانغالورو، كارناتاكا، الهند', workLocationValue: 'بنغالورو، كارناتاكا، الهند', nationalityValue: 'هندي', languagesValue: 'الإنجليزية · الهندية · الكانادا · الكونكانية · التولو', relocationValue: 'الهند ودوليًا', email: 'البريد الإلكتروني', phone: 'Phone', linkedin: 'LinkedIn', github: 'GitHub', xing: 'XING', hackerRank: 'HackerRank', cv: 'السيرة الذاتية / CV', viewProfile: 'عرض الملف الشخصي', viewCv: 'عرض سيرتي الذاتية' },
      articles: { title: 'مقالات وأفكار', intro: 'أفكار ودروس وأشياء أتعلمها على طول الطريق.', devto: 'زيارة DEV.to', medium: 'زيارة Medium.com' },
      footer: { back: 'العودة إلى الأعلى ↑' }, modal: { project: 'المشروع', open: 'فتح المشروع ↗', close: 'إغلاق' }
    }
  };

  const q = (selector, root = document) => root.querySelector(selector);
  const qa = (selector, root = document) => [...root.querySelectorAll(selector)];
  const setText = (selector, value, root = document) => {
    const el = q(selector, root);
    if (el) el.textContent = value;
  };

  function experienceYears() {
    const startDate = new Date(2019, 0, 17);
    return ((Date.now() - startDate.getTime()) / (365.2425 * 24 * 60 * 60 * 1000)).toFixed(1);
  }

  function setLanguageButton(lang) {
    const button = q('#languageButton');
    if (button) button.firstChild.textContent = lang.toUpperCase() + ' ';
  }

  function translate(lang) {
    if (!translations[lang]) lang = 'en';
    const t = translations[lang];
    const years = experienceYears();

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.title = t.documentTitle;
    setLanguageButton(lang);

    // Navigation
    setText('.desktop-nav a[href="#about"]', t.nav.about);
    setText('.desktop-nav a[href="#experience"]', t.nav.experience);
    setText('.desktop-nav a[href="#capabilities"]', t.nav.skills);
    setText('.desktop-nav a[href="#work"]', t.nav.projects);
    setText('.desktop-nav a[href="#articles"]', t.nav.articles);
    const desktopQualToggle = q('.desktop-nav .nav-dropdown-toggle');
    if (desktopQualToggle && desktopQualToggle.firstChild) desktopQualToggle.firstChild.textContent = t.nav.qualifications + ' ';
    
    setText('.desktop-nav .nav-dropdown-menu a[href="#education"]', t.nav.education);
    setText('.desktop-nav .nav-dropdown-menu a[href="#certifications"]', t.nav.certifications);
    setText('.desktop-nav a[href="#contact"]', t.nav.contact);

    setText('.mobile-menu a[href="#about"]', t.nav.about);
    setText('.mobile-menu a[href="#experience"]', t.nav.experience);
    setText('.mobile-menu > a[href="#capabilities"]', t.nav.skills);
    setText('.mobile-menu a[href="#articles"]', t.nav.articles);
    setText('.mobile-nav-dropdown-toggle span:first-child', t.nav.qualifications);
    setText('.mobile-nav-submenu a[href="#education"]', t.nav.education);
    setText('.mobile-nav-submenu a[href="#certifications"]', t.nav.certifications);
    setText('.mobile-menu a[href="#contact"]', t.nav.contact);

    // Hero
    setText('.hero .eyebrow [data-i18n="hero.availability"]', t.hero.availability);
    setText('.hero-lede', t.hero.lede);
    setText('.hero .button-primary', t.hero.cta);
    setText('.hero .button-ghost', t.hero.resume);

    // About
    setText('#about h2', t.about.title);
    const aboutPs = qa('#about .about-copy p');
    if (aboutPs[0]) aboutPs[0].innerHTML = t.about.p1.replace('{years}', `<span class="experience-inline" id="experienceYearsAbout">${years}</span>`);
    if (aboutPs[1]) aboutPs[1].textContent = t.about.p2;
    if (aboutPs[2]) aboutPs[2].textContent = t.about.p3;
    const facts = qa('#about .about-fact');
    if (facts[0]) { const s = q('span', facts[0]); if (s) s.textContent = t.about.based; }
    if (facts[1]) { const s = q('span', facts[1]); if (s) s.textContent = t.about.experience; const strong = q('strong', facts[1]); if (strong) strong.innerHTML = `<span id="experienceYearsAboutFact">${years}</span> ${t.about.years.replace('{years}', '').trim()}`; }
    if (facts[2]) { const s = q('span', facts[2]); if (s) s.textContent = t.about.role; const strong = q('strong', facts[2]); if (strong) strong.textContent = t.about.currentRole; }
    if (facts[3]) { const s = q('span', facts[3]); if (s) s.textContent = t.about.focus; const strong = q('strong', facts[3]); if (strong) strong.textContent = t.about.focusValue; }

    // Experience
    setText('#experience h2', t.experience.title);
    const entries = qa('#experience .experience-entry');
    if (entries[0]) {
      setText('.experience-date span', t.experience.present, entries[0]);
      setText('.role-company', 'Chubb', entries[0]);
      setText('h3', t.experience.seniorDataEngineer, entries[0]);
      setText('.role-summary', t.experience.chubbSummary, entries[0]);
      const lis = qa('li', entries[0]);
      [t.experience.chubb1, t.experience.chubb2, t.experience.chubb3].forEach((v, i) => { if (lis[i]) lis[i].textContent = v; });
    }
    if (entries[1]) {
      setText('.role-company', 'Proziod Analytics Pvt Ltd', entries[1]);
      setText('h3', t.experience.dataEngineer, entries[1]);
      setText('.role-summary', t.experience.proziodSummary, entries[1]);
      setText('.experience-note', t.experience.proziodNote, entries[1]);
    }
    if (entries[2]) {
      setText('.role-company', 'TEKsystems', entries[2]);
      setText('h3', t.experience.technicalRecruiter, entries[2]);
      setText('.role-summary', t.experience.teksystemsSummary, entries[2]);
    }

    // Skills
    setText('#capabilities h2', t.skills.title);
    const skillHeads = qa('#capabilities .skill-group h3');
    const skillValues = [t.skills.programming, t.skills.dataEngineering, t.skills.cloud, t.skills.modeling, t.skills.orchestration, t.skills.performance, t.skills.ai, t.skills.bi];
    skillHeads.forEach((el, i) => { if (skillValues[i]) el.textContent = skillValues[i]; });

    // Projects
    setText('#work h2', t.projects.title);
    const cards = qa('#work .project-card');
    const projectData = [
      [t.projects.stream, t.projects.personalBuild, t.projects.posTitle, t.projects.posDesc, t.projects.view],
      [t.projects.genai, t.projects.aiData, t.projects.dbtTitle, t.projects.dbtDesc, t.projects.view],
      [t.projects.cloud, t.projects.engineeringProject, t.projects.migrationTitle, t.projects.migrationDesc, t.projects.view],
      [t.projects.vision, t.projects.engineeringProject, t.projects.visionTitle, t.projects.visionDesc, t.projects.view]
    ];
    cards.forEach((card, i) => {
      const d = projectData[i];
      if (!d) return;
      setText('.art-label', d[0], card);
      setText('.project-meta span:first-child', d[1], card);
      setText('h3', d[2], card);
      setText('p', d[3], card);
      const projectLink = q('.project-link', card);
      if (projectLink) {
        const arrow = q('span', projectLink);
        projectLink.firstChild.textContent = d[4] + ' ';
        if (arrow) arrow.textContent = '↗';
      }
    });
    // Project artwork labels / helper text
    if (cards[2]) {
      setText('.cloud-diagram div:first-child', 'ON-PREM', cards[2]);
      setText('.cloud-diagram div:last-child', 'AZURE SQL', cards[2]);
      setText('.project-art small', lang === 'de' ? 'Migration / Bewertung / Umsetzung / Optimierung' : lang === 'fr' ? 'migration / évaluation / exécution / optimisation' : lang === 'nl' ? 'migratie / beoordeling / uitvoering / optimalisatie' : lang === 'ar' ? 'الترحيل / التقييم / التنفيذ / التحسين' : 'migration / assessment / execution / optimization', cards[2]);
    }
    if (cards[3]) {
      setText('.project-art strong', t.projects.visionArtTitle, cards[3]);
      setText('.project-art small', t.projects.visionArtDesc, cards[3]);
    }
    const prev = q('[data-carousel-prev]');
    const next = q('[data-carousel-next]');
    if (prev) prev.setAttribute('aria-label', t.projects.previous);
    if (next) next.setAttribute('aria-label', t.projects.next);
    setText('#work .project-github-link .text-link', lang === 'en' ? 'See everything on GitHub ↗' : t.projects.title === 'Projets' ? 'Voir tous les projets sur GitHub ↗' : t.projects.title === 'Projekte' ? 'Alle Projekte auf GitHub ansehen ↗' : t.projects.title === 'Projecten' ? 'Bekijk alles op GitHub ↗' : t.projects.title === 'المشاريع' ? 'عرض جميع المشاريع على GitHub ↗' : 'See everything on GitHub ↗');

    // Articles & Insights
    setText('#articles h2', t.articles.title);
    setText('#articles .articles-copy p', t.articles.intro);
    setText("#articles .articles-link[href*='dev.to'] span:first-child", t.articles.devto);
    setText("#articles .articles-link[href*='medium.com'] span:first-child", t.articles.medium);

    // Qualifications
    setText('#education h2', t.qualifications.education);
    setText('#certifications h2', t.qualifications.certifications);
    const edu = qa('#education .education-item');
    const eduTitles = [t.qualifications.masterDataScience, t.qualifications.pgAi, t.qualifications.mba, t.qualifications.bca];
    const eduSchools = ['Deakin University', 'Texas McCombs School of Business', 'SDM College of Business Management', t.qualifications.bcaFull];
    edu.forEach((item, i) => { setText('h3', eduTitles[i], item); setText('p', eduSchools[i], item); });

    // Contact
    setText('#contact h2', t.contact.title);
    setText('#contact .contact-detail:nth-child(1) .contact-detail-label', t.contact.native);
    setText('#contact .contact-detail:nth-child(1) strong', t.contact.nativeValue);
    setText('#contact .contact-detail:nth-child(2) .contact-detail-label', t.contact.workLocation);
    setText('#contact .contact-detail:nth-child(2) strong', t.contact.workLocationValue);
    setText('#contact .contact-detail:nth-child(3) .contact-detail-label', t.contact.nationality);
    setText('#contact .contact-detail:nth-child(3) strong', t.contact.nationalityValue);
    setText('#contact .contact-detail:nth-child(4) .contact-detail-label', t.contact.languagesSpoken);
    setText('#contact .contact-detail:nth-child(4) strong', t.contact.languagesValue);
    setText('#contact .contact-detail:nth-child(5) .contact-detail-label', t.contact.email);
    setText('#contact .contact-detail:nth-child(5) strong', 'rodriguesvijay92@gmail.com');
    setText('#contact .contact-detail:nth-child(6) .contact-detail-label', t.contact.phone);
    setText('#contact .contact-detail:nth-child(6) strong', '+91 93535 79475');
    setText('#contact .contact-detail:nth-child(7) .contact-detail-label', t.contact.relocation);
    setText('#contact .contact-detail:nth-child(7) strong', t.contact.relocationValue);
    setText('.contact-location', t.contact.location);
    const methods = qa('#contact .contact-method');
    const labels = [t.contact.email, t.contact.linkedin, t.contact.github, t.contact.xing, t.contact.hackerRank, t.contact.cv];
    const values = ['rodriguesvijay92@gmail.com', 'linkedin.com/in/vijayrodrigues', 'github.com/VijayRodrigues', t.contact.viewProfile, t.contact.viewProfile, t.contact.viewCv];
    methods.forEach((method, i) => { setText('.contact-method-label', labels[i], method); setText('.contact-method-value', values[i], method); });

    // Footer / modal accessibility text
    setText('.site-footer a', t.footer.back);
    const close = q('.modal-close');
    if (close) close.setAttribute('aria-label', t.modal.close);
    setText('#modalKicker', t.modal.project);
    setText('#modalLink', t.modal.open);

    // Language persistence
    localStorage.setItem('portfolioLanguage', lang);
    document.documentElement.dataset.language = lang;

    // Keep the project carousel movement LTR in Arabic so the 4th project
    // remains reachable with the existing carousel transform logic.
    const projectTrack = q('#work .project-track');
    if (projectTrack) {
      projectTrack.style.direction = lang === 'ar' ? 'ltr' : '';
      qa('.project-card', projectTrack).forEach((card) => {
        card.style.direction = lang === 'ar' ? 'rtl' : '';
      });
    }
  }

  // Project links / modal
  const PROJECT_URLS = {
    pos: 'https://github.com/VijayRodrigues/real-time-pos-kafka',
    dbt: 'https://github.com/VijayRodrigues/GenAI_DBT_model_Analyzer',
    migration: 'https://github.com/VijayRodrigues/AzureMigrate-OnPrem2AzureSQL',
    vision: 'https://github.com/VijayRodrigues/azure-ai-vision-object-detection-tracking'
  };

  const projectModal = q('#projectModal');
  const modalLink = q('#modalLink');

  function openProjectModal(button) {
    if (!projectModal) return;
    const card = button.closest('.project-card');
    const key = button.dataset.projectOpen;
    if (!card || !PROJECT_URLS[key]) return;

    setText('#modalTitle', q('h3', card)?.textContent || '');
    setText('#modalDescription', q('p', card)?.textContent || '');

    const modalTags = q('#modalTags');
    if (modalTags) {
      modalTags.innerHTML = '';
      qa('.tag-row span', card).forEach((tag) => {
        const span = document.createElement('span');
        span.textContent = tag.textContent;
        modalTags.appendChild(span);
      });
    }

    if (modalLink) modalLink.href = PROJECT_URLS[key];

    projectModal.classList.add('open');
    projectModal.setAttribute('aria-hidden', 'false');
  }

  function closeProjectModal() {
    if (!projectModal) return;
    projectModal.classList.remove('open');
    projectModal.setAttribute('aria-hidden', 'true');
  }

  qa('[data-project-open]').forEach((button) => {
    button.addEventListener('click', () => openProjectModal(button));
  });

  qa('.modal-close').forEach((button) => {
    button.addEventListener('click', closeProjectModal);
  });

  if (projectModal) {
    projectModal.addEventListener('click', (event) => {
      if (event.target === projectModal) closeProjectModal();
    });
  }

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeProjectModal();
  });

  // Language menu
  const languageButton = q('#languageButton');
  const languageMenu = q('#languageMenu');
  if (languageButton && languageMenu) {
    languageButton.addEventListener('click', (event) => {
      event.stopPropagation();
      const open = languageMenu.classList.toggle('open');
      languageButton.setAttribute('aria-expanded', String(open));
    });

    qa('[data-lang]', languageMenu).forEach((button) => {
      button.addEventListener('click', (event) => {
        event.stopPropagation();
        translate(button.dataset.lang);
        languageMenu.classList.remove('open');
        languageButton.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('click', (event) => {
      if (!languageMenu.contains(event.target) && !languageButton.contains(event.target)) {
        languageMenu.classList.remove('open');
        languageButton.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Mobile menu
  const menuToggle = q('#menuToggle');
  const mobileMenu = q('#mobileMenu');
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      const open = mobileMenu.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(open));
    });
    qa('a', mobileMenu).forEach((link) => link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    }));
  }

  // Theme toggle
  const themeToggle = q('#themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const dark = document.documentElement.getAttribute('data-theme') !== 'dark';

      if (dark) {
        document.documentElement.setAttribute('data-theme', 'dark');
      } else {
        document.documentElement.removeAttribute('data-theme');
      }

      localStorage.setItem('portfolioTheme', dark ? 'dark' : 'light');
    });
  }

  // Reveal animations
  const revealItems = qa('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach((el) => observer.observe(el));
  } else {
    revealItems.forEach((el) => el.classList.add('is-visible'));
  }

  // Restore preferences
  const savedLanguage = localStorage.getItem('portfolioLanguage');
  translate(LANGUAGES.includes(savedLanguage) ? savedLanguage : 'en');

  const savedTheme = localStorage.getItem('portfolioTheme');
  if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  }

  // Current year
  const year = q('#year');
  if (year) year.textContent = new Date().getFullYear();
})();
