<!--
// Replace URL if frameset-variable != 1 or does not exist
var ZielDatei = "index.html?"+location.pathname; 
if (!top.FramesetGeladen){
	if(document.images)
		top.location.replace(ZielDatei);
	else
		top.location.href = ZielDatei ;
}
//-->