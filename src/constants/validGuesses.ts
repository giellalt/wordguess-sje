import { CONFIG } from './config'

export const VALIDGUESSES = [
  'bullit',
  'räppsa',
  'gåhkot',
  'giehka',
  'dádtja',
  'älbmuk',
  'dánnsa',
  'gállet',
  'märrka',
  'vassje',
  'vuagga',
  'sivvun',
  'guoros',
  'näggit',
  'kåpter',
  'skijun',
  'bådnet',
  'dåbben',
  'unogis',
  'guohpa',
  'vienak',
  'girrje',
  'nállat',
  'färras',
  'mårret',
  'tjálam',
  'måvvká',
  'bäŋŋka',
  'urdnit',
  'alebun',
  'säjdne',
  'ruhtse',
  'dággár',
  'ávgŋot',
  'sáhpes',
  'skávve',
  'sibjuk',
  'ávvtja',
  'dábben',
  'muaddá',
  'diddno',
  'filbma',
  'hiedjo',
  'byggit',
  'libbja',
  'disste',
  'hivvát',
  'hinnit',
  'rájves',
  'suddat',
  'sállat',
  'bálgok',
  'lappse',
  'gärris',
  'härrge',
  'skårrå',
  'gåsske',
  'muohta',
  'dåbbdo',
  'giesas',
  'dállve',
  'bessuk',
  'gállbe',
  'gaskan',
  'vistik',
  'ákksjo',
  'ruohko',
  'hållgå',
  'gillat',
  'bivvat',
  'båddne',
  'dehtus',
  'bulitj',
  'vasste',
  'urudit',
  'båldne',
  'luggit',
  'äjjtik',
  'huvvda',
  'nijjbe',
  'sillba',
  'gávkas',
  'darrve',
  'liggim',
  'suovas',
  'gijjle',
  'hássat',
  'årrjan',
  'rappte',
  'sällde',
  'fávvro',
  'vättka',
  'divras',
  'devvut',
  'guddne',
  'dassko',
  'gaksam',
  'sassne',
  'asedis',
  'vuohke',
  'girrko',
  'glássa',
  'sårrve',
  'fäjjga',
  'liehke',
  'gallba',
  'gárves',
  'sadjet',
  'giella',
  'råssot',
  'navvet',
  'russna',
  'sjilla',
  'basset',
  'bijjla',
  'fässta',
  'galmas',
  'niehko',
  'färrta',
  'partit',
  'káhppa',
  'ådtjot',
  'bävvde',
  'susstu',
  'lubbit',
  'dåbbos',
  'vuodna',
  'revvit',
  'däjjvo',
  'bihppo',
  'jiedna',
  'vijdna',
  'båhtet',
  'färrja',
  'bivvát',
  'gallva',
  'guolla',
  'ågodit',
  'låjjte',
  'vallje',
  'såggot',
  'guanná',
  'åhppåt',
  'tjilik',
  'tjuhte',
  'sallvo',
  'åvdåst',
  'lulelt',
  'mannat',
  'bärrgo',
  'rahtat',
  'skállá',
  'gárrvo',
  'bielle',
  'dárrbo',
  'måddes',
  'ruŋŋka',
  'duffat',
  'rijjdo',
  'miggár',
  'sárrat',
  'råhkåt',
  'lävvka',
  'dákkte',
  'bievas',
  'mehtir',
  'hieves',
  'sisste',
  'bårråt',
  'ållgon',
  'gáppte',
  'luorra',
  'gålbmå',
  'vuonev',
  'slöjdu',
  'gullit',
  'duffor',
  'gassko',
  'vaddet',
  'állbet',
  'gävvra',
  'váhkke',
  'stárra',
  'garutj',
  'siebla',
  'vijjku',
  'libjuk',
  'gájdno',
  'säritj',
  'maktes',
  'burist',
  'svälla',
  'dällit',
  'lukksa',
  'lájjbe',
  'åvvlot',
  'skåvve',
  'liddno',
  'gådtjå',
  'buorak',
  'gibmat',
  'rahkat',
  'runnik',
  'skallo',
  'dielle',
  'buvvet',
  'bárdne',
  'siddar',
  'sállte',
  'såhpåt',
  'almatj',
  'rátkam',
  'gukkse',
  'luddit',
  'rávvdo',
  'sárjas',
  'åsstet',
  'saŋátj',
  'båmmpå',
  'hällja',
  'dállke',
  'gáhkko',
  'sållbe',
  'gårrom',
  'ájjgot',
  'mäddel',
  'vuodja',
  'dilljá',
  'hilldo',
  'vähkke',
  'guolle',
  'iednam',
  'häjbma',
  'bånjok',
  'mivvat',
  'gärrge',
  'siegŋa',
  'nisske',
  'dájjva',
  'baksem',
  'aledit',
  'måvvrå',
  'duodje',
  'marrta',
  'árabut',
  'särrga',
  'vuoras',
  'suohpa',
  'vuoján',
  'duogen',
  'lässit',
  'iednak',
  'dårrjo',
  'jubmel',
  'gielak',
  'lullde',
  'gäjdno',
  'gallje',
  'vájbmo',
  'vuassa',
  'ássnat',
  'däddet',
  'njávve',
  'rávvke',
  'ruvvat',
  'mannje',
  'ninnit',
  'bärdna',
  'villat',
  'däbmuk',
  'gårdne',
  'bivval',
  'ananas',
  'návvde',
  'ráddna',
  'rassta',
  'hárrsa',
  'nierra',
  'duggir',
  'niehpe',
  'norska',
  'sjádde',
  'hárrdo',
  'båsske',
  'juobmo',
  'sládjo',
  'jáhkko',
  'gájjrá',
  'harrat',
  'åvdålt',
  'luomek',
  'giesse',
  'nállam',
  'stálek',
  'sihtat',
  'náhppa',
  'ulgutj',
  'fävvse',
  'hårrte',
  'rahpat',
  'buohta',
  'vuojna',
  'suorek',
  'jiegŋa',
  'viehka',
  'mällit',
  'dihkke',
  'návlek',
  'sådjåt',
  'lágátj',
  'bárrko',
  'rássjo',
  'njavve',
  'guoran',
  'muddit',
  'ájedit',
  'lahkke',
  'luadda',
  'buorre',
  'ruvvsa',
  'sájjte',
  'báhkas',
  'gesitj',
  'hállon',
  'fuodno',
  'färrut',
  'dåhpot',
  'sáhppe',
  'gåbbák',
  'barrte',
  'darajk',
  'sullit',
  'åsskot',
  'suavvá',
  'skinit',
  'luvvka',
  'lissto',
  'tjarra',
  'bassat',
  'iehket',
  'spádan',
  'gåjvon',
  'blárre',
  'kámmpa',
  'fikksa',
  'tjåvdå',
  'guhtse',
  'fuvdar',
  'snårre',
  'skillá',
  'dalloj',
  'snubuk',
  'skárro',
  'ánodit',
  'birrso',
  'gåssåt',
  'dimbar',
  'eŋŋgel',
  'suhkat',
  'nástak',
  'gájjse',
  'gillka',
  'luvvko',
  'plássá',
  'räjdno',
  'smávve',
  'dårást',
  'jävvja',
  'råssne',
  'vierre',
  'vuolev',
  'indekl',
  'gummpi',
  'ladnja',
  'táhkka',
  'gukkte',
  'stállo',
  'gåhkkå',
  'váhtam',
  'dávvle',
  'viejek',
  'tjårro',
  'gállok',
  'juovva',
  'skåhto',
  'svahka',
  'åhttse',
  'dadnat',
  'vadjat',
  'nahkat',
  'vädtja',
  'bavrek',
  'suodna',
  'balljá',
  'tjuruk',
  'rájjge',
  'bävvla',
  'sjillá',
  'daggár',
  'miesse',
  'luovas',
  'sillot',
  'vijses',
  'värbme',
  'dábbde',
  'båkkså',
  'båtsoj',
  'låssåt',
  'transl',
  'gårrså',
  'åjjtet',
  'garber',
  'guhkás',
  'gågŋåt',
  'tsabbe',
  'sinnti',
  'báhper',
  'råggåk',
  'släddu',
  'hubblo',
  'gárrat',
  'skårre',
  'gáhtto',
  'skåvvå',
  'mierra',
  'ånedit',
  'hallgo',
  'sievva',
  'rappta',
  'låhkek',
  'rávvsá',
  'sirrit',
  'hållåt',
  'uvdutj',
  'marrsa',
  'lájjge',
  'vásset',
  'messit',
  'påjjkå',
  'gållse',
  'diehpe',
  'mijjla',
  'gullda',
  'ájádus',
  'gádjot',
  'nuffit',
  'jugglo',
  'jávvre',
  'billgá',
  'vierra',
  'bällge',
  'máddet',
  'rádjet',
  'stággo',
  'binnat',
  'tijbma',
  'rájest',
  'riŋŋgo',
  'náhppe',
  'bäjjve',
  'vuodda',
  'duädde',
  'dårrot',
  'mällga',
  'flággá',
  'gaskok',
  'nuorra',
  'gurrte',
  'njáhká',
  'kurrta',
  'guhtik',
  'báhkka',
  'stárro',
  'jähkke',
  'allela',
  'gurrit',
  'gunnik',
  'gáhkka',
  'dijjda',
  'suodje',
  'akktak',
  'sirrát',
  'gájjka',
  'nivsak',
  'spárrá',
  'dievas',
  'lassta',
  'tsábos',
  'giehta',
  'tjålle',
  'bullki',
  'spissa',
  'gårrot',
  'sävvro',
  'gullut',
  'gållge',
  'mujjto',
  'gávdne',
  'suodja',
  'ädasik',
  'hárrje',
  'vällot',
  'báhket',
  'jasska',
  'muossá',
  'guobok',
  'galles',
  'dåssje',
  'bállet',
  'läjjbe',
  'grubba',
  'maggár',
  'gusste',
  'dálloj',
  'härrva',
  'jåvvlå',
  'järrja',
  'lafnas',
  'mákkso',
  'luossa',
  'dållge',
  'luovve',
  'bednik',
  'lihtto',
  'resipr',
  'áhttje',
  'sálbma',
  'liebma',
  'skában',
  'gättka',
  'árdnas',
  'bårrgå',
  'bielak',
  'guossa',
  'fáhtal',
  'alebuj',
  'tjálos',
  'dahkat',
  'gurpak',
  'riekta',
  'bismer',
  'stänit',
  'gähtto',
  'lasska',
  'njuono',
  'sválla',
  'tjadná',
  'edisik',
  'binnot',
  'gåbbdá',
  'nullpo',
  'dávvda',
  'umasse',
  'váhkká',
  'vallda',
  'dubben',
  'vavvle',
  'sårrtå',
  'durkum',
  'åvvdål',
  'siessa',
  'ållást',
  'kráhka',
  'rudnat',
  'stårrå',
  'durrut',
  'muodok',
  'duobak',
  'påsstå',
  'gieles',
  'gävvit',
  'báŋŋka',
  'hiejos',
  'gallat',
  'gálsok',
  'sadjem',
  'gadtsa',
  'muhtem',
  'buvvda',
  'livvot',
  'gassak',
  'rággas',
  'gillar',
  'badjel',
  'gáddek',
  'tjåvde',
  'dabben',
  'lusspe',
  'sällja',
  'ikktij',
  'rasstá',
  'hávvde',
  'ráhkat',
  'gåppto',
  'sárrde',
  'vátjam',
  'fruvva',
  'jårråt',
  'gåjkes',
  'dálkas',
  'dulutj',
  'lihtte',
  'buvdna',
  'lihkko',
  'vastet',
  'dummpi',
  'salpek',
  'stálle',
  'båttkå',
  'hednik',
  'láhppo',
  'skärre',
  'bårjås',
  'beddit',
  'iejgát',
  'náhkke',
  'nåhkåt',
  'gåvvot',
  'burrit',
  'sillki',
  'tsagŋa',
  'däŋŋna',
  'rijjka',
  'gåssek',
  'májjde',
  'lárrat',
  'sverik',
  'sijjda',
  'suärre',
  'jádnat',
  'årrben',
  'nällje',
  'ráhkko',
  'ballat',
  'velguk',
  'hávvot',
  'bajelt',
  'gäbbne',
  'válgos',
  'dievva',
  'gåbbde',
  'bunndi',
  'dájgan',
  'ferrum',
  'kujdna',
  'gulitj',
  'mierek',
  'urdnik',
  'vaddas',
  'ullgun',
  'siehko',
  'gielas',
  'gålmes',
  'ájjlek',
  'gárrde',
  'buogŋa',
  'reknik',
  'gippta',
  'sarves',
  'njuovo',
  'gielom',
  'bivvdo',
  'ståhpo',
  'álltár',
  'bällje',
  'njalla',
  'såvvle',
  'ällvet',
  'gisstá',
  'dajjva',
  'dierre',
  'ietján',
  'lijdne',
  'ájjtek',
  'vállot',
  'rijmek',
  'lállet',
  'åvvdåj',
  'sávvat',
  'ávvtso',
  'gaskas',
  'banána',
  'låhkåt',
  'vijmak',
  'guokso',
  'kánser',
  'rivvgo',
  'iedjet',
  'luägge',
  'dávnas',
  'hákksa',
  'väjjto',
  'riebak',
  'barrgo',
  'årjelt',
  'lussis',
  'sarrvá',
  'fállat',
  'sjávot',
  'närrit',
  'kårrjå',
  'májdno',
  'jáhkka',
  'åhtsåt',
  'muvvra',
  'gåhpåt',
  'bájjke',
  'säjjbe',
  'viesso',
  'lähppa',
  'gránna',
  'slämmá',
  'rággŋo',
  'nåjjde',
  'läddit',
  'säppte',
  'fävvro',
  'gieres',
  'sájjvo',
  'gårråk',
  'råvvgo',
  'gahper',
  'affekt',
  'tällta',
  'gájvas',
  'säŋŋga',
  'bäbbmo',
  'råhtot',
  'luldne',
  'måhkke',
  'fillta',
  'lijjge',
  'mårrse',
  'állget',
  'bárrde',
  'hällgo',
  'sunnde',
  'gävvle',
  'dievvá',
  'gäŋŋka',
  'guohke',
  'jassko',
  'väddjo',
  'árodit',
  'juohko',
  'bähkke',
  'värrjo',
  'murrko',
  'färrva',
  'happsa',
  'lámmpo',
  'vájjve',
  'ruojas',
  'sáddem',
  'grädda',
  'juhkat',
  'ballva',
  'guktes',
  'nällge',
  'láddak',
  'garrás',
  'tjåddå',
  'gåŋgek',
  'gissto',
  'rájnas',
  'lurrka',
  'aládak',
  'lánnda',
  'návvká',
  'bålbár',
  'gáddet',
  'räjjdo',
  'vuorro',
  'dagŋas',
  'vuolle',
  'jallat',
  'dábblo',
  'låpptå',
  'sällga',
  'dáhtor',
  'anedit',
  'häffne',
  'tällik',
  'hávvga',
  'fijnak',
  'bádjat',
  'ärrbit',
  'gåddet',
  'vierro',
  'dikkta',
  'vuobme',
  'lájjre',
  'urbmas',
  'dullit',
  'garras',
  'båsskå',
  'äjjgut',
  'dárbas',
  'várrto',
  'såpptå',
  'vijdes',
  'nulpok',
  'gálles',
  'jumitj',
  'dållåm',
  'sárrge',
  'nässte',
  'sáffta',
  'myhtta',
  'fårbmå',
  'gáŋŋká',
  'gåggoj',
  'fijjla',
  'tjusse',
  'sierra',
  'härbmo',
  'gähppe',
  'jargŋa',
  'muohto',
  'surrgo',
  'berrut',
  'hälbme',
  'dudnat',
  'fáddno',
  'jábmem',
  'gielda',
  'sádnes',
  'ribbre',
  'dårrvo',
  'dijbmá',
  'bijbal',
  'miesak',
  'iehpal',
  'diehto',
  'bálges',
  'áddjov',
  'guässe',
  'ábbjat',
  'jukksa',
  'helsik',
  'luvvat',
  'svarre',
  'värrto',
  'kåhppå',
  'dullve',
  'gintal',
  'russko',
  'goabba',
  'rádjat',
  'hábres',
  'guhkke',
  'várrja',
  'mäjjsa',
  'interr',
  'máddak',
  'garrdo',
  'ähppár',
  'ladnje',
  'duddno',
  'låddjå',
  'asstat',
  'rijbmo',
  'gámmsa',
  'gättke',
  'lávvke',
  'birraj',
  'fuovas',
  'gáhker',
  'dåhppå',
  'luvvit',
  'sähkko',
  'vuolen',
  'fierok',
  'urudis',
  'jallga',
  'bákkte',
  'spánas',
  'sujtár',
  'ballát',
  'vuässe',
  'gåjkek',
  'randek',
  'gáskek',
  'gärrda',
  'råhtem',
  'uddnik',
  'gaskav',
  'bihttá',
  'guddoj',
  'tjihta',
  'bävvle',
  'dahpat',
  'buddit',
  'gållot',
  'gienes',
  'tsagge',
  'máddar',
  'båjtot',
  'surgos',
  'bissot',
  'libluk',
  'badjen',
  'gåttkå',
  'savvet',
  'dåktår',
  'grásse',
  'slämme',
  'gábble',
  'gållek',
  'gáffal',
  'gájjbe',
  'udnátj',
  'siehka',
  'jåhtet',
  'säddit',
  'bállká',
  'gålmås',
  'maŋŋáj',
  'hässta',
  'láhtto',
  'råbmot',
  'bussot',
  'gurrva',
  'dábmat',
  'sájjbo',
  'värrit',
  'tullit',
  'bäddit',
  'suovva',
  'mällke',
  'gessut',
  'láddat',
  'däbbot',
  'vällge',
  'násste',
  'divvot',
  'visste',
  'basske',
  'låhtot',
  'gijjto',
  'gullki',
  'sivvlo',
  'nävvre',
  'fáddme',
  'bällit',
  'impers',
  'nievsa',
  'skábmo',
  'narrak',
  'hálmes',
  'dálátj',
  'jässka',
  'lierra',
  'silldá',
  'burrne',
  'smállá',
  'ganjal',
  'rájjdo',
  'krussa',
  'vällja',
  'jábmet',
  'näjjda',
  'vahkko',
  'muorra',
  'dådjet',
  'tuvsán',
  'lågŋot',
  'råvvro',
  'bissti',
  'åkktse',
  'lådnot',
  'säggot',
  'säjjde',
  'luoboj',
  'muhkot',
  'huvvsa',
  'hudjat',
  'hállva',
  'sjåvvå',
  'miella',
  'gárkas',
  'siedja',
  'bivdár',
  'basstu',
  'philol',
  'nårrke',
  'uddnut',
  'lihkas',
  'dåbdos',
  'leggit',
  'báhkko',
  'tjábbe',
  'sávvam',
  'sárdno',
  'ájjbet',
  'fáhtte',
  'fuovva',
  'råhtje',
  'gavvla',
  'lijjva',
  'hájjte',
  'gijjsá',
  'gámbal',
  'gullat',
  'jårrem',
  'hällso',
  'mållke',
  'båssjo',
  'buŋŋga',
  'sujjto',
  'maŋŋel',
  'gåjjko',
  'bäggat',
  'rissja',
  'duohpa',
  'rávdno',
  'bajjka',
  'siello',
  'vuonak',
  'gilluk',
  'råggåt',
  'getjuk',
  'diedon',
  'gurbma',
  'tsåhke',
  'duolla',
  'gáhtot',
  'márrso',
  'savvrá',
  'bånndá',
  'räkkta',
  'slidja',
  'maŋelt',
  'návvle',
]

if (CONFIG.normalization) {
  VALIDGUESSES.forEach(
    (val, i) => (VALIDGUESSES[i] = val.normalize(CONFIG.normalization))
  )
}
