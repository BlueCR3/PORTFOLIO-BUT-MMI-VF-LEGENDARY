/* ════════════════════════════════════════════════════════════════
   SYSTÈME I18N — DICTIONNAIRE FR / EN
════════════════════════════════════════════════════════════════ */
const translations = {
    fr: {
        nav_home:'Accueil', nav_profile:'Profil', nav_projects:'Projets', nav_ki:'Niveau de Ki', nav_contact:'Contact',
        theme_label:'Mode clair', theme_label_dark:'Mode sombre',
        audio_label:'Écouter', audio_label_stop:'Arrêter',
        hero_badge:'INFOGRAPHISTE • WEB DESIGNER',
        hero_h1_line1:'REPOUSSER LES', hero_h1_line2:'LIMITES DU WEB',
        hero_subtitle:"Inspiré par l'esthétique DB Moderne. Je fusionne design graphique, développement front-end et stratégie de communication pour créer des expériences digitales foudroyantes.",
        hero_btn_projects:'Mes projets', hero_btn_contact:'Me contacter', hero_btn_cv:'Mon CV',
        about_greeting:'Bonjour, je suis',
        about_bio:"Étudiant en 3ᵉ année de BUT MMI à l'IUT de la Guadeloupe, je suis actuellement infographiste chez Pixel Services. Mon objectif est de devenir infographiste ou web designer, en alliant créativité et développement web. Je développe mes compétences en programmation (HTML, CSS, PHP, Python) et en création graphique, avec une forte appétence pour les nouvelles technologies.",
        projects_title_prefix:'Mes', projects_title_accent:'Missions',
        filter_all:'Tous', filter_express:'Exprimer', filter_understand:'Comprendre', filter_design:'Concevoir',
        filter_develop:'Développer', filter_undertake:'Entreprendre', filter_enterprise:'Entreprise', filter_personal:'Personnel',
        skills_title_prefix:'Mon', skills_title_accent:'Niveau de Ki', skills_subtitle:'Logiciels & Technologies maîtrisés',
        contact_title_prefix:'PRÊT POUR LA', contact_title_accent:'FUSION ?',
        contact_intro:"Un projet en tête ou envie de discuter de mon parcours ? Envoyez-moi un signal, je réponds plus vite qu'un déplacement instantané.",
        contact_send:'Envoyer le message', contact_sending:'Transmission...', contact_sent:'Signal envoyé !',
        contact_success:'Fusion réussie ! Je vous répondrai sous peu.', contact_retry:'Réessayer',
        contact_error:"Erreur lors de l'envoi. Veuillez réessayer.",
        placeholder_name:'Votre Nom', placeholder_email:'Votre Email', placeholder_message:'Votre Message',
        cv_download:'Télécharger PDF', cv_footer:'Aperçu optimisé • Téléchargez le PDF pour la version complète',
        cv_title_main:'CURRICULUM', cv_title_sub:'VITAE',
        modal_view_details:'Voir en détails', modal_close:'Fermer', modal_prev:'Précédent', modal_next:'Suivant',
        preview_open:'Ouvrir', preview_loading:'Chargement...', preview_blocked_title:'Aperçu bloqué',
        preview_blocked_desc:"Ce site interdit l'affichage dans un cadre externe pour des raisons de sécurité.",
        preview_visit:'Visiter le site',
        footer_copy:'© 2026 Ethan Caraïbe — Portfolio Infographiste et Web Designer',
        footer_tagline:"Designé et codé avec l'énergie du Super Saiyan Blue.", footer_legal:'Mentions Légales',
        footer_cgu:"Conditions Générales d'Utilisation",
        legal_title:'Mentions', legal_title2:'Légales',
        legal_s1_title:'1. Édition du site',
        legal_s1_body:"Le présent site est édité par : Ethan Caraïbe — Étudiant en BUT Métiers du Multimédia et de l'Internet (MMI) à l'IUT de la Guadeloupe à Saint-Claude — Contact : ethan.caraibe@gmail.com — Ce site a pour vocation de présenter mon parcours, mes projets académiques et personnels, ainsi que mes compétences dans le domaine du multimédia, du web et du développement.",
        legal_s2_title:'2. Hébergement',
        legal_s2_body:'Le site est hébergé par : GitHub, Inc. — 88 Colin P. Kelly Jr Street, San Francisco, CA 94107, États-Unis — 🌐 https://pages.github.com',
        legal_s3_title:'3. Propriété Intellectuelle',
        legal_s3_body:"L'ensemble du contenu présent sur ce site (textes, images, vidéos, logos, graphismes, codes, etc.) est la propriété exclusive d'Ethan Caraïbe, sauf mention contraire. Toute reproduction, représentation, modification, publication ou adaptation, totale ou partielle, du contenu du site, quel que soit le moyen ou le procédé utilisé, est interdite sans autorisation écrite préalable. Les visuels issus de projets scolaires ou collectifs sont présentés à titre de démonstration et restent la propriété de leurs auteurs respectifs.",
        legal_s4_title:'4. Collecte de données',
        legal_s4_body:"Les données collectées via le formulaire de contact sont utilisées uniquement pour répondre aux messages envoyés par les visiteurs. Aucune donnée personnelle n'est transmise, vendue ou partagée avec des tiers. Conformément à la loi Informatique et Libertés et au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification et de suppression de vos données personnelles. Pour exercer ce droit, vous pouvez m'écrire à : ethan.caraibe@gmail.com",
        legal_s5_title:'5. Cookies',
        legal_s5_body:"Le contenu de ce site est fourni à titre informatif. Malgré le soin apporté à la rédaction et à la mise à jour, il peut containe des erreurs ou omissions. Ethan Caraïbe ne saurait être tenu responsable de l'utilisation faite des informations disponibles sur ce site, ni des dommages directs ou indirects pouvant en résulter.",
        legal_s6_title:'6. Crédits', legal_s6_body:'Design et développement : Ethan Caraïbe — Technologies utilisées : HTML, CSS, JavaScript — Hébergement : GitHub Pages',
        cgu_title:'Conditions Générales', cgu_title2:" d'Utilisation",
        cgu_s1_title:'1. Présentation et Objet',
        cgu_s1_body:"Les présentes Conditions Générales d'Utilisation (CGU) ont pour objet de définir les modalités d'accès et d'utilisation du portfolio numérique d'Ethan Caraïbe. En accédant à ce site, l'utilisateur accepte sans réserve l'intégralité des présentes conditions.",
        cgu_s2_title:'2. Accès au site et Responsabilité',
        cgu_s2_body:"L'éditeur s'efforce de permettre l'accès au site 24 heures sur 24, 7 jours sur 7, sauf en cas de force majeure ou d'un événement hors de son contrôle (opérations de maintenance, pannes réseau). L'utilisateur est seul responsable de la sécurité de son équipement informatique utilisé pour visiter le portfolio.",
        cgu_s3_title:'3. Propriété Intellectuelle et Usage',
        cgu_s3_body:"Tous les éléments constitutifs de ce site (animations de particules, logos, maquettes graphiques, codes sources JS/CSS, designs interactifs et réalisations artistiques) sont protégés par le droit d'auteur. Aucun droit d'usage commercial ou de republication n'est cédé à l'utilisateur sans un accord préalable écrit de l'éditeur.",
        cgu_s4_title:'4. Formulaire de contact et Données',
        cgu_s4_body:"L'utilisateur s'engage à ne fournir que des informations véridiques et constructives dans le formulaire de fusion/contact. Toute utilisation malveillante (SPAM, usurpation d'identité, propos offensants) pourra donner lieu à l'interdiction d'accès au site ou à des poursuites.",
        cgu_s5_title:'5. Liens Externes',
        cgu_s5_body:"Ce portfolio propose des liens vers des travaux externes (Canva, YouTube, sites hébergés). N'ayant aucun contrôle sur les serveurs de ces plateformes tierces, l'éditeur ne saurait être tenu responsable du contenu ou de l'indisponibilité de ces sites reliés.",
        cgu_s6_title:'6. Modification des conditions',
        cgu_s6_body:"L'éditeur se réserve le droit de modifier unilatéralement et à tout moment les termes des présentes CGU afin de les adapter aux évolutions réglementaires ou techniques du site.",
    },
    en: {
        nav_home:'Home', nav_profile:'Profile', nav_projects:'Projects', nav_ki:'Ki Level', nav_contact:'Contact',
        theme_label:'Light mode', theme_label_dark:'Dark mode',
        audio_label:'Listen', audio_label_stop:'Stop',
        hero_badge:'GRAPHIC DESIGNER • WEB DESIGNER',
        hero_h1_line1:'PUSHING THE', hero_h1_line2:'LIMITS OF THE WEB',
        hero_subtitle:'Inspired by Modern DB aesthetics. I merge graphic design, front-end development and communication strategy to craft electrifying digital experiences.',
        hero_btn_projects:'My projects', hero_btn_contact:'Contact me', hero_btn_cv:'My Resume',
        about_greeting:'Hello, I am',
        about_bio:"A 3rd-year BUT MMI student at the University Institute of Technology of Guadeloupe, I currently work as a graphic designer at Pixel Services. My goal is to become a graphic designer or web designer, blending creativity with web development. I am building expertise in programming (HTML, CSS, PHP, Python) and visual creation, with a strong passion for emerging technologies.",
        projects_title_prefix:'My', projects_title_accent:'Missions',
        filter_all:'All', filter_express:'Express', filter_understand:'Understand', filter_design:'Design',
        filter_develop:'Develop', filter_undertake:'Undertake', filter_enterprise:'Enterprise', filter_personal:'Personal',
        skills_title_prefix:'My', skills_title_accent:'Ki Level', skills_subtitle:'Software & Technologies mastered',
        contact_title_prefix:'READY FOR THE', contact_title_accent:'FUSION?',
        contact_intro:"Have a project in mind or want to discuss my background? Send me a signal — I reply faster than instant transmission.",
        contact_send:'Send message', contact_sending:'Sending...', contact_sent:'Message sent!',
        contact_success:"Fusion achieved! I'll get back to you shortly.", contact_retry:'Retry',
        contact_error:'An error occurred. Please try again.',
        placeholder_name:'Your Name', placeholder_email:'Your Email', placeholder_message:'Your Message',
        cv_download:'Download Resume', cv_footer:'Optimised preview • Download the Resume PDF for the full version',
        cv_title_main:'MY', cv_title_sub:'RESUME',
        modal_view_details:'View details', modal_close:'Close', modal_prev:'Previous', modal_next:'Next',
        preview_open:'Open', preview_loading:'Loading...', preview_blocked_title:'Preview blocked',
        preview_blocked_desc:'This site prevents embedding in an external frame for security reasons.',
        preview_visit:'Visit site',
        footer_copy:'© 2026 Ethan Caraïbe — Graphic Designer & Web Designer Portfolio',
        footer_tagline:'Designed and coded with Super Saiyan Blue energy.', footer_legal:'Legal Notice',
        footer_cgu:'Terms of Service',
        legal_title:'Legal', legal_title2:'Notice',
        legal_s1_title:'1. Site Publisher',
        legal_s1_body:"This site is published by: Ethan Caraïbe — Student in BUT Multimedia and Internet Professions (MMI) at the University Institute of Technology of Guadeloupe, Saint-Claude — Contact: ethan.caraibe@gmail.com — This site aims to showcase my academic and personal projects, as well as my skills in multimedia, web design and development.",
        legal_s2_title:'2. Hosting',
        legal_s2_body:'The site is hosted by: GitHub, Inc. — 88 Colin P. Kelly Jr Street, San Francisco, CA 94107, United States — 🌐 https://pages.github.com',
        legal_s3_title:'3. Intellectual Property',
        legal_s3_body:"All content on this site (texts, images, videos, logos, graphics, code, etc.) is the exclusive property of Ethan Caraïbe unless otherwise stated. Any reproduction, representation, modification, publication or adaptation, in whole or in part, by any means, is prohibited without prior written authorisation. Visuals from academic or collaborative projects are presented for demonstration purposes and remain the property of their respective authors.",
        legal_s4_title:'4. Data Collection',
        legal_s4_body:"Data collected via the contact form is used solely to respond to messages submitted by visitors. No personal data is sold or shared with third parties. In accordance with the French Data Protection Act and the GDPR, you have the right to access, correct and delete your personal data. To exercise this right, please write to: ethan.caraibe@gmail.com",
        legal_s5_title:'5. Cookies',
        legal_s5_body:"The content of this site is provided for informational purposes. Despite careful writing and regular updates, it may contain errors or omissions. Ethan Caraïbe cannot be held liable for the use made of the information available on this site, nor for any direct or indirect damages that may result.",
        legal_s6_title:'6. Credits', legal_s6_body:'Design and development: Ethan Caraïbe — Technologies used: HTML, CSS, JavaScript — Hosting: GitHub Pages',
        cgu_title:'Terms', cgu_title2:' of Service',
        cgu_s1_title:'1. Presentation and Purpose',
        cgu_s1_body:"These Terms of Service (TOS) aim to define the terms of access and use of Ethan Caraïbe's digital portfolio. By accessing this site, the user accepts these conditions entirely and without reservation.",
        cgu_s2_title:'2. Site Access and Liability',
        cgu_s2_body:"The publisher strives to allow access to the site 24/7, except in cases of force majeure or events beyond their control (maintenance operations, network failures). The user is solely responsible for the security of their computer equipment used to visit this portfolio.",
        cgu_s3_title:'3. Intellectual Property and Usage',
        cgu_s3_body:"All elements of this site (particle animations, logos, layouts, JS/CSS source code, interactive designs, and artistic works) are protected by copyright. No commercial rights or publication rights are transferred to the user without prior written agreement.",
        cgu_s4_title:'4. Contact Form and Data Use',
        cgu_s4_body:"The user agrees to provide only truthful and constructive information in the contact/fusion form. Any malicious use (SPAM, identity theft, offensive remarks) may lead to a ban from accessing the site or legal action.",
        cgu_s5_title:'5. External Links',
        cgu_s5_body:"This portfolio features links to external work (Canva, YouTube, hosted websites). Having no control over third-party platforms, the publisher cannot be held responsible for the content or availability of these linked websites.",
        cgu_s6_title:'6. Amendment of Terms',
        cgu_s6_body:"The publisher reserves the right to modify these Terms of Service unilaterally at any time in order to adapt them to legislative changes or technical updates to the site.",
    }
};

