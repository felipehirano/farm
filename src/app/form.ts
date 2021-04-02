export class Form {
  static valid: any;

  constructor(
    public name: string,
    public area: any,
  ) {  }

}

export class FormTalhao {
  static valid: any;

  constructor(
    public area: any,
    public qtdProdutos: any,
    public produtividade: any,
  ) {  }

}
