import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Character } from "../../models/character.model";
import { Status } from "../../models/status.enum";

@Component({
    selector: "app-character-input",
    templateUrl: "./character-input.component.html"
})
export class CharacterInputComponent implements OnInit {
    @Output() newCharacterEvent = new EventEmitter<Character>();

    public name: string;
    public initiative: number;

    public ngOnInit(): void {
        
    }

    public addNewCharacter() {
        let character = new Character();
        character.name = this.name;
        character.initiative = this.initiative;
        character.status = Status.NORMAL;

        this.newCharacterEvent.emit(character);
    }
}