let x,z,y;

x=Number(prompt("enter your first number :"));
y=String(prompt("enter your operation '+' '-' '/' '*' :"));
z=Number(prompt("enter your sec number :"));


if (y=="+"){
    console.log(x+z);
}

if (y=="-"){
    console.log(x-z);
}


if (y=="*"){
    console.log(x*z);

}


if (y=="/"){
    console.log(x/z);
}