import { Component, Input } from '@angular/core';
import { WordLink } from './../types/word-link';
import { WordLinkHoverComponent } from './../wordlinkhover/wordlinkhover.component';
import { StructuredText } from './../types/structured-text';

@Component({
	selector: 'text',
	templateUrl: './text.component.html',
	styleUrls: ['./text.component.css']
})
export class TextComponent {
	@Input() importantWords = []
	@Input() helpfulLinks: WordLink[]
	@Input() title = ""
	@Input() inputArray: string[]
	formattedParagraphs: Object[] = new Array(0);

	ngOnInit(){
		for(var i = 0; i < this.inputArray.length; i++){
			let paragraph = this.inputArray[i].split(" ")
			let currentFParagraph: Object[] = new Array(0);
			for (var k = 0; k < paragraph.length; k++){
				let word = paragraph[k]
				var url = ""
				for (var j = 0; j < this.helpfulLinks.length; j++){
					if(word == this.helpfulLinks[j].word){
						url = this.helpfulLinks[j].url
						break
					}
				}
				if(this.importantWords.indexOf(word) != -1) {
					currentFParagraph.push({word: word, isHighlighted: true, url: url})
				}
				else {
					currentFParagraph.push({word: word, isHighlighted: false})
				}
			}
			this.formattedParagraphs.push(currentFParagraph)
		}
	}
}