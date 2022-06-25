// const number = 12345
//
// const explode = (number) => {
//     let arr = number.toString().split('')
//     console.log(arr)
//     let res = ''
//     for (let i = 0; i < arr.length; i++) {
//         res += arr[i].repeat(arr[i])
//     } return res
// }
//
// console.log(explode(number))

const url = 'https://app.rs.school?mentorId=5&studentName=ivanivanov&hasPassed=true'

// const parseQuery = (url) => {
//     let arr = url.split('?')[1].split('&').map(item => item.split('='))
//     let obj = {}
//     for (let i = 0; i < arr.length; i++) {
//         obj[arr[i][0]] = arr[i][1]
//     }
//     return obj
// }



const  parseQuery  =  (url)  =>  {
    const  queries  =  url.substring(url.indexOf("?")  +  1).split("&");
    const  result  =  {};
    queries.forEach((query)  =>  {
        const [name, value] =  query.split("=");
        result[name]  =  value;
        console.log(result)
    });
    return  result;
};

console.log(parseQuery(url))