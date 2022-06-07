import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  newMemberName: string = "";
  members: string[] = [];
  errorMessage: string = "";
  numberOfTeams: number | "" = "";
  teams: string[][] = [];

  onInputMember(newMember: string){
    this.newMemberName = newMember;
  }

  addMember(){
    if(this.newMemberName === ""){
      this.errorMessage = "Name can't be empty!";
      return 
    }
    else{
      this.members.push(this.newMemberName);
      this.newMemberName = "";
      this.errorMessage = "";
    }
  }

  onNumberOfTeamsInput(value: string){
    this.numberOfTeams = Number(value);
  }

  generateTeams(){
    if(Number.isNaN(this.numberOfTeams) || this.numberOfTeams === "" || this.numberOfTeams <= 0){
      this.errorMessage = "Invalid amount of teams!";
      return
    }
    
    if(this.numberOfTeams > this.members.length){
      this.errorMessage = "Not enough members!";
      return
    }

    this.errorMessage = "";
    this.teams = [];
    const allMembers = [...this.members];

    while(allMembers.length){
      for(let i=0; i < this.numberOfTeams; i++){
        const randomIndex = Math.floor(Math.random() * allMembers.length);
        const randomMember = allMembers.splice(randomIndex, 1)[0];
        
        if(randomMember === undefined) break;
        if(this.teams[i]){
          this.teams[i].push(randomMember);
        }
        else{
          this.teams[i] = [randomMember];
        }
      }
    }
    console.log(this.teams);

    this.members = [];
    this.numberOfTeams = "";
    
  }
}
