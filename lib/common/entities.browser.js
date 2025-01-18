var textarea;

export function decodeEntity(name) {
  try{
    if(document){
      textarea = textarea || document.createElement('textarea');
      textarea.innerHTML = '&' + name + ';';
      return textarea.value;  
    }else{
      return name;
    }
  }catch(e){
    return name;
  }
}
