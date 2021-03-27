# Osa0

Osa0 tehtävät

## 0.4: uusi muistiinpano

käyttäjä->selain: Päivitä input-value

note over käyttäjä:
käyttäjä syöttää input-kenttään merkkejä, jolloin
input-elementin "value"-attribuutti päivittyy
end note

käyttäjä->selain: Paina input[type:submit]

note over selain:
\#note_form:in onSubmit-tapahtumankuuntelija
triggeröityy ja luo objektin käyttäen
formin sisällä olevan input-elementin arvoa
ja lisää sen notes-listaan
end note

selain->selain: redrawNotes

note over selain:
redrawNotes manipuloi DOM:ia luomalla
notes-listan uudelleen päivitetyillä arvoilla
end note

note over selain:
selain lähettää luodun noten palvelimelle
end note

selain->palvelin: HTTP POST /ecampleapp/new_note_spa \n body: {content: string, date: Date}

note over palvelin:
Palvelin validoi ja formatoi
pyynnön sisällön
end note

alt uusi note ei läpäise validointia
palvelin->selain: status code 400
else uusi note läpäisee validoinnin
palvelin->palvelin: lisää note listaan
palvelin->selain: status code 201 \n body: {message: "note created"}
end

## 0.5: Single Page App

selain->palvelin: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa
palvelin-->selain: HTML-koodi
selain->palvelin: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
palvelin-->selain: main.css
selain->palvelin: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa.js
palvelin-->selain: spa.js
note over selain
Selain ajaa haetun scriptin
(luo muuttujat ja funktiot sekä
kutsuu data.json endpointtia)
end note
selain->palvelin: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
palvelin-->selain: data.json
note over selain
onreadystatechange -tapahtuman kuuntelija
säilöö haetun datan notes-muuttujaan ja
luo uudet elementit DOM:iin
end note
selain->selain: Luo haettu data DOM:iin
