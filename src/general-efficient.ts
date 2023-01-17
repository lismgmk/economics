export class GeneralEfficient {
  private pYearBasic: number;
  private pYearProject: number;
  private specificConsumerCoastBasic: number;
  private specificConsumerCoastProject: number;
  private carCoastBasic: number;
  private carCoastProject: number;

  increaseYearProj = 0;
  efficientYear = 0;

  constructor(
    pYearBasic: number,
    pYearProject: number,
    specificConsumerCoastBasic: number,
    specificConsumerCoastProject: number,
    carCoastBasic: number,
    carCoastProject: number
  ) {
    this.pYearBasic = pYearBasic;
    this.pYearProject = pYearProject;
    this.specificConsumerCoastBasic = specificConsumerCoastBasic;
    this.specificConsumerCoastProject = specificConsumerCoastProject;
    this.carCoastBasic = carCoastBasic;
    this.carCoastProject = carCoastProject;
  }

  setSpecialInvest() {
    this.increaseYearProj =
      (this.pYearProject - this.pYearBasic) / this.pYearBasic;
    console.log("Годовой прирост производительности", this.increaseYearProj);
    this.efficientYear =
      (this.specificConsumerCoastBasic - this.specificConsumerCoastProject) *
      this.pYearProject;
    console.log("Годовой экономический эффект", this.efficientYear);
    const term =
      (this.carCoastProject - this.carCoastBasic) / this.efficientYear;
    console.log("Годовой экономический эффект", term);
    const coefTerm = 1 / term;
    console.log(
      "Коэффициент сравнительной экономической эффективности",
      coefTerm
    );
  }
}
