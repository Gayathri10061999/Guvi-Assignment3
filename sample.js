class Movie{
  constructor(title,studio,rating ='PG'){
  this.title=title;
  this.studio=studio;
  this.rating=rating;
  }
  get movietitle(){
      return this.title;
  }
  set movietitle(title){
      this.title=title;
  }
  get moviestudio(){
      return this.studio;
  }
  set moviestudio(studio){
      this.studio=studio;
  }
  get movierating(){
     return this.rating;
  }
  set movierating(rating){
      return this.rating;
  }
  }
  let obj=new Movie('Casino Royale','Eon Productions','PG');
  console.log(obj.movietitle);
  
