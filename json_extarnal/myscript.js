function load() {
	var mydata = JSON.parse(data);
          document.writeln("<table border = '1' width = 50% align='center'>");
          document.writeln("<tr><th><b>Book Name</b></td><th><b>Price</b></td></tr>");
                        for(i = 0;i<mydata.length;i++){	
                        document.writeln("<tr><td ><b>" + mydata[i].Name+"</b></td><td ><b>" + mydata[i].price +"</b></td></tr>");
                        }
          document.writeln("</table>");
}