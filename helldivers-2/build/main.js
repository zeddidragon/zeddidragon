function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_classes(s,r){return Array.isArray(s)?pug_classes_array(s,r):s&&"object"==typeof s?pug_classes_object(s):s||""}
function pug_classes_array(r,a){for(var s,e="",u="",c=Array.isArray(a),g=0;g<r.length;g++)(s=pug_classes(r[g]))&&(c&&a[g]&&(s=pug_escape(s)),e=e+u+s,u=" ");return e}
function pug_classes_object(r){var a="",n="";for(var o in r)o&&r[o]&&pug_has_own_property.call(r,o)&&(a=a+n+o,n=" ");return a}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_has_own_property=Object.prototype.hasOwnProperty;
var pug_match_html=/["&<>]/;function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (catClass, cats, colspans, count, full, hasTag, headerClass, headers, hideHeaders, hideName, id, langs, nerdMode, objects, roundStart, scope, scopeClass, scopes, showIds, sourceClass, sources, subObj, subScope, t, wikiLink) {pug_mixins["weaponsHeader"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cth" + (" class=\"weapon idx\""+pug_attr("title", t('table.th.wpn', 'idx', 'Internal order'), true, false)) + "\u003E#\u003C\u002Fth\u003E";
if (!hideHeaders.weapon) {
pug_html = pug_html + "\u003Cth" + (" class=\"weapons source\""+pug_attr("title", t('table.th.wpn', 'source', 'Where to obtain'), true, false)) + "\u003ESource\u003C\u002Fth\u003E\u003Cth" + (" class=\"weapon category\""+pug_attr("title", t('table.th.wpn', 'category', 'Weapon Category'), true, false)) + "\u003EType\u003C\u002Fth\u003E\u003Cth" + (" class=\"weapon code\""+pug_attr("title", t('table.th.wpn', 'code', 'Military code'), true, false)) + "\u003ECode\u003C\u002Fth\u003E";
}
pug_html = pug_html + "\u003Cth" + (" class=\"weapon name\""+pug_attr("title", t('table.th.wpn', 'name', 'Name'), true, false)) + "\u003EWeapon\u003C\u002Fth\u003E\u003Cth" + (" class=\"weapon damage\""+pug_attr("title", t('table.th.dmg', 'dmgs3'), true, false)+" colspan=\"3\"") + "\u003EDamage\u003C\u002Fth\u003E\u003Cth" + (" class=\"damage ap\""+pug_attr("title", t('table.th.dmg', 'ap'), true, false)) + "\u003EAP\u003C\u002Fth\u003E\u003Cth" + (" class=\"weapon rpm\""+pug_attr("title", t('table.th.wpn', 'rpm', 'Rate of fire (Rounds Per Minute)'), true, false)) + "\u003ERPM\u003C\u002Fth\u003E";
if (!hideHeaders.weapon) {
pug_html = pug_html + "\u003Cth" + (" class=\"weapon reload\""+pug_attr("title", t('table.th.wpn', 'reloads3', 'Reload times (seconds)'), true, false)) + "\u003ERel\u003C\u002Fth\u003E\u003Cth" + (" class=\"weapon cap\""+pug_attr("title", t('table.th.wpn', 'cap', 'Ammo capaccity (+ in chamber)'), true, false)+" colspan=\"2\"") + "\u003ECap\u003C\u002Fth\u003E\u003Cth" + (" class=\"weapon spare\""+pug_attr("title", t('table.th.wpn', 'spare4', 'Spare mags, clips, or rounds (start/max), and resupplied (supply/ammobox'), true, false)+" colspan=\"2\"") + "\u003EReserves\u003C\u002Fth\u003E";
}
if (!hideHeaders.damage) {
pug_mixins["damagesHeader"]({ apCount: 1, effectsCount: 1 });
}
if (!hideHeaders.projectile) {
pug_mixins["projectilesHeader"]();
}
if (!hideHeaders.dps) {
pug_html = pug_html + "\u003Cth class=\"weapon dps\" title=\"Damage Per Second\"\u003EDPS\u003C\u002Fth\u003E\u003Cth class=\"weapon tdps\" title=\"Total Damage Per Second (Including Reload Time)\"\u003ETDPS\u003C\u002Fth\u003E\u003Cth class=\"weapon magdump\" title=\"Damage for Magdump\"\u003EMD\u003C\u002Fth\u003E\u003Cth class=\"weapon totaldump\" title=\"Damage for expending all ammo\"\u003ETotal\u003C\u002Fth\u003E";
}
if (!hideHeaders.dps2) {
pug_html = pug_html + "\u003Cth class=\"weapon dps2\" title=\"Damage Per Second (vs Massive)\"\u003E\u003Csup\u003EDPS\u003C\u002Fsup\u003E\u003Csub\u003EvM\u003C\u002Fsub\u003E\u003C\u002Fth\u003E\u003Cth class=\"weapon tdps2\" title=\"Damage Per Second vs Massive (Including Reload Time)\"\u003E\u003Csup\u003ETDPS\u003C\u002Fsup\u003E\u003C\u002Fth\u003E\u003Cth class=\"weapon magdump2\" title=\"Damage vs Massive for Magdump\"\u003E\u003Csup\u003EMD\u003C\u002Fsup\u003E\u003C\u002Fth\u003E\u003Cth class=\"weapon totaldump2\" title=\"Damage vs Massive for expending all ammo\"\u003E\u003Csup\u003ETot\u003C\u002Fsup\u003E\u003C\u002Fth\u003E";
}
};
pug_mixins["weaponsRow"] = pug_interp = function(wpn, opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Ctd class=\"weapon idx\"\u003E" + (pug_escape(null == (pug_interp = wpn.idx) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
if (!hideHeaders.weapon) {
pug_html = pug_html + "\u003Ctd" + (" class=\"weapons source\""+pug_attr("title", t('wpn.source.full', wpn.source), true, false)) + "\u003E\u003Cspan" + (pug_attr("class", pug_classes([wpn.source,"source-main","source"], [true,false,false]), false, false)) + "\u003E" + (pug_escape(null == (pug_interp = t('wpn.source.label', wpn.source)) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
if (wpn.sourcepage) {
pug_html = pug_html + "\u003Cspan class=\"source-page\"\u003E" + (pug_escape(null == (pug_interp = wpn.sourcepage) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
}
pug_html = pug_html + "\u003C\u002Ftd\u003E\u003Ctd" + (pug_attr("class", pug_classes(["weapon","category",wpn.category], [false,false,true]), false, false)+pug_attr("title", t('wpn.category.full', wpn.category), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = t('wpn.category.label', wpn.category)) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"weapon code\"\u003E";
if (wpn.code) {
pug_html = pug_html + "\u003Ca" + (pug_attr("href", wikiLink(wpn), true, false)+" target=\"_blank\"") + "\u003E" + (pug_escape(null == (pug_interp = wpn.code) ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
}
pug_html = pug_html + "\u003C\u002Ftd\u003E";
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
const dmg = wpn.damage || {}
pug_html = pug_html + "\u003Ctd" + (pug_attr("class", pug_classes(["weapon","type",{ xdmg: !!wpn.explosion }], [false,false,true]), false, false)) + "\u003E";
if (dmg.type) {
pug_html = pug_html + "\u003Cspan" + (" class=\"dmgtype\""+pug_attr("title", t('dmg.types.full', dmg.type), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = t('dmg.types', dmg.type)) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
}
pug_html = pug_html + "\u003C\u002Ftd\u003E";
const n = count(wpn)
pug_html = pug_html + "\u003Ctd" + (pug_attr("class", pug_classes(["weapon","pellets",{ muted: n == 1, blank: !n }], [false,false,true]), false, false)) + "\u003E" + (pug_escape(null == (pug_interp = n) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd" + (pug_attr("class", pug_classes(["weapon","dmg",{ xdmg: !!wpn.explosion }], [false,false,true]), false, false)) + "\u003E";
if (dmg.dmg) {
pug_html = pug_html + "\u003Cspan class=\"dmg-base\"\u003E" + (pug_escape(null == (pug_interp = dmg.dmg) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
}
if (dmg.dmg2 < dmg.dmg) {
pug_html = pug_html + "\u003Cspan class=\"dmg-massive\"\u003E" + (pug_escape(null == (pug_interp = dmg.dmg2) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
}
pug_html = pug_html + "\u003C\u002Ftd\u003E";
let ap = dmg.ap1
pug_html = pug_html + "\u003Ctd" + (pug_attr("class", pug_classes(["damage","ap",`ap-${ap}`], [false,false,true]), false, false)) + "\u003E" + (pug_escape(null == (pug_interp = ap) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"weapon rpm\"\u003E";
if (hasTag(wpn, 'laser')) {
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
pug_html = pug_html + "\u003Cspan" + (" class=\"reload-x\""+pug_attr("title", t('table.td.reload', 'x', `Reload max rounds`), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = wpn.reloadx.toFixed(1)) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
}
if (wpn.reload) {
pug_html = pug_html + "\u003Cspan" + (" class=\"reload-main\""+pug_attr("title", t('table.td.reload', 'empty', "Reload from empty"), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = wpn.reload.toFixed(1)) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
}
if (wpn.reloadearly) {
pug_html = pug_html + "\u003Cspan" + (" class=\"reload-early\""+pug_attr("title", t('table.td.reload', 'early', "Early Reload (not empty)"), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = wpn.reloadearly.toFixed(1)) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
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
pug_html = pug_html + "\u003Cspan" + (" class=\"clipsize\""+pug_attr("title", t('table.td.spare', 'clipsize', "Rounds in Clip"), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = wpn.clipsize) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cspan" + (" class=\"clipstart\""+pug_attr("title", t('table.td.spare', 'clipstart', "Starting Clips"), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = wpn.clipstart) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cspan" + (" class=\"clips\""+pug_attr("title", t('table.td.spare', 'clipsize', "Max Clips"), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = wpn.clips) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
}
if (wpn.rounds) {
pug_html = pug_html + "\u003Cspan" + (" class=\"roundstart\""+pug_attr("title", t('table.td.spare', 'roundstart', "Starting Rounds"), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = roundStart(wpn)) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cspan" + (" class=\"rounds\""+pug_attr("title", t('table.td.spare', 'rounds', "Max Spare Rounds"), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = wpn.rounds) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
}
if (wpn.mags) {
pug_html = pug_html + "\u003Cspan" + (" class=\"magstart\""+pug_attr("title", t('table.td.spare', 'magstart', "Starting Mags"), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = wpn.magstart || wpn.mags) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cspan" + (" class=\"mags\""+pug_attr("title", t('table.td.spare', 'mags', "Max Mags"), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = wpn.mags) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
}
pug_html = pug_html + "\u003C\u002Ftd\u003E\u003Ctd class=\"weapon pickup\"\u003E";
if (wpn.clipsupply) {
pug_html = pug_html + "\u003Cspan" + (" class=\"clipsupply\""+pug_attr("title", t('table.td.pickup', 'clipsupply', "Clips From Supply"), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = wpn.clipsupply) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cspan" + (" class=\"clipbox\""+pug_attr("title", t('table.td.pickup', 'clipbox', "Clips From Box"), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = wpn.clipbox) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
}
if (wpn.roundsupply) {
pug_html = pug_html + "\u003Cspan" + (" class=\"roundsupply\""+pug_attr("title", t('table.td.pickup', 'roundsupply', "Rounds From Supply"), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = wpn.roundsupply) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cspan" + (" class=\"roundsbox\""+pug_attr("title", t('table.td.pickup', 'roundsbox', "Rounds From Box"), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = wpn.roundsbox) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
}
if (wpn.supply) {
pug_html = pug_html + "\u003Cspan" + (" class=\"supply\""+pug_attr("title", t('table.td.pickup', 'supply', "Mags From Supply"), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = wpn.supply) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cspan" + (" class=\"box\""+pug_attr("title", t('table.td.pickup', 'box', "Mags From Box"), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = wpn.box) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
}
pug_html = pug_html + "\u003C\u002Ftd\u003E";
}
if (!hideHeaders.damage) {
if (wpn.damage) {
pug_mixins["damagesRow"](wpn.damage, { explosive: !!wpn.explosion, apCount: 1, effectsCount: 1 });
}
else {
pug_html = pug_html + "\u003Ctd" + (" class=\"damage-filler\""+pug_attr("colspan", colspans.damages, true, false)) + "\u003E\u003C\u002Ftd\u003E";
}
}
if (!hideHeaders.projectile) {
if (wpn.projectile) {
pug_mixins["projectilesRow"](wpn.projectile);
}
else
if (wpn.explosion) {
pug_mixins["explosionsStubRow"](wpn.explosion);
}
else {
pug_html = pug_html + "\u003Ctd" + (" class=\"projectile-filler\""+pug_attr("colspan", colspans.projectiles, true, false)) + "\u003E\u003C\u002Ftd\u003E";
}
}
if (!hideHeaders.dps) {
pug_html = pug_html + "\u003Ctd class=\"dps\"\u003E" + (pug_escape(null == (pug_interp = wpn.dps) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"tdps\"\u003E" + (pug_escape(null == (pug_interp = wpn.tdps) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"magdump\"\u003E" + (pug_escape(null == (pug_interp = wpn.magdump) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"totaldump\"\u003E" + (pug_escape(null == (pug_interp = wpn.totaldump) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
}
if (!hideHeaders.dps2) {
pug_html = pug_html + "\u003Ctd class=\"dps2\"\u003E" + (pug_escape(null == (pug_interp = wpn.dps2) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"tdps2\"\u003E" + (pug_escape(null == (pug_interp = wpn.tdps2) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"magdump2\"\u003E" + (pug_escape(null == (pug_interp = wpn.magdump2) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"totaldump2\"\u003E" + (pug_escape(null == (pug_interp = wpn.totaldump2) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
}
};
pug_mixins["projectilesHeader"] = pug_interp = function(opts = {}){
var block = (this && this.block), attributes = (this && this.attributes) || {};
if (opts.full) {
pug_html = pug_html + "\u003Cth" + (" class=\"projectile idx\""+pug_attr("title", t('table.th.prj', 'idx', 'Internal order'), true, false)) + "\u003E#\u003C\u002Fth\u003E\u003Cth" + (" class=\"projectile id\""+pug_attr("title", t('table.th.prj', 'id', 'ID of projectile data (hex)'), true, false)) + "\u003E\u003Cspan\u003EID\u003C\u002Fspan\u003E\u003Csub\u003Ep\u003C\u002Fsub\u003E\u003C\u002Fth\u003E\u003Cth" + (" class=\"projectile name\""+pug_attr("title", t('table.th.prj', 'name', 'Translated name of projectile'), true, false)) + "\u003EName\u003C\u002Fth\u003E\u003Cth" + (" class=\"projectile damageid\""+pug_attr("title", t('table.th.prj', 'damageid', 'ID of damage data used (hex)'), true, false)) + "\u003EDmg\u003C\u002Fth\u003E\u003Cth" + (" class=\"projectile pellets\""+pug_attr("title", t('table.th.prj', 'pellets', 'Pellet Count'), true, false)) + "\u003E\u003C\u002Fth\u003E";
}
else
if (showIds) {
pug_html = pug_html + "\u003Cth" + (" class=\"projectile id\""+pug_attr("title", t('table.th.prj2', 'id', 'ID of medium (projectile or explosion data) (hex)'), true, false)) + "\u003E\u003Cspan\u003EID\u003C\u002Fspan\u003E\u003Csub\u003Em\u003C\u002Fsub\u003E\u003C\u002Fth\u003E";
}
pug_html = pug_html + "\u003Cth" + (" class=\"projectile caliber\""+pug_attr("title", t('table.th.prj', 'caliber', 'Caliber (mm)'), true, false)) + "\u003ECal\u003C\u002Fth\u003E\u003Cth" + (" class=\"projectile velocity\""+pug_attr("title", t('table.th.prj', 'velocity', 'Muzzle Velocity (m/s)'), true, false)) + "\u003Ev\u003C\u002Fth\u003E\u003Cth" + (" class=\"projectile mass\""+pug_attr("title", t('table.th.prj', 'mass', 'Mass (grams)'), true, false)) + "\u003Em\u003C\u002Fth\u003E\u003Cth" + (" class=\"projectile drag\""+pug_attr("title", t('table.th.prj', 'drag', 'Drag Coefficient Multiplier'), true, false)) + "\u003E\u003Cspan\u003Ec\u003C\u002Fspan\u003E\u003Csub\u003Ed\u003C\u002Fsub\u003E\u003C\u002Fth\u003E\u003Cth" + (" class=\"projectile gravity\""+pug_attr("title", t('table.th.prj', 'gravity', 'Gravity Multiplier'), true, false)) + "\u003Eg\u003C\u002Fth\u003E\u003Cth" + (" class=\"projectile penslow\""+pug_attr("title", t('table.th.prj', 'penslow', 'Penetration Slowdown'), true, false)) + "\u003E\u003Cspan\u003Esl\u003C\u002Fspan\u003E\u003Csub\u003Ep\u003C\u002Fsub\u003E\u003C\u002Fth\u003E\u003Cth" + (" class=\"projectile lifetime\""+pug_attr("title", t('table.th.prj', 'lifetime', 'Lifetime (s)'), true, false)) + "\u003El\u003C\u002Fth\u003E";
if (!opts.full) {
pug_html = pug_html + "\u003Cth" + (" class=\"projectile name\""+pug_attr("title", t('table.th.prj', 'name', 'Translated name of projectile'), true, false)) + "\u003EProjectile\u003C\u002Fth\u003E";
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
pug_html = pug_html + "\u003Ctd class=\"projectile caliber\"\u003E" + (pug_escape(null == (pug_interp = prj.caliber) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"projectile velocity\"\u003E" + (pug_escape(null == (pug_interp = prj.velocity) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"projectile mass\"\u003E" + (pug_escape(null == (pug_interp = prj.mass) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"projectile drag\"\u003E" + (pug_escape(null == (pug_interp = prj.drag) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"projectile gravity\"\u003E" + (pug_escape(null == (pug_interp = prj.gravity) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"projectile penslow\"\u003E" + (pug_escape(null == (pug_interp = prj.penslow) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd" + (pug_attr("class", pug_classes(["projectile","lifetime",{ muted: !prj.lifetime }], [false,false,true]), false, false)) + "\u003E" + (pug_escape(null == (pug_interp = prj.lifetime) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
if (!opts.full) {
pug_html = pug_html + "\u003Ctd class=\"projectile name\"\u003E" + (pug_escape(null == (pug_interp = prj.name) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
}
};
pug_mixins["explosionsHeader"] = pug_interp = function(opts = {}){
var block = (this && this.block), attributes = (this && this.attributes) || {};
if (opts.full) {
pug_html = pug_html + "\u003Cth" + (" class=\"explosion idx\""+pug_attr("title", t('table.th.aoe', 'idx', 'Internal order'), true, false)) + "\u003E#\u003C\u002Fth\u003E\u003Cth" + (" class=\"explosion id\""+pug_attr("title", t('table.th.aoe', 'id', 'ID of explosion data (hex)'), true, false)) + "\u003E\u003Cspan\u003EID\u003C\u002Fspan\u003E\u003Csub\u003Ex\u003C\u002Fsub\u003E\u003C\u002Fth\u003E\u003Cth" + (" class=\"explosion name\""+pug_attr("title", t('table.th.aoe', 'name', 'Translated name of AoE source'), true, false)) + "\u003EExplosion\u003C\u002Fth\u003E\u003Cth" + (" class=\"explosion damageid\""+pug_attr("title", t('table.th.aoe', 'damageid', 'ID of damage data used (hex)'), true, false)) + "\u003EDmg\u003C\u002Fth\u003E";
}
pug_html = pug_html + "\u003Cth" + (" class=\"explosion radius\""+pug_attr("title", t('table.th.aoe', 'radius', 'Radius Inner/Outer/Non-Damage (m)'), true, false)+" colspan=\"3\"") + "\u003EAoE\u003C\u002Fth\u003E";
};
pug_mixins["explosionsStubRow"] = pug_interp = function(exp, opts = {}){
var block = (this && this.block), attributes = (this && this.attributes) || {};
if (showIds) {
pug_html = pug_html + "\u003Ctd class=\"explosion id\"\u003E" + (pug_escape(null == (pug_interp = id(exp)) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
}
pug_html = pug_html + "\u003Ctd" + (" class=\"explosion label\""+pug_attr("title", t('table.th.aoe', 'radius', 'Radius Inner/Outer/Non-Damage (m)'), true, false)+" colspan=\"2\"") + "\u003E" + (pug_escape(null == (pug_interp = t('table.td.aoe.label', 'radius', 'Radius')) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"explosion radius stub r1\"\u003E" + (pug_escape(null == (pug_interp = exp.r1.toFixed(1)) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"explosion radius stub r2 rx\"\u003E" + (pug_escape(null == (pug_interp = exp.r2.toFixed(1)) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"explosion radius stub r3 rx\"\u003E" + (pug_escape(null == (pug_interp = exp.r3.toFixed(1)) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"explosion filler\" colspan=\"4\"\u003E\u003C\u002Ftd\u003E";
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
pug_html = pug_html + "\u003Ctd class=\"explosion radius r1\"\u003E" + (pug_escape(null == (pug_interp = exp.r1) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"explosion radius r2 rx\"\u003E" + (pug_escape(null == (pug_interp = exp.r2) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"explosion radius r3 rx\"\u003E" + (pug_escape(null == (pug_interp = exp.r3) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
};
pug_mixins["damagesHeader"] = pug_interp = function(opts = {}){
var block = (this && this.block), attributes = (this && this.attributes) || {};
if (opts.full) {
pug_html = pug_html + "\u003Cth" + (" class=\"damage idx\""+pug_attr("title", t('table.th.dmg', 'idx', 'Internal order'), true, false)) + "\u003E#\u003C\u002Fth\u003E";
}
if (opts.full || showIds) {
pug_html = pug_html + "\u003Cth" + (" class=\"damage id\""+pug_attr("title", t('table.th.dmg', 'id', 'ID of damage data (hex)'), true, false)) + "\u003E\u003Cspan\u003EID\u003C\u002Fspan\u003E\u003Csub\u003Ed\u003C\u002Fsub\u003E\u003C\u002Fth\u003E";
}
if (opts.full && !opts.hideName) {
pug_html = pug_html + "\u003Cth" + (" class=\"damage name\""+pug_attr("title", t('table.th.dmg', 'name', 'Translated name of damage source'), true, false)) + "\u003EName\u003C\u002Fth\u003E";
}
if (opts.full) {
pug_html = pug_html + "\u003Cth" + (" class=\"damage dmg\""+pug_attr("title", t('table.th.dmg', 'dmgs3', 'Damage type / Base damage / Damage vs Massive'), true, false)+" colspan=\"3\"") + "\u003EDamage\u003C\u002Fth\u003E";
const apCount = opts.apCount || 4
pug_html = pug_html + "\u003Cth" + (" class=\"damage ap\""+pug_attr("title", t('table.th.dmg', 'ap', 'Armor Penetration, varies by context'), true, false)+pug_attr("colspan", apCount, true, false)) + "\u003EAP\u003C\u002Fth\u003E";
}
pug_html = pug_html + "\u003Cth" + (" class=\"damage demo\""+pug_attr("title", t('table.th.dmg', 'demo', 'Demolition Force'), true, false)) + "\u003EDF\u003C\u002Fth\u003E\u003Cth" + (" class=\"damage stun\""+pug_attr("title", t('table.th.dmg', 'stun', 'Stagger Value'), true, false)) + "\u003ESV\u003C\u002Fth\u003E\u003Cth" + (" class=\"damage push\""+pug_attr("title", t('table.th.dmg', 'push', 'Push Force'), true, false)) + "\u003EPF\u003C\u002Fth\u003E";
const effectsCount = opts.effectsCount || 4
pug_html = pug_html + "\u003Cth" + (" class=\"damage effect\""+pug_attr("title", t('table.th.dmg', 'effects8', 'Status Effects'), true, false)+pug_attr("colspan", effectsCount * 2, true, false)) + "\u003EFX\u003C\u002Fth\u003E";
};
pug_mixins["damagesRow"] = pug_interp = function(dmg, opts = {}){
var block = (this && this.block), attributes = (this && this.attributes) || {};
let i
if (opts.full) {
pug_html = pug_html + "\u003Ctd class=\"damage idx\"\u003E" + (pug_escape(null == (pug_interp = dmg.idx) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"damage id\"\u003E" + (pug_escape(null == (pug_interp = id(dmg)) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
if (!opts.hideName) {
pug_html = pug_html + "\u003Ctd class=\"damage name\"\u003E" + (pug_escape(null == (pug_interp = dmg.name) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
}
pug_html = pug_html + "\u003Ctd" + (pug_attr("class", pug_classes(["damage","dmgtype",{muted: !dmg.type }], [false,false,true]), false, false)+pug_attr("title", t('dmg.types.full', dmg.type), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = t('dmg.types', dmg.type)) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd" + (pug_attr("class", pug_classes(["damage","dmg",{ xdmg: opts.explosive }], [false,false,true]), false, false)) + "\u003E" + (pug_escape(null == (pug_interp = dmg.dmg) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd" + (pug_attr("class", pug_classes(["damage","dmg2",{ xdmg: opts.explosive }], [false,false,true]), false, false)) + "\u003E" + (pug_escape(null == (pug_interp = dmg.dmg2) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
i = 0
while (i < (opts.apCount || 4)) {
i++
var ap = dmg[`ap${i}`]
pug_html = pug_html + "\u003Ctd" + (pug_attr("class", pug_classes(["damage","ap",`ap-${ap} ap-list-${i}`], [false,false,true]), false, false)) + "\u003E" + (pug_escape(null == (pug_interp = ap) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
}
}
else
if (showIds) {
pug_html = pug_html + "\u003Ctd class=\"damage id\"\u003E" + (pug_escape(null == (pug_interp = id(dmg)) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
}
pug_html = pug_html + "\u003Ctd" + (pug_attr("class", pug_classes(["damage","demo",{ xdemo: opts.explosive }], [false,false,true]), false, false)) + "\u003E" + (pug_escape(null == (pug_interp = dmg.demo) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd" + (pug_attr("class", pug_classes(["damage","stun",{ xstun: opts.explosive }], [false,false,true]), false, false)) + "\u003E" + (pug_escape(null == (pug_interp = dmg.stun) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd" + (pug_attr("class", pug_classes(["damage","push",{ xpush: opts.explosive }], [false,false,true]), false, false)) + "\u003E" + (pug_escape(null == (pug_interp = dmg.push) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
i = 0
while (i < (opts.effectsCount || 4)) {
i++
var func = dmg[`func${i}`]
var param = dmg[`param${i}`]
pug_html = pug_html + "\u003Ctd" + (pug_attr("class", pug_classes(["damage","effect",{ [`effect${i}`]: true, muted: !func }], [false,false,true]), false, false)+pug_attr("title", t('dmg.effects.full', func), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = t('dmg.effects', func, func)) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd" + (pug_attr("class", pug_classes(["damage","effect-param",{muted: !func}], [false,false,true]), false, false)) + "\u003E" + (pug_escape(null == (pug_interp = param) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
}
};
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

pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fnav\u003E\u003Cheader class=\"menu\"\u003E\u003Cdiv class=\"filters\"\u003E";
if (scope === 'weapons') {
pug_html = pug_html + "\u003Cdiv class=\"filter-row\"\u003E\u003Cul class=\"sources\"\u003E";
// iterate sources
;(function(){
  var $$obj = sources;
  if ('number' == typeof $$obj.length) {
      for (var pug_index1 = 0, $$l = $$obj.length; pug_index1 < $$l; pug_index1++) {
        var source = $$obj[pug_index1];
pug_html = pug_html + "\u003Cli" + (pug_attr("class", pug_classes(["source",sourceClass(source)], [false,true]), false, false)+pug_attr("title", t('wpn.source.full', source), true, false)+pug_attr("onclick", `toggleSource('${source}')`, true, false)) + "\u003E" + (pug_escape(null == (pug_interp = t('wpn.source.label', source)) ? "" : pug_interp)) + "\u003C\u002Fli\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index1 in $$obj) {
      $$l++;
      var source = $$obj[pug_index1];
pug_html = pug_html + "\u003Cli" + (pug_attr("class", pug_classes(["source",sourceClass(source)], [false,true]), false, false)+pug_attr("title", t('wpn.source.full', source), true, false)+pug_attr("onclick", `toggleSource('${source}')`, true, false)) + "\u003E" + (pug_escape(null == (pug_interp = t('wpn.source.label', source)) ? "" : pug_interp)) + "\u003C\u002Fli\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"filter-row\"\u003E\u003Cul class=\"categories\"\u003E";
// iterate cats
;(function(){
  var $$obj = cats;
  if ('number' == typeof $$obj.length) {
      for (var pug_index2 = 0, $$l = $$obj.length; pug_index2 < $$l; pug_index2++) {
        var cat = $$obj[pug_index2];
pug_html = pug_html + "\u003Cli" + (pug_attr("class", pug_classes(["category",catClass(cat)], [false,true]), false, false)+pug_attr("title", t('wpn.category.full', cat), true, false)+pug_attr("onclick", `toggleCategory('${cat}')`, true, false)) + "\u003E" + (pug_escape(null == (pug_interp = t('wpn.category.label', cat)) ? "" : pug_interp)) + "\u003C\u002Fli\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index2 in $$obj) {
      $$l++;
      var cat = $$obj[pug_index2];
pug_html = pug_html + "\u003Cli" + (pug_attr("class", pug_classes(["category",catClass(cat)], [false,true]), false, false)+pug_attr("title", t('wpn.category.full', cat), true, false)+pug_attr("onclick", `toggleCategory('${cat}')`, true, false)) + "\u003E" + (pug_escape(null == (pug_interp = t('wpn.category.label', cat)) ? "" : pug_interp)) + "\u003C\u002Fli\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ful\u003E\u003Cdiv class=\"divider\"\u003E|\u003C\u002Fdiv\u003E\u003Cul class=\"colfilters\"\u003E";
// iterate headers
;(function(){
  var $$obj = headers;
  if ('number' == typeof $$obj.length) {
      for (var pug_index3 = 0, $$l = $$obj.length; pug_index3 < $$l; pug_index3++) {
        var h = $$obj[pug_index3];
pug_html = pug_html + "\u003Cli" + (pug_attr("class", pug_classes(["colfilter",headerClass(h)], [false,true]), false, false)+pug_attr("title", t('wpn.header.full', h), true, false)+pug_attr("onclick", `toggleHeader('${h}')`, true, false)) + "\u003E" + (pug_escape(null == (pug_interp = t('wpn.header.label', h)) ? "" : pug_interp)) + "\u003C\u002Fli\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index3 in $$obj) {
      $$l++;
      var h = $$obj[pug_index3];
pug_html = pug_html + "\u003Cli" + (pug_attr("class", pug_classes(["colfilter",headerClass(h)], [false,true]), false, false)+pug_attr("title", t('wpn.header.full', h), true, false)+pug_attr("onclick", `toggleHeader('${h}')`, true, false)) + "\u003E" + (pug_escape(null == (pug_interp = t('wpn.header.label', h)) ? "" : pug_interp)) + "\u003C\u002Fli\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E";
if (nerdMode) {
pug_html = pug_html + "\u003Cul\u003E\u003Cli\u003E" + (pug_escape(null == (pug_interp = t('explanations', 'nerdModeSpoilers', 'Here there be spoilers.')) ? "" : pug_interp)) + "\u003C\u002Fli\u003E\u003C\u002Ful\u003E";
}
}
else {
pug_html = pug_html + "\u003Cul class=\"scopes\"\u003E";
// iterate scopes
;(function(){
  var $$obj = scopes;
  if ('number' == typeof $$obj.length) {
      for (var pug_index4 = 0, $$l = $$obj.length; pug_index4 < $$l; pug_index4++) {
        var scope = $$obj[pug_index4];
pug_html = pug_html + "\u003Cli" + (pug_attr("class", pug_classes(["scope",scopeClass(scope)], [false,true]), false, false)+pug_attr("title", t('nav.scopes.full', scope), true, false)+pug_attr("onclick", `switchScope('${scope}')`, true, false)) + "\u003E" + (pug_escape(null == (pug_interp = t('nav.scopes.label', scope)) ? "" : pug_interp)) + "\u003C\u002Fli\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index4 in $$obj) {
      $$l++;
      var scope = $$obj[pug_index4];
pug_html = pug_html + "\u003Cli" + (pug_attr("class", pug_classes(["scope",scopeClass(scope)], [false,true]), false, false)+pug_attr("title", t('nav.scopes.full', scope), true, false)+pug_attr("onclick", `switchScope('${scope}')`, true, false)) + "\u003E" + (pug_escape(null == (pug_interp = t('nav.scopes.label', scope)) ? "" : pug_interp)) + "\u003C\u002Fli\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ful\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"spacer\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"side-menu\"\u003E\u003Clabel\u003E\u003Cinput" + (" id=\"nerd-mode\" type=\"checkbox\""+pug_attr("checked", nerdMode, true, false)+" onclick=\"toggleNerdMode()\"") + "\u002F\u003E";
if (nerdMode) {
pug_html = pug_html + "🤓";
}
else {
pug_html = pug_html + "Nerd Mode";
}
pug_html = pug_html + "\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E\u003C\u002Fheader\u003E\u003Ctable\u003E\u003Ctr\u003E";
pug_mixins[`${scope}Header`](full);
if (subScope) {
pug_mixins[`${subScope}Header`](hideName);
}
pug_html = pug_html + "\u003C\u002Ftr\u003E";
// iterate objects(scope)
;(function(){
  var $$obj = objects(scope);
  if ('number' == typeof $$obj.length) {
      for (var pug_index5 = 0, $$l = $$obj.length; pug_index5 < $$l; pug_index5++) {
        var obj = $$obj[pug_index5];
pug_html = pug_html + "\u003Ctr\u003E";
pug_mixins[`${scope}Row`](obj, full);
if (subScope) {
let obj2 = subObj(obj)
if (obj2) {
pug_mixins[`${subScope}Row`](obj2, hideName);
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
pug_mixins[`${scope}Row`](obj, full);
if (subScope) {
let obj2 = subObj(obj)
if (obj2) {
pug_mixins[`${subScope}Row`](obj2, hideName);
}
else {
pug_html = pug_html + "\u003Ctd" + (" class=\"damage-filler\""+pug_attr("colspan", colspans.damagesHideName, true, false)) + "\u003E\u003C\u002Ftd\u003E";
}
}
pug_html = pug_html + "\u003C\u002Ftr\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ftable\u003E";
if (scope === 'weapons') {
pug_html = pug_html + "\u003Cul\u003E\u003Cli\u003E" + (pug_escape(null == (pug_interp = t('explanations', 'reload', 'Reload is measured from when reticle disappears to when it comes back. Not all weapons had a reticle. Timing may be off by up to 0.1s.')) ? "" : pug_interp)) + "\u003C\u002Fli\u003E\u003Cli\u003E" + (pug_escape(null == (pug_interp = t('explanations', 'startingMagsDisclaimer', 'Starting mags for support weapons are currently unmeasured, but become max after the ship module upgrade.')) ? "" : pug_interp)) + "\u003C\u002Fli\u003E\u003Cli\u003E" + (pug_escape(null == (pug_interp = t('explanations', 'laserFire', "Laser weapons can't actually set things on fire. The data may be there to make the corpses burn.")) ? "" : pug_interp)) + "\u003C\u002Fli\u003E\u003C\u002Ful\u003E";
}}.call(this,"catClass" in locals_for_with?locals_for_with.catClass:typeof catClass!=="undefined"?catClass:undefined,"cats" in locals_for_with?locals_for_with.cats:typeof cats!=="undefined"?cats:undefined,"colspans" in locals_for_with?locals_for_with.colspans:typeof colspans!=="undefined"?colspans:undefined,"count" in locals_for_with?locals_for_with.count:typeof count!=="undefined"?count:undefined,"full" in locals_for_with?locals_for_with.full:typeof full!=="undefined"?full:undefined,"hasTag" in locals_for_with?locals_for_with.hasTag:typeof hasTag!=="undefined"?hasTag:undefined,"headerClass" in locals_for_with?locals_for_with.headerClass:typeof headerClass!=="undefined"?headerClass:undefined,"headers" in locals_for_with?locals_for_with.headers:typeof headers!=="undefined"?headers:undefined,"hideHeaders" in locals_for_with?locals_for_with.hideHeaders:typeof hideHeaders!=="undefined"?hideHeaders:undefined,"hideName" in locals_for_with?locals_for_with.hideName:typeof hideName!=="undefined"?hideName:undefined,"id" in locals_for_with?locals_for_with.id:typeof id!=="undefined"?id:undefined,"langs" in locals_for_with?locals_for_with.langs:typeof langs!=="undefined"?langs:undefined,"nerdMode" in locals_for_with?locals_for_with.nerdMode:typeof nerdMode!=="undefined"?nerdMode:undefined,"objects" in locals_for_with?locals_for_with.objects:typeof objects!=="undefined"?objects:undefined,"roundStart" in locals_for_with?locals_for_with.roundStart:typeof roundStart!=="undefined"?roundStart:undefined,"scope" in locals_for_with?locals_for_with.scope:typeof scope!=="undefined"?scope:undefined,"scopeClass" in locals_for_with?locals_for_with.scopeClass:typeof scopeClass!=="undefined"?scopeClass:undefined,"scopes" in locals_for_with?locals_for_with.scopes:typeof scopes!=="undefined"?scopes:undefined,"showIds" in locals_for_with?locals_for_with.showIds:typeof showIds!=="undefined"?showIds:undefined,"sourceClass" in locals_for_with?locals_for_with.sourceClass:typeof sourceClass!=="undefined"?sourceClass:undefined,"sources" in locals_for_with?locals_for_with.sources:typeof sources!=="undefined"?sources:undefined,"subObj" in locals_for_with?locals_for_with.subObj:typeof subObj!=="undefined"?subObj:undefined,"subScope" in locals_for_with?locals_for_with.subScope:typeof subScope!=="undefined"?subScope:undefined,"t" in locals_for_with?locals_for_with.t:typeof t!=="undefined"?t:undefined,"wikiLink" in locals_for_with?locals_for_with.wikiLink:typeof wikiLink!=="undefined"?wikiLink:undefined));;return pug_html;}