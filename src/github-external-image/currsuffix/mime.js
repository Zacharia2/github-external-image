/*\
title: $:/plugins/mingyue/github-external/mime.js
type: application/javascript
module-type: library

Text node widget, <$text text="string">

\*/

const _MIME = [
    ['text/vnd.tiddlywiki', 'utf8', '.tid'],
    ['application/x-tiddler', 'utf8', '.tid'],
    ['application/x-tiddlers', 'utf8', '.multids'],
    ['application/x-tiddler-html-div', 'utf8', '.tiddler'],
    ['text/vnd.tiddlywiki2-recipe', 'utf8', '.recipe'],
    ['text/plain', 'utf8', '.txt'],
    ['text/css', 'utf8', '.css'],
    ['text/html', 'utf8', ['.html', '.htm']],
    ['application/hta', 'utf16le', '.hta', { deserializerType: 'text/html' }],
    ['application/javascript', 'utf8', '.js'],
    ['application/json', 'utf8', '.json'],
    ['application/pdf', 'base64', '.pdf', { flags: ['image'] }],
    ['application/zip', 'base64', '.zip'],
    ['application/x-zip-compressed', 'base64', '.zip'],
    ['image/jpeg', 'base64', ['.jpg', '.jpeg'], { flags: ['image'] }],
    ['image/jpg', 'base64', ['.jpg', '.jpeg'], { flags: ['image'] }],
    ['image/png', 'base64', '.png', { flags: ['image'] }],
    ['image/gif', 'base64', '.gif', { flags: ['image'] }],
    ['image/webp', 'base64', '.webp', { flags: ['image'] }],
    ['image/heic', 'base64', '.heic', { flags: ['image'] }],
    ['image/heif', 'base64', '.heif', { flags: ['image'] }],
    ['image/svg+xml', 'utf8', '.svg', { flags: ['image'] }],
    ['image/vnd.microsoft.icon', 'base64', '.ico', { flags: ['image'] }],
    ['image/x-icon', 'base64', '.ico', { flags: ['image'] }],
    ['application/wasm', 'base64', '.wasm'],
    ['application/font-woff', 'base64', '.woff'],
    ['application/x-font-ttf', 'base64', '.woff'],
    ['application/font-woff2', 'base64', '.woff2'],
    ['audio/ogg', 'base64', '.ogg'],
    ['audio/mp4', 'base64', ['.mp4', '.m4a']],
    ['video/ogg', 'base64', ['.ogm', '.ogv', '.ogg']],
    ['video/webm', 'base64', '.webm'],
    ['video/mp4', 'base64', '.mp4'],
    ['audio/mp3', 'base64', '.mp3'],
    ['audio/mpeg', 'base64', ['.mp3', '.m2a', '.mp2', '.mpa', '.mpg', '.mpga']],
    [
        'text/markdown',
        'utf8',
        ['.md', '.markdown'],
        { deserializerType: 'text/x-markdown' },
    ],
    ['text/x-markdown', 'utf8', ['.md', '.markdown']],
    ['application/enex+xml', 'utf8', '.enex'],
    [
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'base64',
        '.docx',
    ],
    ['application/msword', 'base64', '.doc'],
    [
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'base64',
        '.xlsx',
    ],
    ['application/excel', 'base64', '.xls'],
    ['application/vnd.ms-excel', 'base64', '.xls'],
    [
        'application/vnd.openxmlformats-officedocument.presentationml.presentation',
        'base64',
        '.pptx',
    ],
    ['application/mspowerpoint', 'base64', '.ppt'],
    [
        'text/x-bibtex',
        'utf8',
        '.bib',
        { deserializerType: 'application/x-bibtex' },
    ],
    ['application/x-bibtex', 'utf8', '.bib'],
    ['application/epub+zip', 'base64', '.epub'],
    ['application/octet-stream', 'base64', '.octet-stream'],
];

exports._MIME = _MIME