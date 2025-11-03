import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-clients',
  imports: [RouterLink],
  templateUrl: './clients.html',
  styleUrl: './clients.scss',
})
export class Clients {
  clientTypes = [
    {
      title: 'Bar e Caffetterie',
      description: 'Crea un ambiente accogliente per famiglie con bambini',
      icon: 'bi-cup-hot',
      color: 'primary',
      products: ['Distributori palline', 'Calciobalilla', 'Giostrine']
    },
    {
      title: 'Ristoranti e Pizzerie',
      description: 'Intrattieni i bambini mentre i genitori si godono il pasto',
      icon: 'bi-shop',
      color: 'danger',
      products: ['Distributori palline', 'Giostrine', 'Area giochi']
    },
    {
      title: 'Parchi Giochi',
      description: 'Arricchisci l\'offerta di intrattenimento del tuo parco',
      icon: 'bi-tree',
      color: 'success',
      products: ['Giostrine', 'Distributori', 'Attrazioni varie']
    },
    {
      title: 'Centri Commerciali',
      description: 'Aumenta il tempo di permanenza dei visitatori',
      icon: 'bi-building',
      color: 'info',
      products: ['Giostrine', 'Distributori', 'Area intrattenimento']
    },
    {
      title: 'Centri Sportivi',
      description: 'Offri svago e divertimento agli atleti',
      icon: 'bi-trophy',
      color: 'warning',
      products: ['Calciobalilla', 'Biliardi', 'Distributori']
    },
    {
      title: 'Ludoteche',
      description: 'Amplia la gamma di giochi disponibili',
      icon: 'bi-controller',
      color: 'secondary',
      products: ['Tutti i prodotti', 'Soluzioni personalizzate']
    }
  ];

  benefits = [
    {
      icon: 'bi-graph-up',
      title: 'Più Profitti',
      description: 'Genera guadagni extra con investimenti minimi',
      color: 'success'
    },
    {
      icon: 'bi-people',
      title: 'Più Clienti',
      description: 'Attira nuove famiglie e fidelizza i clienti',
      color: 'primary'
    },
    {
      icon: 'bi-clock',
      title: 'Più Permanenza',
      description: 'I clienti restano più a lungo nel locale',
      color: 'warning'
    },
    {
      icon: 'bi-shield-check',
      title: 'Zero Rischi',
      description: 'Assistenza completa e manutenzione inclusa',
      color: 'info'
    }
  ];

  testimonials = [
    {
      name: 'Marco Rossi',
      business: 'Bar Centrale, Roma',
      text: 'Da quando abbiamo installato i distributori, molte più famiglie vengono da noi. I bambini adorano le palline magiche!',
      initials: 'MR'
    },
    {
      name: 'Laura Bianchi',
      business: 'Pizzeria La Bella Napoli',
      text: 'Le giostrine sono state un\'ottima aggiunta. I bambini giocano mentre i genitori cenano tranquilli. Consigliatissimo!',
      initials: 'LB'
    },
    {
      name: 'Giuseppe Verdi',
      business: 'Centro Sportivo Olympic',
      text: 'Il calciobalilla è diventato un punto di ritrovo. Ottima qualità e servizio impeccabile da parte di FS Giochi.',
      initials: 'GV'
    },
    {
      name: 'Francesca Romano',
      business: 'Caffè del Corso',
      text: 'Investimento minimo, guadagni interessanti. Il supporto di FS Giochi è sempre disponibile e professionale.',
      initials: 'FR'
    },
    {
      name: 'Antonio Greco',
      business: 'Ludoteca Arcobaleno',
      text: 'Collaboriamo da anni con FS Giochi. Prodotti di qualità e prezzi competitivi. Molto soddisfatti!',
      initials: 'AG'
    },
    {
      name: 'Silvia Costa',
      business: 'Ristorante Il Giardino',
      text: 'I nostri piccoli clienti si divertono un mondo. Abbiamo notato un aumento delle famiglie che tornano da noi!',
      initials: 'SC'
    }
  ];
}
