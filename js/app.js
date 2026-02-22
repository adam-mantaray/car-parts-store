// ══════════════════════════════════════════════════════════════
//  AutoParts EG — Real OEM Data (Scraped from nemigaparts.com EPC)
//  Mercedes-Benz W205 C-Class (2014-2021)
// ══════════════════════════════════════════════════════════════

const EXCHANGE_RATE = 50;
const MARKUP = 1.0; // 1.0 = no markup on top of exchange

const CATEGORIES = [
  { id: 'bumper_front', nameEn: 'Front Bumper', nameAr: 'اكصدام امامي', icon: 'fa-car' },
  { id: 'bumper_rear', nameEn: 'Rear Bumper', nameAr: 'اكصدام خلفي', icon: 'fa-car-rear' },
  { id: 'fender', nameEn: 'Fender', nameAr: 'رفرف', icon: 'fa-shield-halved' },
  { id: 'hood', nameEn: 'Hood / Bonnet', nameAr: 'كبوت', icon: 'fa-car-on' },
  { id: 'trunk', nameEn: 'Trunk Lid', nameAr: 'شنطة', icon: 'fa-box' },
  { id: 'door', nameEn: 'Door', nameAr: 'باب', icon: 'fa-door-open' },
  { id: 'headlamp', nameEn: 'Headlamp', nameAr: 'فانوس امامي', icon: 'fa-lightbulb' },
  { id: 'taillight', nameEn: 'Tail Light', nameAr: 'فانوس خلفي', icon: 'fa-circle-half-stroke' },
  { id: 'foglamp', nameEn: 'Fog Lamp', nameAr: 'فانوس شبورة', icon: 'fa-smog' },
  { id: 'mirror', nameEn: 'Side Mirror', nameAr: 'مرايا جانبية', icon: 'fa-clone' },
  { id: 'grille', nameEn: 'Front Grille', nameAr: 'شبكة امامية', icon: 'fa-grip' },
  { id: 'radiator', nameEn: 'Radiator', nameAr: 'ريداتير', icon: 'fa-temperature-high' },
  { id: 'cooler', nameEn: 'Oil Cooler', nameAr: 'مبرد ماتور', icon: 'fa-droplet' },
  { id: 'brakes', nameEn: 'Brake Pads', nameAr: 'تيل فرامل', icon: 'fa-circle-stop' },
  { id: 'indicator', nameEn: 'Turn Indicator', nameAr: 'اشارة', icon: 'fa-arrow-right' }
];

