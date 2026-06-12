import type { CampsiteConfig } from "../types";

/**
 * Teichstub'n Gabersdorf — Heuriger mit Wohnmobil-Stellplätzen, Mur-Au, Südsteiermark.
 * Alle Texte/Fakten belegt aus teichstubn.at (raw/digest, Stand-Scrape 2026-06).
 * Bilder: nur provenienz-gebundene Aufnahmen dieses Platzes; Stock-/Kleinbilder verworfen.
 */
const IMG = "/campsites/teichstubn";

const teichstubn: CampsiteConfig = {
  name: "Teichstub’n Gabersdorf",
  shortName: "Teichstub’n",
  slug: "teichstubn",
  ort: "Gabersdorf",
  region: "Südsteiermark",
  brandKind: "Heuriger & Stellplätze",
  see: "Teich",
  regionLong: "Mur-Au bei Gabersdorf · Südsteiermark",

  heroVariant: "center",

  claim: "Dein Platz am Teich in der Südsteiermark",
  claimEmphasis: "am Teich",
  emailDetail: "euer Heuriger direkt am Teich an der Mur",
  intro:
    "Direkt am eigenen Teich in der Mur-Au stehen 40 großzügige Stellplätze — mittendrin der familiengeführte Heuriger mit steirischen Schmankerln. Du parkst am Wasser und gehst zum Essen einfach rüber.",

  logo: { src: `${IMG}/logo-e8510fb155.png`, alt: "Teichstub’n Gabersdorf Logo" },

  statement: {
    text: "Bei uns campst du rund um den Teich — und der Heurige ist nie weiter als ein paar Schritte weg.",
    emphasis: "rund um den Teich",
  },

  pillars: [
    {
      title: "Direkt am Teich",
      text: "Der Heurige steht mitten in der Mur-Au am eigenen Teich — Wasser, Wiese und alte Bäume rahmen deinen Platz ein.",
      image: { src: `${IMG}/gallery-421f9e76d3.webp`, alt: "Teichstub’n mit Spiegelung im eigenen Teich" },
    },
    {
      title: "Heuriger mit Herz",
      text: "Familienbetrieb und Team verwöhnen dich im gemütlichen Gastraum oder auf der Terrasse — mit Qualität zu fairen Preisen.",
      image: { src: `${IMG}/gallery-1db0905960.webp`, alt: "Service mit Jausenplatte im Gastraum der Teichstub’n" },
    },
    {
      title: "Steirische Schmankerl",
      text: "Bodenständiges und Traditionelles, teils im eigenen Haus produziert: knuspriges Backhenderl, kalte Jausen und heimische Weine.",
      image: { src: `${IMG}/gallery-d3dfdf6bf2.webp`, alt: "Kalte Jausenplatte mit steirischen Schmankerln" },
    },
  ],

  usps: [
    "40 großzügige Stellplätze",
    "Direkt am Teich",
    "WC, Duschen & Entsorgung",
    "Hunde willkommen",
    "Kinder gratis",
    "Steirische Küche",
  ],

  trust: {
    heading: "Warum Camper hier gern Halt machen",
    headingEmphasis: "Halt machen",
    intro:
      "Zwischen Autobahn und slowenischer Grenze findest du einen ruhigen Platz am Wasser, ein warmes Mittagsmenü und Gastgeber, die dir gern den Weg durch die Südsteiermark zeigen.",
  },

  awards: [],

  hero: {
    aerial: { src: `${IMG}/hero-ab5b23574d.webp`, alt: "Panorama der Teichstub’n am Teich in Gabersdorf" },
  },

  camping: {
    heading: "Stellplätze rund um den Teich",
    intro:
      "Ob Wohnmobil, Wohnwagen, Zelt oder Gespann — auf 40 großzügigen Plätzen direkt am Wasser stehst du ruhig, mit guter Anbindung an die Autobahn und nur zehn Minuten von der slowenischen Grenze.",
    features: [
      {
        title: "Großzügige Plätze am Wasser",
        text: "40 weitläufige Stellplätze gruppieren sich rund um den Teich — viel Platz, kurze Wege zum Heurigen und der Blick aufs Wasser inklusive.",
        image: { src: `${IMG}/gallery-5a6411fd57.webp`, alt: "Wohnmobile auf den Stellplätzen rund um den Teich der Teichstub’n" },
      },
      {
        title: "Terrasse & Sanitär",
        text: "Von der herrlichen Sitzterrasse blickst du übers Wasser zu den Stellplätzen — WC, Duschen sowie Grauwasser- und Chemietoiletten-Entsorgung sind gleich daneben.",
        image: { src: `${IMG}/gallery-05230fcb5e.webp`, alt: "Überdachte Sitzterrasse mit Blick auf Wohnmobile am Teich" },
      },
    ],
  },

  anreise: {
    heading: "Dein Weg an den Teich",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Von Norden über die Abfahrt Leibnitz, von Süden über die Abfahrt Vogau — dann rund zehn Minuten bis Gabersdorf zur Teichstub’n.",
      },
      {
        title: "Grenze & Slowenien",
        text: "Der Grenzübergang Spielfeld liegt zehn Minuten entfernt; Richtung Mureck und Radkersburg geht es auch ohne slowenische Vignette weiter.",
      },
      {
        title: "Mit der Bahn",
        text: "Nächster Bahnhof an der Südbahn ist Leibnitz — die letzten Kilometer in die Mur-Au legst du am besten mit dem Auto zurück.",
      },
    ],
  },

  galerie: {
    heading: "Eindrücke von der Teichstub’n",
    headingEmphasis: "Teichstub’n",
    intro: "Ein paar Aufnahmen vom Platz am Wasser.",
    tag: "Mur-Au · Südsteiermark",
    images: [],
  },

  booking: {
    heading: "Sichere dir deinen Platz am Teich",
    headingEmphasis: "am Teich",
    intro:
      "Sag uns Zeitraum und Personenzahl — die Familie meldet sich persönlich und hält dir deinen Stellplatz am Wasser frei.",
    pricesArePlaceholder: false,
    priceNote: "Stellplatz € 15 pro Tag · zzgl. € 2 Gemeindeabgabe pro Person · Kinder gratis",
    highlight: {
      title: "Kinder gratis",
      text: "Die Gemeindeabgabe zahlst du nur für Erwachsene — Kinder verbleiben bei uns gratis.",
    },
    categories: [
      { id: "stellplatz", label: "Stellplatz", perNight: 15, perExtraGuest: 2 },
    ],
  },

  kontakt: {
    coords: { lat: 46.781338, lng: 15.588162, approx: true },
    tel: "+43 664 5257054",
    telHref: "tel:+436645257054",
    mail: "office@teichstubn.at",
    adresse: "Gabersdorf 98 · 8424 Gabersdorf · Südsteiermark",
  },

  languages: ["DE"],

  nav: [
    {
      label: "Stellplätze",
      href: "#camping",
      children: [
        { label: "Plätze am Teich", href: "#camping" },
        { label: "Sanitär & Entsorgung", href: "#camping" },
      ],
    },
    { label: "Anreise", href: "#anreise" },
    {
      label: "Preise",
      href: "#booking",
      children: [
        { label: "Stellplatz-Preise", href: "#booking" },
        { label: "Lage & Grenze", href: "#anreise" },
      ],
    },
  ],
};

export default teichstubn;
