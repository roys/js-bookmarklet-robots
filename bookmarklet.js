/*
* ----------------------------------------------------------------------------
* "THE BEER-WARE LICENSE" (Revision 42):
* http://github.com/roys wrote this file.  As long as you retain this notice
* you can do whatever you want with this stuff. If we meet some day, and you
* think this stuff is worth it, you can buy me a beer in return.   Roy Solberg
* ----------------------------------------------------------------------------
*/
javascript: (function () {
    console.log('robots.txt linkifier v1.1; https://blog.roysolberg.com');
    if(location.pathname != '/robots.txt'){
        if(confirm('Do you want to navigate to /robots.txt? You need to run the bookmarklet again to linkify it.')){
            location.href= '/robots.txt';
        }
        return;
    }
    function openLinks() {
        var links = document.links;
        if (links.length > 20) {
            if (!confirm('There are ' + links.length + ' links. Are you sure you want to open them all at once?')) {
                return;
            }
        }
        console.log('Some browsers will block opening links this way.');
        for (var i = 0; i < links.length; i++) {
            window.open(links[i].href, '_blank');
        };
    }
    var base = location.protocol + "//" + location.hostname + (location.port && ":" + location.port);
    var html = '<body style="font-size:120%;"><script>' + openLinks.toString() + '</script><button type="button" style="width:200px;height:40px;font-size:120%;" onclick="openLinks();">Open all links</button><div style="font-family: monospace;">';
    html += document.body.textContent.replace(/(Allow|Disallow): (\/\S*)/g, '$1: <a href="' + base + '$2" target="_blank">$2</a>').replace(/\n/g, '<br/>');
    var win = window.open();
    win.document.write(html);
    win.document.close();
})();
