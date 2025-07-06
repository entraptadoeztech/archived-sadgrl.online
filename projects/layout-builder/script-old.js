$(function() {

    // Adaptable Layout
    var updatedCSS = {};
    updatedCSS.leftSidebar = "";
    updatedCSS.rightSidebar = "";
    updatedCSS.twoSidebars = "";
    updatedCSS.headerContained = "";
    updatedCSS.headerFull = "";
    updatedCSS.headerNone = "";
    updatedCSS.navbarNone = "";
    updatedCSS.navbarFull = "";
    updatedCSS.navbarContained = "";
    updatedCSS.footer = "";
    updatedCSS.footerNone = "";

    // SIDEBARS

    // when sidebar option is selected...
    $("#submitSidebarOptions").on('click', function() {

        // left sidebar
        if ($('#sidebarOptions').val() === "left-sidebar") {
            $('#left-sidebar').css("display", "block");
            $('#right-sidebar').css("display", "none");
            $('#content-container').css("flex-grow", "1");
            var leftSidebarCSS = "#left-sidebar{display:block;}#right-sidebar{display:none;}";
            updatedCSS.leftSidebar = leftSidebarCSS;
            updatedCSS.rightSidebar = "";
            // right sidebar
        } else if ($('#sidebarOptions').val() === 'right-sidebar') {
            $('#right-sidebar').css("display", "block");
            $('#left-sidebar').css("display", "none");
            $('#content-container').css("flex-grow", "1");
            var rightSidebarCSS = "#right-sidebar{display:block;}#left-sidebar{display:none;}";
            updatedCSS.rightSidebar = rightSidebarCSS;
            updatedCSS.leftSidebar = "";
            // left & right sidebars
        } else if ($('#sidebarOptions').val() === "two-sidebar") {
            $('#left-sidebar').css("display", "block");
            $('#right-sidebar').css("display", "block");
            updatedCSS.twoSidebars = "#left-sidebar{display:block;}#right-sidebar{display:block;}";
        } else if ($('#sidebarOptions').val() === "no-sidebar") {
            $('#left-sidebar').css("display", "none");
            $('#right-sidebar').css("display", "none");
            $('#content-container').css("flex-grow", "1");
            updatedCSS.leftSidebar = "#left-sidebar{display:none;}";
            updatedCSS.rightSidebar = "#right-sidebar{display:none;}";
        }
    });

    // HEADER

    // when header option is clicked...
    $("#submitHeaderOptions").on('click', function() {
        // no header
        if ($('#headerOptions').val() === "no-header") {
            $('#header-contained').css("display", "none");
            $('#header-full').css("display", "none");
            updatedCSS.headerNone = "#header-contained{display:none;}#header-full{display:none;}";
            updatedCSS.headerFull = "";
            // contained header
        } else if ($('#headerOptions').val() === "header-contained") {
            $('#header-contained').css("display", "block");
            $('#header-full').css("display", "none");
            updatedCSS.headerContained = "#header-contained{display:block;}#header-full{display:none;}";
            updatedCSS.headerFull = "";
            // full header
        } else if ($('#headerOptions').val() === "header-full") {
            $('#header-contained').css("display", "none");
            $('#header-full').css("display", "block");
            updatedCSS.headerFull = "#header-full{display:block;}#header-contained{display:none;}"
            updatedCSS.headerContained = "";
        }
    });

    // NAVBAR

    // when navbar option is clicked...
    $("#submitNavbarOptions").on('click', function() {
        // no navbar
        if ($('#navbarOptions').val() === "no-navbar") {
            $('#navbar-contained').css("display", "none");
            $('#navbar-full').css("display", "none");
            updatedCSS.navbarNone = "#navbar-contained{display:none;}#navbar-full{display:none;}";
        } else if ($('#navbarOptions').val() === "navbar-contained") {
            // contained navbar
            $('#navbar-contained').css("display", "block");
            $('#navbar-full').css("display", "none");
            updatedCSS.navbarContained = "#navbar-contained{display:block;}#navbar-full{display:none;}";
        } else if ($('#navbarOptions').val() === "navbar-full") {
            // full navbar
            $('#navbar-contained').css("display", "none");
            $('#navbar-full').css("display", "block");
            updatedCSS.navbarFull = "#navbar-contained{display:none;}#navbar-full{display:block;}";
        }
    });

    // FOOTER

    // when footer option is clicked...
    $("#submitFooterOptions").on('click', function() {
        if ($('#footerOptions').val() === "no-footer") {
            // no footer
            $('#footer').css("display", "none");
            updatedCSS.footerNone = "#footer{display:none;}";
        } else if ($('#footerOptions').val() === "footer") {
            // footer
            $('#footer').css("display", "block");
            updatedCSS.footer = "#footer{display:block;}";
        }
    });

    // EXPORT

    // when export button is clicked...
    $("#exportButtonhtml").on('click', function() {
        $('#htmlExport').html('<textarea>' + $('#myLayout').html() + '</textarea>');
    });
    $('#minimize').click(function() {
        console.log('test');
        $('.choose').css("height", "30px");
        $('.choose').css("overflow", "hidden");
        $('#maximize').css("display", "block");
        $('#minimize').css("display", "none");
    })

    $('#maximize').click(function() {
        $('.choose').css("height", "auto");
        $('.choose').css("overflow", "auto");
        $('#maximize').css("display", "none");
        $('#minimize').css("display", "block");
    })

})