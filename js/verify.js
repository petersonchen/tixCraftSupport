// credit check

let title = $(".activityT.title").text();
let num;

if (title.includes("中信")) {
  num = "418230";
} else if (title.includes("富邦")){
  num = "552046";
} else if (title.includes("玉山")){
  num = "524255";
} else {
  num = "";
}

$("#checkCode").val(num).select();
console.log($("#checkCode").val());


