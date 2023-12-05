std = [{id:1,name:"saqlain",score:68},{id:2,name:"awais",score:78},{id:3,name:"john",score:89},
{id:4,name:"jacob",score:47},{id:5,name:"ali",score:98},{id:6,name:"aqib",score:67}];
stds = std.sort((a,b)=>{
    return a.score-b.score;
});
topScorrers = stds.slice(3);
console.log(topScorrers.sort((a,b)=>{
 return b.score-a.score;
}))
lowScorrers = (stds.slice(0,3));
console.log(lowScorrers);

