import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CombatActionsBarComponent } from './components/combat-actions-bar/combat-actions-bar.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { routes } from './app.routes';
import { CombatTrackerComponent } from './components/combat-tracker/combat-tracker.component';
import { CharacterInputComponent } from './components/character-input/character-input.component';

@NgModule({
    imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule.forRoot(routes)
    ],
    declarations: [
      AppComponent,
      CombatTrackerComponent,
      CharacterInputComponent,
      CombatActionsBarComponent,
      CharacterListComponent
    ],
    bootstrap: [ AppComponent ],
  })
  export class AppModule { }