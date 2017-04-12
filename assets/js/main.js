


$(document).ready(function() {
    var table = $('#example').DataTable({
        "columnDefs": [
            { "visible": false, "targets": 2 }
        ],
        "order": [[ 2, 'asc' ]],
        "displayLength": 25,
        "drawCallback": function ( settings ) {
            var api = this.api();
            var rows = api.rows( {page:'current'} ).nodes();
            var last=null;
 
            api.column(2, {page:'current'} ).data().each( function ( group, i ) {
                if ( last !== group ) {
                    $(rows).eq( i ).before(
                        '<tr class="group"><td colspan="5">'+group+'</td></tr>'
                    );
 
                    last = group;
                }
            } );
        }
    } );
 
    // Order by the grouping
    $('#example tbody').on( 'click', 'tr.group', function () {
        var currentOrder = table.order()[0];
        if ( currentOrder[0] === 2 && currentOrder[1] === 'asc' ) {
            table.order( [ 2, 'desc' ] ).draw();
        }
        else {
            table.order( [ 2, 'asc' ] ).draw();
        }
    } );
} );






















































$('.MyCheckBox').click(function() {
    if ($(this).is(':checked')) {
        $("#ShowMeDIV").show();
    } else {
        $("#ShowMeDIV").hide();
    }
});


 


$(document).ready(function () {
    $('label.tree-toggler').click(function () {
        $(this).parent().children('ul.tree').toggle(500);
    });
});






$(document).ready(function () {
    var ckbox = $('#checkbox');

});




var dt_from = "01/01/2017 ";
var dt_to = "01/02/2017 ";

$('.slider-time').html(dt_from);
$('.slider-time2').html(dt_to);
var min_val = Date.parse(dt_from)/1000;
var max_val = Date.parse(dt_to)/1000;

function zeroPad(num, places) {
    var zero = places - num.toString().length + 1;
    return Array(+(zero > 0 && zero)).join("0") + num;
}
function formatDT(__dt) {
    var year = __dt.getFullYear();
    var month = zeroPad(__dt.getMonth()+1, 2);
    var date = zeroPad(__dt.getDate(), 2);
    var hours = zeroPad(__dt.getHours(), 2);
    var minutes = zeroPad(__dt.getMinutes(), 2);
    var seconds = zeroPad(__dt.getSeconds(), 2);
    return date + '-' + month + '-' + year ;
}






$(document).ready(function(){

    //this will hold reference to the tr we have dragged and its helper
    var c = {};

    $(".inventor  ").draggable({
        helper: "clone",
        start: function(event, ui) {
            c.tr = this;
            c.helper = ui.helper;
        }
    });


    $(".invention  ").droppable({
        drop: function(event, ui) {
            var inventor = ui.draggable.text();
            $(this).find("input").val(inventor);

            $(c.tr).add();
            $(c.helper).add();
        }
    });

});










$("#slider-range").slider({
    range: true,
    min: min_val,
    max: max_val,
    step: 10,
    values: [min_val, max_val],
    slide: function (e, ui) {
        var dt_cur_from = new Date(ui.values[0]*1000); //.format("yyyy-mm-dd hh:ii:ss");
        $('.slider-time').html(formatDT(dt_cur_from));

        var dt_cur_to = new Date(ui.values[1]*1000); //.format("yyyy-mm-dd hh:ii:ss");
        $('.slider-time2').html(formatDT(dt_cur_to));
    }
});










var dt_from = "01/01/2017 ";
var dt_to = "12/29/2017 ";

$('.slider-timea').html(dt_from);
$('.slider-time2a').html(dt_to);
var min_val = Date.parse(dt_from)/1000;
var max_val = Date.parse(dt_to)/1000;

function zeroPad(num, places) {
    var zero = places - num.toString().length + 1;
    return Array(+(zero > 0 && zero)).join("0") + num;
}
function formatDT(__dt) {
    var year = __dt.getFullYear();
    var month = zeroPad(__dt.getMonth()+1, 2);
    var date = zeroPad(__dt.getDate(), 2);
    var hours = zeroPad(__dt.getHours(), 2);
    var minutes = zeroPad(__dt.getMinutes(), 2);
    var seconds = zeroPad(__dt.getSeconds(), 2);
    return date + '-' + month + '-' + year ;
};


$("#slider-rangea").slider({
    range: true,
    min: min_val,
    max: max_val,
    step: 10,
    values: [min_val, max_val],
    slide: function (e, ui) {
        var dt_cur_from = new Date(ui.values[0]*1000); //.format("yyyy-mm-dd hh:ii:ss");
        $('.slider-timea').html(formatDT(dt_cur_from));

        var dt_cur_to = new Date(ui.values[1]*1000); //.format("yyyy-mm-dd hh:ii:ss");
        $('.slider-time2a').html(formatDT(dt_cur_to));
    }
});





