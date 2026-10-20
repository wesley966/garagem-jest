
export class Car {
 
  protected brand: string;
  protected model: string;
  protected year: number;
  protected stored: boolean;

 
  constructor(brand: string, model: string, year: number, stored: boolean = false) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.stored = stored = false;
  }

  // Métodos getters
  public getBrand(): string {
    return this.brand;
  }

  public getModel(): string {
    return this.model;
  }

  public getYear(): number {
    return this.year;
  }
  public getStored(): boolean {
    return this.stored;
  }

  // Métodos setters
  public setBrand(brand: string): void {
    this.brand = brand;
  }

  public setModel(model: string): void {
    this.model = model;
  }

  public setYear(year: number): void {
    if (year > 1885) { // primeiro carro foi criado em 1886
      this.year = year;
    } else {
      throw new Error("Ano inválido para um carro.");
    }
  }

  // Método auxiliar para exibir informações
  public getInfo(): string {
    return `${this.brand} ${this.model} (${this.year})`;
  }

  public setStored(stored: boolean): void {
    this.stored = stored;
  }
}

