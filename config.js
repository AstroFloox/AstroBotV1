/*
   * Create By Dika Ardnt.
   * Recode By SkylarKaf
*/

const fs = require('fs')
const chalk = require('chalk')

global.zenz = 'YOUR_APIKEY'
global.dapkey = 'Kirbotz123'
global.lolkey = 'Atakbotz'
global.kirkey = 'KirBotz'

// Other
global.owner = ['6283123381900'] //no kelen
global.premium = ['6283123381900'] //no krlen
global.botnma = 'Kenn - MD' //nama bot
global.ownernma = 'Timm' //nama owner
global.webz = 'https://github.com/AnjusGans' //web
global.linkown = 'https://wa.me/6283123381900?text=Halo+Banh' //wa.me no kelen
global.yt = 'https://youtube.com/channel/UCThzD_f5G8QuxZA6n7GiEBA' //Kalau Ga Punya YT, Gausah Dihapus jadiin tqto 😅
global.backwel = 'https://telegra.ph/file/38dfc6649ab96b7dc7d41.jpg' //Backround Welcomenya


global.packname = '' 
global.author = '⫹⫺ KennBot - MD'
global.sessionName = 'session'
global.prefa = ['!','.','#']
global.sp = '>'
global.mess = {
    success: 'Sukses',
    admin: 'Fitur Ini Hanya Bisa Di Akses Oleh Admin Grub!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Hanya Bisa Digunakan Di Group!',
    private: 'Fitur Hanya Bisa Digunakan Private Chat!',
    bot: 'Fitur Khusus Bot',
    wait: 'Wait...',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 1000,
    monayawal: 10000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 5,
   goldawal: 1,
   emeraldawal: 1,
   umpanawal: 1,
   potionawal: 1
}

global.gifmp4 = fs.readFileSync('./media/thumb.mp4')
global.menuimg = fs.readFileSync('./media/devil.jpg')

global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