//
//
//$('#clickme').click(function() {
//    var $slider = $('.mydiv');
//    $slider.animate({
//      right: parseInt($slider.css('right'),10) == -200 ?
//       0 : -200
//    });
//  });






$(document).ready(function () {
    var expanded = false;
    $("#drawer-handle, #prp").click(function () {
        if (expanded = !expanded) {
            $("#drawer-content").animate({ "margin-right": 0 },    "slow");
        } else {
            $("#drawer-content").animate({ "margin-right": -800 }, "slow");
        }
    });
});





//
//
// $(document).ready(function() {
//     var table = $('#example').DataTable( {
//         lengthChange: false,
//         buttons: [ 'copy', 'excel', 'pdf', 'colvis' ]
//     } );
//
//     table.buttons().container()
//         .insertBefore( '#example_filter' );
// } );
//
//
//
//
//
//
// $(document).ready(function() {
//     // Setup - add a text input to each footer cell
//     $('#example tfoot th').each( function () {
//         var title = $(this).text();
//         $(this).html( '<input type="text" placeholder="Search '+title+'" />' );
//     } );
//
//     // DataTable
//     var table = $('#example').DataTable();
//
//     // Apply the search
//     table.columns().every( function () {
//         var that = this;
//
//         $( 'input', this.footer() ).on( 'keyup change', function () {
//             if ( that.search() !== this.value ) {
//                 that
//                     .search( this.value )
//                     .draw();
//             }
//         } );
//     } );
// } );
//




$(document).ready(function() {
    $('#example').DataTable( {
        dom: 'Bfrtip',
        buttons: [
            {
                extend:    'copyHtml5',
                text:      '<i class="fa fa-files-o"></i>',
                titleAttr: 'Copy'
            },
            {
                extend:    'excelHtml5',
                text:      '<i class="fa fa-file-excel-o"></i>',
                titleAttr: 'Excel'


                // extend:'excelHtml5',
                // text:'',
                // titleAttr:'Bandeja_de_Notificaciones',
                // className: 'excelbtn'



            },
            {
                extend:    'csvHtml5',
                text:      '<i class="fa fa-file-text-o"></i>',
                titleAttr: 'CSV'
            },
            {
                extend:    'pdfHtml5',
                text:      '<i class="fa fa-file-pdf-o"></i>',
                titleAttr: 'PDF'
            }
        ]
    } );
} );

$(document).ready( function () {
    var table = $('#example').DataTable();
    $('div.dataTables_filter input').attr('placeholder', 'Search');
} );








$(function() {

    // We can attach the `fileselect` event to all file inputs on the page
    $(document).on('change', ':file', function() {
        var input = $(this),
            numFiles = input.get(0).files ? input.get(0).files.length : 1,
            label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
        input.trigger('fileselect', [numFiles, label]);
    });

    // We can watch for our custom `fileselect` event like this
    $(document).ready( function() {
        $(':file').on('fileselect', function(event, numFiles, label) {

            var input = $(this).parents('.input-group').find(':text'),
                log = numFiles > 1 ? numFiles + ' files selected' : label;

            if( input.length ) {
                input.val(log);
            } else {
                if( log ) alert(log);
            }

        });
    });

});



    
$( "#success-btn" ).click(function() {
  $( "div.successa" ).fadeIn( 1500 ).delay( 111500 ).fadeOut( 12500 );
});



$('#sandbox-container input').datepicker({
    autoclose: true
});

$('#sandbox-container input').on('show', function(e){
    console.debug('show', e.date, $(this).data('stickyDate'));

    if ( e.date ) {
        $(this).data('stickyDate', e.date);
    }
    else {
        $(this).data('stickyDate', null);
    }
});

$('#sandbox-container input').on('hide', function(e){
    console.debug('hide', e.date, $(this).data('stickyDate'));
    var stickyDate = $(this).data('stickyDate');

    if ( !e.date && stickyDate ) {
        console.debug('restore stickyDate', stickyDate);
        $(this).datepicker('setDate', stickyDate);
        $(this).data('stickyDate', null);
    }
});


jQuery(document).ready(function(){
    jQuery('#hideshow').live('click', function(event) {
        jQuery('#content').toggle('show');
    });
});





$( "#avc" ).click(function() {
    $( "#item" ).toggle(400);
});



$( "#avc2" ).click(function() {
    $( "#item2" ).toggle(400);
});






$(".anOtherButton").click(function() {
    $(".alldisable").attr('disabled', !$(".alldisable").attr('disabled'));
});



function toggleIcon(e) {
    $(e.target)
        .prev('.panel-heading')
        .find(".more-less")
        .toggleClass('glyphicon-plus glyphicon-minus');
}
$('.panel-group').on('hidden.bs.collapse', toggleIcon);
$('.panel-group').on('shown.bs.collapse', toggleIcon);
























