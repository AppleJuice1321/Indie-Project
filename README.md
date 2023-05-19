# Indie-Project

Et Projekt på 3 uger, hvori der skal laves en masse planlægning, codning og udførelse. <br>
<br>
Under mine Github [Projects](https://github.com/users/AppleJuice1321/projects/2) tilføjede jeg en liste, et Kanban og Roadmap til planlægning af hjemmesiden. <br>
<br>
StyleGuides lavede jeg i Figma, hvilket ses her: [Indie Projekt StyleGuide](https://www.figma.com/file/djxRQ82yuRWp53QZPYGqw1/Indie-Projekt-StyleGuides?type=design&t=w3KVhH6YU4BWORyO-0). <br>
<br>
Et mockup af hjemmesidens gennerelle udseende og layout opbygning lavede jeg også i FIgma, ses her: [Indie Projekt Mockup](https://www.figma.com/file/TPG6GVSaYRd9BREv8Moq9U/Indie-Projekt-Mockup?type=design&node-id=0-1&t=n3VJf2JFX5z9HV0D-0).
<br>
<br>
<br>
<br>
<br>
# Mobil V. & Tablet V. & Desktrop V.
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
- 4x ikoner, når der klikkes på dem, vidersendes man til den relevante social medium.
