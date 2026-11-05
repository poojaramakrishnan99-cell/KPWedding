import {readFile,mkdir,writeFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
const root=new URL('../public/',import.meta.url);
const output=new URL('../dist/',import.meta.url);
await mkdir(output,{recursive:true});
const data=async(name,mime)=>`data:${mime};base64,${(await readFile(new URL(name,root))).toString('base64')}`;
let html=await readFile(new URL('index.html',root),'utf8');
let css=await readFile(new URL('style.css',root),'utf8');
for(const name of ['cormorant.woff2','manrope.woff2'])css=css.replaceAll('/'+name,await data(name,'font/woff2'));
css+='\n'+await readFile(new URL('mobile.css',root),'utf8');
html=html.replace('<link rel="stylesheet" href="/mobile.css">','');
// The portable file uses one embedded image per illustration; hosted pages use srcset.
html=html.replace(/ srcset="[^"]*"/g,'');
const images={};
for(const name of ['temple-1000.webp','beach-1000.webp','resort-1000.webp','mahal-1000.webp','lotus.svg']){
  images[name]=await data('images/'+name,name.endsWith('.svg')?'image/svg+xml':'image/webp');
  html=html.replaceAll('/images/'+name,images[name]);
}
html=html.replace('/images/temple-600.webp',images['temple-1000.webp']);
let js=await readFile(new URL('app.js',root),'utf8');
js=js.replace('src="/images/${e.image}-600.webp"','src="${embeddedImages[e.image+\'-1000.webp\']}"');
js=js.replace(' srcset="/images/${e.image}-600.webp 600w, /images/${e.image}-1000.webp 1000w"','');
const pdf=(await readFile(new URL('invitation.pdf',root))).toString('base64');
const pdfScript=`
document.querySelector('a[href="/invitation.pdf"]').addEventListener('click',function(event){
 event.preventDefault();
 const binary=atob(document.getElementById('original-pdf').textContent.trim());
 const bytes=new Uint8Array(binary.length);
 for(let i=0;i<binary.length;i++)bytes[i]=binary.charCodeAt(i);
 const url=URL.createObjectURL(new Blob([bytes],{type:'application/pdf'}));
 const link=document.createElement('a');link.href=url;link.download='Kamesh-Preetha-original-invitation.pdf';link.click();
 setTimeout(()=>URL.revokeObjectURL(url),60000);
});`;
html=html.replace('<link rel="stylesheet" href="/style.css">',()=>`<style>${css}</style>`);
html=html.replace('<script type="module" src="/app.js"></script>',()=>`<script id="original-pdf" type="application/octet-stream">${pdf}</script><script>const embeddedImages=${JSON.stringify(images)};\n${js}\n${pdfScript}</script>`);
const target=new URL('Kamesh-and-Preetha-Wedding.html',output);
await writeFile(target,html);
console.log(`Standalone invitation exported: ${fileURLToPath(target)} (${(Buffer.byteLength(html)/1024/1024).toFixed(1)} MB). All artwork, fonts, styles, scripts and the original PDF are embedded.`);
