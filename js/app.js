const body = document.getElementById("body");

const changeTheme = () => {
    if( theme === "light__theme" ){
        body.setAttribute("class","dark__theme");
    }else{
        body.setAttribute("class","light__theme");
    }
}
