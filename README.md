# FsGiochi

Un sito web moderno per la distribuzione e noleggio di giochi per bambini, sviluppato con Angular 20.

## Descrizione

FsGiochi è un sito web moderno che presenta i servizi di FS Giochi, azienda specializzata nella distribuzione e noleggio di:
- Distributori automatici di palline magiche e con sorprese
- Calciobalilla e biliardini professionali
- Giostrine a dondolo per bambini
- Biliardi professionali

Il sito è rivolto a bar, ristoranti, parchi giochi, centri commerciali, centri sportivi e ludoteche nella zona di Roma.

## Tecnologie Utilizzate

- **Angular 20** - Framework per applicazioni web
- **TypeScript 5.9** - Linguaggio di programmazione
- **Bootstrap 5** - Framework CSS per design responsivo
- **SCSS** - Preprocessore CSS
- **Reactive Forms** - Gestione avanzata dei form
- **Bootstrap Icons** - Set di icone moderne

## Prerequisiti

Prima di iniziare, assicurati di avere installato:

- [Node.js](https://nodejs.org/) (versione 20.x o successiva)
- [npm](https://www.npmjs.com/) (versione 10.x o successiva)
- [Angular CLI](https://angular.io/cli) versione 20 - Installabile con `npm install -g @angular/cli@20`

## Installazione

1. Clona il repository:
```bash
git clone https://github.com/gianluca92sr/FsGiochi.git
cd FsGiochi
```

2. Installa le dipendenze:
```bash
npm install
```

## Sviluppo

Per avviare il server di sviluppo:

```bash
npm start
```

oppure:

```bash
ng serve
```

Naviga su `http://localhost:4200/`. L'applicazione si ricaricherà automaticamente se modifichi uno dei file sorgente.

## Build

### Build di sviluppo

```bash
npm run build
```

### Build di produzione per GitHub Pages

```bash
npm run build:prod
```

Gli artefatti della build saranno salvati nella directory `dist/FsGiochi/browser/`.

## Deployment su GitHub Pages

Il sito è configurato per il deployment automatico su GitHub Pages tramite GitHub Actions.

### Setup iniziale

1. Vai su Settings → Pages nel repository GitHub
2. Seleziona "GitHub Actions" come sorgente
3. Il workflow si attiverà automaticamente ad ogni push su `main`

### Deploy manuale

Puoi anche attivare il deploy manualmente dalla tab "Actions" del repository.

## Struttura del Progetto

```
FsGiochi/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Workflow GitHub Actions per deployment
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── home/          # Pagina principale
│   │   │   ├── products/      # Pagina prodotti
│   │   │   ├── clients/       # Pagina clienti
│   │   │   ├── contact/       # Pagina contatti con form
│   │   │   ├── navbar/        # Barra di navigazione
│   │   │   └── footer/        # Footer
│   │   ├── app.config.ts      # Configurazione app
│   │   ├── app.routes.ts      # Routing
│   │   └── app.ts             # Componente principale
│   ├── styles.scss            # Stili globali
│   └── index.html             # HTML principale
├── angular.json               # Configurazione Angular
├── package.json               # Dipendenze npm
└── README.md                  # Questo file
```

## Caratteristiche

### Pagine

- **Home**: Landing page con hero section, features, anteprima prodotti e CTA
- **Prodotti**: Catalogo dettagliato di tutti i prodotti con caratteristiche e vantaggi
- **Clienti**: Tipologie di clienti target, vantaggi e testimonianze
- **Contatti**: Form di contatto con validazione reactive forms

### Design

- Design moderno con gradienti e animazioni
- Completamente responsivo (mobile-first)
- Card con effetti hover
- Icone Bootstrap integrate
- Palette colori personalizzata

### Form di Contatto

Il form di contatto utilizza **Reactive Forms** con validazione completa:
- Validazione in tempo reale
- Messaggi di errore personalizzati
- Feedback visivo sullo stato del form
- Simulazione invio con loading state

## Test

Esegui i test unitari con:

```bash
npm test
```

## Contribuire

Se vuoi contribuire al progetto:

1. Fai un fork del repository
2. Crea un branch per la tua feature (`git checkout -b feature/NuovaFunzionalita`)
3. Committa le tue modifiche (`git commit -m 'Aggiunge nuova funzionalità'`)
4. Pusha sul branch (`git push origin feature/NuovaFunzionalita`)
5. Apri una Pull Request

## Licenza

Questo progetto è distribuito sotto licenza MIT.

## Autore

**Gianluca Angelucci** - [gianluca92sr](https://github.com/gianluca92sr)

## Supporto

Per domande o problemi, apri una [issue](https://github.com/gianluca92sr/FsGiochi/issues) su GitHub.

---

⭐ Se questo progetto ti è stato utile, lascia una stella!
