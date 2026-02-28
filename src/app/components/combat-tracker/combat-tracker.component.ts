import { Component, OnInit } from "@angular/core";
import { Character } from "../../models/character.model";
import { Status } from "../../models/status.enum";

@Component({
    selector: "app-combat-tracker",
    templateUrl: "./combat-tracker.component.html",
    styleUrls: [ './combat-tracker.component.scss' ]
})
export class CombatTrackerComponent implements OnInit {
    public combatStarted = false;

    public characters: Character[] = [];
    
    public ngOnInit(): void {
        
    }

    public switchSpotlight(): void {
        let index = this.characters.findIndex((value) => value.isSpotlight);
        if (index > -1) {
            this.characters[index].isSpotlight = false;
            this.characters[(index + 1) % this.characters.length].isSpotlight = true;
        } else {
            this.characters[0].isSpotlight = true;
        }
        console.log(index);
    }

    public changeStatus(index: number): void {
        let statusList = Object.values(Status).map((value) => value.toString());
        
        this.characters[index].status
    }

    public addCharacter(newCharacter: Character) {
        this.characters.push(newCharacter);

        if (this.characters.length > 1) {
            this.characters.sort((a, b) => b.initiative - a.initiative);
        }
    }
}