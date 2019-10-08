/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   



const studentList = document.querySelectorAll('.student-item');
const studentsPerPage = 10;



const showPage = (list, page) => {
   const startIndex = (page * studentsPerPage) - studentsPerPage;
   const endIndex = page * studentsPerPage;

   for (let i = 0; i < studentList.length; i += 1) {
      if (i >= startIndex && i < endIndex) {
         list[i].style.display = '';

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

      for (let i = 0; i < numberOfPages; i += 1) {
         let li = document.createElement('li');
         let a = document.createElement('a');
         a.href = '#';
         a.textContent = i + 1;
         li.appendChild(a);
         ul.appendChild(li);
         
        
         

        
       


        
        const activeC = document.createElement('activeC');
        activeC.className = ('active');
        let firstListItem = activeC.firstElementChild;

         a.addEventListener('click', (e) => {         
            for(let i = 0 ; i < activeC.childrenlength; i++){
            activeC.firstElementChild[i].firstElementChild.length = '';
                 
              
            }
            e.target.className = 'active';
            showPage(studentList, a + 1);
         });
      }
      
   
      }

      



showPage(studentList, 1);
appendPageLinks(studentList);



