let wynik = document.getElementById("input")
let a1 = document.getElementById("1") 
let a2 = document.getElementById("2")
let a3 = document.getElementById("3")
let a4 = document.getElementById("4")
let a5 = document.getElementById("5")
let a6 = document.getElementById("6")
let a7 = document.getElementById("7")
let a8 = document.getElementById("8")
let a9 = document.getElementById("9")
let a0 = document.getElementById("zero")

let add = document.getElementById("+")
let subtract = document.getElementById("-")
let multiple = document.getElementById("*")
let AC = document.getElementById("reset")
let divide = document.getElementById("/")
let per = document.getElementById(".")
let compute = document.getElementById("=")
let clear = document.getElementById("AC")

let outcome = Number(0);
let i = 0;

a1.onclick = function()
{
    i++
    if(i == 1)
    {
        outcome = String(1)  
    }
    else 
    {
        outcome += String(1)
    }
    wynik.textContent = outcome
}
a2.onclick = function()
{
    i++
    if(i == 1)
    {
        outcome = String(2)  
    }
    else 
    {
        outcome += String(2)
    }
    wynik.textContent = outcome
}
a3.onclick = function()
{
    i++
    if(i == 1)
    {
        outcome = String(3)  
    }
    else 
    {
        outcome += String(3)
    }
    wynik.textContent = outcome
}
a4.onclick = function()
{
    i++
    if(i == 1)
    {
        outcome = String(4)  
    }
    else 
    {
        outcome += String(4)
    }
    wynik.textContent = outcome
}
a5.onclick = function()
{
    i++
    if(i == 1)
    {
        outcome = String(5)  
    }
    else 
    {
        outcome += String(5)
    }
    wynik.textContent = outcome
}
a6.onclick = function()
{
    i++
    if(i == 1)
    {
        outcome = String(6)  
    }
    else 
    {
        outcome += String(6)
    }
    wynik.textContent = outcome
}
a7.onclick = function()
{
    i++
    if(i == 1)
    {
        outcome = String(7)  
    }
    else 
    {
        outcome += String(7)
    }
    wynik.textContent = outcome
}
a8.onclick = function()
{
    i++
    if(i == 1)
    {
        outcome = String(8)
    }
    else 
    {
        outcome += String(8)
    }
    wynik.textContent = outcome
}
a9.onclick = function()
{
    i++
    if(i == 1)
    {
        outcome = String(9)  
    }
    else 
    {
        outcome += String(9)
    }
    wynik.textContent = outcome
}
a0.onclick = function()
{
    i++
    if(i == 1)
    {
        outcome = String(0)  
    }
    else 
    {
        outcome += String(0)
    }
    wynik.textContent = outcome
}
add.onclick = function()
{
    i++
    if(i == 1)
    {
        outcome = String("+")  
    }
    else 
    {
        outcome += String("+")
    }
    wynik.textContent = outcome
}
subtract.onclick = function()
{
    i++
    if(i == 1)
    {
        outcome = String("-")  
    }
    else 
    {
        outcome += String("-")
    }
    wynik.textContent = outcome
}
multiple.onclick = function()
{
    i++
    if(i == 1)
    {
        outcome = String("*")  
    }
    else 
    {
        outcome += String("*")
    }
    wynik.textContent = outcome
}
divide.onclick = function()
{
    i++
    if(i == 1)
    {
        outcome = String("/")  
    }
    else 
    {
        outcome += String("/")
    }
    wynik.textContent = outcome
}
per.onclick = function()
{
    i++
    if(i == 1)
    {
        outcome = String(".")  
    }
    else 
    {
        outcome += String(".")
    }
    wynik.textContent = outcome
}

AC.onclick = function()
{
    outcome = ""
    wynik.textContent = outcome;
}

compute.onclick = function()
{
eval(outcome)
wynik.textContent = eval(outcome)
outcome = ""
}
clear.onclick = function()
{
    outcome = ""
    wynik.textContent = outcome
    i = 0
}