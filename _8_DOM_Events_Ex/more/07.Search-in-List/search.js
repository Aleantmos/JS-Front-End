function search() {

   const searched = document.querySelector('#searchText');
   const result = document.querySelector('#result');

   let items = Array.from(document.querySelectorAll('li'));

   let matchesFound = 0;
   result.textContent = '';

   items.forEach(item => {
      let content = item.textContent;

      if (content.includes(searched.value)) {
         item.style.fontWeight = 'bold';
         item.style.textDecoration = 'underline';
         matchesFound += 1;
      }
   })

   searched.value = '';
   result.textContent += `${matchesFound} matches found`;

}
