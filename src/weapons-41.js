const $ = document.createElement.bind(document)
let active = {}
let table
let modes

fetch('src/weapons-41.json')
  .then(res => res.json())
  .then(data => {
    table = data.weapons
    modes = data.modes
    populateModes()
    readState()
  })

const stateKeys = [
  'g',
  'm',
  'c',
  'w',
]
function readState() {
  const params = window.location.hash.slice(1).split('&')
  for(const p of params) {
    const [k, v] = p.split('=')
    if(!stateKeys.includes(k)) continue
    active[k] = v
  }
  pickMode(active.m || 'stats')
  pickChar(active.c || 'ranger', active.w)
  populateWeapons(active.m, active.c, active.w)
}

function writeState() {
  window.location.hash = stateKeys
    .filter(k => active[k])
    .map(k => `${k}=${active[k]}`)
    .join('&')
  populateWeapons(active.m, active.c, active.w)
}

function pickMode(mode) {
  const button = document
    .querySelector('#mode-button')
  button.classList.remove(...button.classList)
  button.classList.add('button')
  const m = modes.find(m => m.name.toLowerCase() === mode)
  styleButton({
    button,
    label: m ? m.name : 'Stats',
    cls: mode,
    cutPoint: 4,
  })

  const item = document
    .querySelector(`#mode-dropdown .${mode}`)

  if(active.modeEl) {
    active.modeEl.classList.remove('selected')
  }
  item.classList.add('selected')
  Object.assign(active, {
    m: mode,
    modeEl: item,
  })
}

function styleButton({
  button,
  label,
  cls,
  cutPoint,
}) {
  button.innerHTML = ''
  boldify(button, label, cutPoint)
  button.classList.add(cls)
  return button
}

function pickChar(ch, cat) {
  const chIdx = characters.indexOf(ch)
  const button = document
    .querySelector(`#char-button`)
  button.classList.remove(...button.classList)
  button.classList.add('button')
  styleButton({
    button,
    label: charLabels[characters.indexOf(ch)],
    cls: ch,
    cutPoint: 3,
  })
  const item = document
    .querySelector(`#char-dropdown .${ch}`)

  if(active.charEl) {
    active.charEl.classList.remove('selected')
  }
  item.classList.add('selected')
  Object.assign(active, {
    c: ch,
    charEl: item,
  })

  const catTabs = document.getElementById('category-dropdown')
  catTabs.innerHTML = ''
  const from = chIdx * 10
  const to = from + 10
  for(let i = from; i < to; i++) {
    const cat = categories[i]
    if(!cat) continue
    const label = catLabels[i]
    const li = $('a')
    li.classList.add(cat)
    if(label === 'CC Strikers' || label === 'CC Piercers') {
      boldify(li, label, 4)
    } else {
      boldify(li, label, 2)
    }
    li.addEventListener('click', () => {
      pickCategory(ch, cat)
      writeState()
    })
    catTabs.appendChild(li)
  }

  pickCategory(ch, cat || categories[from])
}

function pickCategory(ch, cat) {
  const button = document
    .querySelector('#category-button')
  let item = document
    .querySelector(`#category-dropdown .${cat}`)
  if(!item) {
    item = document
      .querySelector(`#category-dropdown a`)
    cat = item.classList[0]
  }
  button.classList.remove(...button.classList)
  button.classList.add('button')
  const cutPoint = ['spear', 'hammer'].includes(cat) ? 4 : 2
  styleButton({
    button,
    label: catLabels[categories.indexOf(cat)] || '',
    cls: cat,
    cutPoint,
  })

  active.catEl?.classList.remove('selected')
  item.classList.add('selected')
  Object.assign(active, {
    w: cat,
    catEl: item,
  })
}

function populateModes() {
  const modeMenu = document.querySelector('#mode-dropdown')
  for(const mode of modes) {
    const mLabel = mode.name
    const id = mode.name.toLowerCase()
    const item = $('a')
    item.classList.add(id)
    boldify(item, mLabel, 4)
    modeMenu.appendChild(item)
    item.addEventListener('click', () => {
      pickMode(id)
      writeState()
    })
  }
}

function populateWeapons(m, ch, cat) {
  const mode = modes.find(mode => mode.name.toLowerCase() === m)
  if(mode) {
    populateWeaponDrops(mode, ch, cat)
  } else {
    populateWeaponStats(ch, cat)
  }
}

