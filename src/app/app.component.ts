import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FAPP';
  newMemberName = "";
  members: string[] = [];
  errorMessage = "";

  addMember() {
    if (!this.newMemberName) {
      this.triggerError();
    }

    this.members.push(this.newMemberName);
    this.changeInput('');
  }

  private triggerError() {
    const twoSeconds: number = 2000;
    this.errorMessage = "Name can't be empty";
    setTimeout(() => {
      this.errorMessage = "";
    }, twoSeconds);
  }

  changeInput(member: string) {
    this.newMemberName = member;
  }
}