/* ════════════════════════════════════════════════════════════════
   DONNÉES PROJETS FR / EN
════════════════════════════════════════════════════════════════ */
const projectsData = {
    fr: [
        { id:1,  category:'Concevoir',    span:'lg:col-span-1', img:'images2/Plan-de-travail-9_3-cp.jpg',          link:'https://www.canva.com/design/DAGcM9i2V-E/j12JE-KQPLoScWYfmk4MVg/view?utm_content=DAGcM9i2V-E&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h3f354637ea',       title:"Création d'un logo unique, Dragonix le studio de jeu de combat Next Gen",                                          desc:"Création d'un logo original pour un studio de jeux de combat : choix typographique, ajout d'effets visuels et déclinaisons sur mock-ups pour garantir une identité cohérente, responsive et impactante sur tout support." },
        { id:2,  category:'Développer',   span:'lg:col-span-2', img:'images2/Culture-Gwada-1-cp.jpg',               link:'https://culture-guadeloupeenne.onrender.com/',                                                                                                                                             title:'SAE 1.05 : Produire un site web',                                                                                    desc:"Création en groupe d'un site web sur la culture guadeloupéenne, avec 4 pages thématiques. Participation à la recherche de contenu et au développement HTML/CSS du site. Travail collaboratif sur Figma." },
        { id:3,  category:'Exprimer',     span:'lg:col-span-2', img:'images2/miniature silent resilience.jpg',       link:'https://youtu.be/VSV6v8G04TM',                                                                                                                                                            title:'SAE 1.04 : Produire un contenu audio et visuel',                                                                     desc:"Conception en groupe d'un court-métrage de 3 minutes, de l'écriture du scénario au montage final. J'ai assuré la captation vidéo en tant que cameraman et participé à la direction artistique." },
        { id:4,  category:'Comprendre',   span:'lg:col-span-1', img:'images2/miniaVidéoCelluleEnov.png',             link:'https://youtu.be/i03nImANt1k?si=dkYsDkVAuSJQ318M',                                                                                                                                       title:'SAE 1.01 : Auditer une communication numérique',                                                                     desc:"Réalisation d'un audit de vidéos YouTube de la chaîne Cellule Enov. Évaluation de la qualité visuelle, sonore et de la pertinence du discours. Identification des points d'amélioration narrative." },
        { id:5,  category:'Concevoir',    span:'lg:col-span-2', img:'images2/Affiche-formations-IUT-de-la-Guadeloupe-V2.jpg', link:'https://www.canva.com/design/DAHIMUtqgO8/fYCuQAZ670ecZLy05_w7aw/view?utm_content=DAHIMUtqgO8&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h1e9a1d3205', title:'SAE 3.02 : Produire les contenus pour une communication plurimédia',                                               desc:"Conception d'un flyer institutionnel présentant les formations de l'IUT de la Guadeloupe : mise en page hiérarchisée, intégration de QR codes et respect de la charte graphique." },
        { id:6,  category:'Concevoir',    span:'lg:col-span-1', img:'images2/English.png',                           link:'https://www.canva.com/design/DAFyUNRujp8/2Ht9FxQdbNnNgxMOk1ualQ/view?utm_content=DAFyUNRujp8&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=ha472e828f2',       title:'SAE 1.02 : Recommandation de communication numérique',                                                               desc:"Conception d'une affiche promotionnelle en anglais destinée à valoriser l'apprentissage des langues. Élaboration d'une stratégie visuelle ludique pour rendre le message attractif." },
        { id:7,  category:'Développer',   span:'lg:col-span-2', img:'images2/minia site thé pays.png',               link:'https://xn--thpays-cva.com/',                                                                                                                                                              title:'SAE 2.02 : Concevoir un produit et sa communication',                                                                desc:"Conception d'un site vitrine pour une marque de thé glacé locale. Gestion du projet web complet : création des pages, diagramme de Gantt et suivi du planning. Projet associant design et code." },
        { id:8,  category:'Concevoir',    span:'lg:col-span-1', img:'images2/minia fiction.png',                     link:'https://youtu.be/w0WqZ_nK_O4',                                                                                                                                                            title:'Fiction Interro Surprise',                                                                                           desc:"Réalisation d'un court-métrage narratif muet produit en 24h : lors d'un examen, des étudiants profitent de l'absence du professeur pour tricher, avant d'être confrontés à une preuve vidéo de leur faute. Un projet alliant écriture à chute, mise en scène de la tension et montage rythmique individuel." },
        { id:9,  category:'Entreprendre', span:'lg:col-span-1', img:'images2/MINIATURE INTERVIEW CATHERINE.png',     link:'https://youtube.com/shorts/T5DOwkHfDKQ',                                                                                                                                                  title:'Interview de Catherine – Interface 2025',                                                                            desc:"Tournage et montage vidéo d'une interview professionnelle. Captation 9:16 avec DJI Osmo Pocket 3, ajout de sous-titres et habillage graphique cohérent." },
        { id:10, category:'Exprimer',     span:'lg:col-span-2', img:'images2/STORY FAQ IUT COUVERTURE.png',          link:'https://www.canva.com/design/DAGx9CwVrrQ/3KStPEcyRce4u7cCLn3sPA/view?utm_content=DAGx9CwVrrQ&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h15e5339ed6',      title:'SAE 4.CREA.02 – FAQ Instagram IUT',                                                                                  desc:"Création d'une story interactive de FAQ sur Canva pour informer les futurs étudiants. Conception visuelle conforme à la charte IUT et liens interactifs." },
        { id:11, category:'Entreprendre', span:'lg:col-span-1', img:'images2/SKINCARe minia.jpg',                    link:'https://www.canva.com/design/DAHFYCkiwZo/to-spjWBiNt7GXrk_penNw/view?utm_content=DAHFYCkiwZo&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h1b55e12191',       title:"Business Model Canvas d'Aroma-Zone",                                                                                 desc:"Analyse du modèle économique d'Aroma-Zone : étude de la stratégie bio et fait-maison de la marque, recherche des informations clés pour construire le projet et organisation du travail d'équipe pour préparer le script et le diaporama final." },
        { id:12, category:'Exprimer',     span:'lg:col-span-1', img:'images2/minia reel carburant.png',              link:'https://youtube.com/shorts/mgvHaR5NvaI',                                                                                                                                                  title:'Réel les prix du carburant en Guadeloupe',                                                                           desc:"Analyse de la fracture territoriale en Guadeloupe à travers l'étude du budget transport : une enquête multimédia sourcée et produite en 24h, démontrant l'impact du prix des carburants et des réformes du permis de conduire sur l'insertion professionnelle des jeunes." },
        { id:13, category:'Entreprendre', span:'lg:col-span-2', img:'images2/cropped-lebiklab_logo.png',             link:'https://www.canva.com/design/DAG_71LYvt0/E-dc-7gUghuCpi6Ds9jkjg/view?utm_content=DAG_71LYvt0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h170d9b2ce8',       title:'Atelier FAB Lab – Impression 3D',                                                                                    desc:"Atelier au BIK'LAB dédié à l'initiation à l'impression 3D. Découverte du prototypage numérique et réalisation d'une première impression additive." },
        { id:14, category:'Personnel',    span:'lg:col-span-1', img:'images2/ASSEMBLÉE GÉNÉRALE UNSA DOUANES FORMAT 15X20 (A5).png', link:'https://www.canva.com/design/DAGoIS1c7q4/eth_s_ypdGqZGoNMOuRzKA/view?utm_content=DAGoIS1c7q4&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h5bdeda2349', title:'Assemblée générale UNSA',                                                                                            desc:"Conception d'une affiche A3 pour l'UNSA Douanes. Déclinaison de la charte graphique et gestion de la chaîne de production avec imprimeur professionnel." },
        { id:15, category:'Personnel',    span:'lg:col-span-2', img:'images2/MINIATURE DOCUMENTAIRE JV.png',         link:'https://youtu.be/HjOy6rqdkDE',                                                                                                                                                            title:'Documentaire - Le Joueur Intérieur',                                                                                 desc:"Projet documentaire personnel explorant le jeu vidéo comme miroir de la psyché humaine. Esthétique minimaliste et montage introspectif rythmé." },
        { id:16, category:'Entreprise',   span:'lg:col-span-1', img:'images2/KAZETPALMIERS FICHIER SOURCE.jpg',       link:'https://www.canva.com/design/DAHIzfegOG8/c5maJHO-V37hjuGOOU0fHw/view?utm_content=DAHIzfegOG8&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=ha996d56ddf#1',    title:'Projet - Porte-clés Kaz et Palmiers',                                                                                desc:"Conception de supports physiques personnalisés pour l'entreprise Kaz et Palmiers : fabrication de trois porte-clés en bois pour identifier des bungalows haut de gamme, suite à une adaptation de format en cours de projet. Un projet alliant écoute active du client, ajustement de forme et préparation technique du tracé de découpe laser (cut contour)." },
        { id:17, category:'Entreprise',   span:'lg:col-span-1', img:'images2/GUIDE DETAILS PIXEL VF MINIA.jpg',      link:'https://www.canva.com/design/DAG2jRmLS-k/yG-q7Zp3gaWxksXL9TCs5A/view?utm_content=DAG2jRmLS-k&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h9060362844',       title:'Projet : Guide des Détails Techniques – PIXEL SERVICES',                                                             desc:"Conception d'un référentiel technique unifié pour l'agence Pixel Services : création d'un guide complet centralisant les formats et contraintes de production, suite à un constat de dispersion des informations techniques. Un projet alliant analyse des besoins internes, structuration de données complexes et design d'information sur Canva pour sécuriser le flux de production." },
        { id:18, category:'Entreprise',   span:'lg:col-span-1', img:'images2/Copie de MENU BOISSONS ECLAT DU BLÉ (40 x 60 cm).jpg', link:'https://www.canva.com/design/DAG_557veO8/IUnyJx3NNLRxzK8msQL7lg/view?utm_content=DAG_557veO8&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hec44966af5#4', title:"Création de supports signalétiques pour la boulangerie Éclat de Blé",                                                desc:"Conception de 4 panneaux de signalétique A2 pour la boulangerie Éclat de Blé : création d'une série de visuels intégrant une bande ardoise effaçable pour la mise à jour des prix, suite à un besoin de modularité tarifaire. Un projet alliant gestion de contraintes techniques d'impression, hiérarchisation d'un catalogue produit dense et déclinaison d'une identité visuelle artisanale pour optimiser l'information client." },
        { id:19, category:'Entreprise',   span:'lg:col-span-2', img:'images2/minia site pixel.png',                  link:'https://bluecr3.github.io/PIXEL-SERVICES/',                                                                                                                                               title:"Développement du site vitrine de l'agence Pixel Services",                                                          desc:"Création et déploiement du premier site vitrine statique pour l'imprimerie numérique Pixel Services : conception d'une interface moderne et performante hébergée sur GitHub Pages, suite à un besoin d'établir la visibilité en ligne de l'entreprise. Un projet alliant intégration web responsive, optimisation de l'expérience utilisateur sur mobile (iOS/Android) pour maximiser l'impact commercial local." },
        { id:20,  category:'Comprendre',   span:'lg:col-span-1', img:'images2/miniaPenchardVoyages.png',             link:'https://www.canva.com/design/DAF9hgMg5fk/tj5q3TEPBid1fU-6yhUauA/view?utm_content=DAF9hgMg5fk&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h8031a5b60c',         title:'Stratégie de communication pour l’agence Penchard Voyages',                                                         desc:"Analyse complète de la stratégie de communication de l’agence : identification des cibles, canaux utilisés et positionnement. Proposition d’axes d’amélioration à partir d’une étude de marché." },
        { id:21,  category:'Comprendre',   span:'lg:col-span-1', img:'images2/miniaVitalys.png',                     link:'https://www.canva.com/design/DAGW1Ov4n2Q/Iji-YDa1n1isiIAQfPCnmg/view?utm_content=DAGW1Ov4n2Q&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h3a6387f84c',         title:'Stratégie de communication pour Vitalys',                                                                           desc:"Réalisation d’une campagne complète pour la réouverture du centre Vitalys : définition des cibles, identité visuelle et plan média avec budget de 20 000 € et rétroplanning." },
        { id:22,  category:'Exprimer',    span:'lg:col-span-1', img:'images2/minia metaquest.png',                  link:'https://www.canva.com/design/DAG0YeYiDEw/jS4_F_MUy9tvxWzX6xksJQ/view?utm_content=DAG0YeYiDEw&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h85ea9254c4c',         title:"Manuel d'utilisation du Meta Quest 3",                                                                           desc:"Conception d’un guide utilisateur clair et illustré destiné à faciliter la prise en main du casque de réalité virtuelle Meta Quest 3. Ce projet présente les étapes d’installation, les principales fonctionnalités, les consignes de sécurité ainsi que les bonnes pratiques d’entretien. Réalisé avec une mise en page pédagogique et accessible, il vise à améliorer l’expérience utilisateur dès les premiers usages." },
        { id:23,  category:'Concevoir',    span:'lg:col-span-1', img:'images2/MINIATURE.png',                       link:'https://youtube.com/shorts/_V1Oz8q3NeA',                                                                                                                                                   title:"Carrousel Vidéo Présents mais absents",                                                                          desc:"C'est un carrousel vidéo explorant le paradoxe de la connectivité permanente et l'isolement socialCe projet interroge visuellement notre capacité à rester véritablement ancré dans l'instant présent. Une réalisation qui témoigne de ma sensibilité à capturer des enjeux contemporains complexes." },
        { id:24,  category:'Exprimer',    span:'lg:col-span-1', img:'images2/jv nouveautés (1080 x 1350 px).jpg',   link:'https://www.canva.com/design/DAG2bt7zJkE/GhNNqq9Zo-ztsU8SJrUZVA/watch?utm_content=DAG2bt7zJkE&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h262dabe7c3',         title:"Post éditorial J-V – Blo’k Actu",                                                                                desc:"Réalisation d’un post éditorial pour valoriser les sorties jeux vidéo. Recherche de titres, sélection d’extraits et respect de la ligne éditoriale du média." },  
        { id:25,  category:'Entreprise',  span:'lg:col-span-1', img:'images2/T-S pour l’association Herbe.jpg',     link:'https://www.canva.com/design/DAHM3OqteGY/lB-IctlxXqIKM--6eHwsLw/view?utm_content=DAHM3OqteGY&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h8e77df2341',          title:"Design graphique : Collection Tizilé pour l’association Herbe",                                                  desc:"Conception graphique pour l'association Herbe autour de l'univers « Tizilé ». Intégration typographique sur les illustrations fournies pour création de visuels prêts à imprimer. Mise en page déclinée sur T-shirts noirs et blancs." },  
    ],
    en: [
        { id:1,  category:'Design',    span:'lg:col-span-1', img:'images2/Plan-de-travail-9_3-cp.jpg',            link:'https://www.canva.com/design/DAGcM9i2V-E/j12JE-KQPLoScWYfmk4MVg/view?utm_content=DAGcM9i2V-E&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h3f354637ea',       title:'Unique Logo Creation — Dragonix Next-Gen Fighting Game Studio',                                                      desc:'Created an original logo for a fighting game studio: typographic choices, visual effects and mock-up adaptations to ensure a consistent, responsive and impactful identity across all media.' },
        { id:2,  category:'Develop',   span:'lg:col-span-2', img:'images2/Culture-Gwada-1-cp.jpg',                link:'https://culture-guadeloupeenne.onrender.com/',                                                                                                                                             title:'SAE 1.05 — Building a Website',                                                                                      desc:'Group creation of a website about Guadeloupean culture featuring 4 thematic pages. Contributed to content research and HTML/CSS development. Collaborative work on Figma.' },
        { id:3,  category:'Express',   span:'lg:col-span-2', img:'images2/miniature silent resilience.jpg',        link:'https://youtu.be/VSV6v8G04TM',                                                                                                                                                            title:'SAE 1.04 — Producing Audio & Visual Content',                                                                        desc:'Group production of a 3-minute short film, from script writing to final edit. I handled video capture as cameraman and contributed to art direction.' },
        { id:4,  category:'Understand',span:'lg:col-span-1', img:'images2/miniaVidéoCelluleEnov.png',              link:'https://youtu.be/i03nImANt1k?si=dkYsDkVAuSJQ318M',                                                                                                                                       title:'SAE 1.01 — Auditing Digital Communication',                                                                          desc:'Conducted an audit of YouTube videos from the Cellule Enov channel. Evaluated visual quality, sound quality and message relevance. Identified areas for narrative improvement.' },
        { id:5,  category:'Design',    span:'lg:col-span-2', img:'images2/Affiche-formations-IUT-de-la-Guadeloupe-V2.jpg', link:'https://www.canva.com/design/DAHIMUtqgO8/fYCuQAZ670ecZLy05_w7aw/view?utm_content=DAHIMUtqgO8&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h1e9a1d3205', title:'SAE 3.02 — Producing Multimedia Communication Content',                                                               desc:'Designed an institutional flyer presenting the programmes offered by the IUT of Guadeloupe: structured layout, QR code integration and adherence to brand guidelines.' },
        { id:6,  category:'Design',    span:'lg:col-span-1', img:'images2/English.png',                            link:'https://www.canva.com/design/DAFyUNRujp8/2Ht9FxQdbNnNgxMOk1ualQ/view?utm_content=DAFyUNRujp8&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=ha472e828f2',       title:'SAE 1.02 — Digital Communication Recommendation',                                                                    desc:'Designed an English-language promotional poster to promote language learning. Developed a playful visual strategy to make the message appealing.' },
        { id:7,  category:'Develop',   span:'lg:col-span-2', img:'images2/minia site thé pays.png',                link:'https://xn--thpays-cva.com/',                                                                                                                                                              title:'SAE 2.02 — Designing a Product and Its Communication',                                                               desc:'Built a showcase website for a local iced tea brand. Managed the full web project: page creation, Gantt chart and schedule tracking. Project combining design and code.' },
        { id:8,  category:'Design',    span:'lg:col-span-1', img:'images2/minia fiction.png',                      link:'https://youtu.be/w0WqZ_nK_O4',                                                                                                                                                            title:'Short Film — Surprise Quiz',                                                                                         desc:'Directed a silent narrative short film made in 24 hours: during an exam, students cheat while the teacher is absent, before being confronted with video evidence. A project combining twist storytelling, tension staging and individual rhythmic editing.' },
        { id:9,  category:'Undertake', span:'lg:col-span-1', img:'images2/MINIATURE INTERVIEW CATHERINE.png',      link:'https://youtube.com/shorts/T5DOwkHfDKQ',                                                                                                                                                  title:'Interview with Catherine — Interface 2025',                                                                          desc:'Shot and edited a professional interview video. 9:16 capture with DJI Osmo Pocket 3, subtitles added and consistent graphic styling applied.' },
        { id:10, category:'Express',   span:'lg:col-span-2', img:'images2/STORY FAQ IUT COUVERTURE.png',           link:'https://www.canva.com/design/DAGx9CwVrrQ/3KStPEcyRce4u7cCLn3sPA/view?utm_content=DAGx9CwVrrQ&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h15e5339ed6',      title:'SAE 4.CREA.02 — IUT Instagram FAQ Story',                                                                            desc:'Created an interactive FAQ story on Canva to inform prospective students. Visual design compliant with IUT brand guidelines with interactive links.' },
        { id:11, category:'Undertake', span:'lg:col-span-1', img:'images2/SKINCARe minia.jpg',                     link:'https://www.canva.com/design/DAHFYCkiwZo/to-spjWBiNt7GXrk_penNw/view?utm_content=DAHFYCkiwZo&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h1b55e12191',       title:'Aroma-Zone Business Model Canvas',                                                                                   desc:"Analysis of Aroma-Zone's business model: studying the brand's organic and DIY strategy, gathering key information and coordinating team work to prepare the final script and slideshow." },
        { id:12, category:'Express',   span:'lg:col-span-1', img:'images2/minia reel carburant.png',               link:'https://youtube.com/shorts/mgvHaR5NvaI',                                                                                                                                                  title:'Reel — Fuel Prices in Guadeloupe',                                                                                   desc:'Analysis of the territorial divide in Guadeloupe through a study of transport budgets: a sourced multimedia report produced in 24 hours, highlighting the impact of fuel prices and driving licence reforms on young people\'s employment prospects.' },
        { id:13, category:'Undertake', span:'lg:col-span-2', img:'images2/cropped-lebiklab_logo.png',              link:'https://www.canva.com/design/DAG_71LYvt0/E-dc-7gUghuCpi6Ds9jkjg/view?utm_content=DAG_71LYvt0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h170d9b2ce8',       title:'FAB Lab Workshop — 3D Printing',                                                                                     desc:'Workshop at BIK\'LAB introducing 3D printing. Explored digital prototyping and completed a first additive print.' },
        { id:14, category:'Personal',  span:'lg:col-span-1', img:'images2/ASSEMBLÉE GÉNÉRALE UNSA DOUANES FORMAT 15X20 (A5).png', link:'https://www.canva.com/design/DAGoIS1c7q4/eth_s_ypdGqZGoNMOuRzKA/view?utm_content=DAGoIS1c7q4&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h5bdeda2349', title:'UNSA General Assembly',                                                                                               desc:'Designed an A3 poster for UNSA Douanes. Applied brand guidelines and managed the production chain with a professional printer.' },
        { id:15, category:'Personal',  span:'lg:col-span-2', img:'images2/MINIATURE DOCUMENTAIRE JV.png',          link:'https://youtu.be/HjOy6rqdkDE',                                                                                                                                                            title:'Documentary — The Inner Player',                                                                                     desc:'Personal documentary project exploring video games as a mirror of the human psyche. Minimalist aesthetic and rhythmic introspective editing.' },
        { id:16, category:'Enterprise',span:'lg:col-span-1', img:'images2/KAZETPALMIERS FICHIER SOURCE.jpg',        link:'https://www.canva.com/design/DAHIzfegOG8/c5maJHO-V37hjuGOOU0fHw/view?utm_content=DAHIzfegOG8&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=ha996d56ddf#1',    title:'Project — Kaz et Palmiers Key Rings',                                                                                desc:'Designed custom physical supports for Kaz et Palmiers: production of three wooden key rings to identify premium bungalows, following a mid-project format adjustment. A project combining active client listening, shape adjustments and laser cutting file preparation (cut contour).' },
        { id:17, category:'Enterprise',span:'lg:col-span-1', img:'images2/GUIDE DETAILS PIXEL VF MINIA.jpg',       link:'https://www.canva.com/design/DAG2jRmLS-k/yG-q7Zp3gaWxksXL9TCs5A/view?utm_content=DAG2jRmLS-k&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h9060362844',       title:'Project — Technical Details Guide for PIXEL SERVICES',                                                               desc:'Designed a unified technical reference document for Pixel Services agency: a comprehensive guide centralising formats and production constraints. A project combining internal needs analysis, complex data structuring and information design on Canva to secure the production workflow.' },
        { id:18, category:'Enterprise',span:'lg:col-span-1', img:'images2/Copie de MENU BOISSONS ECLAT DU BLÉ (40 x 60 cm).jpg', link:'https://www.canva.com/design/DAG_557veO8/IUnyJx3NNLRxzK8msQL7lg/view?utm_content=DAG_557veO8&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hec44966af5#4', title:'Signage Materials for Éclat de Blé Bakery',                                                                          desc:'Designed 4 A2 signage panels for the Éclat de Blé bakery featuring an erasable chalkboard strip for price updates. A project combining print technical constraints, dense product catalogue hierarchy and artisanal visual identity adaptation.' },
        { id:19, category:'Enterprise',span:'lg:col-span-2', img:'images2/minia site pixel.png',                   link:'https://bluecr3.github.io/PIXEL-SERVICES/',                                                                                                                                               title:'Pixel Services Agency Website Development',                                                                          desc:'Created and deployed the first static showcase website for Pixel Services digital print agency: a modern, high-performance interface hosted on GitHub Pages, combining responsive web integration and mobile UX optimisation (iOS/Android) to maximise local commercial impact.' },
        { id:20,  category:'Understand',span:'lg:col-span-1', img:'images2/miniaPenchardVoyages.png',             link:'https://www.canva.com/design/DAF9hgMg5fk/tj5q3TEPBid1fU-6yhUauA/view?utm_content=DAF9hgMg5fk&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h8031a5b60c',         title:'Communication strategy for Penchard Voyages agency',                                                         desc:"Comprehensive analysis of the agency's communication strategy: identification of target audiences, channels used, and positioning. Proposal for areas of improvement based on market research." },
        { id:21,  category:'Understand',span:'lg:col-span-1', img:'images2/miniaVitalys.png',                       link:'https://www.canva.com/design/DAGW1Ov4n2Q/Iji-YDa1n1isiIAQfPCnmg/view?utm_content=DAGW1Ov4n2Q&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h3a6387f84c',         title:'Communication strategy for Vitalys',                                                                           desc:"Creation of a comprehensive campaign for the reopening of the Vitalys center: target definition, visual identity, and media plan with a €20,000 budget and master schedule." },
        { id:22,  category:'Express',   span:'lg:col-span-1', img:'images2/minia metaquest.png',                  link:'https://www.canva.com/design/DAG0YeYiDEw/jS4_F_MUy9tvxWzX6xksJQ/view?utm_content=DAG0YeYiDEw&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h85ea9254c4c',         title:"Meta Quest 3 User Manual",                                                                           desc:"Design of a clear and illustrated user guide to facilitate the onboarding of the Meta Quest 3 virtual reality headset. This project covers setup steps, key features, safety instructions, and maintenance best practices. Created with an educational and accessible layout, it aims to enhance the user experience from the very first use." },
        { id:23,  category:'Design',    span:'lg:col-span-1', img:'images2/MINIATURE.png',                       link:'https://youtube.com/shorts/_V1Oz8q3NeA',                                                                                                                                                   title:"Video Carousel: Present but Absent",                                                                          desc:"A video carousel exploring the paradox of constant connectivity and social isolation. This project visually examines our ability to remain truly grounded in the present moment. A creation that demonstrates my sensitivity to capturing complex contemporary issues." },
        { id:24,  category:'Express',    span:'lg:col-span-1', img:'images2/jv nouveautés (1080 x 1350 px).jpg',   link:'https://www.canva.com/design/DAG2bt7zJkE/GhNNqq9Zo-ztsU8SJrUZVA/watch?utm_content=DAG2bt7zJkE&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h262dabe7c3',        title:"Gaming Editorial Post – Blo’k Actu",                                                                           desc:"Creation of an editorial post to highlight new video game releases. Includes title research, selection of excerpts, and adherence to the media's editorial line." },  
        { id:25,  category:'Enterprise',  span:'lg:col-span-1', img:'images2/T-S pour l’association Herbe.jpg',     link:'https://www.canva.com/design/DAHM3OqteGY/lB-IctlxXqIKM--6eHwsLw/view?utm_content=DAHM3OqteGY&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h8e77df2341',          title:"Graphic Design: Tizilé Collection for the Herbe Association",                                       desc:"Graphic design for the Herbe association based on the 'Tizilé' universe. Typographic integration into provided illustrations to create print-ready visuals. Layout adapted for black and white T-shirts."}, 
    ]
};

