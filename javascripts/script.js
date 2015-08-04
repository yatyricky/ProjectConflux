$(".button").click(function (e) {
	var params = e.target.id.split("_");
	if (params[2] == "m") {
		$("#p_"+params[1]+"_i_"+params[3]).text(parseInt($("#p_"+params[1]+"_i_"+params[3]).text())-1);
	} else if (params[2] == "p") {
		$("#p_"+params[1]+"_i_"+params[3]).text(parseInt($("#p_"+params[1]+"_i_"+params[3]).text())+1);
	}
});