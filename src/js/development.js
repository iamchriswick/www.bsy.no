// Put development-only JS in this file.

console.log('Development-only log message.');

function fadedEls(el, shift) {
    el.css('opacity', 0);

    switch (shift) {
        case undefined:
            shift = 0;
            break;
        case 'h':
            shift = el.eq(0).outerHeight();
            break;
        case 'h/2':
            shift = el.eq(0).outerHeight() / 2;
            break;
    }

    $(window).resize(function() {
        if (!el.hasClass('ani-processed')) {
            el.eq(0).data('scrollPos', el.eq(0).offset().top - $(window).height() + shift);
        }
    }).scroll(function() {
        if (!el.hasClass('ani-processed')) {
            if ($(window).scrollTop() >= el.eq(0).data('scrollPos')) {
                el.addClass('ani-processed');
                el.each(function(idx) {
                    $(this).delay(idx * 200).animate({
                        opacity: 1
                    }, 600);
                });
            }
        }
    });
}

/*----------------------------------( ALIGN V & C )----------------------------------*/

$(window).resize(function() {
    centerContent();
});

function centerContent() {
    var container = $('.loader-outer');
    var content = $('.loader-inner');
    content.css("left", (container.width() - content.width()) / 2);
    content.css("top", (container.height() - content.height()) / 2);
}

