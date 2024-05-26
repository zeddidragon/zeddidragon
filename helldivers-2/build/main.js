function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_classes(s,r){return Array.isArray(s)?pug_classes_array(s,r):s&&"object"==typeof s?pug_classes_object(s):s||""}
function pug_classes_array(r,a){for(var s,e="",u="",c=Array.isArray(a),g=0;g<r.length;g++)(s=pug_classes(r[g]))&&(c&&a[g]&&(s=pug_escape(s)),e=e+u+s,u=" ");return e}
function pug_classes_object(r){var a="",n="";for(var o in r)o&&r[o]&&pug_has_own_property.call(r,o)&&(a=a+n+o,n=" ");return a}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_has_own_property=Object.prototype.hasOwnProperty;
var pug_match_html=/["&<>]/;function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (damages, explosions, id, lang, langs, nerdScope, nerdScopes, projectiles, sorted, t) {pug_mixins["projectiles"] = pug_interp = function(objects){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Ctr class=\"projectile-header\"\u003E\u003Cth" + (" class=\"projectile idx\""+pug_attr("title", t('table.th.prj', 'idx', 'Internal order'), true, false)) + "\u003E#\u003C\u002Fth\u003E\u003Cth" + (" class=\"projectile id\""+pug_attr("title", t('table.th.prj', 'id', 'ID of projectile data (hex)'), true, false)) + "\u003EID\u003C\u002Fth\u003E\u003Cth" + (" class=\"projectile name\""+pug_attr("title", t('table.th.prj', 'name', 'Translated name of projectile'), true, false)) + "\u003EName\u003C\u002Fth\u003E\u003Cth" + (" class=\"projectile damageid\""+pug_attr("title", t('table.th.prj', 'damageid', 'ID of damage data used (hex)'), true, false)) + "\u003EDmg\u003C\u002Fth\u003E\u003Cth" + (" class=\"projectile caliber\""+pug_attr("title", t('table.th.prj', 'caliber', 'Caliber (mm)'), true, false)) + "\u003ECal\u003C\u002Fth\u003E\u003Cth" + (" class=\"projectile pellets\""+pug_attr("title", t('table.th.prj', 'pellets', 'Pellet Count'), true, false)) + "\u003E\u003C\u002Fth\u003E\u003Cth" + (" class=\"projectile velocity\""+pug_attr("title", t('table.th.prj', 'velocity', 'Muzzle Velocity (m/s)'), true, false)) + "\u003Ev\u003C\u002Fth\u003E\u003Cth" + (" class=\"projectile mass\""+pug_attr("title", t('table.th.prj', 'mass', 'Mass (grams)'), true, false)) + "\u003Em\u003C\u002Fth\u003E\u003Cth" + (" class=\"projectile drag\""+pug_attr("title", t('table.th.prj', 'drag', 'Drag Coefficient Multiplier'), true, false)) + "\u003E\u003Cspan\u003Ec\u003C\u002Fspan\u003E\u003Csub\u003Ed\u003C\u002Fsub\u003E\u003C\u002Fth\u003E\u003Cth" + (" class=\"projectile gravity\""+pug_attr("title", t('table.th.prj', 'gravity', 'Gravity Multiplier'), true, false)) + "\u003Eg\u003C\u002Fth\u003E\u003Cth" + (" class=\"projectile penslow\""+pug_attr("title", t('table.th.prj', 'penslow', 'Penetration Slowdown'), true, false)) + "\u003EPenSl\u003C\u002Fth\u003E\u003C\u002Ftr\u003E";
// iterate objects
;(function(){
  var $$obj = objects;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var obj = $$obj[pug_index0];
pug_html = pug_html + "\u003Ctr class=\"projectile-row\"\u003E\u003Ctd class=\"projectile idx\"\u003E" + (pug_escape(null == (pug_interp = obj.idx) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"projectile id\"\u003E" + (pug_escape(null == (pug_interp = id(obj)) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"projectile name\"\u003E" + (pug_escape(null == (pug_interp = obj.name) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"projectile damageid\"\u003E" + (pug_escape(null == (pug_interp = id(obj, 'damageid')) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"projectile caliber\"\u003E" + (pug_escape(null == (pug_interp = obj.caliber) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd" + (pug_attr("class", pug_classes(["projectile","pellets",{ muted: obj.pellets < 2 }], [false,false,true]), false, false)) + "\u003E" + (pug_escape(null == (pug_interp = obj.pellets) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"projectile velocity\"\u003E" + (pug_escape(null == (pug_interp = obj.velocity) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"projectile mass\"\u003E" + (pug_escape(null == (pug_interp = obj.mass) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"projectile drag\"\u003E" + (pug_escape(null == (pug_interp = obj.drag) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"projectile gravity\"\u003E" + (pug_escape(null == (pug_interp = obj.gravity) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"projectile penslow\"\u003E" + (pug_escape(null == (pug_interp = obj.penslow) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var obj = $$obj[pug_index0];
pug_html = pug_html + "\u003Ctr class=\"projectile-row\"\u003E\u003Ctd class=\"projectile idx\"\u003E" + (pug_escape(null == (pug_interp = obj.idx) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"projectile id\"\u003E" + (pug_escape(null == (pug_interp = id(obj)) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"projectile name\"\u003E" + (pug_escape(null == (pug_interp = obj.name) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"projectile damageid\"\u003E" + (pug_escape(null == (pug_interp = id(obj, 'damageid')) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"projectile caliber\"\u003E" + (pug_escape(null == (pug_interp = obj.caliber) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd" + (pug_attr("class", pug_classes(["projectile","pellets",{ muted: obj.pellets < 2 }], [false,false,true]), false, false)) + "\u003E" + (pug_escape(null == (pug_interp = obj.pellets) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"projectile velocity\"\u003E" + (pug_escape(null == (pug_interp = obj.velocity) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"projectile mass\"\u003E" + (pug_escape(null == (pug_interp = obj.mass) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"projectile drag\"\u003E" + (pug_escape(null == (pug_interp = obj.drag) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"projectile gravity\"\u003E" + (pug_escape(null == (pug_interp = obj.gravity) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"projectile penslow\"\u003E" + (pug_escape(null == (pug_interp = obj.penslow) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E";
    }
  }
}).call(this);

};
pug_mixins["explosions"] = pug_interp = function(objects){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Ctr class=\"explosion-header\"\u003E\u003Ctd" + (" class=\"explosion idx\""+pug_attr("title", t('table.th.aoe', 'idx', 'Internal order'), true, false)) + "\u003E#\u003C\u002Ftd\u003E\u003Cth" + (" class=\"explosion id\""+pug_attr("title", t('table.th.aoe', 'id', 'ID of explosion data (hex)'), true, false)) + "\u003EID\u003C\u002Fth\u003E\u003Cth" + (" class=\"explosion name\""+pug_attr("title", t('table.th.aoe', 'name', 'Translated name of AoE source'), true, false)) + "\u003EName\u003C\u002Fth\u003E\u003Cth" + (" class=\"explosion damageid\""+pug_attr("title", t('table.th.aoe', 'damageid', 'ID of damage data used (hex)'), true, false)) + "\u003EDmg\u003C\u002Fth\u003E\u003Cth" + (" class=\"explosion radius\""+pug_attr("title", t('table.th.aoe', 'radius', 'Radius Inner/Outer/Non-Damage (m)'), true, false)+" colspan=\"3\"") + "\u003ERadius\u003C\u002Fth\u003E\u003C\u002Ftr\u003E";
// iterate objects
;(function(){
  var $$obj = objects;
  if ('number' == typeof $$obj.length) {
      for (var pug_index1 = 0, $$l = $$obj.length; pug_index1 < $$l; pug_index1++) {
        var obj = $$obj[pug_index1];
pug_html = pug_html + "\u003Ctr class=\"explosion-row\"\u003E\u003Ctd class=\"explosion idx\"\u003E" + (pug_escape(null == (pug_interp = obj.idx) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"explosion id\"\u003E" + (pug_escape(null == (pug_interp = id(obj)) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"explosion name\"\u003E" + (pug_escape(null == (pug_interp = obj.name) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"explosion damageid\"\u003E" + (pug_escape(null == (pug_interp = id(obj, 'damageid')) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"explosion r1\"\u003E" + (pug_escape(null == (pug_interp = obj.r1) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"explosion r2\"\u003E" + (pug_escape(null == (pug_interp = obj.r2) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"explosion r3\"\u003E" + (pug_escape(null == (pug_interp = obj.r3) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index1 in $$obj) {
      $$l++;
      var obj = $$obj[pug_index1];
pug_html = pug_html + "\u003Ctr class=\"explosion-row\"\u003E\u003Ctd class=\"explosion idx\"\u003E" + (pug_escape(null == (pug_interp = obj.idx) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"explosion id\"\u003E" + (pug_escape(null == (pug_interp = id(obj)) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"explosion name\"\u003E" + (pug_escape(null == (pug_interp = obj.name) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"explosion damageid\"\u003E" + (pug_escape(null == (pug_interp = id(obj, 'damageid')) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"explosion r1\"\u003E" + (pug_escape(null == (pug_interp = obj.r1) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"explosion r2\"\u003E" + (pug_escape(null == (pug_interp = obj.r2) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"explosion r3\"\u003E" + (pug_escape(null == (pug_interp = obj.r3) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E";
    }
  }
}).call(this);

};
pug_mixins["damages"] = pug_interp = function(objects){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Ctr class=\"damage-header\"\u003E\u003Ctd" + (" class=\"damage idx\""+pug_attr("title", t('table.th.dmg', 'idx', 'Internal order'), true, false)) + "\u003E#\u003C\u002Ftd\u003E\u003Cth" + (" class=\"explosion id\""+pug_attr("title", t('table.th.dmg', 'id', 'ID of damage data (hex)'), true, false)) + "\u003EID\u003C\u002Fth\u003E\u003Cth" + (" class=\"explosion name\""+pug_attr("title", t('table.th.dmg', 'name', 'Translated name of damage source'), true, false)) + "\u003EName\u003C\u002Fth\u003E\u003Cth" + (" class=\"explosion dmg\""+pug_attr("title", t('table.th.dmg', 'dmgs3', 'Damage type / Base damage / Damage vs Massive'), true, false)+" colspan=\"3\"") + "\u003EDamage\u003C\u002Fth\u003E\u003Cth" + (" class=\"explosion ap\""+pug_attr("title", t('table.th.dmg', 'ap', 'Armor Penetration, varies by context'), true, false)+" colspan=\"4\"") + "\u003EAP\u003C\u002Fth\u003E\u003Cth" + (" class=\"explosion demo\""+pug_attr("title", t('table.th.dmg', 'demo', 'Demolition Force'), true, false)) + "\u003EDF\u003C\u002Fth\u003E\u003Cth" + (" class=\"explosion stun\""+pug_attr("title", t('table.th.dmg', 'stun', 'Stagger Value'), true, false)) + "\u003ESV\u003C\u002Fth\u003E\u003Cth" + (" class=\"explosion push\""+pug_attr("title", t('table.th.dmg', 'push', 'Push Force'), true, false)) + "\u003EPF\u003C\u002Fth\u003E\u003Cth" + (" class=\"explosion effect\""+pug_attr("title", t('table.th.dmg', 'effects8', 'Status Effects'), true, false)+" colspan=\"8\"") + "\u003EEffects\u003C\u002Fth\u003E\u003C\u002Ftr\u003E";
// iterate objects
;(function(){
  var $$obj = objects;
  if ('number' == typeof $$obj.length) {
      for (var pug_index2 = 0, $$l = $$obj.length; pug_index2 < $$l; pug_index2++) {
        var obj = $$obj[pug_index2];
pug_html = pug_html + "\u003Ctr class=\"explosion-row\"\u003E\u003Ctd class=\"damage idx\"\u003E" + (pug_escape(null == (pug_interp = obj.idx) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"damage id\"\u003E" + (pug_escape(null == (pug_interp = id(obj)) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"damage name\"\u003E" + (pug_escape(null == (pug_interp = obj.name) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd" + (pug_attr("class", pug_classes(["damage","dmgtype",{muted: !obj.type }], [false,false,true]), false, false)) + "\u003E" + (pug_escape(null == (pug_interp = obj.type) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"damage dmg\"\u003E" + (pug_escape(null == (pug_interp = obj.dmg) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"damage massive\"\u003E" + (pug_escape(null == (pug_interp = obj.mass) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
// iterate [1, 2, 3, 4]
;(function(){
  var $$obj = [1, 2, 3, 4];
  if ('number' == typeof $$obj.length) {
      for (var pug_index3 = 0, $$l = $$obj.length; pug_index3 < $$l; pug_index3++) {
        var i = $$obj[pug_index3];
var ap = obj[`ap${i}`]
pug_html = pug_html + "\u003Ctd" + (pug_attr("class", pug_classes(["damage","ap",`ap-${ap} ap-list-${i}`], [false,false,true]), false, false)) + "\u003E" + (pug_escape(null == (pug_interp = ap) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index3 in $$obj) {
      $$l++;
      var i = $$obj[pug_index3];
var ap = obj[`ap${i}`]
pug_html = pug_html + "\u003Ctd" + (pug_attr("class", pug_classes(["damage","ap",`ap-${ap} ap-list-${i}`], [false,false,true]), false, false)) + "\u003E" + (pug_escape(null == (pug_interp = ap) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003Ctd class=\"damage demo\"\u003E" + (pug_escape(null == (pug_interp = obj.demo) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"damage stun\"\u003E" + (pug_escape(null == (pug_interp = obj.stun) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"damage push\"\u003E" + (pug_escape(null == (pug_interp = obj.push) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
// iterate [1, 2, 3, 4]
;(function(){
  var $$obj = [1, 2, 3, 4];
  if ('number' == typeof $$obj.length) {
      for (var pug_index4 = 0, $$l = $$obj.length; pug_index4 < $$l; pug_index4++) {
        var i = $$obj[pug_index4];
var func = obj[`func${i}`]
var param = obj[`param${i}`]
pug_html = pug_html + "\u003Ctd" + (pug_attr("class", pug_classes(["damage","effect",{muted: !func}], [false,false,true]), false, false)) + "\u003E" + (pug_escape(null == (pug_interp = func) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd" + (pug_attr("class", pug_classes(["damage","effect-param",{muted: !func}], [false,false,true]), false, false)) + "\u003E" + (pug_escape(null == (pug_interp = param) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index4 in $$obj) {
      $$l++;
      var i = $$obj[pug_index4];
var func = obj[`func${i}`]
var param = obj[`param${i}`]
pug_html = pug_html + "\u003Ctd" + (pug_attr("class", pug_classes(["damage","effect",{muted: !func}], [false,false,true]), false, false)) + "\u003E" + (pug_escape(null == (pug_interp = func) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd" + (pug_attr("class", pug_classes(["damage","effect-param",{muted: !func}], [false,false,true]), false, false)) + "\u003E" + (pug_escape(null == (pug_interp = param) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ftr\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index2 in $$obj) {
      $$l++;
      var obj = $$obj[pug_index2];
pug_html = pug_html + "\u003Ctr class=\"explosion-row\"\u003E\u003Ctd class=\"damage idx\"\u003E" + (pug_escape(null == (pug_interp = obj.idx) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"damage id\"\u003E" + (pug_escape(null == (pug_interp = id(obj)) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"damage name\"\u003E" + (pug_escape(null == (pug_interp = obj.name) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd" + (pug_attr("class", pug_classes(["damage","dmgtype",{muted: !obj.type }], [false,false,true]), false, false)) + "\u003E" + (pug_escape(null == (pug_interp = obj.type) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"damage dmg\"\u003E" + (pug_escape(null == (pug_interp = obj.dmg) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"damage massive\"\u003E" + (pug_escape(null == (pug_interp = obj.mass) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
// iterate [1, 2, 3, 4]
;(function(){
  var $$obj = [1, 2, 3, 4];
  if ('number' == typeof $$obj.length) {
      for (var pug_index5 = 0, $$l = $$obj.length; pug_index5 < $$l; pug_index5++) {
        var i = $$obj[pug_index5];
var ap = obj[`ap${i}`]
pug_html = pug_html + "\u003Ctd" + (pug_attr("class", pug_classes(["damage","ap",`ap-${ap} ap-list-${i}`], [false,false,true]), false, false)) + "\u003E" + (pug_escape(null == (pug_interp = ap) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index5 in $$obj) {
      $$l++;
      var i = $$obj[pug_index5];
var ap = obj[`ap${i}`]
pug_html = pug_html + "\u003Ctd" + (pug_attr("class", pug_classes(["damage","ap",`ap-${ap} ap-list-${i}`], [false,false,true]), false, false)) + "\u003E" + (pug_escape(null == (pug_interp = ap) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003Ctd class=\"damage demo\"\u003E" + (pug_escape(null == (pug_interp = obj.demo) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"damage stun\"\u003E" + (pug_escape(null == (pug_interp = obj.stun) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd class=\"damage push\"\u003E" + (pug_escape(null == (pug_interp = obj.push) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
// iterate [1, 2, 3, 4]
;(function(){
  var $$obj = [1, 2, 3, 4];
  if ('number' == typeof $$obj.length) {
      for (var pug_index6 = 0, $$l = $$obj.length; pug_index6 < $$l; pug_index6++) {
        var i = $$obj[pug_index6];
var func = obj[`func${i}`]
var param = obj[`param${i}`]
pug_html = pug_html + "\u003Ctd" + (pug_attr("class", pug_classes(["damage","effect",{muted: !func}], [false,false,true]), false, false)) + "\u003E" + (pug_escape(null == (pug_interp = func) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd" + (pug_attr("class", pug_classes(["damage","effect-param",{muted: !func}], [false,false,true]), false, false)) + "\u003E" + (pug_escape(null == (pug_interp = param) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index6 in $$obj) {
      $$l++;
      var i = $$obj[pug_index6];
var func = obj[`func${i}`]
var param = obj[`param${i}`]
pug_html = pug_html + "\u003Ctd" + (pug_attr("class", pug_classes(["damage","effect",{muted: !func}], [false,false,true]), false, false)) + "\u003E" + (pug_escape(null == (pug_interp = func) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd" + (pug_attr("class", pug_classes(["damage","effect-param",{muted: !func}], [false,false,true]), false, false)) + "\u003E" + (pug_escape(null == (pug_interp = param) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ftr\u003E";
    }
  }
}).call(this);

};
pug_html = pug_html + "\u003Cheader class=\"menu\"\u003E";
if (nerdScope) {
pug_html = pug_html + "\u003Cnav class=\"links\"\u003E\u003Cul\u003E";
// iterate nerdScopes
;(function(){
  var $$obj = nerdScopes;
  if ('number' == typeof $$obj.length) {
      for (var pug_index7 = 0, $$l = $$obj.length; pug_index7 < $$l; pug_index7++) {
        var scope = $$obj[pug_index7];
pug_html = pug_html + "\u003Cli\u003E\u003Ca" + (pug_attr("onclick", `switchScope('${scope}')`, true, false)) + "\u003E" + (pug_escape(null == (pug_interp = scope) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index7 in $$obj) {
      $$l++;
      var scope = $$obj[pug_index7];
pug_html = pug_html + "\u003Cli\u003E\u003Ca" + (pug_attr("onclick", `switchScope('${scope}')`, true, false)) + "\u003E" + (pug_escape(null == (pug_interp = scope) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fnav\u003E";
}
pug_html = pug_html + "\u003Cdiv class=\"spacer\"\u003E\u003C\u002Fdiv\u003E\u003Cselect class=\"select\" id=\"lang-select\" name=\"Lang\" onchange=\"switchLang()\"\u003E";
// iterate langs
;(function(){
  var $$obj = langs;
  if ('number' == typeof $$obj.length) {
      for (var pug_index8 = 0, $$l = $$obj.length; pug_index8 < $$l; pug_index8++) {
        var l = $$obj[pug_index8];
pug_html = pug_html + "\u003Coption" + (pug_attr("value", l, true, false)+pug_attr("selected", (l === lang), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = l) ? "" : pug_interp)) + "\u003C\u002Foption\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index8 in $$obj) {
      $$l++;
      var l = $$obj[pug_index8];
pug_html = pug_html + "\u003Coption" + (pug_attr("value", l, true, false)+pug_attr("selected", (l === lang), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = l) ? "" : pug_interp)) + "\u003C\u002Foption\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fselect\u003E\u003C\u002Fheader\u003E";
if (nerdScope) {
pug_html = pug_html + "\u003Ctable\u003E";
if (nerdScope === 'damages') {
pug_mixins["damages"](sorted(damages));
}
else
if (nerdScope === 'projectiles') {
pug_mixins["projectiles"](sorted(projectiles));
}
else
if (nerdScope === 'explosions') {
pug_mixins["explosions"](sorted(explosions));
}
pug_html = pug_html + "\u003C\u002Ftable\u003E";
}}.call(this,"damages" in locals_for_with?locals_for_with.damages:typeof damages!=="undefined"?damages:undefined,"explosions" in locals_for_with?locals_for_with.explosions:typeof explosions!=="undefined"?explosions:undefined,"id" in locals_for_with?locals_for_with.id:typeof id!=="undefined"?id:undefined,"lang" in locals_for_with?locals_for_with.lang:typeof lang!=="undefined"?lang:undefined,"langs" in locals_for_with?locals_for_with.langs:typeof langs!=="undefined"?langs:undefined,"nerdScope" in locals_for_with?locals_for_with.nerdScope:typeof nerdScope!=="undefined"?nerdScope:undefined,"nerdScopes" in locals_for_with?locals_for_with.nerdScopes:typeof nerdScopes!=="undefined"?nerdScopes:undefined,"projectiles" in locals_for_with?locals_for_with.projectiles:typeof projectiles!=="undefined"?projectiles:undefined,"sorted" in locals_for_with?locals_for_with.sorted:typeof sorted!=="undefined"?sorted:undefined,"t" in locals_for_with?locals_for_with.t:typeof t!=="undefined"?t:undefined));;return pug_html;}