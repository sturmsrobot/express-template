## Aufgabe 1: HTTP Status Codes

### 1.1 Macht euch mit der Struktur des Repos vertraut

### 1.2 Damit wir einen frischen start haben, nehmt dieses Repo gerne als Ausgangspunkt

--> Alles in euer neues Kopieren außer `.git, package-lock.json, node_modules, .gitattributes`
--> `npm i`
--> `npm run dev`

### 1.3 Bindet in alle Anfragen Status Codes mit ein (Jede Route eine Anfrage)

### 1.4 Wo sinnvoll überprüft, ob eure Parameter mitgegeben werden und falls nicht, gebt einen BAD_REQUEST status zurück

[Beispiel findet ihr hier](https://github.com/tomtechstarter/express-template/blob/311cbf4b75c4a3a692869e1eb6e24a1000ebdf45/src/routes/user/index.js#L27)

## Aufgabe 2: Neues Feature

Man soll zukünftig die Möglichkeit haben Mitglieder zu seinen Todos hinzuzufügen, die einem bei der Abarbeitung helfen können
Für die Funktion soll eine neuer Endpunkt eingerichtet werden unter `/v1/members,...`
Anforderungen an diesen Endpunkt:

- Mitglieder hinzufügen
- Mitglieder entfernen
- Mitglieder auslesen

### 2.1 Überlegt euch geignete Routen für diese Anforderungen

### (2.2 Bindet diese Routen in euren Code ein)
