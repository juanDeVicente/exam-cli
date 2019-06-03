import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class QuestionService {

	questions = [];

	constructor(private http: HttpClient) {
	}

	getRandomQuestions(amount: number) {
		this.http.get("https://opentdb.com/api.php?amount=" + amount).subscribe(
			next =>{
				this.questions = next['results'];
				//this.questions['all_answers'] = this.questions['incorrect_answers'].push(this.questions['correct_answer']);
				for (let question of this.questions)
					question['incorrect_answers'].splice(Math.floor(Math.random() * question['incorrect_answers'].length), 0, question['correct_answer']);
				console.log(this.questions);
			},
			error =>{
				console.log(error);
			}
		);
	}
}
