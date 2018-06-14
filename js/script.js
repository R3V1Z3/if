var default_transform;
var eid_inner = '.inner';
var svg_filter;

const gd = new GitDown('#wrapper', {
    title: 'IF',
    content: 'README.md',
    markdownit: 'false',
    merge_gists: false,
    callback: done
});

var eid = gd.eid;
var timeout;

function done() {

    // remove any existing svg ids
    $('#svg').remove();
    $('.info .toc-heading').remove();
    $('.info .toc').remove();

    svg_filter = gd.get_param('svg-filter');
    extract_svg('filters.svg');

    // wrap .inner with an fx div
    if ( $('.fx').length === 0 ) {
        $(eid_inner).wrap('<div class="fx">');
        $('.fx').append('<div class="vignette"></div>');
    }
    
    var v = $('.info .field.slider.vignette input').val();
    vignette(v);
    
    // var css = gd.get_setting('style');
    // var f = $( ' .info .field.font select' ).val();
    // update_font(f);

    register_events();

    var x = $('.info .slider.offsetX input').val();
    var y = $('.info .slider.offsetY input').val();
    $(eid_inner).attr( 'data-x' , x );
    $(eid_inner).attr( 'data-y' , y );

    // // everything loaded, now calculate url params
    // render_values(true);
    // toggle_class('tiltshift');
    // toggle_class('font-effect');

    // load and run selected story
    let story = gd.settings.get_value('story');
    console.log(story);
    run(story);
    gd.update_from_params();
    center_view();
}

function run(story) {
    $('.content pre.code').remove();
    $('.content pre.code-overlay').remove();
    $('#parchment').remove();
    $('#inform').remove();
    let parchment = `<div id="parchment"
    aria-live="polite"
    aria-atomic="false"
    aria-relevant="additions">
    </div>`;
    $('.section .content').append(parchment);

    head = document.getElementsByTagName('head')[0];
    script = document.createElement('script');
    script.id = 'inform';
    script.type = 'text/javascript';
    script.src = 'lib/parchment.min.js';
    head.appendChild(script);
}

function vignette(v) {
    var bg = `radial-gradient(ellipse at center,`;
    bg += `rgba(0,0,0,0) 0%,`;
    bg += `rgba(0,0,0,${v/6}) 30%,`;
    bg += `rgba(0,0,0,${v/3}) 60%,`;
    bg += `rgba(0,0,0,${v}) 100%)`;
    var s = '';
    var vignette = document.querySelector( eid + ' .vignette' );
    if ( vignette !== null ) {
        vignette.style.backgroundImage = bg;
    }
}

function extract_svg(filename) {
    $.get( filename, function(data) {
        // add svg filters to body
        var div = document.createElement("div");
        div.id = 'svg';
        div.innerHTML = new XMLSerializer().serializeToString(data.documentElement);
        document.body.insertBefore(div, document.body.childNodes[0]);

        var $select = $('.info .field.select.svg-filter select');
        if ( $select.length > 0 ) {
            // $select exists, so lets add the imported filters
            $('#svg defs filter').each(function() {
                var id = $(this).attr('id');
                var name = $(this).attr('inkscape:label');
                $select.append(`<option>${name}-${id}</option>`);
            });
        }

        // we'll update svg-filter url parameter now that svg is loaded
        var $select = $('.info .select.svg-filter select');
        $select.val(svg_filter);
        $select.change();
    });
}

function update_slider_value( name, value ) {
    let slider = document.querySelector( `.info .slider.${name} input` );
    slider.value = value;
    slider.setAttribute( 'value', value );
}

// svg handler
// 
function render_values(t) {
    // var f = '';
    // var v = 'effects';
    // if (t) v = 'perspective';
    // $fields = $(`.info .collapsible.${v} .field.slider`);
    // $fields.each(function(){
    //     var $i = $(this).find('input');
    //     var name = $i.attr('name');
    //     var value = $i.val();
    //     var suffix = $i.attr('data-suffix');
    //     if ( suffix === undefined ) suffix = '';
    //     // add values of tranform sliders to f
    //     if ( name != 'vignette' ) {
    //         f += `${name}(${value}${suffix}) `;
    //     }
    // });
    // if (!t) {
    //     var svg = $('.info .field.select.svg-filter select').val();
    //     var x = '';
    //     if ( svg === 'none' || svg === null ) {
    //     } else {
    //         var splt = svg.split('-');
    //         svg = splt[splt.length - 1];
    //         f += `url("#${svg}")`;
    //     }
    // }
}

function update_font(f) {
    // remove any existing font link
    $('#gd-font').remove();
    if ( f === undefined || f === null ) f = 'default';
    if ( f.toLowerCase() !== 'default' ) {
        f = f.replace( /\-/g, '+' );
        // capitalize words
        f = f.replace( /\b\w/g, l => l.toUpperCase() );
        f = f.replace( 'Iscript', 'iScript' );
        f = f.replace( 'Ibm', 'IBM' );
        f = f.replace( 'Pt+Mono', 'PT+Mono' );
        f = f.replace( 'Vt323', 'VT323' );
        if ( f === "Fira+Code+iScript") {
            // 'Fira Code iScript'
        } else if ( f === "Fira+Code") {
            //
        } else {
            load_gfont(f);
        }
        // now lets add the font to the section elements
        f = f.replace( /\+/g, ' ' );
        $('.inner .section *').css({ fontFamily : f });
    }
}

