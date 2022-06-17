import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'FAPP';
  newMemberName = '';
  members: string[] = [];
  errorMessage = '';
  numberOfTeams: number | '' = '';
  teams: string[][] = [];

  addMember() {
    if (!this.newMemberName) {
      this.triggerError("Name can't be empty.");
    }

    this.members.push(this.newMemberName);
    this.changeInput('');
  }

  private triggerError(message: string) {
    const twoSeconds = 2000;
    this.errorMessage = message;
    setTimeout(() => {
      this.errorMessage = '';
    }, twoSeconds);
  }

  changeInput(member: string) {
    this.newMemberName = member;
  }

  setNumberOfTeams(numberOfTeams: string) {
    this.numberOfTeams = parseInt(numberOfTeams, 10);
  }

  generateTeams() {
    if (this.numberOfTeams <= 0 || !this.numberOfTeams) {
      this.triggerError('invalid number of teams.');
    }

    if (this.members.length < this.numberOfTeams) {
      this.triggerError('Has teams a lot.');
    }

    const allMembers = [...this.members];

    while (allMembers.length) {
      for (let index = 0; index < this.numberOfTeams; index++) {
        const random = Math.floor(Math.random() * allMembers.length);
        const member = allMembers.splice(random, 1)[0];

        if (!member) break;
        if (this.teams[index]) {
          this.teams[index].push(member);
        } else {
          this.teams[index] = [member];
        }
      }
    }

    this.clearInputs();
  }

  clearInputs(): void {
    this.members = [];
    this.numberOfTeams = '';
  }
}
