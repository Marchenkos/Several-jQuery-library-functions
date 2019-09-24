document.addEventListener("DOMContentLoaded", () => {
// myjQuery("<div>").addClass("milky").addClass("way").removeClass("milky");
// myjQuery(".way").append("KISKISKIS").append("<p>cat</p>");
// myjQuery("#id1").remove();
// myjQuery("#dd").remove(".first");
// myjQuery("#dd").remove("span");
// console.log(myjQuery(".lala").css("color"));
// myjQuery(".lala").css("color", "rgb(0, 255, 0)");
// myjQuery(".lala").wrap("<div>");
// console.log(myjQuery("#dd").children().text());
// myjQuery("#id1").empty();
myjQuery("#dd").each(function () {
    console.log(myjQuery(this).text());
});
// console.log(myjQuery("span").text());
// setInterval(() => {
//     myjQuery("#toggle").toggle();
// }, 500);

// myjQuery("#click").click(() => {
//     alert(":))))");
// });
myjQuery("#container").append(myjQuery('<p>')._element());
}, false);