/* ════════════════════════════════════════════════════════════════
   MAPPING DES CATÉGORIES POUR LE FILTRAGE INTERNE (Évite la casse)
════════════════════════════════════════════════════════════════ */
const categoryMapping = {
    fr: {
        'Tous': 'Tous',
        'Exprimer': 'Exprimer',
        'Comprendre': 'Comprendre',
        'Concevoir': 'Concevoir',
        'Développer': 'Développer',
        'Entreprendre': 'Entreprendre',
        'Entreprise': 'Entreprise',
        'Personnel': 'Personnel'
    },
    en: {
        'Tous': 'Tous',
        'Exprimer': 'Express',
        'Comprendre': 'Understand',
        'Concevoir': 'Design',
        'Développer': 'Develop',
        'Entreprendre': 'Undertake',
        'Entreprise': 'Enterprise',
        'Personnel': 'Personal'
    }
};

/* ════════════════════════════════════════════════════════════════
   ÉTAT GLOBAL
════════════════════════════════════════════════════════════════ */
let currentLang         = localStorage.getItem('lang') || 'fr';
let currentProjectIndex = 0;
let filteredProjects    = [];
let isSpeaking          = false;
let currentUtterance     = null;

const getProjects = () => projectsData[currentLang] || projectsData.fr;

