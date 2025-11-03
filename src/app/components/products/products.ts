import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [RouterLink],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products {
  products = [
    {
      id: 1,
      category: 'Distributori Automatici',
      title: 'Distributori di Palline Magiche e con Sorpresa',
      description: 'Distributori automatici meccanici che dispensano palline magiche e palline contenenti sorprese per bambini. Non richiedono corrente elettrica e sono perfetti per bar, ristoranti e locali commerciali.',
      icon: 'bi-gift-fill',
      color: 'primary',
      features: [
        'Funzionamento meccanico senza elettricità',
        'Manutenzione minima richiesta',
        'Installazione semplice e veloce',
        'Vari modelli e dimensioni disponibili',
        'Palline con giocattoli certificati',
        'Massima sicurezza per i bambini'
      ],
      benefits: [
        'Guadagno immediato',
        'Zero costi energetici',
        'Attira famiglie',
        'Basso investimento'
      ]
    },
    {
      id: 2,
      category: 'Giochi da Tavolo',
      title: 'Calciobalilla e Biliardini',
      description: 'Noleggio e vendita di calciobalilla professionali e biliardini di alta qualità. Ideali per bar, sale giochi, centri sportivi e aree ricreative.',
      icon: 'bi-trophy-fill',
      color: 'success',
      features: [
        'Tavoli professionali certificati',
        'Modelli per adulti e bambini',
        'Noleggio a breve e lungo termine',
        'Possibilità di acquisto rateale',
        'Manutenzione inclusa nel noleggio',
        'Assistenza tecnica garantita'
      ],
      benefits: [
        'Attrarre clientela',
        'Fidelizzare i clienti',
        'Aumentare permanenza',
        'Servizio completo'
      ]
    },
    {
      id: 3,
      category: 'Giochi per Bambini',
      title: 'Giostrine a Dondolo',
      description: 'Giostrine meccaniche a dondolo per bambini, disponibili in vari modelli e temi. Perfette per parchi giochi, centri commerciali, bar e ristoranti family-friendly.',
      icon: 'bi-arrow-repeat',
      color: 'warning',
      features: [
        'Modelli certificati e sicuri',
        'Vari temi e personaggi',
        'Funzionamento meccanico',
        'Materiali resistenti agli agenti atmosferici',
        'Facili da installare',
        'Manutenzione programmata inclusa'
      ],
      benefits: [
        'Intrattiene i bambini',
        'Locale family-friendly',
        'Poca manutenzione',
        'Alta redditività'
      ]
    },
    {
      id: 4,
      category: 'Tavoli da Gioco',
      title: 'Biliardi Professionali',
      description: 'Tavoli da biliardo professionali e semi-professionali in noleggio o vendita. Adatti per bar, pub, sale ricreative e circoli.',
      icon: 'bi-circle-fill',
      color: 'info',
      features: [
        'Tavoli omologati per competizioni',
        'Varie dimensioni disponibili',
        'Accessori completi inclusi',
        'Installazione professionale',
        'Noleggio flessibile',
        'Manutenzione periodica gratuita'
      ],
      benefits: [
        'Clientela fidelizzata',
        'Organizza tornei',
        'Ambiente elegante',
        'Investimento sicuro'
      ]
    }
  ];
}
