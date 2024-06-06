// Sort  Method
/*var marks=[12,36,96,45,74,56,7,85,8,45,5,65,35,15];
console.log(marks.length);
marks.sort();
console.log('Before Fuction  '+marks);
marks.sort(function(a,b){ return a-b;});
console.log('After Fuction  '+marks);
marks.reverse();
console.log('After Reverse  :'+marks); */

// Slice Method
/*var marks=[12,36,96,45,74,56,7];
console.log('Before Slice  :'+marks);
marks.splice(3,96,32,23,25,26);
console.log('After Slice  :'+marks); */

// Filters

/*var marks=[1,2,32,25,45,21,32,1,25,21]
console.log(marks);
function isEnum(v,i,a){
    if(v%2==0){
        return true;
    }else{
        return false
    }
}
var Enum=marks.filter(isEnum);
console.log(Enum); */

// execuite function to direct filter

/*var marks=[1,2,32,25,45,21,32,1,25,21]
console.log(marks);
var Enum=marks.filter(function(v,i,a){
    if(v%2==0){
        return true;
    }else{
        return false
    }
});
console.log(Enum);*/

// Avoid Duplicts usin filters

var marks=[1,2,32,25,45,21,32,1,25,21]
console.log(marks);
var ADuplicates=marks.filter(function(v,i,a){
    return a.indexOf(v)==i
});
console.log(ADuplicates);