na.jsTree = {
    onload : function() {
        var ac = {
            type : 'GET',
            url : '/nicerapp/apps/nicerapp/cms/ajax_getTreeNodes.php',
            success : function (data, ts, xhr) {
                let dat = JSON.parse(data);
                $('#jsTree').css({
                    height : $('#siteToolbarLeft .vividDialogContent').height() - $('#jsTree_navBar').height()
                }).jstree({
                    core : {
                        data : dat
                    },
                    types : {
                        "naSystemFolder" : {
                            "icon" : "/nicerapp/siteMedia/na.view.tree.naSystemFolder.png",
                            "valid_children" : []
                        },
                        "naUserRootFolder" : {
                            "max_depth" : 14,
                            "icon" : "/nicerapp/siteMedia/na.view.tree.naUserRootFolder.png",
                            "valid_children" : ["naFolder", "naMediaAlbum", "naDocument"]
                        },
                        "naGroupRootFolder" : {
                            "max_depth" : 14,
                            "icon" : "/nicerapp/siteMedia/na.view.tree.naGroupRootFolder.png",
                            "valid_children" : ["naFolder", "naMediaAlbum", "naDocument"]
                        },
                        "naFolder" : {
                            "icon" : "/nicerapp/siteMedia/na.view.tree.naFolder.png",
                            "valid_children" : ["naFolder", "naMediaAlbum", "naDocument"]
                        },
                        "naDialog" : {
                            "icon" : "/nicerapp/siteMedia/na.view.tree.naSettings.png",
                            "valid_children" : []
                        },
                        "naSettings" : {
                            "icon" : "/nicerapp/siteMedia/na.view.tree.naSettings.png",
                            "valid_children" : []
                        },
                        "naTheme" : {
                            "icon" : "/nicerapp/siteMedia/na.view.tree.naVividThemes.png",
                            "valid_children" : []
                        },
                        "naVividThemes" : {
                            "icon" : "/nicerapp/siteMedia/na.view.tree.naVividThemes.png",
                            "valid_children" : []
                        },
                        "naMediaAlbum" : {
                            "icon" : "/nicerapp/siteMedia/na.view.tree.naMediaAlbum.png",
                            "valid_children" : [ "naMediaAlbum" ]
                        },
                        "naDocument" : {
                            "icon" : "/nicerapp/siteMedia/na.view.tree.naDocument.png",
                            "valid_children" : []
                        },
                        "saApp" : {
                            "icon" : "/nicerapp/siteMedia/na.view.tree.naApp.png",
                            "valid_children" : []
                        }
                    },
                    "plugins" : [
                        "contextmenu", "dnd", "search",
                        "state", "types", "wholerow"
                    ]
                }).on('ready.jstree', function (e, data) {
                  
                }).on('changed.jstree', function (e, data) {
                    for (var i=0; i<data.selected.length; i++) {
                        var d = data.selected[i], rec = data.instance.get_node(d);
                        na.jsTree.buttonsEnableDisable (rec);
                    };
                });
                
                $('#siteToolbarLeft .lds-facebook').fadeOut('slow');
                
                //na.site.startTooltips (undefined, $('#siteToolbarLeft')[0]);
            },
            failure : function (xhr, ajaxOptions, thrownError) {
                debugger;
            }
        };
        $.ajax(ac);
        $(window).resize(na.jsTree.onresize)
        na.jsTree.onresize();
    },
    
    onresize : function() {
        if (na.m.userDevice.isPhone) {
            na.jsTree.settings.activeDialog='#siteToolbarLeft';
            na.d.s.visibleDivs.remove('#siteContent');
        }
        na.desktop.resize();
    },
    
    onclick_newFolder : function() {
        alert ('new folder');
    },
    
    onclick_newDocument : function() {
        alert ('new document');
    },
    
    onclick_newMediaAlbum : function() {
        alert ('new media album');
    },
    
    buttonsEnableDisable : function(rec) {
        $('.jsTree_navBar_button').removeClass('disabled');
        switch (rec.original.type) {
            case 'naFolder':
                break;
            case 'naSystemFolder':
                $('#jsTree_addDocument').addClass('disabled');
                $('#jsTree_addFolder').addClass('disabled');
                $('#jsTree_addMediaAlbum').addClass('disabled');
                $('#jsTree_delete').addClass('disabled');
                break;
            case 'naUserRootFolder':
                break;
            case 'naGroupRootFolder':
                break;
            case 'naDocument':
                $('#jsTree_newDocument').addClass('disabled');
                break;
        }
    }
}
