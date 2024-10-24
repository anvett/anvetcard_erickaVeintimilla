"use client";

import React from "react";
import { motion } from "framer-motion";
import ProfileCard from "../components/profile/ProfileCard/ProfileCard.jsx";
import ContactButtons from "@/components/profile/ContactButtons/ContactButtons.jsx";
import SocialMediaIcons from "@/components/profile/SocialMediaIcons/SocialMediaIcons.jsx";
import GalleryWithModal from "@/components/cardContent/GalleryWithModal/GalleryWithModal.jsx";
import Slider from "@/components/cardContent/Slider/Slider.jsx";
import EducationExperience from "@/components/cardContent/EducationExperience/EducationExperience.jsx";
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer.jsx";
import QRDisplay from "@/components/cardContent/QRDisplay/QRDispaly.jsx";
import PaymentInfo from "@/components/cardContent/PaymentInfo/PaymentInfo.jsx";

// Animaciones básicas
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: "easeInOut" } },
};

const slideInLeft = {
  hidden: { x: "-100vw", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

const slideInRight = {
  hidden: { x: "100vw", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

export default function Home() {
  //---------------------------------------------------------
  // Perfil
  //---------------------------------------------------------

  const profileData = {
    name: "Ericka Veintimilla",
    title: "Magister en Marketing y Gerencia",
    image: "/assets/images/profile/profile.jpg",
    description:
      "Experta en marketing con una maestría en Marketing Digital, se especializa en crear estrategias digitales innovadoras y efectivas. Su enfoque se centra en impulsar el crecimiento de la marca y optimizar la presencia en línea a través de tácticas de marketing de vanguardia.",
    phone: "+593992542248",
  };

  const whatsappMessage = "Hola Ericka, me gustaría contactarte";

  //---------------------------------------------------------
  // Datos de contacto
  //---------------------------------------------------------

  //---------------------------------------------------------
  //Iconos de contacto

  const contacts = [
    {
      type: "location",
      icon: "/assets/icons/ubicacion_w.jpeg",
      text: "Dirección",
      address:
        "Abdón Calderón 181 y Angel Acosta, Urb. Acosta Soberón, Conocoto, Quito, Ecuador",
      hours: "Lunes a Viernes, 9:00 AM - 6:00 PM",
      googleMapsLink:
        "https://www.google.com/maps/place/ANVETCORP+Inform%C3%A1tica+y+Tecnolog%C3%ADa/@-0.2987752,-78.4889591,18z/data=!4m20!1m13!4m12!1m4!2m2!1d-78.4802151!2d-0.3126909!4e1!1m6!1m2!1s0x91d5a2b0678255c3:0xcba1b16c406a929d!2sanvetcorp!2m2!1d-78.4897359!2d-0.2979049!3m5!1s0x91d5a2b0678255c3:0xcba1b16c406a929d!8m2!3d-0.2979049!4d-78.4897359!16s%2Fg%2F11bwfmfm_t?entry=ttu&g_ep=EgoyMDI0MDkzMC4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      type: "phone",
      icon: "/assets/icons/call_w.jpeg",
      action: "tel:+593992542248",
      text: "Llamar",
    },
    {
      type: "email",
      icon: "/assets/icons/email_w.jpeg",
      action: "mailto:eriveinti@gmail.com.com",
      text: "email",
    },
    {
      type: "whatsapp",
      icon: "/assets/icons/whatsapp_w.png",
      action: "https://wa.me/+593992542248",
      text: "WhatsApp",
    },
  ];

  //---------------------------------------------------------
  // Social media
  //---------------------------------------------------------

  //---------------------------------------------------------
  //Iconos y botones de redes sociales

  const socialMediaLinks = [
    {
      type: "facebook",
      icon: "facebook_w.png",
      url: "https://www.facebook.com/likeatemkt?mibextid=ZbWKwL",
      text: "Facebook",
    },
    {
      type: "instagram",
      icon: "instagram_w.png",
      url: "https://www.instagram.com/likeate.digital/?igsh=bzh1c3l0NGt2MmYx",
      text: "Instagram",
    },
    {
      type: "tiktok",
      icon: "tiktok_w.png",
      url: "https://www.tiktok.com/@marketing.con.ericka?_t=8knFmU8Fup3&_r=1",
      text: "Tiktok",
    },
  ];

  //---------------------------------------------------------
  // Galería de productos y/servicios con imagen o video
  //---------------------------------------------------------

  const items = [
    {
      type: "image",
      title: "Manejo de Redes Sociales",
      image: "/assets/images/services/producto1.jpeg",
      description: [
        "Plan Básico",
        "Plan Emprendedor",
        "Plan Profesional",
        "Plan Transformación Digital",
        "Campaña Express",
        "Plan TikTok Básico",
        "Plan TikTok Pro",
      ],
      highlight:
        "Si necesitas mejorar el manejo de tus redes sociales, lo hacemos por ti, creando contenido, publicando en el horario adecuado, pautando publicidad exitosa, logrando crecer y vender como esperas. Elige el plan que más te guste.",
      phone: "+593992542248",
    },
    {
      type: "image",
      title: "Asesorías 1.1",
      image: "/assets/images/services/producto2.jpeg",
      description: [
        "Asesoría Express de tu perfil de Instagram",
        "Asesoría y auditoría de redes sociales",
        "Asesoría de preguntas y respuestas",
        "Asesoría de contenido",
      ],
      highlight:
        "Si eres una marca, emprendedor, pequeña o gran empresa y quieres impulsar y mejorar tu imagen digital, he creado asesorías con temas específicos según tus necesidades para que logres crecer y vender en el mundo digital.",
      phone: "+593992542248",
    },
    {
      type: "image",
      title: "Diseño de Marca",
      image: "/assets/images/services/producto3.jpeg",
      description: [
        "Logotipo",
        "Logotipo + manual de marca",
        "Manual de marca",
        "Registro de marca",
      ],
      highlight:
        "Tu marca debe representar e identificar la esencia y el corazón de quién está detrás de lo que eres. Te ayudamos a visualizarla creando el diseño que necesitas para que seas una marca inolvidable y legal.",
      phone: "+593992542248",
    },
    {
      type: "image",
      title: "Manejo de Redes Sociales",
      image: "/assets/images/services/service1.jpg",
      description: [
        "Mejoramos el manejo de tus redes sociales con estrategias de contenido, publicaciones en horarios adecuados, y publicidad exitosa.",
      ],
      highlight:
        "Creación de contenido personalizado para hacer crecer y vender a través de redes sociales.",
      phone: "+593992542248",
    },
    {
      type: "image",
      title: "Consultoría y Asesoría de Marketing",
      image: "/assets/images/services/service2.jpg",
      description: [
        "Consultoría personalizada para marcas, emprendedores, y empresas, diseñada para mejorar su presencia y rendimiento en el mundo digital.",
      ],
      highlight:
        "Asesorías específicas para ayudarte a crecer y vender en el mundo digital.",
      phone: "+593992542248",
    },
    {
      type: "image",
      title: "Branding y Creación de Marca",
      image: "/assets/images/services/service3.jpg",
      description: [
        "Creamos el diseño y branding que representa la esencia de tu marca, haciéndola inolvidable y legal.",
      ],
      highlight:
        "Te ayudamos a desarrollar una identidad de marca sólida y profesional que conecte con tu audiencia.",
      phone: "+593992542248",
    },
  ];

  //---------------------------------------------------------
  //Slider de productos y servicios
  //---------------------------------------------------------

  const slidesData = [
    {
      image: "/assets/images/slides/social_media_management.jpeg",
      title: "Manejo de Redes Sociales",
    },
    {
      image: "/assets/images/slides/consultoria_marketing.jpeg",
      title: "Consultoría de Marketing Digital",
    },
    {
      image: "/assets/images/slides/branding.jpeg",
      title: "Branding y Creación de Marca",
    },
    {
      image: "/assets/images/slides/cursos_online.jpeg",
      title: "Cursos Online ",
    },
    {
      image: "/assets/images/slides/campanas_publicitarias.jpeg",
      title: "Manejo de campañas publicitarias",
    },
  ];
  

  //---------------------------------------------------------
  // Accordion de experiencia laboral y educación
  //---------------------------------------------------------

  const entries = [
    {
      date: "2021",
      title: "Ingeniera en Marketing",
      description: "Universidad Tecnológica Equinoccial",
      details: [
        "Ericka Veintimilla se graduó en Marketing en la Universidad Tecnológica Equinoccial, una institución reconocida por su enfoque innovador y práctico en la enseñanza del marketing.",
        "Adquirió una base sólida en principios de marketing, estrategias de mercado y comportamiento del consumidor.",
        "Durante su licenciatura, participó en proyectos enfocados en análisis de mercado y estrategias de branding.",
        "Desarrolló habilidades en la creación de campañas publicitarias y estudios de mercado para negocios locales.",
      ],
      image: "/assets/images/education/ute_logo.jpeg",
    },
    {
      date: "2023",
      title: "Máster en Marketing Digital",
      description: "Escuela de Postgrado Newman",
      details: [
        "Complementó su educación con un máster en Marketing Digital en la Escuela de Postgrado Newman.",
        "Especialización en las últimas tendencias y herramientas del marketing digital, incluyendo SEO, redes sociales y análisis de datos.",
        "Adoptó estrategias digitales innovadoras para mejorar la presencia online de marcas y empresas.",
        "Desarrolló campañas digitales para potenciar el engagement en plataformas como Facebook, Instagram y LinkedIn.",
      ],
      image: "/assets/images/education/newman_logo.png",
    },
    {
      date: "2022 - Presente",
      title: "Experta en Creación de Contenido y Manejo de Redes Sociales",
      description: "Consultora de Marketing Digital",
      details: [
        "Asesorando a empresas en la creación de contenido estratégico para diversas plataformas digitales.",
        "Gestión de redes sociales para marcas, logrando un aumento significativo en seguidores y engagement.",
        "Desarrollo de campañas creativas que incrementaron la visibilidad y conversión en las plataformas de redes sociales.",
        "Estrategias de contenido orientadas a mejorar la identidad de marca y generar leads cualificados.",
      ],
      image: "/assets/images/education/service3.jpg",
    },
    {
      date: "2022 - Presente",
      title: "Fundadora de Likeate Digital",
      description: "Agencia de Marketing Digital",
      details: [
        "Lidera la agencia Likeate Digital, enfocada en estrategias digitales personalizadas para pequeñas y medianas empresas.",
        "Implementación de campañas de marketing digital que incluyen SEO, SEM, y marketing en redes sociales.",
        "Consultoría en crecimiento digital y optimización de presencia online.",
        "Creación de contenido visual y audiovisual para incrementar la interacción en redes sociales.",
      ],
      image: "/assets/images/education/logo.jpg",
    },
  ];

  //---------------------------------------------------------
  // Payment Info
  //---------------------------------------------------------

  const banksData = [
    {
      name: "Banco Pichincha",
      logo: "bancoPichincha_b.png",
      instructions:
        "Use estos detalles para realizar el pago. La cuenta está a nombre de Ericka Veintimilla.",
      details: [
        { label: "Número de Cuenta", value: "2204744098" },
        { label: "Tipo de Cuenta", value: "Ahorros" },
        { label: "Identificación", value: "1726213612" },
        { label: "Email", value: "eriveinti@gmail.com" },
      ],
    },
    {
      name: "Banco Guayaquil",
      logo: "bancoGuayaquil_b.png",
      instructions:
        "Use estos detalles para realizar el pago. La cuenta está a nombre de Ericka Veintimilla.",
      details: [
        { label: "Número de Cuenta", value: "0013840275" },
        { label: "Tipo de Cuenta", value: "Ahorros" },
        { label: "Identificación", value: "1726213612" },
        { label: "Email", value: "eriveinti@gmail.com" },
      ],
    },
    {
      name: "Produbanco",
      logo: "produbanco_b.png",
      instructions:
        "Use estos detalles para realizar el pago. La cuenta está a nombre de Ericka Veintimilla.",
      details: [
        { label: "Número de Cuenta", value: "18000872592" },
        { label: "Tipo de Cuenta", value: "Ahorros" },
        { label: "Identificación", value: "1726213612" },
        { label: "Email", value: "eriveinti@gmail.com" },
      ],
    },
  ];

  //---------------------------------------------------------
  //---------------------------------------------------------

  return (
    <main>
      {/* Sección Inicio */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        id="inicio"
      >
        <ProfileCard profile={profileData} whatsappMessage={whatsappMessage} />
        <ContactButtons contacts={contacts} />
        <SocialMediaIcons socialLinks={socialMediaLinks} />
      </motion.div>

      {/* Educación y Experiencia Laboral */}
      <motion.div
        id="curriculum"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="my-spacing-4"
      >
        <h1 className="section-subtitle py-spacing-2">
          Educación y Experiencia Laboral
        </h1>
        <EducationExperience entries={entries} />
      </motion.div>

      {/* Productos */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="my-spacing-4"
        id="productos"
      >
        <h1 className="section-subtitle py-spacing-2">Servicios Destacados</h1>
        <GalleryWithModal items={items} />
      </motion.div>

      {/* Servicios */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="my-spacing-4"
      >
        <h1 className="section-subtitle py-spacing-2">Ofertas y Promociones</h1>
        <Slider slides={slidesData} />
      </motion.div>

      {/* Video Player */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="my-spacing-4"
      >
        <VideoPlayer
          videoSrc="/assets/videos/marketing.mp4"
          title="Experiencia y Calidad"
        />
      </motion.div>

      {/* Información de Pago */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="my-spacing-4"
        id="info_pago"
      >
        <h1 className="section-subtitle py-spacing-2">Información de Pago</h1>
        <PaymentInfo banks={banksData} />
      </motion.div>

      {/* QR Code */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="my-spacing-4"
      >
        <QRDisplay qrImage="/assets/images/qrcode.png" title="Código QR" />
      </motion.div>
    </main>
  );
}
