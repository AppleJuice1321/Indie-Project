# Indie-Project - Republic of Sound

Et Projekt på 3 uger, hvori der skal laves en masse planlægning, codning og udførelse. <br>
<br>
Under mine Github [Projects](https://github.com/users/AppleJuice1321/projects/2) tilføjede jeg en liste, et Kanban og Roadmap til planlægning af hjemmesiden. <br>
<br>
StyleGuides lavede jeg i Figma, hvilket ses her: [Indie Projekt StyleGuide](https://www.figma.com/file/djxRQ82yuRWp53QZPYGqw1/Indie-Projekt-StyleGuides?type=design&t=w3KVhH6YU4BWORyO-0). <br>
<br>
Et mockup af hjemmesidens gennerelle udseende og layout opbygning lavede jeg også i FIgma, ses her: [Indie Projekt Mockup](https://www.figma.com/file/TPG6GVSaYRd9BREv8Moq9U/Indie-Projekt-Mockup?type=design&node-id=0-1&t=n3VJf2JFX5z9HV0D-0).

# Opgaveformulering
![image](https://github.com/AppleJuice1321/Indie-Project/assets/117173708/080ed0ed-0f46-4c10-8adf-42043532fad8)

# Opstart af Virksomhed
I dette projekt skal der bygges en hjemmeside til en virksomhed. Vi skal lade som om vi er færdiguddannet webudvikler og venter på næste projekt. Virksomheden, som vi selv finder på, kontakter os og bær om en hjemmeside, de kan bruge for at sælge deres varer digitalt.

## Min virksomhed
Virksomheden Republik of Sound (RoS) kontaktede mig for at bygge en webshop til deres forretning. RoS er specialiseret i at sælge tilbehør til elektroniske enhed, hvilket er headsets, headphones og earpods. Ved hjælp af en digital platform kan de udvide deres rygte og hoppe ind i det digitale marked.
RoS tager fokus i at sælge en række produkter fra adskillige producenter og gør dem tilgængeligt til alle. Hvad virksomheden specielt sætter pris på er den gode kvalitet den bringer med sig, om det er til at høre musik, eller computerspil, så er der altid noget for kunden, samtidig med at rådgive og tilbyde service for at hjælpe kunden med at få den bedst mulig oplevelse til deres budget.

## Virksomhedens koncept
-	Virksomheden sælger tre slags af tilbehør der falder ind under samme kategori til spil og musik
-	Virksomheden tilbyder en service til diverse ting, så som support, refundering eller rådgivning
-	Virksomheden gør det nemmere for lokale folk at købe tilbehør til deres enheder
-	Virksomhedens sammenarbejde med diverse producenter og reklamationer af nye produkter

## SWOT-model (styrker og svagheder)
<img width="439" alt="image" src="https://github.com/AppleJuice1321/Indie-Project/assets/117173708/dcf3169f-6d6b-4c00-9328-bfc714d5ed2b"> <br>

## Konkurrenter
For at fastlægge en virksomhed er det supervigtigt at man forholder sig til konkurrenterne. Andre firmaer/virksomheder har muligvis mane til forretningsmodeller endda nærmest identiske og har derfra i forvejen bygget et fast punkt for dem i det digitale marked. For at sikre sig, at ens virksomhed tilbyder en værdi, som andre måske ikke har er det en god idé at undersøge hvad lignende virksomheder tilbyder og i hvilken form.
<img width="440" alt="image" src="https://github.com/AppleJuice1321/Indie-Project/assets/117173708/a0930808-16c2-4344-becf-2cf55c4e0426">

# Funktionalitet til Mobil V., Tablet V. & Desktrop V.

## Header

#### Burgermenu: Clickable element + icon
- Så snart der klikkes på burgermenuen, så fremkommer en lille navigationsbar der viser links.
- Når der klikkes på selve linksne, så vidersendes man til de relevante sider.
- Når der klikkes på krydsknappen inde i den "ny" menu, skal den forsvinde igen.

```diff
(Desktop V. indeholder ikke et burgermenu, en eksisterende navigationsbar findes)
```

Burgermenu On Click -> Navigationbar(vertical) appeares (with animation: ease-in) <br>
New navigation On Click -> Navigationbar disappears (with animation: ease-out)

#### Logo: Clickable element + img
- Når der klikkes på logoet, så skal hjemmesiden blot genindlæses.
- Når der klikkes på loget via en anden side på hjemmesiden, så bliver man vidersent til hovedesiden og den genindlæses.

#### Searchbar: Clickable element + icon
- Når der klikkes på søgelinjen, så skal den highlightes og kunne skrives i.
- Når man er inde i søgelinjen og skriver et bogstag eller et helt ord, så fremkommer der søgeresultater.

Searchbar On Click -> Searchbar becomes highlighted & can be used to search

#### Profile: Clickable element + icon
- Når der klikkes på profil ikonet, så fremkommer en side med et login system. Når dette er blevet korrekt udfyldt bliver man vidersent til profilsiden.
- Har brugeren ikke en profil, så kan én oprettes på login systemet. Der vidersendes til endnu en side hvor den oprettes.
- Har brugeren et profil, så skal der blot logges ind og der vidersendes til profilsiden.
- Profilsiden indeholder et billede, navn, email, og bruger ID.

#### Cart: Clickable element + icon
- Når der klikkes på kurv ikonet, så vidersendes man til en side med de gemte produkter, samt et billede, pris, samlet pris og køb.
- Når et produkt tilføjes i kurven, så skal der vises en lille indikator med hvor mange varer man har gemt i kurven.

## Main

#### Card 1: With clickable button
- Når der klikkes på "se mere" button, vidersendes man til en side med alle varer.

#### Card Headsets: With clickable button
- Her kan der swipes til venstre eller/og højre for at se flere produkter af kun samme kategori.
- Når der klikkes på "Læg i kurv" button, gemmes dette i kurve-indikatoren

Button On Click -> Adds +1 to the cart-indikator

#### Card Headphones: With clickable button
- Her kan der swipes til venstre eller/og højre for at se flere produkter af kun samme kategori.
- Når der klikkes på "Læg i kurv" button, gemmes dette i kurve-indikatoren

Button On Click -> Adds +1 to the cart-indikator

#### Card Earpods: With clickable button
- Her kan der swipes til venstre eller/og højre for at se flere produkter af kun samme kategori.
- Når der klikkes på "Læg i kurv" button, gemmes dette i kurve-indikatoren

Button On Click -> Adds +1 to the cart-indikator

## **Footer**

#### 1 section:
- 4x Tilbud a service i dropdowns, når der klikkes, så vises der et vindue under dropdown med relevant information.

#### 2 section:
- 4x ikoner, når der klikkes på dem, vidersendes man til den relevante sociale medium.
