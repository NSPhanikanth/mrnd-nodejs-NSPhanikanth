
exports.Sum = function(num1, num2){
	return num1+num2;
}

exports.SumOfArray = function(arrayOfNums){
var sum=0,i;
for(i=0;i<arrayOfNums.length;i++)
    sum+=arrayOfNums[i];
return sum;
}

// Sum only the unique numbers in the array.
// Ex: If array is [2,3,3,2], the sum is 2+3=5

exports.SumOfUniqueNumbers = function(arrayOfNums){
    var i,j,num,sum=0;
for (i=0;i<arrayOfNums.length;i++)
    if(arrayOfNums[i]!=0)
	{
		for(j=i+1;j<arrayOfNums.length;j++)
			if(arrayOfNums[i]==arrayOfNums[j])
				arrayOfNums[j]=0;
	}		

for(i=0;i<arrayOfNums.length;i++)
    sum+=arrayOfNums[i];
return sum;
}
exports.ReverseString = function(str){
str1="";
var i;
for (i=0;i<str.length;i++)
    str1=str[i]+str1;
return str1;
}


exports.ReverseArrayOfStrings = function(arrayOfStrings){

array1=[];
for (i=0; i<arrayOfStrings.length;i++)
    array1[i]=exports.ReverseString(arrayOfStrings[i]);
return array1;
}