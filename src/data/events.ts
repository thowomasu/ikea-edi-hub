import type { WorkshopEvent } from '../types/hub';

export const events: WorkshopEvent[] = [
  {
    id: 'event-q2-manager-briefing',
    title: {
      en: 'Leading 2-Minute Inclusive Shift Briefings',
      fi: 'Kahden minuutin osallistavan vuorobriiffin vetäminen',
      sv: 'Leda inkluderande 2-minuters skiftgenomgångar',
    },
    phaseLabel: 'Q2 Workshop',
    dateLabel: '2026-04-15 · 09:00–09:45',
    location: {
      en: 'Espoo Training Room 2 + Teams Stream',
      fi: 'Espoon koulutustila 2 + Teams-lähetys',
      sv: 'Esbo utbildningsrum 2 + Teams-sändning',
    },
    paidHours: true,
    targetGroups: ['management'],
  },
  {
    id: 'event-q2-tour-audit',
    title: {
      en: 'Q2 ED&I Tour: Walk-a-Mile Accessibility Audit',
      fi: 'Q2 ED&I-kiertue: Esteettömyyskävely arjessa',
      sv: 'Q2 ED&I-turné: Tillgänglighetsvandring i vardagen',
    },
    phaseLabel: 'Q2 ED&I Tour',
    dateLabel: '2026-05-06 · 14:15–15:00',
    location: {
      en: 'Vantaa Warehouse & Showroom Entrance',
      fi: 'Vantaan varasto ja myymälän sisäänkäynti',
      sv: 'Vanda lager och varuhusentré',
    },
    paidHours: true,
    targetGroups: ['food-logistics', 'sales-cr'],
  },
  {
    id: 'event-q2-shift-dropin',
    title: {
      en: 'Food & Logistics Shift Drop-In: Multilingual Signage & Break Rooms',
      fi: 'Food & Logistiikka -vuoropysäkki: Monikieliset opasteet ja taukotilat',
      sv: 'Skiftträff Food & Logistik: Flerspråkiga skyltar och pausrum',
    },
    phaseLabel: 'Q2–Q3 Tour',
    dateLabel: '2026-06-11 · 15:30–16:15',
    location: {
      en: 'Tampere Staff Canteen (Quiet Zone)',
      fi: 'Tampereen henkilöstöravintola (hiljainen alue)',
      sv: 'Tammerfors personalmatsal (tyst zon)',
    },
    paidHours: true,
    targetGroups: ['food-logistics'],
  },
  {
    id: 'event-q3-habits-lab',
    title: {
      en: 'Q3 ED&I Tour: Everyday Inclusion Habits on the Sales Floor',
      fi: 'Q3 ED&I-kiertue: Osallistavat arjen tavat myymälässä',
      sv: 'Q3 ED&I-turné: Inkluderande vardagsvanor på säljgolvet',
    },
    phaseLabel: 'Q3 ED&I Tour',
    dateLabel: '2026-08-20 · 11:00–11:45',
    location: {
      en: 'Raisio & Kuopio Stores (Paid Shift Slot)',
      fi: 'Raision ja Kuopion tavaratalot (työvuoron sisällä)',
      sv: 'Reso och Kuopio varuhus (under betalt skift)',
    },
    paidHours: true,
    targetGroups: ['sales-cr', 'management'],
  },
  {
    id: 'event-q2-language-cafe',
    title: {
      en: 'Paid-Hours Multilingual Floor Signage & Language Café',
      fi: 'Työajan monikielisten opasteiden ja kielikahvilan työpaja',
      sv: 'Flerspråkiga golvskyltar & språkcafé på betald arbetstid',
    },
    phaseLabel: 'Q2 Workshop',
    dateLabel: '2026-05-21 · 13:00–13:45',
    location: {
      en: 'Espoo & Vantaa Staff Canteens',
      fi: 'Espoon ja Vantaan henkilöstöravintolat',
      sv: 'Esbo och Vanda personalmatsalar',
    },
    paidHours: true,
    targetGroups: ['food-logistics', 'sales-cr'],
  },
  {
    id: 'event-q3-neurodiversity-check',
    title: {
      en: 'Q3 ED&I Tour: Sensory-Friendly Break Rooms & Shift Clarity',
      fi: 'Q3 ED&I-kiertue: Aistiystävälliset taukotilat ja selkeät vuoro-ohjeet',
      sv: 'Q3 ED&I-turné: Sinnesvänliga pausrum och tydliga skiftinstruktioner',
    },
    phaseLabel: 'Q3 ED&I Tour',
    dateLabel: '2026-09-03 · 16:00–16:45',
    location: {
      en: 'All Finland Stores (Evening Shift Stream)',
      fi: 'Kaikki Suomen tavaratalot (iltavuorolähetys)',
      sv: 'Alla varuhus i Finland (kvällsskiftssändning)',
    },
    paidHours: true,
    targetGroups: ['management', 'sales-cr', 'food-logistics'],
  },
];
