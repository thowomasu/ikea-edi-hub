import type { ToolkitBriefing } from '../types/hub';

export const briefings: ToolkitBriefing[] = [
  {
    id: 'toolkit-mgmt-w12',
    weekLabel: 'W12',
    targetGroup: 'management',
    openerPrompt: {
      en: 'Did you know? 1 in 3 floor barriers goes unnoticed simply because those of us with full mobility never test the side door.',
      fi: 'Tiesitkö? Joka kolmas kulkueste jää huomaamatta vain siksi, että esteettömästi liikkuvat eivät koskaan testaa sivuovea.',
      sv: 'Visste du? Vart tredje fysiskt hinder förblir osynligt bara för att vi som går obehindrat aldrig testar sidodörren.',
    },
    talkingPoints: {
      en: [
        'Walk one staff route this week looking for heavy doors, narrow aisles, or unblocked fire exits.',
        'Schedule all 2-minute ED&I openers inside paid shift huddles—never expect unpaid extra time.',
        'Follow through: point out at least one co-worker feedback idea that turned into action.',
      ],
      fi: [
        'Kulje tällä viikolla yksi henkilöstöreitti läpi ja etsi raskaat ovet, kapeat välit tai tukitut kulkuväylät.',
        'Pidä kaikki 2 minuutin ED&I-alustukset palkallisissa vuoropalavereissa — ei koskaan työajan ulkopuolella.',
        'Sulje palautesilmukka: kerro tiimille vähintään yhdestä työkaverin ideasta, joka johti muutokseen.',
      ],
      sv: [
        'Gå igenom en personalrutt den här veckan och leta efter tunga dörrar, trånga passager eller blockerade gångar.',
        'Håll alla 2-minuters ED&I-genomgångar under betald skifttid — aldrig som obetald övertid.',
        'Slut cirkeln: lyft minst ett medarbetarförslag som redan blivit konkret handling.',
      ],
    },
    monthlyChallenge: {
      en: 'Pick one physical or schedule barrier logged by your team and fix or escalate it within 14 days.',
      fi: 'Valitse yksi tiimin ilmoittama fyysinen tai aikatauluun liittyvä este ja ratkaise tai vie se eteenpäin 14 päivässä.',
      sv: 'Välj ett fysiskt hinder eller schemaproblem som ditt team lyft och lös eller eskalera det inom 14 dagar.',
    },
  },
  {
    id: 'toolkit-sales-w13',
    weekLabel: 'W13',
    targetGroup: 'sales-cr',
    openerPrompt: {
      en: 'Did you know? Pairing quick radio calls with written pocket notes helps multilingual and neurodivergent teammates stay in sync.',
      fi: 'Tiesitkö? Radiokutsujen tukeminen lyhyillä taskumuistioilla auttaa monikielisiä ja neurokirjon työkavereita pysymään mukana.',
      sv: 'Visste du? Att kombinera korta radioanrop med skrivna ficknotiser hjälper flerspråkiga och neurodivergenta kollegor att hänga med.',
    },
    talkingPoints: {
      en: [
        'Keep morning showroom handovers under 2 minutes with one clear focus word.',
        'Ask new or part-time colleagues whether they prefer spoken, visual, or checklist instructions.',
        'Rotate high-noise checkout duties fairly during busy Saturday peaks.',
      ],
      fi: [
        'Pidä aamun myymäläluovutukset alle kahdessa minuutissa yhdellä selkeällä pääteemalla.',
        'Kysy uusilta ja osa-aikaisilta työkavereilta, toimivatko heille parhaiten puhe-, kuva- vai listaohjeet.',
        'Jaa meluisat kassa- ja ruuhkavuorot tasaisesti lauantain huipputunteina.',
      ],
      sv: [
        'Håll morgonens genomgång på säljgolvet under två minuter med ett tydligt fokus.',
        'Fråga nya och deltidsanställda kollegor om de föredrar muntliga, visuella eller skriftliga instruktioner.',
        'Fördela ljudintensiva kassapass rättvist under lördagens rusning.',
      ],
    },
    monthlyChallenge: {
      en: 'Run one Saturday shift handover using a 3-bullet visual card alongside your normal radio briefing.',
      fi: 'Kokeile yhtä lauantain vuoronvaihtoa käyttämällä kolmen kohdan kuvakorttia radiobriiffin rinnalla.',
      sv: 'Genomför ett lördagsskiftsbyte med ett trepunkts visuellt kort vid sidan av radion.',
    },
  },
  {
    id: 'toolkit-food-w14',
    weekLabel: 'W14',
    targetGroup: 'food-logistics',
    openerPrompt: {
      en: 'Did you know? Most Food & Logistics colleagues never see desktop intranet banners—break-room QR codes and 2-minute shift starts bridge the gap.',
      fi: 'Tiesitkö? Suurin osa Food- ja logistiikkatiimeistä ei käytä työpöytäintranetiä päivittäin — taukotilan QR-koodit ja 2 minuutin vuoroavaukset korjaavat eron.',
      sv: 'Visste du? De flesta i Food & Logistik ser sällan intranätet vid en dator — QR-koder i pausrum och 2-minuters skiftstarter överbryggar klyftan.',
    },
    talkingPoints: {
      en: [
        'Point out this week’s break-room poster and remind everyone that scanning counts as paid shift info.',
        'Check that warehouse and kitchen safety signs show clear icons plus FI, SV, and EN text.',
        'Keep break-room TV story videos muted with subtitles enabled so quiet rest remains possible.',
      ],
      fi: [
        'Osoita tämän viikon taukotilan juliste ja muistuta, että QR-koodin lukeminen kuuluu työaikaan.',
        'Varmista, että varaston ja keittiön turvakylteissä on kuvakkeet sekä FI-, SV- ja EN-teksti.',
        'Pidä taukotilan TV-tarinat äänettömällä ja tekstitys päällä, jotta jokainen voi myös levätä rauhassa.',
      ],
      sv: [
        'Peka ut veckans affisch i pausrummet och påminn om att skanningen räknas som betald skiftinfo.',
        'Kontrollera att säkerhetsskyltar i lager och kök har tydliga ikoner samt text på FI, SV och EN.',
        'Håll pausrummets videoberättelser ljudlösa med undertexter på så att lugn vila förblir möjlig.',
      ],
    },
    monthlyChallenge: {
      en: 'Invite one evening or weekend shift colleague to drop a topic into the Feedback QR form.',
      fi: 'Kutsu yksi ilta- tai viikonloppuvuoron työkaveri lähettämään aihe-ehdotus QR-palautelomakkeella.',
      sv: 'Bjud in en kvälls- eller helgkollega att skicka in ett ämnesförslag via QR-formuläret.',
    },
  },
  {
    id: 'toolkit-food-w15',
    weekLabel: 'W15',
    targetGroup: 'food-logistics',
    openerPrompt: {
      en: 'Did you know? Dropping internal jargon from loading-bay whiteboards cuts onboarding mistakes in half.',
      fi: 'Tiesitkö? Sisäisen slangin karsiminen lastauslaiturin valkotaululta puolittaa perehdytyksen virheet.',
      sv: 'Visste du? Att ta bort internt fikonspråk från lastkajens whiteboard halverar missförstånden vid introduktion.',
    },
    talkingPoints: {
      en: [
        'Write full task names instead of 3-letter acronyms on dock and kitchen shift boards.',
        'Verify emergency and pallet-jack pathways stay wide enough for wheelchair and trolley access.',
        'Celebrate one practical peer tip during Friday’s shift closing.',
      ],
      fi: [
        'Kirjoita lastauslaiturin ja keittiön tauluille kokonaiset tehtävänimet kolmikirjaimisten lyhenteiden sijaan.',
        'Tarkista, että hätä- ja lavakäytävät pysyvät riittävän leveinä myös pyörätuolille ja vaunuille.',
        'Nosta esiin yksi käytännön työkaverivinkki perjantain vuoron lopetuksessa.',
      ],
      sv: [
        'Skriv hela uppgiftsnamn i stället för trebokstavsförkortningar på kajens och kökets tavlor.',
        'Kontrollera att nöd- och pallgångar hålls tillräckligt breda för både rullstol och vagnar.',
        'Lyft ett konkret kollegatips under fredagens skiftavslut.',
      ],
    },
    monthlyChallenge: {
      en: 'Replace all unexplained acronyms on your team’s shift board with plain language and icons this week.',
      fi: 'Korvaa kaikki selittämättömät lyhenteet tiimisi vuorotaululla selkokielellä ja kuvakkeilla tällä viikolla.',
      sv: 'Ersätt alla oförklarade förkortningar på teamets skifttavla med klarspråk och symboler den här veckan.',
    },
  },
  {
    id: 'toolkit-mgmt-w16',
    weekLabel: 'W16',
    targetGroup: 'management',
    openerPrompt: {
      en: 'Did you know? Evening and weekend co-workers often hear big store updates days later unless we repeat the 2-minute brief at 16:00.',
      fi: 'Tiesitkö? Ilta- ja viikonloppuvuorolaiset kuulevat myymälän uutiset usein päiviä myöhässä, ellemme toista 2 minuutin briiffiä kello 16.',
      sv: 'Visste du? Kvälls- och helgmedarbetare hör ofta stora butiksnyheter dagar senare om vi inte upprepar 2-minutersgenomgången klockan 16:00.',
    },
    talkingPoints: {
      en: [
        'Run the exact same weekly ED&I opener at morning, afternoon, and weekend shift starts.',
        'Protect predictable break windows on evening rosters so students and parents can plan.',
        'Check who has not had a chance to attend a paid-hours workshop yet this quarter.',
      ],
      fi: [
        'Pidä täsmälleen sama viikon ED&I-avaus aamu-, ilta- ja viikonloppuvuorojen alussa.',
        'Turvaa ennakoitavat taukoajat iltavuorolistoilla, jotta opiskelijat ja vanhemmat voivat suunnitella arkeaan.',
        'Tarkista, ketkä eivät ole vielä päässeet osallistumaan työajan työpajaan tällä neljänneksellä.',
      ],
      sv: [
        'Håll exakt samma veckovisa ED&I-öppnare vid morgon-, eftermiddags- och helgskiftens start.',
        'Skydda förutsägbara rasttider på kvällsscheman så att studenter och föräldrar kan planera.',
        'Se över vilka som ännu inte fått chans att delta i en workshop på betald arbetstid detta kvartal.',
      ],
    },
    monthlyChallenge: {
      en: 'Co-host one 2-minute briefing with a part-time or evening co-worker this week.',
      fi: 'Vedä yksi 2 minuutin alustus yhdessä osa-aikaisen tai iltavuorolaisen kanssa tällä viikolla.',
      sv: 'Håll en 2-minutersgenomgång tillsammans med en deltids- eller kvällskollega den här veckan.',
    },
  },
  {
    id: 'toolkit-sales-w17',
    weekLabel: 'W17',
    targetGroup: 'sales-cr',
    openerPrompt: {
      en: 'Did you know? Asking how to pronounce a new colleague’s name—and rotating heavy checkout stations—sets the tone for a whole shift.',
      fi: 'Tiesitkö? Uuden työkaverin nimen ääntämisen kysyminen ja kassavuorojen reilu kierrätys luovat sävyn koko työvuorolle.',
      sv: 'Visste du? Att fråga hur en ny kollegas namn uttalas — och rotera tunga kassapass — sätter tonen för hela skiftet.',
    },
    talkingPoints: {
      en: [
        'Welcome new shift members by confirming name pronunciation warmly and without rushing.',
        'Rotate seated, standing, and self-checkout support every two hours during peak Saturdays.',
        'Share one customer accessibility win during the afternoon wrap-up.',
      ],
      fi: [
        'Toivota uudet vuorolaiset tervetulleiksi varmistamalla nimen oikea ääntäminen kiireettä.',
        'Kierrätä istuma-, seisoma- ja itsepalvelukassavuoroja kahden tunnin välein lauantairuuhkassa.',
        'Jaa yksi asiakkaiden saavutettavuusonnnistuminen iltapäivän yhteenvedossa.',
      ],
      sv: [
        'Välkomna nya kollegor genom att varmt stämma av uttalet av deras namn utan stress.',
        'Rotera sittande kassa, stående kassa och snabbkassa varannan timme under lördagens topp.',
        'Lyft en framgång kring kundtillgänglighet under eftermiddagens avslut.',
      ],
    },
    monthlyChallenge: {
      en: 'Introduce a two-hour checkout rotation board for your next weekend shift.',
      fi: 'Ota käyttöön kahden tunnin kassakiertotaulu seuraavassa viikonloppuvuorossasi.',
      sv: 'Inför en tvåtimmars rotationstavla i kassan inför nästa helgskift.',
    },
  },
];
