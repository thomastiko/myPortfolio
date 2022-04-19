//thanks for scrolling...
const thx = document.querySelector('.thanks-text');
const options = {};
const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      }
        console.log(entry);
        entry.target.classList.add("add");
        observer.unobserve(entry.target);
    });

}, options);

observer.observe(thx);

//eigentlicher code

var rightItem = document.querySelector('.right-direction'),
    leftItem = document.querySelector('.left-direction');

//anhang um Effekt zu optimieren (nicht notwedig)
;(function(){

  var throttle = function(type, name, obj){
    var obj = obj || window;
    var running = false;
    var func = function(){
      if (running){ return; }
      running = true;
      requestAnimationFrame(function(){
        obj.dispatchEvent(new CustomEvent(name));
        running = false;
      });
    };
    obj.addEventListener(type, func);
  };

  throttle("scroll", "optimizedScroll");
})();

// eigentlicher code!
//statt "optimizedScroll" --> "scroll"

window.addEventListener("optimizedScroll", function(){

  rightItem.style.transform = "translateX(" + window.pageYOffset + "px)";
  leftItem.style.transform = "translateX(-" + window.pageYOffset + "px)";
});

// loop through array

var text = ["Let's start a project together", "Lass uns gemeinsam ein Project starten", "Comencemos un proyecto juntos", "Commençons un projet ensemble", "Начнем проект вместе", "让我们一起开始一个项目"];
var counter = 0;
var elem = $("#loop");
setInterval(change, 2000);
function change() {
    elem.fadeOut(function(){
        elem.html(text[counter]);
        counter++;
        if(counter >= text.length) { counter = 0; }
        elem.fadeIn();
    });
};

