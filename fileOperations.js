var fs=require('fs');

fs.readFile('./test.json', 'utf8', function (err,response) {

  if (err) {
    return console.log(err);
  }
   //console.log(JSON.parse(response).data);

  var obj={"name":"Srini","age":"23"};
  var temp=JSON.parse(response).data;
  temp.push(obj);
  //console.log(temp);
   fs.writeFile("./test.json", JSON.stringify(temp), function(err) {
       if(err) {
           return console.log(err);
       }

       console.log("The file was saved!");
   });

});
