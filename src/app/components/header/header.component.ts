import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  btns = [
    {title: "Физическая культура", link: "fk"},
    {title: "Доп. Образование", link: "DO"},
    {title: "ВСОШ", link: "vsoh"},
    {title: "Военно-патриотическое направление", link: ""},

  ]
}
