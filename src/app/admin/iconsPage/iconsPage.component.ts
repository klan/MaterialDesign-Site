import { Component, Input } from '@angular/core';
import { LoginService } from 'app/admin/services/login.service';

@Component({
  selector: 'mdi-admin-icons-page',
  templateUrl: './iconsPage.component.html',
  styleUrls: ['./iconsPage.component.scss']
})
export class AdminIconsPageComponent {

  constructor (
    private loginService: LoginService
  ) {}

  async ngOnInit () {
    await this.loginService.isAuthed();
    // Authed
    console.log('authed');
  }
  
  public selectIcon () {
    
  }


}