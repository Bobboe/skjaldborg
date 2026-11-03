# Skjaldborg – PWA

Spelet är en enda fil (index.html) med all grafik, musik och kod inbyggd. Övriga filer gör att det kan installeras som app i helskärm.

## Publicera på Vercel
1. Logga in på vercel.com → Add New → Project.
2. Enklast: lägg mappen i ett nytt GitHub-repo och importera det. Framework preset: **Other**. Ingen build-kommando, output directory: `.` (roten).
3. Alternativ utan GitHub: kör `npx vercel --prod` i den här mappen.

## Installera på iPhone
1. Öppna adressen i **Safari**.
2. Dela → **Lägg till på hemskärmen**.
3. Starta Skjaldborg från hemskärmen. Spelet körs då i helskärm utan webbläsarfält.
4. Stäng av rotationslåset och håll telefonen liggande.

Ljud: spelet ljuder även när ringljudsknappen är på tyst (iOS 17+). Ljudknappen uppe till höger stänger av allt.

## Uppdatera
Ersätt index.html och höj versionsnamnet `C` i sw.js (t.ex. `skjaldborg-v57`) så att installerade appar hämtar den nya versionen.
