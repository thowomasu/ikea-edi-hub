import type { FactItem } from '../types/hub';

export const facts: FactItem[] = [
  {
    id: 'fact-wheelchair-door',
    weekLabel: 'W12',
    isCurrentHero: true,
    category: 'accessibility',
    headline: {
      en: "A colleague in a wheelchair can't get in through this door.",
      fi: 'Pyörätuolia käyttävä työkaveri ei pääse tästä ovesta sisään.',
      sv: 'En kollega i rullstol kommer inte in genom den här dörren.',
    },
    body: {
      en: 'Steps, heavy doors and narrow passages shut people out without anyone noticing. Inclusion starts with seeing our workplace through someone else’s eyes.',
      fi: 'Portaat, raskaat ovet ja kapeat käytävät sulkevat ihmisiä ulkopuolelle kenenkään huomaamatta. Osallisuus alkaa siitä, että katsomme työpaikkaamme toisen ihmisen silmin.',
      sv: 'Trappsteg, tunga dörrar och smala passager stänger ute människor utan att någon märker det. Inkludering börjar med att se vår arbetsplats genom någon annans ögon.',
    },
    coworkerQuote: {
      en: 'Every time someone holds a heavy fire door or keeps the pallet lane clear, my whole shift starts on equal footing.',
      fi: 'Joka kerta kun joku pitää raskaan palo-oven auki tai pitää lavakäytävän vapaana, työvuoroni alkaa yhdenvertaiselta pohjalta.',
      sv: 'Varje gång någon håller upp en tung branddörr eller håller pallgången fri börjar mitt skift på lika villkor.',
    },
    coworkerRole: {
      en: 'Logistics Co-worker',
      fi: 'Logistiikkatyöntekijä',
      sv: 'Logistikmedarbetare',
    },
    suggestedByCoworker: false,
  },
  {
    id: 'fact-multilingual-signage',
    weekLabel: 'W13',
    isCurrentHero: false,
    category: 'language',
    headline: {
      en: 'Clear icons and trilingual floor signs keep Food & Logistics teams safe on day one.',
      fi: 'Selkeät kuvakkeet ja kolmikieliset lattiaopasteet pitävät Food- ja logistiikkatiimit turvassa ensimmäisestä päivästä alkaen.',
      sv: 'Tydliga symboler och trespråkiga golvskyltar håller Food- och logistikteamen trygga från dag ett.',
    },
    body: {
      en: 'Safety alerts and allergen notes posted in only one language leave new shift colleagues guessing. Pairing pictograms with Finnish, Swedish, and English labels turns fast handovers into confident teamwork.',
      fi: 'Vain yhdellä kielellä julkaistut turvallisuus- ja allergeeniohjeet jättävät uuden vuorotyöntekijän arvailemaan. Kuvakkeiden yhdistäminen suomeen, ruotsiin ja englantiin tekee vuoronvaihdoista sujuvia.',
      sv: 'Säkerhetsnotiser och allergiinstruktioner på bara ett språk lämnar nya kollegor osäkra. När piktogram kombineras med finska, svenska och engelska blir skiftbyten trygga och tydliga.',
    },
    coworkerQuote: {
      en: 'When prep station checklists use both icons and three languages, nobody hesitates to ask or double-check.',
      fi: 'Kun esivalmistelupisteen tarkistuslistoissa on sekä kuvakkeet että kolme kieltä, kenenkään ei tarvitse arvailla.',
      sv: 'När kökets checklistor har både symboler och tre språk vågar alla dubbelkolla direkt.',
    },
    coworkerRole: {
      en: 'Food & Beverage Co-worker',
      fi: 'Ravintolatyöntekijä',
      sv: 'Food-medarbetare',
    },
    suggestedByCoworker: false,
  },
  {
    id: 'fact-paid-hours-shifts',
    weekLabel: 'W14',
    isCurrentHero: false,
    category: 'shift-life',
    headline: {
      en: 'Part-time and evening-shift co-workers belong in every ED&I conversation during paid hours.',
      fi: 'Osa-aikaiset ja iltavuorolaiset kuuluvat jokaiseen ED&I-keskusteluun palkallisella työajalla.',
      sv: 'Deltids- och kvällsskiftsmedarbetare hör hemma i varje ED&I-samtal på betald arbetstid.',
    },
    body: {
      en: 'If workshops happen only at 10:00 on Tuesdays, weekend and evening teams miss out. Running short 2-minute briefings across all shift starts gives every co-worker equal access without unpaid extra hours.',
      fi: 'Jos työpajat järjestetään vain tiistaisin kello 10, ilta- ja viikonlopputiimit jäävät ulkopuolelle. Kahden minuutin alustukset jokaisen vuoron alussa antavat kaikille saman mahdollisuuden palkallisella ajalla.',
      sv: 'Om workshops bara hålls på tisdagar klockan 10 missar kvälls- och helgskift allt. Korta 2-minutersgenomgångar vid varje skiftstart ger alla samma tillgång utan obetald övertid.',
    },
    coworkerQuote: {
      en: 'Hearing the same weekly fact at our 16:00 evening huddle made me feel counted just like the morning crew.',
      fi: 'Kun sama viikon fakta käytiin läpi kello 16 ilta-avauksessa, tunsin kuuluvani tiimiin siinä missä aamuvuorokin.',
      sv: 'Att höra samma veckofakta på vårt skiftmöte klockan 16 fick mig att känna mig lika inkluderad som morgonpasset.',
    },
    coworkerRole: {
      en: 'Sales & CR Co-worker',
      fi: 'Myynti- ja asiakaspalvelutyöntekijä',
      sv: 'Försäljnings- och kundservicemedarbetare',
    },
    suggestedByCoworker: false,
  },
  {
    id: 'fact-cultural-awareness-days',
    weekLabel: 'W15',
    isCurrentHero: false,
    category: 'culture',
    headline: {
      en: 'Cultural awareness days work best when colleagues choose how to share their own traditions.',
      fi: 'Kulttuuriset teemapäivät toimivat parhaiten, kun työkaverit saavat itse päättää, mitä jakavat.',
      sv: 'Kulturella temadagar fungerar bäst när kollegor själva får välja vad och hur de vill dela.',
    },
    body: {
      en: 'Across IKEA Finland, teams celebrate different holidays, fasting schedules, and family traditions. Simple calendar planning around peak shifts and respectful curiosity replace performative posters with real belonging.',
      fi: 'IKEA Suomen tiimeissä juhlitaan erilaisia juhlapyhiä, paastoaikoja ja perinteitä. Vuorosuunnittelun joustavuus ja aito uteliaisuus korvaavat päälleliimatut kampanjat aidolla yhteenkuuluvuudella.',
      sv: 'Inom IKEA Finland firar team olika högtider, fasteperioder och familjetraditioner. Genom att ta hänsyn till detta i skiftplaneringen ersätter vi tomma symboler med äkta samhörighet.',
    },
    coworkerQuote: {
      en: 'Being asked in advance which holidays matter to me meant I could swap a shift without awkward explaining.',
      fi: 'Kun minulta kysyttiin etukäteen tärkeistä juhlapäivistä, sain sovittua vuoronvaihdon ilman kiusallista selittelyä.',
      sv: 'Att få frågan i förväg om vilka högtider som är viktiga för mig gjorde att jag kunde byta skift utan krångel.',
    },
    coworkerRole: {
      en: 'Store Operations Co-worker',
      fi: 'Myymälätiimin työntekijä',
      sv: 'Butiksmedarbetare',
    },
    suggestedByCoworker: false,
  },
  {
    id: 'fact-silent-break-room',
    weekLabel: 'W16',
    isCurrentHero: false,
    category: 'shift-life',
    headline: {
      en: 'Subtitled screens and a quiet break-room corner help everyone recharge between busy shifts.',
      fi: 'Tekstitetty ruutu ja hiljainen taukotilan nurkkaus auttavat kaikkia palautumaan kiireisten vuorojen välissä.',
      sv: 'Textade skärmar och en tyst hörna i pausrummet hjälper alla att återhämta sig mellan intensiva skift.',
    },
    body: {
      en: 'A loud canteen TV can overwhelm neurodivergent colleagues or anyone coming off a busy checkout queue. Keeping break-room videos muted with FI/EN/SV subtitles and reserving a low-noise seating zone respects different energy needs.',
      fi: 'Äänekäs taukotilan televisio kuormittaa neurokirjon työkavereita ja kassaruuhtkasta tulevia. Tekstitetyt äänettömät videot ja hiljainen istuma-alue kunnioittavat erilaisia palautumisen tarpeita.',
      sv: 'En högljudd TV i personalrummet kan trötta ut neurodivergenta kollegor eller den som just lämnat kassalinjen. Ljudlösa videor med text på FI/EN/SV och en tyst sittzon ger utrymme för alla.',
    },
    coworkerQuote: {
      en: 'I can still follow every co-worker video story on my break without having to listen over clattering trays.',
      fi: 'Voin seurata työkavereiden videotarinoita tauolla ilman, että ääni kilpailee astioiden kolinan kanssa.',
      sv: 'Jag kan följa varje medarbetarberättelse på rasten utan att behöva överrösta slamret i matsalen.',
    },
    coworkerRole: {
      en: 'Customer Relations Co-worker',
      fi: 'Asiakaspalvelutyöntekijä',
      sv: 'Kundrelationsmedarbetare',
    },
    suggestedByCoworker: true,
  },
  {
    id: 'fact-plain-language-handover',
    weekLabel: 'W17',
    isCurrentHero: false,
    category: 'accessibility',
    headline: {
      en: 'Plain-language shift boards prevent hidden stress for dyslexic and multilingual colleagues.',
      fi: 'Selkokieliset vuorotaulut vähentävät piilokuormitusta lukivaikeuksisilta ja monikielisiltä työkavereilta.',
      sv: 'Klarspråk på skifttavlorna minskar dold stress för kollegor med dyslexi eller annat modersmål.',
    },
    body: {
      en: 'Dense jargon and tiny abbreviations on warehouse whiteboards slow down handovers and exclude colleagues. High-contrast headings, short bullet points, and clear step numbers make daily priorities accessible at a glance.',
      fi: 'Tiheä ammattislangiteksti ja pienet lyhenteet varaston valkotaululla hidastavat vuoronvaihtoa. Selkeät otsikot, lyhyet listat ja numeroidut askeleet tekevät päivän tavoitteista saavutettavia yhdellä silmäyksellä.',
      sv: 'Täta förkortningar på lagrets whiteboardtavlor saktar ner skiftbytet och stänger ute kollegor. Hög kontrast, korta punkter och numrerade steg gör prioriteringarna tydliga direkt.',
    },
    coworkerQuote: {
      en: 'Once we dropped internal abbreviations from the dock board, handover mistakes dropped the very same week.',
      fi: 'Kun poistimme sisäiset lyhenteet lastauslaiturin taululta, vuoronvaihdon väärinkäsitykset vähenivät heti samalla viikolla.',
      sv: 'När vi tog bort interna förkortningar från lastkajens tavla minskade missförstånden redan samma vecka.',
    },
    coworkerRole: {
      en: 'Warehouse & Goods Flow Co-worker',
      fi: 'Tavaravirran työntekijä',
      sv: 'Varuflödesmedarbetare',
    },
    suggestedByCoworker: true,
  },
  {
    id: 'fact-visual-allergen-cards',
    weekLabel: 'W18',
    isCurrentHero: false,
    category: 'language',
    headline: {
      en: 'Color-coded allergen cards cut kitchen handover stress for new multilingual staff.',
      fi: 'Värikoodatut allergeenikortit vähentävät keittiön vuoronvaihdon stressiä uusilta monikielisiltä työntekijöiltä.',
      sv: 'Färgkodade allergikort minskar stressen vid kökets skiftbyte för nya flerspråkiga kollegor.',
    },
    body: {
      en: 'During lunch rushes, spoken updates get lost in kitchen noise. Visual prep magnets showing icons plus FI, SV, and EN labels ensure every team member spots dietary changes in seconds.',
      fi: 'Lounasruuhkassa suulliset ohjeet hukkuvat keittiön ääniin. Kuvakkeilla ja FI-, SV- ja EN-teksteillä varustetut magneettikortit varmistavat, että jokainen huomaa muutokset sekunneissa.',
      sv: 'Under lunchrusningen försvinner muntliga besked i köksljudet. Visuella magneter med symboler och text på FI, SV och EN gör att alla ser ändringar på några sekunder.',
    },
    coworkerQuote: {
      en: 'Checking one color-coded magnet board takes ten seconds and removes all guesswork at the bistro pass.',
      fi: 'Värikoodatun magneettitaulun tarkistaminen vie kymmenen sekuntia ja poistaa arvailun bistro-linjastolla.',
      sv: 'Att kolla en färgkodad magnettavla tar tio sekunder och tar bort all osäkerhet vid bistrons lucka.',
    },
    coworkerRole: {
      en: 'Bistro & Kitchen Co-worker',
      fi: 'Bistro- ja keittiötyöntekijä',
      sv: 'Bistro- och köksmedarbetare',
    },
    suggestedByCoworker: true,
  },
  {
    id: 'fact-ergonomic-checkout-rotation',
    weekLabel: 'W19',
    isCurrentHero: false,
    category: 'accessibility',
    headline: {
      en: 'Rotating seated and standing checkout lanes protects energy and joint health for all ages.',
      fi: 'Istuma- ja seisomakassojen kierrätys suojaa jaksamista ja nivelterveyttä kaikenikäisillä.',
      sv: 'Rotation mellan sittande och stående kassor skyddar ork och leder i alla åldrar.',
    },
    body: {
      en: 'Long peak shifts at a single register strain backs, knees, and focus. Simple mid-shift swaps between seated lanes, self-checkout support, and floor greeter roles keep teams fresh.',
      fi: 'Pitkät ruuhkavuorot yhdellä kassapisteellä kuormittavat selkää, polvia ja keskittymistä. Kevyt vuorovaihto istumakassan, itsepalvelukassojen ja opastuksen välillä pitää tiimin virkeänä.',
      sv: 'Långa toppar i en enda kassa belastar rygg, knän och fokus. Enkla byten mitt i skiftet mellan sittande kassa, snabbkassa och värdskap håller teamet piggt.',
    },
    coworkerQuote: {
      en: 'Swapping roles after two hours means nobody finishes a Saturday shift with an aching back.',
      fi: 'Kahden tunnin välein tehtävä roolinvaihto tarkoittaa, ettei kukaan lähde lauantaivuorosta selkä kipeänä.',
      sv: 'Att byta roll varannan timme gör att ingen avslutar ett lördagsskift med ont i ryggen.',
    },
    coworkerRole: {
      en: 'Checkout & Customer Relations Co-worker',
      fi: 'Kassa- ja asiakaspalvelutyöntekijä',
      sv: 'Kassa- och kundrelationsmedarbetare',
    },
    suggestedByCoworker: false,
  },
  {
    id: 'fact-pronunciation-respect',
    weekLabel: 'W20',
    isCurrentHero: false,
    category: 'culture',
    headline: {
      en: 'Learning to pronounce a colleague’s name properly is a 10-second habit of everyday respect.',
      fi: 'Työkaverin nimen oikea ääntäminen on kymmenen sekunnin arkinen kunnioituksen ele.',
      sv: 'Att lära sig uttala en kollegas namn rätt är en tiusekunders vana av vardagsrespekt.',
    },
    body: {
      en: 'Shortening or guessing someone’s name without asking creates quiet distance. Asking once with genuine interest—and noting phonetic hints on shift rosters when welcomed—builds instant trust.',
      fi: 'Nimen lyhentäminen tai arvaaminen kysymättä luo näkymätöntä etäisyyttä. Kertaluontoinen aito kysyminen rakentaa luottamusta heti ensimmäisestä vuorosta alkaen.',
      sv: 'Att förkorta eller gissa någons namn utan att fråga skapar tyst distans. Att fråga en gång med genuint intresse bygger förtroende direkt.',
    },
    coworkerQuote: {
      en: 'When my shift lead asked how to say my name on day one, I felt seen before I even put on my badge.',
      fi: 'Kun vuorovastaava kysyi ensimmäisenä päivänä nimeni oikean ääntämisen, tunsin oloni tervetulleeksi heti.',
      sv: 'När min skiftledare frågade hur mitt namn uttalas dag ett kände jag mig sedd direkt.',
    },
    coworkerRole: {
      en: 'Showroom Sales Co-worker',
      fi: 'Myyntineuvottelija',
      sv: 'Säljmedarbetare',
    },
    suggestedByCoworker: false,
  },
  {
    id: 'fact-predictable-evening-breaks',
    weekLabel: 'W21',
    isCurrentHero: false,
    category: 'shift-life',
    headline: {
      en: 'Predictable break timings in evening and weekend shifts reduce burnout for student and parent workers.',
      fi: 'Ennakoitavat taukoajat ilta- ja viikonloppuvuoroissa vähentävät opiskelijoiden ja vanhempien kuormitusta.',
      sv: 'Förutsägbara rasttider på kvälls- och helgskift minskar stress för studenter och föräldrar.',
    },
    body: {
      en: 'When breaks slip unpredictably during busy evenings, colleagues cannot plan childcare calls, meals, or medication. Posting a simple break-window whiteboard at shift start keeps everyone covered.',
      fi: 'Kun tauot siirtyvät kiireisinä iltoina arvaamattomasti, työkaverit eivät voi suunnitella ruokailua, lääkitystä tai perhepuheluita. Vuoron alussa täytetty taukoikkunataulu tuo selkeyttä kaikille.',
      sv: 'När raster flyttas oförutsägbart under intensiva kvällar blir det svårt att planera måltider, medicin eller familjesamtal. En enkel rasttavla vid skiftstart skapar trygghet.',
    },
    coworkerQuote: {
      en: 'Knowing my 18:30 break is protected lets me focus 100% on customers instead of watching the clock.',
      fi: 'Tieto siitä, että kello 18.30 tauko pitää, auttaa keskittymään täysin asiakkaisiin kellon vilkuilun sijaan.',
      sv: 'Att veta att min rast klockan 18:30 är tryggad gör att jag kan fokusera helt på kunderna.',
    },
    coworkerRole: {
      en: 'Part-time Sales Co-worker',
      fi: 'Osa-aikainen myyntityöntekijä',
      sv: 'Deltidssäljare',
    },
    suggestedByCoworker: true,
  },
];
