/**
   * Create By Dika Ardnt.
   * Recode By SkylarKaf
   * Follow https://github.com/DikaArdnt & https://github.com/SkylarKaf      
*/
require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const hx = require('hxz-api')
const xa = require('xfarr-api')
const moment = require('moment-timezone')
const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')
const primbon = new Primbon()
//======================[ R P G ]======================//
const { addInventoriDarah, cekDuluJoinAdaApaKagaDiJson, addDarah, kurangDarah, getDarah }  = require('./src/darah.js')
 
const { cekInventoryAdaAtauGak, addInventori, addBesi, addEmas, addEmerald, addUmpan, addPotion, kurangBesi, kurangEmas, kurangEmerald, kurangUmpan, kurangPotion, getBesi, getEmas, getEmerald, getUmpan, getPotion } = require('./src/alat_tukar.js')

const { 
      addInventoriMonay, 
      cekDuluJoinAdaApaKagaMonaynyaDiJson, 
      addMonay, 
      kurangMonay, 
      getMonay 
      } = require('./src/monay.js')

const { 
      addInventoriLimit, 
      cekDuluJoinAdaApaKagaLimitnyaDiJson, 
      addLimit, 
      kurangLimit, 
      getLimit 
      } = require('./src/limit.js')

const { 
      cekDuluHasilBuruanNya, 
      addInventoriBuruan, 
      addIkan,
      addAyam, 
      addKelinci, 
      addDomba, 
      addSapi,
      addGajah,
      kurangIkan,
      kurangAyam, 
      kurangKelinci, 
      kurangDomba, 
      kurangSapi,
      kurangGajah,
      getIkan,
      getAyam, 
      getKelinci, 
      getDomba,
      getSapi,
      getGajah
      } = require('./src/buruan.js')
   
   
   let DarahAwal =  global.rpg.darahawal
   const isDarah = cekDuluJoinAdaApaKagaDiJson(m.sender)   
   const isCekDarah = getDarah(m.sender)
   const isUmpan = getUmpan(m.sender)
   const isPotion = getPotion(m.sender)
   const isIkan = getIkan(m.sender)
   const isAyam = getAyam(m.sender)
   const isKelinci = getKelinci(m.sender)
   const isDomba = getDomba(m.sender)
   const isSapi = getSapi(m.sender)
   const isGajah = getGajah(m.sender)
   const isMonay = getMonay(m.sender)
   const isLimit = getLimit(m.sender)
   const isBesi = getBesi(m.sender)
   const isEmas = getEmas(m.sender)
   const isEmerald = getEmerald(m.sender)
   const isInventory = cekInventoryAdaAtauGak(m.sender)
   const isInventoriBuruan = cekDuluHasilBuruanNya(m.sender)
   const isInventoryLimit = cekDuluJoinAdaApaKagaLimitnyaDiJson(m.sender)
   const isInventoryMonay = cekDuluJoinAdaApaKagaMonaynyaDiJson(m.sender)
   const ikan = ['🐟','🐠','🐡']   

//======================[ R P G DataBase ]======================//
let _buruan = JSON.parse(fs.readFileSync('./src/hasil_buruan.json'));
let _darahOrg = JSON.parse(fs.readFileSync('./src/darah.json'))

//======================[ Read DataBase ]======================//
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []

