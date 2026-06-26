# Content en ontwerp: persoonlijke website Jonathan Leenman

## Status

Dit document legt stap 4 en 5 vast: contentkeuze en ontwerpprincipes voor de nieuwe site. Dit is nog geen implementatieplan.

De gekozen richting is **The Difference Maker**: een professionele persoonlijke homepage die laat voelen dat Jonathan anders kijkt, vooruit denkt en complexe systemen kan vormen tot iets eenvoudigs en bruikbaars.

## Doel van de site

De site moet een sterk professioneel beeld achterlaten bij zakelijke relaties, Koenders-context, vakgenoten, mogelijke co-founders, klanten en later eventueel werkgevers.

De site is niet primair:

- een recruiter-CV;
- een freelancer-acquisitiepagina;
- een portfolio van losse klantprojecten;
- een skillslijst;
- een technologiecatalogus.

De site is wel:

- een persoonlijke homepage;
- een denkprofiel;
- een compact professioneel verhaal;
- een bewijs van moderne smaak, productdenken en technische diepgang;
- een plek waar iemand kan begrijpen: "zo denkt Jonathan."

## Kernpositionering

Jonathan is meer dan een Product Owner. Hij beweegt tussen product, UX, software, data, visualisatie en nieuwe manieren van bouwen. Hij is een builder en systems thinker die dicht op developers werkt, gebruikersproblemen serieus neemt en complexe domeinen begrijpelijk maakt.

Werkvelden:

- productontwikkeling;
- UX en informatiearchitectuur;
- softwareontwikkeling;
- datavisualisatie;
- kaarten en geodata;
- sensorplatformen;
- dashboards;
- API-first systemen;
- slimme ondersteuning van ontwikkelprocessen.

AI wordt niet als buzzword naar voren geschoven. De site mag wel laten voelen dat Jonathan moderne tooling en nieuwe werkwijzen vanzelfsprekend gebruikt. Zeg liever "nieuwe manieren van bouwen", "slimmere ontwikkelprocessen" en "gereedschap dat meedenkt" dan overal "AI".

## Bezoekersreis

1. **Eerste indruk**
   De bezoeker moet binnen enkele seconden voelen dat dit geen standaard profielsite is. De hero is creatief, modern en ruimtelijk.

2. **Denkstijl**
   De site legt vroeg uit hoe Jonathan werkt: systemen zien, eenvoud zoeken, vooruitdenken, details serieus nemen en teams helpen scherper te bouwen.

3. **Actueel werkveld**
   Beschrijf sensorplatformen, monitoring, kaarten, dashboards, data, API's en visualisatie voorzichtig en generiek. Koenders en VENV hoeven niet dominant genoemd te worden.

4. **Vormende lijn**
   Gebruik de carriereboog als verklaring: games -> onderwijs -> freelance web/software -> product/system thinking.

5. **Impactpatronen**
   Gebruik de oude testimonials niet als carousel, maar als patronen die steeds terugkomen: kritisch, betrouwbaar, technisch scherp, verbindend, snel, transparant, lost vastgelopen werk los.

6. **Persoonlijke laag**
   Kort en menselijk: nieuwsgierig, lerend, persoonlijk betrokken, houdt ervan complexe ideeen simpel te maken.

7. **Afsluiting**
   Geen harde sales. Rustige uitnodiging tot gesprek via LinkedIn of e-mail. CV mag apart bestaan, maar hoeft niet prominent te zijn.

## Contentkeuze uit oude site

Bewaren als bron voor de nieuwe site:

- de carriereboog;
- game design achtergrond;
- onderwijservaring;
- freelance software/web ervaring;
- testimonials als inhoudelijke patronen;
- contactgegevens;
- algemene voorwaarden als archiefmateriaal, niet als hoofdcontent;
- CV als aparte, rustige pagina.

Niet leidend maken:

- "freelance webdeveloper voor MKB";
- WordPress/Elementor/Shopify als hoofdidentiteit;
- sterratings;
- testimonial carousel;
- skills-bars of percentage-achtige presentatie;
- "huur mij in" taal;
- generieke sales-CTA's;
- algemene voorwaarden in de hoofdnavigatie.

## Ontwerprichtlijn

De site mag creatief en visueel indrukwekkend zijn, maar moet eenvoudig blijven.

Visuele richting:

- modern, rustig en professioneel;
- veel witruimte;
- sterke typografie;
- subtiele depth-effecten, maar geen generiek glassmorphism als hoofdtaal;
- een memorabele VASSAL/z-depth hero;
- palet gebaseerd op het oude VASSAL-logo: diep rood, goud/oranje, bijna zwart, donkerblauw/grafiet en warm wit;
- scroll-animaties als reis, niet als truc;
- donkere of hybride basis mogelijk, zolang de leesbaarheid hoog blijft;
- geen druk portfolio-grid;
- geen standaard CV-layout als hoofdpagina.

Inspiratie mag komen uit Apple, Linear, Stripe, Vercel, Notion en Raycast, maar de site moet eigen voelen. Voorkom zowel een Apple-kloon als een street-style/art-house richting. De energie moet zitten in scherpe compositie, merkdiepte, echte beelden en slimme frictie.

## Effectstrategie

Gebruik een beperkt aantal effecten die samen een systeem vormen:

- z-depth typografie die de oude VASSAL-header volwassen terughaalt;
- rode/gouden signaallijnen en sticky rails als herkenbaar VASSAL-motief;
- schild/brand-erfgoed als subtiel anker, niet als nostalgisch hoofdbeeld;
- subtiele scroll-reveals voor content;
- sticky of pinned secties alleen waar het verhaal er sterker door wordt;
- typografische accenten die woorden als "systems", "builder", "different" of "thinking" visueel dragen.

Effecten moeten:

- progressive enhancement zijn;
- `prefers-reduced-motion` respecteren;
- mobiel bruikbaar blijven;
- niet over tekst heen vallen;
- niet de performance domineren.

## Toon

Professioneel, rustig, persoonlijk en zelfverzekerd. Niet opschepperig. Niet consultant-achtig. Niet te veel "thought leadership".

Gewenste indruk:

> Jonathan is een verschilmaker: iemand die anders kijkt, systemen doorziet en nieuwe manieren van bouwen serieus vorm kan geven.

Gebruik geen letterlijke verwijzingen naar Apple, Jobs, Ive, "think different" of "crazy ones" in de sitecopy. Die inspiratie mag in het ontwerp en de energie zitten, niet als quote.

Ontwerpgevoel:

- rustige professionaliteit met een onderstroom van onafhankelijk denken;
- rebels door keuzes, niet door lawaai;
- warm en menselijk genoeg voor persoonlijke geloofwaardigheid;
- precies en zakelijk genoeg voor klanten, cofounders en professionele relaties.

## Stackrichting

Voor de latere implementatie:

- Nuxt + Vue;
- TypeScript;
- Tailwind CSS;
- lokale Markdown/content;
- CSS 3D typografie;
- native IntersectionObserver voor scroll-reveals;
- GitHub Pages als statische hosting.

Nog niet toevoegen zonder concrete noodzaak:

- CMS;
- zware smooth-scroll libraries;
- betekenisloze 3D- of shader-effecten;
- generieke UI component library;
- analytics;
- backend/formservice.
