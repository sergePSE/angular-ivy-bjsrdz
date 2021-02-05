import { AfterViewInit, Component } from "@angular/core";
import { ColDef, GridOptions } from "ag-grid-community";
import { TextRendererComponent } from "./text-renderer/text-renderer.component";
import { TextEditorComponent } from "./text-editor/text-editor.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements AfterViewInit {
  title = "anew-app";

  columnDefs = [
    {
      field: "id",
      editable: true,
      cellRenderer: "textRenderer",
      cellEditor: "textEditor"
    },
    {
      field: "first_name",
      editable: true,
      cellRenderer: "textRenderer",
      cellEditor: "textEditor"
    },
    {
      field: "last_name",
      editable: true,
      cellRenderer: "textRenderer",
      cellEditor: "textEditor"
    },
    {
      field: "email",
      editable: true,
      cellRenderer: "textRenderer",
      cellEditor: "textEditor"
    },
    {
      field: "gender",
      editable: true,
      cellRenderer: "textRenderer",
      cellEditor: "textEditor"
    },
    {
      field: "ip_address",
      editable: true,
      cellRenderer: "textRenderer",
      cellEditor: "textEditor"
    }
  ] as ColDef[];

  rowData = [
    {
      id: 1,
      first_name: "Daron",
      last_name: "Jillis",
      email: "djillis0@economist.com",
      gender: "Genderqueer",
      ip_address: "135.12.246.194"
    },
    {
      id: 2,
      first_name: "Raynell",
      last_name: "Wingar",
      email: "rwingar1@shareasale.com",
      gender: "Polygender",
      ip_address: "18.56.254.15"
    },
    {
      id: 3,
      first_name: "Julius",
      last_name: "Crisp",
      email: "jcrisp2@gnu.org",
      gender: "Bigender",
      ip_address: "23.192.58.97"
    },
    {
      id: 4,
      first_name: "Chicky",
      last_name: "Wear",
      email: "cwear3@blinklist.com",
      gender: "Agender",
      ip_address: "18.18.58.28"
    },
    {
      id: 5,
      first_name: "Felizio",
      last_name: "Bassingden",
      email: "fbassingden4@nymag.com",
      gender: "Genderfluid",
      ip_address: "245.157.87.160"
    },
    {
      id: 6,
      first_name: "Delmore",
      last_name: "Lamonby",
      email: "dlamonby5@uol.com.br",
      gender: "Agender",
      ip_address: "60.21.232.245"
    },
    {
      id: 7,
      first_name: "Beret",
      last_name: "Quade",
      email: "bquade6@unblog.fr",
      gender: "Non-binary",
      ip_address: "28.6.80.224"
    },
    {
      id: 8,
      first_name: "Silvana",
      last_name: "Elliff",
      email: "selliff7@irs.gov",
      gender: "Agender",
      ip_address: "169.206.206.246"
    },
    {
      id: 9,
      first_name: "Tani",
      last_name: "Lambart",
      email: "tlambart8@craigslist.org",
      gender: "Genderqueer",
      ip_address: "167.37.253.122"
    },
    {
      id: 10,
      first_name: "Moina",
      last_name: "Felix",
      email: "mfelix9@icio.us",
      gender: "Genderfluid",
      ip_address: "173.35.215.46"
    },
    {
      id: 11,
      first_name: "Ilise",
      last_name: "Caron",
      email: "icarona@furl.net",
      gender: "Polygender",
      ip_address: "124.250.149.219"
    },
    {
      id: 12,
      first_name: "Becki",
      last_name: "Melan",
      email: "bmelanb@spotify.com",
      gender: "Agender",
      ip_address: "199.98.217.212"
    },
    {
      id: 13,
      first_name: "Herold",
      last_name: "Tutchener",
      email: "htutchenerc@ask.com",
      gender: "Male",
      ip_address: "166.211.239.253"
    },
    {
      id: 14,
      first_name: "Shayne",
      last_name: "Sunley",
      email: "ssunleyd@upenn.edu",
      gender: "Genderqueer",
      ip_address: "213.30.137.198"
    },
    {
      id: 15,
      first_name: "Amil",
      last_name: "De Malchar",
      email: "ademalchare@ucsd.edu",
      gender: "Female",
      ip_address: "115.201.58.176"
    },
    {
      id: 16,
      first_name: "Erick",
      last_name: "Crone",
      email: "ecronef@nationalgeographic.com",
      gender: "Polygender",
      ip_address: "67.175.78.176"
    },
    {
      id: 17,
      first_name: "Megan",
      last_name: "MacQuaker",
      email: "mmacquakerg@oracle.com",
      gender: "Bigender",
      ip_address: "140.210.61.234"
    },
    {
      id: 18,
      first_name: "Kameko",
      last_name: "Hogbourne",
      email: "khogbourneh@163.com",
      gender: "Agender",
      ip_address: "179.56.84.15"
    },
    {
      id: 19,
      first_name: "Noelle",
      last_name: "Southall",
      email: "nsouthalli@bravesites.com",
      gender: "Female",
      ip_address: "195.77.123.47"
    },
    {
      id: 20,
      first_name: "Ardelis",
      last_name: "Esome",
      email: "aesomej@nasa.gov",
      gender: "Genderqueer",
      ip_address: "7.200.241.211"
    },
    {
      id: 21,
      first_name: "Solomon",
      last_name: "Putten",
      email: "sputtenk@ucoz.com",
      gender: "Non-binary",
      ip_address: "27.7.35.46"
    },
    {
      id: 22,
      first_name: "Skell",
      last_name: "Gregoraci",
      email: "sgregoracil@nasa.gov",
      gender: "Polygender",
      ip_address: "120.48.82.113"
    },
    {
      id: 23,
      first_name: "Lothario",
      last_name: "Featherstonhalgh",
      email: "lfeatherstonhalghm@blogtalkradio.com",
      gender: "Female",
      ip_address: "134.161.55.227"
    },
    {
      id: 24,
      first_name: "Charissa",
      last_name: "Bordes",
      email: "cbordesn@dailymotion.com",
      gender: "Male",
      ip_address: "116.249.19.67"
    },
    {
      id: 25,
      first_name: "Jud",
      last_name: "Stokes",
      email: "jstokeso@unicef.org",
      gender: "Male",
      ip_address: "205.114.173.161"
    },
    {
      id: 26,
      first_name: "Ysabel",
      last_name: "Fridd",
      email: "yfriddp@ezinearticles.com",
      gender: "Non-binary",
      ip_address: "68.239.193.87"
    },
    {
      id: 27,
      first_name: "Muire",
      last_name: "Gorgler",
      email: "mgorglerq@dmoz.org",
      gender: "Agender",
      ip_address: "40.144.149.181"
    },
    {
      id: 28,
      first_name: "Gherardo",
      last_name: "Gladbeck",
      email: "ggladbeckr@newyorker.com",
      gender: "Genderfluid",
      ip_address: "60.234.161.16"
    },
    {
      id: 29,
      first_name: "Dyan",
      last_name: "Barwood",
      email: "dbarwoods@irs.gov",
      gender: "Genderqueer",
      ip_address: "184.242.197.30"
    },
    {
      id: 30,
      first_name: "Nickie",
      last_name: "Erington",
      email: "neringtont@bloglines.com",
      gender: "Male",
      ip_address: "95.106.208.242"
    },
    {
      id: 31,
      first_name: "Nathanial",
      last_name: "Blomfield",
      email: "nblomfieldu@multiply.com",
      gender: "Genderfluid",
      ip_address: "203.235.207.190"
    },
    {
      id: 32,
      first_name: "Rowe",
      last_name: "Yearns",
      email: "ryearnsv@timesonline.co.uk",
      gender: "Agender",
      ip_address: "70.68.30.114"
    },
    {
      id: 33,
      first_name: "Allin",
      last_name: "Crevagh",
      email: "acrevaghw@nbcnews.com",
      gender: "Non-binary",
      ip_address: "232.239.164.253"
    },
    {
      id: 34,
      first_name: "Blane",
      last_name: "Chettle",
      email: "bchettlex@xing.com",
      gender: "Female",
      ip_address: "195.72.28.213"
    },
    {
      id: 35,
      first_name: "Brooks",
      last_name: "Beaman",
      email: "bbeamany@dmoz.org",
      gender: "Genderfluid",
      ip_address: "189.113.4.31"
    },
    {
      id: 36,
      first_name: "Peria",
      last_name: "Bunstone",
      email: "pbunstonez@diigo.com",
      gender: "Agender",
      ip_address: "194.3.39.81"
    },
    {
      id: 37,
      first_name: "Janith",
      last_name: "Wimpeney",
      email: "jwimpeney10@e-recht24.de",
      gender: "Genderqueer",
      ip_address: "13.226.138.233"
    },
    {
      id: 38,
      first_name: "Clywd",
      last_name: "Mewha",
      email: "cmewha11@discovery.com",
      gender: "Bigender",
      ip_address: "148.84.53.70"
    },
    {
      id: 39,
      first_name: "Nikkie",
      last_name: "Gunstone",
      email: "ngunstone12@ow.ly",
      gender: "Non-binary",
      ip_address: "198.179.203.173"
    },
    {
      id: 40,
      first_name: "Phylys",
      last_name: "Hawkshaw",
      email: "phawkshaw13@examiner.com",
      gender: "Bigender",
      ip_address: "6.176.193.129"
    },
    {
      id: 41,
      first_name: "Dag",
      last_name: "Dewicke",
      email: "ddewicke14@cnbc.com",
      gender: "Agender",
      ip_address: "199.7.132.231"
    },
    {
      id: 42,
      first_name: "Thaddeus",
      last_name: "Haruard",
      email: "tharuard15@oaic.gov.au",
      gender: "Bigender",
      ip_address: "35.133.137.223"
    },
    {
      id: 43,
      first_name: "Dalenna",
      last_name: "Bruckshaw",
      email: "dbruckshaw16@weebly.com",
      gender: "Female",
      ip_address: "31.151.196.28"
    },
    {
      id: 44,
      first_name: "Gan",
      last_name: "Tarney",
      email: "gtarney17@jiathis.com",
      gender: "Bigender",
      ip_address: "249.103.41.64"
    },
    {
      id: 45,
      first_name: "Blithe",
      last_name: "Bennis",
      email: "bbennis18@flickr.com",
      gender: "Male",
      ip_address: "242.206.231.204"
    },
    {
      id: 46,
      first_name: "Helenka",
      last_name: "Inchbald",
      email: "hinchbald19@mapquest.com",
      gender: "Agender",
      ip_address: "38.254.39.123"
    },
    {
      id: 47,
      first_name: "Timothee",
      last_name: "Grishaev",
      email: "tgrishaev1a@mlb.com",
      gender: "Genderqueer",
      ip_address: "85.232.45.243"
    },
    {
      id: 48,
      first_name: "Veriee",
      last_name: "Kelloway",
      email: "vkelloway1b@shop-pro.jp",
      gender: "Non-binary",
      ip_address: "52.215.42.154"
    },
    {
      id: 49,
      first_name: "Dermot",
      last_name: "Bayle",
      email: "dbayle1c@bloglines.com",
      gender: "Genderqueer",
      ip_address: "232.56.29.59"
    },
    {
      id: 50,
      first_name: "Kilian",
      last_name: "Godfree",
      email: "kgodfree1d@theatlantic.com",
      gender: "Male",
      ip_address: "153.52.27.20"
    }
  ];

  frameworkComponents = {
    textRenderer: TextRendererComponent,
    textEditor: TextEditorComponent
  };

  gridOptions: GridOptions = {
    columnDefs: this.columnDefs,
    rowSelection: "single",
    pagination: false,
    animateRows: true,
    editType: "fullRow",
    singleClickEdit: true,
    stopEditingWhenGridLosesFocus: true,
    rowDragManaged: true,
    suppressRowTransform: true,
    frameworkComponents: this.frameworkComponents
  };

  ngAfterViewInit(): void {
    setTimeout(() => {
      console.log("bablaba");
      // tslint:disable-next-line:no-debugger
      // debugger;
      const a = 20;
    }, 10000);
  }
}
