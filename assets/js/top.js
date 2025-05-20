// var coll = document.getElementsByClassName("collapsible-items-title");
// var i;

// for (i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var content = this.nextElementSibling;
//     if (content.style.maxHeight){
//       content.style.maxHeight = null;
//     } else {
//       content.style.maxHeight = content.scrollHeight + "px";
//     }
//   });
// }


// document.querySelectorAll('.collapsible-items').forEach(item => {
//     item.addEventListener('click', () => {
//       item.classList.toggle('active');
//     });
//   });

//   <script>
  document.querySelectorAll('.collasible-items-title').forEach(title => {
    title.addEventListener('click', () => {
      // Toggle active class on the clicked item
      const parent = title.parentElement;
      parent.classList.toggle('active');

      // Toggle collapse content visibility (optional)
      const content = parent.querySelector('.collapssible-cotent');
      if (content) {
        content.classList.toggle('show');
      }

      // Rotate the arrow image
      const arrow = title.querySelector('.arrow-icon');
      if (arrow) {
        arrow.classList.toggle('rotated');
      }
    });
  });
// </script>