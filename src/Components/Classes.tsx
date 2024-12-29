export class Employee {
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