function missionFor(missions, min, max, v) {
  const ratio = (v - min) / (max - min)
  return Math.min(Math.max((missions - 1) * ratio, 0) + 1, missions)
}

function populateWeaponDrops(mode, ch, cat) {
  const extra = document.getElementById('extra')
  extra.textContent = ''

  const weaponTable = document.getElementById('weapons-table')
  weaponTable.innerHTML = ''
  const weapons = table
    .filter(t => t.character === ch && t.category === cat)
  const thead = $('thead')
  const theadrow = $('tr')
  const dropHeaders = headers.slice(0, 4)
  for(const header of dropHeaders) {
    const cell = $('th')
    cell.textContent = header.label
    theadrow.appendChild(cell)
  }
  const { difficulties, missions } = mode

  for(const difficulty of difficulties) {
    const cell = $('th')
    cell.textContent = difficulty.name
    cell.classList.add(difficulty.name)
    cell.setAttribute('colspan', 2)
    theadrow.appendChild(cell)
  }

  thead.appendChild(theadrow)
  weaponTable.appendChild(thead)

  const tbody = $('tbody')
  for(const weapon of weapons) {
    const row = $('tr')
    const { level, odds } = weapon
    for(const header of dropHeaders) {
      const cell = $('td')
      const contents = header.cb(weapon)
      if(contents instanceof HTMLElement) {
        cell.appendChild(contents)
      } else {
        cell.textContent = contents
      }
      cell.classList.add(header.label)
      row.appendChild(cell)
    }
    for(const difficulty of difficulties) {
      const { drops: [start, end], dropSpread: spread } = difficulty
      const isDropped = +(odds || 100)
        && level >= start - spread
        && level <= end
      if(!isDropped) {
        const cell = $('td')
        cell.textContent = '-'
        cell.setAttribute('colspan', 2)
        row.appendChild(cell)
        continue
      }
      const minCell = $('td')
      const maxCell = $('td')
      minCell.textContent = Math.ceil(missionFor(
        missions,
        start,
        end,
        level))
      maxCell.textContent = Math.floor(missionFor(
        missions,
        start - spread,
        end - spread,
        level))
      row.appendChild(minCell)
      row.appendChild(maxCell)
    }
    tbody.appendChild(row)
  }
  weaponTable.appendChild(tbody)
}

function populateWeaponStats(ch, cat) {
  const extra = document.getElementById('extra')
  const weaponTable = document.getElementById('weapons-table')
  weaponTable.innerHTML = ''
  const weapons = table
    .filter(t => t.character === ch && t.category === cat)
    .flatMap(w => [w, ...(w.weapons || []), ...(w.attacks || [])])
  const thead = $('thead')
  const theadrow = $('tr')
  for(const header of headers) {
    if(header.iff && !header.iff(ch, cat)) {
      continue
    }
    const cell = $('th')
    cell.textContent = header.label
    theadrow.appendChild(cell)
  }
  thead.appendChild(theadrow)
  weaponTable.appendChild(thead)

  const tbody = $('tbody')
  for(const weapon of weapons) {
    const row = $('tr')
    for(const header of headers) {
      if(header.iff && !header.iff(ch, cat)) {
        continue
      }
      const cell = $('td')
      const contents = header.cb(weapon)
      if(contents instanceof HTMLElement) {
        cell.appendChild(contents)
      } else {
        cell.textContent = contents
      }
      cell.classList.add(header.label)
      row.appendChild(cell)
    }
    tbody.appendChild(row)
  }
  weaponTable.appendChild(tbody)
  if(ch === 'ranger' && cat === 'special') {
    extra.innerHTML = '*Assuming flame hits every frame of duration.'
  } else if(cat === 'support') {
    extra.innerHTML = '*All ammo combined'
  } else if(cat === 'deploy') {
    extra.innerHTML = '*All sentries combined'
  } else if(cat === 'missile') {
    extra.innerHTML = '*With 0 lock time'
  } else {
    extra.innerHTML = ''
  }
}

function shotDamage(wpn) {
  return Math.abs(wpn.damage
    * (wpn.count || 1)
    * (wpn.shots || 1)
  )
}

function burstDamage(wpn) {
  return shotDamage(wpn) * (wpn.burst || 1)
}

