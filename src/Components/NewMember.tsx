import { useState } from "react";

class Employee {
  kadrovskiBroj: number;
  imeZaposlenog: string;
  fondSati: number;
  datumPocetka: string; // Use Date if you want stricter type checking
  datumZavrsetka: string; // Use Date if you want stricter type checking
  redovanRad: number;
  godisnjiOdmor: number;
  drzavniVerskiPraznik: number;
  placenoOdsustvo: number;
  bolovanjeDo30d: number;
  bolovanje100: number;
  bolovanjeNaTertFonda: number;
  porodiljskoOdsustvo: number;

  constructor(
    kadrovskiBroj: number,
    imeZaposlenog: string,
    fondSati: number,
    datumPocetka: string,
    datumZavrsetka: string,
    redovanRad: number,
    godisnjiOdmor: number,
    drzavniVerskiPraznik: number,
    placenoOdsustvo: number,
    bolovanjeDo30d: number,
    bolovanje100: number,
    bolovanjeNaTertFonda: number,
    porodiljskoOdsustvo: number
  ) {
    this.kadrovskiBroj = kadrovskiBroj;
    this.imeZaposlenog = imeZaposlenog;
    this.fondSati = fondSati;
    this.datumPocetka = datumPocetka;
    this.datumZavrsetka = datumZavrsetka;
    this.redovanRad = redovanRad;
    this.godisnjiOdmor = godisnjiOdmor;
    this.drzavniVerskiPraznik = drzavniVerskiPraznik;
    this.placenoOdsustvo = placenoOdsustvo;
    this.bolovanjeDo30d = bolovanjeDo30d;
    this.bolovanje100 = bolovanje100;
    this.bolovanjeNaTertFonda = bolovanjeNaTertFonda;
    this.porodiljskoOdsustvo = porodiljskoOdsustvo;
  }
}

export default function NewMember() {
  const [name, setName] = useState<string>("");

  return (
    <div className="absolute inset-0 bg-slate-500/90 flex justify-center items-center flex-col p-4 backdrop-blur-sm">
      <div className="w-[35%] h-[85%] bg-gradient-to-br from-blue-700 to-slate-800 flex flex-col p-1 items-center shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] rounded-lg">
        <button
          className="text-red-500 text-3xl w-fit self-end py-1 px-2 rounded-lg"
          type="button"
          // onClick={() => setToggleForm((prev) => !prev)}
        >
          &#x2715;
        </button>

        <h1 className="text-5xl font-bold text-white">FORM</h1>

        <div className="h-max w-full">
          <form>
            <label className="flex gap-2 justify-start">
              IME:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>

            <label className="flex gap-2 justify-start">
              PREZIME
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          </form>
        </div>
      </div>
    </div>
  );
}
