/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   



const studentList = document.querySelector('.student-list');
const studentsPerPage = 10;



const showPage = (list, page) => {
   const startIndex = (page * studentsPerPage) - studentsPerPage;
   const endIndex = page * studentsPerPage;

   for (let i = 0; i < studentList.length; i += 1) {
      if (i >= startIndex && i < endIndex) {
         studentList.style.display = 'block';

      } else {
         studentList.style.display = 'none';

      }

   }

}



const appendPageLinks = (list) => {
    const numberOfPages = Math.ceil(studentList.length / studentsPerPage);
      let div = document.createElement('div');
      div.className = ('pagination');
      let page = document.querySelector('.page');
      page.appendChild(div);
      let ul = document.createElement('ul');
      div.appendChild(ul);

      for (let i = 0; i < numberOfPages; i++) {
         let li = document.createElement('li');
         let a = document.createElement('a');
         a.href = '#';
      


      }
      
}



   
   


showPage(studentList, 1);
appendPageLinks(studentList);






