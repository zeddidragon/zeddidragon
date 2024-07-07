function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_classes(s,r){return Array.isArray(s)?pug_classes_array(s,r):s&&"object"==typeof s?pug_classes_object(s):s||""}
function pug_classes_array(r,a){for(var s,e="",u="",c=Array.isArray(a),g=0;g<r.length;g++)(s=pug_classes(r[g]))&&(c&&a[g]&&(s=pug_escape(s)),e=e+u+s,u=" ");return e}
function pug_classes_object(r){var a="",n="";for(var o in r)o&&r[o]&&pug_has_own_property.call(r,o)&&(a=a+n+o,n=" ");return a}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_has_own_property=Object.prototype.hasOwnProperty;
var pug_match_html=/["&<>]/;function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (catClass, cats, collapseDamage, colspans, count, effect, element, full, getHeader, getRow, headerClass, headers, hideHeaders, hideName, id, isWeaponScope, langs, objects, roundStart, scope, scopeClass, scopes, search, showIds, sourceClass, sources, subObj, subScope, t, tbody, text, wikiLink) {pug_mixins["weaponsHeader"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cth" + (" class=\"weapon idx\""+pug_attr("title", t('table.th.wpn', 'idx', 'Internal order'), true, false)) + "\u003E#\u003C\u002Fth\u003E";
if (!hideHeaders.weapon) {
pug_html = pug_html + "\u003Cth" + (" class=\"weapons source\""+pug_attr("title", t('table.th.wpn', 'source'), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = t('table.th.wpn.label', 'source')) ? "" : pug_interp)) + "\u003C\u002Fth\u003E\u003Cth" + (" class=\"weapon category\""+pug_attr("title", t('table.th.wpn', 'category'), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = t('table.th.wpn.label', 'category')) ? "" : pug_interp)) + "\u003C\u002Fth\u003E\u003Cth" + (" class=\"weapon code\""+pug_attr("title", t('table.th.wpn', 'code'), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = t('table.th.wpn.label', 'code')) ? "" : pug_interp)) + "\u003C\u002Fth\u003E";
}
pug_html = pug_html + "\u003Cth" + (" class=\"weapon name\""+pug_attr("title", t('table.th.wpn', 'name'), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = t('table.th.wpn.label', 'weapon')) ? "" : pug_interp)) + "\u003C\u002Fth\u003E";
if (collapseDamage) {
pug_html = pug_html + "\u003Cth" + (" class=\"weapon damage\""+pug_attr("title", t('table.th.dmg', 'dmg'), true, false)+" colspan=\"2\"") + "\u003E\u003Cspan\u003E" + (pug_escape(null == (pug_interp = t('table.th.wpn.label', 'damage')) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fth\u003E";
}
else {
pug_html = pug_html + "\u003Cth" + (" class=\"weapon damage\""+pug_attr("title", t('table.th.dmg', 'dmgs3'), true, false)+" colspan=\"3\"") + "\u003E\u003Cspan\u003E" + (pug_escape(null == (pug_interp = t('table.th.wpn.label', 'damage')) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fth\u003E";
}
pug_html = pug_html + "\u003Cth" + (" class=\"weapon shotdmg2\""+pug_attr("title", t('table.th.dmg', 'dmg2'), true, false)) + "\u003E\u003Csub\u003E" + (pug_escape(null == (pug_interp = t('table.th.wpn.label.sub', 'dmg2')) ? "" : pug_interp)) + "\u003C\u002Fsub\u003E\u003C\u002Fth\u003E";
if (collapseDamage) {
pug_html = pug_html + "\u003Cth" + (" class=\"weapon shotdmgx\""+pug_attr("title", t('table.th.dmg', 'dmgx'), true, false)) + "\u003E\u003Csub\u003E" + (pug_escape(null == (pug_interp = t('table.th.wpn.label.sub', 'dmgx')) ? "" : pug_interp)) + "\u003C\u002Fsub\u003E\u003C\u002Fth\u003E";
}
pug_html = pug_html + "\u003Cth" + (" class=\"damage ap\""+pug_attr("title", t('table.th.dmg', 'ap'), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = t('table.th.wpn.label', 'ap')) ? "" : pug_interp)) + "\u003C\u002Fth\u003E\u003Cth" + (" class=\"weapon rpm\""+pug_attr("title", t('table.th.wpn', 'rpm'), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = t('table.th.wpn.label', 'rpm')) ? "" : pug_interp)) + "\u003C\u002Fth\u003E";
if (!hideHeaders.weapon) {
pug_html = pug_html + "\u003Cth" + (" class=\"weapon reload\""+pug_attr("title", t('table.th.wpn', 'reloads3'), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = t('table.th.wpn.label', 'rel')) ? "" : pug_interp)) + "\u003C\u002Fth\u003E\u003Cth" + (" class=\"weapon cap\""+pug_attr("title", t('table.th.wpn', 'cap'), true, false)+" colspan=\"2\"") + "\u003E" + (pug_escape(null == (pug_interp = t('table.th.wpn.label', 'cap')) ? "" : pug_interp)) + "\u003C\u002Fth\u003E\u003Cth" + (" class=\"weapon spare\""+pug_attr("title", t('table.th.wpn', 'spare4'), true, false)+" colspan=\"2\"") + "\u003E" + (pug_escape(null == (pug_interp = t('table.th.wpn.label', 'spare4')) ? "" : pug_interp)) + "\u003C\u002Fth\u003E\u003Cth" + (" class=\"weapon spread\""+pug_attr("title", t('table.th.wpn', 'spread'), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = t('table.th.wpn.label', 'spread')) ? "" : pug_interp)) + "\u003C\u002Fth\u003E\u003Cth" + (" class=\"weapon recoil\""+pug_attr("title", t('table.th.wpn', 'recoil'), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = t('table.th.wpn.label', 'recoil')) ? "" : pug_interp)) + "\u003C\u002Fth\u003E\u003Cth" + (" class=\"weapon ergonomics\""+pug_attr("title", t('table.th.wpn', 'ergonomics'), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = t('table.th.wpn.label', 'ergonomics')) ? "" : pug_interp)) + "\u003C\u002Fth\u003E";
}
if (!hideHeaders.damage) {
pug_mixins["damagesHeader"]({ apCount: 1, effectsCount: 1 });
}
if (!hideHeaders.dps) {
pug_html = pug_html + "\u003Cth" + (" class=\"weapon dps\""+pug_attr("title", t('table.th.wpn', 'dps'), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = t('table.th.wpn.label', 'dps')) ? "" : pug_interp)) + "\u003C\u002Fth\u003E\u003Cth" + (" class=\"weapon tdps\""+pug_attr("title", t('table.th.wpn', 'tdps'), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = t('table.th.wpn.label', 'tdps')) ? "" : pug_interp)) + "\u003C\u002Fth\u003E\u003Cth" + (" class=\"weapon magdump\""+pug_attr("title", t('table.th.wpn', 'dmag'), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = t('table.th.wpn.label', 'dmag')) ? "" : pug_interp)) + "\u003C\u002Fth\u003E\u003Cth" + (" class=\"weapon totaldump\""+pug_attr("title", t('table.th.wpn', 'total'), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = t('table.th.wpn.label', 'total')) ? "" : pug_interp)) + "\u003C\u002Fth\u003E";
}
if (!hideHeaders.dps2) {
pug_html = pug_html + "\u003Cth" + (" class=\"weapon dps2\""+pug_attr("title", t('table.th.wpn', 'ddps'), true, false)) + "\u003E\u003Csup\u003E" + (pug_escape(null == (pug_interp = t('table.th.wpn.label.sup', 'ddps')) ? "" : pug_interp)) + "\u003C\u002Fsup\u003E\u003Csub\u003E" + (pug_escape(null == (pug_interp = t('table.th.wpn.label.sub', 'ddps')) ? "" : pug_interp)) + "\u003C\u002Fsub\u003E\u003C\u002Fth\u003E\u003Cth" + (" class=\"weapon tdps2\""+pug_attr("title", t('table.th.wpn', 'dtdps'), true, false)) + "\u003E\u003Csup\u003E" + (pug_escape(null == (pug_interp = t('table.th.wpn.label.sup', 'dtdps')) ? "" : pug_interp)) + "\u003C\u002Fsup\u003E\u003C\u002Fth\u003E\u003Cth" + (" class=\"weapon magdump2\""+pug_attr("title", t('table.th.wpn', 'ddmag'), true, false)) + "\u003E\u003Csup\u003E" + (pug_escape(null == (pug_interp = t('table.th.wpn.label.sup', 'ddmag')) ? "" : pug_interp)) + "\u003C\u002Fsup\u003E\u003C\u002Fth\u003E\u003Cth" + (" class=\"weapon totaldump2\""+pug_attr("title", t('table.th.wpn', 'dtotal'), true, false)) + "\u003E\u003Csup\u003E" + (pug_escape(null == (pug_interp = t('table.th.wpn.label.sup', 'dtotal')) ? "" : pug_interp)) + "\u003C\u002Fsup\u003E\u003C\u002Fth\u003E";
}
if (!hideHeaders.projectile) {
pug_mixins["projectilesHeader"]();
}
};
pug_mixins["weaponDamageRow"] = pug_interp = function(wpn){
var block = (this && this.block), attributes = (this && this.attributes) || {};
const dmg = wpn.damage || {}
pug_html = pug_html + "\u003Ctd" + (pug_attr("class", pug_classes(["weapon","type",{ xdmg: !!wpn.explosion }], [false,false,true]), false, false)) + "\u003E";
if (dmg.type) {
var el = element(dmg)
pug_html = pug_html + "\u003Cspan" + (" class=\"dmgtype\""+pug_attr("title", t('dmg.types.full', el), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = t('dmg.types', el)) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
}
pug_html = pug_html + "\u003C\u002Ftd\u003E";
const n = count(wpn)
if (collapseDamage) {
pug_html = pug_html + "\u003Ctd" + (pug_attr("class", pug_classes(["weapon","dmg",{ muted: !wpn.shotdmg }], [false,false,true]), false, false)) + "\u003E" + (pug_escape(null == (pug_interp = wpn.shotdmg) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd" + (pug_attr("class", pug_classes(["weapon","dmg2",{ muted: !wpn.shotdmg2 }], [false,false,true]), false, false)) + "\u003E" + (pug_escape(null == (pug_interp = wpn.shotdmg2) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd" + (pug_attr("class", pug_classes(["weapon","dmgx",{ muted: !wpn.shotdmgx }], [false,false,true]), false, false)) + "\u003E" + (pug_escape(null == (pug_interp = wpn.shotdmgx) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
}
else {
pug_html = pug_html + "\u003Ctd" + (pug_attr("class", pug_classes(["weapon","pellets",{ muted: n == 1, blank: !n }], [false,false,true]), false, false)) + "\u003E" + (pug_escape(null == (pug_interp = n) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd" + (pug_attr("class", pug_classes(["weapon","dmg",{ xdmg: !!wpn.explosion }], [false,false,true]), false, false)) + "\u003E" + (pug_escape(null == (pug_interp = dmg.dmg) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd" + (pug_attr("class", pug_classes(["weapon","dmg2",{ xdmg: !!wpn.explosion }], [false,false,true]), false, false)) + "\u003E" + (pug_escape(null == (pug_interp = dmg.dmg2) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
}
let ap = dmg.ap1
pug_html = pug_html + "\u003Ctd" + (pug_attr("class", pug_classes(["damage","ap",`ap-${ap}`], [false,false,true]), false, false)) + "\u003E" + (pug_escape(null == (pug_interp = ap) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
};
pug_mixins["weaponsRow"] = pug_interp = function(wpn, opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Ctd class=\"weapon idx\"\u003E" + (pug_escape(null == (pug_interp = wpn.idx) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
if (!hideHeaders.weapon) {
pug_html = pug_html + "\u003Ctd" + (" class=\"weapons source\""+pug_attr("title", t('wpn.source.full', wpn.source), true, false)) + "\u003E\u003Cspan" + (pug_attr("class", pug_classes([wpn.source,"source-main","source"], [true,false,false]), false, false)) + "\u003E" + (pug_escape(null == (pug_interp = t('wpn.source.label', wpn.source)) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
if (wpn.sourcepage) {
pug_html = pug_html + "\u003Cspan class=\"source-page\"\u003E" + (pug_escape(null == (pug_interp = wpn.sourcepage) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
}
pug_html = pug_html + "\u003C\u002Ftd\u003E\u003Ctd" + (pug_attr("class", pug_classes(["weapon","category",wpn.category], [false,false,true]), false, false)+pug_attr("title", t('wpn.category.full', wpn.category), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = t('wpn.category.label', wpn.category)) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
if (wpn.parent) {
pug_html = pug_html + "\u003Ctd class=\"inheritance\"\u003E└\u003C\u002Ftd\u003E";
}
else {
pug_html = pug_html + "\u003Ctd class=\"weapon code\"\u003E";
if (wpn.code) {
pug_html = pug_html + "\u003Ca" + (pug_attr("href", wikiLink(wpn), true, false)+" target=\"_blank\"") + "\u003E" + (pug_escape(null == (pug_interp = wpn.code) ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
}
pug_html = pug_html + "\u003C\u002Ftd\u003E";
}
}
pug_html = pug_html + "\u003Ctd" + (pug_attr("class", pug_classes(["weapon","name",`name-${wpn.type}`], [false,false,true]), false, false)) + "\u003E";
if (wpn.name) {
pug_html = pug_html + "\u003Ca" + (pug_attr("href", wikiLink(wpn), true, false)+" target=\"_blank\"") + "\u003E" + (pug_escape(null == (pug_interp = wpn.name) ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
}
else
if (wpn.explosion) {
pug_html = pug_html + "\u003Cspan class=\"weapon name\"\u003E" + (pug_escape(null == (pug_interp = t('table.td.dmg.label',  'explosion', 'Explosion')) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
}
pug_html = pug_html + "\u003C\u002Ftd\u003E";
pug_mixins["weaponDamageRow"](wpn);
pug_html = pug_html + "\u003Ctd class=\"weapon rpm\"\u003E";
if (wpn.beam) {
pug_html = pug_html + "\u003Cspan class=\"rpm-laser\"\u003EBeam\u003C\u002Fspan\u003E";
}
if (wpn.charge) {
pug_html = pug_html + "\u003Cspan class=\"rpm-charge\" title=\"Charge time\"\u003E\u003Csup class=\"one-over\"\u003E1\u002F\u003C\u002Fsup\u003E";
if (wpn.chargeearly) {
pug_html = pug_html + "\u003Cspan class=\"charge-early\"\u003E" + (pug_escape(null == (pug_interp = wpn.chargeearly) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
}
pug_html = pug_html + "\u003Cspan\u003E" + (pug_escape(null == (pug_interp = wpn.charge) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E";
}
else {
pug_html = pug_html + "\u003Cspan class=\"rpm-main\"\u003E" + (pug_escape(null == (pug_interp = wpn.rpm) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
}
pug_html = pug_html + "\u003C\u002Ftd\u003E";
if (!hideHeaders.weapon) {
pug_html = pug_html + "\u003Ctd class=\"weapon reload\"\u003E";
if (wpn.reloadone) {
pug_html = pug_html + "\u003Cspan" + (" class=\"reload-one\""+pug_attr("title", t('table.td.reload', '1', "Reload 1 round"), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = wpn.reloadone.toFixed(1)) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
}
if (wpn.reloadx) {
pug_html = pug_html + "\u003Cspan" + (" class=\"reload-x pre-slash\""+pug_attr("title", t('table.td.reload', 'x', `Reload max rounds`), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = wpn.reloadx.toFixed(1)) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
}
if (wpn.reload) {
pug_html = pug_html + "\u003Cspan" + (" class=\"reload-main\""+pug_attr("title", t('table.td.reload', 'empty', "Reload from empty"), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = wpn.reload.toFixed(1)) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
}
if (wpn.reloadearly) {
pug_html = pug_html + "\u003Cspan" + (" class=\"reload-early post-slash\""+pug_attr("title", t('table.td.reload', 'early', "Early Reload (not empty)"), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = wpn.reloadearly.toFixed(1)) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
}
pug_html = pug_html + "\u003C\u002Ftd\u003E\u003Ctd class=\"weapon cap\"\u003E" + (pug_escape(null == (pug_interp = wpn.cap || wpn.limit) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"weapon capextra\"\u003E";
if (wpn.limit) {
pug_html = pug_html + "\u003Cspan class=\"cap-limit\"\u003Es\u003C\u002Fspan\u003E";
}
else
if (wpn.capplus) {
pug_html = pug_html + "\u003Csup class=\"cap-post cap-plus\"\u003E" + (pug_escape(null == (pug_interp = wpn.capplus) ? "" : pug_interp)) + "\u003C\u002Fsup\u003E";
}
pug_html = pug_html + "\u003C\u002Ftd\u003E\u003Ctd class=\"wepaon spare\"\u003E";
if (wpn.clips) {
pug_html = pug_html + "\u003Cspan" + (" class=\"clipsize\""+pug_attr("title", t('table.td.spare', 'clipsize', "Rounds in Clip"), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = wpn.clipsize) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cspan" + (" class=\"clipstart\""+pug_attr("title", t('table.td.spare', 'clipstart', "Starting Clips"), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = wpn.clipstart) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cspan" + (" class=\"clips post-slash\""+pug_attr("title", t('table.td.spare', 'clipsize', "Max Clips"), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = wpn.clips) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
}
if (wpn.rounds) {
pug_html = pug_html + "\u003Cspan" + (" class=\"roundstart pre-slash\""+pug_attr("title", t('table.td.spare', 'roundstart', "Starting Rounds"), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = roundStart(wpn)) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cspan" + (" class=\"rounds\""+pug_attr("title", t('table.td.spare', 'rounds', "Max Spare Rounds"), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = wpn.rounds) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
}
if (wpn.mags) {
pug_html = pug_html + "\u003Cspan" + (" class=\"magstart pre-slash\""+pug_attr("title", t('table.td.spare', 'magstart', "Starting Mags"), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = wpn.magstart || wpn.mags) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cspan" + (" class=\"mags\""+pug_attr("title", t('table.td.spare', 'mags', "Max Mags"), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = wpn.mags) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
}
pug_html = pug_html + "\u003C\u002Ftd\u003E\u003Ctd class=\"weapon pickup\"\u003E";
if (wpn.clipsupply) {
pug_html = pug_html + "\u003Cspan" + (" class=\"clipsupply\""+pug_attr("title", t('table.td.pickup', 'clipsupply', "Clips From Supply"), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = wpn.clipsupply) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cspan" + (" class=\"clipsbox post-slash\""+pug_attr("title", t('table.td.pickup', 'clipsbox', "Clips From Box"), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = wpn.clipsbox) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
}
if (wpn.roundsupply) {
pug_html = pug_html + "\u003Cspan" + (" class=\"roundsupply\""+pug_attr("title", t('table.td.pickup', 'roundsupply', "Rounds From Supply"), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = wpn.roundsupply) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cspan" + (" class=\"roundsbox post-slash\""+pug_attr("title", t('table.td.pickup', 'roundsbox', "Rounds From Box"), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = wpn.roundsbox) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
}
if (wpn.supply) {
pug_html = pug_html + "\u003Cspan" + (" class=\"supply\""+pug_attr("title", t('table.td.pickup', 'supply', "Mags From Supply"), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = wpn.supply) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cspan" + (" class=\"box post-slash\""+pug_attr("title", t('table.td.pickup', 'box', "Mags From Box"), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = wpn.box) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
}
pug_html = pug_html + "\u003C\u002Ftd\u003E\u003Ctd class=\"weapon spread\"\u003E";
if (wpn.spreadxy) {
pug_html = pug_html + "\u003Cspan class=\"spread-y pre-slash\"\u003E" + (pug_escape(null == (pug_interp = wpn.spreadxy.x) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cpan class=\"spread-y\"\u003E" + (pug_escape(null == (pug_interp = wpn.spreadxy.y) ? "" : pug_interp)) + "\u003C\u002Fpan\u003E";
}
pug_html = pug_html + "\u003C\u002Ftd\u003E\u003Ctd class=\"weapon recoil\"\u003E";
if (wpn.recoilxy) {
pug_html = pug_html + "\u003Cspan class=\"recoil-x pre-slash\"\u003E" + (pug_escape(null == (pug_interp = wpn.recoilxy.x) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cspan class=\"recoil-y\"\u003E" + (pug_escape(null == (pug_interp = wpn.recoilxy.y) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
}
pug_html = pug_html + "\u003C\u002Ftd\u003E\u003Ctd class=\"weapon ergonomics\"\u003E" + (pug_escape(null == (pug_interp = wpn.ergonomics) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
}
if (!hideHeaders.damage) {
if (wpn.damage) {
pug_mixins["damagesRow"](wpn.damage, { explosive: !!wpn.explosion, apCount: 1, effectsCount: 1 });
}
else {
pug_html = pug_html + "\u003Ctd" + (" class=\"damage-filler\""+pug_attr("colspan", colspans.damages, true, false)) + "\u003E\u003C\u002Ftd\u003E";
}
}
if (!hideHeaders.dps) {
pug_html = pug_html + "\u003Ctd class=\"dps\"\u003E" + (pug_escape(null == (pug_interp = wpn.dps) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"tdps\"\u003E" + (pug_escape(null == (pug_interp = wpn.tdps) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"magdump\"\u003E" + (pug_escape(null == (pug_interp = wpn.magdump) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"totaldump\"\u003E" + (pug_escape(null == (pug_interp = wpn.totaldump) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
}
if (!hideHeaders.dps2) {
pug_html = pug_html + "\u003Ctd class=\"dps2\"\u003E" + (pug_escape(null == (pug_interp = wpn.dps2) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"tdps2\"\u003E" + (pug_escape(null == (pug_interp = wpn.tdps2) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"magdump2\"\u003E" + (pug_escape(null == (pug_interp = wpn.magdump2) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"totaldump2\"\u003E" + (pug_escape(null == (pug_interp = wpn.totaldump2) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
}
if (!hideHeaders.projectile) {
if (wpn.projectile) {
pug_mixins["projectilesRow"](wpn.projectile);
}
else
if (wpn.explosion) {
pug_mixins["explosionsStubRow"](wpn.explosion);
}
else
if (wpn.arc) {
pug_mixins["arcsStubRow"](wpn.arc);
}
else
if (wpn.beam) {
pug_mixins["beamsStubRow"](wpn.beam);
}
else {
pug_html = pug_html + "\u003Ctd" + (" class=\"projectile-filler\""+pug_attr("colspan", colspans.projectiles, true, false)) + "\u003E\u003C\u002Ftd\u003E";
}
}
};
pug_mixins["stratagemsHeader"] = pug_interp = function(opts = {}){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cth" + (" class=\"stratagem stratcode\""+pug_attr("title", t('table.th.strat', 'stratcode'), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = t('table.th.strat.label', 'stratcode')) ? "" : pug_interp)) + "\u003C\u002Fth\u003E\u003Cth" + (" class=\"stratagem category\""+pug_attr("title", t('table.th.strat', 'category'), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = t('table.th.strat.label', 'category')) ? "" : pug_interp)) + "\u003C\u002Fth\u003E\u003Cth" + (" class=\"stratagem name\""+pug_attr("title", t('table.th.strat', 'name'), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = t('table.th.strat.label', 'name')) ? "" : pug_interp)) + "\u003C\u002Fth\u003E\u003Cth" + (" class=\"stratagem calltime\""+pug_attr("title", t('table.th.strat', 'calltime'), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = t('table.th.strat.label', 'calltime')) ? "" : pug_interp)) + "\u003C\u002Fth\u003E\u003Cth" + (" class=\"stratagem cooldown\""+pug_attr("title", t('table.th.strat', 'cooldown'), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = t('table.th.strat.label', 'cooldown')) ? "" : pug_interp)) + "\u003C\u002Fth\u003E\u003Cth" + (" class=\"stratagem uses\""+pug_attr("title", t('table.th.strat', 'uses'), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = t('table.th.strat.label', 'uses')) ? "" : pug_interp)) + "\u003C\u002Fth\u003E\u003Cth" + (" class=\"stratagem health\""+pug_attr("title", t('table.th.strat', 'health'), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = t('table.th.strat.label', 'health')) ? "" : pug_interp)) + "\u003C\u002Fth\u003E\u003Cth" + (" class=\"stratagem armor\""+pug_attr("title", t('table.th.strat', 'armor'), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = t('table.th.strat.label', 'armor')) ? "" : pug_interp)) + "\u003C\u002Fth\u003E\u003Cth" + (" class=\"stratagem rpm\""+pug_attr("title", t('table.th.strat', 'rpm'), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = t('table.th.strat.label', 'rpm')) ? "" : pug_interp)) + "\u003C\u002Fth\u003E\u003Cth" + (" class=\"stratagem cap\""+pug_attr("title", t('table.th.strat', 'cap'), true, false)+" colspan=\"2\"") + "\u003E" + (pug_escape(null == (pug_interp = t('table.th.strat.label', 'cap')) ? "" : pug_interp)) + "\u003C\u002Fth\u003E\u003Cth" + (" class=\"stratagem damage\""+pug_attr("title", t('table.th.dmg', 'dmgs3'), true, false)+" colspan=\"3\"") + "\u003E" + (pug_escape(null == (pug_interp = t('table.th.dmg.label', 'dmgs3')) ? "" : pug_interp)) + "\u003C\u002Fth\u003E\u003Cth" + (" class=\"stratagem shotdmg2\""+pug_attr("title", t('table.th.dmg', 'dmg2'), true, false)) + "\u003E\u003Csub\u003E" + (pug_escape(null == (pug_interp = t('table.th.wpn.label.sub', 'dmg2')) ? "" : pug_interp)) + "\u003C\u002Fsub\u003E\u003C\u002Fth\u003E\u003Cth" + (" class=\"damage ap\""+pug_attr("title", t('table.th.dmg', 'ap'), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = t('table.th.dmg.label', 'ap')) ? "" : pug_interp)) + "\u003C\u002Fth\u003E";
pug_mixins["damagesHeader"]({ apCount: 1, effectsCount: 1 });
pug_mixins["explosionsHeader"]({});
};
pug_mixins["stratagemsRow"] = pug_interp = function(obj, opts = {}){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Ctd class=\"stratagem stratcode\"\u003E\u003Cdiv class=\"arrows\"\u003E" + (pug_escape(null == (pug_interp = obj.arrows) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Ftd\u003E";
if (obj.parent) {
pug_html = pug_html + "\u003Ctd class=\"inheritance\"\u003E└\u003C\u002Ftd\u003E";
}
else {
pug_html = pug_html + "\u003Ctd" + (pug_attr("class", pug_classes(["stratagem","category",obj.category], [false,false,true]), false, false)+pug_attr("title", t('strat.category.full', obj.category), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = t('strat.category.label', obj.category)) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
}
pug_html = pug_html + "\u003Ctd" + (pug_attr("class", pug_classes(["stratagem","name",`name-${obj.category || obj.type}`], [false,false,true]), false, false)) + "\u003E\u003Ca" + (pug_attr("href", wikiLink(obj), true, false)+" target=\"_blank\"") + "\u003E" + (pug_escape(null == (pug_interp = obj.name) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Ftd\u003E\u003Ctd class=\"stratagem calltime\"\u003E" + (pug_escape(null == (pug_interp = obj.calltime) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"stratagem cooldown\"\u003E" + (pug_escape(null == (pug_interp = obj.cooldown) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"stratagem uses\"\u003E" + (pug_escape(null == (pug_interp = obj.uses || obj.eaglestock) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"stratagem health\"\u003E" + (pug_escape(null == (pug_interp = obj.health) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd" + (pug_attr("class", pug_classes(["stratagem","armor",`ap-${obj.armor}`], [false,false,true]), false, false)) + "\u003E" + (pug_escape(null == (pug_interp = obj.armor) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"stratagem rpm\"\u003E";
if (obj.beam) {
pug_html = pug_html + "\u003Cspan class=\"rpm-laser\"\u003EBeam\u003C\u002Fspan\u003E";
}
else {
pug_html = pug_html + "\u003Cspan class=\"rpm-main\"\u003E" + (pug_escape(null == (pug_interp = obj.rpm) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
}
pug_html = pug_html + "\u003C\u002Ftd\u003E\u003Ctd class=\"stratagem cap\"\u003E";
if (obj.salvos) {
pug_html = pug_html + "\u003Cspan class=\"salvos\"\u003E" + (pug_escape(null == (pug_interp = obj.salvos) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
}
pug_html = pug_html + "\u003Cspan class=\"strat-cap\"\u003E" + (pug_escape(null == (pug_interp = obj.cap || obj.limit) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Ftd\u003E\u003Ctd class=\"stratagem capextra\"\u003E";
if (obj.limit) {
pug_html = pug_html + "\u003Cspan class=\"cap-limit\"\u003Es\u003C\u002Fspan\u003E";
}
pug_html = pug_html + "\u003C\u002Ftd\u003E";
if (obj.shield) {
pug_mixins["shieldRow"](obj);
}
else {
pug_mixins["weaponDamageRow"](obj);
pug_mixins["damagesRow"](obj.damage || {}, { apCount: 1, effectsCount: 1 });
pug_mixins["explosionsRow"](obj.explosion || {});
}
};
pug_mixins["shieldRow"] = pug_interp = function(obj){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Ctd" + (" class=\"stratagem label\""+pug_attr("title", t('table.th.strat', 'shield', 'Shield Health, Regen, Delay, Delay After Breaking, Radius'), true, false)+" colspan=\"2\"") + "\u003E" + (pug_escape(null == (pug_interp = t('table.td.aoe.label', 'shield', 'Shield')) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"stratagem shield stub\"\u003E" + (pug_escape(null == (pug_interp = obj.shield) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"stratagem shield stub shieldregen\" colspan=\"2\"\u003E" + (pug_escape(null == (pug_interp = obj.shieldregen) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"stratagem shielddelay time stub\"\u003E" + (pug_escape(null == (pug_interp = obj.shielddelay) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"stratagem shieldbreakdelay time stub\"\u003E" + (pug_escape(null == (pug_interp = obj.shieldbreakdelay) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"stratagem shieldradius length\" colspan=\"2\"\u003E" + (pug_escape(null == (pug_interp = obj.shieldradius) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"stratagem shield padding\" colspan=\"3\"\u003E\u003C\u002Ftd\u003E";
};
pug_mixins["projectilesHeader"] = pug_interp = function(opts = {}){
var block = (this && this.block), attributes = (this && this.attributes) || {};
if (opts.full) {
pug_html = pug_html + "\u003Cth" + (" class=\"projectile idx\""+pug_attr("title", t('table.th.prj', 'idx', 'Internal order'), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = t('table.th.prj.label', 'idx')) ? "" : pug_interp)) + "\u003C\u002Fth\u003E\u003Cth" + (" class=\"projectile id\""+pug_attr("title", t('table.th.prj', 'id', 'ID of projectile data (hex)'), true, false)) + "\u003E\u003Csup\u003E" + (pug_escape(null == (pug_interp = t('table.th.prj.label.sup', 'id')) ? "" : pug_interp)) + "\u003C\u002Fsup\u003E\u003Csub\u003E" + (pug_escape(null == (pug_interp = t('table.th.prj.label.sub', 'id')) ? "" : pug_interp)) + "\u003C\u002Fsub\u003E\u003C\u002Fth\u003E\u003Cth" + (" class=\"projectile name\""+pug_attr("title", t('table.th.prj', 'name', 'Translated name of projectile'), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = t('table.th.prj.label', 'name', 'Name')) ? "" : pug_interp)) + "\u003C\u002Fth\u003E\u003Cth" + (" class=\"projectile damageid\""+pug_attr("title", t('table.th.prj', 'damageid', 'ID of damage data used (hex)'), true, false)) + "\u003E\u003Csup\u003E" + (pug_escape(null == (pug_interp = t('table.th.prj.label.sup', 'damageid')) ? "" : pug_interp)) + "\u003C\u002Fsup\u003E\u003Csub\u003E" + (pug_escape(null == (pug_interp = t('table.th.prj.label.sub', 'damageid')) ? "" : pug_interp)) + "\u003C\u002Fsub\u003E\u003C\u002Fth\u003E\u003Cth" + (" class=\"projectile pellets\""+pug_attr("title", t('table.th.prj', 'pellets', 'Pellet Count'), true, false)) + "\u003E\u003C\u002Fth\u003E";
}
else
if (showIds) {
pug_html = pug_html + "\u003Cth" + (" class=\"projectile id\""+pug_attr("title", t('table.th.prj2', 'id', 'ID of medium (projectile or explosion data) (hex)'), true, false)) + "\u003E\u003Csup\u003E" + (pug_escape(null == (pug_interp = t('table.th.prj2.label.sup', 'id', 'ID')) ? "" : pug_interp)) + "\u003C\u002Fsup\u003E\u003Csub\u003E" + (pug_escape(null == (pug_interp = t('table.th.prj2.label.sub', 'id', 'm')) ? "" : pug_interp)) + "\u003C\u002Fsub\u003E\u003C\u002Fth\u003E";
}
pug_html = pug_html + "\u003Cth" + (" class=\"projectile caliber\""+pug_attr("title", t('table.th.prj', 'caliber', 'Caliber (mm)'), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = t('table.th.prj.label', 'caliber', 'Cal')) ? "" : pug_interp)) + "\u003C\u002Fth\u003E\u003Cth" + (" class=\"projectile velocity\""+pug_attr("title", t('table.th.prj', 'velocity', 'Muzzle Velocity (m/s)'), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = t('table.th.prj.label', 'velocity', 'v')) ? "" : pug_interp)) + "\u003C\u002Fth\u003E\u003Cth" + (" class=\"projectile mass\""+pug_attr("title", t('table.th.prj', 'mass', 'Mass (grams)'), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = t('table.th.prj.label', 'mass', 'm')) ? "" : pug_interp)) + "\u003C\u002Fth\u003E\u003Cth" + (" class=\"projectile drag\""+pug_attr("title", t('table.th.prj', 'drag', 'Drag Coefficient Multiplier'), true, false)) + "\u003E\u003Csup\u003E" + (pug_escape(null == (pug_interp = t('table.th.prj.label.sup', 'drag', 'c')) ? "" : pug_interp)) + "\u003C\u002Fsup\u003E\u003Csub\u003E" + (pug_escape(null == (pug_interp = t('table.th.prj.label.sub', 'drag', 'd')) ? "" : pug_interp)) + "\u003C\u002Fsub\u003E\u003C\u002Fth\u003E\u003Cth" + (" class=\"projectile gravity\""+pug_attr("title", t('table.th.prj', 'gravity', 'Gravity Multiplier'), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = t('table.th.prj.label', 'gravity', 'g')) ? "" : pug_interp)) + "\u003C\u002Fth\u003E\u003Cth" + (" class=\"projectile penslow\""+pug_attr("title", t('table.th.prj', 'penslow', 'Penetration Slowdown'), true, false)) + "\u003E\u003Csup\u003E" + (pug_escape(null == (pug_interp = t('table.th.prj.label.sup', 'penslow', 'sl')) ? "" : pug_interp)) + "\u003C\u002Fsup\u003E\u003Csub\u003E" + (pug_escape(null == (pug_interp = t('table.th.prj.label.sub', 'penslow', 'p')) ? "" : pug_interp)) + "\u003C\u002Fsub\u003E\u003C\u002Fth\u003E\u003Cth" + (" class=\"projectile lifetime\""+pug_attr("title", t('table.th.prj', 'lifetime', 'Lifetime (s)'), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = t('table.th.prj.label', 'lifetime', 'l')) ? "" : pug_interp)) + "\u003C\u002Fth\u003E\u003Cth" + (" class=\"projectile xangle\""+pug_attr("title", t('table.th.prj', 'xangle'), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = t('table.th.prj.label', 'xangle')) ? "" : pug_interp)) + "\u003C\u002Fth\u003E\u003Cth" + (" class=\"projectile xproximity\""+pug_attr("title", t('table.th.prj', 'xproximity'), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = t('table.th.prj.label', 'xproximity')) ? "" : pug_interp)) + "\u003C\u002Fth\u003E";
if (opts.full) {
pug_html = pug_html + "\u003Cth" + (" class=\"projectile ximpactid\""+pug_attr("title", t('table.th.prj', 'ximpactid', 'ID of explosion on impact (hex)'), true, false)) + "\u003E\u003Csup\u003E" + (pug_escape(null == (pug_interp = t('table.th.prj.label.sup', 'ximpactid')) ? "" : pug_interp)) + "\u003C\u002Fsup\u003E\u003Csub\u003E" + (pug_escape(null == (pug_interp = t('table.th.prj.label.sub', 'ximpactid')) ? "" : pug_interp)) + "\u003C\u002Fsub\u003E\u003C\u002Fth\u003E\u003Cth" + (" class=\"projectile xdelay\""+pug_attr("title", t('table.th.prj', 'xdelay'), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = t('table.th.prj.label', 'xdelay')) ? "" : pug_interp)) + "\u003C\u002Fth\u003E\u003Cth" + (" class=\"projectile xdelayid\""+pug_attr("title", t('table.th.prj', 'xdelayid', 'ID of explosion on delay (hex)'), true, false)) + "\u003E\u003Csup\u003E" + (pug_escape(null == (pug_interp = t('table.th.prj.label.sup', 'xdelayid')) ? "" : pug_interp)) + "\u003C\u002Fsup\u003E\u003Csub\u003E" + (pug_escape(null == (pug_interp = t('table.th.prj.label.sub', 'xdelayid')) ? "" : pug_interp)) + "\u003C\u002Fsub\u003E\u003C\u002Fth\u003E";
}
if (!opts.full) {
pug_html = pug_html + "\u003Cth" + (" class=\"projectile name\""+pug_attr("title", t('table.th.prj', 'name', 'Translated name of projectile'), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = t('table.th.prj.label', 'name', 'Projectile')) ? "" : pug_interp)) + "\u003C\u002Fth\u003E";
}
};
pug_mixins["projectilesRow"] = pug_interp = function(prj, opts = {}){
var block = (this && this.block), attributes = (this && this.attributes) || {};
if (opts.full) {
pug_html = pug_html + "\u003Ctd class=\"projectile idx\"\u003E" + (pug_escape(null == (pug_interp = prj.idx) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"projectile id\"\u003E" + (pug_escape(null == (pug_interp = id(prj)) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"projectile name\"\u003E" + (pug_escape(null == (pug_interp = prj.name) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"projectile damageid\"\u003E" + (pug_escape(null == (pug_interp = id(prj, 'damageid')) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd" + (pug_attr("class", pug_classes(["projectile","pellets",{ muted: prj.pellets < 2 }], [false,false,true]), false, false)) + "\u003E" + (pug_escape(null == (pug_interp = prj.pellets) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
}
else
if (showIds) {
pug_html = pug_html + "\u003Ctd class=\"projectile id\"\u003E" + (pug_escape(null == (pug_interp = id(prj)) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
}
pug_html = pug_html + "\u003Ctd class=\"projectile caliber\"\u003E" + (pug_escape(null == (pug_interp = prj.caliber) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"projectile velocity\"\u003E" + (pug_escape(null == (pug_interp = prj.velocity) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"projectile mass\"\u003E" + (pug_escape(null == (pug_interp = prj.mass) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"projectile drag\"\u003E" + (pug_escape(null == (pug_interp = prj.drag) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"projectile gravity\"\u003E" + (pug_escape(null == (pug_interp = prj.gravity) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"projectile penslow\"\u003E" + (pug_escape(null == (pug_interp = prj.penslow) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd" + (pug_attr("class", pug_classes(["projectile","lifetime",{ muted: !prj.lifetime }], [false,false,true]), false, false)) + "\u003E";
if (prj.liferandom) {
pug_html = pug_html + "\u003Cspan class=\"liferandom\"\u003E" + (pug_escape(null == (pug_interp = prj.liferandom) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
}
pug_html = pug_html + "\u003Cspan class=\"lifetime\"\u003E" + (pug_escape(null == (pug_interp = prj.lifetime) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Ftd\u003E\u003Ctd" + (pug_attr("class", pug_classes(["projectile","xangle",{ muted: !prj.xangle }], [false,false,true]), false, false)) + "\u003E" + (pug_escape(null == (pug_interp = `${prj.xangle}°`) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd" + (pug_attr("class", pug_classes(["projectile","xproximity",{ muted: !prj.xproximity }], [false,false,true]), false, false)) + "\u003E" + (pug_escape(null == (pug_interp = prj.xproximity) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
if (opts.full) {
pug_html = pug_html + "\u003Ctd class=\"projectile ximpactid\"\u003E" + (pug_escape(null == (pug_interp = id(prj, 'ximpactid')) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd" + (pug_attr("class", pug_classes(["projectile","xdelay",{ muted: !prj.xdelay }], [false,false,true]), false, false)) + "\u003E" + (pug_escape(null == (pug_interp = prj.xdelay) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"projectile xdelayid\"\u003E" + (pug_escape(null == (pug_interp = id(prj, 'xdelayid')) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
}
if (!opts.full) {
pug_html = pug_html + "\u003Ctd class=\"projectile name\"\u003E" + (pug_escape(null == (pug_interp = prj.name) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
}
};
pug_mixins["explosionsHeader"] = pug_interp = function(opts = {}){
var block = (this && this.block), attributes = (this && this.attributes) || {};
if (opts.full) {
pug_html = pug_html + "\u003Cth" + (" class=\"explosion idx\""+pug_attr("title", t('table.th.aoe', 'idx', 'Internal order'), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = t('table.th.aoe.label', 'idx')) ? "" : pug_interp)) + "\u003C\u002Fth\u003E\u003Cth" + (" class=\"explosion id\""+pug_attr("title", t('table.th.aoe', 'id', 'ID of explosion data (hex)'), true, false)) + "\u003E\u003Csup\u003E" + (pug_escape(null == (pug_interp = t('table.th.aoe.label.sup', 'id', 'ID')) ? "" : pug_interp)) + "\u003C\u002Fsup\u003E\u003Csub\u003E" + (pug_escape(null == (pug_interp = t('table.th.aoe.label.sub', 'id', 'x')) ? "" : pug_interp)) + "\u003C\u002Fsub\u003E\u003C\u002Fth\u003E\u003Cth" + (" class=\"explosion name\""+pug_attr("title", t('table.th.aoe', 'name', 'Translated name of AoE source'), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = t('table.th.aoe.label', 'name', 'Explosion')) ? "" : pug_interp)) + "\u003C\u002Fth\u003E\u003Cth" + (" class=\"explosion damageid\""+pug_attr("title", t('table.th.aoe', 'damageid', 'ID of damage data used (hex)'), true, false)) + "\u003E\u003Csup\u003E" + (pug_escape(null == (pug_interp = t('table.th.aoe.label.sup', 'damageid')) ? "" : pug_interp)) + "\u003C\u002Fsup\u003E\u003Csub\u003E" + (pug_escape(null == (pug_interp = t('table.th.aoe.label.sub', 'damageid')) ? "" : pug_interp)) + "\u003C\u002Fsub\u003E\u003C\u002Fth\u003E";
}
pug_html = pug_html + "\u003Cth" + (" class=\"explosion r1\""+pug_attr("title", t('table.th.aoe', 'r1', 'Inner Radius (m)'), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = t('table.th.aoe.label', 'r1')) ? "" : pug_interp)) + "\u003C\u002Fth\u003E\u003Cth" + (" class=\"explosion r2\""+pug_attr("title", t('table.th.aoe', 'r2', 'Outer Radius (m)'), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = t('table.th.aoe.label', 'r2')) ? "" : pug_interp)) + "\u003C\u002Fth\u003E\u003Cth" + (" class=\"explosion r3\""+pug_attr("title", t('table.th.aoe', 'r3', 'Stagger Radius (m)'), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = t('table.th.aoe.label', 'r3')) ? "" : pug_interp)) + "\u003C\u002Fth\u003E\u003Cth" + (" class=\"explosion angle\""+pug_attr("title", t('table.th.aoe', 'angle', 'Cone Angle (°)'), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = t('table.th.aoe.label', 'angle')) ? "" : pug_interp)) + "\u003C\u002Fth\u003E";
if (opts.full) {
pug_html = pug_html + "\u003Cth" + (" class=\"explosion shrapnel\""+pug_attr("title", t('table.th.aoe', 'shrapnel', 'Amount of Shrapnel Released'), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = t('table.th.aoe.label', 'shrapnel')) ? "" : pug_interp)) + "\u003C\u002Fth\u003E\u003Cth" + (" class=\"explosion shrapnelid\""+pug_attr("title", t('table.th.aoe', 'shrapnelid', 'ID of shrapnel projectile used (hex)'), true, false)) + "\u003E\u003Csup\u003E" + (pug_escape(null == (pug_interp = t('table.th.aoe.label.sup', 'shrapnelid')) ? "" : pug_interp)) + "\u003C\u002Fsup\u003E\u003Csub\u003E" + (pug_escape(null == (pug_interp = t('table.th.aoe.label.sub', 'shrapnelid')) ? "" : pug_interp)) + "\u003C\u002Fsub\u003E\u003C\u002Fth\u003E";
}
};
pug_mixins["explosionsStubRow"] = pug_interp = function(exp, opts = {}){
var block = (this && this.block), attributes = (this && this.attributes) || {};
if (showIds) {
pug_html = pug_html + "\u003Ctd class=\"explosion id\"\u003E" + (pug_escape(null == (pug_interp = id(exp)) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
}
pug_html = pug_html + "\u003Ctd" + (" class=\"explosion label\""+pug_attr("title", t('table.th.aoe', 'radius', 'Radius Inner/Outer/Non-Damage (m)'), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = t('table.td.aoe.label', 'radius', 'Radius')) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"explosion filler\"\u003E\u003C\u002Ftd\u003E\u003Ctd class=\"explosion radius stub r1\"\u003E" + (pug_escape(null == (pug_interp = exp.r1.toFixed(1)) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"explosion radius stub r2 rx\"\u003E" + (pug_escape(null == (pug_interp = exp.r2.toFixed(1)) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"explosion radius stub r3 rx\"\u003E" + (pug_escape(null == (pug_interp = exp.r3.toFixed(1)) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd" + (pug_attr("class", pug_classes(["explosion","angle","stub",{ muted: !exp.angle }], [false,false,false,true]), false, false)) + "\u003E" + (pug_escape(null == (pug_interp = `${exp.angle}°`) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"explosion filler\" colspan=\"3\"\u003E\u003C\u002Ftd\u003E\u003Ctd class=\"explosion name stub\"\u003E" + (pug_escape(null == (pug_interp = exp.name) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
};
pug_mixins["explosionsRow"] = pug_interp = function(exp, opts = {}){
var block = (this && this.block), attributes = (this && this.attributes) || {};
if (opts.full) {
pug_html = pug_html + "\u003Ctd class=\"explosion idx\"\u003E" + (pug_escape(null == (pug_interp = exp.idx) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
}
if (opts.full || showIds) {
pug_html = pug_html + "\u003Ctd class=\"explosion id\"\u003E" + (pug_escape(null == (pug_interp = id(exp)) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
}
if (opts.full) {
pug_html = pug_html + "\u003Ctd class=\"explosion name\"\u003E" + (pug_escape(null == (pug_interp = exp.name) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"explosion damageid\"\u003E" + (pug_escape(null == (pug_interp = id(exp, 'damageid')) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
}
pug_html = pug_html + "\u003Ctd class=\"explosion radius r1\"\u003E" + (pug_escape(null == (pug_interp = exp.r1) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"explosion radius r2 rx\"\u003E" + (pug_escape(null == (pug_interp = exp.r2) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"explosion radius r3 rx\"\u003E" + (pug_escape(null == (pug_interp = exp.r3) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd" + (pug_attr("class", pug_classes(["explosion","angle",{ muted: !exp.angle }], [false,false,true]), false, false)) + "\u003E";
if (exp.angle != null) {
pug_html = pug_html + "\u003Cspan class=\"explosion angle\"\u003E" + (pug_escape(null == (pug_interp = `${exp.angle}°`) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
}
pug_html = pug_html + "\u003C\u002Ftd\u003E";
if (opts.full) {
pug_html = pug_html + "\u003Ctd" + (pug_attr("class", pug_classes(["explosion","shrapnel",{ muted: !exp.shrapnel }], [false,false,true]), false, false)) + "\u003E" + (pug_escape(null == (pug_interp = exp.shrapnel) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd" + (pug_attr("class", pug_classes(["explosion","projectileid",{ muted: !exp.projectileid }], [false,false,true]), false, false)) + "\u003E" + (pug_escape(null == (pug_interp = id(exp, 'projectileid')) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
}
};
pug_mixins["beamsHeader"] = pug_interp = function(opts = {}){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cth" + (" class=\"beam idx\""+pug_attr("title", t('table.th.beam', 'idx', 'Internal order'), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = t('table.th.beam.label', 'idx')) ? "" : pug_interp)) + "\u003C\u002Fth\u003E\u003Cth" + (" class=\"beam id\""+pug_attr("title", t('table.th.beam', 'id', 'ID of beam data (hex)'), true, false)) + "\u003E\u003Csup\u003E" + (pug_escape(null == (pug_interp = t('table.th.beam.label.sup', 'id', 'ID')) ? "" : pug_interp)) + "\u003C\u002Fsup\u003E\u003Csub\u003E" + (pug_escape(null == (pug_interp = t('table.th.beam.label.sub', 'id', 'b')) ? "" : pug_interp)) + "\u003C\u002Fsub\u003E\u003C\u002Fth\u003E\u003Cth" + (" class=\"beam name\""+pug_attr("title", t('table.th.beam', 'name', 'Translated name of beam'), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = t('table.th.beam.label', 'name', 'beam')) ? "" : pug_interp)) + "\u003C\u002Fth\u003E\u003Cth" + (" class=\"beam damageid\""+pug_attr("title", t('table.th.beam', 'damageid', 'ID of damage data used (hex)'), true, false)) + "\u003E\u003Csup\u003E" + (pug_escape(null == (pug_interp = t('table.th.beam.label.sup', 'ID')) ? "" : pug_interp)) + "\u003C\u002Fsup\u003E\u003Csub\u003E" + (pug_escape(null == (pug_interp = t('table.th.beam.label.sub', 'dmg')) ? "" : pug_interp)) + "\u003C\u002Fsub\u003E\u003C\u002Fth\u003E\u003Cth" + (" class=\"beam range\""+pug_attr("title", t('table.th.beam', 'range', 'Max range (m)'), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = t('table.th.beam.label', 'range', 'Range')) ? "" : pug_interp)) + "\u003C\u002Fth\u003E";
};
pug_mixins["beamsRow"] = pug_interp = function(beam, opts = {}){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Ctd class=\"beam idx\"\u003E" + (pug_escape(null == (pug_interp = beam.idx) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"beam id\"\u003E" + (pug_escape(null == (pug_interp = id(beam)) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"beam name\"\u003E" + (pug_escape(null == (pug_interp = beam.name) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"beam damageid\"\u003E" + (pug_escape(null == (pug_interp = id(beam, 'damageid')) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"beam range\"\u003E" + (pug_escape(null == (pug_interp = beam.range) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
};
pug_mixins["beamsStubRow"] = pug_interp = function(beam, opts = {}){
var block = (this && this.block), attributes = (this && this.attributes) || {};
if (showIds) {
pug_html = pug_html + "\u003Ctd class=\"beam id\"\u003E" + (pug_escape(null == (pug_interp = id(beam)) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
}
pug_html = pug_html + "\u003Ctd" + (" class=\"beam label\""+pug_attr("title", t('table.th.beam', 'range', 'Beam range (m)'), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = t('table.td.beam.label', 'range', 'Beam')) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"beam range stub\"\u003E" + (pug_escape(null == (pug_interp = beam.range) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"beam filler\" colspan=\"7\"\u003E\u003C\u002Ftd\u003E\u003Ctd class=\"beam name stub\"\u003E" + (pug_escape(null == (pug_interp = beam.name) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
};
pug_mixins["arcsHeader"] = pug_interp = function(opts = {}){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cth" + (" class=\"arc idx\""+pug_attr("title", t('table.th.arc', 'idx', 'Internal order'), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = t('table.th.arc.label', 'idx')) ? "" : pug_interp)) + "\u003C\u002Fth\u003E\u003Cth" + (" class=\"arc id\""+pug_attr("title", t('table.th.arc', 'id', 'ID of arc data (hex)'), true, false)) + "\u003E\u003Csup\u003E" + (pug_escape(null == (pug_interp = t('table.th.arc.label.sup', 'id', 'ID')) ? "" : pug_interp)) + "\u003C\u002Fsup\u003E\u003Csub\u003E" + (pug_escape(null == (pug_interp = t('table.th.arc.label.sub', 'id', 'b')) ? "" : pug_interp)) + "\u003C\u002Fsub\u003E\u003C\u002Fth\u003E\u003Cth" + (" class=\"arc name\""+pug_attr("title", t('table.th.arc', 'name', 'Translated name of arc'), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = t('table.th.arc.label', 'name', 'arc')) ? "" : pug_interp)) + "\u003C\u002Fth\u003E\u003Cth" + (" class=\"arc damageid\""+pug_attr("title", t('table.th.arc', 'damageid', 'ID of damage data used (hex)'), true, false)) + "\u003E\u003Csup\u003E" + (pug_escape(null == (pug_interp = t('table.th.arc.label.sup', 'ID')) ? "" : pug_interp)) + "\u003C\u002Fsup\u003E\u003Csub\u003E" + (pug_escape(null == (pug_interp = t('table.th.arc.label.sub', 'dmg')) ? "" : pug_interp)) + "\u003C\u002Fsub\u003E\u003C\u002Fth\u003E\u003Cth" + (" class=\"arc velocity\""+pug_attr("title", t('table.th.arc', 'velocity', 'Velocity (m/s)'), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = t('table.th.arc.label', 'velocity', 'v')) ? "" : pug_interp)) + "\u003C\u002Fth\u003E\u003Cth" + (" class=\"arc range\""+pug_attr("title", t('table.th.arc', 'range', 'Max range (m)'), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = t('table.th.arc.label', 'range', 'Range')) ? "" : pug_interp)) + "\u003C\u002Fth\u003E\u003Cth" + (" class=\"arc aimangle\""+pug_attr("title", t('table.th.arc', 'aimangle', 'Aim angle (°)'), true, false)) + "\u003E\u003Csup\u003E" + (pug_escape(null == (pug_interp = t('table.th.arc.label.sup', 'aimangle', '∠')) ? "" : pug_interp)) + "\u003C\u002Fsup\u003E\u003Csub\u003E" + (pug_escape(null == (pug_interp = t('table.th.arc.label.sub', 'aimangle', 'aim')) ? "" : pug_interp)) + "\u003C\u002Fsub\u003E\u003C\u002Fth\u003E\u003Cth" + (" class=\"arc chainangle\""+pug_attr("title", t('table.th.arc', 'chainangle', 'Chain angle (°)'), true, false)) + "\u003E\u003Csup\u003E" + (pug_escape(null == (pug_interp = t('table.th.arc.label.sup', 'chainangle', '∠')) ? "" : pug_interp)) + "\u003C\u002Fsup\u003E\u003Csub\u003E" + (pug_escape(null == (pug_interp = t('table.th.arc.label.sub', 'chainangle', 'ch')) ? "" : pug_interp)) + "\u003C\u002Fsub\u003E\u003C\u002Fth\u003E";
};
pug_mixins["arcsRow"] = pug_interp = function(arc, opts = {}){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Ctd class=\"arc idx\"\u003E" + (pug_escape(null == (pug_interp = arc.idx) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"arc id\"\u003E" + (pug_escape(null == (pug_interp = id(arc)) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"arc name\"\u003E" + (pug_escape(null == (pug_interp = arc.name) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"arc damageid\"\u003E" + (pug_escape(null == (pug_interp = id(arc, 'damageid')) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"arc velocity\"\u003E" + (pug_escape(null == (pug_interp = arc.velocity) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"arc range\"\u003E" + (pug_escape(null == (pug_interp = arc.range) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"arc aimangle\"\u003E" + (pug_escape(null == (pug_interp = `${arc.aimangle}°`) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"arc chainangle\"\u003E" + (pug_escape(null == (pug_interp = `${arc.chainangle}°`) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
};
pug_mixins["arcsStubRow"] = pug_interp = function(arc, opts = {}){
var block = (this && this.block), attributes = (this && this.attributes) || {};
if (showIds) {
pug_html = pug_html + "\u003Ctd class=\"arc id\"\u003E" + (pug_escape(null == (pug_interp = id(arc)) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
}
pug_html = pug_html + "\u003Ctd" + (" class=\"arc label\""+pug_attr("title", t('table.td.arc', 'range', 'Arc range (m)'), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = t('table.td.arc.label', 'range', 'Arc')) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"arc velocity stub\"\u003E" + (pug_escape(null == (pug_interp = arc.velocity) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"arc range stub\"\u003E" + (pug_escape(null == (pug_interp = arc.range) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"arc aimangle stub\"\u003E" + (pug_escape(null == (pug_interp = `${arc.aimangle}°`) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"arc chainangle stub\"\u003E" + (pug_escape(null == (pug_interp = `${arc.chainangle}°`) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"arc filler\" colspan=\"4\"\u003E\u003C\u002Ftd\u003E\u003Ctd class=\"arc name stub\"\u003E" + (pug_escape(null == (pug_interp = arc.name) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
};
pug_mixins["damagesHeader"] = pug_interp = function(opts = {}){
var block = (this && this.block), attributes = (this && this.attributes) || {};
if (opts.full && !opts.hideId) {
pug_html = pug_html + "\u003Cth" + (" class=\"damage idx\""+pug_attr("title", t('table.th.dmg', 'idx', 'Internal order'), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = t('table.th.dmg.label', 'idx', '#')) ? "" : pug_interp)) + "\u003C\u002Fth\u003E\u003Cth" + (" class=\"damage id\""+pug_attr("title", t('table.th.dmg', 'id', 'ID of damage data (hex)'), true, false)) + "\u003E\u003Csup\u003E" + (pug_escape(null == (pug_interp = t('table.th.dmg.label.sup', 'id', 'ID')) ? "" : pug_interp)) + "\u003C\u002Fsup\u003E\u003Csub\u003E" + (pug_escape(null == (pug_interp = t('table.th.dmg.label.sub', 'id', 'dmg')) ? "" : pug_interp)) + "\u003C\u002Fsub\u003E\u003C\u002Fth\u003E";
}
if (opts.full && !opts.hideName) {
pug_html = pug_html + "\u003Cth" + (" class=\"damage name\""+pug_attr("title", t('table.th.dmg', 'name', 'Translated name of damage source'), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = t('table.th.dmg.label', 'name', 'Name')) ? "" : pug_interp)) + "\u003C\u002Fth\u003E";
}
if (opts.full) {
pug_html = pug_html + "\u003Cth" + (" class=\"damage type\""+pug_attr("title", t('table.th.dmg', 'type'), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = t('table.th.dmg.label', 'type')) ? "" : pug_interp)) + "\u003C\u002Fth\u003E\u003Cth" + (" class=\"damage dmg\""+pug_attr("title", t('table.th.dmg', 'dmg'), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = t('table.th.dmg.label', 'dmg')) ? "" : pug_interp)) + "\u003C\u002Fth\u003E\u003Cth" + (" class=\"damage dmg2\""+pug_attr("title", t('table.th.dmg', 'dmg2'), true, false)) + "\u003E\u003Csub\u003E" + (pug_escape(null == (pug_interp = t('table.th.dmg.label.sub', 'dmg2')) ? "" : pug_interp)) + "\u003C\u002Fsub\u003E\u003C\u002Fth\u003E";
const apCount = opts.apCount || 4
pug_html = pug_html + "\u003Cth" + (" class=\"damage ap\""+pug_attr("title", t('table.th.dmg', 'ap', 'Armor Penetration, varies by context'), true, false)+pug_attr("colspan", apCount, true, false)) + "\u003E" + (pug_escape(null == (pug_interp = t('table.th.dmg.label', 'ap', 'AP')) ? "" : pug_interp)) + "\u003C\u002Fth\u003E";
}
pug_html = pug_html + "\u003Cth" + (" class=\"damage demo\""+pug_attr("title", t('table.th.dmg', 'demo', 'Demolition Force'), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = t('table.th.dmg.label', 'demo', 'DF')) ? "" : pug_interp)) + "\u003C\u002Fth\u003E\u003Cth" + (" class=\"damage stun\""+pug_attr("title", t('table.th.dmg', 'stun', 'Stagger Value'), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = t('table.th.dmg.label', 'stun', 'SV')) ? "" : pug_interp)) + "\u003C\u002Fth\u003E\u003Cth" + (" class=\"damage push\""+pug_attr("title", t('table.th.dmg', 'push', 'Push Force'), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = t('table.th.dmg.label', 'push', 'PF')) ? "" : pug_interp)) + "\u003C\u002Fth\u003E";
const effectsCount = opts.effectsCount || 4
pug_html = pug_html + "\u003Cth" + (" class=\"damage effect\""+pug_attr("title", t('table.th.dmg', 'effects8', 'Status Effects'), true, false)+pug_attr("colspan", effectsCount * 2, true, false)) + "\u003E" + (pug_escape(null == (pug_interp = t('table.th.dmg.label', 'effects8', 'FX')) ? "" : pug_interp)) + "\u003C\u002Fth\u003E";
};
pug_mixins["damagesRow"] = pug_interp = function(dmg, opts = {}){
var block = (this && this.block), attributes = (this && this.attributes) || {};
let i
if (opts.full && !opts.hideId) {
pug_html = pug_html + "\u003Ctd class=\"damage idx\"\u003E" + (pug_escape(null == (pug_interp = dmg.idx) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"damage id\"\u003E" + (pug_escape(null == (pug_interp = id(dmg)) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
}
if (opts.full && !opts.hideName) {
pug_html = pug_html + "\u003Ctd class=\"damage name\"\u003E" + (pug_escape(null == (pug_interp = dmg.name) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
}
if (opts.full) {
pug_html = pug_html + "\u003Ctd" + (pug_attr("class", pug_classes(["damage","dmgtype",{muted: !dmg.type }], [false,false,true]), false, false)+pug_attr("title", t('dmg.types.full', dmg.type), true, false)) + "\u003E";
if (dmg.type) {
var el = element(dmg)
pug_html = pug_html + "\u003Cspan" + (" class=\"dmgtype\""+pug_attr("title", t('dmg.types.full', el), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = t('dmg.types', el)) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
}
pug_html = pug_html + "\u003C\u002Ftd\u003E\u003Ctd" + (pug_attr("class", pug_classes(["damage","dmg",{ xdmg: opts.explosive }], [false,false,true]), false, false)) + "\u003E" + (pug_escape(null == (pug_interp = dmg.dmg) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd" + (pug_attr("class", pug_classes(["damage","dmg2",{ xdmg: opts.explosive }], [false,false,true]), false, false)) + "\u003E" + (pug_escape(null == (pug_interp = dmg.dmg2) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
i = 0
while (i < (opts.apCount || 4)) {
i++
var ap = dmg[`ap${i}`]
pug_html = pug_html + "\u003Ctd" + (pug_attr("class", pug_classes(["damage","ap",`ap-${ap} ap-list-${i}`], [false,false,true]), false, false)) + "\u003E" + (pug_escape(null == (pug_interp = ap) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
}
}
pug_html = pug_html + "\u003Ctd" + (pug_attr("class", pug_classes(["damage","demo",{ xdemo: opts.explosive }], [false,false,true]), false, false)) + "\u003E" + (pug_escape(null == (pug_interp = dmg.demo) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd" + (pug_attr("class", pug_classes(["damage","stun",{ xstun: opts.explosive }], [false,false,true]), false, false)) + "\u003E" + (pug_escape(null == (pug_interp = dmg.stun) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd" + (pug_attr("class", pug_classes(["damage","push",{ xpush: opts.explosive }], [false,false,true]), false, false)) + "\u003E" + (pug_escape(null == (pug_interp = dmg.push) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
i = 0
while (i < (opts.effectsCount || 4)) {
i++
var fx = effect(dmg, i)
pug_html = pug_html + "\u003Ctd" + (pug_attr("class", pug_classes(["damage","effect",{ [`effect${i}`]: true, muted: !fx.id }], [false,false,true]), false, false)+pug_attr("title", t('dmg.effects.full', fx.name), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = t('dmg.effects', fx.name )) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd" + (pug_attr("class", pug_classes(["damage","effect-param",{muted: !fx.id}], [false,false,true]), false, false)) + "\u003E" + (pug_escape(null == (pug_interp = fx.param) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
}
};
pug_mixins["main"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cnav class=\"links\"\u003E\u003Cul\u003E\u003Cli\u003E\u003Ca href=\"\u002F\"\u003E" + (pug_escape(null == (pug_interp = t('nav.links', 'edf', 'Earth Defense Force')) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli class=\"nav-selected\"\u003E\u003Ca href=\"\u002Fhelldivers-2\"\u003E" + (pug_escape(null == (pug_interp = t('nav.links', 'self', 'Helldivers 2')) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli\u003E|\u003C\u002Fli\u003E\u003Cli\u003E\u003Ca href=\"https:\u002F\u002Fhelldivers.wiki.gg\"\u003E" + (pug_escape(null == (pug_interp = t('nav.links', 'wiki', 'Helldivers Wiki')) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Ca href=\"https:\u002F\u002Fhelldivers.io\u002F\"\u003E" + (pug_escape(null == (pug_interp = t('nav.links', 'io', 'helldivers.io')) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli class=\"spacer\"\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Cul class=\"langs\"\u003E";
// iterate langs
;(function(){
  var $$obj = langs;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var l = $$obj[pug_index0];
pug_html = pug_html + "\u003Cli" + (" class=\"lang\""+pug_attr("onclick", `switchLang('${l}')`, true, false)+pug_attr("title", t('nav.langs.full', l), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = l) ? "" : pug_interp)) + "\u003C\u002Fli\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var l = $$obj[pug_index0];
pug_html = pug_html + "\u003Cli" + (" class=\"lang\""+pug_attr("onclick", `switchLang('${l}')`, true, false)+pug_attr("title", t('nav.langs.full', l), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = l) ? "" : pug_interp)) + "\u003C\u002Fli\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fnav\u003E\u003Cheader class=\"menu\"\u003E\u003Cdiv class=\"filters\"\u003E\u003Cdiv class=\"filter-row\"\u003E\u003Cul class=\"scopes\"\u003E";
// iterate scopes
;(function(){
  var $$obj = scopes;
  if ('number' == typeof $$obj.length) {
      for (var pug_index1 = 0, $$l = $$obj.length; pug_index1 < $$l; pug_index1++) {
        var scope = $$obj[pug_index1];
pug_html = pug_html + "\u003Cli" + (pug_attr("class", pug_classes(["scope",scopeClass(scope)], [false,true]), false, false)+pug_attr("title", t('nav.scopes.full', scope), true, false)+pug_attr("onclick", `switchScope('${scope}')`, true, false)) + "\u003E" + (pug_escape(null == (pug_interp = t('nav.scopes.label', scope)) ? "" : pug_interp)) + "\u003C\u002Fli\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index1 in $$obj) {
      $$l++;
      var scope = $$obj[pug_index1];
pug_html = pug_html + "\u003Cli" + (pug_attr("class", pug_classes(["scope",scopeClass(scope)], [false,true]), false, false)+pug_attr("title", t('nav.scopes.full', scope), true, false)+pug_attr("onclick", `switchScope('${scope}')`, true, false)) + "\u003E" + (pug_escape(null == (pug_interp = t('nav.scopes.label', scope)) ? "" : pug_interp)) + "\u003C\u002Fli\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E";
if (isWeaponScope) {
pug_html = pug_html + "\u003Cdiv class=\"filter-row\"\u003E\u003Cul class=\"sources\"\u003E";
// iterate sources
;(function(){
  var $$obj = sources;
  if ('number' == typeof $$obj.length) {
      for (var pug_index2 = 0, $$l = $$obj.length; pug_index2 < $$l; pug_index2++) {
        var source = $$obj[pug_index2];
pug_html = pug_html + "\u003Cli" + (pug_attr("class", pug_classes(["source",sourceClass(source)], [false,true]), false, false)+pug_attr("title", t('wpn.source.full', source), true, false)+pug_attr("onclick", `toggleSource('${source}')`, true, false)) + "\u003E" + (pug_escape(null == (pug_interp = t('wpn.source.label', source)) ? "" : pug_interp)) + "\u003C\u002Fli\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index2 in $$obj) {
      $$l++;
      var source = $$obj[pug_index2];
pug_html = pug_html + "\u003Cli" + (pug_attr("class", pug_classes(["source",sourceClass(source)], [false,true]), false, false)+pug_attr("title", t('wpn.source.full', source), true, false)+pug_attr("onclick", `toggleSource('${source}')`, true, false)) + "\u003E" + (pug_escape(null == (pug_interp = t('wpn.source.label', source)) ? "" : pug_interp)) + "\u003C\u002Fli\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"filter-row\"\u003E\u003Cul class=\"categories\"\u003E";
// iterate cats
;(function(){
  var $$obj = cats;
  if ('number' == typeof $$obj.length) {
      for (var pug_index3 = 0, $$l = $$obj.length; pug_index3 < $$l; pug_index3++) {
        var cat = $$obj[pug_index3];
pug_html = pug_html + "\u003Cli" + (pug_attr("class", pug_classes(["category",catClass(cat)], [false,true]), false, false)+pug_attr("title", t('wpn.category.full', cat), true, false)+pug_attr("onclick", `toggleCategory('${cat}')`, true, false)) + "\u003E" + (pug_escape(null == (pug_interp = t('wpn.category.label', cat)) ? "" : pug_interp)) + "\u003C\u002Fli\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index3 in $$obj) {
      $$l++;
      var cat = $$obj[pug_index3];
pug_html = pug_html + "\u003Cli" + (pug_attr("class", pug_classes(["category",catClass(cat)], [false,true]), false, false)+pug_attr("title", t('wpn.category.full', cat), true, false)+pug_attr("onclick", `toggleCategory('${cat}')`, true, false)) + "\u003E" + (pug_escape(null == (pug_interp = t('wpn.category.label', cat)) ? "" : pug_interp)) + "\u003C\u002Fli\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ful\u003E\u003Cdiv class=\"divider\"\u003E|\u003C\u002Fdiv\u003E\u003Cul class=\"colfilters\"\u003E";
// iterate headers
;(function(){
  var $$obj = headers;
  if ('number' == typeof $$obj.length) {
      for (var pug_index4 = 0, $$l = $$obj.length; pug_index4 < $$l; pug_index4++) {
        var h = $$obj[pug_index4];
pug_html = pug_html + "\u003Cli" + (pug_attr("class", pug_classes(["colfilter",headerClass(h)], [false,true]), false, false)+pug_attr("title", t('wpn.header.full', h), true, false)+pug_attr("onclick", `toggleHeader('${h}')`, true, false)) + "\u003E" + (pug_escape(null == (pug_interp = t('wpn.header.label', h)) ? "" : pug_interp)) + "\u003C\u002Fli\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index4 in $$obj) {
      $$l++;
      var h = $$obj[pug_index4];
pug_html = pug_html + "\u003Cli" + (pug_attr("class", pug_classes(["colfilter",headerClass(h)], [false,true]), false, false)+pug_attr("title", t('wpn.header.full', h), true, false)+pug_attr("onclick", `toggleHeader('${h}')`, true, false)) + "\u003E" + (pug_escape(null == (pug_interp = t('wpn.header.label', h)) ? "" : pug_interp)) + "\u003C\u002Fli\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\u003Cdiv class=\"filter-row\"\u003E\u003Cinput" + (" id=\"text-search\""+pug_attr("type", text, true, false)+pug_attr("value", search, true, false)+" oninput=\"search()\"") + "\u002F\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fheader\u003E\u003Ctable\u003E\u003Cthead\u003E\u003Ctr\u003E";
const header = getHeader(scope)
pug_mixins[header](full);
if (subScope) {
const subHeader = getHeader(subScope, true)
pug_mixins[subHeader](hideName);
}
pug_html = pug_html + "\u003C\u002Ftr\u003E\u003C\u002Fthead\u003E\u003Ctbody id=\"table-body\"\u003E";
pug_mixins["tbody"]();
pug_html = pug_html + "\u003C\u002Ftbody\u003E\u003C\u002Ftable\u003E";
if (scope === 'weapons') {
pug_html = pug_html + "\u003Cul\u003E\u003Cli\u003E" + (pug_escape(null == (pug_interp = t('explanations', 'reload')) ? "" : pug_interp)) + "\u003C\u002Fli\u003E\u003Cli\u003E" + (pug_escape(null == (pug_interp = t('explanations', 'startingMagsDisclaimer')) ? "" : pug_interp)) + "\u003C\u002Fli\u003E\u003Cli\u003E" + (pug_escape(null == (pug_interp = t('explanations', 'laserFire')) ? "" : pug_interp)) + "\u003C\u002Fli\u003E\u003C\u002Ful\u003E";
}
};
pug_mixins["tbody"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
const row = getRow(scope)
const subRow = getRow(subScope, true)
// iterate objects(scope)
;(function(){
  var $$obj = objects(scope);
  if ('number' == typeof $$obj.length) {
      for (var pug_index5 = 0, $$l = $$obj.length; pug_index5 < $$l; pug_index5++) {
        var obj = $$obj[pug_index5];
pug_html = pug_html + "\u003Ctr\u003E";
pug_mixins[row](obj, full);
if (subRow) {
let obj2 = subObj(obj)
if (obj2) {
pug_mixins[subRow](obj2, hideName);
}
else {
pug_html = pug_html + "\u003Ctd" + (" class=\"damage-filler\""+pug_attr("colspan", colspans.damagesHideName, true, false)) + "\u003E\u003C\u002Ftd\u003E";
}
}
pug_html = pug_html + "\u003C\u002Ftr\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index5 in $$obj) {
      $$l++;
      var obj = $$obj[pug_index5];
pug_html = pug_html + "\u003Ctr\u003E";
pug_mixins[row](obj, full);
if (subRow) {
let obj2 = subObj(obj)
if (obj2) {
pug_mixins[subRow](obj2, hideName);
}
else {
pug_html = pug_html + "\u003Ctd" + (" class=\"damage-filler\""+pug_attr("colspan", colspans.damagesHideName, true, false)) + "\u003E\u003C\u002Ftd\u003E";
}
}
pug_html = pug_html + "\u003C\u002Ftr\u003E";
    }
  }
}).call(this);

};
if (tbody) {
pug_mixins["tbody"]();
}
else {
pug_mixins["main"]();
}}.call(this,"catClass" in locals_for_with?locals_for_with.catClass:typeof catClass!=="undefined"?catClass:undefined,"cats" in locals_for_with?locals_for_with.cats:typeof cats!=="undefined"?cats:undefined,"collapseDamage" in locals_for_with?locals_for_with.collapseDamage:typeof collapseDamage!=="undefined"?collapseDamage:undefined,"colspans" in locals_for_with?locals_for_with.colspans:typeof colspans!=="undefined"?colspans:undefined,"count" in locals_for_with?locals_for_with.count:typeof count!=="undefined"?count:undefined,"effect" in locals_for_with?locals_for_with.effect:typeof effect!=="undefined"?effect:undefined,"element" in locals_for_with?locals_for_with.element:typeof element!=="undefined"?element:undefined,"full" in locals_for_with?locals_for_with.full:typeof full!=="undefined"?full:undefined,"getHeader" in locals_for_with?locals_for_with.getHeader:typeof getHeader!=="undefined"?getHeader:undefined,"getRow" in locals_for_with?locals_for_with.getRow:typeof getRow!=="undefined"?getRow:undefined,"headerClass" in locals_for_with?locals_for_with.headerClass:typeof headerClass!=="undefined"?headerClass:undefined,"headers" in locals_for_with?locals_for_with.headers:typeof headers!=="undefined"?headers:undefined,"hideHeaders" in locals_for_with?locals_for_with.hideHeaders:typeof hideHeaders!=="undefined"?hideHeaders:undefined,"hideName" in locals_for_with?locals_for_with.hideName:typeof hideName!=="undefined"?hideName:undefined,"id" in locals_for_with?locals_for_with.id:typeof id!=="undefined"?id:undefined,"isWeaponScope" in locals_for_with?locals_for_with.isWeaponScope:typeof isWeaponScope!=="undefined"?isWeaponScope:undefined,"langs" in locals_for_with?locals_for_with.langs:typeof langs!=="undefined"?langs:undefined,"objects" in locals_for_with?locals_for_with.objects:typeof objects!=="undefined"?objects:undefined,"roundStart" in locals_for_with?locals_for_with.roundStart:typeof roundStart!=="undefined"?roundStart:undefined,"scope" in locals_for_with?locals_for_with.scope:typeof scope!=="undefined"?scope:undefined,"scopeClass" in locals_for_with?locals_for_with.scopeClass:typeof scopeClass!=="undefined"?scopeClass:undefined,"scopes" in locals_for_with?locals_for_with.scopes:typeof scopes!=="undefined"?scopes:undefined,"search" in locals_for_with?locals_for_with.search:typeof search!=="undefined"?search:undefined,"showIds" in locals_for_with?locals_for_with.showIds:typeof showIds!=="undefined"?showIds:undefined,"sourceClass" in locals_for_with?locals_for_with.sourceClass:typeof sourceClass!=="undefined"?sourceClass:undefined,"sources" in locals_for_with?locals_for_with.sources:typeof sources!=="undefined"?sources:undefined,"subObj" in locals_for_with?locals_for_with.subObj:typeof subObj!=="undefined"?subObj:undefined,"subScope" in locals_for_with?locals_for_with.subScope:typeof subScope!=="undefined"?subScope:undefined,"t" in locals_for_with?locals_for_with.t:typeof t!=="undefined"?t:undefined,"tbody" in locals_for_with?locals_for_with.tbody:typeof tbody!=="undefined"?tbody:undefined,"text" in locals_for_with?locals_for_with.text:typeof text!=="undefined"?text:undefined,"wikiLink" in locals_for_with?locals_for_with.wikiLink:typeof wikiLink!=="undefined"?wikiLink:undefined));;return pug_html;}