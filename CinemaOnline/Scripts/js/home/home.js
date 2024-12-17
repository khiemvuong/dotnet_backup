$(document).ready(function () {
    $('#search').click(function () {
        $('#formSearch').submit();
    });

    $('#formSearch').submit(function (e) {
        e.preventDefault();

        utils.loading();

        const filter = $("#slFilter").val();
        const keywords = $("#keywords").val();
        let url = filter === "1" ? `/Film/Search?keyword=${keywords}` : `/Film/Search?${filter}=${keywords}`;

        // Redirect to the search URL
        window.location.href = url;
    });
});
