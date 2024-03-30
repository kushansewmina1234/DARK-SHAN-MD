import fetch from 'node-fetch';

export async function before(m) {
const regex = /(https?:\/\/(?:www\.)?instagram\.[a-z\.]{2,6}\/[\w\-\.]+(\/[^\s]*)?)/g;
const matches = (m.text.trim()).match(regex);
const spas = " ";
if (!matches) return false;
await m.reply(wait);

try {
let res = await fetch(`https://vihangayt.me/download/instagram?url=${matches[0]}`);
let igeh = await res.json();
let IgCap = `♤Téléchargé♤`
if (igeh.data && igeh.data.data.length > 0) {
for (let item of igeh.data.data) {
await conn.sendFile(m.chat, item.url || giflogo, "", IgCap, m)
}
}
} catch (e) {
}
}
export const disabled = false
