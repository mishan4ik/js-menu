var items = document.querySelectorAll(".openList");
for(var i = 0; i < items.length; i++){
	console.log(items[i].children);
	items[i].addEventListener("mouseover", showmenu);
	items[i].addEventListener("mouseleave", hidemenu);



}


function showmenu(){

		if (this.children.length >= 1) {
			this.children[0].style.display = "block";
		}
		
		
		

}

function hidemenu(){

		if (this.children.length >= 1) {
			this.children[0].style.display = "none";
		}
		
		

}