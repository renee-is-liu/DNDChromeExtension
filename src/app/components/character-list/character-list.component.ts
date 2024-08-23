import { Component, OnInit, Input, SimpleChanges } from "@angular/core";
import { Character } from "../../models/character.model";

@Component({
    selector: "app-character-list",
    templateUrl: "./character-list.component.html"
})
export class CharacterListComponent implements OnInit {
    @Input() characters: Character[];

    public ngOnInit(): void {}

    public ngOnChanges(change: SimpleChanges) {
        console.log(change);
    }
}