import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.css']
})
export class NavigateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  toggle(){
    var div = document.getElementById('nav__bar');
    if(div.classList.contains('showDisplay')){
      div.classList.remove('showDisplay')
    }else{
      div.classList.add('showDisplay')
    }
  }

}