function burstTime(wpn) {
  return (wpn.burst || 1) * (wpn.burstRate || 0) + (wpn.interval || 1)
}

function magDamage(wpn) {
  return shotDamage(wpn) * wpn.ammo
}

function quickDps(wpn) {
  const bDmg = burstDamage(wpn)
  const bTime = burstTime(wpn)
  return (bDmg * FPS / bTime)
}

function tacticalDps(wpn) {
  const mDmg = magDamage(wpn)
  const interval = wpn.interval || 1
  const bursts = wpn.ammo / (wpn.burst || 1)
  const bTime = burstTime(wpn)
  let magTime = bursts * bTime + wpn.reload - interval
  if(wpn.lockType === 1) {
    let count = wpn.lockDist === 1 ? wpn.count : wpn.ammo
    magTime += (wpn.lockTime || 0) * count
  }
  return (mDmg * FPS / (magTime || interval))
}

const FPS = 60
const headers = [{
  label: '✓',
  cb: wpn => {
    if(!wpn.id) {
      return ''
    }
    const el = $('input')
    const key = `owned.${wpn.id}`
    el.setAttribute('type', 'checkbox')
    if(localStorage[key]) {
      el.setAttribute('checked', '1')
    }
    el.addEventListener('change', () => {
      const v = 1 - (localStorage[key] || 0)
      localStorage[key] = v
      if(v) {
        el.setAttribute('checked', '1')
      } else {
        el.removeAttribute('checked')
      }
    })
    return el
  },
}, {
  label: 'Lv',
  cb: wpn => {
    const { level } = wpn
    if(level == null) {
      return '-'
    }
    const el = $('div')
    const difficulty = modes[0]
      .difficulties
      .slice(1)
      .find(d => d.drops[1] >= level)
    if(!difficulty) {
      return level
    }
    el.classList.add(difficulty.name)
    el.textContent = level
    return el
  }
}, {
  label: 'Name',
  cb: wpn => {
    const el = $('div')
    el.classList.add('name')
    el.textContent += wpn.name
    return el
  },
}, {
  label: 'Weight',
  iff: (ch, cat, wpn) => {
    return active.mode && activemode !== 'state'
  },
  cb: wpn => {
    const odds = wpn.odds || 100
    if(!+odds) {
      const el = $('div')
      if(wpn.level === 100) { // Genocide weapons
        el.classList.add('na')
        el.textContent = 'N/A'
      } else {
        el.classList.add(odds)
        el.textContent = odds.toUpperCase()
      }
      return el
    }
    const label = `${odds}%`
    if(odds !== 100) {
      const el = $('div')
      el.classList.add(odds < 100 ? 'lowOdds' : 'highOdds')
      el.textContent = label
      return el
    }
    return label
  }
}, {
  iff: (ch, cat, wpn) => {
    if([
      'tank',
      'ground',
      'heli',
      'mech',
    ].includes(cat)) {
      return true
    }
    return false
  },
  label: 'HP',
  cb: wpn => {
    if(!wpn.hp) {
      return '-'
    }
    return wpn.hp
  }
}, {
  iff: (ch, cat, wpn) => {
    if([
      'raid',
      'particle',
      'plasma',
    ].includes(cat)) {
      return false
    }
    if(ch === 'winger' && [
      'sniper',
      'missile'
    ].includes(cat)) {
      return false
    }
    return true
  },
  label: 'Cap',
  cb: wpn => {
    if(!wpn.ammo) {
      return '-'
    }
    return wpn.ammo
  }
}, {
  iff: (ch, cat, wpn) => {
    if([
      'hammer',
      'shield',
    ].includes(cat)) {
      return true
    }
    return false
  },
  label: 'Def',
  cb: wpn => {
    if(!wpn.defense) {
      return '-'
    }
    return `${wpn.defense}%`
  },
}, {
  iff: (ch, cat, wpn) => {
    if([
      'hammer',
    ].includes(cat)) {
      return true
    }
    return false
  },
  label: 'Chg',
  cb: wpn => {
    if(!wpn.charge) {
      return '-'
    }
    return +(wpn.charge / FPS).toFixed(1)
  },
}, {
  iff: (ch, cat, wpn) => {
    if([
      'guide',
    ].includes(cat)) {
      return false
    }
    return true
  },
  label: 'Dmg',
  cb: wpn => {
    if(!wpn.damage) {
      return '-'
    }
    if(['power', 'guard'].includes(wpn.supportType)) {
      return `${wpn.damage}x`
    }
    if(wpn.damage < 1) {
      return +(wpn.damage).toFixed(2)
    }
    let dmg = +Math.abs(wpn.damage).toFixed(1)
    if(wpn.count > 1) {
      dmg = `${dmg} x ${wpn.count}`
    }
    if(wpn.type === 'SentryGunBullet01') {
      return dmg
    }
    if(wpn.category === 'raid') {
      return dmg
    }
    if(wpn.shots > 1) {
      dmg = `${dmg} x ${wpn.shots}`
    }
    return dmg
  },
}, {
  iff: (ch, cat, wpn) => {
    if(ch === 'ranger' && [
      'special',
    ].includes(cat)) {
      return true
    }
    return false
  },
  label: 'Dmg*',
  cb: wpn => {
    if(!wpn.continous) {
      return '-'
    }
    let dmg = +Math.abs(wpn.damage).toFixed(1)
    return +(dmg * wpn.duration).toFixed(1)
  },
}, {
  iff: (ch, cat, wpn) => {
    if(cat === 'special' && [
      'winger',
      'bomber',
    ].includes(ch)) {
      return false
    }
    if([
      'rocket',
      'grenade',
      'missile',
      'special',
      'plasma',
      'hammer',
      'heavy',
      'raid',
      'support',
      'limpet',
      'deploy',
      'tank',
      'ground',
      'heli',
      'mech',
    ].includes(cat)) {
      return true
    }
    return false
  },
  label: 'Area',
  cb: wpn => {
    if(!wpn.radius) return '-'
    return wpn.radius
  },
}, {
  iff: (ch, cat, wpn) => {
    if([
      'support',
      'grenade',
    ].includes(cat)) {
      return true
    }
    if(ch === 'winger' && [
      'special',
    ].includes(cat)) {
      return true
    }
    return false
  },
  label: 'Dur',
  cb: wpn => {
    const duration = wpn.fuse || wpn.duration
    if(!duration) return '-'
    return +(duration / FPS).toFixed(1)
  },
}, {
  iff: (ch, cat, wpn) => {
    if([
      'raid',
      'deploy',
    ].includes(cat)) {
      return true
    }
    if(ch === 'winger' && [
      'special',
    ].includes(cat)) {
      return true
    }
    return false
  },
  label: 'Shots',
  cb: wpn => {
    if(!wpn.shots) {
      return '-'
    }
    if(wpn.type === 'BombBullet01') {
      return '-'
    }
    switch(wpn.strikeType) {
      case 'bomber': {
        return `${wpn.shots} x ${wpn.units}`
      }
      default: { // Shelling
        return wpn.shots
      }
    }
  },
}, {
  iff: (ch, cat, wpn) => {
    if([
      'shotgun',
      'sniper',
      'spear',
      'heavy',
      'tank',
      'ground',
      'heli',
      'mech',
    ].includes(cat)) {
      return true
    }
    if([
      'winger',
      'bomber',
    ].includes(ch)) {
      return false
    }
    if(ch === 'ranger' && [
      'special',
    ].includes(cat)) {
      return true
    }
    return false
  },
  label: 'P',
  cb: wpn => {
    if(wpn.piercing) {
      return '✓'
    }
    return ''
  },
}, {
  iff: (ch, cat, wpn) => {
    if([
      'raid',
      'support',
      'hammer',
      'shield',
    ].includes(cat)) {
      return false
    }
    if(ch === 'winger' && [
      'special',
    ].includes(cat)) {
      return false
    }
    return true
  },
  label: 'RoF',
  cb: wpn => {
    if(!wpn.interval) {
      return '-'
    }
    if(wpn.category === 'particle') {
      return +(FPS / wpn.reload).toFixed(2)
    }
    if(wpn.category == 'missile' && wpn.character === 'winger') {
      return +(FPS / wpn.reload).toFixed(2)
    }
    if(wpn.ammo < 2 && !wpn.reload) {
      return 60
    }
    if(wpn.ammo < 2) {
      return '-'
    }
    if(wpn.burst > 1 && wpn.interval > 1) {
      const burstRof = FPS / wpn.burstRate
      const rof = FPS / ((wpn.burst - 1) * wpn.burstRate + wpn.interval)
      return `${+rof.toFixed(2)} x ${wpn.burst}`
    }
    if(wpn.shotInterval) {
      return +(FPS / wpn.shotInterval).toFixed(2)
    }
    const rof = +(FPS / (wpn.interval || 1)).toFixed(2)
    if(rof === Infinity) {
      return '-'
    }
    return rof
  }
}, {
  iff: (ch, cat, wpn) => {
    if([
      'missile',
      'homing',
      'ground',
      'heli',
      'mech',
    ].includes(cat)) {
      return true
    }
    return false
  },
  label: 'Lock',
  cb: wpn => {
    if(!wpn.lockTime) {
      return '-'
    }
    return +(wpn.lockTime / FPS).toFixed(2)
  }
}, {
  label: 'Rel',
  cb: wpn => {
    if(wpn.reload <= 0 || !wpn.reload) {
      return '-'
    }
    if(wpn.credits) {
      return wpn.reload
    }
    return +(wpn.reload / FPS).toFixed(2)
  }
}, {
  iff: (ch, cat, wpn) => {
    if([
      'missile',
      'special',
      'raid',
      'deploy',
      'hammer',
      'spear',
      'shield',
    ].includes(cat)) {
      return false
    }
    return true
  },
  label: 'Acc',
  cb: wpn => {
    if(!wpn.speed) return '-'
    if(wpn.accuracy == null) return '-'
    return [
      [0.9995, 'S++'],
      [0.9975, 'S+'],
      [0.99, 'A+'],
      [0.985, 'A'],
      [0.98, 'A-'],
      [0.97, 'B+'],
      [0.95, 'B'],
      [0.9, 'B-'],
      [0.85, 'C+'],
      [0.8, 'C'],
      [0.75, 'C-'],
      [0.7, 'D'],
      [0.6, 'E'],
      [0.5, 'F'],
      [0.4, 'G'],
      [0.2, 'I'],
      [0.0, 'J'],
      [-0.2, 'K'],
      [-0.4, 'L'],
      [-Infinity, 'Z'],
    ].find(([a]) => a <= wpn.accuracy)[1]
  }
}, {
  iff: (ch, cat, wpn) => {
    if(cat === 'shield') {
      return true
    }
    if(ch === 'winger') {
      return true
    }
    return false
  },
  label: 'Enr',
  cb: wpn => {
    return +wpn.energy.toFixed(1)
  }
}, {
  iff: (ch, cat, wpn) => {
    if([
      'support',
      'tank',
      'ground',
      'heli',
      'mech',
    ].includes(cat)) {
      return false
    }
    if(ch === 'winger' && [
      'special',
    ].includes(cat)) {
      return false
    }
    return true
  },
  label: 'Rng',
  cb: wpn => {
    if(wpn.category === 'shield') {
      return `${wpn.range}°`
    }
    if(wpn.category === 'missile') {
      return wpn.lockRange
    }
    if(!wpn.range) {
      return '-'
    }
    return wpn.range.toFixed(0)
  },
}, {
  iff: (ch, cat, wpn) => {
    if([
      'hammer',
      'spear',
      'raid',
      'missile',
      'shield',
    ].includes(cat)) {
      return false
    }
    if(ch === 'winger' && [
      'special',
    ].includes(cat)) {
      return false
    }
    return true
  },
  label: 'Spd',
  cb: wpn => {
    const spd = (wpn.speed * FPS)
    if(spd > 10000) return '-'
    if(!spd) return '-'
    return spd.toFixed(0)
  },
}, {
  iff: (ch, cat, wpn) => {
    if([
      'guide',
    ].includes(cat)) {
      return true
    }
    return false
  },
  label: 'L.Spd',
  cb: wpn => {
    return `${wpn.guideSpeed}x`
  },
}, {
  iff: (ch, cat, wpn) => {
    if([
      'guide',
    ].includes(cat)) {
      return true
    }
    return false
  },
  label: 'L.Rng',
  cb: wpn => {
    return `${wpn.guideRange}x`
  },
}, {
  iff: (ch, cat, wpn) => {
    if([
      'particle',
      'plasma',
      'guide',
      'raid',
      'shield',
      'missile',
      'hammer',
    ].includes(cat)) {
      return false
    }
    if(ch === 'winger' && [
      'sniper',
    ].includes(cat)) {
      return false
    }
    if(ch === 'bomber' && [
      'special',
    ].includes(cat)) {
      return false
    }
    return true
  },
  label: 'DPS',
  cb: wpn => {
    if(!wpn.damage) {
      return '-'
    }
    if(!wpn.interval) {
      return '-'
    }
    if(wpn.ammo < 2 && !wpn.duration) {
      return '-'
    }
    if(wpn.shotInterval) { // Turret
      return quickDps({
        ...wpn,
        shots: 1,
        interval: wpn.shotInterval,
      })
    }
    if(wpn.burst > 100) {
      return wpn.damage * FPS / wpn.burstRate
    }
    if(wpn.category === 'support') {
      if(['guard', 'power'].includes(wpn.supportType)) {
        return '-'
      }
      return +(wpn.damage * FPS).toFixed(1)
    }
    if(wpn.duration && !wpn.continous) {
      const bDmg = burstDamage(wpn)
      return +(bDmg * FPS / wpn.duration).toFixed(1)
    }
    return +quickDps(wpn).toFixed(1)
  },
}, {
  iff: (ch, cat, wpn) => {
    if([
      'support',
      'deploy',
    ].includes(cat)) {
      return true
    }
    if(ch === 'ranger' && [
      'special',
    ].includes(cat)) {
      return true
    }
    return false
  },
  label: 'DPS*',
  cb: wpn => {
    if(wpn.category === 'support') {
      if(['guard', 'power'].includes(wpn.supportType)) {
        return '-'
      }
      if(wpn.ammo < 2) {
        return '-'
      }
      return +(wpn.damage * FPS * wpn.ammo).toFixed(1)
    }
    if(wpn.shotInterval) { // Turret
      return quickDps({
        ...wpn,
        shots: wpn.ammo,
        interval: wpn.shotInterval,
      })
    }
    if(wpn.continous) {
      return +(wpn.damage
        * wpn.duration
        * FPS
        / (wpn.interval || 1)
      ).toFixed(1)
    }
    return '-'
  },
}, {
  iff: (ch, cat, wpn) => {
    if([
      'guide',
      'raid',
      'support',
      'hammer',
      'shield',
      'tank',
      'ground',
      'heli',
      'mech',
    ].includes(cat)) {
      return false
    }
    if(ch === 'bomber' && [
      'special',
    ].includes(cat)) {
      return false
    }
    return true
  },
  label: 'TDPS',
  cb: wpn => {
    if(!wpn.damage) {
      return '-'
    }
    if(!wpn.ammo) {
      return '-'
    }
    if(wpn.attacks?.length) {
      return '-'
    }
    if(wpn.reload < 0) {
      return '-'
    }
    if(wpn.shotInterval) { // Turret
      return +tacticalDps({
        ...wpn,
        shots: wpn.ammo,
        interval: wpn.shotInterval,
        ammo: wpn.shots,
      }).toFixed(1)
    }
    return +tacticalDps(wpn).toFixed(1)
  },
}, {
  iff: (ch, cat, wpn) => {
    if(ch === 'ranger' && [
      'special',
    ].includes(cat)) {
      return true
    }
    if(cat === 'missile') {
      return true
    }
    return false
  },
  label: 'TDPS*',
  cb: wpn => {
    if(wpn.continous) { // Flamethrower
      return +(tacticalDps(wpn) * wpn.duration).toFixed(1)
    }
    if(wpn.lockType === 1) {
      return +tacticalDps({
        ...wpn,
        lockType: 0,
      }).toFixed(1)
    }
    return '-'
  },
}, {
  iff: (ch, cat, wpn) => {
    if([
      'guide',
      'hammer',
      'shield',
    ].includes(cat)) {
      return false
    }
    if(ch === 'bomber' && [
      'special',
    ].includes(cat)) {
      return false
    }
    return true
  },
  label: 'Total',
  cb: wpn => {
    if(wpn.attacks?.length) {
      const attacks = [wpn.damage, ...wpn.attacks.map(a => a.damage)]
      const dump = Array(wpn.ammo)
        .fill(0)
        .map((w, i) => attacks[i % attacks.length])
        .reduce((dmg, sum) => dmg + sum, 0)
      return +(dump * (wpn.count || 1)).toFixed(1)
    }
    if(!wpn.damage) {
      return '-'
    }
    if(!wpn.ammo) {
      return '-'
    }
    if(wpn.category === 'support') {
      if(['guard', 'power'].includes(wpn.supportType)) {
        return '-'
      }
      return +(wpn.damage * wpn.duration).toFixed(1)
    }
    const dump = Math.abs(wpn.damage
      * (wpn.count || 1)
      * (wpn.ammo || 1)
      * (wpn.shots || 1)
      * (wpn.units || 1))
    return +dump.toFixed(1)
  },
}, {
  iff: (ch, cat, wpn) => {
    if([
      'support',
    ].includes(cat)) {
      return true
    }
    if(ch === 'ranger' && [
      'special',
    ].includes(cat)) {
      return true
    }
    return false
  },
  label: 'Total*',
  cb: wpn => {
    if(wpn.category === 'support') {
      if(['guard', 'power'].includes(wpn.supportType)) {
        return '-'
      }
      if(wpn.ammo < 2) {
        return '-'
      }
      return +(wpn.damage * wpn.duration * wpn.ammo).toFixed(1)
    }
    if(wpn.continous) {
      const dump = Math.abs(wpn.damage
        * (wpn.count || 1)
        * wpn.ammo
        * (wpn.shots || 1)
        * (wpn.units || 1))
      return +(dump * wpn.duration).toFixed(1)
    }
    return '-'
  },
}]

