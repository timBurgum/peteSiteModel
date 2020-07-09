var filtersSale = document.querySelectorAll(".propertyFilter");
var listings = document.querySelectorAll(".listing");
console.log(filtersSale);
for(var i = 0; i <filtersSale.length;i++)
{
  filtersSale[i].addEventListener("click", function(){

    //var sT = this.id;

    if (this.id == "all")
    {
      console.log(this.id);
      //remove all hidden class
      for(var i = 0; i <listings.length ; i++)
      {
        listings[i].classList.remove("hidden");
      }
    }
    if (this.id = "rent")
    {
      hideAllListings();
      //remove all hidden class by reducing padding and margin for animation
      for(var i = 0; i <listings.length ; i++)
      //console.log(listings[i].querySelector('h6').innerHTML);
      if(listings[i].querySelector('h6').innerHTML=="rent")
      {
        listings[i].classList.remove("hidden");
      }
    }
    if (this.id = "sale")
    {
      hideAllListings();
      //remove all hidden class
      for(var i = 0; i <listings.length ; i++)
      //console.log(listings[i].querySelector('h6').innerHTML);
      if(listings[i].querySelector('h6').innerHTML=="sale")
      {
        listings[i].classList.remove("hidden");
      }
    }

  });
}

function hideAllListings()
{
  for(var i = 0; i <listings.length ; i++)
  {
    listings[i].classList.add("hidden");
  }
}
