const view_width = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
const removeBg1 = document.querySelector("#pills-ADMINISTRATION-tab");
const removeBg2 = document.querySelector("#pills-2021-2022-tab");
const removeIndic = document.querySelector('#activityCarousel2 .carousel-indicators')
console.log(removeIndic);
var i = 1;
var id_2T ;
if(view_width<="760"){
    removeIndic.style.display="none";
    removeBg1.classList.remove("active");
    removeBg2.classList.remove("active");
}
team = (id) => {
    if(view_width<="760"){
        const a = document.getElementById(id);
        var id_1 = a.id;
        const tab = document.querySelector(".tab-content");
        if (i == 1) {
            a.insertAdjacentElement("afterend", tab);
            tab.style.display = "block";
            id_2T = id_1;
        } else if (i == 2 && id_1==id_2T) {
            tab.style.display = "none";
            a.classList.remove("active");

        i=0;
    }else if (i==2&& id_1!=id_2T){
        a.insertAdjacentElement("afterend", tab);
        id_2T=id_1;
        i=1;
    }else{
        console.log("Show error");
  }
  i++;
};
}
var j = 1;
var id_2A ;
alum = (id) => {
if(view_width<="760"){
    const a = document.getElementById(id);
    var id_1 = a.id
    const tab = document.querySelector(".tab-content-alum");
    if (j == 1) {
        a.insertAdjacentElement("afterend", tab);
        tab.style.display = "block";
        id_2A = id_1;
    } else if (j == 2 && id_1==id_2A) {
        tab.style.display = "none";
        a.classList.remove("active");
        j=0;
    }else if (i==2&& id_1!=id_2A){
        a.insertAdjacentElement("afterend", tab);
        id_2A=id_1;
        j=1;
    }else{
        console.log("Show error");
  }
  j++;
};
}