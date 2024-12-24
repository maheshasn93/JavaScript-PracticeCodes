
const s1 = {
    Name : 'mahesha',
    Age: 24,
    fees_Paid : 3400.78,
    work_Experience: {
        ABC : '3 Months',
        XYZ : '2 Months',
    },
    Marks: {
        Maths: 45,
        Science: 56
    },
    Percentage : ['Sem-I : 84', 'Sem-II : 86', 'Sem-III : 88'],
    performance: () => console.log('Good'),
}

console.log(s1.Marks);
console.log(s1.Name + " : "+s1.Percentage[2]);