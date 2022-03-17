const filter_btns = document.querySelectorAll(".filter-btn");


//Change filter buttons on click
filter_btns.forEach((btn) =>
  btn.addEventListener("click", () => {
    filter_btns.forEach((button) => button.classList.remove("active"));
    btn.classList.add("active");

    //filter's the images when button is clicked
    let filterValue = btn.dataset.filter;

    $(".grid").isotope({ filter: filterValue });
  })
);



$('.grid').isotope({
  itemSelector: '.grid-item',
  layoutMode: 'fitRows'
});