function load_gfont(f) {
    const href = '//fonts.googleapis.com/css?family=' + f;
    // create link
    const link = `<link id="gd-font" rel="stylesheet" href="${href}">`;
    $('head').append(link);
}

function remove_class_by_prefix( element, prefix ) {
    const el = document.querySelector(element);
    if ( el === null ) return;
    var classes = el.classList;
    for( var c of classes ) {
        if ( c.startsWith(prefix) ) el.classList.remove(c);
    }
}

function toggle_class(type) {
    var v = $(`.info .field.select.${type} select`).val().toLowerCase();
    // remove existing classes first
    remove_class_by_prefix( '#parchment', type );
    
    if ( v !== 'none' || v !== null ) {
        $('#parchment').addClass(`${type}-${v}`);
    }
}

// center view by updating translatex and translatey
function center_view() {
    // center viewport
    const e = document.querySelector( gd.eid );
    const section = document.querySelector( gd.eid + ' .section');
    let w = section.offsetWidth;
    let h = section.offsetHeight;
    let x = section.offsetLeft;
    let y = section.offsetTop;

    if ( e !== null ) {
        //w = e.offsetWidth;
        const maxwidth = window.innerWidth;
        const maxheight = window.innerHeight;

        // calculate translateX and translateY based on offsets
        const offsetX = parseInt($('.info .field.slider.offsetX input').val());
        const offsetY = parseInt($('.info .field.slider.offsetY input').val());

        // it is not centered in the middle of .section
        let translateX = -(x - (maxwidth / 2) + w / 2);
        let translateY = -(y - (maxheight / 2 ) + h / 2);

        translateX += offsetX;
        translateY += offsetY;

        let tx = document.querySelector('.info .slider.hid-translateX input');
        let ty = document.querySelector('.info .slider.hid-translateY input');

        if ( tx === null ) return;
        if ( ty === null ) return;
        gd.update_field(tx, translateX);
        gd.update_field(ty, translateY);
    }
}

function register_events() {

    // hack to ensure parchment scrolls to bottom after commands
    $(document).on('keyup', function(e) {
        if ( e.keyCode === 13 ){
            let el = document.querySelector('.content');
            el.scrollTop = el.scrollHeight;
            el = document.querySelector('.TextInput');
            el.focus();
            // ensure view stays centered
            center_view();
        };
    });

    window.addEventListener('resize', function(event){
        center_view();
    });

    // set font based on user selection
    $( ' .info .field.font select' ).change(function() {
        var font = $(this).val();
        update_font(font);
    });

    // vignette effect
    $('.info .field.slider.vignette input').on('input change', function(e) {
        var v = $(this).val();
        vignette(v);
    });

    $('.info .field.select.svg-filter select').change(function() {
        render_values(false);
    });

    $('.info .field.select.tiltshift select').change(function() {
        toggle_class('tiltshift');
    });

    $('.info .field.select.font-effect select').change(function() {
        toggle_class('font-effect');
    });

    // mousewheel zoom handler
    $(document).on('wheel', function(e){
        // disallow zoom within parchment content so user can safely scroll text
        let c = document.querySelector(gd.eid + ' .content');
        if ( c.contains(e.target) ) return;
        // disallow zoom within info panel as well
        c = document.querySelector(gd.eid + ' .info');
        if ( c.contains(e.target) ) return;
        let translatez = document.querySelector('.info .slider.translateZ input');
        if ( translatez === null ) return;
        var v = Number( translatez.value );
        if( e.originalEvent.deltaY < 0 ) {
            v += 10;
            if ( v > 500 ) v = 500;
        } else{
            v -= 10;
            if ( v < -500 ) v = -500;
        }
        gd.settings.set_value('translateZ', v);
        gd.update_field(translatez, v);
        center_view();
    });

    interact(eid_inner)
    .gesturable({
        onmove: function (event) {
            var $translatez = $('.info .slider.translatez input');
            var scale = Number( $translatez.val() );
            scale = scale * (1 + event.ds);
            // update inner with new scale
            update_slider_value( 'translateZ', scale );
            $translatez.change();
            dragMoveListener(event);
        }
    })
    .draggable({ onmove: dragMoveListener });
}

function dragMoveListener (event) {
    var target = event.target;
    var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
    var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
    
    if ( target.classList.contains('inner') ) {
        update_slider_value( 'offsetX', x );
        update_slider_value( 'offsetY', y );
        var $offsetX = $('.info .slider.offsetX input');
        var $offsetY = $('.info .slider.offsetY input');
        $offsetX.change();
        $offsetY.change();
        center_view();
    } else {
        // update_slider_value( 'offsetX', x );
        // update_slider_value( 'offsetY', y );

        // translate the element
        // target.style.webkitTransform =
        // target.style.transform =
        //     'translate(' + x + 'px, ' + y + 'px)';
    }
    
    // update the position attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
}