/* ════════════════════════════════════════════════════════════════
   ACCESSIBILITÉ — SYNTHÈSE VOCALE (SPEECH SYNTHESIS)
════════════════════════════════════════════════════════════════ */
function toggleSpeech() {
    const t = translations[currentLang];
    const btn = document.getElementById('audio-accessibility-btn');
    const label = document.getElementById('audio-label');
    const icon = document.getElementById('audio-icon');

    if (isSpeaking) {
        // Arrêter la lecture en cours
        window.speechSynthesis.cancel();
        isSpeaking = false;
        if (btn) btn.classList.remove('playing');
        if (label) label.textContent = t.audio_label;
        if (icon) {
            icon.className = 'fas fa-volume-up';
        }
    } else {
        // Commencer la lecture
        isSpeaking = true;
        if (btn) btn.classList.add('playing');
        if (label) label.textContent = t.audio_label_stop;
        if (icon) {
            icon.className = 'fas fa-volume-mute';
        }

        // Récupérer le texte à lire de manière structurée et accessible
        let textToRead = "";
        
        if (currentLang === 'fr') {
            textToRead += "Bienvenue sur le portfolio d'Ethan Caraïbe, infographiste et web designer. ";
            textToRead += "Titre principal : Repousser les limites du web. ";
            textToRead += "Présentation : " + t.about_bio + " ";
            textToRead += "Voici mes missions principales : ";
            getProjects().forEach((proj, idx) => {
                textToRead += `Mission numéro ${idx + 1} : ${proj.title}. Catégorie : ${proj.category}. Description : ${proj.desc}. `;
            });
            textToRead += "Fin de la lecture du portfolio.";
        } else {
            textToRead += "Welcome to Ethan Caraïbe's portfolio, graphic designer and web designer. ";
            textToRead += "Main title: Pushing the limits of the web. ";
            textToRead += "Profile summary: " + t.about_bio + " ";
            textToRead += "Here are my main projects: ";
            getProjects().forEach((proj, idx) => {
                textToRead += `Project number ${idx + 1}: ${proj.title}. Category: ${proj.category}. Description: ${proj.desc}. `;
            });
            textToRead += "End of portfolio reading.";
        }

        // Création de l'objet de synthèse vocale
        currentUtterance = new SpeechSynthesisUtterance(textToRead);
        
        // Configuration de la langue correcte pour la voix
        currentUtterance.lang = currentLang === 'fr' ? 'fr-FR' : 'en-US';
        currentUtterance.rate = 1.0; // vitesse normale

        // Callback de fin de lecture naturelle
        currentUtterance.onend = function() {
            isSpeaking = false;
            if (btn) btn.classList.remove('playing');
            if (label) label.textContent = t.audio_label;
            if (icon) {
                icon.className = 'fas fa-volume-up';
            }
        };

        currentUtterance.onerror = function() {
            isSpeaking = false;
            if (btn) btn.classList.remove('playing');
            if (label) label.textContent = t.audio_label;
            if (icon) {
                icon.className = 'fas fa-volume-up';
            }
        };

        // Lancer la lecture
        window.speechSynthesis.speak(currentUtterance);
    }
}

