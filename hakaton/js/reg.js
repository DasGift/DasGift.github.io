// function register() {
//     let responseJson =
//     {
//         "Login":"AAAA",
//         "Password":"123",
//         "OrganisationName":"ABC",
//         "PhoneNumber":"89466316",
//         "Email":"MAil.ad@da.f",
//         "INN":"5641654545",
//         "OGRN":"dajhgafgfg",
//         "JurAddress":"aAFhfagfh",
//         "FactAddress":"AAFAGac",
//         "PaymentAccount":"jabfjhfba",
//         "BIK":"AFFafa85f74a5f4a4f",
//         "DirectorName":"Vaya"
//     };
//     return fetch(`http://192.168.43.2:5000/api/org/register`, {
//         method: 'post',
//         mode: 'no-cors',
//         credentials: "same-origin",
//         headers: {
//             'Access-Control-Allow-Origin':'*',
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(responseJson)
//     }).then((response) => console.log(response))
// };
//
// register();

// (async () => {
//     const rawResponse = await fetch('http://192.168.43.2:5000/api/test/test', {
//         method: 'GET',
//         mode: 'no-cors',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         }
//     }).then(res => console.log(res.json()))
//         .then(response => console.log(response))
// })();