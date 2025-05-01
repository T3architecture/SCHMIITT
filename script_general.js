(function () {
    var c = {};
    function trans(e, f) {
        var g = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
        c[g[0x0]] = g;
        return '';
    }
    function regTextVar(h, i) {
        var j = ![];
        i = i['toLowerCase']();
        var k = function () {
            var t = this['get']('data');
            t['updateText'](t['translateObjs'][h]);
        };
        var l = function (u) {
            var v = u['data']['nextSelectedIndex'];
            if (v >= 0x0) {
                var w = u['source']['get']('items')[v];
                var x = function () {
                    w['unbind']('start', x, this);
                    k['call'](this);
                };
                w['bind']('start', x, this);
            } else
                k['call'](this);
        };
        var m = function (y) {
            return function (z) {
                if (y in z) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var n = function (A, B) {
            return function (C, D) {
                if (A == C && B in D) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var o = function (E, F, G) {
            for (var H = 0x0; H < E['length']; ++H) {
                var I = E[H];
                var J = I['get']('selectedIndex');
                if (J >= 0x0) {
                    var K = F['split']('.');
                    var L = I['get']('items')[J];
                    if (G !== undefined && !G['call'](this, L))
                        continue;
                    for (var M = 0x0; M < K['length']; ++M) {
                        if (L == undefined)
                            return '';
                        L = 'get' in L ? L['get'](K[M]) : L[K[M]];
                    }
                    return L;
                }
            }
            return '';
        };
        var p = function (N) {
            var O = N['get']('player');
            return O !== undefined && O['get']('viewerArea') == this['getMainViewer']();
        };
        switch (i) {
        case 'title':
        case 'subtitle':
            var r = function () {
                switch (i) {
                case 'title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                }
            }();
            if (r) {
                return function () {
                    var P = this['_getPlayListsWithViewer'](this['getMainViewer']());
                    if (!j) {
                        for (var Q = 0x0; Q < P['length']; ++Q) {
                            P[Q]['bind']('changing', l, this);
                        }
                        j = !![];
                    }
                    return o['call'](this, P, r, p);
                };
            }
            break;
        default:
            if (i['startsWith']('quiz.') && 'Quiz' in TDV) {
                var s = undefined;
                var r = function () {
                    switch (i) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var R = /quiz\.([\w_]+)\.(.+)/['exec'](i);
                        if (R) {
                            s = R[0x1];
                            switch ('quiz.' + R[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (r) {
                    return function () {
                        var S = this['get']('data')['quiz'];
                        if (S) {
                            if (!j) {
                                if (s != undefined)
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, W[Y]['id'], r), this);
                                        }
                                    } else {
                                        S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, s, r), this);
                                    }
                                else
                                    S['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], m['call'](this, r), this);
                                j = !![];
                            }
                            try {
                                var a1 = 0x0;
                                if (s != undefined) {
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            a1 += S['getObjective'](W[Y]['id'], r);
                                        }
                                    } else {
                                        a1 = S['getObjective'](s, r);
                                    }
                                } else {
                                    a1 = S['get'](r);
                                    if (r == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        a1 += 0x1;
                                }
                                return a1;
                            } catch (a2) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return '';
    }
    function createQuizConfig(player, a3) {
        var a4 = {};
        a4['player'] = player;
        a4['playList'] = a3;
        function a5(a8) {
            for (var a9 = 0x0; a9 < a8['length']; ++a9) {
                var aa = a8[a9];
                if ('id' in aa)
                    player[aa['id']] = aa;
            }
        }
        if (a4['questions']) {
            a5(a4['questions']);
            for (var a6 = 0x0; a6 < a4['questions']['length']; ++a6) {
                var a7 = a4['questions'][a6];
                a5(a7['options']);
            }
        }
        if (a4['objectives']) {
            a5(a4['objectives']);
        }
        if (a4['califications']) {
            a5(a4['califications']);
        }
        if (a4['score']) {
            player[a4['score']['id']] = a4['score'];
        }
        if (a4['question']) {
            player[a4['question']['id']] = a4['question'];
        }
        if (a4['timeout']) {
            player[a4['timeout']['id']] = a4['timeout'];
        }
        player['get']('data')['translateObjs'] = c;
        return a4;
    }
    var d = {"backgroundColorRatios":[0],"backgroundColorDirection":"vertical","gap":10,"definitions": [{"fontWeight":"bold","data":{"name":"Label28174"},"textDecoration":"none","width":280,"backgroundOpacity":0,"paddingTop":0,"id":"label4056","fontFamily":"Arial","horizontalAlign":"center","paddingBottom":0,"propagateClick":false,"paddingLeft":0,"verticalAlign":"middle","top":23,"paddingRight":0,"fontColor":"#FFFFFF","height":50,"toolTipHorizontalAlign":"center","text":trans('label4056.text'),"fontSize":30,"borderRadius":0,"maxHeight":50,"class":"Label","maxWidth":280,"fontStyle":"normal","borderSize":0,"minWidth":280,"shadow":false,"minHeight":50,"right":"1.39%"},{"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"hoverFactor":0,"class":"PanoramaCamera","automaticZoomSpeed":10,"id":"panorama_82306A59_8BFC_FB02_41AD_B50C6D989641_camera"},{"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"hoverFactor":0,"class":"PanoramaCamera","automaticZoomSpeed":10,"id":"panorama_8237421F_8BFC_EB3E_41E0_7751B8A294EB_camera"},{"frames":[{"cube":{"levels":[{"width":18432,"rowCount":6,"url":"media/panorama_82378ACB_8BFC_DB06_41D0_53F47E65F669_0/{face}/0/{row}_{column}.jpg","height":3072,"tags":"ondemand","class":"TiledImageResourceLevel","colCount":36},{"width":9216,"rowCount":3,"url":"media/panorama_82378ACB_8BFC_DB06_41D0_53F47E65F669_0/{face}/1/{row}_{column}.jpg","height":1536,"tags":"ondemand","class":"TiledImageResourceLevel","colCount":18},{"width":6144,"rowCount":2,"url":"media/panorama_82378ACB_8BFC_DB06_41D0_53F47E65F669_0/{face}/2/{row}_{column}.jpg","height":1024,"tags":"ondemand","class":"TiledImageResourceLevel","colCount":12},{"width":3072,"rowCount":1,"url":"media/panorama_82378ACB_8BFC_DB06_41D0_53F47E65F669_0/{face}/3/{row}_{column}.jpg","height":512,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","colCount":6},{"width":12288,"rowCount":1,"url":"media/panorama_82378ACB_8BFC_DB06_41D0_53F47E65F669_0/{face}/vr2gen/0.jpg","height":2048,"tags":"mobilevr2gen","class":"TiledImageResourceLevel","colCount":6}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_82378ACB_8BFC_DB06_41D0_53F47E65F669_t.jpg"}],"thumbnailUrl":"media/panorama_82378ACB_8BFC_DB06_41D0_53F47E65F669_t.jpg","adjacentPanoramas":[{"panorama":"this.panorama_82306A59_8BFC_FB02_41AD_B50C6D989641","yaw":-37.87,"select":"this.overlay_9C60A788_8C0F_E903_41B3_FD9768391BFC.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_9C60A788_8C0F_E903_41B3_FD9768391BFC"},"distance":3.33,"class":"AdjacentPanorama","backwardYaw":-31.78},{"panorama":"this.panorama_82306A59_8BFC_FB02_41AD_B50C6D989641","yaw":-37.87,"select":"this.overlay_9C60A788_8C0F_E903_41B3_FD9768391BFC.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_9C60A788_8C0F_E903_41B3_FD9768391BFC"},"distance":3.33,"class":"AdjacentPanorama","backwardYaw":-31.78}],"hfovMin":"120%","overlays":["this.overlay_9C60A788_8C0F_E903_41B3_FD9768391BFC"],"pitch":0,"id":"panorama_82378ACB_8BFC_DB06_41D0_53F47E65F669","label":trans('panorama_82378ACB_8BFC_DB06_41D0_53F47E65F669.label'),"hfovMax":130,"class":"Panorama","hfov":360,"data":{"label":"SEJOUR"},"partial":false,"vfov":180},{"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"hoverFactor":0,"class":"PanoramaCamera","automaticZoomSpeed":10,"id":"panorama_815EE185_8BFC_E902_41DF_6571848765CA_camera"},{"class":"PlayList","items":[{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_82306A59_8BFC_FB02_41AD_B50C6D989641_camera","media":"this.panorama_82306A59_8BFC_FB02_41AD_B50C6D989641","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_815EE185_8BFC_E902_41DF_6571848765CA_camera","media":"this.panorama_815EE185_8BFC_E902_41DF_6571848765CA","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_8237421F_8BFC_EB3E_41E0_7751B8A294EB_camera","media":"this.panorama_8237421F_8BFC_EB3E_41E0_7751B8A294EB","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 3)"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_82378ACB_8BFC_DB06_41D0_53F47E65F669_camera","media":"this.panorama_82378ACB_8BFC_DB06_41D0_53F47E65F669","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 3, 0)","end":"this.trigger('tourEnded')"}],"id":"mainPlayList"},{"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"hoverFactor":0,"class":"PanoramaCamera","automaticZoomSpeed":10,"id":"panorama_82378ACB_8BFC_DB06_41D0_53F47E65F669_camera"},{"displayPlaybackBar":true,"viewerArea":"this.MainViewer","arrowKeysAction":"translate","aaEnabled":true,"surfaceSelectionEnabled":false,"mouseControlMode":"drag_rotation","touchControlMode":"drag_rotation","gyroscopeVerticalDraggingEnabled":true,"class":"PanoramaPlayer","gyroscopeEnabled":true,"zoomEnabled":true,"id":"MainViewerPanoramaPlayer"},{"data":{"name":"-button set"},"gap":3,"width":85,"backgroundOpacity":0,"paddingTop":0,"id":"Container_AC806C47_BF7C_0354_41B4_D4E895D34D8F","horizontalAlign":"center","paddingBottom":0,"propagateClick":true,"overflow":"scroll","paddingLeft":0,"scrollBarMargin":2,"verticalAlign":"top","top":"14%","paddingRight":0,"height":320,"scrollBarOpacity":0.5,"toolTipHorizontalAlign":"center","layout":"vertical","contentOpaque":false,"scrollBarWidth":10,"scrollBarVisible":"rollOver","borderRadius":0,"maxHeight":320,"scrollBarColor":"#000000","class":"Container","maxWidth":85,"creationPolicy":"inAdvance","borderSize":0,"minWidth":85,"shadow":false,"minHeight":320,"right":"0%"},{"frames":[{"cube":{"levels":[{"width":18432,"rowCount":6,"url":"media/panorama_815EE185_8BFC_E902_41DF_6571848765CA_0/{face}/0/{row}_{column}.jpg","height":3072,"tags":"ondemand","class":"TiledImageResourceLevel","colCount":36},{"width":9216,"rowCount":3,"url":"media/panorama_815EE185_8BFC_E902_41DF_6571848765CA_0/{face}/1/{row}_{column}.jpg","height":1536,"tags":"ondemand","class":"TiledImageResourceLevel","colCount":18},{"width":6144,"rowCount":2,"url":"media/panorama_815EE185_8BFC_E902_41DF_6571848765CA_0/{face}/2/{row}_{column}.jpg","height":1024,"tags":"ondemand","class":"TiledImageResourceLevel","colCount":12},{"width":3072,"rowCount":1,"url":"media/panorama_815EE185_8BFC_E902_41DF_6571848765CA_0/{face}/3/{row}_{column}.jpg","height":512,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","colCount":6},{"width":12288,"rowCount":1,"url":"media/panorama_815EE185_8BFC_E902_41DF_6571848765CA_0/{face}/vr2gen/0.jpg","height":2048,"tags":"mobilevr2gen","class":"TiledImageResourceLevel","colCount":6}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_815EE185_8BFC_E902_41DF_6571848765CA_t.jpg"}],"thumbnailUrl":"media/panorama_815EE185_8BFC_E902_41DF_6571848765CA_t.jpg","adjacentPanoramas":[{"panorama":"this.panorama_82306A59_8BFC_FB02_41AD_B50C6D989641","yaw":-92.87,"select":"this.overlay_8320166C_8C05_EB02_41C3_472025621E33.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_8320166C_8C05_EB02_41C3_472025621E33"},"distance":1.22,"class":"AdjacentPanorama","backwardYaw":-155.38}],"hfovMin":"120%","overlays":["this.overlay_8320166C_8C05_EB02_41C3_472025621E33"],"pitch":0,"id":"panorama_815EE185_8BFC_E902_41DF_6571848765CA","label":trans('panorama_815EE185_8BFC_E902_41DF_6571848765CA.label'),"hfovMax":130,"class":"Panorama","hfov":360,"data":{"label":"CHAMBRE"},"partial":false,"vfov":180},{"frames":[{"cube":{"levels":[{"width":18432,"rowCount":6,"url":"media/panorama_82306A59_8BFC_FB02_41AD_B50C6D989641_0/{face}/0/{row}_{column}.jpg","height":3072,"tags":"ondemand","class":"TiledImageResourceLevel","colCount":36},{"width":9216,"rowCount":3,"url":"media/panorama_82306A59_8BFC_FB02_41AD_B50C6D989641_0/{face}/1/{row}_{column}.jpg","height":1536,"tags":"ondemand","class":"TiledImageResourceLevel","colCount":18},{"width":6144,"rowCount":2,"url":"media/panorama_82306A59_8BFC_FB02_41AD_B50C6D989641_0/{face}/2/{row}_{column}.jpg","height":1024,"tags":"ondemand","class":"TiledImageResourceLevel","colCount":12},{"width":3072,"rowCount":1,"url":"media/panorama_82306A59_8BFC_FB02_41AD_B50C6D989641_0/{face}/3/{row}_{column}.jpg","height":512,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","colCount":6},{"width":12288,"rowCount":1,"url":"media/panorama_82306A59_8BFC_FB02_41AD_B50C6D989641_0/{face}/vr2gen/0.jpg","height":2048,"tags":"mobilevr2gen","class":"TiledImageResourceLevel","colCount":6}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_82306A59_8BFC_FB02_41AD_B50C6D989641_t.jpg"}],"thumbnailUrl":"media/panorama_82306A59_8BFC_FB02_41AD_B50C6D989641_t.jpg","adjacentPanoramas":[{"panorama":"this.panorama_82378ACB_8BFC_DB06_41D0_53F47E65F669","yaw":-31.78,"select":"this.overlay_86DEFD06_8BFB_790F_41DF_3A4BFF1B32C1.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_86DEFD06_8BFB_790F_41DF_3A4BFF1B32C1"},"distance":0.84,"class":"AdjacentPanorama","backwardYaw":-37.87},{"panorama":"this.panorama_82378ACB_8BFC_DB06_41D0_53F47E65F669","yaw":-31.78,"select":"this.overlay_86DEFD06_8BFB_790F_41DF_3A4BFF1B32C1.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_86DEFD06_8BFB_790F_41DF_3A4BFF1B32C1"},"distance":0.84,"class":"AdjacentPanorama","backwardYaw":-37.87},{"panorama":"this.panorama_815EE185_8BFC_E902_41DF_6571848765CA","yaw":-155.38,"select":"this.overlay_8332932B_8C04_A906_41D4_354816C424BA.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_8332932B_8C04_A906_41D4_354816C424BA"},"distance":1.21,"class":"AdjacentPanorama","backwardYaw":-92.87},{"panorama":"this.panorama_8237421F_8BFC_EB3E_41E0_7751B8A294EB","yaw":17.42,"select":"this.overlay_824A277D_8C07_69FD_41D7_DF069A136A1B.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_824A277D_8C07_69FD_41D7_DF069A136A1B"},"distance":0.64,"class":"AdjacentPanorama","backwardYaw":47.14}],"hfovMin":"120%","overlays":["this.overlay_86DEFD06_8BFB_790F_41DF_3A4BFF1B32C1","this.overlay_8332932B_8C04_A906_41D4_354816C424BA","this.overlay_824A277D_8C07_69FD_41D7_DF069A136A1B"],"pitch":0,"id":"panorama_82306A59_8BFC_FB02_41AD_B50C6D989641","label":trans('panorama_82306A59_8BFC_FB02_41AD_B50C6D989641.label'),"hfovMax":130,"class":"Panorama","hfov":360,"data":{"label":"ENTREE"},"partial":false,"vfov":180},{"shadow":false,"playbackBarHeadShadowOpacity":0.7,"right":0,"toolTipFontFamily":"Arial","playbackBarHeadBorderSize":0,"displayTooltipInSurfaceSelection":true,"subtitlesVerticalAlign":"bottom","toolTipBorderRadius":3,"toolTipShadowOpacity":1,"vrPointerColor":"#FFFFFF","playbackBarProgressBackgroundColorRatios":[0,1],"id":"MainViewer","playbackBarProgressBackgroundColorDirection":"vertical","paddingLeft":0,"data":{"name":"Main Viewer"},"playbackBarBackgroundColor":["#EEEEEE","#CCCCCC"],"playbackBarBorderColor":"#AAAAAA","playbackBarHeadBorderColor":"#000000","toolTipBackgroundColor":"#999999","progressBackgroundColorRatios":[0,1],"playbackBarBorderSize":2,"toolTipFontSize":12,"subtitlesFontWeight":"normal","paddingRight":0,"toolTipTextShadowColor":"#666666","progressRight":10,"subtitlesFontFamily":"Arial","toolTipBorderColor":"#767676","playbackBarOpacity":1,"transitionMode":"blending","progressBarBackgroundColorDirection":"vertical","progressOpacity":1,"progressBarBorderColor":"#000000","toolTipHorizontalAlign":"center","playbackBarBackgroundColorDirection":"vertical","progressBarBackgroundColorRatios":[0,1],"subtitlesTop":0,"translationTransitionDuration":1000,"progressBackgroundColorDirection":"vertical","subtitlesGap":0,"playbackBarRight":0,"subtitlesTextShadowColor":"#000000","playbackBarHeadBackgroundColorDirection":"vertical","subtitlesFontSize":"3vmin","playbackBarHeight":20,"playbackBarHeadShadow":true,"toolTipPaddingLeft":6,"playbackBarHeadBackgroundColor":["#111111","#666666"],"displayTooltipInTouchScreens":true,"progressBackgroundOpacity":1,"progressBarBackgroundColor":["#222222","#444444"],"progressBorderColor":"#AAAAAA","doubleClickAction":"toggle_fullscreen","class":"ViewerArea","subtitlesFontColor":"#FFFFFF","subtitlesBackgroundOpacity":0.2,"subtitlesPaddingLeft":5,"progressBackgroundColor":["#EEEEEE","#CCCCCC"],"playbackBarBorderRadius":4,"progressBarOpacity":1,"playbackBarHeadShadowHorizontalLength":0,"playbackBarProgressBorderColor":"#000000","progressBottom":1,"subtitlesHorizontalAlign":"center","borderSize":0,"subtitlesTextShadowBlurRadius":0,"subtitlesBorderColor":"#FFFFFF","minWidth":100,"toolTipPaddingRight":6,"progressHeight":20,"minHeight":50,"subtitlesPaddingBottom":5,"toolTipTextShadowOpacity":0,"subtitlesTextDecoration":"none","playbackBarBackgroundOpacity":1,"playbackBarHeadOpacity":1,"toolTipShadowSpread":0,"toolTipShadowVerticalLength":0,"toolTipFontStyle":"normal","progressBorderSize":2,"paddingTop":0,"progressBarBorderRadius":4,"subtitlesTextShadowHorizontalLength":1,"transitionDuration":500,"toolTipFontColor":"#606060","toolTipTextShadowBlurRadius":3,"paddingBottom":0,"propagateClick":false,"playbackBarLeft":0,"toolTipPaddingBottom":4,"progressBorderRadius":4,"subtitlesOpacity":1,"progressBarBorderSize":0,"firstTransitionDuration":0,"toolTipShadowHorizontalLength":0,"playbackBarProgressBackgroundColor":["#222222","#444444"],"playbackBarHeadShadowColor":"#000000","playbackBarHeadHeight":30,"playbackBarHeadBackgroundColorRatios":[0,1],"top":0,"surfaceReticleColor":"#FFFFFF","vrPointerSelectionTime":1500,"subtitlesBorderSize":0,"bottom":0,"subtitlesBottom":50,"toolTipFontWeight":"normal","toolTipShadowColor":"#333333","subtitlesTextShadowVerticalLength":1,"surfaceReticleSelectionColor":"#FFFFFF","progressLeft":10,"playbackBarProgressBorderRadius":0,"subtitlesPaddingRight":5,"toolTipBorderSize":1,"subtitlesShadow":false,"toolTipPaddingTop":4,"vrPointerSelectionColor":"#FF0000","playbackBarHeadBorderRadius":0,"toolTipDisplayTime":600,"surfaceReticleSelectionOpacity":1,"subtitlesTextShadowOpacity":1,"surfaceReticleOpacity":0.6,"toolTipOpacity":0.5,"playbackBarHeadShadowVerticalLength":0,"playbackBarHeadShadowBlurRadius":3,"subtitlesBackgroundColor":"#000000","borderRadius":0,"toolTipShadowBlurRadius":3,"subtitlesPaddingTop":5,"playbackBarProgressOpacity":1,"playbackBarBottom":10,"left":0,"playbackBarHeadWidth":6,"subtitlesEnabled":true,"playbackBarProgressBorderSize":0},{"frames":[{"cube":{"levels":[{"width":18432,"rowCount":6,"url":"media/panorama_8237421F_8BFC_EB3E_41E0_7751B8A294EB_0/{face}/0/{row}_{column}.jpg","height":3072,"tags":"ondemand","class":"TiledImageResourceLevel","colCount":36},{"width":9216,"rowCount":3,"url":"media/panorama_8237421F_8BFC_EB3E_41E0_7751B8A294EB_0/{face}/1/{row}_{column}.jpg","height":1536,"tags":"ondemand","class":"TiledImageResourceLevel","colCount":18},{"width":6144,"rowCount":2,"url":"media/panorama_8237421F_8BFC_EB3E_41E0_7751B8A294EB_0/{face}/2/{row}_{column}.jpg","height":1024,"tags":"ondemand","class":"TiledImageResourceLevel","colCount":12},{"width":3072,"rowCount":1,"url":"media/panorama_8237421F_8BFC_EB3E_41E0_7751B8A294EB_0/{face}/3/{row}_{column}.jpg","height":512,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","colCount":6},{"width":12288,"rowCount":1,"url":"media/panorama_8237421F_8BFC_EB3E_41E0_7751B8A294EB_0/{face}/vr2gen/0.jpg","height":2048,"tags":"mobilevr2gen","class":"TiledImageResourceLevel","colCount":6}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_8237421F_8BFC_EB3E_41E0_7751B8A294EB_t.jpg"}],"thumbnailUrl":"media/panorama_8237421F_8BFC_EB3E_41E0_7751B8A294EB_t.jpg","adjacentPanoramas":[{"panorama":"this.panorama_82306A59_8BFC_FB02_41AD_B50C6D989641","yaw":47.14,"select":"this.overlay_9D1CC213_8C0C_EB05_41A5_3803F401F52D.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_9D1CC213_8C0C_EB05_41A5_3803F401F52D"},"distance":2.99,"class":"AdjacentPanorama","backwardYaw":17.42},{"panorama":"this.panorama_82306A59_8BFC_FB02_41AD_B50C6D989641","yaw":47.14,"select":"this.overlay_9D1CC213_8C0C_EB05_41A5_3803F401F52D.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_9D1CC213_8C0C_EB05_41A5_3803F401F52D"},"distance":2.99,"class":"AdjacentPanorama","backwardYaw":17.42}],"hfovMin":"120%","overlays":["this.overlay_9D1CC213_8C0C_EB05_41A5_3803F401F52D"],"pitch":0,"id":"panorama_8237421F_8BFC_EB3E_41E0_7751B8A294EB","label":trans('panorama_8237421F_8BFC_EB3E_41E0_7751B8A294EB.label'),"hfovMax":130,"class":"Panorama","hfov":360,"data":{"label":"SALON TV"},"partial":false,"vfov":180},{"data":{"name":"Image4995"},"width":80,"backgroundOpacity":0,"cursor":"hand","paddingTop":0,"url":"skin/Image_A15825F1_AD39_D33D_41CD_0C70008BA88C.png","id":"Image_A15825F1_AD39_D33D_41CD_0C70008BA88C","horizontalAlign":"left","paddingBottom":0,"propagateClick":true,"paddingLeft":0,"top":21.17,"verticalAlign":"top","paddingRight":0,"height":85,"toolTipHorizontalAlign":"center","click":"this.openLink(this.translate('LinkBehaviour_A4D1DCCC_BF24_0354_41BC_7B57F239723C.source'), '_blank')","maxHeight":80,"maxWidth":80,"class":"Image","borderRadius":0,"left":26.3,"borderSize":0,"minWidth":80,"shadow":false,"minHeight":80,"scaleMode":"fill"},{"data":{"name":"--SETTINGS"},"gap":10,"width":85,"backgroundOpacity":0,"children":["this.Container_AC811C43_BF7C_034C_41DD_1E88AB09B3BE"],"paddingTop":0,"id":"Container_AC80FC48_BF7C_035C_41DF_EAF55BA98CED","horizontalAlign":"left","paddingBottom":0,"propagateClick":true,"overflow":"scroll","paddingLeft":0,"scrollBarMargin":2,"verticalAlign":"top","top":"17.26%","paddingRight":0,"height":430,"scrollBarOpacity":0.5,"toolTipHorizontalAlign":"center","layout":"absolute","contentOpaque":false,"scrollBarWidth":10,"scrollBarVisible":"rollOver","borderRadius":0,"maxHeight":430,"scrollBarColor":"#000000","class":"Container","maxWidth":85,"creationPolicy":"inAdvance","borderSize":0,"minWidth":85,"shadow":false,"minHeight":430,"right":"1.22%"},{"data":{"name":"button menu sup"},"gap":10,"width":110,"backgroundOpacity":0,"paddingTop":0,"id":"Container_AC811C43_BF7C_034C_41DD_1E88AB09B3BE","horizontalAlign":"center","paddingBottom":0,"propagateClick":true,"overflow":"visible","paddingLeft":0,"scrollBarMargin":2,"verticalAlign":"middle","bottom":"4.6%","paddingRight":0,"height":110,"scrollBarOpacity":0.5,"toolTipHorizontalAlign":"center","layout":"horizontal","contentOpaque":false,"scrollBarWidth":10,"scrollBarVisible":"rollOver","borderRadius":0,"scrollBarColor":"#000000","class":"Container","creationPolicy":"inAdvance","borderSize":0,"right":"0%","minWidth":1,"shadow":false,"minHeight":1},{"class":"PlayList","items":[{"player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","camera":"this.panorama_82306A59_8BFC_FB02_41AD_B50C6D989641_camera","media":"this.panorama_82306A59_8BFC_FB02_41AD_B50C6D989641"},{"player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","camera":"this.panorama_815EE185_8BFC_E902_41DF_6571848765CA_camera","media":"this.panorama_815EE185_8BFC_E902_41DF_6571848765CA"},{"player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","camera":"this.panorama_8237421F_8BFC_EB3E_41E0_7751B8A294EB_camera","media":"this.panorama_8237421F_8BFC_EB3E_41E0_7751B8A294EB"},{"player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","camera":"this.panorama_82378ACB_8BFC_DB06_41D0_53F47E65F669_camera","media":"this.panorama_82378ACB_8BFC_DB06_41D0_53F47E65F669"}],"id":"ThumbnailList_A1035095_AD38_51E5_41E2_55F13EC12CB4_playlist"},{"minWidth":20,"itemLabelFontStyle":"normal","itemLabelTextDecoration":"none","left":"0.01%","gap":10,"rollOverItemLabelFontWeight":"normal","itemThumbnailShadowSpread":1,"backgroundOpacity":0,"paddingTop":10,"itemLabelFontColor":"#FFFFFF","id":"ThumbnailList_A1035095_AD38_51E5_41E2_55F13EC12CB4","itemThumbnailShadowBlurRadius":8,"horizontalAlign":"left","itemLabelPosition":"bottom","playList":"this.ThumbnailList_A1035095_AD38_51E5_41E2_55F13EC12CB4_playlist","paddingBottom":10,"propagateClick":false,"data":{"name":"ThumbnailList35762"},"itemMode":"normal","itemVerticalAlign":"middle","itemThumbnailWidth":75,"paddingLeft":20,"itemThumbnailShadowVerticalLength":3,"itemBackgroundColor":[],"scrollBarMargin":2,"itemThumbnailShadow":true,"itemHorizontalAlign":"center","verticalAlign":"top","bottom":"0.02%","itemThumbnailShadowHorizontalLength":3,"paddingRight":20,"itemPaddingLeft":3,"itemOpacity":1,"toolTipHorizontalAlign":"center","itemLabelFontWeight":"normal","itemBorderRadius":0,"height":135.02,"scrollBarOpacity":0.5,"itemPaddingTop":3,"itemPaddingRight":3,"itemLabelHorizontalAlign":"center","itemLabelFontSize":14,"itemBackgroundOpacity":0,"layout":"horizontal","itemLabelFontFamily":"Arial","itemThumbnailScaleMode":"fit_outside","scrollBarWidth":10,"scrollBarVisible":"rollOver","borderRadius":5,"rollOverItemBackgroundOpacity":0,"selectedItemLabelFontColor":"#FFCC00","itemBackgroundColorDirection":"vertical","scrollBarColor":"#FFFFFF","class":"ThumbnailList","itemThumbnailBorderRadius":50,"itemBackgroundColorRatios":[],"itemThumbnailOpacity":1,"selectedItemLabelFontWeight":"bold","itemThumbnailShadowColor":"#000000","borderSize":0,"right":"0.12%","itemThumbnailHeight":75,"itemLabelGap":9,"itemPaddingBottom":3,"shadow":false,"minHeight":20,"itemThumbnailShadowOpacity":0.54},{"areas":["this.HotspotPanoramaOverlayArea_9C6C9788_8C0F_E903_41BA_417D52483A9F"],"maps":[],"items":[{"image":"this.AnimatedImageResource_9E391BA7_8C05_590E_41CD_2501129948D0","distance":100,"yaw":-37.87,"scaleMode":"fit_inside","horizontalAlign":"center","hfov":6,"class":"HotspotPanoramaOverlayImage","data":{"label":"Arrow 01a"},"roll":-21.44,"verticalAlign":"middle","pitch":-27.01,"vfov":6}],"data":{"hasPanoramaAction":true,"label":"Arrow 01a"},"useHandCursor":true,"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"id":"overlay_9C60A788_8C0F_E903_41B3_FD9768391BFC"},{"areas":["this.HotspotPanoramaOverlayArea_832B2672_8C05_EB07_41D2_B5AB895EE982"],"maps":[],"items":[{"image":"this.AnimatedImageResource_9E398BA7_8C05_590E_41A0_5348E374E852","distance":100,"yaw":-92.87,"scaleMode":"fit_inside","horizontalAlign":"center","hfov":6,"class":"HotspotPanoramaOverlayImage","data":{"label":"Arrow 01a"},"roll":65.83,"verticalAlign":"middle","pitch":-54.39,"vfov":6}],"data":{"hasPanoramaAction":true,"label":"Arrow 01a"},"useHandCursor":true,"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"id":"overlay_8320166C_8C05_EB02_41C3_472025621E33"},{"areas":["this.HotspotPanoramaOverlayArea_86778D38_8BFB_7902_41D8_3CCE39AB8AF9"],"maps":[],"items":[{"image":"this.AnimatedImageResource_9E386BA7_8C05_590E_41BA_D8AFB19CFEDD","distance":100,"yaw":-31.78,"scaleMode":"fit_inside","horizontalAlign":"center","hfov":6,"class":"HotspotPanoramaOverlayImage","data":{"label":"Arrow 01a"},"roll":4.98,"verticalAlign":"middle","pitch":-63.76,"vfov":6}],"data":{"hasPanoramaAction":true,"label":"Arrow 01a"},"useHandCursor":true,"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"id":"overlay_86DEFD06_8BFB_790F_41DF_3A4BFF1B32C1"},{"areas":["this.HotspotPanoramaOverlayArea_8343233A_8C04_A906_41DD_BF51D3325837"],"maps":[],"items":[{"image":"this.AnimatedImageResource_9E383BA7_8C05_590E_41D6_B8EB7875D6E2","distance":100,"yaw":-155.38,"scaleMode":"fit_inside","horizontalAlign":"center","hfov":6,"class":"HotspotPanoramaOverlayImage","data":{"label":"Arrow 01a"},"roll":61.22,"verticalAlign":"middle","pitch":-54.54,"vfov":6}],"data":{"hasPanoramaAction":true,"label":"Arrow 01a"},"useHandCursor":true,"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"id":"overlay_8332932B_8C04_A906_41D4_354816C424BA"},{"areas":["this.HotspotPanoramaOverlayArea_827FB78D_8C07_6902_41DE_B88F0C3BE6BA"],"maps":[],"items":[{"image":"this.AnimatedImageResource_9E39DBA7_8C05_590E_41C9_1E960D5A04BB","distance":100,"yaw":17.42,"scaleMode":"fit_inside","horizontalAlign":"center","hfov":6,"class":"HotspotPanoramaOverlayImage","data":{"label":"Arrow 01a"},"roll":-34.17,"verticalAlign":"middle","pitch":-69.35,"vfov":6}],"data":{"hasPanoramaAction":true,"label":"Arrow 01a"},"useHandCursor":true,"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"id":"overlay_824A277D_8C07_69FD_41D7_DF069A136A1B"},{"areas":["this.HotspotPanoramaOverlayArea_9D1D5214_8C0C_EB03_41D2_5789DDC261B1"],"maps":[],"items":[{"vfov":5.68,"roll":-61.49,"pitch":-29.6,"image":"this.AnimatedImageResource_9E395BA7_8C05_590E_41D1_F161E5C43B32","distance":100,"yaw":47.14,"rotationY":-65.65,"rotationX":-11.82,"hfov":6,"horizontalAlign":"center","class":"HotspotPanoramaOverlayImage","data":{"label":"Arrow 01a"},"verticalAlign":"middle","scaleMode":"fit_inside"}],"data":{"hasPanoramaAction":true,"label":"Arrow 01a"},"useHandCursor":true,"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"id":"overlay_9D1CC213_8C0C_EB05_41A5_3803F401F52D"},{"click":"this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 0)","class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_9C6C9788_8C0F_E903_41BA_417D52483A9F"},{"rowCount":3,"levels":[{"height":180,"width":330,"class":"ImageResourceLevel","url":"media/res_9DAE1137_8C0B_E90E_41E1_54DC31638ADB_0.png"}],"colCount":3,"id":"AnimatedImageResource_9E391BA7_8C05_590E_41CD_2501129948D0","class":"AnimatedImageResource","frameDuration":62,"frameCount":9},{"click":"this.mainPlayList.set('selectedIndex', 0)","class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_832B2672_8C05_EB07_41D2_B5AB895EE982"},{"rowCount":3,"levels":[{"height":180,"width":330,"class":"ImageResourceLevel","url":"media/res_9DAE1137_8C0B_E90E_41E1_54DC31638ADB_0.png"}],"colCount":3,"id":"AnimatedImageResource_9E398BA7_8C05_590E_41A0_5348E374E852","class":"AnimatedImageResource","frameDuration":62,"frameCount":9},{"click":"this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 3)","class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_86778D38_8BFB_7902_41D8_3CCE39AB8AF9"},{"rowCount":3,"levels":[{"height":180,"width":330,"class":"ImageResourceLevel","url":"media/res_9DAE1137_8C0B_E90E_41E1_54DC31638ADB_0.png"}],"colCount":3,"id":"AnimatedImageResource_9E386BA7_8C05_590E_41BA_D8AFB19CFEDD","class":"AnimatedImageResource","frameDuration":62,"frameCount":9},{"click":"this.mainPlayList.set('selectedIndex', 1)","class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_8343233A_8C04_A906_41DD_BF51D3325837"},{"rowCount":3,"levels":[{"height":180,"width":330,"class":"ImageResourceLevel","url":"media/res_9DAE1137_8C0B_E90E_41E1_54DC31638ADB_0.png"}],"colCount":3,"id":"AnimatedImageResource_9E383BA7_8C05_590E_41D6_B8EB7875D6E2","class":"AnimatedImageResource","frameDuration":62,"frameCount":9},{"click":"this.mainPlayList.set('selectedIndex', 2)","class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_827FB78D_8C07_6902_41DE_B88F0C3BE6BA"},{"rowCount":3,"levels":[{"height":180,"width":330,"class":"ImageResourceLevel","url":"media/res_9DAE1137_8C0B_E90E_41E1_54DC31638ADB_0.png"}],"colCount":3,"id":"AnimatedImageResource_9E39DBA7_8C05_590E_41C9_1E960D5A04BB","class":"AnimatedImageResource","frameDuration":62,"frameCount":9},{"click":"this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 0)","class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_9D1D5214_8C0C_EB03_41D2_5789DDC261B1"},{"rowCount":3,"levels":[{"height":180,"width":330,"class":"ImageResourceLevel","url":"media/res_9DAE1137_8C0B_E90E_41E1_54DC31638ADB_0.png"}],"colCount":3,"id":"AnimatedImageResource_9E395BA7_8C05_590E_41D1_F161E5C43B32","class":"AnimatedImageResource","frameDuration":62,"frameCount":9}],"mediaActivationMode":"window","backgroundOpacity":1,"vrPolyfillScale":1,"width":"100%","paddingTop":0,"id":"rootPlayer","mouseWheelEnabled":true,"horizontalAlign":"left","paddingBottom":0,"propagateClick":false,"overflow":"hidden","defaultVRPointer":"gaze","paddingLeft":0,"scrollBarMargin":2,"verticalAlign":"top","paddingRight":0,"desktopMipmappingEnabled":false,"mobileMipmappingEnabled":false,"children":["this.MainViewer","this.label4056","this.ThumbnailList_A1035095_AD38_51E5_41E2_55F13EC12CB4","this.Image_A15825F1_AD39_D33D_41CD_0C70008BA88C","this.Container_AC80FC48_BF7C_035C_41DF_EAF55BA98CED","this.Container_AC806C47_BF7C_0354_41B4_D4E895D34D8F"],"contentOpaque":false,"scrollBarOpacity":0.5,"toolTipHorizontalAlign":"center","layout":"absolute","height":"100%","backgroundColor":["#000000"],"scrollBarVisible":"rollOver","backgroundPreloadEnabled":true,"scrollBarWidth":10,"borderRadius":0,"scrollBarColor":"#000000","class":"Player","scripts":{"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"translate":TDV.Tour.Script.translate,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"isPanorama":TDV.Tour.Script.isPanorama,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"quizFinish":TDV.Tour.Script.quizFinish,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"showWindow":TDV.Tour.Script.showWindow,"shareSocial":TDV.Tour.Script.shareSocial,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getKey":TDV.Tour.Script.getKey,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"openLink":TDV.Tour.Script.openLink,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"clone":TDV.Tour.Script.clone,"initAnalytics":TDV.Tour.Script.initAnalytics,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"init":TDV.Tour.Script.init,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"registerKey":TDV.Tour.Script.registerKey,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"playAudioList":TDV.Tour.Script.playAudioList,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"setMapLocation":TDV.Tour.Script.setMapLocation,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"getMainViewer":TDV.Tour.Script.getMainViewer,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"quizShowScore":TDV.Tour.Script.quizShowScore,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"historyGoBack":TDV.Tour.Script.historyGoBack,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"initQuiz":TDV.Tour.Script.initQuiz,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"textToSpeech":TDV.Tour.Script.textToSpeech,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"unregisterKey":TDV.Tour.Script.unregisterKey,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"cloneCamera":TDV.Tour.Script.cloneCamera,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setLocale":TDV.Tour.Script.setLocale,"historyGoForward":TDV.Tour.Script.historyGoForward,"setValue":TDV.Tour.Script.setValue,"existsKey":TDV.Tour.Script.existsKey,"getComponentByName":TDV.Tour.Script.getComponentByName,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getPixels":TDV.Tour.Script.getPixels,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getMediaByName":TDV.Tour.Script.getMediaByName,"downloadFile":TDV.Tour.Script.downloadFile,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"showPopupImage":TDV.Tour.Script.showPopupImage,"getOverlays":TDV.Tour.Script.getOverlays,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"resumePlayers":TDV.Tour.Script.resumePlayers,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"quizStart":TDV.Tour.Script.quizStart,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"mixObject":TDV.Tour.Script.mixObject,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent},"start":"this.init(); this.syncPlaylists([this.mainPlayList,this.ThumbnailList_A1035095_AD38_51E5_41E2_55F13EC12CB4_playlist])","downloadEnabled":false,"creationPolicy":"inAdvance","borderSize":0,"data":{"name":"Player28156","defaultLocale":"fr","locales":{"fr":"locale/fr.txt"},"textToSpeechConfig":{"stopBackgroundAudio":false,"speechOnQuizQuestion":false,"volume":1,"speechOnInfoWindow":false,"speechOnTooltip":false,"pitch":1,"rate":1},"initialScale":0.65},"minWidth":20,"shadow":false,"minHeight":20};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2021.2.3.js.map
//Generated with v2021.2.3, Thu May 1 2025