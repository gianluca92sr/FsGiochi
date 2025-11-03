import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  features = [
    {
      icon: 'bi-gear-fill',
      title: 'Nessuna Manutenzione',
      description: 'Macchine meccaniche che non richiedono elettricità'
    },
    {
      icon: 'bi-cash-coin',
      title: 'Guadagno Extra',
      description: 'Genera profitti aggiuntivi per la tua attività'
    },
    {
      icon: 'bi-people-fill',
      title: 'Attrai Famiglie',
      description: 'Rendi il tuo locale family-friendly'
    },
    {
      icon: 'bi-headset',
      title: 'Supporto Continuo',
      description: 'Assistenza commerciale sempre disponibile'
    }
  ];

  products = [
    {
      icon: 'bi-gift-fill',
      title: 'Distributori Palline',
      description: 'Distributori automatici di palline magiche e con sorprese',
      features: ['Nessuna elettricità', 'Facili da installare', 'Manutenzione minima']
    },
    {
      icon: 'bi-trophy-fill',
      title: 'Calciobalilla',
      description: 'Noleggio e vendita di biliardini professionali',
      features: ['Tavoli professionali', 'Noleggio flessibile', 'Modelli per tutti']
    },
    {
      icon: 'bi-arrow-repeat',
      title: 'Giostrine',
      description: 'Giostrine a dondolo per bambini di tutte le età',
      features: ['Sicure e certificate', 'Manutenzione inclusa', 'Vari modelli']
    }
  ];
}
