class Complex{
    constructor(a, b){
        this.a = a;
        this.b = b;
    }

    add(complex){
        this.a += complex.a;
        this.b += complex.b;
    }
    sub(complex){
        this.a -= complex.a;
        this.b -= complex.b;
    }
    set(a, b){
        this.a = a;
        this.b = b;
    }
    multiplyCMP(complex){
        let real, im;

        real = (this.a*complex.a) -(this.b* complex.b)
        im = (this.a*complex.b) +(this.b * complex.a);
        
        return new Complex(real, im);
    }
    multiplylmbd(lambda){
        this.a*=lambda;
        this.b*=lambda;
    }
    
    getRe(){
        return this.a;
    }
    getIm(){
        return this.b;
    }

    abs(){
        return Math.sqrt((this.a*this.a) +(this.b*this.b));
    }

    konjugated(){
        return new complex(this.a, -this.b);
    }
}


class Fourier{
    constructor(){
        this.complexnumbers = new Array();
    }
    writeImagetoComplex(canvascontent){
        let array = new Array();
        console.log(canvascontent);
        canvascontent.data.forEach((element)=>{
            array.push(new Complex(element, 0));
            
        })
        this.complexnumbers = array;
    }

    transform(forward, nums=this.complexnumbers){
        let transformednumbers = new Array();

        let N = this.complexnumbers.length;
        let factor = (1/Math.sqrt(N));
        for(let n = 0; n<N; n++){
            let complex = new Complex(0.0,0.0);
            for(let k = 0; k<N; k++){
                let c =  new Complex(0.0,0.0);
                if(forward==true){
                    let phi =(-2.0 * Math.PI * k * n)/N;
                    c.a = Math.cos(phi);
                    c.b = Math.sin(phi);
                    complex.add(nums[k].multiplyCMP(c));
                }else{
                    let phi =(2.0 * Math.PI * k * n)/N;
                    c.a = Math.cos(phi);
                    c.b = Math.sin(phi);
                    complex.add(nums[k].multiplyCMP(c));
                }
                
            }
            complex.multiplylmbd(factor);
            transformednumbers.push(complex);
        }
        return transformednumbers;
    }
}

