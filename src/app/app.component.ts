import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BotonesComponent } from './components/botones/botones.component';
import { ServerService } from './services/server.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BotonesComponent  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'practicegame';

  serverService = inject(ServerService);
}
