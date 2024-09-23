export interface signUp{
    name: string;
    email: string;
    password: string;
}

export interface login{
    email: string;
    password: string;
}

export interface product{
    id: string;
    productName: string;
    price: number;
    category: string;
    productImageUrl: string;
    productDescription: string;
    productColor: string;
}
// productName: ['', [Validators.required, Validators.minLength(3)]],
// price: ['', [Validators.required, Validators.pattern(/^[0-9]*$/)]],
// category: ['', Validators.required],
// productColor: ['', Validators.required],
// productDescription: ['', [Validators.required, Validators.minLength(10)]],
// productImageUrl