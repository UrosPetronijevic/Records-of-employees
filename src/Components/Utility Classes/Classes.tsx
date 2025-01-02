export class Employee {
  kadrovskiBroj: number;
  imeZaposlenog: string;
  prezimeZaposlenog: string;
  fondSati: number;
  datumPocetka: Date;
  datumZavrsetka: Date;
  redovanRad: number;
  godisnjiOdmor: number;
  drzavniVerskiPraznik: number;
  placenoOdsustvo: number;
  bolovanjeDo30d: number;
  bolovanje100: number;
  bolovanjeNaTertFonda: number;
  porodiljskoOdsustvo: number;

  constructor(
    kadrovskiBroj: number | any,
    imeZaposlenog: string,
    prezimeZaposlenog: string,
    fondSati: number,
    redovanRad: number,
    godisnjiOdmor: number,
    drzavniVerskiPraznik: number,
    placenoOdsustvo: number,
    bolovanjeDo30d: number,
    bolovanje100: number,
    bolovanjeNaTertFonda: number,
    porodiljskoOdsustvo: number
  ) {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();

    this.kadrovskiBroj = kadrovskiBroj;
    this.imeZaposlenog = imeZaposlenog;
    this.prezimeZaposlenog = prezimeZaposlenog;
    this.fondSati = fondSati;
    this.datumPocetka = new Date(year, month, 1);
    this.datumZavrsetka = new Date(year, month + 1, 0);
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

//////////////////////////////////////////////////////////////////////////////////////////////////////////

export class AbsenceType {
  type: string;
  setFunc: React.Dispatch<React.SetStateAction<number[]>>;
  color: string;
  days: number[]; // Array of numbers to track selected days

  constructor(
    type: string,
    setFunc: React.Dispatch<React.SetStateAction<number[]>>,
    color: string,
    days: number[] // Pass the array of days directly
  ) {
    this.type = type;
    this.setFunc = setFunc;
    this.color = color;
    this.days = days;
  }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////

export class DoublyLinkedList {}
