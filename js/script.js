/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   


// Global Variables
const studentList = document.querySelectorAll('.student-item');
const studentsPerPage = 10;


// function to hide and display student names
const showPage = (list, page) => {
   const startIndex = (page * studentsPerPage) - studentsPerPage;
   const endIndex = page * studentsPerPage;

   for (let i = 0; i < studentList.length; i += 1) {
      if (i >= startIndex && i < endIndex) { // display students
         list[i].style.display = 'block';
         

      } else {
         list[i].style.display = 'none'; // hide students

      }

   }

}


// Function to create and dynamically append links to page 
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
         if (i === 0) {
           a.className = 'active';

         }
         a.href = '#';
         a.textContent = i + 1;
         li.appendChild(a);
         ul.appendChild(li);
         
        
       

         a.addEventListener('click', (e) => {        
            const links = document.querySelectorAll('.pagination a'); 
            for(let i = 0 ; i < links.length; i++){
               links[i].className = '';
                 
              
            }
            e.target.className = 'active';
            showPage(studentList, a.innerText);
         });
      }
      
   
      }

      


// call functions
showPage(studentList, 1);
appendPageLinks(studentList);