jQuery(document).ready(function($) {

    /*----------------------------------( TOOLTIPS )----------------------------------*/

    // Initiate Tooltips on Project Links
    $('a').tooltip({
        delay: { "show": 1000, "hide": 100 },
        placement: "top",
        //title: "Ingen tilgang til denne tjenesten",
        trigger: "click hover focus"
    });

    $('.board-member').tooltip({
        delay: { "show": 1000, "hide": 100 },
        placement: "top",
        //title: "Ingen tilgang til denne tjenesten",
        trigger: "click hover focus"
    });

    /*----------------------------------( PREVENT DEFAULT ON BLANK LINKS )----------------------------------*/

    $('a').click(function() {
        if ($(this).attr("href") == "#") {
            event.preventDefault();
        }
    });

    /*----------------------------------( Page Specific Scripts )----------------------------------*/

    if ($('body').is('.members')) {
        console.log('This is a Members Only page')
        var bodyBottompadding = $('footer.bottom').outerHeight();
        $('body.members .page-wrapper').css('padding-bottom', bodyBottompadding);

        // Initiate Tooltips
        $('.nav li.disabled').tooltip({
            delay: { "show": 500, "hide": 100 },
            placement: "top",
            title: "Ingen tilgang til denne tjenesten",
            trigger: "click hover focus"
        });
    } else if ($('body section').hasClass('login')) {
        $(window).resize(function() {
            var sH = $(window).height();
            $('section.login').css('height', (sH - ($('header').outerHeight() * 2)) + 'px');
        });

        if ($(window).width() > 480) {
            (function(el) {
                $(window).resize(function() {

                    var wndHeight = $(window).height();
                    var offsetTop = el.offset().top;

                    el.data('aniInStart', offsetTop - wndHeight);
                    el.data('aniInStop', offsetTop - wndHeight + wndHeight / 3 * 2);

                    el.data('aniOutStart', offsetTop + el.outerHeight() - wndHeight / 3 * 2);
                    el.data('aniOutStop', offsetTop + el.outerHeight());

                }).scroll(function() {

                    var aniType = '';
                    var factor = 1;
                    var scrollTop = $(window).scrollTop();

                    if (scrollTop < el.data('aniInStop')) {
                        aniType = 'in';
                        factor = -(el.data('aniInStart') - scrollTop) / (el.data('aniInStop') - el.data('aniInStart'));
                    } else {
                        aniType = 'out';
                        factor = -(el.data('aniOutStart') - scrollTop) / (el.data('aniOutStop') - el.data('aniOutStart'));
                    }

                    factor = Math.min(1, Math.max(0, factor));

                    if (aniType == 'in') {
                        el.css('opacity', factor);
                    } else {
                        el.css('opacity', 1 - factor);
                    }

                });
            })($('.login'));
        }
    } else if ($('body').is('.home')) {
        $(window).resize(function() {
            var sH = $(window).height();
            $('section.header-21-sub').css('height', (sH - $('header').outerHeight()) + 'px');
            $('section.blogg-2-wrapper').css('height', (sH) + 'px');
            $('section.content-9').css('height', (sH) + 'px');
            $('section.content-36').css('height', (sH) + 'px');
            $('section.content-26').css('height', (sH) + 'px');
            $('section.content-35').css('height', (sH) + 'px');

            if ($(window).width() <= 768) {
                console.log($(window).width());
                $('section.content-17').css('min-height', (sH + 'px'));
            } else {
                $('section.content-17').css('height', 'auto');
            }
        });

        if ($(window).width() > 480) {
            (function(el) {
                $(window).resize(function() {

                    var wndHeight = $(window).height();
                    var offsetTop = el.offset().top;

                    el.data('aniInStart', offsetTop - wndHeight);
                    el.data('aniInStop', offsetTop - wndHeight + wndHeight / 3 * 2);

                    el.data('aniOutStart', offsetTop + el.outerHeight() - wndHeight / 3 * 2);
                    el.data('aniOutStop', offsetTop + el.outerHeight());

                }).scroll(function() {

                    var aniType = '';
                    var factor = 1;
                    var scrollTop = $(window).scrollTop();

                    if (scrollTop < el.data('aniInStop')) {
                        aniType = 'in';
                        factor = -(el.data('aniInStart') - scrollTop) / (el.data('aniInStop') - el.data('aniInStart'));
                    } else {
                        aniType = 'out';
                        factor = -(el.data('aniOutStart') - scrollTop) / (el.data('aniOutStop') - el.data('aniOutStart'));
                    }

                    factor = Math.min(1, Math.max(0, factor));

                    if (aniType == 'in') {
                        el.css('opacity', factor);
                    } else {
                        el.css('opacity', 1 - factor);
                    }

                });
            })($('.blog-2'));

            (function(el) {
                $(window).resize(function() {

                    var wndHeight = $(window).height();
                    var offsetTop = el.offset().top;

                    el.data('aniInStart', offsetTop - wndHeight);
                    el.data('aniInStop', offsetTop - wndHeight + wndHeight / 3 * 2);

                    el.data('aniOutStart', offsetTop + el.outerHeight() - wndHeight / 3 * 2);
                    el.data('aniOutStop', offsetTop + el.outerHeight());

                }).scroll(function() {

                    var aniType = '';
                    var factor = 1;
                    var scrollTop = $(window).scrollTop();

                    if (scrollTop < el.data('aniInStop')) {
                        aniType = 'in';
                        factor = -(el.data('aniInStart') - scrollTop) / (el.data('aniInStop') - el.data('aniInStart'));
                    } else {
                        aniType = 'out';
                        factor = -(el.data('aniOutStart') - scrollTop) / (el.data('aniOutStop') - el.data('aniOutStart'));
                    }

                    factor = Math.min(1, Math.max(0, factor));

                    if (aniType == 'in') {
                        el.css('opacity', factor);
                    } else {
                        el.css('opacity', 1 - factor);
                    }

                });
            })($('.content-9'));

            (function(el) {
                $(window).resize(function() {

                    var wndHeight = $(window).height();
                    var offsetTop = el.offset().top;

                    el.data('aniInStart', offsetTop - wndHeight);
                    el.data('aniInStop', offsetTop - wndHeight + wndHeight / 3 * 2);

                    el.data('aniOutStart', offsetTop + el.outerHeight() - wndHeight / 3 * 2);
                    el.data('aniOutStop', offsetTop + el.outerHeight());

                }).scroll(function() {

                    var aniType = '';
                    var factor = 1;
                    var scrollTop = $(window).scrollTop();

                    if (scrollTop < el.data('aniInStop')) {
                        aniType = 'in';
                        factor = -(el.data('aniInStart') - scrollTop) / (el.data('aniInStop') - el.data('aniInStart'));
                    } else {
                        aniType = 'out';
                        factor = -(el.data('aniOutStart') - scrollTop) / (el.data('aniOutStop') - el.data('aniOutStart'));
                    }

                    factor = Math.min(1, Math.max(0, factor));

                    if (aniType == 'in') {
                        el.css('opacity', factor);
                    } else {
                        el.css('opacity', 1 - factor);
                    }

                });
            })($('.content-26.first'));

            (function(el) {
                $(window).resize(function() {

                    var wndHeight = $(window).height();
                    var offsetTop = el.offset().top;

                    el.data('aniInStart', offsetTop - wndHeight);
                    el.data('aniInStop', offsetTop - wndHeight + wndHeight / 3 * 2);

                    el.data('aniOutStart', offsetTop + el.outerHeight() - wndHeight / 3 * 2);
                    el.data('aniOutStop', offsetTop + el.outerHeight());

                }).scroll(function() {

                    var aniType = '';
                    var factor = 1;
                    var scrollTop = $(window).scrollTop();

                    if (scrollTop < el.data('aniInStop')) {
                        aniType = 'in';
                        factor = -(el.data('aniInStart') - scrollTop) / (el.data('aniInStop') - el.data('aniInStart'));
                    } else {
                        aniType = 'out';
                        factor = -(el.data('aniOutStart') - scrollTop) / (el.data('aniOutStop') - el.data('aniOutStart'));
                    }

                    factor = Math.min(1, Math.max(0, factor));

                    if (aniType == 'in') {
                        el.css('opacity', factor);
                    } else {
                        el.css('opacity', 1 - factor);
                    }

                });
            })($('.content-26.second'));

            $('.blog-2 .lead .control').on('click', function() {
                $.scrollTo($(this).closest('section').next(), {
                    axis: 'y',
                    duration: 500
                });
                return false;
            });

            $('.content-9 .control-btn').on('click', function() {
                $.scrollTo($(this).closest('section').next(), {
                    axis: 'y',
                    duration: 500
                });
                return false;
            });

            $('.content-36 .control-btn').on('click', function() {
                $.scrollTo($(this).closest('section').next(), {
                    axis: 'y',
                    duration: 500
                });
                return false;
            });

            $('.content-26 .control-btn').on('click', function() {
                $.scrollTo($(this).closest('section').next(), {
                    axis: 'y',
                    duration: 500
                });
                return false;
            });

            $('.content-26 .lead .control').on('click', function() {
                $.scrollTo($(this).closest('section').next(), {
                    axis: 'y',
                    duration: 500
                });
                return false;
            });

            $('.content-35 .control-btn').on('click', function() {
                $.scrollTo($(this).closest('section').next(), {
                    axis: 'y',
                    duration: 500
                });
                return false;
            });
        }
    } else if ($('body').is('.whatwedo')) {

        var $div = $("#myScrollspy ul");
        var observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.attributeName === "class") {
                    var attributeValue = $(mutation.target).prop(mutation.attributeName);
                    //console.log("Class attribute changed to:", attributeValue);
                    if ($div.hasClass('affix')) {
                        //console.log("active");
                        $('.whatwedo .scrollSpyContent .col-sm-12:first-child .article-heading h3').css({ 'padding-top': '146px' });

                    } else {
                        //console.log("not active");
                        $('.whatwedo .scrollSpyContent .col-sm-12:first-child .article-heading h3').css({ 'padding-top': '0' });
                    }
                }
            });
        });
        observer.observe($div[0], {
            attributes: true
        });
    } else if ($('body').is('.entrepreneurs')) {

        $('tbody tr').each(function() {
            var entrepreneurName = $(this).find('td:first').text();
            //console.log(entrepreneurName);
            $(this).attr('data-toggle', 'modal');
            $(this).attr('data-target', '#membersModal');
            $(this).attr('data-company', entrepreneurName);
        });

        $('tbody tr').on('click', function() {
            event.preventDefault();
            var button = $(this) // Button that triggered the modal
            var recipient = button.data('company') // Extract info from data-* attributes
            var membertype = button.data('type')

            $('#membersModal').on('show.bs.modal', function(event) {

                var modal = $(this)

                // set main loader function
                function mainLoader() {
                    // show main loader
                    modal.find('.modal-content > .loader-wrapper').show()
                    modal.find('.modal-content > .loader-wrapper .loader-outer').show()

                    // calculate main loader size
                    var loaderWrapperWidth = modal.find('.modal-content').width()
                    var loaderWrapperHeight = modal.find('.modal-content').height()
                    modal.find('.modal-content > .loader-wrapper').css({ "width": loaderWrapperWidth })
                    modal.find('.modal-content > .loader-wrapper').css({ "height": loaderWrapperHeight + 10 + 'px' })

                    // set main loader size
                    modal.find('.modal-content > .loader-wrapper .loader-outer').css({ "height": loaderWrapperHeight })

                    // set main loading text

                    if (membertype == 'entrepreneur') {
                        modal.find('.modal-content > .loader-wrapper .loader-inner .notification').text('Henter informasjon om entrepenøren')
                    } else {
                        modal.find('.modal-content > .loader-wrapper .loader-inner .notification').text('Henter informasjon om leverandøren')
                    }

                    // center v & c
                    centerContent();

                    // hide main loader
                    setTimeout(function() {
                        modal.find('.modal-content > .loader-wrapper .loader-outer').fadeOut('fast')
                    }, 500);

                    setTimeout(function() {
                        modal.find('.modal-content > .loader-wrapper').fadeOut()
                    }, 750);
                }

                // initiate main loader
                mainLoader();

                // calculate default content size
                var sidebarHeight = modal.find('.modal-content .sidebar').outerHeight()
                var detailsHeight = sidebarHeight + 10 + 'px';

                // set default content size
                modal.find('.modal-content .details').css({ "height": detailsHeight })

                // hide section loader
                modal.find('.sectionWrapper > .loader-wrapper').hide()

                // set section loader function
                function sectionLoader() {
                    // show section loader
                    modal.find('.sectionWrapper > .loader-wrapper .parent').show()
                    modal.find('.sectionWrapper > .loader-wrapper').show()

                    // calculate sectionWrapper loader size
                    var sectionWrapperWidth = modal.find('.sectionWrapper').outerWidth()
                    var sectionWrapperHeight = modal.find('.sectionWrapper').height()
                    modal.find('.sectionWrapper .loader-wrapper').css({ "width": sectionWrapperWidth })
                    modal.find('.sectionWrapper .loader-wrapper').css({ "height": sectionWrapperHeight + 10 + 'px' })

                    // set sectionWrapper loader size
                    modal.find('.sectionWrapper .loader-wrapper .parent').css({ "height": sectionWrapperHeight })

                    // set content height
                    modal.find('.sectionWrapper .details, .sectionWrapper .contact').css({ "height": sectionWrapperHeight })

                    //modal.find('.sectionWrapper .loader-inner').css({ "width": sectionWrapperWidth / 2 })
                    //modal.find('.sectionWrapper .loader-inner').css({ "height": sectionWrapperHeight / 2 })

                    // set sectionWrapper loading text
                    modal.find('.sectionWrapper .loader-wrapper .child .notification').text('Henter informasjon')

                    setTimeout(function() {
                        modal.find('.sectionWrapper > .loader-wrapper .parent').fadeOut('fast')
                    }, 500);

                    setTimeout(function() {
                        modal.find('.sectionWrapper > .loader-wrapper').fadeOut()
                    }, 750);

                }

                // hide action loader
                modal.find('.actionWrapper > .loader-wrapper').hide()

                // set action loader function
                function actionLoader() {
                    // show section loader
                    modal.find('.actionWrapper > .loader-wrapper .parent').show()
                    modal.find('.actionWrapper > .loader-wrapper').show()

                    // calculate sectionWrapper loader size
                    var actionWrapperWidth = modal.find('.actionWrapper form').width()
                    var actionWrapperHeight = modal.find('.actionWrapper form').height()
                    modal.find('.actionWrapper .loader-wrapper').css({ "width": actionWrapperWidth })
                    modal.find('.actionWrapper .loader-wrapper').css({ "height": actionWrapperHeight - 41 + 'px' })

                    // set sectionWrapper loader size
                    modal.find('.actionWrapper .loader-wrapper .parent').css({ "height": actionWrapperHeight - 41 + 'px' })

                    // set content height
                    modal.find('.actionWrapper .response').css({ "height": actionWrapperHeight - 41 + 'px' })

                    // set sectionWrapper loading text
                    modal.find('.actionWrapper .loader-wrapper .child .notification').text('Henter informasjon')

                    setTimeout(function() {
                        modal.find('.actionWrapper > .loader-wrapper .parent').fadeOut('fast')
                    }, 500);

                    setTimeout(function() {
                        modal.find('.actionWrapper > .loader-wrapper').fadeOut()
                    }, 750);

                }

                modal.find('.sectionWrapper .details').show()
                modal.find('.sectionWrapper .contact').hide()
                modal.find('.actionWrapper .response').hide();

                modal.find('.modal-header .modal-title').text(recipient)

                modal.find('.sectionWrapper .links').addClass('dynamicClass')

                modal.find('.sidebar #sendMail').on('click', function(e) {
                    e.preventDefault()
                    sectionLoader()
                    modal.find('.sectionWrapper .loader-wrapper .child .notification').text('Klargjør kontaktskjema')
                    modal.find('.actionWrapper form').show();
                    modal.find('.sectionWrapper .contact').show()
                    modal.find('.sectionWrapper .details').hide()
                    modal.find('.actionWrapper .response').hide();

                });

                modal.find('.contact .send .btn').on('click', function(e) {
                    e.preventDefault()
                    actionLoader()
                    modal.find('.actionWrapper .loader-wrapper .child .notification').text('Sender melding')
                    modal.find('.actionWrapper .response .dialog').text('Suksess! Din melding er sendt til ' + recipient)
                    modal.find('.actionWrapper .response').show();
                    modal.find('.actionWrapper form').hide();
                    modal.find('.sectionWrapper .details').hide();

                    setTimeout(function() {
                        sectionLoader()
                        if (membertype == 'entrepreneur') {
                            modal.find('.sectionWrapper .loader-wrapper .child .notification').text('Henter detaljer om entrepenøren')
                        } else {
                            modal.find('.sectionWrapper .loader-wrapper .child .notification').text('Henter detaljer om leverandøren')
                        }
                        modal.find('.sectionWrapper .details').show();
                        modal.find('.sectionWrapper .contact').hide();
                        modal.find('.actionWrapper .response').hide();
                    }, 2500);

                });

                modal.find('.contact .cancel .btn').on('click', function(e) {
                    e.preventDefault()
                    sectionLoader()
                    if (membertype == 'entrepreneur') {
                        modal.find('.sectionWrapper .loader-wrapper .child .notification').text('Henter detaljer om entrepenøren')
                    } else {
                        modal.find('.sectionWrapper .loader-wrapper .child .notification').text('Henter detaljer om leverandøren')
                    }
                    modal.find('.contact').hide();
                    modal.find('.details').show();
                });

                modal.find('.details .links .gallery ').text('Se inspirasjonsbilder fra ' + recipient)

                if (membertype == 'entrepreneur') {

                    modal.find('.details h5').text('Detaljer om entrepenøren')
                    modal.find('.sectionWrapper .contact h5, .sectionWrapper .response h5').text('Send en melding til entrepenøren')
                    modal.find('.details .links .projects ').text('Se prosjekter fra ' + recipient)
                    modal.find('.details .links .projects').show()

                } else {

                    modal.find('.details h5').text('Detaljer om leverandøren')
                    modal.find('.sectionWrapper .contact h5, .sectionWrapper .response h5').text('Send en melding til leverandøren')
                    modal.find('.details .links .projects').hide()

                }

                modal.find('.sidebar #sendMail').attr('data-original-title', 'Send en melding til ' + recipient)

            });

            // show modal
            $('#membersModal').modal('show');

        });

        var iDisplayLength = 20;

        var oTable;

        oTable = $('#membersTable').DataTable({
            stateSave: false,
            //paging: false,
            //ordering: false,
            //info: false,,
            iDisplayLength: iDisplayLength,
            bLengthChange: false,
            columnDefs: [
                { className: "dt-center", "targets": [3] }
            ],
            language: {
                paginate: {
                    "next": "Neste",
                    "previous": "Forrige"
                },
                //info: "Viser side _PAGE_ av _PAGES_",
                sInfo: "Viser _START_ til _END_ av totalt _TOTAL_ oppføringer",
                infoFiltered: " - filtrert fra totalt _MAX_ oppføringer",
                infoEmpty: "Ingen oppføringer å vise",
                sZeroRecords: "Ingen samsvarende oppføringer funnet"
            }
        });

        checkIfSelectBoxInuse();

        function checkIfSelectBoxInuse() {
            if ($('.member-location').find('.yadcf-filter-wrapper > select').hasClass("inuse")) {
                //console.log('wohoo');
                $('.member-location').find('.yadcf-filter-wrapper select.inuse').parent('div').find('.select2-container').addClass('inuse');
            } else {
                //console.log('not so much...');
                $('.member-location').find('.yadcf-filter-wrapper select.inuse').parent('div').find('.select2-container').removeClass('inuse');
            }
        }

        var info = oTable.page.info();

        var totalRecords = info.recordsTotal;
        //var totalRecords = 9;

        //console.log('Total Records is ' + totalRecords)

        var Select2EnabledMode = true;

        var select2DefaultData = { id: 20, text: 'Vis 20 per side' };

        if (totalRecords <= 10) {
            //console.log('less than or equal to 10');
            iDisplayLength = 10;
            Select2EnabledMode = false;
            var records_to_show_preload_data = [
                { id: 10, text: 'Vis 10 per side', value: '10' },
            ];
            select2DefaultData = { id: 10, text: 'Vis 10 per side' };
        } else if (totalRecords < 20) {
            console.log('less than 20');
            iDisplayLength = 10;
            var records_to_show_preload_data = [
                { id: 10, text: 'Vis 10 per side', value: '10' },
                { id: totalRecords, text: 'Vis alle på en side', value: totalRecords },
            ];
            select2DefaultData = { id: 10, text: 'Vis 10 per side' };
        } else if (totalRecords >= 20) {
            //console.log('greater than or equal to 20');
            var records_to_show_preload_data = [
                { id: 10, text: 'Vis 10 per side', value: '10' },
                { id: 20, text: 'Vis 20 per side', value: '20' },
                { id: totalRecords, text: 'Vis alle på en side', value: totalRecords },
            ];
        } else if (totalRecords >= 50) {
            //console.log('greater than or equal to 50');
            var records_to_show_preload_data = [
                { id: 10, text: 'Vis 10 per side', value: '10' },
                { id: 20, text: 'Vis 20 per side', value: '20' },
                { id: 50, text: 'Vis 50 per side', value: '50' },
                { id: totalRecords, text: 'Vis alle på en side', value: totalRecords },
            ];
        } else if (totalRecords >= 100) {
            //console.log('greater than or equal to 100');
            var records_to_show_preload_data = [
                { id: 10, text: 'Vis 10 per side', value: '10' },
                { id: 20, text: 'Vis 20 per side', value: '20' },
                { id: 50, text: 'Vis 50 per side', value: '50' },
                { id: 100, text: 'Vis 100 per side', value: '100' },
                { id: totalRecords, text: 'Vis alle på en side', value: totalRecords },
            ];
        }

        $('#showPerPage')
            .select2({
                enable: false,
                data: records_to_show_preload_data,
                //placeholder: "Vis " + iDisplayLength + " per side",
                allowClear: true
            })
            .select2("enable", Select2EnabledMode)
            .select2('data', select2DefaultData);



        $('#showPerPage').on("change", function() {
            iDisplayLength = ($('#showPerPage').val());
            console.log(iDisplayLength);
            oTable.page.len(iDisplayLength).draw();
            checkIfSelectBoxInuse();
        });

        yadcf.init(oTable, [{
            column_number: 0,
            filter_container_id: 'userSearch',
            filter_type: "text",
            text_data_delimiter: ","
        }, {
            column_number: 1,
            select_type: 'select2',
            filter_container_id: 'memberTypeValue',
            filter_default_label: "Medlemstype"
        }, {
            column_number: 2,
            filter_container_id: 'companySearch',
            filter_type: "text",
            text_data_delimiter: ","
        }, {
            column_number: 3,
            filter_container_id: 'locationSearch',
            filter_type: "text",
            text_data_delimiter: ","
        }, {
            column_number: 4,
            select_type: 'select2',
            filter_container_id: 'memberMunicipalities',
            filter_default_label: "Alle fylker"

        }, {
            column_number: 5,
            select_type: 'select2',
            filter_container_id: 'memberRegions',
            filter_default_label: "Alle landsdeler"
        }], { externally_triggered: true });

        $('.member-location select').on("change", function(e) {
            yadcf.exFilterExternallyTriggered(oTable);
            $('#showAll').closest('li').removeClass('active');
        });

        $('#memberMunicipalities').on("change", function(e) {
            yadcf.stopPropagation(event);
            yadcf.doFilter('clear', '-membersTable', 5);
            checkIfSelectBoxInuse();
            return false;
        });

        $('#memberRegions').on("change", function(e) {
            yadcf.stopPropagation(event);
            yadcf.doFilter('clear', '-membersTable', 4);
            checkIfSelectBoxInuse();
            return false;
        });

        $('#showAll').on("click", function(e) {
            event.preventDefault();
            $(".sort .member-type li a").closest('ul').children().removeClass('active');
            yadcf.exResetAllFilters(oTable);
            $(this).closest('li').addClass('active');
            $('.search input').val('');
        });


        $("#showEntrepreneurs").click(function() {
            event.preventDefault();
            $("#showSuppliers").closest('li').removeClass('active');
            $('#showAll').closest('li').removeClass('active');
            $(this).closest('li').addClass('active');
            $("#memberTypeValue select").val('Entrepenør');
            yadcf.exFilterExternallyTriggered(oTable);
            checkIfSelectBoxInuse();
        });

        $("#showSuppliers").click(function() {
            event.preventDefault();
            $("#showEntrepreneurs").closest('li').removeClass('active');
            $('#showAll').closest('li').removeClass('active');
            $(this).closest('li').addClass('active');
            $("#memberTypeValue select").val('Leverandør');
            yadcf.exFilterExternallyTriggered(oTable);
            checkIfSelectBoxInuse();
        });

        $('#companySearch').on('keyup', function() {
            oTable
                .columns(0)
                .search(this.value)
                .draw();
            checkIfSelectBoxInuse();
        });

        $('#userSearch').on('keyup', function() {
            oTable
                .columns(2)
                .search(this.value)
                .draw();
            checkIfSelectBoxInuse();
        });

        $('#locationSearch').on('keyup', function() {
            oTable
                .columns(3)
                .search(this.value)
                .draw();
            checkIfSelectBoxInuse();
        });

    } else if ($('body').is('.galleries')) {

        // Create Image Gallery Modal
        $('.project-wrapper .project > a').on('click', function() {
            event.preventDefault();
            var button = $(this) // Button that triggered the modal
                //var imageDescription = button.data('name') // Extract info from data-* attributes
            var companyName = $(button).parent().find('.info a').text()
            var galleryName = $(button).parent().find('.info .name').text()
            var imageDescription = $(button).parent().find('.info .name').text()

            var membertype = button.data('type')

            console.log(membertype)

            $('#galleryModal').on('shown.bs.modal', function(event) {

                var modal = $(this)

                if (membertype == 'supplier') {

                    modal.find('.modal-header .modal-title').text(galleryName)
                    modal.find('.modal-body .carousel-caption h3 span').text('Thumbnail label')
                    modal.find('.modal-footer .button').html('<a class="btn btn-block btn-success btn-outline" href="gallery-singel-supplier.html">Se flere inspirasjonsgallerier fra ' + companyName + '</a>')
                } else {
                    modal.find('.modal-header .modal-title').text('Inspirasjonsgalleri for ' + companyName)
                    modal.find('.modal-body .carousel-caption h3 span').text(galleryName)
                    modal.find('.modal-footer .button').html('<a class="btn btn-block btn-danger btn-outline" href="#">Se prosjekter fra ' + companyName + '</a>')
                }

            });

            // show modal
            $('#galleryModal').modal('show');

        });

        // Instantiate MixItUp
        $('.projects').mixItUp({
            animation: {
                animateResizeTargets: true
            },
            load: {
                sort: 'desc'
            }
        });

        // var sortName = $('.sort-name')
        // var sortDate = $('.sort-date')

        // // MixItUp - Sort by Gallery Name
        // function sortNameHandler1() {
        //     console.log('name handler 1 clicked')
        //     $('.projects').mixItUp('sort', 'name:asc')
        //     $(this).find('.fa').removeClass('fa-sort').addClass('fa-sort-alpha-asc')
        //     $(this).addClass('active')
        //     $(this).find('a span').text('Sortert')
        //     $(this).one("click", sortNameHandler2);
        // }

        // function sortNameHandler2() {
        //     console.log('name handler 2 clicked')
        //     $('.projects').mixItUp('sort', 'name:desc')
        //     $(this).find('.fa').removeClass('fa-sort-alpha-asc').addClass('fa-sort-alpha-desc')
        //     $(this).one("click", sortNameHandler3);
        // }

        // function sortNameHandler3() {
        //     console.log('name handler 3 clicked')
        //     $('.projects').mixItUp('sort', 'default')
        //     $(this).find('.fa').removeClass('fa-sort-alpha-desc').addClass('fa-sort')
        //     $(this).removeClass('active')
        //     $(this).find('a span').text('Sorter')
        //     $(this).one("click", sortNameHandler1);
        // }

        // function sortNameHandler4() {
        //     console.log('name handler reset')
        //     $(this).find('.fa').removeClass().addClass('fa-sort')
        //     $(this).removeClass('active')
        //     $(this).find('a span').text('Sorter')
        //     $(sortName).one("click", sortNameHandler1);
        // }

        // // Initiate sort by Gallery Name
        // $(sortName).one("click", sortNameHandler1);
        // //$(sortName).unbind("click", sortDateHandler1).one("click", sortNameHandler1);

        // // MixItUp - Sort by date
        // function sortDateHandler1() {
        //     console.log('date handler 1 clicked')
        //     $('.projects').mixItUp('sort', 'date:desc')
        //     $(this).find('.fa').removeClass('fa-sort-numeric-asc').addClass('fa-sort-numeric-desc')
        //     $(this).addClass('active')
        //     $(this).find('a span').text('Sortert')
        //     $(this).one("click", sortDateHandler2);
        // }

        // function sortDateHandler2() {
        //     console.log('date handler 2 clicked')
        //     $('.projects').mixItUp('sort', 'date:asc')
        //     $(this).find('.fa').removeClass('fa-sort-numeric-desc').addClass('fa-sort-numeric-asc')
        //     $(this).one("click", sortDateHandler3);
        // }

        // function sortDateHandler3() {
        //     console.log('date handler 3 clicked')
        //     $('.projects').mixItUp('sort', 'random')
        //     $(this).find('.fa').removeClass('fa-sort-numeric-asc').addClass('fa-sort')
        //     $(this).removeClass('active')
        //     $(this).find('a span').text('Sorter')
        //     $(this).one("click", sortDateHandler1);
        // }

        // function sortDateHandler4() {
        //     console.log('date handler reset')
        //     $(this).find('.fa').removeClass().addClass('fa-sort')
        //     $(this).removeClass('active')
        //     $(this).find('a span').text('Sorter')
        //     $(sortDate).one("click", sortDateHandler1);
        // }

        // // Initiate sort by date
        // $(sortDate).one("click", sortDateHandler1);
        // //$(sortDate).unbind("click", sortNameHandler1).one("click", sortDateHandler1);

        // // MixItUp - Searchable Filtering
        // var inputText;
        // var $matching = $();

        // // Delay function
        // var delay = (function() {
        //     var timer = 0;
        //     return function(callback, ms) {
        //         clearTimeout(timer);
        //         timer = setTimeout(callback, ms);
        //     };
        // })();

        // $('#companySearch').keyup(function() {
        //     // Delay function invoked to make sure user stopped typing
        //     delay(function() {
        //         inputText = $('#companySearch').val().toLowerCase();

        //         // Check to see if input field is empty
        //         if ((inputText.length) > 0) {
        //             $('.mix').each(function() {
        //                 //$this = $("this");

        //                 // add item to be filtered out if input text matches items inside the title
        //                 if ($(this).children('.project').children('.info').children('.company').children('span').text().toLowerCase().match(inputText)) {
        //                     $matching = $matching.add(this);
        //                 } else if ($(this).children('.project').children('.info').children('.name').text().toLowerCase().match(inputText)) {
        //                     $matching = $matching.add(this);
        //                 } else {
        //                     // removes any previously matched item
        //                     $matching = $matching.not(this);
        //                 }
        //             });
        //             $('.projects').mixItUp('filter', $matching);
        //         } else {
        //             // resets the filter to show all item if input is empty
        //             $('.projects').mixItUp('filter', 'all');
        //         }
        //     }, 200);
        // });

    } else if ($('body').is('.projects')) {
        // Instantiate MixItUp:
        $('.projects').mixItUp({
            animation: {
                animateResizeTargets: true
            }
        });

    } else {

    }

    if ($('body').is('.galleries.single')) {

        var bodyclass = $('body').attr("class");
        console.log(bodyclass)
            // Create Image Gallery Modal
        $('#messageMember').on('click', function() {
            event.preventDefault();
            var button = $(this) // Button that triggered the modal
            var recipient = $('.head-box .brand span').text()

            $('#galleryMessageMemberModal').on('shown.bs.modal', function(event) {

                var modal = $(this)

                // hide main action loader
                modal.find('.member-contact > .loader-wrapper').hide()

                // set action loader function
                function actionLoader() {
                    // get modal content height
                    var sH = modal.find('.modal-content').outerHeight();
                    var sW = modal.find('.modal-content').outerWidth();

                    // set sectionWrapper loader-wrapper size
                    modal.find('.member-contact .loader-wrapper').css('height', (sH) + 'px')
                    //modal.find('.member-contact .loader-wrapper').css('width', (sW) + 'px')
                    modal.find('.member-contact .loader-wrapper .parent').css('height', (sH) + 'px')

                    // show section loader
                    modal.find('.member-contact > .loader-wrapper .parent').show()
                    modal.find('.member-contact > .loader-wrapper').show()

                    // set content height
                    modal.find('.member-contact .response').css('height', (sH) + 'px')

                    // set sectionWrapper loading text
                    modal.find('.member-contact .loader-wrapper .child .notification').text('Klargjør kontaktskjema')

                    // // set fade out timer
                    // setTimeout(function() {
                    //     modal.find('.member-contact > .loader-wrapper .parent').fadeOut('fast')
                    // }, 500);

                    // setTimeout(function() {
                    //     modal.find('.member-contact > .loader-wrapper').fadeOut()
                    // }, 750);

                }

                actionLoader()

                // hide sub action loader
                modal.find('.messageWrapper > .loader-wrapper').hide()

                // function actionLoader() {
                //     // show section loader
                //     modal.find('.messageWrapper > .loader-wrapper .parent').show()
                //     modal.find('.messageWrapper > .loader-wrapper').show()

                //     // set sectionWrapper loader-wrapper size
                //     modal.find('.messageWrapper .loader-wrapper').css('height', (sH) + 'px')
                //     modal.find('.messageWrapper .loader-wrapper').css('width', (sW) + 'px')
                //     modal.find('.messageWrapper .loader-wrapper .parent').css('height', (sH) + 'px')

                //     // set content height
                //     modal.find('.messageWrapper .response').css('height', (sH) + 'px')

                //     // set sectionWrapper loading text
                //     modal.find('.messageWrapper .loader-wrapper .child .notification').text('Klargjør kontaktskjema')

                //     // set fade out timer
                //     setTimeout(function() {
                //         modal.find('.messageWrapper > .loader-wrapper .parent').fadeOut('fast')
                //     }, 500);

                //     setTimeout(function() {
                //         modal.find('.messageWrapper > .loader-wrapper').fadeOut()
                //     }, 750);

                // }

                // actionLoader()

                // modal.find('.messageWrapper .response').hide();

                // modal.find('.modal-header .modal-title').text('Send melding til ' + recipient)

                // modal.find('.modal-footer .send .btn').on('click', function(e) {
                //     e.preventDefault()
                //     console.log('send btn clicked')
                //     actionLoader()
                //     modal.find('.messageWrapper .loader-wrapper .child .notification').text('Sender melding')
                //     modal.find('.messageWrapper .response .dialog').text('Suksess! Din melding er sendt til ' + recipient)
                //     modal.find('.messageWrapper .response').show();
                //     modal.find('.messageWrapper .form').hide();

                //     setTimeout(function() {
                //         modal.find('.messageWrapper .loader-wrapper .child .notification').text('Klargjør kontaktskjema')
                //         modal.find('.messageWrapper .response').fadeOut();
                //         modal.find('.messageWrapper .form').show();
                //         actionLoader()
                //     }, 2500);

                // });

                // modal.find('.modal-footer .cancel .btn').on('click', function(e) {
                //     // clear the form on cancel
                //     $(this).closest('form').find("input[type=text], textarea").val("");
                // });

            });

            // show modal
            $('#galleryMessageMemberModal').modal('show');

        });

    } else if ($('body').is('.projects.single')) {
        $(window).resize(function() {
            var sH = $(window).height();
            if ($(window).height() <= 860) {
                console.log($(window).width());
                $('section.project').css('height', 'auto');
            } else if ($(window).width() <= 1200) {
                console.log($(window).width());
                $('section.project').css('height', 'auto');
            } else {
                $('section.project').css('height', (sH - ($('header').outerHeight() * 2)) + 'px');
            }
        });

        var sH = $(window).height();
        $('.contact.center').css('height', (sH) + 'px');

        if ($(window).width() > 768) {
            (function(el) {
                $(window).resize(function() {

                    var wndHeight = $(window).height();
                    var offsetTop = el.offset().top;

                    el.data('aniInStart', offsetTop - wndHeight);
                    el.data('aniInStop', offsetTop - wndHeight + wndHeight / 3 * 2);

                    el.data('aniOutStart', offsetTop + el.outerHeight() - wndHeight / 3 * 2);
                    el.data('aniOutStop', offsetTop + el.outerHeight());

                }).scroll(function() {

                    var aniType = '';
                    var factor = 1;
                    var scrollTop = $(window).scrollTop();

                    if (scrollTop < el.data('aniInStop')) {
                        aniType = 'in';
                        factor = -(el.data('aniInStart') - scrollTop) / (el.data('aniInStop') - el.data('aniInStart'));
                    } else {
                        aniType = 'out';
                        factor = -(el.data('aniOutStart') - scrollTop) / (el.data('aniOutStop') - el.data('aniOutStart'));
                    }

                    factor = Math.min(1, Math.max(0, factor));

                    if (aniType == 'in') {
                        el.css('opacity', factor);
                    } else {
                        el.css('opacity', 1 - factor);
                    }

                });
            })($('.contact.center'));
        }

        $('.sidebar .control-btn.questions').on('click', function() {
            $('html, body').animate({
                scrollTop: $('.contact.center').offset().top
            }, 500);
            return false;
        });

    }



    // Focus state for append/prepend inputs
    $('.input-group').on('focus', '.form-control', function() {
        $(this).closest('.input-group').addClass('focus');
    }).on('blur', 'input, textarea', function() {
        $(this).closest('.input-group').removeClass('focus');
    });

    $('.input-group').last().addClass('last');

    $('.header-21 .nav li').last().addClass('last');

    if ($("textarea").length > 0) {
        // automatically adjust textarea height
        autosize($('textarea'));
    }

    /*----------------------------------( FADED ELEMENTS )----------------------------------*/
    if ($(window).width() > 480) {
        $('h3 img:not(.hl)').each(function() {
            fadedEls($(this), 'h/2');
        });
    }

    /*----------------------------------( SCROLLSPY )----------------------------------*/


    $('#myScrollspy ul').affix({ offset: { top: $('header').outerHeight() + $('.title').outerHeight() } });

    $(document).on('click', "#myScrollspy ul li a", function(event) {
        event.preventDefault();
        var $link = $(event.currentTarget.hash);

        $('html, body').animate({
            scrollTop: $link.offset().top
        }, 500);
    });

    /*----------------------------------( MODAL MAX-HEIGHT )----------------------------------*/

    function setModalMaxHeight(element) {
        this.$element = $(element);
        this.$content = this.$element.find('.modal-content');
        var borderWidth = this.$content.outerHeight() - this.$content.innerHeight();
        var dialogMargin = $(window).width() < 768 ? 20 : 60;
        var contentHeight = $(window).height() - (dialogMargin + borderWidth);
        var headerHeight = this.$element.find('.modal-header').outerHeight() || 0;
        var footerHeight = this.$element.find('.modal-footer').outerHeight() || 0;
        var maxHeight = contentHeight - (headerHeight + footerHeight);

        this.$content.css({
            'overflow': 'hidden'
        });

        this.$element
            .find('.modal-body').css({
                'max-height': maxHeight,
                'overflow-y': 'auto'
            });
    }

    $('.modal').on('show.bs.modal', function() {
        $(this).show();
        setModalMaxHeight(this);
    });

    $(window).resize(function() {
        if ($('.modal.in').length != 0) {
            setModalMaxHeight($('.modal.in'));
        }
    });

});

// $(document).ready(function() {
//
//
// });
