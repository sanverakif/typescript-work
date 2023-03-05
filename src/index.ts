let a: any = "u";
a = 5;

let isim = {
  name: "akif",
  soyad: "sanver",
};

let isim2: {
  name: string;
  soyad: string;
};

//array
let diz: (string | number)[] = [];
diz.push(25);
diz.push("ieuuieiue");
console.log(diz);
let dizi = [] as string[];
let dizi2: string[] = [];
let dizi3: Array<string> = [];

const myDizi: [string, string, number] = ["uieuei", "uieuie", 10]; //tuple

// function F(): [number, string] {
//   return [25, "u"];
// }

// let f = F();

//tip destekli fonksiyon
// function Person(name: string, soyad: string, yas: number) {
//   console.log({ name, soyad, yas });
// }
// Person("akif", "soyad", 12);

// function Person(parametreler: {
//   name: string;
//   surName: string;
//   age: string;
// }): Promise<number | string> {
//   return new Promise((resolve, reject) => {
//     resolve(25);
//     resolve("uieuie");
//   });
// }

// Person({ name: "akif", surName: "emre", age: "19" });

function NameRestart(name: string, tekrar: number): void {
  for (let i = 0; i < tekrar; i++) {
    console.log(name);
  }
}

NameRestart("emre", 20);