/* ════════════════════════════════════════════════════════════════
   I18N — setLang
════════════════════════════════════════════════════════════════ */
function setLang(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    const t = translations[lang];

    // Si on est en train de parler et qu'on change de langue, on arrête
    if (isSpeaking) {
        toggleSpeech();
    }

    // Textes [data-translate]
    document.querySelectorAll('[data-translate]').forEach(el => {
        const v = t[el.dataset.translate];
        if (v !== undefined) el.textContent = v;
    });

    // Placeholders formulaire
    const n = document.getElementById('input-name');
    const e = document.getElementById('input-email');
    const m = document.getElementById('input-message');
    if (n) n.placeholder = t.placeholder_name;
    if (e) e.placeholder = t.placeholder_email;
    if (m) m.placeholder = t.placeholder_message;

    // Labels filtres [data-filter-key]
    document.querySelectorAll('[data-filter-key]').forEach(btn => {
        const v = t[btn.dataset.filterKey];
        if (v !== undefined) btn.textContent = v;
    });

    // Boutons FR / EN
    document.getElementById('btn-fr')?.classList.toggle('active', lang === 'fr');
    document.getElementById('btn-en')?.classList.toggle('active', lang === 'en');

    // lang HTML
    document.documentElement.lang = lang;

    // Label thème
    const lbl = document.getElementById('theme-label');
    if (lbl) {
        const isLight = document.documentElement.classList.contains('light');
        lbl.textContent = isLight ? t.theme_label_dark : t.theme_label;
    }

    // Label Audio d'accessibilité
    const audioLbl = document.getElementById('audio-label');
    if (audioLbl) {
        audioLbl.textContent = isSpeaking ? t.audio_label_stop : t.audio_label;
    }

    // Re-rendre la grille
    const activeBtn = document.querySelector('.filter-btn.active');
    renderProjects(activeBtn?.dataset.category || 'Tous');
}