module.exports = astro = async (astro, m, chatUpdate, store) => {
    try {
        const from = m.key.remoteJid
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (m.xtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.xtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.xtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.xtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        var prefix = /^[簞?Ａ繩?繞??Ｔ瞼簧??=|~!#$%^&.?/\\穢^z+*@,;]/.test(budy) ? budy.match(/^[簞?Ａ繩?繞??Ｔ瞼簧??=|~!#$%^&.?/\\穢^z+*,;]/gi) : '#'
        const isCmd = body.startsWith(prefix)
        const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await astro.decodeJid(astro.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const isMedia = /image|video|sticker|audio/.test(mime)	
        // Group
        const groupMetadata = m.isGroup ? await astro.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
	
	
	
	try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
    
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
            }
		
	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = true
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: true,		
	    }
	    
        } catch (err) {
            console.error(err)
        }
	    
        // Public & Self
        if (!astro.public) {
            if (!m.key.fromMe) return
        }
       

        // Push Message To Console && Auto Read
        if (m.message) {
            astro.sendReadReceipt(m.chat, m.sender, [m.key.id])
            console.log(chalk.black(chalk.bgSilver('[ MSG ]')), chalk.red(chalk.bgWhite(budy || m.mtype)) + '\n' + chalk.white('~>'), chalk.green(m.isGroup ? pushname : 'Private', + 'Chat :' + m.chat))
        }
	
	// reset limit every 12 hours
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })
        
	// auto set bio
	// ${runtime(process.uptime())}
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await astro.setStatus(`🎯 • Runtime: ${runtime(process.uptime())}`)
		setting.status = new Date() * 1
	    }
	}
	    
	  // Anti Link
        if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        replay(`「 ANTI LINK 」\n\nKamu terdeteksi mengirim link group, maaf kamu akan di kick !`)
        if (!isBotAdmins) return replay(`Jadikan Bot Sebagai Admin Terlebih Dahulu`)
        let gclink = (`https://chat.whatsapp.com/`+await astro.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return replay(`「 ANTI LINK 」\n\nSystem Mendeteksi Kamu Mengirim Link Grub Ini,\n*• Pembatalan Kick Succes ✓*`)
        if (isAdmins) return replay(`「 ANTI LINK 」\n\nSystem Mendeteksi Kamu Adalah Admin Grub,\n*• Pembatalan Kick Succes ✓*`)
        if (isCreator) return replay(`「 ANTI LINK 」\n\nSystem Mendeteksi Kamu Adalah Owner Bot,\n*• Pembatalan Kick Succes ✓*`)
        astro.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
        
      // Mute Chat
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }

     // Target
        const replySc = (teks) => {
            astro.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": `${global.botnma}`,"body": `Copas? Kasih Credit jan lupa`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./media/github.jpg`),"sourceUrl": "https://github.com/SkylarKaf"}}}, { quoted: m})
        }       
        const replay = (teks) => {
            astro.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": `${global.botnma}`,"body": `${time}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./media/reply.jpg`),"sourceUrl": "https://skylarkaf.github.io/"}}}, { quoted: m})
        }
        const reply = (teks) => {
            astro.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": `${global.botnma}`,"body": `${time}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./media/reply.jpg`),"sourceUrl": "https://skylarkaf.github.io/"}}}, { quoted: m})
        }
        
        //member? idk
        let picaks = [flaming,fluming,flarun,flasmurf]
		let picak = picaks[Math.floor(Math.random() * picaks.length)]
        
        // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: astro.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, astro.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        astro.ev.emit('messages.upsert', msg)
        }
	    
	if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            astro.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await astro.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, astro.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else replay('*Jawaban Salah!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await replay(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else replay('*Jawaban Salah!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await astro.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, astro.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else replay('*Jawaban Salah!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await astro.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, astro.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else replay('*Jawaban Salah!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await astro.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, astro.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else replay('*Jawaban Salah!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await astro.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, astro.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await astro.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, astro.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else replay('*Jawaban Salah!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await astro.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, astro.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else replay('*Jawaban Salah!*')
        }
        
        //TicTacToe
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // m.reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { // nek wayahku
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    replay({
	    '-3': 'Game telah berakhir',
	    '-2': 'Invalid',
	    '-1': 'Posisi Invalid',
	    0: 'Posisi Invalid',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await astro.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await astro.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
	    astro.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    astro.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) astro.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    if (!roof.pilih2) astro.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) astro.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    astro.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /gunting/i
	    let b = /batu/i
	    let k = /kertas/i
	    let reg = /^(gunting|batu|kertas)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    replay(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih2) astro.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    replay(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih) astro.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    astro.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            replay(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            replay(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
	    
        switch(command) {
                              
//═══════════[Start Case

case 'enters': {
                if (!text) throw 'Masukkan Link Group!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                replay(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await astro.groupAcceptInvite(result).then((res) => replay(jsonformat(res))).catch((err) => replay(jsonformat(err)))
            }
     break       
     	  case 'afk': {
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                replay(`${m.pushName} Telah Afk${text ? ': ' + text : ''}`)
            }
            break	       
            case 'chat': {
                if (!isCreator) throw mess.owner
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    astro.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    astro.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    astro.chatModify({  archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    astro.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    astro.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    astro.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    astro.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
            
case 'ephemeral': {
                if (!isCreator) throw mess.owner
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin                
                if (!text) throw 'Masukkan value enable/disable'
                if (args[0] === 'enable') {
                    await astro.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'disable') {
                    await astro.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
	    
//═══════════[About Bot

case 'sewabot': case'sewa': case 'join':{
argumen = `*Hai Kak ${pushname} 🤗*

Ingin Sewa ${global.botnma} Untuk Grub Kamu? Bisa banget!!
hargai terjangkau

*cuma 5rb untuk 2 grub selama 30hari*

Bot Di dukung dengan:
Internet speed 1gbs, Hight server Ram Fast Respon dan 24jam aktifikasi! 

Tertarik untuk sewa? Chat Saja owner kami`

message = await prepareWAMessageMedia({ image: await getBuffer(`https://uploader.caliph.my.id/file/XIeblLsuT4.jpg`)}, { upload:   astro.waUploadToServer })
              template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                  templateMessage: {
                      hydratedTemplate: {
                        imageMessage: message.imageMessage,
                          hydratedContentText: argumen,
                            hydratedFooterText: `Harap Baca S&K Bot Sebelum Menyewa!`,
                             hydratedButtons: [{                                
                                quickReplyButton: {
                                    displayText: 'S&K',
                                    id: `${prefix}syarat`
                                }
                               }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                astro.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
   case 'syarat': case 'ketentuanbot': case 's&k': case 'S&K': case 'rules':{
 anu = `*• S&K Umum*

⸙ Jangan salah gunakan/menjadi seller bot ini secara ilegal!
⸙ Jangan telfon bot! sekali telfon? Block Tanpa Toleransi!
⸙ Jangan terlalu spam bot! karna hal itu bisa memicu pemblokiran bot!

*• S&K Untuk Para Penyewa*

⸙ Jika ingin menyewa harap chat langsung ke inti
⸙ Jangan spam owner jika owner belum membalas chat anda!
⸙ Jangan telfon owner!
⸙ Jangan Sok asik amcrit

*📌 Note!*

• Bot ini masih dalam pengembangan, wajar jika banyak bug/error Harap maklumi 🙏
  ~ skylarkaf`
   replay(anu)
      }
   break
   case 'owner': case 'creator': {
                astro.sendContact(m.chat, global.owner, m)
            }
            break
  

 case 'tqtt': case'tqtq':{
 efhzm =`*Big Thanks To:*
 
• DikaArdnt 
https://github.com/DikaArdnt
• SkylarKaf
https://github.com/SkylarKaf
• Deff
https://github.com/DEFF1602
• Astro
https://github.com/AstroFloox`
reply(efhzm)}
   break
   case 'ping': case 'speed': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Response Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

NodeJS Memory Usaage
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                reply(respon)
            }
            break            
            case 'speedtest': {
            reply('Testing Speed...')
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
          let o
          try {
          o = await exec('python speed.py')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) replay(stdout)
        if (stderr.trim()) replay(stderr)
            }
            }
            break
//═══════════[ Rpg Menu ]═══════════\\

         //cr thunder
        case 'inventori': case 'inventory': case 'profile':{
  if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
  if (!isInventory){ addInventori(m.sender) }
  if (!isInventoriBuruan){ addInventoriBuruan(m.sender) }
  
  let teksehmazeh = `_[ INFO USER ]_\n\n`
     teksehmazeh += `*❤ ️•Darah kamu:* ${getDarah(m.sender)}\n`
     teksehmazeh += `*◻️️ •Besi kamu:* ${getBesi(m.sender)}\n`
     teksehmazeh += `*🌟 •Emas Kamu:* ${getEmas(m.sender)}\n`
     teksehmazeh += `*❇️ •Emerald Kamu:* ${getEmerald(m.sender)}\n`
     teksehmazeh += `*⏺ •️Limit kamu:* ${getLimit(m.sender)}\n`
     teksehmazeh += `*🧪 •Potion Kamu:* ${getPotion(m.sender)}\n\n`
     teksehmazeh += `_[ HASIL BURUAN ]_\n\n`
     teksehmazeh += `*🐟 •Ikan:* ${getIkan(m.sender)}\n`
     teksehmazeh += `*🐔 •Ayam:* ${getAyam(m.sender)}\n`
     teksehmazeh += `*🐇 •Kelinci:* ${getKelinci(m.sender)}\n`
     teksehmazeh += `*🐑 •Domba:* ${getDomba(m.sender)}\n`
     teksehmazeh += `*🐄 •Sapi:* ${getSapi(m.sender)}\n`
     teksehmazeh += `*🐘 •Gajah:* ${getGajah(m.sender)}\n\n`  
  reply(teksehmazeh)
  }
  break
 case 'leaderboard':
{      
   let txt = `「 *LEADERBOARD* 」\n\n`
     for (let i of _buruan){
     txt += `➸ *ID :* ${i.id}\n`
     txt += `*🐟 Ikan* : ${i.ikan}\n`
     txt += `*🐔 Ayam* : ${i.ayam}\n`
     txt += `*🐇 Kelinci* : ${i.kelinci}\n`
     txt += `*🐑 Domba* : ${i.domba}\n`
     txt += `*🐄 Sapi* : ${i.sapi}\n`
     txt += `*🐘 Gajah* : ${i.gajah}\n\n`
     }
    reply(txt)       
  }
 break
case 'mining': case 'mine':{
  if (!isInventory){ addInventori(m.sender) }
  if (isCekDarah < 1) return reply(`Kamu kelelahan!, cobalah heal menggunakan potion`) 
  let besi = [1,2,5,0,3,0,1,1,4,1,5,0,0]
  let emas = [0,1,2,3,0,0,0,1,1,0,0,2]
  let emerald = [0,0,1,0,0,1,0,2,1,0,0,1]
  var besinya = besi[Math.floor(Math.random() * besi.length)]  
  var emasnya = emas[Math.floor(Math.random() * emas.length)]  
  var emeraldnya = emerald[Math.floor(Math.random() * emerald.length)]  
  setTimeout( () => {
  let caption = `[ Hasil Tambang ]\n*Iron* : ${besinya}\n*Gold* : ${emasnya}\n*Emerald* : ${emeraldnya}`
  let buttons = [
      {
       buttonId: `${prefix + command}`, 
       buttonText: {
        displayText: 'Menambang Lagi ⛏️'
      }, type: 1},
    ]
    let buttonMessage = {
      image: { url: './media/slime.jpg' },
      caption: caption,
      footer: pushname,
      buttons: buttons,
      headerType: 4
     }
     astro.sendMessage(from, buttonMessage, { quoted: m })
   
   }, 7000)  
  setTimeout( () => {
  reply(`${pushname} Mulai Menambang  ⛏️`)     
  }, 1500)
  kurangDarah(m.sender, 10)
  addBesi(m.sender, besinya)
  addEmas(m.sended, emasnya)
  addEmerald(m.sender, emeraldnya)	     
  }   
  break  
  //transaksi
 case 'beli': case 'buy':{
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
 if (!isInventoryMonay){ addInventoriMonay(m.sender) }
 if (!isInventory){ addInventori(m.sender) }
 if (!q) return reply(`Apa yg ingin kamu beli?\n\n1.potion\n2.baitfood\n\nContoh: ${prefix + command} baitfood`)
 var anu = args[1]
  if (args[0] === 'potion'){
  let noh = 100000 * anu
 if (!args[1]) return reply(`Contoh : ${prefix + command} potion 2\n 1 Potion = 100000 Money`)
 if (isMonay < noh) return reply('Uang mu tidak mencukupi')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addPotion(m.sender, apalu)
  setTimeout( () => {
  reply(`Transaksi Berhasil ✔️\n*Sisa uangmu* : ${getMonay(m.sender)}\n*Potion Mu:* ${getPotion(m.sender)}`)
  }, 2000) 
 } else 
 if (args[0] === 'baitfood'){
  let noh = 5000 * anu
 if (!args[1]) return reply(`Contoh : ${prefix + command} baitfood 2\n 1 Bait Food = 2500 Money`)
 if (isMonay < noh) return reply('Uang mu tidak mencukupi')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addUmpan(m.sender, apalu)
  setTimeout( () => {
  reply(`Transaksi Berhasil ✔️\n*Sisa uangmu* : ${getMonay(m.sender)}\n*Bait Food Mu:* ${getUmpan(m.sender)}`)
  }, 2000) 
  } else 
  if (args[0] === 'limit'){
  let noh = 35000 * anu
 if (!args[1]) return reply(`Contoh : ${prefix + command} limit 2\n 1 Limit = 35000 Money`)
 if (isMonay < noh) return reply('Uang mu tidak mencukupi')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addLimit(m.sender, apalu)
  setTimeout( () => {
  reply(`Transaksi Berhasil ✔️\n*Sisa uangmu* : ${getMonay(m.sender)}\n*Your Limit* : ${getLimit(m.sender)}`)
  }, 2000) 
  } else { reply("Incorrect Format!") }
 }
 break
 
 case 'sell': case 'jual':{
 if (!q) return  reply(`What Do You Want To Sell??\nContoh : ${prefix + command} fish 2`)
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
 if (!isInventoryMonay){ addInventoriMonay(m.sender) }
 if (!isInventory){ addInventori(m.sender) }
 var anu = args[1]
 if (args[0] === 'fish'){
 if (isIkan < anu) return reply(`Kamu Tidak Memiliki Cukup Ikan Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return reply(`Contoh : ${prefix + command} fish 2\n 1 Fish = 1500 Money`)
 kurangIkan(m.sender, anu)
 let monaynya = 1500 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaksi Berhasil ✔️\n*Sisa uangmu* : ${getMonay(m.sender)}\n*Sisa Ikan Mu:* ${getIkan(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'chicken'){
 if (isAyam < anu) return reply(`Kamu Tidak Memiliki Cukup Ayam Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return reply(`Contoh : ${prefix + command} chicken 2\n 1 Chicken = 2500 Money`)
 kurangAyam(m.sender, anu)
 let monaynya = 2500 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaksi Berhasil ✔️\n*Sisa uangmu* : ${getMonay(m.sender)}\n*Sisa Ayam Mu:* ${getAyam(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'rabbit'){
 if (isKelinci < anu) return reply(`Kamu Tidak Memiliki Cukup Kelinci Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return reply(`Contoh : ${prefix + command} rabbit 2\n 1 Rabbit = 3000 Money`)
 kurangKelinci(m.sender, anu)
 let monaynya = 3000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaksi Berhasil ✔️\n*Sisa uangmu* : ${getMonay(m.sender)}\n*Sisa Kelinci Mu:* ${getKelinci(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'sheep'){
 if (isDomba < anu) return reply(`Kamu Tidak Memiliki Cukup Domba Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return reply(`Contoh : ${prefix + command} domba 2\n 1 Sheep = 5000 money`)
 kurangDomba(m.sender, anu)
 let monaynya = 5000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaksi Berhasil ✔️\n*Sisa uangmu* : ${getMonay(m.sender)}\n*Sisa Domba Mu:* ${getDomba(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'cow'){
 if (isSapi < anu) return reply(`Kamu Tidak Memiliki Cukup Sapi Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return reply(`Contoh : ${prefix + command} cow 2\n 1 Cow = 10000 Money`)
 kurangSapi(m.sender, anu)
 let monaynya = 10000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaksi Berhasil ✔️\n*Sisa uangmu* : ${getMonay(m.sender)}\n*Sisa Sapi Mu:* ${getSapi(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'elephant'){
 if (isGajah < anu) return reply(`Kamu Tidak Memiliki Cukup Gajah Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return reply(`Contoh : ${prefix + command} elephant 2\n 1 Elephant = 15000 Money`)
 kurangGajah(m.sender, anu)
 let monaynya = 15000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaksi Berhasil ✔️\n*Sisa uangmu* : ${getMonay(m.sender)}\n*Sisa Gajahmu:* ${getGajah(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'iron'){
 if (isBesi < anu) return reply(`Kamu Tidak Memiliki Cukup Besi Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return reply(`Contoh : ${prefix + command} iron 2\n 1 Iron = 15000 Money`)
 kurangBesi(m.sender, anu)
 let monaynya = 16000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaksi Berhasil ✔️\n*Sisa uangmu* : ${getMonay(m.sender)}\n*Sisa Besi Mu:* ${getBesi(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'gold'){
 if (isEmas < anu) return reply(`Kamu Tidak Memiliki Cukup Emas Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return reply(`Contoh : ${prefix + command} gold 2\n 1 Gold = 50000 Money`)
 kurangEmas(m.sender, anu)
 let monaynya = 50000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaksi Berhasil ✔️\n*Sisa uangmu* : ${getMonay(m.sender)}\n*Sisa Emas Mu:* ${getEmas(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'emerald'){
 if (isEmerald < anu) return reply(`Kamu Tidak Memiliki Cukup Emerald Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return reply(`Contoh : ${prefix + command} emerald 2\n 1 Emerald = 100000 Money`)
 kurangEmerald(m.sender, anu)
 let monaynya = 100000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaksi Berhasil ✔️\n*Sisa uangmu* : ${getMonay(m.sender)}\n*Sisa Emerald Mu:* ${getEmerald(m.sender)}`)
  }, 2000) 
 } else { reply("Incorrect Format!") }

 }
 break
 case 'heal':{
 if (!isCekDarah < 1) return reply('Kamu Hanya Bisa Menggunakannya Saat Darahmu 0')
 if (isCekDarah > 100) return reply('Darahmu Masih Full')
 if (isPotion < 1) return reply(`Kamu Tidak Punya Potion, Belilah dengan cara #buypotion _jumlah_`) 
 addDarah(m.sender, 100)
 kurangPotion(m.sender, 1)
 reply('Success! Darahmu Full Kembali')
 }
 break 
 case 'hunt': case 'hunting': case'berburu':{
 if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
 if (isCekDarah < 1) return reply('Your Blood Is Gone, Try To Heal Using Potions') 
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
  let luka = ["Tertusuk Duri Saat Berburu","Terpleset Ke Jurang Saat Berburu","Tertangkap Hewan Buas","Tidak Berhati-hati","Terjerat Akar","Terjatuh Saat berburu"]
  let location = ["Hutan","Hutan Amazon","Hutan Tropis","Padang Rumput","Hutan Afrika","Pegunungan"]
   var ikanmu = Math.ceil(Math.random() * 10)
   var ayam = Math.ceil(Math.random() * 8)
   var kelinci = Math.ceil(Math.random() * 7)
   var dombanya = [3,0,4,0,5,4,6,0,1,0,2,3,0,3,0,1]
   var sapinya = [2,0,3,0,4,0,5,0,1,0,2,0,3,0,1]
   var gajahnya = [1,0,4,0,2,0,1,0,2,1,3,0,1]
   var domba = dombanya[Math.floor(Math.random() * dombanya.length)] 
   var sapi = sapinya[Math.floor(Math.random() * sapinya.length)] 
   var gajah = gajahnya[Math.floor(Math.random() * gajahnya.length)]    
   var lukanya = luka[Math.floor(Math.random() * luka.length)]
   var lokasinya = location[Math.floor(Math.random() * location.length)]
 if (lokasinya === 'Hutan') {
    var image = './media/devil.jpg'
   } else
 if (lokasinya === 'Hutan Amazon') {
    var image =  './media/devil.jpg'
   } else
 if (lokasinya === 'Hutan Tropis') {
    var image = './media/devil.jpg'
   } else
 if (lokasinya === 'Padang Rumput') {
    var image = './media/devil.jpg'
   } else
 if (lokasinya === 'Hutan Afrika') {
    var image = './media/devil.jpg'
   } else
 if (lokasinya === 'Pegunungan') {
   var image = './media/devil.jpg'
   }
 setTimeout( () => {
  let teksehmazeh = `_[ Hasil Berburu ]_\n`
     teksehmazeh += `*🐟 Ikan* : ${ikanmu}\n`
     teksehmazeh += `*🐔 Ayam* : ${ayam}\n`
     teksehmazeh += `*🐇 Kelinci* : ${kelinci}\n`
     teksehmazeh += `*🐑 Domba* : ${domba}\n`
     teksehmazeh += `*🐄 Sapi* : ${sapi}\n`
     teksehmazeh += `*🐘 Gajah* : ${gajah}\n\n`
     teksehmazeh += `_[ INFO ]_\n`
     teksehmazeh += `*Lokasi* : ${lokasinya}\n`
     teksehmazeh += `*Luka* : ${lukanya}, Darah - 10\n`
     teksehmazeh += `*Sisa Darah* : ${getDarah(m.sender)}\n`
    let buttons = [
      {
       buttonId: `${prefix + command}`, 
       buttonText: {
        displayText: 'Berburu Lagi ️🏹'
      }, type: 1},
    ]
    let buttonMessage = {
      image: { url: image },
      caption: teksehmazeh,
      footer: pushname,
      buttons: buttons,
      headerType: 4
     }
     astro.sendMessage(from, buttonMessage, { quoted: m })      
  }, 5000)  
 setTimeout( () => {
  reply(`${pushname} Mulai Berburu Di ${lokasinya}`)     
  }, 1000) 
 addIkan(m.sender, ikanmu) 
   addAyam(m.sender, ayam) 
   addKelinci(m.sender, kelinci)
   addDomba(m.sender, domba)
   addSapi(m.sender, sapi)
  addGajah(m.sender, gajah)
 kurangDarah(m.sender, 10)
 }
 break

//═══════════[Fun Menu

case 'rate':
	   if (!text) return replay(`Contoh: ${prefix + command} gay`)
       const ra = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
	   const te = ra[Math.floor(Math.random() * ra.length)]
       astro.sendMessage(from, { text: `Rate : ${q}\nJawaban : *${te}%*` }, { quoted: m })
	   break

case 'family100': {
                if ('family100'+m.chat in _family100) {
                    replay('Masih Ada Sesi Yang Belum Diselesaikan!')
                    throw false
                }
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
                _family100['family100'+m.chat] = {
                    id: 'family100'+m.chat,
                    pesan: await astro.sendText(m.chat, hasil, m),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
            }
            break            
case 'tebak': {
                if (!text) throw `Contoh : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`
                if (args[0] === "lagu") {
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let msg = await astro.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
                    astro.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
                    tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    astro.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, astro.user.name, m)
                    delete tebaklagu[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'gambar') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    astro.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
                    tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    astro.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, astro.user.name, m)
                    delete tebakgambar[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kata') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    astro.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    astro.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, astro.user.name, m)
                    delete tebakkata[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kalimat') {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    astro.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    astro.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, astro.user.name, m)
                    delete tebakkalimat[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lirik') {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    astro.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
                    tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    astro.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, astro.user.name, m)
                    delete tebaklirik[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lontong') {
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    astro.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
                    caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
		    caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
                    })
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    astro.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, astro.user.name, m)
                    delete caklontong[m.sender.split('@')[0]]
		    delete caklontong_desk[m.sender.split('@')[0]]
                    }
                }
            }
            break
            case 'kuismath': case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                let { genMath, modes } = require('./src/math')
                if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
                let result = await genMath(text.toLowerCase())
                astro.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    replay("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            
case 'ttc': case 'ttt': case 'tictactoe': {
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            replay('Partner ditemukan!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
            if (room.x !== room.o) await astro.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await astro.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            replay('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': {
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            astro.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
            } else if (!this.game) {
            replay(`Session TicTacToe🎮 tidak ada`)
            } else throw '?'
            } catch (e) {
            m.reply('rusak')
            }
            }
            break
            case 'suitpvp': case 'suit': {
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) replay(`Selesaikan suit mu yang sebelumnya`)
	    if (m.mentionedJid[0] === m.sender) return replay(`Tidak bisa bermain dengan diri sendiri !`)
            if (!m.mentionedJid[0]) return replay(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
            this.suit[id] = {
            chat: await astro.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) astro.sendText(m.chat, `_Waktu suit habis_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break	    
                               
            case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                astro.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break



//═══════════[Groub Menu

case 'kick': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await astro.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case 'add': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await astro.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case 'promote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await astro.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => replay(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'demote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await astro.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => replay(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
  case 'setname': case 'setsubject': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await astro.groupUpdateSubject(m.chat, text).then((res) => replay(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdesk': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await astro.groupUpdateDescription(m.chat, text).then((res) => replay(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
case 'setppgroup': case 'setppgrup': case 'setppgc': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await astro.downloadAndSaveMediaMessage(quoted)
                await astro.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                reply(mess.success)
                }
                break        
    case 'tagall': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
let teks = ` *[ TAG ALL]*
 
 *⸙ Message :* \n\n${q ? q : 'Blank'}\n\n`
                for (let mem of participants) {
                teks += `⭔ @${mem.id.split('@')[0]}\n`
                }
                astro.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
                case 'hidetag': {
            if (!m.isGroup) throw mess.group
            if (!isBotAdmins) throw mess.botAdmin
            if (!isAdmins) throw mess.admin
            astro.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break	
            case 'vote': {
            if (!m.isGroup) throw mess.group
            if (m.chat in vote) throw `_Masih ada vote di chat ini!_\n\n*${prefix}hapusvote* - untuk menghapus vote`
            if (!text) throw `Masukkan Alasan Melakukan Vote, Contoh: *${prefix + command} Owner Ganteng*`
            replay(`Vote dimulai!\n\n*${prefix}upvote* - untuk ya\n*${prefix}devote* - untuk tidak\n*${prefix}cekvote* - untuk mengecek vote\n*${prefix}hapusvote* - untuk menghapus vote`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: 'UPVOTE'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: 'DEVOTE'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: astro.user.name,
                buttons: buttonsVote,
                headerType: 1
            }
            astro.sendMessage(m.chat, buttonMessageVote)
	    }
            break
               case 'upvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsUpvote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: 'UPVOTE'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: 'DEVOTE'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: astro.user.name,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            astro.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
                case 'devote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsDevote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: 'UPVOTE'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: 'DEVOTE'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: astro.user.name,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            astro.sendMessage(m.chat, buttonMessageDevote)
	}
            break
                 
case 'cekvote':
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote


©${astro.user.id}
`
astro.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            delete vote[m.chat]
            replay('Berhasil Menghapus Sesi Vote Di Grup Ini')
	    }
            break
               case 'group': case 'grup': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === 'close'){
                    await astro.groupSettingUpdate(m.chat, 'announcement').then((res) => replay(`Sukses Menutup Group`)).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await astro.groupSettingUpdate(m.chat, 'not_announcement').then((res) => replay(`Sukses Membuka Group`)).catch((err) => m.reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'group open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'group close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await astro.sendButtonText(m.chat, buttons, `Mode Group`, astro.user.name, m)

             }
            }
            break
            case 'editinfo': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
             if (args[0] === 'open'){
                await astro.groupSettingUpdate(m.chat, 'unlocked').then((res) => replay(`Sukses Membuka Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await astro.groupSettingUpdate(m.chat, 'locked').then((res) => replay(`Sukses Menutup Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await astro.sendButtonText(m.chat, buttons, `Mode Edit Info`, astro.user.name, m)

            }
            }
            break
            case 'antilink': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].antilink) return replay(`Sudah Aktif Sebelumnya`)
                db.data.chats[m.chat].antilink = true
                replay(`Antilink Aktif !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].antilink) return replay(`Sudah Tidak Aktif Sebelumnya`)
                db.data.chats[m.chat].antilink = false
                replay(`Antilink Tidak Aktif !`)
                } else {
                 let buttons = [
                        { buttonId: 'antilink on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'antilink off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await astro.sendButtonText(m.chat, buttons, `Mode Antilink`, astro.user.name, m)
                }
             }
             break
             
case 'mute': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].mute) return m.reply(`Sudah Aktif Sebelumnya`)
                db.data.chats[m.chat].mute = true
                m.reply(`${astro.user.name} telah di mute di group ini !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].mute) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                db.data.chats[m.chat].mute = false
                m.reply(`${astro.user.name} telah di unmute di group ini !`)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await astro.sendButtonText(m.chat, buttons, `Mute Bot`, astro.user.name, m)
                }
             }
             break
                    
case 'linkgroup': case 'linkgc': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                let response = await astro.groupInviteCode(m.chat)
                astro.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break   
            case 'listonline': case 'liston': {
                    if (!m.isGroup) throw mess.group
                    if (!isAdmins) throw mess.admin
                    if (!isBotAdmins) throw mess.botAdmin
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    astro.sendText(m.chat, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
//═══════════[Owner Menu

case 'react': {
                if (!isCreator) throw mess.owner
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                astro.sendMessage(m.chat, reactionMessage)
            }
            break              
            case 'leave': {
                if (!isCreator) throw mess.owner
                await astro.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'setexif': case 'getexif': {
               if (!isCreator) throw mess.owner
               if (!text) throw `Contoh : ${prefix + command} packname|author`
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          replay(`Exif berhasil diubah menjadi\n\n⭔ Packname : ${global.packname}\n⭔ Author : ${global.author}`)
            }
            break         	
case 'block': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await astro.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'unblock': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await astro.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break	  
          case 'setppbot': {
                if (!isCreator) throw mess.owner
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await astro.downloadAndSaveMediaMessage(quoted)
                await astro.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                replay(mess.success)
                }
                break
            case 'infochat': {
                if (!m.quoted) replay('Reply Pesan')
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `⭔ @${i.userJid.split('@')[0]}\n`
                    teks += ` ┗━⭔ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ⭔ *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
                }
                astro.sendTextWithMentions(m.chat, teks, m)
            }
            break            
            case 'listpc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 astro.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case 'listgc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await astro.groupMetadata(i)
                     teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Tidak diketahui'}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 astro.sendTextWithMentions(m.chat, teks, m)
             }
             break           
case 'bcgc': case 'bcgroup': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Where is the text?\n\nExample : ${prefix + command} hello guys, am back`
                let getGroups = await astro.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                reply(`Send Broadcast To ${anu.length} Group Chat, Finish Time ${anu.length * 1.5} second`)
                for (let i of anu) {
                    await sleep(1500)
                    let btn = [{
                                quickReplyButton: {
                                    displayText: 'Menu',
                                    id: `${prefix}allmenu`
                                }
                                }]
                      fatihgans = fs.readFileSync('./media/devil.jpg')
                      let txt = `「 Kenn Broadcast 」\n\n${text}\n\nNote BOT INI GRATIS JIKA INGIN MENGGUNAKAN BOT KETIK #MENU`
                      astro.send5ButImg(i, txt, astro.user.name, btn)
                    }
                reply(`Successful Sending Broadcast To ${anu.length} Group(s)`)
            }
            break           
                                                 
//═══════════[ Convert Menu ]═══════════\\

          case 'sticker': case 's': case 'stickergif': case 'sgif': case 'stiker':{
            if (!quoted) throw `Kirim Video/Image Dengan Caption ${prefix + command}`
            replay(mess.wait)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await astro.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return replay('Maksimal 10 detik!')
                let media = await quoted.download()
                let encmedia = await astro.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
                }
            }
            break                  
	       case 'smeme': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme': {
	        let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`
	        if (!/image/.test(mime)) throw respond
            if (!text) throw respond
	        replay(mess.wait)
            atas = text.split('|')[0] ? text.split('|')[0] : '-'
            bawah = text.split('|')[1] ? text.split('|')[1] : '-'
	        let dwnld = await quoted.download()
	        let { floNime } = require('./lib/uploader')
	        let fatGans = await floNime(dwnld)
	        let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${fatGans.result.url}`
	        let FaTiH = await astro.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.auhor })
	        await fs.unlinkSync(FaTiH)
            }
        break     	                   
        case 'ebinary': {
            if (!text) throw `Contoh : ${prefix + command} text`
            let { eBinary } = require('./lib/binary')
            let eb = await eBinary(text)
            m.reply(eb)
        }
        break
            case 'dbinary': {
            if (!text) throw `Contoh : ${prefix + command} text`
            let { dBinary } = require('./lib/binary')
            let db = await dBinary(text)
            m.reply(db)
        }
        break
            case 'emojimix': {
		let [emoji1, emoji2] = text.split`+`
		if (!emoji1) throw `Contoh : ${prefix + command} 😅+🤔`
		if (!emoji2) throw `Contoh : ${prefix + command} 😅+🤔`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await astro.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	    case 'emojis': {
	    if (!text) throw `Contoh : ${prefix + command} 😅`
	    replay(mess.wait)
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
		for (let res of anu.results) {
		    let encmedia = await astro.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	       case 'attp': case 'ttp': {
           if (!text) throw `Contoh : ${prefix + command} text`
           replay(mess.wait)
           await astro.sendMedia(m.chat, `https://xteam.xyz/${command}?file&text=${text}`, 'astro', 'floox', m, {asSticker: true})

         }
         break
         case 'toimage': case 'toimg': {
               if (!quoted) throw 'Reply Image'
               if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + command}*`
               replay(mess.wait)
               let media = await astro.downloadAndSaveMediaMessage(quoted)
               let ran = await getRandom('.png')
               exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                fs.unlinkSync(media)
                if (err) throw err
                let buffer = fs.readFileSync(ran)
                astro.sendMessage(m.chat, { image: buffer }, { quoted: m })
                fs.unlinkSync(ran)
            })
            }
            break
	        case 'tomp4': case 'tovideo': {
            if (!quoted) throw 'Reply Media!'
            if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
            replay(mess.wait)
		    let { webp2mp4File } = require('./lib/uploader')
            let media = await astro.downloadAndSaveMediaMessage(quoted)
            let webpToMp4 = await webp2mp4File(media)
            await astro.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
            await fs.unlinkSync(media)
            }
            break            
            case 'tomp3': {
            if (/document/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Media Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            replay(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            astro.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${astro.user.name}.mp3`}, { quoted : m })
            }
            break
            case 'tovn': case 'toptt': case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            if (!quoted) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            replay(mess.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            astro.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case 'togif': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                replay(mess.wait)
		        let { webp2mp4File } = require('./lib/uploader')
                let media = await astro.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await astro.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
	        case 'tourl': {
                replay(mess.wait)
	         	let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await astro.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
            case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                replay(mess.wait)
                let media = await astro.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                astro.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
                } catch (e) {
                m.reply(e)
                }
                break
              

//═══════════[ Anime Menu ]═══════════\\
  
case 'cry':case 'kill':case 'hug':case 'pat':case 'lick':case 'kiss':case 'bite':case 'yeet':case 'neko':case 'bully':case 'bonk':case 'wink':case 'poke':case 'nom':case 'slap':case 'smile':case 'wave':case 'awoo':case 'blush':case 'smug':case 'glomp':case 'happy':case 'dance':case 'cringe':case 'cuddle':case 'highfive':case 'handhold':
					reply(mess.wait)
					axios.get(`https://api.waifu.pics/sfw/${command}`)
					.then(({data}) => {
						astro.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
					})
					break
				case 'waifu': case 'loli':
					reply(mess.wait)
					axios.get(`https://api.waifu.pics/sfw/waifu`)
					.then(({data}) => {
					astro.sendImage(m.chat, data.url, mess.success, m)
					})
					break
					
//═══════════[ Search Menu ]═══════════\\

case 'google': {
                if (!text) throw `Contoh : ${prefix + command} fatih arridho`
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `⭔ *Title* : ${g.title}\n`
                teks += `⭔ *Description* : ${g.snippet}\n`
                teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                replay(teks)
                })
                }
                break
                case 'yts': case 'ytsearch': {
                if (!text) throw `Contoh : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `⭔ No : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Author : ${i.author.name}\n⭔ Url : ${i.url}\n\n─────────────────\n\n`
                }
                astro.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
        case 'gimage43': { //berbahaya sloer Hati" Dosa jariyah ngalir :v
        if (!text) throw `Contoh : ${prefix + command} kaori cicak`
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        let buttons = [
                    {buttonId: `gimage ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*「 GIMAGE SEARCH 」*
                    
*• Query:* ${text}
*• Media Url:* ${images}`,
                    footer: `Result From ${text}`,
                    buttons: buttons,
                    headerType: 4
                }
                astro.sendMessage(m.chat, buttonMessage, { quoted: m })
        })
        }
        break     
case 'wallpaper': {
                if (!text) throw 'Masukkan Query Title'
		let { wallpaper } = require('./lib/scraper')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `⭔ Title : ${result.title}\n⭔ Category : ${result.type}\n⭔ Detail : ${result.source}\n⭔ Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: astro.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                astro.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wikimedia': {
                if (!text) throw 'Masukkan Query Title'
                replay(mess.wait)
	        	let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `⭔ Title : ${result.title}\n⭔ Source : ${result.source}\n⭔ Media Url : ${result.image}`,
                    footer: astro.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                astro.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'pinterest': case 'pin':{
                if (!text) throw `Contoh : ${prefix + command}`
		        let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]               
                let buttons = [                   
                    {buttonId: `pinterest ${text}`, buttonText: {displayText: '► NEXT'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result },
                    caption: `⭔ Result from : ${text}\n\n*Klik Next Untuk Melanjutkan*`,
                    footer: astro.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                astro.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	        case 'ppcp': {
                replay(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                astro.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
                astro.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
            }
    break
    case 'play': case 'ytplay': {
     if (!text) throw `Masukan Query! contoh : ${prefix + command} Clarity`
     replay(mess.wait)
         let yts = require("yt-search")
            let search = await yts(text)
               let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                    jembud = `*•︎ Title:*
${anu.title}
*• Description:*
${anu.description}

⭔ Ext: Search
⭔ ID: ${anu.videoId}
⭔ Duration: ${anu.timestamp}
⭔ Viewers: ${anu.views}
⭔ Uploaded: ${anu.ago}
⭔ Author: ${anu.author.name}`
let message = await prepareWAMessageMedia({ image : { url: anu.thumbnail } }, { upload:   astro.waUploadToServer })
              template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                  templateMessage: {
                      hydratedTemplate: {
                        imageMessage: message.imageMessage,
                          hydratedContentText: jembud,
                            hydratedFooterText: `Result From ${text}`,
                             hydratedButtons: [{                                
                              urlButton: {
                                    displayText: 'Url',
                                    url: `${anu.url}`
                                }
                            }, {
                                    urlButton: {
                                    displayText: 'Channel',
                                    url: `${anu.author.url}`
                            }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Audio',
                                    id: `${prefix}ytmp3 ${anu.url} 320kbps`
                                    }
                            }, {
                                 quickReplyButton: {
                                    displayText: 'Video',
                                    id: `${prefix}ytmp4 ${anu.url} 360p`
                                    }
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: m })
                  astro.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break

//═══════════[ Download Menu ]═══════════\\

            case 'ytmp4': case 'ytvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtu.be/Cv1Sc4sep9k 360p`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 999999) return reply('Video size is too big '+util.format(media))
                astro.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Ext : MP4\n⭔ Resololution : ${args[1] || '360p'}` }, { quoted: m })
            }
            break

               //kalo kalian suka ori hapus aja ini
               /*case 'ytmp4': case 'ytvideo': {
                let { ytv } = require('./lib/y2mate')
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
               if (!text) throw `Contoh : ${prefix + command} https://youtu.be/Cv1Sc4sep9k`                                                                                    
         jembud = `⭔ Title : ${media.title}
⭔ Ext : MP4`           
let message = await prepareWAMessageMedia({ image: await getBuffer(`https://uploader.caliph.my.id/file/kBXJ9OOD0M.jpg`)}, { upload: astro.waUploadToServer })
    template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
           templateMessage: {
                hydratedTemplate: {
                     imageMessage: message.imageMessage,
                          hydratedContentText: `*• Pilih Opsi Resolusi*`,
                            hydratedFooterText: jembud,
                             hydratedButtons: [{                                
                              urlButton: {
                                    displayText: 'Url',
                                    url: `${isUrl(text)}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '240px',
                                    id: `${prefix}ytress ${isUrl(text)} 240p`
                                    }
                            }, {
                                quickReplyButton: {
                                    displayText: '360px',
                                    id: `${prefix}ytress ${isUrl(text)} 360p`
                                    }
                            }, {
                                 quickReplyButton: {
                                    displayText: '720px',
                                    id: `${prefix}ytress ${isUrl(text)} 720p`
                                    }
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: m })
                  astro.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
            case 'ytress':{
                let { ytv } = require('./lib/y2mate')
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 999999) return replay('Video size is too big '+util.format(media))
                astro.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `Result` }, { quoted: m })
            }
            break*/
            
                          
            case 'ytmp3': case 'ytaudio': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Contoh : ${prefix + command} https://youtu.be/Cv1Sc4sep9k 320kbps`
                let quality = args[1] ? args[1] : '320kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 999999) return replay('Size Media Terlalu Besar! '+util.format(media))
                astro.sendImage(m.chat, media.thumb, `*• Tunggu Sebentar Memproses Media...*\n\n⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Ext : MP3`, m)
                astro.sendMessage(m.chat, {document: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3`}, { quoted : m })
            }        
            break
            case 'ig': case 'igdl': case 'instagram': {
                if (!text) throw 'Masukan Query'
                if (!isUrl(args[0]) && !args[0].includes('instagram.com')) throw 'Link yang kamu berikan tidak.valid'
                replay(mess.wait)
                let urlnya = text
	            hx.igdl(urlnya)
	            .then(async(result) => {
		        for(let i of result.medias){
			    if(i.url.includes('mp4')){
				let link = await getBuffer(i.url)
                astro.sendMessage(m.chat, { video: link, }, { quoted: m })
                } else {
                    let link = await getBuffer(i.url)
                  astro.sendMessage(m.chat, { image: link, }, { quoted: m })                  
                }
            }
            }).catch((err) => m.reply(`Server eror`))
            }		
			break
	 		/*case 'fbdl': case 'fb': case 'facebook': {
                if (!text) throw 'Masukkan Query Link!'
                if (!isUrl(args[0]) && !args[0].includes('facebook.com')) throw 'Link yang kamu berikan tidak.valid'
                replay(mess.wait)
                xa.Facebook(`${text}`).then(async (data) => {
                    let txt = `*Facebook Downloader*\n\n`
                    txt += `*• Title :* ${data.title}\n`
                    txt += `*• Quality :* ${data.medias[1].quality}\n`
                    txt += `*• Type :* ${data.medias[1].extension}\n`
                    txt += `*• Size :* ${data.medias[1].formattedSize}\n`
                    txt += `*• Url Source :* ${data.url}\n\n`
                astro.sendMessage(m.chat, { video: { url: data.medias[1].url }, caption: `${txt}`}, { quoted: m })
                }).catch((err) => {
                    replay(`*Gagal Saat mendownload media dan mengirm video*`)
                })
            }
            break*/
            case 'igs': case 'igstory': case 'instagramstory': {
                if (!text) throw 'Enter Username!'                
                replay(mess.wait)                
	            hx.igstory(text)
	            .then(async(result) => {
		        for(let i of result.medias){
			    if(i.url.includes('mp4')){
				let link = await getBuffer(i.url)
                astro.sendMessage(m.chat, { video: link, }, { quoted: m })
                } else {
                    let link = await getBuffer(i.url)
                  astro.sendMessage(m.chat, { image: link, }, { quoted: m })                  
                }
            }
            }).catch((err) => m.reply(`Sorry the username was not found`))
            }
        break            	
	    case 'getmusic': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Contoh : ${prefix + command} 1`
                if (!m.quoted) return replay('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
	        	let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(urls[text - 1], quality)
                if (media.filesize >= 100000) return replay('File Melebihi Batas '+util.format(media))
                astro.sendImage(m.chat, media.thumb, `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${urls[text - 1]}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '128kbps'}`, m)
                astro.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'getvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Contoh : ${prefix + command} 1`
                if (!m.quoted) return replay('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(urls[text - 1], quality)
                if (media.filesize >= 100000) return replay('File Melebihi Batas '+util.format(media))
                astro.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${urls[text - 1]}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
            case 'tiktok': case'tiktoknowm': case 'ttdownload':{
            if (!text) throw 'No Query Link!'
            replay(mess.wait)
            hx.ttdownloader(q).then( data => {
            astro.sendMessage(m.chat, {
            video: { url: data.nowm },
            caption: `Result from: ${args[0]}`,
            buttons: [{buttonId: `${prefix}ttaudio ${args[0]} ${m.sender}`, buttonText: { displayText: "Get Audio" }, type: 1 }],
            }, { quoted: m })
            })
            }
            break
            case 'ttaudio': case 'tiktokaudio': case 'tiktokmp3':
            if (!text) throw 'No Query Link!'
            hx.ttdownloader(q).then( data => {
            astro.sendMessage(m.chat, { audio: { url: data.nowm }, mimetype: 'audio/mp4' }, { quoted: m })
            })
	        break               
            
            
            

            
                        
                                                
            case 'quotesanime': case 'quoteanime': {
		let { quotesAnime } = require('./lib/scraper')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `quotesanime`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                astro.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	        case 'motivasi': case 'dilanquote': case 'bucinquote': case 'katasenja': case 'puisi': {
                let anu = await fetchJson(api('zenz', '/api/'+command, {}, 'apikey'))
                let buttons = [
                    {buttonId: `motivasi`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: anu.result.message,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                astro.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break            

	      	               	      	               
        case 'ringtone': {
		if (!text) throw `Contoh : ${prefix + command} black rover`
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		astro.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
	    
	    
	    			  			  
          case 'setcmd': {
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                if (!text) throw `Untuk Command Apa?`
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                replay(`Done!`)
            }
            break
          case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `Tidak ada hash`
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'              
                delete global.db.data.sticker[hash]
                replay(`Done!`)
            }
            break
            case 'listcmd': {
                let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                astro.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
                if (!isCreator) throw mess.owner
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) throw 'Hash not found in database'
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                replay('Done!')
            }
            break
            case 'addmsg': {
                if (!m.quoted) throw 'Reply Message Yang Ingin Disave Di Database'
                if (!text) throw `Contoh : ${prefix + command} nama file`
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
                msgs[text.toLowerCase()] = quoted.fakeObj
replay(`Berhasil menambahkan pesan di list pesan sebagai '${text}'
    
Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) throw `Contoh : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
                astro.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 LIST DATABASE 」\n\n'
		for (let i of seplit) {
		    teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        replay(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return replay(`'${text}' tidak terdaftar didalam list pesan`)
		delete msgs[text.toLowerCase()]
		replay(`Berhasil menghapus '${text}' dari list pesan`)
            }
	    break	   

//═══════════[Display

case 'tes': case 'test': case 'statusbot': case 'bot': case 'status':{
                anu = `*• Status Bot : Online*`
let message = await prepareWAMessageMedia({ video: await getBuffer(global.gifmp4), gifPlayback: true }, { upload: astro.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: anu,
           hydratedFooterText: ` ⫹⫺ HostName: ${os.hostname()}\n ⫹⫺ Platform: ${os.platform()}\n ⫹⫺ TotalUser: ${Object.keys(global.db.data.users).length}`,
                            hydratedButtons: [{
                                displayText: 'Owner Number',
                                    url: 'https://wa.me/6283123381900?text=Halo+Banh'
                            }, {
                                quickReplyButton: {
                                    displayText: 'Sewa',
                                    id: `${prefix}sewa`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Menu',
                                    id: `${prefix}menu`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                astro.relayMessage(m.chat, template.message, { messageId: template.key.id })
              }
             break
case 'menu': case 'help':{
 timestampe = speed();
  latensie = speed() - timestampe   
  anukonz = ` *• Information*
╭─⭓「 User Info 」        
│• Name : ${m.pushName}
│• Limit : ${getLimit(m.sender)}
│• Darah : ${getDarah(m.sender)}
│• Besi : ${getBesi(m.sender)}
│• Emas : ${getEmas(m.sender)}
│• Emerald ${getEmerald(m.sender)}
│• Potion : ${getPotion(m.sender)}.
│
├─⭓「 WhatsApp Bot 」                
│• ⫹⫺ Botname: ${global.botnma}
│• ⫹⫺ Owner: ${global.ownernma}
│• ⫹⫺ AuthorBase: DikaArdnt
│
├───⭓「 About 」
│ ⫹⫺ Library: Baileys-Md
│ ⫹⫺ Language : Javascript
│ ⫹⫺ HostName: ${os.hostname()}
│ ⫹⫺ Platform : ${os.platform()}
│ ⫹⫺ TotalUser: ${Object.keys(global.db.data.users).length}
│ ⫹⫺ Speed: ${latensie.toFixed(4)} miliseconds
╰──────⭓`
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
      templateMessage: {
         hydratedTemplate: {
           hydratedContentText: anukonz,
               hydratedFooterText: `Bot By Astro`,
                            hydratedButtons: [{
                                urlButton: {
                                displayText: 'Group Bot',
                                    url: 'https://chat.whatsapp.com/JNTVVLroupr40kFCvwjnXq'
                            }
                            }, {
                                quickReplyButton: {
                                    displayText: 'List Menu',
                                    id: `${prefix}listmenu`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: 'Sewa Bot',
                                    id: `${prefix}sewa`
                                },
                                
                            }]
                        }
                    }
                }), { userJid: m.chat })
                astro.relayMessage(m.chat, template.message, { messageId: template.key.id })
                }
   break
   case 'allmenu': {
  	
  sxs = `© Astro || KennBot By AstroFL`
  anu = `*• All Menu*
  
  *[ 🔎 ]  Searching*  
  > ${prefix}play [query]
  > ${prefix}google [query]
  > ${prefix}pinterest [query]
  > ${prefix}wallpaper [query]
  > ${prefix}wikimedia [query]
  > ${prefix}ytsearch [query]
  > ${prefix}ringtone [query]
  > ${prefix}ppcp
  
  *[ 📍 ]  Groub Menu*  
  > ${prefix}add @user
  > ${prefix}kick @user
  > ${prefix}promote @user
  > ${prefix}demote @user
  > ${prefix}listonline
  > ${prefix}grouplink
  > ${prefix}setgrouppp
  > ${prefix}setname [text]
  > ${prefix}group [option]
  > ${prefix}editinfo [option]
  > ${prefix}grupinfo
  
  *[ 📥 ]  Downloader*  
  > ${prefix}instagram [url]
  > ${prefix}igs [query]
  > ${prefix}tiktok [url]
  > ${prefix}tiktokmp3 [url]
  > ${prefix}ytmp3 [url]
  > ${prefix}ytmp4 [url]
  > ${prefix}getmusic [query]
  > ${prefix}getvideo [query
  
  *[ ♻️ ]  Converter*  
  > ${prefix}attp
  > ${prefix}ttp
  > ${prefix}sticker
  > ${prefix}smeme
  > ${prefix}ebinary
  > ${prefix}dbinary
  > ${prefix}emojimix
  > ${prefix}emojis  
  > ${prefix}toimage
  > ${prefix}tomp4
  > ${prefix}tomp3
  > ${prefix}tovn
  > ${prefix}togif
  > ${prefix}tourl
  > ${prefix}bass
  > ${prefix}blown
  > ${prefix}deep
  > ${prefix}earrape
  > ${prefix}fast
  > ${prefix}fat
  > ${prefix}nightcore
  > ${prefix}reverse
  > ${prefix}robot
  > ${prefix}slow
  > ${prefix}squirrel
  
  *[ 🇯🇵 ] Anime Menu*
  > ${prefix}loli
  > ${prefix}bully
  > ${prefix}cuddle
  > ${prefix}cry
  > ${prefix}hug
  > ${prefix}awoo
  > ${prefix}kiss
  > ${prefix}lick
  > ${prefix}pat
  > ${prefix}smug
  > ${prefix}bonk
  > ${prefix}yeet
  > ${prefix}blush
  > ${prefix}smile
  > ${prefix}wave
  > ${prefix}highfive
  > ${prefix}handhold
  > ${prefix}nom
  > ${prefix}glomp
  > ${prefix}bite
  > ${prefix}slap
  > ${prefix}kill
  > ${prefix}happy
  > ${prefix}wink
  > ${prefix}poke
  > ${prefix}dance
  > ${prefix}cringe
  
  *[ ⚔ ]  Rpg Games*  
  > ${prefix}inventory
  > ${prefix}leaderboard
  > ${prefix}mining
  > ${prefix}buy
  > ${prefix}sell
  > ${prefix}heal
  > ${prefix}berburu
  
  *[ 🎲 ] Fun Menu*
  > ${prefix}family100
  > ${prefix}tebak [option]
  > ${prefix}math [option]
  > ${prefix}tictactoe
  > ${prefix}suitpvp

  *[ 📌 ]  Other Menu*
  > ${prefix}ping
  > ${prefix}owner
  > ${prefix}sewa
  > ${prefix}sc
  > ${prefix}donate
  > ${prefix}tqtq
  > ${prefix}delete
  > ${prefix}chatinfo
  > ${prefix}quoted
  > ${prefix}listpc
  > ${prefix}listgc
  > ${prefix}listonline
  > ${prefix}report (report bug to owner)
  
  *[ 🖇 ]  Database* 
  > ${prefix}setcmd
  > ${prefix}delcmd
  > ${prefix}listcmd
  > ${prefix}lockcmd
  > ${prefix}addmsg
  > ${prefix}listmsg
  > ${prefix}getmsg
  > ${prefix}delmsg
  
  *[ 👑 ]  Owner Menu*
  > ${prefix}chat [option]
  > ${prefix}enters [link]
  > ${prefix}react
  > ${prefix}leave
  > ${prefix}ephemeral [option]
  > ${prefix}setbotpp
  > ${prefix}block @user
  > ${prefix}unblock @user
  > ${prefix}bcgroup`
let message = await prepareWAMessageMedia({ image: await getBuffer(global.menuimg)}, { upload: astro.waUploadToServer })
    const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
      templateMessage: {
         hydratedTemplate: {
           imageMessage: message.imageMessage,
           hydratedContentText: anu,
               hydratedFooterText: sxs,
                            hydratedButtons: [{
                                displayText: 'Owner Number',
                                    url: 'https://wa.me/6283123381900?text=Halo+Banh'
                            },
                            {
                                quickReplyButton: {
                                    displayText: 'Owner Bot',
                                    id: `${prefix}owner`
                                    }
                                }, 
                                {
                                quickReplyButton: {
                                    displayText: 'List Menu',
                                    id: `${prefix}listmenu`
                                    }
                                }, 
                                {
                                quickReplyButton: {
                                    displayText: 'Sewa Bot',
                                    id: `${prefix}sewa`
                                }
                               
                            }]
                        }
                    }
                }), { userJid: m.chat })
                astro.relayMessage(m.chat, template.message, { messageId: template.key.id })
                }
          break
case 'command': case 'listmenu':{
    timestampe = speed();
         latensie = speed() - timestampe
let crp = `• Runtime: ${runtime(process.uptime())}`

let sks = ` *╭───「 Status 」*
 *│* • HostName: ${os.hostname()}
 *│* • Platform: ${os.platform()}
 *│* • Speed: ${latensie.toFixed(4)} miliseconds
 *│* • TotalUser: ${Object.keys(global.db.data.users).length}
 *│* • ServerTime: ${time}
 *├──「 IndoTime 」*
 *│* • Wit: ${wit}
 *│* • Wita: ${wita}
 *│* • Wib: ${wib}
 *╰───────⭓*`
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
   listMessage :{
     title: ``,

                    description: sks,
                    buttonText: "MENU",
                    footerText: crp,
                    listType: "SINGLE_SELECT",
                    sections: [{
								"title": "• All Menu Bots",
								"rows": [
									{
										"title": "All Menu",
										"description": "Menampilkan Semua Menu",
										"rowId": `${prefix}allmenu`
									}
								]
							},
							{
								"title": "• List Fitur",
								"rows": [
									
									{
										"title": "Search Menu",
										"description": "Menampilkan List Menu Pencarian",
										"rowId": `${prefix}searchmenu`
									},		
									{
										"title": "Groub Menu",
										"description": "Menampilkan List Menu Groub",
										"rowId": `${prefix}grupmenu`
									},
									{
										"title": "Download Menu",
										"description": "Menampilkan List Menu Downloader",
										"rowId": `${prefix}downloadmenu`
									},
									{
											"title": "Convert Menu",
										"description": "Menampilkan List Menu Converter",
										"rowId": `${prefix}convertmenu`
										},
									    {
											"title": "Anime Menu",
										"description": "Menampilkan List Menu Anime!",
										"rowId": `${prefix}animemenu`
										},		
										{
											"title": "Rpg Games",
										"description": "Menampilkan List Menu Rpg (Stil devsec)",
										"rowId": `${prefix}rpggames`
										},																
										{
											"title": "Fun Menu",
										"description": "Menampilkan List Menu Untuk Bersenang-Senang",
										"rowId": `${prefix}funmenu`
										},																									
										{
											"title": "Other Menu",
										"description": "Menu Tanpa Kategory bot",
										"rowId": `${prefix}othermenu`
										}
								]
							},
							{
								"title": "• Database Dan Fitur Owner",
								"rows": [																	
										{
											"title": "Database Menu",
										"description": "Menampilkan Set Dabase Bot",
										"rowId": `${prefix}databasemenu`
										},
										{
										"title": "Owner Menu",
										"description": "Fitur/Menu Yg Hanya Bisa Di Akses Oleh Owner",
										"rowId": `${prefix}ownermenu`
									}																	
								]
							},
							{
								"title": "• All Contributors",
								"rows": [
									{
										"title": "Thanks To All Contributor",
										"description": "Big Thanks To",
										"rowId": `${prefix}tqtt`
									}
								]
							}
						],
          listType: 1
                }
            }), {})
            astro.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
            case 'searchmenu': case 'searching': {
              	sxs = `© Astro || KennBot By AstroFL`
	            anu = `  *[ 🔍 ] Searching*	            
  > ${prefix}play [query]
  > ${prefix}google [query]
  > ${prefix}pinterest [query]
  > ${prefix}wallpaper [query]
  > ${prefix}wikimedia [query]
  > ${prefix}ytsearch [query]
  > ${prefix}ringtone [query]
  > ${prefix}ppcp`
let message = await prepareWAMessageMedia({ image: await getBuffer(global.menuimg)}, { upload: astro.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           imageMessage: message.imageMessage,
           hydratedContentText: anu,
           hydratedFooterText: sxs,
                            hydratedButtons: [{
                                displayText: 'Owner Number',
                                    url: 'https://wa.me/6283123381900?text=Halo+Banh'
                              }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: `${prefix}owner`
                                }
                               }, {
                                quickReplyButton: {
                                    displayText: 'List',
                                    id: `${prefix}listmenu`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                astro.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
            case 'groubmenu': case 'grupmenu': {
            	sxs = `© Astro || KennBot By AstroFL`
	            anu = `  *[ 📍 ]  Groub Menu*             
  > ${prefix}add @user
  > ${prefix}kick @user
  > ${prefix}promote @user
  > ${prefix}demote @user
  > ${prefix}listonline
  > ${prefix}grouplink
  > ${prefix}setgrouppp
  > ${prefix}setname [text]
  > ${prefix}group [option]
  > ${prefix}editinfo [option]
  > ${prefix}grupinfo`
let message = await prepareWAMessageMedia({ image: await getBuffer(global.menuimg)}, { upload: astro.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           imageMessage: message.imageMessage,
           hydratedContentText: anu,
           hydratedFooterText: sxs,
                            hydratedButtons: [{
                                displayText: 'Owner Number',
                                    url: 'https://wa.me/6283123381900?text=Halo+Banh'
                              }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: `${prefix}owner`
                                }
                               }, {
                                quickReplyButton: {
                                    displayText: 'List',
                                    id: `${prefix}listmenu`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                astro.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
            case 'downloadmenu': case 'downloadermenu': {
                sxs = `© Astro || KennBot By AstroFL`
	            anu = `  *[ 📥 ]  Downloader*              
  > ${prefix}instagram [url]
  > ${prefix}igs [query]
  > ${prefix}tiktok [url]
  > ${prefix}tiktokmp3 [url]
  > ${prefix}ytmp3 [url]
  > ${prefix}ytmp4 [url]
  > ${prefix}getmusic [query]
  > ${prefix}getvideo [query`
let message = await prepareWAMessageMedia({ image: await getBuffer(global.menuimg)}, { upload: astro.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           imageMessage: message.imageMessage,
           hydratedContentText: anu,
           hydratedFooterText: sxs,
                            hydratedButtons: [{
                                displayText: 'Owner Number',
                                    url: 'https://wa.me/6283123381900?text=Halo+Banh'
                              }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: `${prefix}owner`
                                }
                               }, {
                                quickReplyButton: {
                                    displayText: 'List',
                                    id: `${prefix}listmenu`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                astro.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
            case 'convertmenu': case 'convertermenu': {
                sxs = `© Astro || KennBot By AstroFL`
	            anu = `  *[ ♻️ ]  Converter*                
  > ${prefix}attp
  > ${prefix}ttp
  > ${prefix}sticker
  > ${prefix}smeme
  > ${prefix}ebinary
  > ${prefix}dbinary
  > ${prefix}emojimix
  > ${prefix}emojis  
  > ${prefix}toimage
  > ${prefix}tomp4
  > ${prefix}tomp3
  > ${prefix}tovn
  > ${prefix}togif
  > ${prefix}tourl
  > ${prefix}bass
  > ${prefix}blown
  > ${prefix}deep
  > ${prefix}earrape
  > ${prefix}fast
  > ${prefix}fat
  > ${prefix}nightcore
  > ${prefix}reverse
  > ${prefix}robot
  > ${prefix}slow
  > ${prefix}squirrel`
let message = await prepareWAMessageMedia({ image: await getBuffer(global.menuimg)}, { upload: astro.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           imageMessage: message.imageMessage,
           hydratedContentText: anu,
           hydratedFooterText: sxs,
                            hydratedButtons: [{
                                displayText: 'Owner Number',
                                    url: 'https://wa.me/6283123381900?text=Halo+Banh'
                              }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: `${prefix}owner`
                                }
                               }, {
                                quickReplyButton: {
                                    displayText: 'List',
                                    id: `${prefix}listmenu`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                astro.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
            case 'animemenu': {
            	sxs = `© Astro || KennBot By AstroFL`
	            anu = `  *[ 🇯🇵 ] Anime Menu*      
  > ${prefix}loli
  > ${prefix}bully
  > ${prefix}cuddle
  > ${prefix}cry
  > ${prefix}hug
  > ${prefix}awoo
  > ${prefix}kiss
  > ${prefix}lick
  > ${prefix}pat
  > ${prefix}smug
  > ${prefix}bonk
  > ${prefix}yeet
  > ${prefix}blush
  > ${prefix}smile
  > ${prefix}wave
  > ${prefix}highfive
  > ${prefix}handhold
  > ${prefix}nom
  > ${prefix}glomp
  > ${prefix}bite
  > ${prefix}slap
  > ${prefix}kill
  > ${prefix}happy
  > ${prefix}wink
  > ${prefix}poke
  > ${prefix}dance
  > ${prefix}cringe`
let message = await prepareWAMessageMedia({ image: await getBuffer(global.menuimg)}, { upload: astro.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           imageMessage: message.imageMessage,
           hydratedContentText: anu,
           hydratedFooterText: sxs,
                            hydratedButtons: [{
                                displayText: 'Owner Number',
                                    url: 'https://wa.me/6283123381900?text=Halo+Banh'
                              }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: `${prefix}owner`
                                }
                               }, {
                                quickReplyButton: {
                                    displayText: 'List',
                                    id: `${prefix}listmenu`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                astro.relayMessage(m.chat, template.message, { messageId: template.key.id })
             }
             break
             case 'rpggames': case 'rpgmenu': {
                sxs = `© Astro || KennBot By AstroFL`
	            anu = `  *[ ⚔ ]  Rpg Games*              
  > ${prefix}inventory
  > ${prefix}leaderboard
  > ${prefix}mining
  > ${prefix}buy
  > ${prefix}sell
  > ${prefix}heal
  > ${prefix}berburu`
let message = await prepareWAMessageMedia({ image: await getBuffer(global.menuimg)}, { upload: astro.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           imageMessage: message.imageMessage,
           hydratedContentText: anu,
           hydratedFooterText: sxs,
                            hydratedButtons: [{
                                displayText: 'Owner Number',
                                    url: 'https://wa.me/6283123381900?text=Halo+Banh'
                              }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: `${prefix}owner`
                                }
                               }, {
                                quickReplyButton: {
                                    displayText: 'List',
                                    id: `${prefix}listmenu`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                astro.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
            case 'funmenu': {
            sxs = `© Astro || KennBot By AstroFL`
	            anu = `  *[ 🎲 ]  Fun Menu*              
  > ${prefix}family100
  > ${prefix}tebak [option]
  > ${prefix}math [option]
  > ${prefix}tictactoe
  > ${prefix}suitpvp`
let message = await prepareWAMessageMedia({ image: await getBuffer(global.menuimg)}, { upload: astro.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           imageMessage: message.imageMessage,
           hydratedContentText: anu,
           hydratedFooterText: sxs,
                            hydratedButtons: [{
                                displayText: 'Owner Number',
                                    url: 'https://wa.me/6283123381900?text=Halo+Banh'
                              }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: `${prefix}owner`
                                }
                               }, {
                                quickReplyButton: {
                                    displayText: 'List',
                                    id: `${prefix}listmenu`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                astro.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
            case 'othermenu': {
            	sxs = `© Astro || KennBot By AstroFL`
	            anu = `  *[ 📌 ]  Other Menu*           
  > ${prefix}ping
  > ${prefix}owner
  > ${prefix}sewa
  > ${prefix}sc
  > ${prefix}donate
  > ${prefix}tqtq
  > ${prefix}delete
  > ${prefix}chatinfo
  > ${prefix}quoted
  > ${prefix}listpc
  > ${prefix}listgc
  > ${prefix}report (report bug to owner)`
let message = await prepareWAMessageMedia({ image: await getBuffer(global.menuimg)}, { upload: astro.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           imageMessage: message.imageMessage,
           hydratedContentText: anu,
           hydratedFooterText: sxs,
                            hydratedButtons: [{
                                displayText: 'Owner Number',
                                    url: 'https://wa.me/6283123381900?text=Halo+Banh'
                              }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: `${prefix}owner`
                                }
                               }, {
                                quickReplyButton: {
                                    displayText: 'List',
                                    id: `${prefix}listmenu`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                astro.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
            case 'databasemenu': {
            	sxs = `© Astro || KennBot By AstroFL`
	            anu = `  *[ 🖇 ]  Database*        
  > ${prefix}setcmd
  > ${prefix}delcmd
  > ${prefix}listcmd
  > ${prefix}lockcmd
  > ${prefix}addmsg
  > ${prefix}listmsg
  > ${prefix}getmsg
  > ${prefix}delmsg`
let message = await prepareWAMessageMedia({ image: await getBuffer(global.menuimg)}, { upload: astro.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           imageMessage: message.imageMessage,
           hydratedContentText: anu,
           hydratedFooterText: sxs,
                            hydratedButtons: [{
                                displayText: 'Owner Number',
                                    url: 'https://wa.me/6283123381900?text=Halo+Banh'
                              }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: `${prefix}owner`
                                }
                               }, {
                                quickReplyButton: {
                                    displayText: 'List',
                                    id: `${prefix}listmenu`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                astro.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
            case 'ownermenu': {
            	sxs = `© Astro || KennBot By AstroFL`
	            anu = `  *[ 👑 ]  Owner Menu*     
  > ${prefix}chat [option]
  > ${prefix}enters [link]
  > ${prefix}react
  > ${prefix}leave
  > ${prefix}ephemeral [option]
  > ${prefix}setbotpp
  > ${prefix}block @user
  > ${prefix}unblock @user
  > ${prefix}bcgroup`
let message = await prepareWAMessageMedia({ image: await getBuffer(global.menuimg)}, { upload: astro.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           imageMessage: message.imageMessage,
           hydratedContentText: anu,
           hydratedFooterText: sxs,
                            hydratedButtons: [{
                                displayText: 'Owner Number',
                                    url: 'https://wa.me/6283123381900?text=Halo+Banh'
                              }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: `${prefix}owner`
                                }
                               }, {
                                quickReplyButton: {
                                    displayText: 'List',
                                    id: `${prefix}listmenu`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                astro.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
















                                 
          default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    astro.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
