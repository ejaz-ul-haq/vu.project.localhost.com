
export async  function emailNotificationBodyEditor(editor_id){

    // let $ = jQuery;
    // $.each($('textarea', metabox), function () {
    //     let editor_id = $(this).attr('id');
    // let editor_id = 'body';


    let old_settings = {
        tinymce: {
            wpautop: false,
            plugins: 'charmap colorpicker compat3x directionality hr image lists media paste tabfocus textcolor wordpress wpautoresize wpdialogs wpeditimage wpemoji wpgallery wplink wptextpattern wpview',
            toolbar1: 'bold italic underline strikethrough | bullist numlist | blockquote hr wp_more | alignleft aligncenter alignright | link unlink | wp_adv',
            toolbar2: 'formatselect alignjustify forecolor | pastetext removeformat charmap | outdent indent | undo redo | wp_help'
        },
        quicktags: true,
        // quicktags: {buttons: 'strong,em,link,block,del,ins,img,ul,ol,li,code,more,close'},
        mediaButtons: false,
    };


    let settings = {
        tinymce: {
            branding: false,
            theme: 'modern',
            skin: 'lightgray',
            language: 'en',
            formats: {
                alignleft: [
                    {
                        selector: 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li',
                        styles: {textAlign: 'left'}
                    },
                    {selector: 'img,table,dl.wp-caption', classes: 'alignleft'}
                ],
                aligncenter: [
                    {
                        selector: 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li',
                        styles: {textAlign: 'center'}
                    },
                    {selector: 'img,table,dl.wp-caption', classes: 'aligncenter'}
                ],
                alignright: [
                    {
                        selector: 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li',
                        styles: {textAlign: 'right'}
                    },
                    {selector: 'img,table,dl.wp-caption', classes: 'alignright'}
                ],
                strikethrough: {inline: 'del'}
            },
            relative_urls: false,
            remove_script_host: false,
            convert_urls: false,
            browser_spellcheck: true,
            fix_list_elements: true,
            entities: '38,amp,60,lt,62,gt',
            entity_encoding: 'raw',
            keep_styles: false,
            paste_webkit_styles: 'font-weight font-style color',
            preview_styles: 'font-family font-size font-weight font-style text-decoration text-transform',
            end_container_on_empty_block: true,
            wpeditimage_disable_captions: false,
            wpeditimage_html5_captions: true,
            plugins: 'charmap,colorpicker,hr,lists,media,paste,tabfocus,textcolor,fullscreen,wordpress,wpautoresize,wpeditimage,wpemoji,wpgallery,wplink,wpdialogs,wptextpattern,wpview',
            menubar: false,
            wpautop: true,
            indent: false,
            resize: true,
            theme_advanced_resizing: true,
            theme_advanced_resize_horizontal: false,
            statusbar: true,
            toolbar1: 'formatselect,bold,italic,bullist,numlist,blockquote,alignleft,aligncenter,alignright,link,unlink,wp_adv',
            toolbar2: 'strikethrough,hr,forecolor,pastetext,removeformat,charmap,outdent,indent,undo,redo,wp_help',
            toolbar3: '',
            toolbar4: '',
            tabfocus_elements: ':prev,:next',
            // width: '100%',
            // body_class: 'id post-type-post post-status-publish post-format-standard',
            setup: function (editor) {
                editor.on('init', function () {
                    this.getBody().style.fontFamily = 'Georgia, "Times New Roman", "Bitstream Charter", Times, serif';
                    this.getBody().style.fontSize = '16px';
                    this.getBody().style.color = '#333';
                    if (tab_content.length > 0) {
                        this.setContent(tab_content);
                    }
                });
            },
        },
        quicktags: {
            buttons: "strong,em,link,block,del,ins,img,ul,ol,li,code,more,close"
        }
    }

    window?.wp?.editor.remove(editor_id);
    setTimeout(  () => {
        console.log('editor is loading...2..');
        window?.wp?.editor.initialize(
            editor_id,
            old_settings
        );
    }, 1000);

};
