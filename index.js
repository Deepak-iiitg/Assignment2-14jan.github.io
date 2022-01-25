
var n = parseInt(prompt("enter size of matrix"));

var arr = [];

for(var k=0;k<n;k++){
    for(var l=0;l<n;l++){
       arr[k] = [];
    }
}

var row_start = 0;
var col_start = 0;
var row_end = n-1;
var col_end = n-1;
var i = 1;
var j;

while(row_start<=row_end && col_start<=col_end){
    for(var j=row_start;j<=row_end;j++){
        arr[j][col_start] = i++;
    }
    col_start++;
    for(var j=col_start;j<=col_end;j++){
        arr[row_end][j] = i++;
    }
    row_end--;
    for(var j=row_end;j>=row_start;j--){
        arr[j][col_end] = i++;
    }
    col_end--;
    for(var j=col_end;j>=col_start;j--){
        arr[row_start][j] = i++;
    }
    row_start++;
}

for(var i=0;i<n;i++){
    for(var j=0;j<n;j++){
            document.write(arr[i][j]+" ");
    }
    document.write("<br>");
}
