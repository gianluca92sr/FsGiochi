# FsGiochi

Un'applicazione web per giochi sviluppata con Angular.

## Descrizione

FsGiochi è un progetto web moderno costruito con il framework Angular, progettato per fornire un'esperienza di gioco interattiva e coinvolgente.

## Prerequisiti

Prima di iniziare, assicurati di avere installato:

- [Node.js](https://nodejs.org/) (versione LTS consigliata)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/) come package manager
- [Angular CLI](https://angular.io/cli) - Installabile con `npm install -g @angular/cli`

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

oppure, se usi yarn:
```bash
yarn install
```

## Sviluppo

Per avviare il server di sviluppo:

```bash
ng serve
```

Naviga su `http://localhost:4200/`. L'applicazione si ricaricherà automaticamente se modifichi uno dei file sorgente.

## Build

Per compilare il progetto per la produzione:

```bash
ng build
```

Gli artefatti della build saranno salvati nella directory `dist/`.

### Build di produzione

Per una build ottimizzata per la produzione:

```bash
ng build --configuration production
```

## Test

### Test unitari

Esegui i test unitari con:

```bash
ng test
```

### Test end-to-end

Esegui i test end-to-end con:

```bash
ng e2e
```

## Struttura del Progetto

```
FsGiochi/
├── src/                    # File sorgente dell'applicazione
│   ├── app/               # Componenti e moduli Angular
│   ├── assets/            # File statici (immagini, font, ecc.)
│   ├── environments/      # Configurazioni per ambienti diversi
│   └── index.html         # Pagina HTML principale
├── .gitignore             # File e cartelle da ignorare in Git
└── README.md              # Questo file
```

## Tecnologie Utilizzate

- **Angular** - Framework per applicazioni web
- **TypeScript** - Linguaggio di programmazione
- **HTML5/CSS3** - Markup e styling

## Contribuire

Se vuoi contribuire al progetto:

1. Fai un fork del repository
2. Crea un branch per la tua feature (`git checkout -b feature/NuovaFunzionalita`)
3. Committa le tue modifiche (`git commit -m 'Aggiunge nuova funzionalità'`)
4. Pusha sul branch (`git push origin feature/NuovaFunzionalita`)
5. Apri una Pull Request

## Licenza

Questo progetto è distribuito sotto licenza MIT. Vedi il file `LICENSE` per maggiori dettagli.

## Autore

**Gianluca Angelucci** - [gianluca92sr](https://github.com/gianluca92sr)

## Supporto

Per domande o problemi, apri una [issue](https://github.com/gianluca92sr/FsGiochi/issues) su GitHub.

---

⭐ Se questo progetto ti è stato utile, lascia una stella!
