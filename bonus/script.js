// create array 
const arrayTeamMembers = [

    {
        'nome' : 'Wayne Barnett',
        'ruolo' : 'Founder & CEO',
        'foto' : 'asset/img/wayne-barnett-founder-ceo.jpg',
    },

    {
        'nome' : 'Angela Caroll',
        'ruolo' : 'Chief Editor',
        'foto' : 'asset/img/angela-caroll-chief-editor.jpg',
    },

    {
        'nome' : 'Walter Gordon',
        'ruolo' : 'Office Manager',
        'foto' : 'asset/img/walter-gordon-office-manager.jpg',
    },

    {
        'nome' : 'Angela Lopez',
        'ruolo' : 'Social Media Manager',
        'foto' : 'asset/img/angela-lopez-social-media-manager.jpg',
    },

    {
        'nome' : 'Scott Estrada',
        'ruolo' : 'Developer',
        'foto' : 'asset/img/scott-estrada-developer.jpg',
    },

    {
        'nome' : 'Barbara Ramos',
        'ruolo' : 'Graphic Designer',
        'foto' : 'asset/img/barbara-ramos-graphic-designer.jpg',
    },

];

const memberInfo = [];

// print in console all the infos for each members
for (let i = 0; i < arrayTeamMembers.length; i++) {

    for (let key in arrayTeamMembers[i]) {
        let info = arrayTeamMembers[i][key];
        // console.log(info);
        memberInfo.push(info)
    }

}

// console.log(memberInfo);

// selection element
const container = document.querySelector(".container");

// create HTML content
let htmlContent = "";

// iterate through memberInfo and create HTML for each member
for (let i = 0; i < memberInfo.length; i++) {
    htmlContent += `<p>${memberInfo[i]}</p>`;
}

// print on the scree
container.innerHTML = htmlContent;