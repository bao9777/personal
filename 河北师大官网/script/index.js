	 var box=document.getElementById('wrap');
	 var links=box.children;
	 var box=document.getElementById('wrap');
	 var lists=box.children;
	 var i=0;
	 function imgChange()
	 {
	 	links[i++%8].style.display='none';
	 	links[i%8].style.display='block';
	 }
	 setInterval(imgChange,1000);
	 var arr=document.getElementsByClassName("outsideli");
	 for(var i=0;i<arr.length;++i)
	 {
	 	arr[i].onmouseover=function(){
	 		this.children[1].style.display="block";
	 		this.children[0].style.color="white";
	 	}
	 	arr[i].onmouseout=function(){
	 		this.children[1].style.display="none";
	 		this.children[0].style.color="black";
	 	}
	 }
	 var inp=document.getElementsByTagName("input")[0];
	 inp.onfocus=function(){
	 	this.value="";
	 }
	 inp.onblur=function(){
	 	this.value="搜索";
	}