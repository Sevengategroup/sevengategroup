import { o as __toESM } from "../_runtime.mjs";
import { n as require_react, t as HugeiconsIcon } from "../_libs/hugeicons__react+react.mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as AnimatePresence } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { _ as Briefcase02Icon, d as Location01Icon, h as Cancel01Icon } from "../_libs/hugeicons__core-free-icons.mjs";
import { n as Navbar, t as Footer } from "./Footer-BTIkrdsZ.mjs";
import { t as ChatWidget } from "./ChatWidget-CUBVLoNx.mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { i as createServerFn } from "./server-CdqFUkkp.mjs";
import { t as createSsrRpc } from "./createSsrRpc-BKODJ3F0.mjs";
import { i as Route$10 } from "./router-scCtyqXC.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/career-BzzEzTMt.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-none", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HugeiconsIcon, {
			icon: Cancel01Icon,
			className: "h-4 w-4",
			strokeWidth: 1.2
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
var nigeriaStatesAndLGAs = {
	"Abia": [
		"Aba North",
		"Aba South",
		"Arochukwu",
		"Bende",
		"Ikwuano",
		"Isiala Ngwa North",
		"Isiala Ngwa South",
		"Isuikwuato",
		"Obi Ngwa",
		"Ohafia",
		"Osisioma",
		"Ugwunagbo",
		"Ukwa East",
		"Ukwa West",
		"Umuahia North",
		"Umuahia South",
		"Umunneochi"
	],
	"Adamawa": [
		"Demsa",
		"Fufure",
		"Ganye",
		"Gayuk",
		"Gombi",
		"Grie",
		"Hong",
		"Jada",
		"Lamurde",
		"Madagali",
		"Maiha",
		"Mayo Belwa",
		"Michika",
		"Mubi North",
		"Mubi South",
		"Numan",
		"Shelleng",
		"Song",
		"Toungo",
		"Yola North",
		"Yola South"
	],
	"Akwa Ibom": [
		"Abak",
		"Eastern Obolo",
		"Eket",
		"Esit Eket",
		"Essien Udim",
		"Etim Ekpo",
		"Etinan",
		"Ibeno",
		"Ibesikpo Asutan",
		"Ibiono-Ibom",
		"Ika",
		"Ikono",
		"Ikot Abasi",
		"Ikot Ekpene",
		"Ini",
		"Itu",
		"Mbo",
		"Mkpat-Enin",
		"Nsit-Atai",
		"Nsit-Ibom",
		"Nsit-Ubium",
		"Obot Akara",
		"Okobo",
		"Onna",
		"Oron",
		"Oruk Anam",
		"Udung-Uko",
		"Ukanafun",
		"Uruan",
		"Urue-Offong/Oruko",
		"Uyo"
	],
	"Anambra": [
		"Aguata",
		"Anambra East",
		"Anambra West",
		"Anaocha",
		"Awka North",
		"Awka South",
		"Ayamelum",
		"Dunukofia",
		"Ekwusigo",
		"Idemili North",
		"Idemili South",
		"Ihiala",
		"Njikoka",
		"Nnewi North",
		"Nnewi South",
		"Ogbaru",
		"Onitsha North",
		"Onitsha South",
		"Orumba North",
		"Orumba South",
		"Oyi"
	],
	"Bauchi": [
		"Alkaleri",
		"Bauchi",
		"Bogoro",
		"Damban",
		"Darazo",
		"Dass",
		"Gamawa",
		"Ganjuwa",
		"Giade",
		"Itas/Gadau",
		"Jama'are",
		"Katagum",
		"Kirfi",
		"Misau",
		"Ningi",
		"Shira",
		"Tafawa Balewa",
		"Toro",
		"Warji",
		"Zaki"
	],
	"Bayelsa": [
		"Brass",
		"Ekeremor",
		"Kolokuma/Opokuma",
		"Nembe",
		"Ogbia",
		"Sagbama",
		"Southern Ijaw",
		"Yenagoa"
	],
	"Benue": [
		"Ado",
		"Agatu",
		"Apa",
		"Buruku",
		"Gboko",
		"Guma",
		"Gwer East",
		"Gwer West",
		"Katsina-Ala",
		"Konshisha",
		"Kwande",
		"Logo",
		"Makurdi",
		"Obi",
		"Ogbadibo",
		"Ohimini",
		"Oju",
		"Okpokwu",
		"Otukpo",
		"Tarka",
		"Ukum",
		"Ushongo",
		"Vandeikya"
	],
	"Borno": [
		"Abadam",
		"Askira/Uba",
		"Bama",
		"Bayo",
		"Biu",
		"Chibok",
		"Damboa",
		"Dikwa",
		"Gubio",
		"Guzamala",
		"Gwoza",
		"Hawul",
		"Jere",
		"Kaga",
		"Kala/Balge",
		"Konduga",
		"Kukawa",
		"Kwaya Kusar",
		"Mafa",
		"Magumeri",
		"Maiduguri",
		"Marte",
		"Mobbar",
		"Monguno",
		"Ngala",
		"Nganzai",
		"Shani"
	],
	"Cross River": [
		"Abi",
		"Akamkpa",
		"Akpabuyo",
		"Bakassi",
		"Bekwarra",
		"Biase",
		"Boki",
		"Calabar Municipal",
		"Calabar South",
		"Etung",
		"Ikom",
		"Obanliku",
		"Obubra",
		"Obudu",
		"Odukpani",
		"Ogoja",
		"Yakuur",
		"Yala"
	],
	"Delta": [
		"Aniocha North",
		"Aniocha South",
		"Bomadi",
		"Burutu",
		"Ethiope East",
		"Ethiope West",
		"Ika North East",
		"Ika South",
		"Isoko North",
		"Isoko South",
		"Ndokwa East",
		"Ndokwa West",
		"Okpe",
		"Oshimili North",
		"Oshimili South",
		"Patani",
		"Sapele",
		"Udu",
		"Ughelli North",
		"Ughelli South",
		"Ukwuani",
		"Uvwie",
		"Warri North",
		"Warri South",
		"Warri South West"
	],
	"Ebonyi": [
		"Abakaliki",
		"Afikpo North",
		"Afikpo South",
		"Ebonyi",
		"Ezza North",
		"Ezza South",
		"Ikwo",
		"Ishielu",
		"Ivo",
		"Izzi",
		"Ohaozara",
		"Ohaukwu",
		"Onicha"
	],
	"Edo": [
		"Akoko-Edo",
		"Egor",
		"Esan Central",
		"Esan North-East",
		"Esan South-East",
		"Esan West",
		"Etsako Central",
		"Etsako East",
		"Etsako West",
		"Igueben",
		"Ikpoba Okha",
		"Orhionmwon",
		"Oredo",
		"Ovia North-East",
		"Ovia South-West",
		"Owan East",
		"Owan West",
		"Uhunmwonde"
	],
	"Ekiti": [
		"Ado Ekiti",
		"Efon",
		"Ekiti East",
		"Ekiti South-West",
		"Ekiti West",
		"Emure",
		"Gbonyin",
		"Ido Osi",
		"Ijero",
		"Ikere",
		"Ikole",
		"Ilejemeje",
		"Irepodun/Ifelodun",
		"Ise/Orun",
		"Moba",
		"Oye"
	],
	"Enugu": [
		"Aninri",
		"Awgu",
		"Enugu East",
		"Enugu North",
		"Enugu South",
		"Ezeagu",
		"Igbo Etiti",
		"Igbo Eze North",
		"Igbo Eze South",
		"Isi Uzo",
		"Nkanu East",
		"Nkanu West",
		"Nsukka",
		"Oji River",
		"Udenu",
		"Udi",
		"Uzo Uwani"
	],
	"FCT": [
		"Abaji",
		"Bwari",
		"Gwagwalada",
		"Kuje",
		"Kwali",
		"Municipal Area Council"
	],
	"Gombe": [
		"Akko",
		"Balanga",
		"Billiri",
		"Dukku",
		"Funakaye",
		"Gombe",
		"Kaltungo",
		"Kwami",
		"Nafada",
		"Shongom",
		"Yamaltu/Deba"
	],
	"Imo": [
		"Aboh Mbaise",
		"Ahiazu Mbaise",
		"Ehime Mbano",
		"Ezinihitte",
		"Ideato North",
		"Ideato South",
		"Ihitte/Uboma",
		"Ikeduru",
		"Isiala Mbano",
		"Isu",
		"Mbaitoli",
		"Ngor Okpala",
		"Njaba",
		"Nkwerre",
		"Nwangele",
		"Obowo",
		"Oguta",
		"Ohaji/Egbema",
		"Okigwe",
		"Orlu",
		"Orsu",
		"Oru East",
		"Oru West",
		"Owerri Municipal",
		"Owerri North",
		"Owerri West",
		"Unuimo"
	],
	"Jigawa": [
		"Auyo",
		"Babura",
		"Biriniwa",
		"Birnin Kudu",
		"Buji",
		"Dutse",
		"Gagarawa",
		"Garki",
		"Gumel",
		"Guri",
		"Gwaram",
		"Gwiwa",
		"Hadejia",
		"Jahun",
		"Kafin Hausa",
		"Kaugama",
		"Kazaure",
		"Kiri Kasama",
		"Kiyawa",
		"Kaugama",
		"Maigatari",
		"Malam Madori",
		"Miga",
		"Ringim",
		"Roni",
		"Sule Tankarkar",
		"Taura",
		"Yankwashi"
	],
	"Kaduna": [
		"Birnin Gwari",
		"Chikun",
		"Giwa",
		"Igabi",
		"Ikara",
		"Jaba",
		"Jema'a",
		"Kachia",
		"Kaduna North",
		"Kaduna South",
		"Kagarko",
		"Kajuru",
		"Kaura",
		"Kauru",
		"Kubau",
		"Kudan",
		"Lere",
		"Makarfi",
		"Sabon Gari",
		"Sanga",
		"Soba",
		"Zangon Kataf",
		"Zaria"
	],
	"Kano": [
		"Ajingi",
		"Albasu",
		"Bagwai",
		"Bebeji",
		"Bichi",
		"Bunkure",
		"Dala",
		"Dambatta",
		"Dawakin Kudu",
		"Dawakin Tofa",
		"Doguwa",
		"Fagge",
		"Gabasawa",
		"Garko",
		"Garun Mallam",
		"Gaya",
		"Gezawa",
		"Gwale",
		"Gwarzo",
		"Kabo",
		"Kano Municipal",
		"Karaye",
		"Kibiya",
		"Kiru",
		"Kumbotso",
		"Kunchi",
		"Kura",
		"Madobi",
		"Makoda",
		"Minjibir",
		"Nasarawa",
		"Rano",
		"Rimin Gado",
		"Rogo",
		"Shanono",
		"Sumaila",
		"Takai",
		"Tarauni",
		"Tofa",
		"Tsanyawa",
		"Tudun Wada",
		"Ungogo",
		"Warawa",
		"Wudil"
	],
	"Katsina": [
		"Bakori",
		"Batagarawa",
		"Batsari",
		"Baure",
		"Bindawa",
		"Charanchi",
		"Dandume",
		"Danja",
		"Dan Musa",
		"Daura",
		"Dutsi",
		"Dutsin Ma",
		"Faskari",
		"Funtua",
		"Ingawa",
		"Jibia",
		"Kafur",
		"Kaita",
		"Kankara",
		"Kankia",
		"Katsina",
		"Kurfi",
		"Kusada",
		"Mai'Adua",
		"Malumfashi",
		"Mani",
		"Mashi",
		"Matazu",
		"Musawa",
		"Rimi",
		"Sabuwa",
		"Safana",
		"Sandamu",
		"Zango"
	],
	"Kebbi": [
		"Aleiro",
		"Arewa Dandi",
		"Argungu",
		"Augie",
		"Bagudo",
		"Birnin Kebbi",
		"Bunza",
		"Dandi",
		"Fakai",
		"Gwandu",
		"Jega",
		"Kalgo",
		"Koko/Besse",
		"Maiyama",
		"Ngaski",
		"Sakaba",
		"Shanga",
		"Suru",
		"Wasagu/Danko",
		"Yauri",
		"Zuru"
	],
	"Kogi": [
		"Adavi",
		"Ajaokuta",
		"Ankpa",
		"Bassa",
		"Dekina",
		"Ibaji",
		"Idah",
		"Igalamela Odolu",
		"Ijumu",
		"Kabba/Bunu",
		"Kogi",
		"Lokoja",
		"Mopa Muro",
		"Ofu",
		"Ogori/Magongo",
		"Okehi",
		"Okene",
		"Olamaboro",
		"Omala",
		"Yagba East",
		"Yagba West"
	],
	"Kwara": [
		"Asa",
		"Baruten",
		"Edu",
		"Ekiti",
		"Ifelodun",
		"Ilorin East",
		"Ilorin South",
		"Ilorin West",
		"Irepodun",
		"Isin",
		"Kaiama",
		"Moro",
		"Offa",
		"Oke Ero",
		"Oyun",
		"Pategi"
	],
	"Lagos": [
		"Agege",
		"Ajeromi-Ifelodun",
		"Alimosho",
		"Amuwo-Odofin",
		"Apapa",
		"Badagry",
		"Epe",
		"Eti Osa",
		"Ibeju-Lekki",
		"Ifako-Ijaiye",
		"Ikeja",
		"Ikorodu",
		"Kosofe",
		"Lagos Island",
		"Lagos Mainland",
		"Mushin",
		"Ojo",
		"Oshodi-Isolo",
		"Shomolu",
		"Surulere"
	],
	"Nasarawa": [
		"Akwanga",
		"Awe",
		"Doma",
		"Karu",
		"Keana",
		"Keffi",
		"Kokona",
		"Lafia",
		"Nasarawa",
		"Nasarawa Egon",
		"Obi",
		"Toto",
		"Wamba"
	],
	"Niger": [
		"Agaie",
		"Agwara",
		"Bida",
		"Borgu",
		"Bosso",
		"Chanchaga",
		"Edati",
		"Gbako",
		"Gurara",
		"Katcha",
		"Kontagora",
		"Lapai",
		"Lavun",
		"Magama",
		"Mariga",
		"Mashegu",
		"Mokwa",
		"Moya",
		"Paikoro",
		"Rafi",
		"Rijau",
		"Shiroro",
		"Suleja",
		"Tafa",
		"Wushishi"
	],
	"Ogun": [
		"Abeokuta North",
		"Abeokuta South",
		"Ado-Odo/Ota",
		"Egbado North",
		"Egbado South",
		"Ewekoro",
		"Ifo",
		"Ijebu East",
		"Ijebu North",
		"Ijebu North East",
		"Ijebu Ode",
		"Ikenne",
		"Imeko Afon",
		"Ipokia",
		"Obafemi Owode",
		"Odeda",
		"Odogbolu",
		"Ogun Waterside",
		"Remo North",
		"Shagamu"
	],
	"Ondo": [
		"Akoko North-East",
		"Akoko North-West",
		"Akoko South-East",
		"Akoko South-West",
		"Akure North",
		"Akure South",
		"Ese Odo",
		"Idanre",
		"Ifedore",
		"Ilaje",
		"Ile Oluji/Okeigbo",
		"Irele",
		"Odigbo",
		"Okitipupa",
		"Ondo East",
		"Ondo West",
		"Ose",
		"Owo"
	],
	"Osun": [
		"Aiyedade",
		"Aiyedire",
		"Atakunmosa East",
		"Atakunmosa West",
		"Boluwaduro",
		"Boripe",
		"Ede North",
		"Ede South",
		"Egbedore",
		"Ejigbo",
		"Ife Central",
		"Ife East",
		"Ife North",
		"Ife South",
		"Ifedayo",
		"Ifelodun",
		"Ila",
		"Ilesa East",
		"Ilesa West",
		"Irepodun",
		"Irewole",
		"Isokan",
		"Iwo",
		"Obokun",
		"Odo Otin",
		"Ola Oluwa",
		"Olorunda",
		"Oriade",
		"Orolu",
		"Osogbo"
	],
	"Oyo": [
		"Afijio",
		"Akinyele",
		"Atiba",
		"Atisbo",
		"Egbeda",
		"Ibadan North",
		"Ibadan North-East",
		"Ibadan North-West",
		"Ibadan South-East",
		"Ibadan South-West",
		"Ibarapa Central",
		"Ibarapa East",
		"Ibarapa North",
		"Ido",
		"Irepo",
		"Iseyin",
		"Itesiwaju",
		"Iwajowa",
		"Kajola",
		"Lagelu",
		"Ogbomosho North",
		"Ogbomosho South",
		"Ogo Oluwa",
		"Olorunsogo",
		"Oluyole",
		"Ona Ara",
		"Orelope",
		"Ori Ire",
		"Oyo",
		"Oyo East",
		"Saki East",
		"Saki West",
		"Surulere"
	],
	"Plateau": [
		"Bokkos",
		"Barkin Ladi",
		"Bassa",
		"Jos East",
		"Jos North",
		"Jos South",
		"Kanam",
		"Kanke",
		"Langtang North",
		"Langtang South",
		"Mangu",
		"Mikang",
		"Pankshin",
		"Qua'an Pan",
		"Riyom",
		"Shendam",
		"Wase"
	],
	"Rivers": [
		"Abua/Odual",
		"Ahoada East",
		"Ahoada West",
		"Akuku-Toru",
		"Andoni",
		"Asari-Toru",
		"Bonny",
		"Degema",
		"Eleme",
		"Emuoha",
		"Etche",
		"Gokana",
		"Ikwerre",
		"Khana",
		"Obio/Akpor",
		"Ogba/Egbema/Ndoni",
		"Ogu/Bolo",
		"Okrika",
		"Omuma",
		"Opobo/Nkoro",
		"Oyigbo",
		"Port Harcourt",
		"Tai"
	],
	"Sokoto": [
		"Binji",
		"Bodinga",
		"Dange Shuni",
		"Gada",
		"Goronyo",
		"Gudu",
		"Gwadabawa",
		"Illela",
		"Isa",
		"Kebbe",
		"Kware",
		"Rabah",
		"Sabon Birni",
		"Shagari",
		"Silame",
		"Sokoto North",
		"Sokoto South",
		"Tambuwal",
		"Tangaza",
		"Tureta",
		"Wamako",
		"Wurno",
		"Yabo"
	],
	"Taraba": [
		"Ardo Kola",
		"Bali",
		"Donga",
		"Gashaka",
		"Gassol",
		"Ibi",
		"Jalingo",
		"Karim Lamido",
		"Kumi",
		"Lau",
		"Sardauna",
		"Takum",
		"Ussa",
		"Wukari",
		"Yorro",
		"Zing"
	],
	"Yobe": [
		"Bade",
		"Bursari",
		"Damaturu",
		"Fika",
		"Fune",
		"Geidam",
		"Gujba",
		"Gulani",
		"Jakusko",
		"Karasuwa",
		"Machina",
		"Nangere",
		"Nguru",
		"Potiskum",
		"Tarmuwa",
		"Yunusari",
		"Yusufari"
	],
	"Zamfara": [
		"Anka",
		"Bakura",
		"Birnin Magaji/Kiyaw",
		"Bukkuyum",
		"Bungudu",
		"Gummi",
		"Gusau",
		"Kaura Namoda",
		"Maradun",
		"Maru",
		"Shinkafi",
		"Talata Mafara",
		"Chafe",
		"Zurmi"
	]
};
var vision_and_mission_default = "/assets/vision%20and%20mission-CnnuLA5N.jpg";
var submitApplication = createServerFn({ method: "POST" }).handler(createSsrRpc("73d61aee52f588528a341b5fcc27302ee81d0568cc5d4930f05acd63b6bca368"));
var fadeInUp = {
	hidden: {
		opacity: 0,
		y: 20
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: .6 }
	}
};
var staggerContainer = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { staggerChildren: .1 }
	}
};
function CareerPage() {
	const { jobs } = Route$10.useLoaderData();
	const [selectedJob, setSelectedJob] = (0, import_react.useState)(null);
	const [applyingJob, setApplyingJob] = (0, import_react.useState)(null);
	const [applicantNationality, setApplicantNationality] = (0, import_react.useState)("Nigeria");
	const [applicantState, setApplicantState] = (0, import_react.useState)("");
	const [applicantLga, setApplicantLga] = (0, import_react.useState)("");
	const [isApplying, setIsApplying] = (0, import_react.useState)(false);
	const [applyError, setApplyError] = (0, import_react.useState)("");
	const [applySuccess, setApplySuccess] = (0, import_react.useState)(false);
	const handleApplySubmit = async (e) => {
		e.preventDefault();
		if (!applyingJob) return;
		setIsApplying(true);
		setApplyError("");
		setApplySuccess(false);
		try {
			const formData = new FormData(e.currentTarget);
			formData.set("jobTitle", "General Application");
			formData.set("jobId", "general");
			await submitApplication({ data: formData });
			setApplySuccess(true);
		} catch (err) {
			setApplyError(err.message || "Failed to submit application. Please try again.");
		} finally {
			setIsApplying(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative min-h-screen bg-background text-foreground overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-28 md:h-36" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-12 md:py-24 container-x max-w-7xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: "hidden",
					animate: "visible",
					variants: staggerContainer,
					className: "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
									variants: fadeInUp,
									className: "text-sm font-semibold tracking-[0.1em] text-accent uppercase mb-4 leading-relaxed",
									children: "Join Sevengate Group"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
									variants: fadeInUp,
									className: "font-display text-4xl md:text-5xl lg:text-6xl font-normal text-foreground uppercase tracking-tight mb-8 leading-[1.1]",
									children: [
										"Build The Future",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"Of Africa"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
									variants: fadeInUp,
									className: "text-muted-foreground font-light leading-relaxed text-lg space-y-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We are always looking for driven, technical, and internationally-minded professionals to join our industry across technology, energy, mining infrastructure and construction." }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["Sevengate is an equal employment opportunity company. We work as a team and we win as a team. For more on how to join our team, contact us on ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "mailto:career@sevengategroup.com",
										className: "text-accent hover:underline",
										children: "career@sevengategroup.com"
									})] })]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							variants: fadeInUp,
							className: "flex flex-col items-start border-t border-border pt-12",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => {
									setApplySuccess(false);
									setApplyingJob({
										id: "general",
										title: "General Application"
									});
								},
								className: "bg-accent text-white px-12 py-6 text-lg font-semibold tracking-widest uppercase transition-transform hover:-translate-y-1 hover:shadow-xl shadow-accent/20",
								children: "Submit CV"
							})
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						variants: fadeInUp,
						className: "relative w-full rounded-none overflow-hidden shadow-2xl group bg-white",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: vision_and_mission_default,
							alt: "Career at Sevengate Group",
							className: "w-full h-auto object-contain transition-transform duration-1000 group-hover:scale-105"
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-16 md:py-24 bg-gray-50 border-t border-gray-100",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-x max-w-7xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: { duration: .6 },
						className: "mb-12 flex flex-col items-center text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl md:text-4xl font-normal text-foreground uppercase tracking-tight mb-4",
							children: "Current Opportunities"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-20 h-1 bg-accent" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: {
							duration: .6,
							delay: .2
						},
						className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
						children: jobs.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground col-span-full text-center py-10",
							children: "No open positions at the moment."
						}) : jobs.map((job) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "group bg-white border border-gray-100 p-6 lg:p-8 flex flex-col justify-between hover:shadow-xl hover:border-accent/30 transition-all duration-300",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-10 h-[2px] bg-accent/50 mb-4 transition-all duration-300 group-hover:w-16 group-hover:bg-accent" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display font-semibold text-xl text-foreground mb-2 leading-tight",
										children: job.category
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-muted-foreground text-sm font-light",
										children: job.title
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => {
									setSelectedJob(job);
								},
								className: "w-full inline-flex items-center justify-center bg-transparent border border-accent text-accent px-5 py-3 text-xs font-bold tracking-widest uppercase transition-all hover:bg-accent hover:text-white",
								children: "Apply Now"
							})]
						}, job.id))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatWidget, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: selectedJob && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				exit: { opacity: 0 },
				onClick: () => {
					setSelectedJob(null);
					setApplySuccess(false);
				},
				className: "fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: { x: "100%" },
				animate: { x: 0 },
				exit: { x: "100%" },
				transition: {
					type: "spring",
					damping: 25,
					stiffness: 200
				},
				className: "fixed inset-y-0 right-0 z-50 w-full max-w-2xl bg-background border-l border-border p-8 md:p-12 overflow-y-auto",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => {
						setSelectedJob(null);
						setApplySuccess(false);
					},
					className: "absolute top-8 right-8 text-muted-foreground hover:text-foreground transition-colors p-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HugeiconsIcon, {
						icon: Cancel01Icon,
						className: "w-6 h-6"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-10 mt-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center gap-3 mb-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-semibold tracking-widest text-accent uppercase bg-accent/10 px-3 py-1.5",
									children: selectedJob.category
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-3xl md:text-4xl font-semibold text-foreground uppercase tracking-tight mb-6",
								children: selectedJob.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap gap-6 text-sm font-light text-muted-foreground border-y border-border py-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HugeiconsIcon, {
										icon: Location01Icon,
										className: "w-5 h-5"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: selectedJob.location })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HugeiconsIcon, {
										icon: Briefcase02Icon,
										className: "w-5 h-5"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: selectedJob.type })]
								})]
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-8 text-muted-foreground font-light leading-relaxed",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-foreground font-semibold uppercase tracking-wide mb-4",
									children: "About The Role"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: selectedJob.description })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-foreground font-semibold uppercase tracking-wide mb-4",
									children: "Key Responsibilities"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "list-disc list-outside ml-5 space-y-2",
									children: selectedJob.responsibilities?.map((req, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: req }, i))
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-foreground font-semibold uppercase tracking-wide mb-4",
									children: "Requirements"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "list-disc list-outside ml-5 space-y-2",
									children: selectedJob.requirements?.map((req, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: req }, i))
								})] })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 pt-8 border-t border-border",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => {
									setSelectedJob(null);
									setApplySuccess(false);
									setApplyingJob(selectedJob);
								},
								className: "w-full md:w-auto inline-flex items-center justify-center bg-accent text-white px-10 py-5 text-sm font-semibold tracking-widest uppercase transition-transform hover:-translate-y-1 hover:shadow-xl shadow-accent/20",
								children: "Submit CV"
							})
						})
					]
				})]
			})] }) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: !!applyingJob,
				onOpenChange: (open) => !open && setApplyingJob(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, {
					className: "max-w-4xl max-h-[90vh] overflow-y-auto bg-background p-0 border-border",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-6 md:p-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, {
							className: "mb-8",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
								className: "font-display text-2xl md:text-3xl font-semibold text-foreground uppercase tracking-tight",
								children: "Submit CV"
							})
						}), applySuccess ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-green-600 bg-green-50 p-6 font-medium border border-green-200 rounded-sm text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-xl mb-2 font-semibold",
									children: "Application Submitted"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Your application has been successfully submitted! We will be in touch soon." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setApplyingJob(null),
									className: "mt-6 px-8 py-3 bg-accent text-white font-semibold uppercase tracking-widest hover:bg-accent/90",
									children: "Close"
								})
							]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: handleApplySubmit,
							className: "space-y-10",
							children: [
								applyError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-red-500 bg-red-50 p-4 text-sm font-medium border border-red-200",
									children: applyError
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-lg font-semibold uppercase tracking-widest text-accent mb-6 border-b border-border pb-2",
									children: "1. Personal Information"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-1 md:grid-cols-2 gap-6",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "block text-sm uppercase tracking-wider font-semibold text-muted-foreground mb-2",
											children: "Full Name (As on ID) *"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											name: "fullName",
											required: true,
											className: "w-full p-3 bg-transparent border border-border focus:border-accent outline-none"
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "block text-sm uppercase tracking-wider font-semibold text-muted-foreground mb-2",
											children: "Date of Birth"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "date",
											name: "dob",
											className: "w-full p-3 bg-transparent border border-border focus:border-accent outline-none"
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "block text-sm uppercase tracking-wider font-semibold text-muted-foreground mb-2",
											children: "Gender"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											name: "gender",
											className: "w-full p-3 bg-transparent border border-border focus:border-accent outline-none",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "",
													children: "Select Gender"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "Male",
													children: "Male"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "Female",
													children: "Female"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "Other",
													children: "Other"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "Prefer not to say",
													children: "Prefer not to say"
												})
											]
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "block text-sm uppercase tracking-wider font-semibold text-muted-foreground mb-2",
											children: "Nationality"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											value: applicantNationality === "Nigeria" ? "Nigeria" : "Other",
											onChange: (e) => {
												setApplicantNationality(e.target.value);
												setApplicantState("");
												setApplicantLga("");
											},
											className: "w-full p-3 bg-transparent border border-border focus:border-accent outline-none",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "Nigeria",
												children: "Nigeria"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "Other",
												children: "Other"
											})]
										})] }),
										applicantNationality === "Nigeria" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "hidden",
												name: "nationality",
												value: "Nigeria"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "hidden",
												name: "stateOfOrigin",
												value: `${applicantState}${applicantLga ? ` - ${applicantLga}` : ""}`
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "block text-sm uppercase tracking-wider font-semibold text-muted-foreground mb-2",
												children: "State of Origin"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
												value: applicantState,
												onChange: (e) => {
													setApplicantState(e.target.value);
													setApplicantLga("");
												},
												className: "w-full p-3 bg-transparent border border-border focus:border-accent outline-none",
												required: true,
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "",
													children: "Select State"
												}), Object.keys(nigeriaStatesAndLGAs).map((state) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: state,
													children: state
												}, state))]
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "block text-sm uppercase tracking-wider font-semibold text-muted-foreground mb-2",
												children: "LGA of Origin"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
												value: applicantLga,
												onChange: (e) => setApplicantLga(e.target.value),
												className: "w-full p-3 bg-transparent border border-border focus:border-accent outline-none",
												required: true,
												disabled: !applicantState,
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "",
													children: "Select LGA"
												}), applicantState && nigeriaStatesAndLGAs[applicantState]?.map((lga) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: lga,
													children: lga
												}, lga))]
											})] })
										] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "block text-sm uppercase tracking-wider font-semibold text-muted-foreground mb-2",
											children: "Specify Nationality *"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											name: "nationality",
											value: applicantNationality === "Other" ? "" : applicantNationality,
											onChange: (e) => setApplicantNationality(e.target.value),
											className: "w-full p-3 bg-transparent border border-border focus:border-accent outline-none",
											required: true,
											placeholder: "e.g. Ghana"
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "md:col-span-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "block text-sm uppercase tracking-wider font-semibold text-muted-foreground mb-2",
												children: "State / Province / Region"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "text",
												name: "stateOfOrigin",
												value: applicantState,
												onChange: (e) => setApplicantState(e.target.value),
												className: "w-full p-3 bg-transparent border border-border focus:border-accent outline-none",
												required: true
											})]
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "block text-sm uppercase tracking-wider font-semibold text-muted-foreground mb-2",
											children: "Phone Number *"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "tel",
											name: "phone",
											required: true,
											className: "w-full p-3 bg-transparent border border-border focus:border-accent outline-none"
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "md:col-span-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "block text-sm uppercase tracking-wider font-semibold text-muted-foreground mb-2",
												children: "Email Address *"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "email",
												name: "email",
												required: true,
												className: "w-full p-3 bg-transparent border border-border focus:border-accent outline-none"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "md:col-span-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "block text-sm uppercase tracking-wider font-semibold text-muted-foreground mb-2",
												children: "Home Address"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "text",
												name: "homeAddress",
												className: "w-full p-3 bg-transparent border border-border focus:border-accent outline-none"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "block text-sm uppercase tracking-wider font-semibold text-muted-foreground mb-2",
											children: "Current Location (City/State)"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											name: "currentLocation",
											className: "w-full p-3 bg-transparent border border-border focus:border-accent outline-none"
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "block text-sm uppercase tracking-wider font-semibold text-muted-foreground mb-2",
											children: "Marital Status"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											name: "maritalStatus",
											className: "w-full p-3 bg-transparent border border-border focus:border-accent outline-none",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "",
													children: "Select Status"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "Single",
													children: "Single"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "Married",
													children: "Married"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "Divorced",
													children: "Divorced"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "Widowed",
													children: "Widowed"
												})
											]
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "block text-sm uppercase tracking-wider font-semibold text-muted-foreground mb-2",
											children: "Emergency Contact Name"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											name: "emergencyContactName",
											className: "w-full p-3 bg-transparent border border-border focus:border-accent outline-none"
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "block text-sm uppercase tracking-wider font-semibold text-muted-foreground mb-2",
											children: "Emergency Contact Phone"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "tel",
											name: "emergencyContactPhone",
											className: "w-full p-3 bg-transparent border border-border focus:border-accent outline-none"
										})] })
									]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-lg font-semibold uppercase tracking-widest text-accent mb-6 border-b border-border pb-2",
									children: "2. Education & Work Information"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-1 md:grid-cols-2 gap-6",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "block text-sm uppercase tracking-wider font-semibold text-muted-foreground mb-2",
											children: "Highest Qualification"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											name: "highestQualification",
											className: "w-full p-3 bg-transparent border border-border focus:border-accent outline-none",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "",
													children: "Select Qualification"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "PhD",
													children: "PhD"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "Master's Degree",
													children: "Master's Degree"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "Bachelor's Degree",
													children: "Bachelor's Degree"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "HND",
													children: "HND"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "OND/ND",
													children: "OND/ND"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "Diploma",
													children: "Diploma"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "SSCE/WAEC/NECO",
													children: "SSCE/WAEC/NECO"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "Other",
													children: "Other"
												})
											]
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "block text-sm uppercase tracking-wider font-semibold text-muted-foreground mb-2",
											children: "Institution Name"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											name: "institutionName",
											className: "w-full p-3 bg-transparent border border-border focus:border-accent outline-none"
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "block text-sm uppercase tracking-wider font-semibold text-muted-foreground mb-2",
											children: "Year of Graduation"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											name: "graduationYear",
											placeholder: "e.g. 2020",
											className: "w-full p-3 bg-transparent border border-border focus:border-accent outline-none"
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "block text-sm uppercase tracking-wider font-semibold text-muted-foreground mb-2",
											children: "Course of Study / Field"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											name: "courseOfStudy",
											className: "w-full p-3 bg-transparent border border-border focus:border-accent outline-none"
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "md:col-span-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "block text-sm uppercase tracking-wider font-semibold text-muted-foreground mb-2",
												children: "Professional Certifications"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
												name: "certifications",
												rows: 2,
												placeholder: "List any relevant certifications...",
												className: "w-full p-3 bg-transparent border border-border focus:border-accent outline-none"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "md:col-span-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "block text-sm uppercase tracking-wider font-semibold text-muted-foreground mb-2",
												children: "Work Experience"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
												name: "workExperience",
												rows: 4,
												placeholder: "Company, Role, Duration, Responsibilities...",
												className: "w-full p-3 bg-transparent border border-border focus:border-accent outline-none"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "md:col-span-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "block text-sm uppercase tracking-wider font-semibold text-muted-foreground mb-2",
												children: "Skills"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
												name: "skills",
												rows: 3,
												placeholder: "Technical skills, Languages, Software tools...",
												className: "w-full p-3 bg-transparent border border-border focus:border-accent outline-none"
											})]
										})
									]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-lg font-semibold uppercase tracking-widest text-accent mb-6 border-b border-border pb-2",
									children: "3. Upload CV"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-sm uppercase tracking-wider font-semibold text-muted-foreground mb-2",
									children: "CV / Resume (PDF, DOCX) *"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "file",
									name: "cv",
									accept: ".pdf,.doc,.docx",
									required: true,
									className: "w-full p-3 bg-transparent border border-border focus:border-accent outline-none file:mr-4 file:py-2 file:px-4 file:rounded-sm file:border-0 file:text-sm file:font-semibold file:bg-accent/10 file:text-accent hover:file:bg-accent/20 cursor-pointer"
								})] })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "pt-8 border-t border-border flex flex-col sm:flex-row justify-end gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setApplyingJob(null),
										className: "px-8 py-4 font-semibold uppercase tracking-widest border border-border hover:bg-muted/10 transition-colors",
										children: "Cancel"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "submit",
										disabled: isApplying,
										className: "bg-accent text-white px-10 py-4 font-semibold uppercase tracking-widest hover:bg-accent/90 transition-colors disabled:opacity-50 inline-flex items-center justify-center min-w-[200px]",
										children: isApplying ? "Submitting..." : "Submit Application"
									})]
								})
							]
						})]
					})
				})
			})
		]
	});
}
//#endregion
export { CareerPage as component };
