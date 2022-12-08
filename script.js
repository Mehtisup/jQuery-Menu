<script>
$(document).ready(function() {
    $("#myAbout").mouseenter(function() {
        $(".list2").css("display", "block");
        $(".arrow2").css("display", "block");
    })
    $("#myAbout").mouseleave(function() {
        $(".list2").css("display", "none");
        $(".arrow2").css("display", "none");
    })
    $("#hover2").mouseenter(function() {
        $(".list2").css("display", "block");
        $(".arrow2").css("display", "block");
    })
    $("#hover2").mouseleave(function() {
        $(".list2").css("display", "none");
        $(".arrow2").css("display", "none");
    })
    $("#myCompany").mouseenter(function() {
        $(".list").css("display", "block");
        $(".arrow").css("display", "block");
    })
    $("#myCompany").mouseleave(function() {
        $(".list").css("display", "none");
        $(".arrow").css("display", "none");
    })
    $("#hover").mouseenter(function() {
        $(".list").css("display", "block");
        $(".arrow").css("display", "block");
    })
    $("#hover").mouseleave(function() {
        $(".list").css("display", "none");
        $(".arrow").css("display", "none");
    })
})
</script>
