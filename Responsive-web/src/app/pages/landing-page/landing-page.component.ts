import { Component, OnInit,Input,Output } from '@angular/core';
import {TileDes} from '../../tile/tile.component';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  headText:string;
  skillInformation: Array<TileDes> = [
    {
      name: 'HTML',
      description: ' I will write semantic markup in HTML5 which is the latest standard of core technology of web.',
      imageUrl: 'assets/images/img1.png'
    },
    {
      name: 'CSS',
      description: 'I will style web pages using CSS3,leveraging on the new CSS3 modules,making modern websites.',
      imageUrl: 'assets/images/css3.png'
    },
    {
      name: 'Responsive Web Design',
      description: ' I will build websites that look awesome not only on desktops,but also on mobile phones and tablets.',
      imageUrl: 'assets/images/res.png'
    },
    {
      name: 'Unix',
      description: ' I will become a ninja hacker who prefer command line to GUI.',
      imageUrl: 'assets/images/Unix.png'
    },
    {
      name: 'Angular',
      description: ' I will build single page application using Angular 2.I will build full-fledge web apps that can be used in real life.',
      imageUrl: 'assets/images/angular.png'
    },
    {
      name: 'Javascript',
      description: 'I will define javascript to define the behaviour of webpages.I will dive deeper into amazing parts of js.',
      imageUrl: 'assets/images/js.png'
    },
    {
      name: 'RXJs',
      description: 'I will build event driven,resilient and responsive apps using Reactive Architecture.',
      imageUrl: 'assets/images/Rx.png'
    },
    {
      name: 'JQuery',
      description: 'I will enhance the behaviour of web pages leveraging on jquery and jquery plugin.',
      imageUrl: 'assets/images/jquery.png'
    },
    {
      name: 'UI design',
      description: ' I will learn basics of UI and UX design and use those concepts in building apps that are both functional and usable ',
      imageUrl: 'assets/images/ui.png'
    },
    {
      name: 'Git & Heroku',
      description: ' I will start following git work flow using github.I will also deploy Ir applications with Heroku.',
      imageUrl: 'assets/images/git.png'
    },
    {
      name: 'Mongo Db',
      description: ' I will use MongoDB to store Ir apps data in JSON-like document format that can be quickly accessed via fast queries.',
      imageUrl: 'assets/images/mongo.png'
    },
    {
      name: 'Express',
      description: ' I will use express.js to organize Ir web application into an MVC architecture in the server side.',
      imageUrl: 'assets/images/express1.png'
    }
  ]


  constructor() {
    this.headText="We are Learning";
   }

  ngOnInit() {
  }

}
