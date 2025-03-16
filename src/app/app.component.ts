import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
   <main>
    <router-outlet/>
   </main>
  `,
})
export class AppComponent {
  title = 'plan-engine';
}
