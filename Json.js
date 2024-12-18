function parseJson(data){
  let result;

  try{
    result = JSON.parse(data);
  }catch(e){
    console.log(`There was a ${e.name} parsing JSON data: ${e.message}`);
    result = null;
  }finally{
    console.log("Finished parsing data");
  }

  return result;
}