/* ════════════════════════════════════════════════════════════════
   RENDU PROJETS
════════════════════════════════════════════════════════════════ */
function renderProjects(filter = 'Tous') {
    const grid     = document.getElementById('project-grid');
    const projects = getProjects();
    
    // Mappe de manière intelligente le filtre UI (toujours en Français dans le HTML) vers le dataset correspondant
    const targetCategory = categoryMapping[currentLang][filter] || filter;
    filteredProjects = filter === 'Tous' ? projects : projects.filter(p => p.category === targetCategory);

    grid.innerHTML = '';

    // Fragment pour un seul reflow DOM
    const frag = document.createDocumentFragment();
    filteredProjects.forEach((p, index) => {
        const card = document.createElement('div');
        card.className = `glass-card project-card ${p.span}`;
        card.style.cssText = 'display:flex;flex-direction:column;justify-content:flex-end;padding:2rem;position:relative;overflow:hidden;';
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        card.setAttribute('aria-label', `${translations[currentLang].modal_view_details} : ${p.title}`);
        card.addEventListener('click', () => openProjectModal(index));
        card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openProjectModal(index); } });
        card.innerHTML = `
            <div class="project-card-img" style="background-image:url('${p.img}')" aria-hidden="true"></div>
            <div class="project-card-content">
                <span class="project-card-category">${p.category}</span>
                <h3 class="project-card-title">${p.title}</h3>
            </div>`;
        frag.appendChild(card);
    });
    grid.appendChild(frag);
}

