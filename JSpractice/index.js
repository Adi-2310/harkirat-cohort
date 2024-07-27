const arr = [1,2,3,4,5];

const ans = arr.filter(function transform(i){
    if(i%2==0) return true;
    else return false;
});
console.log(ans);