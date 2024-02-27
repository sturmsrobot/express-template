# Express Template

1. `npm install` Pakete nachinstallieren
2. `npm run dev`, um API-Server auf dem Port, welcher in der `.env` Datei definiert ist, zu starten

## Dokumentation

`/test` : Soll eine Testroute darstellen und Gibt ein Hello World! zurück

## Szenario

1. Wir möchten eine Todo App entwickeln
2. User Login
3. User Sign Up
4. Benutzer/in soll seine/ihre Todos verwalten können

## Ordnerstruktur

## [`./index.js`](./index.js): Eintrittspunkt der App

- Sagt Verweise mit `/v1` auf den [AppRouter](./src/routes/index.js)
  --> Bindet über `/v1` den AppRouter ein

## [AppRouter](./src/routes/index.js)

- Approuter bindet weitere Routen ein
- bindet die [/user](./src/routes/user/index.js) mit ein:User Route ist also unter dem Pfad /v1/user erreichbar
- bindet die [/auth](./src/routes/auth/index.js) mit ein:Auth Route ist also unter dem Pfad /v1/auth erreichbar
- bindet die [/todos](./src/routes/todos/index.js) mit ein:Todos Route ist also unter dem Pfad /v1/todos erreichbar

## [src/routes](./src/routes)

Hier befinden sich alle untergeordneten routen

### [src/routes/auth](./src/routes/auth/index.js)

Hier befindet sich alle Routen mit dem Prefix `/v1/auth/...`

1. GET - /v1/auth/login: Benutzer einloggen
2. POST - /v1/auth/signup - Benutzer erstellen
3. DELETE - /v1/auth/logout - Benutzer ausloggen

### [src/routes/todos](./src/routes/todos/index.js)

Hier befindet sich alle Routen mit dem Prefix `/v1/todos/...`

1. PUT - /v1/todos/update: Update Todo
2. PUT - /v1/todos/mark: Todo erledigt markieren
3. POST - /v1/todos/create Todo erstellen
4. DELETE - /v1/todo/delete TODO löschen
5. GET - /v1/todos/byid: Ein einzelnes todo zurück geben
6. GET - /v1/todos/byuserid: Alle Todos von einem Benutzer

### [src/routes/user](./src/routes/user/index.js)

Hier befindet sich alle Routen mit dem Prefix `/v1/user/...`

1. GET - /v1/user/profile: Profil des Nutzers erhalten
2. PUT - /v1/user/update: Profil Updaten
3. DELETE /v1/user/delete: Löschen des Benutzers
