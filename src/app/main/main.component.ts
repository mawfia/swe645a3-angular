import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('title').text('Main | Student Survey');
    if(localStorage.getItem("submit")) this.myFunction(JSON.parse(localStorage.getItem("submit")));
    if(localStorage.getItem("cancel")) this.myFunction(false);
  }

  myFunction(survey:any):void {

  $('#snackbar').toggleClass('show');
  $('#snackbar').css('background-color', survey ? '#33cc33' : '#1aa3ff');
  $('#snackbar').css('color','#fff');
  $('#snackbar').text(survey ? `Received survey for ${survey.firstName} ${survey.lastName}.` : `Survey cancelled.`);
  setTimeout(() => { $("#snackbar").toggleClass('show'); localStorage.clear(); }, 3000);
}

}
