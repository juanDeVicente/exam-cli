import {Component, OnInit} from '@angular/core';
import {QuestionService} from '../servicies/question.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	constructor(private questionService: QuestionService) {
	}

	ngOnInit() {
	}

	newGame(){
		this.questionService.getRandomQuestions(5);
	}

}