/* ════════════════════════════════════════════════════════════════
   FILTRES
════════════════════════════════════════════════════════════════ */
document.getElementById('filter-container')?.addEventListener('click', e => {
    if (!e.target.classList.contains('filter-btn')) return;
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
    renderProjects(e.target.dataset.category);
});

/* ════════════════════════════════════════════════════════════════
   MODAL PROJET
════════════════════════════════════════════════════════════════ */
let _lastFocused = null;

function openProjectModal(index) {
    currentProjectIndex = index;
    const p = filteredProjects[index];
    if (!p) return;
    _lastFocused = document.activeElement;

    document.getElementById('modal-title').textContent = p.title;
    document.getElementById('modal-cat').textContent   = p.category;
    document.getElementById('modal-desc').textContent  = p.desc;
    const img = document.getElementById('modal-img');
    img.src = p.img; img.alt = p.title;
    document.getElementById('modal-link').href = p.link;

    showModal('project-modal');
}

function closeProjectModal() {
    hideModal('project-modal');
    _lastFocused?.focus();
}

function changeProject(dir) {
    currentProjectIndex = (currentProjectIndex + dir + filteredProjects.length) % filteredProjects.length;
    openProjectModal(currentProjectIndex);
}

function closeModalOnOverlay(e) { if (e.target.id === 'project-modal') closeProjectModal(); }

/* ════════════════════════════════════════════════════════════════
   MODAL CV
════════════════════════════════════════════════════════════════ */
function toggleModal()  { toggleOverlay('cv-modal'); }
function closeOnOverlay(e) { if (e.target.id === 'cv-modal') toggleModal(); }

/* ════════════════════════════════════════════════════════════════
   MODAL PREVIEW
════════════════════════════════════════════════════════════════ */
function detectLinkType(url) {
    if (/youtube\.com|youtu\.be/.test(url)) return 'youtube';
    if (/canva\.com/.test(url))             return 'canva';
    if (/docs\.google\.com\/viewer/.test(url)) return 'gdocs';
    return 'iframe';
}

function getYoutubeEmbedUrl(url) {
    let m;
    m = url.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/); if (m) return `https://www.youtube.com/embed/${m[1]}?autoplay=1&rel=0`;
    m = url.match(/youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/); if (m) return `https://www.youtube.com/embed/${m[1]}?autoplay=1&rel=0`;
    m = url.match(/[?&]v=([a-zA-Z0-9_-]{11})/); if (m) return `https://www.youtube.com/embed/${m[1]}?autoplay=1&rel=0`;
    return null;
}

function getCanvaEmbedUrl(url) {
    const m = url.match(/canva\.com\/design\/([^/]+)\/([^/]+)\/(view|watch)/);
    return m ? `https://www.canva.com/design/${m[1]}/${m[2]}/${m[3]}?embed` : url;
}

function openPreviewModal() {
    const p = filteredProjects[currentProjectIndex];
    if (!p) return;

    const iframe     = document.getElementById('preview-iframe');
    const loading    = document.getElementById('preview-loading');
    const fallback   = document.getElementById('preview-fallback');
    const imgBlock   = document.getElementById('preview-img-block');
    const badge      = document.getElementById('preview-type-badge');

    fallback.classList.remove('visible');
    loading.classList.remove('hidden');
    iframe.style.display    = 'none';
    iframe.src              = '';
    imgBlock.hidden         = true;

    document.getElementById('preview-title').textContent       = p.title;
    document.getElementById('preview-url-display').textContent = p.link;
    document.getElementById('preview-open-link').href          = p.link;
    document.getElementById('fallback-link').href              = p.link;

    const type = detectLinkType(p.link);
    badge.hidden = false;

    if (type === 'youtube') {
        badge.textContent = '▶ YouTube';
        const url = getYoutubeEmbedUrl(p.link);
        if (url) {
            iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen');
            iframe.setAttribute('allowfullscreen', '');
            iframe.style.display = 'block';
            iframe.src = url;
        } else showPreviewCanva(p);
    } else if (type === 'canva') {
        badge.textContent = '✦ Canva';
        iframe.setAttribute('allow', 'fullscreen'); iframe.style.display = 'block'; iframe.src = getCanvaEmbedUrl(p.link);
    } else if (type === 'gdocs') {
        badge.textContent = '📄 PDF';
        iframe.style.display = 'block'; iframe.removeAttribute('sandbox'); iframe.src = p.link;
    } else {
        badge.hidden = true; iframe.style.display = 'block'; iframe.src = p.link;
    }

    showModal('preview-modal');
}

function showPreviewCanva(p) {
    document.getElementById('preview-loading').classList.add('hidden');
    document.getElementById('preview-big-img').src        = p.img;
    document.getElementById('preview-canva-title').textContent = p.title;
    document.getElementById('preview-canva-btn').href     = p.link;
    const block = document.getElementById('preview-img-block');
    block.hidden = false;
    block.style.display = 'flex';
}