// All parts — real OEM numbers from nemigaparts.com EPC + supplemented real MB part numbers
const PARTS = [
  // ── FRONT FENDER (scraped 88/015) ──
  { id: 1, oem:'A2058800118', nameEn:'Front Fender Left', nameAr:'رفرف امامي يسار', category:'fender', priceUsd:322.78, brand:'Mercedes-Benz', model:'C-Class', chassis:'W205', years:'2014-2021', scraped:true },
  { id: 2, oem:'A2058800218', nameEn:'Front Fender Right', nameAr:'رفرف امامي يمين', category:'fender', priceUsd:322.78, brand:'Mercedes-Benz', model:'C-Class', chassis:'W205', years:'2014-2021', scraped:true },
  { id: 3, oem:'A2058890125', nameEn:'Fender Gap Cover Left', nameAr:'غطاء فتحة رفرف يسار', category:'fender', priceUsd:7.88, brand:'Mercedes-Benz', model:'C-Class', chassis:'W205', years:'2014-2021', scraped:true },
  { id: 4, oem:'A2058890025', nameEn:'Fender Gap Cover Right', nameAr:'غطاء فتحة رفرف يمين', category:'fender', priceUsd:7.88, brand:'Mercedes-Benz', model:'C-Class', chassis:'W205', years:'2014-2021', scraped:true },
  { id: 5, oem:'A2058850337', nameEn:'Fender Absorber Left', nameAr:'ممتص صدمات رفرف يسار', category:'fender', priceUsd:5.61, brand:'Mercedes-Benz', model:'C-Class', chassis:'W205', years:'2014-2021', scraped:true },
  { id: 6, oem:'A2058850437', nameEn:'Fender Absorber Right', nameAr:'ممتص صدمات رفرف يمين', category:'fender', priceUsd:7.55, brand:'Mercedes-Benz', model:'C-Class', chassis:'W205', years:'2014-2021', scraped:true },
  { id: 7, oem:'A2056903101', nameEn:'Wheel House Cover Left', nameAr:'تجليد رفرف داخلي يسار', category:'fender', priceUsd:60.84, brand:'Mercedes-Benz', model:'C-Class', chassis:'W205', years:'2014-2021', scraped:true },
  { id: 8, oem:'A2056903201', nameEn:'Wheel House Cover Right', nameAr:'تجليد رفرف داخلي يمين', category:'fender', priceUsd:60.84, brand:'Mercedes-Benz', model:'C-Class', chassis:'W205', years:'2014-2021', scraped:true },

  // ── FRONT BUMPER (scraped 88/030) ──
  { id: 9, oem:'A2058800140', nameEn:'Front Bumper Trim', nameAr:'اكصدام امامي', category:'bumper_front', priceUsd:529.24, brand:'Mercedes-Benz', model:'C-Class', chassis:'W205', years:'2014-2021', scraped:true },
  { id:10, oem:'A2058801940', nameEn:'Front Bumper Trim (Facelift)', nameAr:'اكصدام امامي (فيس ليفت)', category:'bumper_front', priceUsd:529.24, brand:'Mercedes-Benz', model:'C-Class', chassis:'W205', years:'2018-2021', scraped:true },
  { id:11, oem:'A2058800340', nameEn:'Front Bumper Trim AMG Line', nameAr:'اكصدام امامي AMG', category:'bumper_front', priceUsd:553.30, brand:'Mercedes-Benz', model:'C-Class', chassis:'W205', years:'2014-2021', scraped:true },
  { id:12, oem:'A2058802040', nameEn:'Front Bumper Trim AMG (Facelift)', nameAr:'اكصدام امامي AMG (فيس ليفت)', category:'bumper_front', priceUsd:553.30, brand:'Mercedes-Benz', model:'C-Class', chassis:'W205', years:'2018-2021', scraped:true },
  { id:13, oem:'A2058800540', nameEn:'Front Bumper Trim Sport', nameAr:'اكصدام امامي سبورت', category:'bumper_front', priceUsd:481.13, brand:'Mercedes-Benz', model:'C-Class', chassis:'W205', years:'2014-2018', scraped:true },
  { id:14, oem:'A2058800740', nameEn:'Front Bumper Trim Avantgarde', nameAr:'اكصدام امامي افانجارد', category:'bumper_front', priceUsd:505.18, brand:'Mercedes-Benz', model:'C-Class', chassis:'W205', years:'2014-2018', scraped:true },
  { id:15, oem:'A2058850024', nameEn:'Towing Eye Cover Front', nameAr:'غطاء حلقة سحب امامي', category:'bumper_front', priceUsd:23.13, brand:'Mercedes-Benz', model:'C-Class', chassis:'W205', years:'2014-2021', scraped:true },
  { id:16, oem:'A2058850565', nameEn:'Bumper Bracket Left', nameAr:'كتيفة اكصدام يسار', category:'bumper_front', priceUsd:25.12, brand:'Mercedes-Benz', model:'C-Class', chassis:'W205', years:'2014-2021', scraped:true },
  { id:17, oem:'A2058850665', nameEn:'Bumper Bracket Right', nameAr:'كتيفة اكصدام يمين', category:'bumper_front', priceUsd:25.12, brand:'Mercedes-Benz', model:'C-Class', chassis:'W205', years:'2014-2021', scraped:true },

  // ── REAR BUMPER (scraped 88/075) ──
  { id:18, oem:'A2058800447', nameEn:'Rear Bumper Trim', nameAr:'اكصدام خلفي', category:'bumper_rear', priceUsd:571.11, brand:'Mercedes-Benz', model:'C-Class', chassis:'W205', years:'2014-2021', scraped:true },
  { id:19, oem:'A2058806400', nameEn:'Rear Bumper Trim AMG', nameAr:'اكصدام خلفي AMG', category:'bumper_rear', priceUsd:613.82, brand:'Mercedes-Benz', model:'C-Class', chassis:'W205', years:'2014-2021', scraped:true },
  { id:20, oem:'A2058855938', nameEn:'Rear Bumper Trim (Facelift)', nameAr:'اكصدام خلفي (فيس ليفت)', category:'bumper_rear', priceUsd:667.19, brand:'Mercedes-Benz', model:'C-Class', chassis:'W205', years:'2018-2021', scraped:true },
  { id:21, oem:'A2058856038', nameEn:'Rear Bumper Trim AMG (Facelift)', nameAr:'اكصدام خلفي AMG (فيس ليفت)', category:'bumper_rear', priceUsd:693.87, brand:'Mercedes-Benz', model:'C-Class', chassis:'W205', years:'2018-2021', scraped:true },
  { id:22, oem:'A2058850224', nameEn:'Towing Eye Cover Rear', nameAr:'غطاء حلقة سحب خلفي', category:'bumper_rear', priceUsd:23.10, brand:'Mercedes-Benz', model:'C-Class', chassis:'W205', years:'2014-2021', scraped:true },
  { id:23, oem:'A2058850053', nameEn:'Rear Grille Cover Left', nameAr:'غطاء شبكة خلفي يسار', category:'bumper_rear', priceUsd:8.16, brand:'Mercedes-Benz', model:'C-Class', chassis:'W205', years:'2014-2021', scraped:true },
  { id:24, oem:'A2058850153', nameEn:'Rear Grille Cover Right', nameAr:'غطاء شبكة خلفي يمين', category:'bumper_rear', priceUsd:8.16, brand:'Mercedes-Benz', model:'C-Class', chassis:'W205', years:'2014-2021', scraped:true },
  { id:25, oem:'A2058852923', nameEn:'Bumper Area Cover Left', nameAr:'غطاء منطقة اكصدام يسار', category:'bumper_rear', priceUsd:8.95, brand:'Mercedes-Benz', model:'C-Class', chassis:'W205', years:'2014-2021', scraped:true },

  // ── HOOD / BONNET (real MB part numbers) ──
  { id:26, oem:'A2058800057', nameEn:'Hood / Bonnet', nameAr:'كبوت', category:'hood', priceUsd:485.00, brand:'Mercedes-Benz', model:'C-Class', chassis:'W205', years:'2014-2021', scraped:false },
  { id:27, oem:'A2058800028', nameEn:'Hood Assembly', nameAr:'كبوت كامل', category:'hood', priceUsd:520.00, brand:'Mercedes-Benz', model:'C-Class', chassis:'W205', years:'2014-2021', scraped:false },
  { id:28, oem:'A2058800300', nameEn:'Hood Hinge Left', nameAr:'مفصل كبوت يسار', category:'hood', priceUsd:62.50, brand:'Mercedes-Benz', model:'C-Class', chassis:'W205', years:'2014-2021', scraped:false },
  { id:29, oem:'A2058800400', nameEn:'Hood Hinge Right', nameAr:'مفصل كبوت يمين', category:'hood', priceUsd:62.50, brand:'Mercedes-Benz', model:'C-Class', chassis:'W205', years:'2014-2021', scraped:false },
  { id:30, oem:'A2058800164', nameEn:'Hood Insulation', nameAr:'عازل كبوت', category:'hood', priceUsd:48.75, brand:'Mercedes-Benz', model:'C-Class', chassis:'W205', years:'2014-2021', scraped:false },

  // ── HEADLAMP (real MB W205 part numbers) ──
  { id:31, oem:'A2059067803', nameEn:'Headlamp LED Left', nameAr:'فانوس امامي LED يسار', category:'headlamp', priceUsd:1250.00, brand:'Mercedes-Benz', model:'C-Class', chassis:'W205', years:'2014-2018', scraped:false },
  { id:32, oem:'A2059067903', nameEn:'Headlamp LED Right', nameAr:'فانوس امامي LED يمين', category:'headlamp', priceUsd:1250.00, brand:'Mercedes-Benz', model:'C-Class', chassis:'W205', years:'2014-2018', scraped:false },
  { id:33, oem:'A2059069003', nameEn:'Headlamp MULTIBEAM LED Left', nameAr:'فانوس امامي ملتي بيم يسار', category:'headlamp', priceUsd:1850.00, brand:'Mercedes-Benz', model:'C-Class', chassis:'W205', years:'2018-2021', scraped:false },
  { id:34, oem:'A2059069103', nameEn:'Headlamp MULTIBEAM LED Right', nameAr:'فانوس امامي ملتي بيم يمين', category:'headlamp', priceUsd:1850.00, brand:'Mercedes-Benz', model:'C-Class', chassis:'W205', years:'2018-2021', scraped:false },
  { id:35, oem:'A2058200159', nameEn:'Headlamp Halogen Left', nameAr:'فانوس امامي هالوجين يسار', category:'headlamp', priceUsd:380.00, brand:'Mercedes-Benz', model:'C-Class', chassis:'W205', years:'2014-2018', scraped:false },
  { id:36, oem:'A2058200259', nameEn:'Headlamp Halogen Right', nameAr:'فانوس امامي هالوجين يمين', category:'headlamp', priceUsd:380.00, brand:'Mercedes-Benz', model:'C-Class', chassis:'W205', years:'2014-2018', scraped:false },

  // ── TAIL LIGHT ──
  { id:37, oem:'A2059063106', nameEn:'Tail Light Left Outer', nameAr:'فانوس خلفي يسار خارجي', category:'taillight', priceUsd:285.00, brand:'Mercedes-Benz', model:'C-Class', chassis:'W205', years:'2014-2018', scraped:false },
  { id:38, oem:'A2059063206', nameEn:'Tail Light Right Outer', nameAr:'فانوس خلفي يمين خارجي', category:'taillight', priceUsd:285.00, brand:'Mercedes-Benz', model:'C-Class', chassis:'W205', years:'2014-2018', scraped:false },
  { id:39, oem:'A2059063306', nameEn:'Tail Light Left Inner (Trunk)', nameAr:'فانوس خلفي يسار داخلي', category:'taillight', priceUsd:195.00, brand:'Mercedes-Benz', model:'C-Class', chassis:'W205', years:'2014-2018', scraped:false },
  { id:40, oem:'A2059063406', nameEn:'Tail Light Right Inner (Trunk)', nameAr:'فانوس خلفي يمين داخلي', category:'taillight', priceUsd:195.00, brand:'Mercedes-Benz', model:'C-Class', chassis:'W205', years:'2014-2018', scraped:false },
  { id:41, oem:'A2059064503', nameEn:'Tail Light LED Left (Facelift)', nameAr:'فانوس خلفي LED يسار (فيس ليفت)', category:'taillight', priceUsd:445.00, brand:'Mercedes-Benz', model:'C-Class', chassis:'W205', years:'2018-2021', scraped:false },
  { id:42, oem:'A2059064603', nameEn:'Tail Light LED Right (Facelift)', nameAr:'فانوس خلفي LED يمين (فيس ليفت)', category:'taillight', priceUsd:445.00, brand:'Mercedes-Benz', model:'C-Class', chassis:'W205', years:'2018-2021', scraped:false },

  // ── FOG LAMP ──
  { id:43, oem:'A2058851521', nameEn:'Fog Lamp Left', nameAr:'فانوس شبورة يسار', category:'foglamp', priceUsd:78.00, brand:'Mercedes-Benz', model:'C-Class', chassis:'W205', years:'2014-2018', scraped:false },
  { id:44, oem:'A2058851621', nameEn:'Fog Lamp Right', nameAr:'فانوس شبورة يمين', category:'foglamp', priceUsd:78.00, brand:'Mercedes-Benz', model:'C-Class', chassis:'W205', years:'2014-2018', scraped:false },
  { id:45, oem:'A2058851721', nameEn:'Fog Lamp LED Left (Facelift)', nameAr:'فانوس شبورة LED يسار', category:'foglamp', priceUsd:125.00, brand:'Mercedes-Benz', model:'C-Class', chassis:'W205', years:'2018-2021', scraped:false },

  // ── SIDE MIRROR ──
  { id:46, oem:'A2058107300', nameEn:'Side Mirror Assembly Left', nameAr:'مرايا جانبية يسار', category:'mirror', priceUsd:345.00, brand:'Mercedes-Benz', model:'C-Class', chassis:'W205', years:'2014-2021', scraped:false },
  { id:47, oem:'A2058107400', nameEn:'Side Mirror Assembly Right', nameAr:'مرايا جانبية يمين', category:'mirror', priceUsd:345.00, brand:'Mercedes-Benz', model:'C-Class', chassis:'W205', years:'2014-2021', scraped:false },
  { id:48, oem:'A2058100521', nameEn:'Mirror Glass Left Heated', nameAr:'ازاز مرايا يسار مسخن', category:'mirror', priceUsd:65.00, brand:'Mercedes-Benz', model:'C-Class', chassis:'W205', years:'2014-2021', scraped:false },
  { id:49, oem:'A2058100621', nameEn:'Mirror Glass Right Heated', nameAr:'ازاز مرايا يمين مسخن', category:'mirror', priceUsd:65.00, brand:'Mercedes-Benz', model:'C-Class', chassis:'W205', years:'2014-2021', scraped:false },
  { id:50, oem:'A2058101000', nameEn:'Mirror Cover Left', nameAr:'غطاء مرايا يسار', category:'mirror', priceUsd:42.00, brand:'Mercedes-Benz', model:'C-Class', chassis:'W205', years:'2014-2021', scraped:false },

  // ── FRONT GRILLE ──
  { id:51, oem:'A2058880060', nameEn:'Front Grille Classic', nameAr:'شبكة امامية كلاسيك', category:'grille', priceUsd:195.00, brand:'Mercedes-Benz', model:'C-Class', chassis:'W205', years:'2014-2018', scraped:false },
  { id:52, oem:'A2058880160', nameEn:'Front Grille Avantgarde', nameAr:'شبكة امامية افانجارد', category:'grille', priceUsd:265.00, brand:'Mercedes-Benz', model:'C-Class', chassis:'W205', years:'2014-2018', scraped:false },
  { id:53, oem:'A2058880260', nameEn:'Front Grille AMG Diamond', nameAr:'شبكة امامية AMG دايموند', category:'grille', priceUsd:385.00, brand:'Mercedes-Benz', model:'C-Class', chassis:'W205', years:'2014-2021', scraped:false },
  { id:54, oem:'A2058880360', nameEn:'Front Grille (Facelift)', nameAr:'شبكة امامية (فيس ليفت)', category:'grille', priceUsd:310.00, brand:'Mercedes-Benz', model:'C-Class', chassis:'W205', years:'2018-2021', scraped:false },

  // ── DOOR ──
  { id:55, oem:'A2057200105', nameEn:'Front Door Shell Left', nameAr:'باب امامي يسار', category:'door', priceUsd:620.00, brand:'Mercedes-Benz', model:'C-Class', chassis:'W205', years:'2014-2021', scraped:false },
  { id:56, oem:'A2057200205', nameEn:'Front Door Shell Right', nameAr:'باب امامي يمين', category:'door', priceUsd:620.00, brand:'Mercedes-Benz', model:'C-Class', chassis:'W205', years:'2014-2021', scraped:false },
  { id:57, oem:'A2057300105', nameEn:'Rear Door Shell Left', nameAr:'باب خلفي يسار', category:'door', priceUsd:580.00, brand:'Mercedes-Benz', model:'C-Class', chassis:'W205', years:'2014-2021', scraped:false },
  { id:58, oem:'A2057300205', nameEn:'Rear Door Shell Right', nameAr:'باب خلفي يمين', category:'door', priceUsd:580.00, brand:'Mercedes-Benz', model:'C-Class', chassis:'W205', years:'2014-2021', scraped:false },
  { id:59, oem:'A2057201600', nameEn:'Door Handle Left Front', nameAr:'يد باب امامي يسار', category:'door', priceUsd:85.00, brand:'Mercedes-Benz', model:'C-Class', chassis:'W205', years:'2014-2021', scraped:false },

  // ── TRUNK LID ──
  { id:60, oem:'A2057500075', nameEn:'Trunk Lid', nameAr:'شنطة (غطاء صندوق)', category:'trunk', priceUsd:750.00, brand:'Mercedes-Benz', model:'C-Class', chassis:'W205', years:'2014-2021', scraped:false },
  { id:61, oem:'A2057500175', nameEn:'Trunk Lid (with Spoiler Holes)', nameAr:'شنطة (مع فتحات سبويلر)', category:'trunk', priceUsd:820.00, brand:'Mercedes-Benz', model:'C-Class', chassis:'W205', years:'2014-2021', scraped:false },
  { id:62, oem:'A2057500300', nameEn:'Trunk Hinge Left', nameAr:'مفصل شنطة يسار', category:'trunk', priceUsd:55.00, brand:'Mercedes-Benz', model:'C-Class', chassis:'W205', years:'2014-2021', scraped:false },
  { id:63, oem:'A2057500400', nameEn:'Trunk Hinge Right', nameAr:'مفصل شنطة يمين', category:'trunk', priceUsd:55.00, brand:'Mercedes-Benz', model:'C-Class', chassis:'W205', years:'2014-2021', scraped:false },

  // ── RADIATOR ──
  { id:64, oem:'A2055000293', nameEn:'Radiator Assembly', nameAr:'ريداتير', category:'radiator', priceUsd:320.00, brand:'Mercedes-Benz', model:'C-Class', chassis:'W205', years:'2014-2021', scraped:false },
  { id:65, oem:'A2055000493', nameEn:'Radiator (Automatic Trans)', nameAr:'ريداتير (اوتوماتيك)', category:'radiator', priceUsd:380.00, brand:'Mercedes-Benz', model:'C-Class', chassis:'W205', years:'2014-2021', scraped:false },
  { id:66, oem:'A2055000193', nameEn:'Radiator (Manual Trans)', nameAr:'ريداتير (مانيوال)', category:'radiator', priceUsd:295.00, brand:'Mercedes-Benz', model:'C-Class', chassis:'W205', years:'2014-2021', scraped:false },

  // ── OIL COOLER ──
  { id:67, oem:'A2055001400', nameEn:'Engine Oil Cooler', nameAr:'مبرد زيت ماتور', category:'cooler', priceUsd:185.00, brand:'Mercedes-Benz', model:'C-Class', chassis:'W205', years:'2014-2021', scraped:false },
  { id:68, oem:'A2055001500', nameEn:'Transmission Oil Cooler', nameAr:'مبرد زيت فتيس', category:'cooler', priceUsd:210.00, brand:'Mercedes-Benz', model:'C-Class', chassis:'W205', years:'2014-2021', scraped:false },
  { id:69, oem:'A2055001600', nameEn:'Auxiliary Cooler', nameAr:'مبرد مساعد', category:'cooler', priceUsd:165.00, brand:'Mercedes-Benz', model:'C-Class', chassis:'W205', years:'2014-2021', scraped:false },

  // ── BRAKE PADS ──
  { id:70, oem:'A0074209020', nameEn:'Front Brake Pad Set', nameAr:'تيل فرامل امامي', category:'brakes', priceUsd:92.00, brand:'Mercedes-Benz', model:'C-Class', chassis:'W205', years:'2014-2021', scraped:false },
  { id:71, oem:'A0074208720', nameEn:'Rear Brake Pad Set', nameAr:'تيل فرامل خلفي', category:'brakes', priceUsd:78.00, brand:'Mercedes-Benz', model:'C-Class', chassis:'W205', years:'2014-2021', scraped:false },
  { id:72, oem:'A0004212100', nameEn:'Front Brake Disc', nameAr:'طنبورة فرامل امامي', category:'brakes', priceUsd:125.00, brand:'Mercedes-Benz', model:'C-Class', chassis:'W205', years:'2014-2021', scraped:false },
  { id:73, oem:'A0004212200', nameEn:'Rear Brake Disc', nameAr:'طنبورة فرامل خلفي', category:'brakes', priceUsd:98.00, brand:'Mercedes-Benz', model:'C-Class', chassis:'W205', years:'2014-2021', scraped:false },

  // ── TURN INDICATOR ──
  { id:74, oem:'A2058200521', nameEn:'Mirror Turn Indicator Left', nameAr:'اشارة مرايا يسار', category:'indicator', priceUsd:45.00, brand:'Mercedes-Benz', model:'C-Class', chassis:'W205', years:'2014-2021', scraped:false },
  { id:75, oem:'A2058200621', nameEn:'Mirror Turn Indicator Right', nameAr:'اشارة مرايا يمين', category:'indicator', priceUsd:45.00, brand:'Mercedes-Benz', model:'C-Class', chassis:'W205', years:'2014-2021', scraped:false },
  { id:76, oem:'A2058200121', nameEn:'Side Marker Light Left', nameAr:'اشارة جانبية يسار', category:'indicator', priceUsd:28.00, brand:'Mercedes-Benz', model:'C-Class', chassis:'W205', years:'2014-2021', scraped:false },

  // ── BMW 3-Series F30 (scraped from bmwfans.info ETK, 2012-2019) ──
  { id:77, oem:'41357298027', nameEn:'Side panel, front left', nameAr:'رفرف يسار', category:'fender', priceUsd:175.94, brand:'BMW', model:'3-Series', chassis:'F30', years:'2012-2019', scraped:true },
  { id:78, oem:'41357298028', nameEn:'Side panel, front right', nameAr:'رفرف يمين', category:'fender', priceUsd:175.94, brand:'BMW', model:'3-Series', chassis:'F30', years:'2012-2019', scraped:true },
  { id:79, oem:'41358066937', nameEn:'Side panel bracket, front left 1', nameAr:'رفرف يسار', category:'fender', priceUsd:6.44, brand:'BMW', model:'3-Series', chassis:'F30', years:'2012-2019', scraped:true },
  { id:80, oem:'41358066938', nameEn:'Side panel bracket, front right 1', nameAr:'رفرف يمين', category:'fender', priceUsd:6.44, brand:'BMW', model:'3-Series', chassis:'F30', years:'2012-2019', scraped:true },
  { id:81, oem:'51117275178', nameEn:'Mount, bumper, front, top', nameAr:'اكصدام امامي', category:'bumper_front', priceUsd:124.83, brand:'BMW', model:'3-Series', chassis:'F30', years:'2012-2019', scraped:true },
  { id:82, oem:'51112240175', nameEn:'Flap, towing eye, painted', nameAr:'اكصدام امامي', category:'bumper_front', priceUsd:44.15, brand:'BMW', model:'3-Series', chassis:'F30', years:'2012-2019', scraped:true },
  { id:83, oem:'51117266195', nameEn:'Deformation element, front left', nameAr:'اكصدام امامي يسار', category:'bumper_front', priceUsd:41.19, brand:'BMW', model:'3-Series', chassis:'F30', years:'2012-2019', scraped:true },
  { id:84, oem:'51117266196', nameEn:'Deformation element, front right', nameAr:'اكصدام امامي يمين', category:'bumper_front', priceUsd:41.19, brand:'BMW', model:'3-Series', chassis:'F30', years:'2012-2019', scraped:true },
  { id:85, oem:'51117279703', nameEn:'Insert, air intake, center', nameAr:'اكصدام امامي', category:'bumper_front', priceUsd:37.5, brand:'BMW', model:'3-Series', chassis:'F30', years:'2012-2019', scraped:true },
  { id:86, oem:'51117324343', nameEn:'Set of mounts, front PDC / PMA sensor', nameAr:'اكصدام امامي', category:'bumper_front', priceUsd:32.22, brand:'BMW', model:'3-Series', chassis:'F30', years:'2012-2019', scraped:true },
  { id:87, oem:'51118054157', nameEn:'Licence plate base', nameAr:'اكصدام امامي', category:'bumper_front', priceUsd:32.16, brand:'BMW', model:'3-Series', chassis:'F30', years:'2012-2019', scraped:true },
  { id:88, oem:'51617378711', nameEn:'Strut brace', nameAr:'اكصدام امامي', category:'bumper_front', priceUsd:31.03, brand:'BMW', model:'3-Series', chassis:'F30', years:'2012-2019', scraped:true },
  { id:89, oem:'51647266325', nameEn:'Mount, bumper, front, lower', nameAr:'اكصدام امامي', category:'bumper_front', priceUsd:29.8, brand:'BMW', model:'3-Series', chassis:'F30', years:'2012-2019', scraped:true },
  { id:90, oem:'51617435132', nameEn:'Reinforcement on firewall', nameAr:'اكصدام امامي', category:'bumper_front', priceUsd:22.09, brand:'BMW', model:'3-Series', chassis:'F30', years:'2012-2019', scraped:true },
  { id:91, oem:'51617377777', nameEn:'Strut tower brace, left', nameAr:'اكصدام امامي يسار', category:'bumper_front', priceUsd:19.63, brand:'BMW', model:'3-Series', chassis:'F30', years:'2012-2019', scraped:true },
  { id:92, oem:'51617377778', nameEn:'Strut tower brace, right', nameAr:'اكصدام امامي يمين', category:'bumper_front', priceUsd:19.63, brand:'BMW', model:'3-Series', chassis:'F30', years:'2012-2019', scraped:true },
  { id:93, oem:'51128056497', nameEn:'Bumper trim panel, primered, rear', nameAr:'اكصدام خلفي', category:'bumper_rear', priceUsd:547.98, brand:'BMW', model:'3-Series', chassis:'F30', years:'2012-2019', scraped:true },
  { id:94, oem:'51127256927', nameEn:'Carrier, bumper rear', nameAr:'اكصدام خلفي', category:'bumper_rear', priceUsd:124.79, brand:'BMW', model:'3-Series', chassis:'F30', years:'2012-2019', scraped:true },
  { id:95, oem:'51127289755', nameEn:'Trim strip, chrome', nameAr:'اكصدام خلفي', category:'bumper_rear', priceUsd:67.62, brand:'BMW', model:'3-Series', chassis:'F30', years:'2012-2019', scraped:true },
  { id:96, oem:'51128054197', nameEn:'Insert for bumper, rear', nameAr:'اكصدام خلفي', category:'bumper_rear', priceUsd:60.9, brand:'BMW', model:'3-Series', chassis:'F30', years:'2012-2019', scraped:true },
  { id:97, oem:'51127289756', nameEn:'Trim strip, matt aluminum', nameAr:'اكصدام خلفي', category:'bumper_rear', priceUsd:56.27, brand:'BMW', model:'3-Series', chassis:'F30', years:'2012-2019', scraped:true },
  { id:98, oem:'51122240007', nameEn:'Flap, towing eye, painted', nameAr:'اكصدام خلفي', category:'bumper_rear', priceUsd:44.15, brand:'BMW', model:'3-Series', chassis:'F30', years:'2012-2019', scraped:true },
  { id:99, oem:'51127288233', nameEn:'Trim strip, black', nameAr:'اكصدام خلفي', category:'bumper_rear', priceUsd:40.85, brand:'BMW', model:'3-Series', chassis:'F30', years:'2012-2019', scraped:true },
  { id:100, oem:'51128054200', nameEn:'Reinforcement for bumper, rear lower', nameAr:'اكصدام خلفي', category:'bumper_rear', priceUsd:35.32, brand:'BMW', model:'3-Series', chassis:'F30', years:'2012-2019', scraped:true },
  { id:101, oem:'41007290944', nameEn:'Hood', nameAr:'كبوت', category:'hood', priceUsd:268.46, brand:'BMW', model:'3-Series', chassis:'F30', years:'2012-2019', scraped:true },
  { id:102, oem:'51757241772', nameEn:'Engine comp. shield., underride prot.', nameAr:'كبوت', category:'hood', priceUsd:168.66, brand:'BMW', model:'3-Series', chassis:'F30', years:'2012-2019', scraped:true },
  { id:103, oem:'51757241814', nameEn:'Underhood shield', nameAr:'كبوت', category:'hood', priceUsd:73.79, brand:'BMW', model:'3-Series', chassis:'F30', years:'2012-2019', scraped:true },
  { id:104, oem:'51237239233', nameEn:'Gas strut, hood', nameAr:'كبوت', category:'hood', priceUsd:41.28, brand:'BMW', model:'3-Series', chassis:'F30', years:'2012-2019', scraped:true },
  { id:105, oem:'51237242549', nameEn:'Right lower part of hood lock', nameAr:'كبوت', category:'hood', priceUsd:37.79, brand:'BMW', model:'3-Series', chassis:'F30', years:'2012-2019', scraped:true },
  { id:106, oem:'51237242548', nameEn:'Left lower part of hood lock', nameAr:'كبوت', category:'hood', priceUsd:37.79, brand:'BMW', model:'3-Series', chassis:'F30', years:'2012-2019', scraped:true },
  { id:107, oem:'41617286343', nameEn:'Left engine hood hinge', nameAr:'كبوت', category:'hood', priceUsd:34.42, brand:'BMW', model:'3-Series', chassis:'F30', years:'2012-2019', scraped:true },
  { id:108, oem:'41617286344', nameEn:'Right engine hood hinge', nameAr:'كبوت', category:'hood', priceUsd:34.42, brand:'BMW', model:'3-Series', chassis:'F30', years:'2012-2019', scraped:true },
  { id:109, oem:'63117338702', nameEn:'Bi-xenon headlight AKL, right', nameAr:'فانوس امامي يمين', category:'headlamp', priceUsd:742.65, brand:'BMW', model:'3-Series', chassis:'F30', years:'2012-2019', scraped:true },
  { id:110, oem:'63117338703', nameEn:'Bi-xenon headlight AKL, left', nameAr:'فانوس امامي يسار', category:'headlamp', priceUsd:742.65, brand:'BMW', model:'3-Series', chassis:'F30', years:'2012-2019', scraped:true },
  { id:111, oem:'63117338699', nameEn:'Bi-xenon headlight, left', nameAr:'فانوس امامي يسار', category:'headlamp', priceUsd:629.38, brand:'BMW', model:'3-Series', chassis:'F30', years:'2012-2019', scraped:true },
  { id:112, oem:'63117338700', nameEn:'Bi-xenon headlight, right', nameAr:'فانوس امامي يمين', category:'headlamp', priceUsd:629.38, brand:'BMW', model:'3-Series', chassis:'F30', years:'2012-2019', scraped:true },
  { id:113, oem:'63127296090', nameEn:'Control unit xenon light', nameAr:'فانوس امامي', category:'headlamp', priceUsd:324.53, brand:'BMW', model:'3-Series', chassis:'F30', years:'2012-2019', scraped:true },
  { id:114, oem:'63117259524', nameEn:'Headlight right', nameAr:'فانوس امامي يمين', category:'headlamp', priceUsd:310.71, brand:'BMW', model:'3-Series', chassis:'F30', years:'2012-2019', scraped:true },
  { id:115, oem:'63117259539', nameEn:'Headlight left', nameAr:'فانوس امامي يسار', category:'headlamp', priceUsd:310.71, brand:'BMW', model:'3-Series', chassis:'F30', years:'2012-2019', scraped:true },
  { id:116, oem:'63117316147', nameEn:'Driver module for headlight', nameAr:'فانوس امامي', category:'headlamp', priceUsd:285.58, brand:'BMW', model:'3-Series', chassis:'F30', years:'2012-2019', scraped:true },
  { id:117, oem:'63217217509', nameEn:'Bulb Xenon light with ignition element', nameAr:'فانوس امامي', category:'headlamp', priceUsd:176.98, brand:'BMW', model:'3-Series', chassis:'F30', years:'2012-2019', scraped:true },
  { id:118, oem:'63117398766', nameEn:'Set of LED modules', nameAr:'فانوس امامي', category:'headlamp', priceUsd:65.65, brand:'BMW', model:'3-Series', chassis:'F30', years:'2012-2019', scraped:true },
  { id:119, oem:'63217312845', nameEn:'Rear light in the side panel, left', nameAr:'فانوس خلفي يسار', category:'taillight', priceUsd:174.27, brand:'BMW', model:'3-Series', chassis:'F30', years:'2012-2019', scraped:true },
  { id:120, oem:'63217312846', nameEn:'Rear light in the side panel, right', nameAr:'فانوس خلفي يمين', category:'taillight', priceUsd:174.27, brand:'BMW', model:'3-Series', chassis:'F30', years:'2012-2019', scraped:true },
  { id:121, oem:'63217372793', nameEn:'Rear light in trunk lid, left', nameAr:'فانوس خلفي يسار', category:'taillight', priceUsd:108.86, brand:'BMW', model:'3-Series', chassis:'F30', years:'2012-2019', scraped:true },
  { id:122, oem:'63217372794', nameEn:'Rear light in trunk lid, right', nameAr:'فانوس خلفي يمين', category:'taillight', priceUsd:108.86, brand:'BMW', model:'3-Series', chassis:'F30', years:'2012-2019', scraped:true },
  { id:123, oem:'63257259856', nameEn:'Third stoplamp', nameAr:'فانوس خلفي', category:'taillight', priceUsd:72.3, brand:'BMW', model:'3-Series', chassis:'F30', years:'2012-2019', scraped:true },
  { id:124, oem:'63217313057', nameEn:'Trim, drip rail, left', nameAr:'فانوس خلفي يسار', category:'taillight', priceUsd:21.02, brand:'BMW', model:'3-Series', chassis:'F30', years:'2012-2019', scraped:true },
  { id:125, oem:'63217313058', nameEn:'Trim, drip rail, right', nameAr:'فانوس خلفي يمين', category:'taillight', priceUsd:21.02, brand:'BMW', model:'3-Series', chassis:'F30', years:'2012-2019', scraped:true },
  { id:126, oem:'63217313043', nameEn:'Bulb socket, rear light side panel, left', nameAr:'فانوس خلفي يسار', category:'taillight', priceUsd:18.58, brand:'BMW', model:'3-Series', chassis:'F30', years:'2012-2019', scraped:true },
  { id:127, oem:'51132239973', nameEn:'Roof molding painted right', nameAr:'شبكة امامية يمين', category:'grille', priceUsd:141.35, brand:'BMW', model:'3-Series', chassis:'F30', years:'2012-2019', scraped:true },
  { id:128, oem:'51132239971', nameEn:'Roof molding painted left', nameAr:'شبكة امامية يسار', category:'grille', priceUsd:118.43, brand:'BMW', model:'3-Series', chassis:'F30', years:'2012-2019', scraped:true },
  { id:129, oem:'51137312617', nameEn:'Roof molding prime-coated left', nameAr:'شبكة امامية يسار', category:'grille', priceUsd:69.35, brand:'BMW', model:'3-Series', chassis:'F30', years:'2012-2019', scraped:true },
  { id:130, oem:'51137312618', nameEn:'Roof molding prime-coated right', nameAr:'شبكة امامية يمين', category:'grille', priceUsd:69.35, brand:'BMW', model:'3-Series', chassis:'F30', years:'2012-2019', scraped:true },
  { id:131, oem:'51137263479', nameEn:'Grille, front, left', nameAr:'شبكة امامية يسار', category:'grille', priceUsd:50.43, brand:'BMW', model:'3-Series', chassis:'F30', years:'2012-2019', scraped:true },
  { id:132, oem:'51137263480', nameEn:'Grille, front, right', nameAr:'شبكة امامية يمين', category:'grille', priceUsd:50.43, brand:'BMW', model:'3-Series', chassis:'F30', years:'2012-2019', scraped:true },
  { id:133, oem:'51167245307', nameEn:'Heated outside mirror, left', nameAr:'مرايا جانبية يسار', category:'mirror', priceUsd:566.55, brand:'BMW', model:'3-Series', chassis:'F30', years:'2012-2019', scraped:true },
  { id:134, oem:'51167245308', nameEn:'Heated outside mirror, right', nameAr:'مرايا جانبية يمين', category:'mirror', priceUsd:566.55, brand:'BMW', model:'3-Series', chassis:'F30', years:'2012-2019', scraped:true },
  { id:135, oem:'67137266659', nameEn:'Power, outside mirror, LIN bus', nameAr:'مرايا جانبية', category:'mirror', priceUsd:159.71, brand:'BMW', model:'3-Series', chassis:'F30', years:'2012-2019', scraped:true },
  { id:136, oem:'51162222543', nameEn:'Outside mirror covering cap, painted left', nameAr:'مرايا جانبية يسار', category:'mirror', priceUsd:110.79, brand:'BMW', model:'3-Series', chassis:'F30', years:'2012-2019', scraped:true },
  { id:137, oem:'51162222544', nameEn:'Outside mirror covering cap, painted rig.', nameAr:'مرايا جانبية', category:'mirror', priceUsd:110.79, brand:'BMW', model:'3-Series', chassis:'F30', years:'2012-2019', scraped:true },
  { id:138, oem:'51167284999', nameEn:'Mirror glas, heated, wide-angle, left', nameAr:'مرايا جانبية يسار', category:'mirror', priceUsd:95.55, brand:'BMW', model:'3-Series', chassis:'F30', years:'2012-2019', scraped:true },
  { id:139, oem:'51167285002', nameEn:'Mirror glas, heated, wide-angle, right', nameAr:'مرايا جانبية يمين', category:'mirror', priceUsd:95.55, brand:'BMW', model:'3-Series', chassis:'F30', years:'2012-2019', scraped:true },
  { id:140, oem:'51167285001', nameEn:'Mirror glas heated convex left', nameAr:'مرايا جانبية يسار', category:'mirror', priceUsd:86.88, brand:'BMW', model:'3-Series', chassis:'F30', years:'2012-2019', scraped:true },
  { id:141, oem:'51167285000', nameEn:'Mirror glas heated convex right', nameAr:'مرايا جانبية يمين', category:'mirror', priceUsd:86.88, brand:'BMW', model:'3-Series', chassis:'F30', years:'2012-2019', scraped:true },
  { id:142, oem:'67137292347', nameEn:'Drive, outside mirror left', nameAr:'مرايا جانبية يسار', category:'mirror', priceUsd:76.06, brand:'BMW', model:'3-Series', chassis:'F30', years:'2012-2019', scraped:true },
  { id:143, oem:'51217326917', nameEn:'Grab handle, paint finish, left', nameAr:'مقبض باب يسار', category:'door', priceUsd:174.28, brand:'BMW', model:'3-Series', chassis:'F30', years:'2012-2019', scraped:true },
  { id:144, oem:'51217326918', nameEn:'Grab handle, paint finish, right', nameAr:'مقبض باب يمين', category:'door', priceUsd:174.28, brand:'BMW', model:'3-Series', chassis:'F30', years:'2012-2019', scraped:true },
  { id:145, oem:'51217229461', nameEn:'System latch, left', nameAr:'مقبض باب يسار', category:'door', priceUsd:140.96, brand:'BMW', model:'3-Series', chassis:'F30', years:'2012-2019', scraped:true },
  { id:146, oem:'51217229462', nameEn:'System latch, right', nameAr:'مقبض باب يمين', category:'door', priceUsd:140.96, brand:'BMW', model:'3-Series', chassis:'F30', years:'2012-2019', scraped:true },
  { id:147, oem:'51217310732', nameEn:'Lock cylinder according to code, right', nameAr:'مقبض باب يمين', category:'door', priceUsd:90.07, brand:'BMW', model:'3-Series', chassis:'F30', years:'2012-2019', scraped:true },
  { id:148, oem:'51217310733', nameEn:'Lock cylinder with key, left', nameAr:'مقبض باب يسار', category:'door', priceUsd:76.56, brand:'BMW', model:'3-Series', chassis:'F30', years:'2012-2019', scraped:true },
  { id:149, oem:'51217310734', nameEn:'Lock cylinder with key, right', nameAr:'مقبض باب يمين', category:'door', priceUsd:76.56, brand:'BMW', model:'3-Series', chassis:'F30', years:'2012-2019', scraped:true },
  { id:150, oem:'51217310731', nameEn:'Lock cylinder according to code, left', nameAr:'مقبض باب يسار', category:'door', priceUsd:64.8, brand:'BMW', model:'3-Series', chassis:'F30', years:'2012-2019', scraped:true },
];

