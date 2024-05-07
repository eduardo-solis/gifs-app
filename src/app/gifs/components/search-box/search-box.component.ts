import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'gifs-search-box',
    template: `
    <h5>Buscar:</h5>
    <input type="text"
        class="form-control"
        placeholder="Buscar gifs..."
        (keyup.enter)="searchTag()"
        #txtTagInput>`//Referencia local
})

export class SearchBoxComponent {

    @ViewChild('txtTagInput')
    public txtInput!: ElementRef<HTMLInputElement>;
    
    //searchTag( newTag: string ):void {
    searchTag( ):void {
        const newTag = this.txtInput.nativeElement.value;
        console.log({newTag});
        
    }

}