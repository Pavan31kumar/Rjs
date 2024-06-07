//  Multiple Array In JavaScript
var marks = new Array(3);
for (i = 0; i < marks.length; i++) {
  marks[i] = new Array(6);
}
console.log("Size of Marks " + marks.length);
for (i = 0; i < marks.length; i++) {
  console.log(marks[i].length);
}
for (i = 0; i < marks.length; i++) {
  for (j = 0; j < marks[i].length; j++) {
    marks[i][j] = i * j;
  }
}
for (i = 0; i < marks.length; i++) {
  for (j = 0; j < marks[i].length; j++) {
    console.log(marks[i][j]);
  }
}
console.log(marks);
