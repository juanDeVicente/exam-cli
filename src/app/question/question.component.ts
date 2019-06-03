import { Component, OnInit } from '@angular/core';
import {QuestionService} from '../servicies/question.service';
import {compareNumbers} from '@angular/compiler-cli/src/diagnostics/typescript_version';

@Component({
	selector: 'app-question',
	templateUrl: './question.component.html',
	styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

	private questions;

	constructor(private questionService: QuestionService) {

	}

	ngOnInit() {
		this.questionService.getRandomQuestions(5);
		console.log(this.questions);
	}

	checkQuestion(question: number, answer: number)
	{
		for (let i = 0; i < this.questionService.questions[question]['incorrect_answers'].length ; i++) {
			document.getElementById(question + '' + i).style.backgroundColor = 'white';
			document.getElementById(question + '' + i).style.color = 'grey';
		}

		if (this.questionService.questions[question]['incorrect_answers'][answer] == this.questionService.questions[question]['correct_answer'])
			document.getElementById(question + '' + answer).style.backgroundColor = 'green';
		else
			document.getElementById(question + '' + answer).style.backgroundColor = 'red';

		document.getElementById(question + '' + answer).style.color = 'white';
	}

}
