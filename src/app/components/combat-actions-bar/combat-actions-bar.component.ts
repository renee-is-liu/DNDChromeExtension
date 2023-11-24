import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
    selector:    'app-combat-actions-bar',
    templateUrl: './combat-actions-bar.component.html',
    styleUrls: [ './combat-actions-bar.component.scss' ]
  })
export class CombatActionsBarComponent implements OnInit {
  @Output() nextTurnEvent = new EventEmitter<string>();
  public combatStarted = false;

  public constructor() {}

  public ngOnInit(): void {}

  public startCombat(): void {
    this.combatStarted = !this.combatStarted;
    this.nextTurnEvent.emit();
  }
}