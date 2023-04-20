class Display{
    constructor(displayNumAnterior, displayNumActual){
        this.displayNumAnterior = displayNumAnterior;
        this.displayNumActual = displayNumActual;
        this.calculadora = new calculator();
        this.typeOfOperation = undefined;
        this.valorActual = '';
        this.valorAnterior = '';
        this.signos = {
            sumar: '+',
            restar: '-',
            multiplicar: 'x',
            dividir: '/',
            porcentaje: '%'
        };
    }

    showValor(){
        this.displayNumActual.textContent = this.valorActual;
        this.displayNumAnterior.textContent = `${this.valorAnterior} ${this.signos[this.typeOfOperation] || ''}`;
    }

    addNumber(num){
        if(num === '.' && this.valorActual.includes('.')){return}
        this.valorActual = this.valorActual.toString() + num.toString();
        this.showValor();
    }
    
    deleteNumber(){
        this.valorActual = this.valorActual.toString().slice(0,-1);
        this.showValor(); 
    }

    clearAll(){
        this.valorActual = '';
        this.valorAnterior = '';
        this.typeOfOperation = undefined;
        this.showValor();
    }
    computar(tipo){
        this.typeOfOperation !== 'igual' && this.calculate();
        this.typeOfOperation = tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual = '';
        this.showValor();
    }
    

    calculate(){
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);

        if( isNaN(valorActual) || isNaN(valorAnterior)){return}
        this.valorActual = this.calculadora[this.typeOfOperation](valorAnterior, valorActual); 
    }

}