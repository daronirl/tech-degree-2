/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   



const studentList = document.querySelectorAll('.student-list');
const studentsPerPage = 10;



const showPage = (list, page) => {
   const startIndex = (page * studentsPerPage) - studentsPerPage;
   const endIndex = page * studentsPerPage;

   for (let i = 0; i < studentList.length; i += 1) {
      if (i >= startIndex && i < endIndex) {
         list[i].style.display = 'block';

      } else {
         list[i].style.display = 'none';

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
         a.textContent = i + 1;
         li.appendChild(a);
         ul.appendChild(li);

         if (i === 1) {
            a.className = 'active';

         }

         a.addEventListener ('click', (e) => {


         })
   
      }

      
   }




   
   


showPage(studentList, 1);
appendPageLinks(studentList);