const characters = [
  'ranger',
  'winger',
  'fencer',
  'bomber',
]

const charLabels = [
  'Ranger',
  'Wing Diver',
  'Fencer',
  'Air Raider',
]

const modeMenu = document.querySelector('#mode-dropdown')
{
  const label = 'Stats'
  const item = $('a')
  item.classList.add('stats')
  boldify(item, label, 4)
  modeMenu.appendChild(item)
  item.addEventListener('click', () => {
    pickMode('stats')
    writeState()
  })
}

const charMenu = document.querySelector('#char-dropdown')
for(let i = 0; i < characters.length; i++) {
  const c = characters[i]
  const cLabel = charLabels[i]
  const item = $('a')
  styleButton({
    button: item,
    label: cLabel,
    cls: c,
    cutPoint: 3,
  })
  charMenu.appendChild(item)
  item.addEventListener('click', () => {
    pickChar(c)
    writeState()
  })
}

function boldify(el, str, cutPoint=2) {
  const bolded = str.slice(0, cutPoint)
  const rem = str.slice(cutPoint)
  const bold = $('b')
  bold.textContent = bolded
  el.appendChild(bold)
  el.innerHTML += rem
  return el
}

const categories = [
  'assault',
  'shotgun',
  'sniper',
  'rocket',
  'missile',
  'grenade',
  'special',
  null,
  null,
  null,
  'short',
  'laser',
  'electro',
  'particle',
  'sniper',
  'plasma',
  'missile',
  'special',
  null,
  null,
  'hammer',
  'spear',
  'shield',
  'light',
  'heavy',
  'missile',
  null,
  null,
  null,
  null,
  'guide',
  'raid',
  'support',
  'limpet',
  'deploy',
  'special',
  'tank',
  'ground',
  'heli',
  'mech',
]

const supports = [
  'tank',
  'ground',
  'heli',
  'mech',
]

const catLabels = [
  'Assault Rifles',
  'Shotguns',
  'Sniper Rifles',
  'Rocket Launchers',
  'Missile Launchers',
  'Grenades',
  'Special Weapons',
  null,
  null,
  null,
  'Short-Range',
  'Mid-Rg Lasers',
  'Mid-Rg Electroshock',
  'Particle Cannons',
  'Sniper Weapons',
  'Ranged Attacks',
  'Homing Weapons',
  'Special Weapons',
  null,
  null,
  'CC Strikers',
  'CC Piercers',
  'Shields',
  'Automatic Artillery',
  'Artillery',
  'Missile Launchers',
  null,
  null,
  null,
  null,
  'Guidance Equipment',
  'Calling for Support',
  'Support Equipment',
  'Limpet Guns',
  'Stationary Weapons',
  'Special Weapons',
  'Tanks',
  'Ground Vehicles',
  'Helicopters',
  'Power Suits',
]
