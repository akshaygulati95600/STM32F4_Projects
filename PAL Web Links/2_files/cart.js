
function addtocart( desc, code, price )
{
	theform = document.getElementById("addtocart") ;
	if (theform!=null)
	{
		theform.item_name.value = desc;
		theform.item_number.value = code;
		theform.amount.value = price;
		theform.submit();
	}
}

function viewcart()
{
	theform = document.getElementById("viewcart");
	if (theform!=null)
	{
		theform.submit();
	}
	
}
