
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"type":"dark"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/index.html","title":"Home"}},[_v("Your Logo")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('form',{staticClass:"navbar-form"},[_c('searchbar',{attrs:{"data":searchData,"placeholder":"Search","on-hit":searchCallback,"menu-align-right":""}})],1)])]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/contents/topic1.html"}},[_v("Topic 1")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/contents/topic2.html"}},[_v("Topic 2")])]),_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("Topic 3")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/contents/topic3a.html"}},[_v("Topic 3a")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/contents/topic3b.html"}},[_v("Topic 3b")])])])],1)],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"site-nav","tag-name":"nav","to":"site-nav"}},[_c('div',{staticClass:"site-nav-top"},[_c('div',{staticClass:"font-weight-bold mb-2",staticStyle:{"font-size":"1.25rem"}},[_v("Template")])]),_v(" "),_c('div',{staticClass:"nav-component slim-scroll"},[_c('site-nav',[_c('overlay-source',{staticClass:"site-nav-list site-nav-list-root",attrs:{"tag-name":"ul","to":"mb-site-nav"}},[_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/index.html"}},[_v("Home 🏠")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/contents/topic1.html"}},[_v("Topic 1")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/contents/topic2.html"}},[_v("Topic 2")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_v("Topic 3 \n\n"),_c('i',{staticClass:"site-nav-dropdown-btn-icon site-nav-rotate-icon",attrs:{"onclick":"handleSiteNavClick(this.parentNode, false); event.stopPropagation();"}},[_c('span',{staticClass:"glyphicon glyphicon-menu-down",attrs:{"aria-hidden":"true"}})])]),_c('ul',{staticClass:"site-nav-dropdown-container site-nav-dropdown-container-open site-nav-list"},[_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/contents/topic3a.html"}},[_v("Topic 3a")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/contents/topic3b.html"}},[_v("Topic 3b")])])])])])])],1)],1)]),_v(" "),_c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_c('br'),_v(" "),_m(0),_v(" "),_m(1),_v(" "),_m(2),_v(" "),_m(3),_v(" "),_m(4),_v(" "),_m(5),_v(" "),_m(6),_v(" "),_m(7),_v(" "),_m(8),_m(9),_v(" "),_c('p',[_v("A "),_c('tooltip',{attrs:{"placement":"top","trigger":"hover"},scopedSlots:_u([{key:"content",fn:function(){return [_v("❗️ some "),_c('strong',[_v("important explanation")])]},proxy:true}])},[_v("tooltip")]),_v(", a "),_c('trigger',{attrs:{"for":"modal:modalinfo","trigger":"click"}},[_v("modal")]),_v(", a "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("link")]),_v(", a "),_c('span',{staticClass:"badge badge-danger"},[_v("badge")]),_v(", another "),_c('span',{staticClass:"badge badge-warning"},[_v("badge")]),_v(".")],1),_v(" "),_c('modal',{attrs:{"id":"modal:modalinfo"},scopedSlots:_u([{key:"header",fn:function(){return [_v("Modal Title")]},proxy:true}])},[_v("\nSome text some text some text some text some text some text some text. Some text some text some text some text some text some text some text. Some text some text some text some text some text some text some text some text some text some text some text some text some text some text. Some text some text some text some text some text some text. Some text some text some text some text some text some text some text.\n")]),_v(" "),_m(10),_v(" "),_m(11),_m(12),_v(" "),_m(13),_v(" "),_m(14),_v(" "),_m(15),_v(" "),_c('tabs',[_c('tab',{scopedSlots:_u([{key:"header",fn:function(){return [_v("Tab X")]},proxy:true}])},[_v("\n    Some text some text some text some text some text some text some text. Some text some text some text some text some text some text some text. Some text some text some text some text some text some text some text some text some text some text some text some text some text some text. Some text some text some text some text some text some text. Some text some text some text some text some text some text some text.\n  ")]),_v(" "),_c('tab',{scopedSlots:_u([{key:"header",fn:function(){return [_v("Tab Y")]},proxy:true}])},[_v("\n    ...\n  ")]),_v(" "),_c('tab-group',{scopedSlots:_u([{key:"header",fn:function(){return [_v("Tab group")]},proxy:true}])},[_v(" "),_c('tab',{scopedSlots:_u([{key:"header",fn:function(){return [_v("Tab Y.1")]},proxy:true}])},[_v("\n      ...\n    ")]),_v(" "),_c('tab',{scopedSlots:_u([{key:"header",fn:function(){return [_v("Tab Y.2")]},proxy:true}])},[_v("\n      ...\n    ")])],1)],1),_v(" "),_c('br'),_v(" "),_m(16),_v(" "),_m(17),_v(" "),_c('box',[_v("\n    default\n")]),_v(" "),_c('box',{attrs:{"type":"info"}},[_v("\n    info\n")]),_v(" "),_c('box',{attrs:{"type":"warning","dismissible":""}},[_v("\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n")]),_v(" "),_c('box',{attrs:{"type":"tip"},scopedSlots:_u([{key:"header",fn:function(){return [_c('p',[_v("Tip box heading")])]},proxy:true}])},[_v("\n    tip\n")]),_v(" "),_c('box',{attrs:{"type":"success"},scopedSlots:_u([{key:"header",fn:function(){return [_c('p',[_v("Tip box heading")])]},proxy:true}])},[_v("\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n")]),_v(" "),_c('box',{attrs:{"type":"important","dismissible":""},scopedSlots:_u([{key:"header",fn:function(){return [_c('p',[_v("Tip box heading")])]},proxy:true}])},[_v("\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n")]),_v(" "),_c('br'),_v(" "),_m(18),_v(" "),_c('panel',{attrs:{"type":"info"},scopedSlots:_u([{key:"header",fn:function(){return [_c('p',[_v("Expandable panel")])]},proxy:true}])},[_v("\n  Some text some text some text some text some text some text some text. Some text some text some text some text some text some text some text. Some text some text some text some text some text some text some text some text some text some text some text some text some text some text. Some text some text some text some text some text some text. Some text some text some text some text some text some text some text.\n")]),_v(" "),_c('br'),_v(" "),_c('panel',{attrs:{"type":"success","minimized":""},scopedSlots:_u([{key:"header",fn:function(){return [_c('p',[_v("Expanded panel")])]},proxy:true},{key:"_alt",fn:function(){return [_c('p',[_v("Minimized panel")])]},proxy:true}])},[_v("\n  ...\n")]),_v(" "),_c('br'),_v(" "),_c('panel',{attrs:{"type":"seamless"},scopedSlots:_u([{key:"header",fn:function(){return [_c('p',[_v("Expanded panel")])]},proxy:true},{key:"_alt",fn:function(){return [_c('p',[_v("Minimized panel")])]},proxy:true}])},[_v("\n  ...\n")]),_v(" "),_c('br'),_v(" "),_c('p',[_v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")]),_v(" "),_c('panel',{attrs:{"type":"minimal","popup-url":"https://markbind.org/userGuide/components/presentation.html#panels","no-switch":""},scopedSlots:_u([{key:"header",fn:function(){return [_c('p',[_c('em',[_c('strong',[_v("Minimal panel "),_c('strong',[_v("->")])])])])]},proxy:true},{key:"_alt",fn:function(){return [_c('p',[_v("Minimal panel")])]},proxy:true}])},[_v("\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n")]),_v(" "),_c('p',[_v("Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")]),_v(" "),_c('i',{staticClass:"fa fa-arrow-circle-up fa-lg d-print-none",attrs:{"id":"scroll-top-button","onclick":"handleScrollTop()","aria-hidden":"true"}})],1),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"},[_c('a',{pre:true,attrs:{"class":"navbar-brand page-nav-title","href":"#"}},[_v("Chapters of This Page")]),_v(" "),_c('overlay-source',{staticClass:"nav nav-pills flex-column my-0 small no-flex-wrap",attrs:{"id":"mb-page-nav","tag-name":"nav","to":"mb-page-nav"}},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#heading-1"}},[_v("Heading 1‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#sub-heading-1-1"}},[_v("Sub Heading 1.1‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#sub-heading-1-2"}},[_v("Sub Heading 1.2‎")])]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#heading-2"}},[_v("Heading 2‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#heading-3"}},[_v("Heading 3‎")])])],1)])],1),_v(" "),_m(19)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('div',{staticClass:"jumbotron jumbotron-fluid bg-primary text-white"},[_c('div',{staticClass:"container"},[_c('h1',{staticClass:"display-4 no-index",attrs:{"id":"landing-page-title"}},[_c('span',{staticClass:"anchor",attrs:{"id":"landing-page-title"}}),_v("Landing Page Title"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#landing-page-title","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',{staticClass:"lead"},[_v("A tagline can go here")])])])}
},function anonymous(
) {
with(this){return _c('h1',{attrs:{"id":"heading-1"}},[_c('span',{staticClass:"anchor",attrs:{"id":"heading-1"}}),_v("Heading 1"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#heading-1","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Some text some text some text some text some text some text some text. "),_c('strong',[_v("Some text some text some text some text some text "),_c('mark',[_v("some text")]),_v(" some text")]),_v(". Some text some text some text some text some text some text some text some text some text some text some text some text some text some text. Some text some text some text some text some text some text. Some text some text some text some text some text some text some text.")])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("A block quote:")])])}
},function anonymous(
) {
with(this){return _c('blockquote',[_c('p',[_v("Some text some text some text some text some text some text some text. Some text some text some text some text some text some text some text. Some text some text some text some text some text some text some text some text some text some text some text some text some text some text. Some text some text some text some text some text some text. Some text some text some text some text some text some text some text.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("A list:")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("item A")]),_v(" "),_c('li',[_v("item B\n"),_c('ol',[_c('li',[_v("item b1")]),_v(" "),_c('li',[_v("item b2")]),_v(" "),_c('li',[_v("item b3")])])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("A "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("code")]),_v(" example:")])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs html"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_v("<"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_v("foo")]),_v(">")]),_v("\n")]),_c('span',[_v("  "),_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_v("<"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_v("bar")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("type")]),_v("="),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("\"name\"")]),_v(">")]),_v("goo"),_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_v("</"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_v("bar")]),_v(">")]),_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_v("</"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_v("foo")]),_v(">")]),_v("\n")])])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"sub-heading-1-1"}},[_c('span',{staticClass:"anchor",attrs:{"id":"sub-heading-1-1"}}),_v("Sub Heading 1.1"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#sub-heading-1-1","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("A table:")])])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"table-responsive"},[_c('table',{staticClass:"markbind-table table table-bordered table-striped"},[_c('thead',[_c('tr',[_c('th',{staticStyle:{"text-align":"center"}},[_v("Column 1")]),_v(" "),_c('th',{staticStyle:{"text-align":"center"}},[_v("Column 2")]),_v(" "),_c('th',{staticStyle:{"text-align":"center"}},[_v("Column 3")]),_v(" "),_c('th',[_c('span',{staticClass:"far fa-thumbs-up",attrs:{"aria-hidden":"true"}}),_v(" / "),_c('span',{staticClass:"far fa-thumbs-down",attrs:{"aria-hidden":"true"}}),_v("?")])])]),_v(" "),_c('tbody',[_c('tr',[_c('td',{staticStyle:{"text-align":"center"}},[_v("value1")]),_v(" "),_c('td',{staticStyle:{"text-align":"center"}},[_v("x")]),_v(" "),_c('td',{staticStyle:{"text-align":"center"}},[_v("5")]),_v(" "),_c('td',[_c('span',{staticClass:"far fa-thumbs-up",attrs:{"aria-hidden":"true"}})])]),_v(" "),_c('tr',[_c('td',{staticStyle:{"text-align":"center"}},[_v("value2")]),_v(" "),_c('td',{staticStyle:{"text-align":"center"}},[_v("y")]),_v(" "),_c('td',{staticStyle:{"text-align":"center"}},[_v("20")]),_v(" "),_c('td',[_c('span',{staticClass:"far fa-thumbs-down",attrs:{"aria-hidden":"true"}})])])])])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"sub-heading-1-2"}},[_c('span',{staticClass:"anchor",attrs:{"id":"sub-heading-1-2"}}),_v("Sub Heading 1.2"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#sub-heading-1-2","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Media embeds:")])])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"block-embed block-embed-service-youtube",staticStyle:{"position":"relative","height":"0","padding-bottom":"60.9375%"}},[_c('iframe',{attrs:{"type":"text/html","src":"//www.youtube.com/embed/v40b3ExbM0c","frameborder":"0","width":"640","height":"390","webkitallowfullscreen":"","mozallowfullscreen":"","allowfullscreen":""}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Tabs:")])])}
},function anonymous(
) {
with(this){return _c('h1',{attrs:{"id":"heading-2"}},[_c('span',{staticClass:"anchor",attrs:{"id":"heading-2"}}),_v("Heading 2"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#heading-2","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Some boxes:")])])}
},function anonymous(
) {
with(this){return _c('h1',{attrs:{"id":"heading-3"}},[_c('span',{staticClass:"anchor",attrs:{"id":"heading-3"}}),_v("Heading 3"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#heading-3","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('small',[_v("[Generated by "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 3.1.1")]),_v("]")])])])}
}];
  