function onIframeLoad() {
    document.getElementById('preview-loading').classList.add('hidden');
    try {
        const doc = document.getElementById('preview-iframe').contentDocument || document.getElementById('preview-iframe').contentWindow.document;
        if (doc && (doc.URL === 'about:blank' || doc.body.innerHTML.trim() === '')) showPreviewFallback();
    } catch { /* cross-origin = ok */ }
}

function showPreviewFallback() {
    document.getElementById('preview-loading').classList.add('hidden');
    document.getElementById('preview-fallback').classList.add('visible');
}

function closePreviewModal() {
    document.getElementById('preview-iframe').src = '';
    hideModal('preview-modal');
}

function closePreviewOnOverlay(e) { if (e.target.id === 'preview-modal') closePreviewModal(); }

/* ════════════════════════════════════════════════════════════════
   MENTIONS LÉGALES & CGU
════════════════════════════════════════════════════════════════ */
function toggleMentionsModal()     { toggleOverlay('mentions-modal'); }
function closeMentionsOnOverlay(e) { if (e.target.id === 'mentions-modal') toggleMentionsModal(); }

function toggleCguModal()     { toggleOverlay('cgu-modal'); }
function closeCguOnOverlay(e) { if (e.target.id === 'cgu-modal') toggleCguModal(); }

/* ════════════════════════════════════════════════════════════════
   MENU MOBILE
════════════════════════════════════════════════════════════════ */
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const open = menu.classList.toggle('active');
    document.body.style.overflow = open ? 'hidden' : '';
    const btn = document.querySelector('.burger-btn');
    if (btn) btn.setAttribute('aria-expanded', String(open));
}

/* ════════════════════════════════════════════════════════════════
   TOGGLE THÈME
════════════════════════════════════════════════════════════════ */
function toggleTheme() {
    const root    = document.documentElement;
    const isLight = root.classList.toggle('light');
    const t       = translations[currentLang];
    document.getElementById('theme-icon').className = isLight ? 'fas fa-moon' : 'fas fa-sun';
    document.getElementById('theme-label').textContent = isLight ? t.theme_label_dark : t.theme_label;
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    updateParticleColors();
}

function updateParticleColors() {
    const isLight = document.documentElement.classList.contains('light');
    document.querySelectorAll('.energy-particle').forEach(p => {
        p.style.background = isLight ? '#0077CC' : 'white';
    });
}

/* ════════════════════════════════════════════════════════════════
   HELPERS MODALES (évite la duplication)
════════════════════════════════════════════════════════════════ */
function showModal(id) {
    const el = document.getElementById(id);
    el.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    setTimeout(() => { el.querySelector('a[href],button:not([disabled])')?.focus(); }, 50);
}
function hideModal(id) {
    document.getElementById(id).style.display = 'none';
    document.body.style.overflow = '';
}
function toggleOverlay(id) {
    const el = document.getElementById(id);
    const v  = el.style.display === 'flex';
    el.style.display = v ? 'none' : 'flex';
    document.body.style.overflow = v ? '' : 'hidden';
}

/* ════════════════════════════════════════════════════════════════
   PARTICULES D'ÉNERGIE (mutualisées, throttlées)
════════════════════════════════════════════════════════════════ */
function createEnergyParticles() {
    const field   = document.getElementById('energy-field');
    const isLight = () => document.documentElement.classList.contains('light');

    setInterval(() => {
        const p    = document.createElement('div');
        p.className = 'energy-particle';
        const side = Math.floor(Math.random() * 4);
        const x    = side === 1 ? 110 : side === 3 ? -10 : Math.random() * 100;
        const y    = side === 0 ? -10 : side === 2 ? 110 : Math.random() * 100;
        p.style.setProperty('--sx', x + 'vw');
        p.style.setProperty('--sy', y + 'vh');
        const size = Math.random() * 3 + 2;
        p.style.width  = size + 'px';
        p.style.height = size + 'px';
        const light = isLight();
        p.style.background = light ? '#0077CC' : 'white';
        p.style.boxShadow  = light ? '0 0 8px #0077CC' : '0 0 8px #fff';
        field.appendChild(p);
        setTimeout(() => p.remove(), 4000);
    }, 200); // 200ms au lieu de 150 : économise ~25% de travail DOM
}

/* ════════════════════════════════════════════════════════════════
   PARALLAXE — UN SEUL LISTENER mutualisé + requestAnimationFrame
════════════════════════════════════════════════════════════════ */
(function initParallax() {
    let mx = 0, my = 0, raf = null;
    const genki = document.querySelector('.genkidama-container');
    const aura  = document.querySelector('.aura-bg');

    document.addEventListener('mousemove', e => {
        mx = (e.clientX / window.innerWidth  - 0.5) * 40;
        my = (e.clientY / window.innerHeight - 0.5) * 40;
        if (!raf) raf = requestAnimationFrame(() => {
            if (genki) genki.style.transform = `translate(calc(-50% + ${mx}px), calc(-50% + ${my}px))`;
            if (aura)  aura.style.transform  = `translate(calc(-50% + ${mx}px), calc(-50% + ${my}px)) scale(1.1)`;
            raf = null;
        });
    }, { passive: true });
})();

/* ════════════════════════════════════════════════════════════════
   APPARITION SCROLL — IntersectionObserver (class CSS)
════════════════════════════════════════════════════════════════ */
const scrollObs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); scrollObs.unobserve(e.target); } });
}, { threshold: 0.08 });

document.querySelectorAll('section').forEach(s => { s.classList.add('scroll-reveal'); scrollObs.observe(s); });

/* ════════════════════════════════════════════════════════════════
   FORMULAIRE CONTACT
════════════════════════════════════════════════════════════════ */
document.getElementById('contact-form')?.addEventListener('submit', async e => {
    e.preventDefault();
    const t       = translations[currentLang];
    const btn     = document.getElementById('submit-btn');
    const btnText = document.getElementById('btn-text');
    const status  = document.getElementById('form-status');

    btn.disabled = true;
    btnText.innerHTML = `<i class="fas fa-spinner fa-spin" aria-hidden="true"></i> ${t.contact_sending}`;
    status.textContent = '';
    status.className = 'form-status';

    try {
        const res = await fetch(e.target.action, { method: 'POST', body: new FormData(e.target), headers: { Accept: 'application/json' } });
        if (res.ok) {
            btnText.innerHTML = `<i class="fas fa-check" aria-hidden="true"></i> ${t.contact_sent}`;
            status.textContent = t.contact_success;
            status.classList.add('text-blue-400');
            e.target.reset();
            setTimeout(() => { btn.disabled = false; btnText.textContent = t.contact_send; status.textContent = ''; }, 5000);
        } else throw new Error();
    } catch {
        btn.disabled = false;
        btnText.textContent = t.contact_retry;
        status.textContent = t.contact_error;
        status.classList.add('text-red-500');
    }
});

/* ════════════════════════════════════════════════════════════════
   FERMETURE ESCAPE
════════════════════════════════════════════════════════════════ */
document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    if (document.getElementById('preview-modal').style.display === 'flex') { closePreviewModal(); return; }
    if (document.getElementById('project-modal').style.display === 'flex') { closeProjectModal(); return; }
    if (document.getElementById('cv-modal').style.display === 'flex')      { toggleModal();       return; }
    if (document.getElementById('mentions-modal').style.display === 'flex'){ toggleMentionsModal();return; }
    if (document.getElementById('cgu-modal').style.display === 'flex')     { toggleCguModal();     return; }
});

/* ════════════════════════════════════════════════════════════════
   INITIALISATION (defer → DOM déjà prêt)
════════════════════════════════════════════════════════════════ */
(function init() {
    // Thème (déjà appliqué en tête HTML, juste synchro icône)
    if (document.documentElement.classList.contains('light')) {
        document.getElementById('theme-icon').className = 'fas fa-moon';
    }

    // Langue
    const lang = localStorage.getItem('lang') || 'fr';
    currentLang = lang;
    setLang(lang); // met à jour DOM + grille

    // Particules & effets
    createEnergyParticles();
})();