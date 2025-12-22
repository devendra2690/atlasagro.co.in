
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('a[href*="wa.me"]').forEach(function(el){
    el.addEventListener("click", function(){
      console.log("WhatsApp CTA clicked");
    });
  });
  document.querySelectorAll('a[href*="contact"]').forEach(function(el){
    el.addEventListener("click", function(){
      console.log("Quote CTA clicked");
    });
  });
});
