
window.onload = function() {
var url = new URL(window.location.href);
var message = url.searchParams.get("message");
if (message) {
    alert(message);
}
};