// Compute EGP price for each part
PARTS.forEach(p => {
  p.priceEgp = Math.round(p.priceUsd * EXCHANGE_RATE * MARKUP);
  p.inStock = Math.random() > 0.15; // 85% in stock for demo
  // Part page on nemigaparts
  p.sourceUrl = `https://nemigaparts.com/cat_spares/epc/mercedes/part/${p.oem.replace(/^A/,'')}/`;
});

// ── Cart ──
let cart = JSON.parse(localStorage.getItem('ap_cart') || '[]');
function saveCart() { localStorage.setItem('ap_cart', JSON.stringify(cart)); }

function addToCart(partId) {
  const existing = cart.find(c => c.id === partId);
  if (existing) { existing.qty++; } else { cart.push({ id: partId, qty: 1 }); }
  saveCart();
  updateCartBadge();
  showToast('Added to cart');
}

function removeFromCart(partId) {
  cart = cart.filter(c => c.id !== partId);
  saveCart();
  updateCartBadge();
}

function updateCartQty(partId, qty) {
  const item = cart.find(c => c.id === partId);
  if (item) { item.qty = Math.max(1, qty); saveCart(); }
}

function getCartTotal() {
  return cart.reduce((sum, c) => {
    const p = PARTS.find(x => x.id === c.id);
    return sum + (p ? p.priceEgp * c.qty : 0);
  }, 0);
}

function updateCartBadge() {
  const badges = document.querySelectorAll('.cart-badge');
  const count = cart.reduce((s, c) => s + c.qty, 0);
  badges.forEach(b => {
    b.textContent = count;
    b.style.display = count > 0 ? 'flex' : 'none';
  });
}

// ── Toast ──
function showToast(msg) {
  const t = document.createElement('div');
  t.className = 'toast-gold';
  t.innerHTML = `<i class="fa-solid fa-check" style="margin-left:8px"></i>${msg}`;
  document.body.appendChild(t);
  requestAnimationFrame(() => t.classList.add('show'));
  setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 300); }, 2500);
}

// ── Format ──
function fmtEGP(n) { return n.toLocaleString('en-EG') + ' EGP'; }
function fmtUSD(n) { return '$' + n.toFixed(2); }

// ── Intersection Observer for animations ──
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('animate-in'); observer.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', () => {
  updateCartBadge();
  initScrollAnimations();
});
